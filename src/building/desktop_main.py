#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
    File: desktop_main.py
    Description: save 3 friends from a building burning in fire
"""

__author__  = "Ronald A. Kaiser (raios dot catodicos at gmail dot com)"
__version__ = "0.1"
__date__    = "May, 2012"


import os, sys
if __name__ == '__main__':
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    import __meta__
    __meta__.add_jeppeto_into_path()
from jeppeto.gui_decorator import Composable


GAME_PATH = os.path.dirname(os.path.abspath(__file__))
IMAGE_PATH = os.path.join(GAME_PATH, 'public', 'image')
JPT_PATH = os.path.join(GAME_PATH, 'jpt.jpt')


class Composite(Composable):
    pass


class Locus(Composite):
    pass


class App(Locus):
    def start(self, name):
        self.gui.create_game(self, name)


def main():
    from jeppeto import pygame_factory as pg
    pg.IMAGE_PATH = IMAGE_PATH
    pg.JPT_PATH = GAME_PATH
    pg.CANVASH = 600
    main = App(pg.GUI())
    main.start('Building')
    return None


if __name__ == '__main__':
    main()
