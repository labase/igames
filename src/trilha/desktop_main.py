#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Jeppeto : The Game of Topological Track
############################################################

:Author: *Carlo E. T. Oliveira*
:Contact: carlo@nce.ufrj.br
:Date: $Date: 2012/05/11  $
:Status: This is a "work in progress"
:Revision: $Revision: 0.1 $
:Home: `Labase <http://labase.nce.ufrj.br/>`__
:Copyright: ©2012, `GPL <http://is.gd/3Udt>`__.
"""
__author__  = "Carlo E. T. Oliveira (carlo@ufrj.br) $Author: cetoli $"
__version__ = "0.1 $Revision$"[10:-1]
__date__    = "2012/05/11 $Date$"


import os
if __name__ == '__main__':
    import sys
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    import __meta__
    __meta__.add_jeppeto_into_path()
GAME_PATH = os.path.dirname(os.path.abspath(__file__))
IMAGE_PATH = os.path.join(GAME_PATH, 'public', 'image')
JPT_PATH = os.path.join(GAME_PATH, 'jpt.jpt')

from jeppeto.gui_decorator import Item, ToolBox, BlockItem, Composable, DropDecorator
import json
import logging
BLOCK = 80
SIDE = 400/BLOCK
PATH = '#330000'
SAND = '#ff9966'
WAY = BLOCK //5
BY = BLOCK//2 - WAY//2
BZ = BLOCK//2 + WAY//2
UT = [[0,BY,BLOCK,WAY],[BY,BY,WAY,BLOCK]]
DT = [[0,BY,BLOCK,WAY],[BY,0,WAY,BLOCK//2]]
LT = [[BY,0,WAY,BLOCK],[BY,BY,BLOCK,WAY]]
RT = [[BY,0,WAY,BLOCK],[0,BY,BLOCK//2,WAY]]
UL = [[0,BY,BLOCK//2,WAY],[BY,BY,WAY,BLOCK]]
DL = [[0,BY,BZ,WAY],[BY,0,WAY,BLOCK//2]]
LL = [[BY,0,WAY,BZ],[BY,BY,BLOCK,WAY]]
RL = [[BY,BY,BLOCK,WAY],[BY,BY,WAY,BLOCK]]
HP = [[0,BY,BLOCK,WAY]]
VP = [[BY,0,WAY,BLOCK]]

logger = logging.getLogger('jeppeto_main')
logger.addHandler(logging.StreamHandler())
logger.setLevel(logging.CRITICAL)
logger.setLevel(logging.DEBUG)

PRIMESXYZ = (5,11,111)
SATURATE = 256
FIELDS = 'items,color,origin'.split(',')

HEX6 = '#%06x'
BLACK, WHITE , GREY , NAVWHITE ='#000000', '#FFFFFF', '#A0A0A0', '#FFDFB0'
BLOCK_SIZE = 50
BP = BLOCK_PADDING = 10
X,Y = (0,1)


class _Nenhures:
    """ Um lugar default, que não contem nada
    """
    TEMPO = 0
    def __init__(self, inicial =[]):
        """ inicia a posição e a imagem
        """
        self.local = self
        self.items =[]
        self.xy =(-1,-1)
        self.agir = self.move

    def age(self,*args):
        return False

    def reage(self,*args):
        return False

    def ativa(self,ato):
        return False

    def entra(self,ato):
        return False

    def move(self,local):
        pass

    def adentra(self,local):
        return False

    def recebe(self,elemento):
        return False

    def devolve(self,elemento):
        return self

    def nada_faz(self, *args):
        pass

    def envia(self,ato):
        return False

    def abandona(self,ato):
        return False

    ########### should move to Null Composite ############
    def reshape(self, *args):
        pass

    def remove(self, *args):
        pass

    def revert(self, *args):
        pass

    def _start(self, *args):
        pass

    def paste(self, *args):
        pass

    def translate(self, *args):
        pass

    def _move(self, *args):
        pass

    def __call__(self):
        return self

NENHURES = _Nenhures()
del _Nenhures


class Composite(Composable):
    """ Um item composto
    """
    def clone(self,x,y,color=None, owner = None):
        refcolor = color or self.clone_contents(x,y)
        color = self._colour(x, y)
        comp = Reference(self,self.stereotype(x,y,refcolor), owner, color = color)
        return self._spawn(x,y,comp,color)

    def activate(*args):
        pass

    def insert(*args):
        return False


class Locus(Composite):
    """ Locação visual, que contem atores
    """
    def _insert(*args):
        return True

    def _create(self,x,y,comp = None):
        comp = comp or self.spawn(x,y)
        self.items.append(comp)
        comp.local = comp.container = self
        self.save(comp)

    def stereotype(self,x,y,color = 0xFFAAAA):
        icon = self.gui.image(None, x, y, BLOCK, BLOCK, cl = PATH)
        self.insert = self._insert
        self.gui.rect(1,1,BLOCK-2, BLOCK-2, hexcolor=SAND,buff=icon.image)
        return  icon

    def factory(self, icon, owner = None):
        return Locus(self.gui,owner or self,icon)

    def reshape(self, comp):
        comp.icon.toFront()

    def paste(self,x,y,item):
        if item is self:
            logger.debug("tlocus rejecting self, %s , %s", self,  item)
            return False
        if not self.items:
            logger.debug("tlocus cloning self, %s , %s", self,  item)
            item.revert()
            #comp = item.clone(x,y, owner = self)
            comp = item.clone(*self.origin, owner = self)
            #comp._move(*self.origin)
            self.items = []
            self._create(x,y,comp = comp)
            #self.items.append(comp)
            comp.local = comp.container = self
        else:
            logger.debug("tlocus has already self, %s , %s", self.items,  item)
            item.revert()
            return False
            #self.reshape(item)
        return True

class Tools(Locus):
    """ Locação visual, que contem atores
    """
    def create(self):
        #Elemento.__init__(self)
        self.avatar = icon = Composite.create(self)
        self.gui.unclick(self)
        self.gui.undrop(self)
        self.gui.undrag(self)
        return icon

    def factory(self, icon, owner = None):
        return Tools(self.gui,owner or self,icon)

    def stereotype(self,x,y,color = 0xFFAAAA):
        icon = self.gui.image(None, 600, 0, 200, 600, cl = '#FFAAAA')#NAVWHITE)
        return  icon

    def _spawn(self,x,y,comp,color):
        DropDecorator(comp,comp.paste)
        comp.origin, comp.xy, comp.size = (x,y), (x,y),(BLOCK_SIZE,)* 2
        comp.color = color
        comp.icon.toFront()
        #print 'spawned : %s'%color
        return comp

    def reshape(self, comp):
        pass

    def clone(self, *ags, **kw):
        return NENHURES

    def _start(self,x,y):
        return False

    def _move(self, *ags, **kw):
        pass

    def paste(self,x,y,item):
        print "scrapping %s"%item
        dlt = Deleter(item)
        self.save(dlt)
        return True

    def scrap(self,x,y,item):
        print "scrapping %s"%item
        dlt = Deleter(item)
        self.save(dlt)
        return True


class Actor(Composite):
    """ Ator que executa ações no jogo
    """
    def no_save(self, block):
        pass

    def clone(self,x,y,color=None, owner = None):
        self.save(Mover(self, xy = [x,y]))
        #self.save = self.no_save
        self.local.remove(self)
        self.local = self.container = owner
        logger.debug("tactor move, not clone,  s,o,i %s , %s, %s", self,  owner, self.local.items)
        return self

    def paste(self,x,y,item):
        if item is self:
            logger.debug("tactor rejecting self, %s , %s", self,  item)
            return False
        if  item.insert():
            logger.debug("tactor move instead of clone, %s , %s", self,  item)
            self.save(Mover(item, xy = [x,y]))
            pass
        else:
            return False
            #self.reshape(item)
        return True

    def _stereotype(self,x,y,shapes):
        icon = self.gui.image(None, x, y, BLOCK, BLOCK, cl = SAND)
        for shape in shapes:
            self.gui.rect(*shape,hexcolor=PATH,buff=icon.image)
        return  icon

    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, UT)

    def factory(self, icon, owner = None):
        return globals()[self.__class__.__name__](self.gui,owner or self,icon)

    def _click(self,x,y):
        pass


class DActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, DT)

class LActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, LT)

class RActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, RT)

class ULActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, UL)

class DLActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, DL)

class LLActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, LL)

class RLActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, RL)

class HActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, HP)

class VActor(Actor):
    def stereotype(self,x,y,color = 0xFFAAAA):
        return  self._stereotype(x, y, VP)


class Reference(Composite):
    """ Referência para um elemento, proxy
    """
    def __init__(self, referee = None, icon = None, owner = None, gui = None, color =0):
        self.referee = referee
        #Referencia.__init__(self,referee)
        agui = gui  or owner.gui
        Composite.__init__(self,agui,owner,icon)
        self.gui.rect(0,0,24,24,hexcolor=BLACK,buff=self.icon.image)
        self.gui.rect(2,2,20,20,hexcolor=color,buff=self.icon.image)
        logger.debug("current xy, %s , %s", self,  self.xy)

    def _create(self,x,y, comp = None):
        pass

    def paste(self,x,y,item):
        if item is self:
            return False
        else:
            item.revert()
        return True

    def stereotype(self,x,y,color):
        icon = self.referee.stereotype(x,y,self.referee.color)
        self.gui.rect(0,0,4,4,hexcolor=WHITE,buff=icon.image)
        return icon

    def load(self,owner, loader,its=[],col=0,ori=0,con=0,cls=0,ref=0):
        x, y = ori
        color = col
        self.referee = loader.element_pool(ref)
        elemento = self.clone(x, y,color,owner=owner)
        elemento.local = owner
        owner.items.append(elemento)
        owner.reshape(elemento)
        return elemento

    def extra(self):
        return dict(ref=self.referee.color)


class Deleter(Reference):
    """ Objeto que armazena uma ação de deletar na edição
    """
    def __init__(self, referee = None, icon = None, owner = None, gui = None):
        self.referee = referee
        if referee: referee.delete()

    def load(self,owner, loader,its=[],col=0,ori=0,con=0,cls=0,ref=0):
        self.referee = loader.element_pool(ref)
        return Deleter(self.referee)

    def delete(self):
        del self


class Mover(Deleter):
    """ Objeto que armazena uma ação de mover na edição
    """
    def __init__(self, referee = None, icon = None,
                 owner = None, gui = None, xy = [0,0]):
        self.referee = referee
        x, y, = self.origin = xy
        if referee:
            referee._move(x,y)
            if referee.container:
                referee.container.reshape(referee)

    def load(self,owner, loader,its=[],col=0,ori=0,con=0,cls=0,ref=0):
        self.referee = loader.element_pool(ref)
        return Mover(self.referee, xy = ori)


class App(Locus, ToolBox):
    """ Engenho de Criação de Jogos educacionais
    """
    def remove(self,comp):
        pass

    def scrap(self,x,y,item):
        item.revert()
        return False

    def start(self, name):
        self.gui.create_game(self, name)

    def setup(self, readfile = None, writefile = None):
        if not os.path.exists(JPT_PATH): 
            open(JPT_PATH, 'w').close()
        readfile = readfile or file(JPT_PATH,'r')
        writefile = writefile or file(JPT_PATH,'w')
        self.sink = writefile
        Composite.save = self.saver

    def create(self):
        self._scored = []
        self.items =[]
        self.gui.cleanup = self.cleanup
        self.container = self
        self.color = None
        self.xy = self.origin = (750, 550)
        self.tool = self.build(Tools(self.gui,self),(0,0))
        self.icon = app = self.gui.image( None,0, 0, 600, 600, cl = '#006633')
        self.locus_tool = self.build(Locus(self.gui,self))
        self.tool._create(600,0)
        self.actor_tool = self.build(Actor(self.gui,self))
        self.dactor_tool = self.build(DActor(self.gui,self))
        self.ractor_tool = self.build(RActor(self.gui,self))
        self.lactor_tool = self.build(LActor(self.gui,self))
        self.ulactor_tool = self.build(ULActor(self.gui,self))
        self.dlactor_tool = self.build(DLActor(self.gui,self))
        self.rlactor_tool = self.build(RLActor(self.gui,self))
        self.llactor_tool = self.build(LLActor(self.gui,self))
        self.hactor_tool = self.build(HActor(self.gui,self))
        self.vactor_tool = self.build(VActor(self.gui,self))
        self.actor_tool.save = self.saver
        for ind in range(SIDE*SIDE):
            x,y = 100 + ind //SIDE *BLOCK, 100 + ind %SIDE *BLOCK
            self.locus_tool._create(x,y)
        DropDecorator(self, self.scrap)
        h1 = self.gui.image( 'casinha.gif',0, 0, BLOCK, BLOCK)
        h2 = self.gui.image( 'casinha.gif',0, 0, BLOCK, BLOCK)
        h3 = self.gui.image( 'casinha.gif',0, 0, BLOCK, BLOCK)
        h1.rotate(-90)
        h1.translate(100+SIDE*BLOCK, 100+2*BLOCK)
        h2.rotate(90)
        h2.translate(100-BLOCK, 100+2*BLOCK)
        #h3.rotate(180)
        h3.translate(100+2*BLOCK, 100-BLOCK)
        self.setup()
        return self.icon

    def cleanup(self):
        self.sink.close()

    def _create(self,x,y,comp = None):
        comp = self.spawn(x,y)
        self.save(comp)
        self.items.append(comp)
        comp.local = NENHURES()

    def reshape(self, block):
        return (0,0)

    def paste(self,x,y,item):
        if item in self.items:
            self.save(Mover(item, xy = [x,y]))
            return True
        #item.revert()

    def saver(self, block):
        #return
        self.sink.write(json.dumps(block, indent=2, default= lambda o: o.convert())+',')
        self.sink.flush()

class Loader:
    def __init__(self, owner, readfile):
        json_string = readfile.read()
        if len(json_string) < 4: return

        json_string = '['+ json_string[:-1]+']'
        #print json_string[-20:]
        CLASS_DICT={}
        self.ELEMENT_DICT={-1:owner}
        python_object_list = []
        icon = owner.gui.image( None,-100, -100, 1, 1, cl = '#FFDFB6')
        try:
            python_object_list = json.loads(json_string)
        except:
            raise Exception("Problem reading from JSON stream")
        def flyweight(clazz):
            if clazz in CLASS_DICT:
                return CLASS_DICT[clazz]
            else:
                cl = CLASS_DICT[clazz] = globals()[clazz](gui = owner.gui, icon=icon)
                return cl
        def instantiate(python_object,its=[],col=0,ori=0,con=0,cls=0,ref=0):
            clazz = flyweight(cls)
            owner = self.element_pool(con or -1)
            container_nowhere_when_app = not con and NENHURES() or owner
            python_object['con']= container_nowhere_when_app
            #print 'owner', own, owner
            element = clazz.load(owner,self,**python_object)
            #print 'element',element
            self.element_pool(col, element)
        [instantiate(po,**po) for po in python_object_list if po]
        readfile.close()
        #for cls, instance in CLASS_DICT.items() : instance.delete()

    def element_pool(self,name,clazz=None):
        if name in self.ELEMENT_DICT:
            return self.ELEMENT_DICT[name]
        else:
            cl = self.ELEMENT_DICT[name] = clazz
            return cl


def main():
    from jeppeto import pygame_factory as pg
    pg.IMAGE_PATH = IMAGE_PATH
    pg.JPT_PATH = GAME_PATH
    pg.CANVASH = 600
    main = App(pg.GUI())
    main.start('Trilha')
    return None


if __name__ == "__main__":
    NOUSE = main()

