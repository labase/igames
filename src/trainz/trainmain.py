#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Trains - A play train game set
############################################################

:Author: *Carlo E. T. Oliveira*
:Contact: carlo@nce.ufrj.br
:Date: $Date: 2011/08/04  $
:Status: This is a "work in progress"
:Revision: $Revision: 0.1 $
:Home: `Labase <http://labase.nce.ufrj.br/>`__
:Copyright: ©2011, `GPL <http://is.gd/3Udt>`__. 
"""
__author__  = "Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $"
__version__ = "0.1 $Revision$"[10:-1]
__date__    = "2011/08/04 $Date$"

from pyjamas.ui.RootPanel   import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui import KeyboardListener as KL
from __pyjamas__ import JS
#from raphael import Raphael
from pyjamas.raphael.raphael import Raphael,DOCK_CONNECTION
from pyjamas.JSONParser import JSONParser as j_p
from pyjamas.Window import alert
from pyjamas import DOM
from train import Trains

IMAGEREPO = 'image/'
IMAGEREPO = '/static/app/image/'
COLOR={'forest green':'#228B22' , 'navajo white':'#FFDFB0'}
class KB:
    KEY_INSERT,KEY_DELETE,KEY_Z,KEY_X=45,46,0,0
class TECLA: 
    ACIMA=111
    ABAIXO=116
    DIREITA=114
    ESQUERDA=113

    BRANCO=65
    ENTER=36
    SOBE=112
    DESCE=117
    EMPURRA=97
    PUXA=103
class Empacotador:
    CAMADA = {}
    Z=10
    def __init__(self, canvas, source, x, y ,w , h, l = None):
        self.canvas = canvas
        self.name = source
        self.image = canvas.image(IMAGEREPO+source,x,y,w,h)
        self.rect = self.image.getBBox()
        self.camada = z = l or y
        if z > 0:
            self.add(self.camada)
            self.reorder()
    def add(self, camada):
        if camada not in Empacotador.CAMADA:
            Empacotador.CAMADA[camada] = [self]
        else:
            Empacotador.CAMADA[camada].append(self)
        
        
    def reorder(self):
        cmd = Empacotador.CAMADA
        NOUSE = [img.image.toFront() for it in sorted(cmd.keys())
                 for img in cmd[it]]
    def remove(self):
        Empacotador.CAMADA[self.camada].remove(self)
    def position(self):
        return self.image.getBBox()['x'], self.image.getBBox()['y']
    def move(self,x,y):
        ox, oy = self.position()
        self.image.translate(x-ox,y-oy)
    def pos(self):
        return self.image.getBBox()['x'], self.image.getBBox()['y']
    def translate(self,x,y):
        self.image.translate(x,y)
    def translatez(self,x,y):
        self.image.translate(x,y)
        ox, oy = self.pos()
        Empacotador.CAMADA[self.camada].remove(self)
        self.camada = oy
        self.add(oy)
        self.reorder()
    def __eq__(self,other):
        self.canvas.text(50,Empacotador.Z,'%s = %s'%(self.name,other.name))
        Empacotador.Z+=10
        return self.name == other.name

class MainTrain(SimplePanel):
    Z=10
    """ O pátio de movimentação de vagões
    """
    def __init__(self):
        """ Standard initialiser.
        """
        SimplePanel.__init__(self)
        self.canvas = Raphael(800,700)
        self.rr = self.rect(0,0,800,600,'forest green')
        self.tt = self.text(400,100,"Manobrando o Trem")
        self.add(self.canvas)
        self.LIDADOR = {KL.KEY_DOWN: self.Down,KL.KEY_END: self.End,
                   KL.KEY_ENTER: self.Return, KL.KEY_HOME: self.Home,
                   KL.KEY_LEFT: self.Left,KL.KEY_PAGEDOWN: self.Next,
                   KL.KEY_PAGEUP: self.Prior,KL.KEY_RIGHT: self.Right,
                   KB.KEY_DELETE: self.Prior,KB.KEY_INSERT: self.Next,
                   KL.KEY_UP: self.Up, ' ':self.space}
        
        jshandler=getattr(self, "lidador_de_tecla")
        JS("""$doc.onkeypress=jshandler;""")
    def _inicia(self,game):
        self.game = game
    def text(self,x,y,texto,color='navajo white'):
        t = self.canvas.text(x,y,texto)
        t.setAttrs({'fill':COLOR[color],'stroke':COLOR[color],'font-size':'16'})
        return t
    def rect(self,x,y,dx,dy,color):
        r = self.canvas.rect(x,y,dx-x,dy-y)
        r.setAttrs({'fill':COLOR[color],'stroke':COLOR[color]})
        return r
    def image(self,glyph,x,y,dx,dy, l=None):
        return Empacotador(self.canvas,glyph,x,y,dx,dy, l)
    def score(self,score):
        score =  str(score) #j_p.encode(score)
        DOM.setAttribute(self.scored,"value",score)
        return score
    def inicia(self):
        global IMAGEREPO
        f = DOM.getElementById('mainform')
        x = DOM.getChild(f,0).value #DOM.getElementByName('_xsrf').value
        g = DOM.getChild(f,1).value
        self.scored = DOM.getChild(f,2)
        if g == '12de6b622cbfe4d8f5c8d3347e56ae8c': IMAGEREPO = 'image/'
        #alert('cookie: '+ x + '\ngame: ' + g + '\nscore: ' + s)
        self.game = Trains()
        #alert('cookie: '+ str(self.game))
        self.game.inicia(self)
        self.score(self.game.track.score)
        
        
        pass

    def lidador_de_tecla(self, evento):
        if evento.keyCode in self.LIDADOR:
            #self.text(50,MainTrain.Z,str(evento.keyCode))
            #MainTrain.Z +=10
            self.LIDADOR[evento.keyCode](evento.keyCode)
            return False
        return True
    def Return(self, ev): self.game.quandoApertaUmaTecla(TECLA.ENTER);return False
    def space(self, ev): self.game.quandoApertaUmaTecla(TECLA.BRANCO);return False
    def Right(self, ev): self.game.track.forward();return False
    def Left(self, ev): self.game.track.backward();return False
    def Up(self, ev): self.game.track.popback();return False
    def Down(self, ev): self.game.track.popfront();return False
    def Next(self, ev): self.game.track.popfront();return False
    def Prior(self, ev): self.game.track.popback();return False
    def Home(self, ev): self.game.quandoApertaUmaTecla(TECLA.EMPURRA);return False
    def End(self, ev): self.game.quandoApertaUmaTecla(TECLA.PUXA);return False

if __name__ == "__main__":
    mundo = MainTrain()
    RootPanel().add(mundo)
    mundo.inicia()


