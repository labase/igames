#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Jeppeto : An Educational Game Builder
############################################################

:Author: *Carlo E. T. Oliveira*
:Contact: carlo@nce.ufrj.br
:Date: $Date: 2011/10/09  $
:Status: This is a "work in progress"
:Revision: $Revision: 0.1 $
:Home: `Labase <http://labase.nce.ufrj.br/>`__
:Copyright: ©2011, `GPL <http://is.gd/3Udt>`__. 
"""
__author__  = "Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $"
__version__ = "0.1 $Revision$"[10:-1]
__date__    = "2011/10/09 $Date$"

from gui_decorator import Item, Tool,Dropper, Trasher, Clicker
    
class App(Item):
    """ Engenho de Criação de Jogos educacionais
    """
    def start(self, name):
        self.gui.create_game(self, name)
    def create(self):
        self._scored = []
        app = self.gui.text(350, 10, 'Jeppeto')
        app = self.gui.image('fundo.jpg',0, 0, 900, 700)
        self.gui.image('titulo.png',350, 10, 200, 40)
        self.icon = self.avatar = self.gui.image(
            'caderno.png',30, 40, 700, 560)
        self.gui.image('menu.png',720, 100, 174, 365)
        for ind in range(20):
            x,y = 100 + ind //4 *120, 80 + ind %4 *120
            icon = self.gui.image('m%s.png'%(ind+1),x,y, 110, 110)
            self.append(Dropper(self.gui, self, icon=icon))
        for ind in range(7):
            x,y = 745 , 122 + ind *50
            icon = self.gui.image('e%s.png'%(ind+1),x,y, 29, 31, l=1100)
            x=Tool(self.gui, self, icon=icon)
        icon = self.gui.image('metal-bin.png',740, 500, 100,100, l=1000)
        Trasher(self.gui, self, icon=icon)
        icon = self.gui.image('enviar.png',605, 539, 100,55, l=1000)
        Clicker(self.gui, self, icon=icon, action = self._click)
    
    def score(self, scorelist):
        self._scored.append(scorelist)

        return app
    def _click(self,x,y):
        data = [[dropper.icon.name.split('.')[0],
            [flag.icon.name.split('.')[0] for flag in dropper.children]]
            for dropper in self.children]
        data = (self._scored, data)
        return data
    def not_click_template(self,x,y):
        self.activate = self._no_click
        self._click(x, y)
def main():
    from pyjamas_factory import GUI
    main = App(GUI())
    main.start('Caderno')
    return None
   
if __name__ == "__main__":
    NOUSE = main()
