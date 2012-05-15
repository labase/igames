#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Trains - A play train game set
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

import pygame
import pygame as KL
from pygame.color import Color as CL
from pygame.sprite import Sprite
from pygame.sprite import LayeredUpdates as Renderer
from pygame.sprite import RenderUpdates as Camada

try:
    import android
except ImportError:
    android = None
from time import time

IMAGEREPO = 'image/'
# Event constant.
TIMEREVENT = pygame.USEREVENT

# The FPS the game runs at.
FPS = 8
CANVASW, CANVASH = 800, 600
COLOR={'forest green':CL('#228B22') , 'navajo white':CL('#FFDFB0')}

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
    
class Empacotador(Sprite):
    MESTRE = Renderer()
    IMAGES = {}
    CAMADA = {}
    def __init__(self, source, x, y ,w , h, l = None):
        Sprite.__init__(self)
        self.name = image = source
        if image not in Empacotador.IMAGES:
            graphic = pygame.image.load("image/%s"%image).convert()
            Empacotador.IMAGES[image] = graphic
        else:
            graphic = Empacotador.IMAGES[image]
        graphic = pygame.transform.scale(graphic, (w, h))
        self.image = graphic
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)
        z = l or y
        Empacotador.MESTRE.add(self,layer = z)
    def remove(self):
        Empacotador.MESTRE.remove(self)
        Empacotador.CAMADA[self.camada].remove(self)
    def position(self):
        return self.rect.topleft
    def move(self,x,y):
        self.rect.topleft = (x,y)
    def pos(self):
        return self.rect.topleft
    def translate(self,x,y):
        ox, oy = self.rect.topleft
        self.rect.topleft = (ox+x,oy+y)
    def translatez(self,x,y):
        ox, oy = self.rect.topleft
        self.rect.topleft = (ox+x,oy+y)
        Empacotador.MESTRE.change_layer(self,oy+y)
    def __eq__(self,other): return self.name == other.name

class GUI:
    def __init__(self):
        pygame.init()
        self.font = pygame.font.Font('freesansbold.ttf', 30)
    
        # Set the screen size.
        self.tela = pygame.display.set_mode((CANVASW, CANVASH))
        self.tela.fill(COLOR['forest green'])
        
        # Use a timer to control FPS.
        pygame.time.set_timer(TIMEREVENT, 1000 / FPS)
        self.rect(0,0,800,700,'forest green')
        self.background = pygame.Surface([CANVASW, CANVASH])
        self.background.fill(COLOR['navajo white'])
        self.text(CANVASW/2,CANVASH/2,"TRAINS")
        self.LIDADOR = {KL.K_DOWN: self.Down,KL.K_END: self.End,
                   KL.K_RETURN: self.Return, KL.K_HOME: self.Home,
                   KL.K_LEFT: self.Left,KL.K_PAGEDOWN: self.Next,
                   KL.K_PAGEUP: self.Prior,KL.K_RIGHT: self.Right,
                   KL.K_UP: self.Up, ' ':self.space}

    def _inicia(self,game):
        self.game = game
        pygame.display.set_caption('Trains')
        if android:
            android.map_key(android.KEYCODE_BACK, pygame.K_ESCAPE)
            android.map_key(66, KL.K_PAGEUP)
            android.map_key(67, KL.K_PAGEDOWN)
            android.map_key(23, KL.K_HOME)
            self.text(150,50,'android: %d  escape: %d'%(
                android.KEYCODE_BACK, pygame.K_ESCAPE))
 

        while True:
            ev = pygame.event.wait()
            self._redraw()
            if android:
                if android.check_pause():
                    android.wait_for_resume()

            if ev.type == TIMEREVENT:
                pygame.display.flip()
            elif ev.type == pygame.KEYDOWN:
                if ev.key in (pygame.K_ESCAPE,'q',4):
                    self.terminate()
                    break
                else:
                    self.lidador_de_tecla(ev.key)
                    pygame.display.flip()
    def _redraw(self):
        Empacotador.MESTRE.clear(self.tela,self.background)
        rectlist = Empacotador.MESTRE.draw(self.tela)
        pygame.display.update(rectlist)

    def text(self,x,y,texto,color='navajo white'):
        label = self.font.render(texto, 1, COLOR[color])
        self.tela.blit(label, (x,y))
        return label
    def rect(self,x,y,w,h,color='navajo white'):
        return pygame.draw.rect(self.tela, COLOR[color], (x,y,w,h))

    def image(self,source,x,y,w,h, l=None):
        return Empacotador(source,x,y,w,h, l)
    def lidador_de_tecla(self, evento):
        if evento in self.LIDADOR:
            self.LIDADOR[evento](evento)
            return False
        return True
    def Return(self, ev): self.game.quandoApertaUmaTecla(TECLA.ENTER);return False
    def space(self, ev): self.game.quandoApertaUmaTecla(TECLA.BRANCO);return False
    def Right(self, ev): self.game.track.forward();return False
    def Left(self, ev): self.game.track.backward();return False
    def Up(self, ev): self.game.track.popback();return False
    def Down(self, ev): self.game.track.popfront();return False
    def Next(self, ev): self.game.quandoApertaUmaTecla(TECLA.DESCE);return False
    def Prior(self, ev): self.game.quandoApertaUmaTecla(TECLA.SOBE);return False
    def Home(self, ev): self.game.quandoApertaUmaTecla(TECLA.EMPURRA);return False
    def End(self, ev): self.game.quandoApertaUmaTecla(TECLA.PUXA);return False
    
    def terminate(self):
        pygame.quit()
        #sys.exit()


def main():
    from train import Trains
    trains = Trains()
    trains.inicia(GUI())
    
if __name__ == "__main__":
    main()

