#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Pygame Factory : Gui interface to pygame
############################################################

:Author: *Carlo E. T. Oliveira*
:Contact: carlo@nce.ufrj.br
:Date: $Date: 2011/07/31  $
:Status: This is a "work in progress"
:Revision: $Revision: 0.1 $
:Home: `Labase <http://labase.nce.ufrj.br/>`__
:Copyright: ©2011, `GPL <http://is.gd/3Udt>`__. 
"""
__author__  = "Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $"
__version__ = "0.1 $Revision$"[10:-1]
__date__    = "2011/07/31 $Date$"

try:
    from pyjamas_driver import Window
except Exception as ex:
    class Window(object):
        pass
    
#from pyjamas_driver import Window


IMAGEREPO = ''
CANVASW, CANVASH = 800, 600
IMAGEREPO = '/static/imagens/'
IMAGEREPO = 'imagens/'
COLOR={'forest green':'#228B22' , 'navajo white':'#FFDFB0', 'white':'#FFFFFF'
        ,'darksalmon':'#E9967A', 'peachpuff':'#FFDAB9', 'maroon':'#800000'
        ,'lightsalmon':'#FFA07A', 'saddlebrown':'#8B4513'
        ,'darkbrown':'#462813','linen':'#FAF0E6'}


class Empacotador:
    IMAGES = {}
    CAMADA = {}
    Z=10
    def __init__(self, canvas, source=None, x=0, y=0 ,w=0 , h=0,
                 l = None, f= None, buff= None, cl='#FFFF00'):
        self.canvas = canvas
        self._create(source, x, y ,w , h, l , f, buff, cl)
    def _create(self, source, x, y ,w , h, l = None, f= None, buff= None, cl= None):
        self.name = image = source
        self.buff = buff or self.canvas.set()
        if image:
            graphic = self.canvas.image(IMAGEREPO+source,x,y,w,h)
        else:
            graphic = self.canvas.rect(x,y,w,h)
            graphic.setAttrs({'fill':cl,'stroke':cl})
        self.buff.add(graphic)
        #graphic = buff

        self.image = graphic
        #self.image.get_avatar() = graphic
        #self.rect = self.image.getBBox()
        self.camada = z = l or y
    def drag(self, action,start,stop):
        self.image.drag(action,start,stop)
    def addListener(self, typpe,wrapper):
        self.image.addListener(typpe,wrapper)

    def add(self, element):
        self.buff.add(element)
        
        
    def reorder(self):
        cmd = Empacotador.CAMADA
        NOUSE = [img.image.toFront() for it in sorted(cmd.keys())
                 for img in cmd[it]]
    def remove(self):
        
        if self.camada in Empacotador.CAMADA and \
            self in Empacotador.CAMADA[self.camada]:
            Empacotador.CAMADA[self.camada].remove(self)
        #self.image.remove()
        self.image.toBack()
    def position(self):
        return self.image.getAttr('x'), self.image.getBBox('y')
    def posX(self):
        return self.image.getAttr('x')
    def posY(self):
        return self.image.getBBox('y')
    def deltaX(self):
        return self.image.getAttr('width')
    def deltaY(self):
        return self.image.getAttr('height')
    def collidepoint(self,x,y):
        i, j = self.posX(),self.posY()
        w, h = self.deltaX(),self.deltaY()
        #alert('collidepoint %s < %s < %s  &  %s < %s < %s'%(i,x,i+w,j,y,j+w))
        return (i < x < (i + w)) and (j < y < (j + w))
    def toFront(self):
        self.buff.toFront()
    def toBack(self):
        self.buff.toBack()
    def move(self,x,y):
        #ox, oy = self.position()
        #self.image.translate(x-ox,y-oy)
        #self.image.setAttrs({'x':x,'y':y})
        self.buff.setAttrs({'x':x,'y':y})
    def pos(self):
        return self.image.getAttr('x'), self.image.getBBox('y')
    def size(self):
        return self.image.getAttr('width'), self.image.getAttr('height')
    def scale(self,x,y):
        sx, sy = self.size()
        #self.image.scale(x*1.0/sx,y*1.0/sx)
        self.buff.scale(x*1.0/sx,y*1.0/sx)
    def translate(self,x,y):
        #self.image.translate(x,y)
        self.buff.translate(x,y)
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

class GUI_Event(Window):
    def __init__(self):
        Window.__init__(self)
        self.drop_listeners = []
        self.do_up = self._do_up
        self.do_move = self._do_nothing
        self.do_down = self._do_down #self._do_nothing
    def _do_nothing(self, ev, noev= None):
        pass
    def _do_move(self, ev):
        print 'moving ',ev.pos
        self.mover.action(*ev.pos)
    def _do_end_drag(self, ev):
        print 'end moving ',ev.pos
        self.do_up = self.do_move = self._do_nothing
        self.do_down = self._do_down
        if ev.button == 1:
            for item in self.drop_listeners:
                print item.action
                if item.collide(*ev.pos):
                    par = ( ev.pos[0], ev.pos[1], self.mover )
                    print 'drop collision ', ev.pos
                    if item.action(*par ): break
    def do_roll(self, ev):
       if True: #ev.button == 1:
            for item in self.roll_listeners:
                item.action(*ev.pos)
    def do_act(self, ev):
       if True: #ev.button == 1:
            for item in self.act_listeners:
                item.action(ev)
    def _do_down(self, ev):
        self.do_down = self._do_nothing
        if ev.button == 1:
            for item in self.drag_listeners:
                print item.action
                if item.collide(*ev.pos):
                    print 'drag collision ', ev.pos
                    self.mover = item
                    self.do_move = self._do_move
                    self.do_up = self._do_end_drag
                    break
            else:
                self.do_up = self._do_up
    def _do_up(self, ev):
        self.do_up = self._do_nothing
        self.do_down = self._do_down
        #print ev.button, self.listeners
        if ev.button == 1:
            for item in self.click_listeners:
                print item.action
                if item.collide(*ev.pos):
                    print ev.pos
                    #item.action(*ev.pos)
                    if item.action(*ev.pos): break
                    break
        

    def click(self, object):
        av= object.get_avatar()
        av.addListener('click',self.build_event(object.action,self.offset).action)
    def dragg(self, object):
        wrapper = self.build_drag(self._drop,object)
        object.get_avatar().drag(wrapper.action,wrapper.start,wrapper.stop)
    def _drop(self, source):
        av= source.get_avatar()
        x, y = av.posX(),av.posY()
        for target in self.drop_listeners:
            if target.collide(x, y ):
                target.action(x, y, source)
    def drop(self, object):
        av= object.get_avatar()
        wrapper = self.build_event(object.action,self.offset).action
        av.addListener('mouseup',wrapper)
        self.drop_listeners.append(object)
    def roll(self, object):
        object.get_avatar().mousemove(object.action)
    def act(self, object):
        self.act_listeners.append(object)
    def undrop(self, object):
        self.drop_listeners.remove(object)
    def unclick(self, object):
        pass #object.get_avatar().unclick(object.action)
    def undrag(self, object):
        object.get_avatar().undrag(object.action)
         

class GUI(GUI_Event):
    def _decorate(self,element):
        #element.get_avatar() = element
        return element

    def remove(self, element):
        if element in self.drop_listeners:
            self.drop_listeners.remove(element)
        element.remove()
        
    def text(self,x,y,texto,color='navajo white', hexcolor=None, size =16):
        t = self.canvas.text(x,y,texto)
        t.setAttrs({'fill':hexcolor or COLOR[color],'stroke':hexcolor or COLOR[color],'font-size':'%d'%size})
        return t
    def path(self,path, width = 1, color='navajo white', background ='white'):
        #color:#000000;fill:#462813;fill-opacity:1;stroke:#d08554;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate
        pathParams = {'stroke'         : COLOR[color],
                      'color'           : color,
                      'fill'            : COLOR[background],
                      #'stroke-width'   : width, #"%dpx"%width,
                      'stroke-linecap' : "round"}

        t  = self.canvas.path(data=path,attrs=pathParams)
        return t
    def textarea(self,x,y,w,h,texto,color='navajo white', background ='white'):
        t = Text_Area(self,texto,x,y,w,h,color, background)
        return t
        #return self._decorate(t)
    def rect(self,x,y,dx,dy,color='navajo white', hexcolor=None, line =None, buff=None):
        r = self.canvas.rect(x,y,dx-x,dy-y)
        r.setAttrs({'fill':hexcolor or COLOR[color],'stroke':line and COLOR[line] or COLOR[color]})
        if buff: buff.add(r)
        return self._decorate(r)
    def image(self,glyph,x,y,dx,dy, l=None, f='png', buff='', cl= None):
        return Empacotador(self.canvas,glyph,x,y,dx,dy, l, f, buff, cl)
    def send(self,uid,**kwargs):
        score =  j_p.encode(uid)
        message = dict(line= uid, _xsrf= self.x)
        message.update(kwargs)
        message =  j_p.encode(message)
        self._socket.sending(message)
    def receive(self,message = 'nono'):
        self.talk(message.line+ ':'+ message.body)
