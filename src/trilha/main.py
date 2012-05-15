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

from jeppeto.gui_decorator import Item, ToolBox, BlockItem, Composable
BLOCK = 80
PATH = '#330000'
SAND = '#ff9966'
WAY = BLOCK //5
class Path(Composable):
    def nrevert(*args):
        print('p reverting')
    def stereotype(self,x,y,color = 0xFFAAAA):
        icon = self.gui.image(None, x, y, BLOCK, BLOCK, cl = PATH)
        self.gui.rect(1,1,78, 78, hexcolor=SAND,buff=icon.image)
        return  icon
    def factory(self, icon, owner = None):
        return Marker(self.gui,owner or self,icon)
    def n_click(self,x,y):
        #self.age(None)
        pass
    def paste(self,x,y,item):
        if item is self:
            return False
        if not item in self.items:
            item.revert()
            print("path main cloning self, %s , %s", self,  item)
            self._create(x,y,comp = item.clone(x,y, owner = self))
            pass
    def _create(self,x,y, comp = None):
        return
        comp = comp# or self.spawn(x,y,self._colour(x,y))
        #self.save(comp)
        self.items.append(comp)
        #print 'paste %s'%self.items
        comp.local = self
        x, y = self.icon.pos()
        #elemento.icon.toFront()
        comp.to_front()
        comp._move(x,y)
    def receber(self, elemento, ato):
        x, y = self.icon.pos()
        #elemento.icon.toFront()
        elemento.to_front()
        elemento._move(x,y)
        elemento.container = self
class Board(Item):
    def create():
        self.board = [createblock(x,y) for x in XRANGE for y in YRANGE] 
class Marker(Composable):
    def nrevert(*args):
        print('p reverting')
    def create(self):
        return Composable.create(self)
    def nclone(self,x,y,color=None, owner = None):
        pass
    def stereotype(self,x,y,color = 0xFFAAAA):
        BY = BLOCK//2 - WAY//2
        icon = self.gui.image(None, x, y, BLOCK, BLOCK, cl = SAND)
        self.gui.rect(0,BY,80,WAY,hexcolor=PATH,buff=icon.image)
        self.gui.rect(BY,BY,WAY,BLOCK,hexcolor=PATH,buff=icon.image)
        return  icon
    def factory(self, icon, owner = None):
        return Marker(self.gui,owner or self,icon)
    def _click(self,x,y):
        #self.age(None)
        pass
    def paste(self,x,y,item):
        print "main to cloning self, %s , %s"
        if item is self:
            return False
        if not item in self.items:
            item.revert()
            print("main cloning self, %s , %s", self,  item)
            self._create(x,y,comp = item.clone(x,y, owner = self))
            pass
    
class App(Path, ToolBox):
    """ Engenho de Criação de Jogos educacionais
    """
    def revert(*args):
        print('reverting')
    def activate(*args):
        pass
    def start(self, name):
        self.gui.create_game(self, name)
    def create(self):
        self._scored = []
        self.items =[]
        #self.gui.cleanup = self.cleanup
        self.container = self
        self.color = None
        self.xy = self.origin = (750, 250)
        self.icon = app = self.gui.image( None,0, 0, 600, 600, cl = '#006633')
        for ind in range(25):
            x,y = 100 + ind //5 *80, 80 + ind %5 *80
            self._create(x,y)
        self.actor_tool = self.build(Marker(self.gui,self))
        return self.icon
    def _create(self,x,y,comp = None):
        comp = self.spawn(x,y)
        #self.save(comp)
        self.items.append(comp)
        #print 'created from App'
        comp.local = None
    
    def score(self, scorelist):
        self._scored.append(scorelist)

        return app
    def _click(self,x,y):
        return
        data = [[dropper.icon.name.split('.')[0],
            [flag.icon.name.split('.')[0] for flag in dropper.children]]
            for dropper in self.children]
        data = (self._scored, data)
        return data
    def not_click_template(self,x,y):
        self.activate = self._no_click
        self._click(x, y)
        
def main():
    from jeppeto.pygame_factory import GUI
    import jeppeto.pygame_factory as pg
    pg.CANVASH = 600
    main = App(GUI())
    main.start('Trilha')
    return None
   
if __name__ == "__main__":
    NOUSE = main()
