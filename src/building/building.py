#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
    File: building.py
    Description: Save 3 friends from a building in fire!
"""

__author__  = "Ronald A. Kaiser (raios dot catodicos at gmail dot com)"
__version__ = "0.1"
__date__    = "May, 2012"


import os
import sys
import time
import pygame
import traceback


CURRENT_PATH  = os.path.dirname(os.path.abspath(__file__))
IMG_PATH      = os.path.join(CURRENT_PATH, 'public', 'image')
drawing_queue = [] 


def redraw_queue():
    global drawing_queue
    old_queue = drawing_queue[:]
    drawing_queue = []
    for surface in old_queue: surface.draw(surface.where)
    pygame.display.update()


class Graphic:
    def __init__(self, img, pos=(0,0)):
        self.origin = pos
        self.pos = pos
        self.path = os.path.join(IMG_PATH, img) 
        self.surface = pygame.image.load(self.path)
        self.rect = self.surface.get_rect()
        self.clicked = False

    def click(self):
        self.clicked = True

    def unclick(self):
        self.clicked = False

    def unclick_all(self):
        global drawing_queue
        for obj in drawing_queue: obj.unclick()

    def draw(self, where):
        self.where = where
        where.blit(self.surface, self.pos)
        self.rect = self.surface.get_rect()
        drawing_queue.append(self)

    def __str__(self):
        return "<img: %s, pos: %s>" % (self.path, self.pos)


class Actor(Graphic):
    """An entity that has actions"""
    def move(self, pos=(0, 0)):
        self.pos = pos
        redraw_queue()


class Basket(Actor):
    min_y = 345
    max_y = 660
    speed = 20

    def __init__(self, *args, **kwargs):
        Graphic.__init__(self, *args, **kwargs)
        self.people = []
        
    def set_sense(self, sense):
        self.sense = sense

    def change_sense(self):
        self.sense = 1 if self.sense == 0 else 0 

    def add_person(self, person):
        if len(self.people) < 2:
            self.people.append(person)
        else:
            person.move(person.origin)

    def remove_person(self, person):
        if person in self.people: self.people.remove(person)

    def move_people(self):
        for person in self.people:
            new_y = person.pos[1]
            new_y = new_y + self.speed if self.sense == 0 else new_y - self.speed
            person.move((person.pos[0], new_y))

    def move_it(self):
        self.move_down() if self.sense == 0 else self.move_up()
        self.move_people()

    def move_up(self):
        new_y = self.pos[1] - self.speed
        self.move((self.pos[0], new_y))

    def move_down(self):
        new_y = self.pos[1] + self.speed
        self.move((self.pos[0], new_y))

    def reached_top(self):
        return self.pos[1] <= Basket.min_y

    def reached_bottom(self):
        return self.pos[1] >= Basket.max_y 

    def reached_extreme(self):
        return self.reached_top() or self.reached_bottom()


class Game:
    def __init__(self):
        try:
            # initializations
            pygame.init() 
            self.screen = pygame.display.set_mode((1000, 800))
            pygame.display.set_caption('Prédio em chamas')
            pygame.mouse.set_visible(1)
            self.objs = []
            self.background = Graphic("background.png")
            self.building = Graphic("building.png")
            self.lift = Graphic("lift.png", (500, 160))
            self.boy = Actor("boy.png", (40, 150))
            self.girl = Actor("girl.png", (180, 184))
            self.dog = Actor("dog.png", (330, 130))
            self.basket1 = Basket("basket.png", (380, 660))
            self.basket1.set_sense(1)
            self.basket2 = Basket("basket.png", (634, 345))
            self.basket2.set_sense(0)
            self.current_clicked = None

            # first drawings
            self.background.draw(self.screen)
            self.building.draw(self.screen)
            self.lift.draw(self.screen)
            self.boy.draw(self.screen)
            self.girl.draw(self.screen)
            self.dog.draw(self.screen)
            self.basket1.draw(self.screen)
            self.basket2.draw(self.screen)
            pygame.display.update()
        except Exception, e:
            print e
            sys.exit(-1)

    def move_baskets(self,):
        self.basket1.move_it()
        self.basket2.move_it()
        while not self.basket1.reached_extreme() or \
            not self.basket2.reached_extreme():
            self.basket1.move_it()
            self.basket2.move_it()
        self.basket1.change_sense()
        self.basket2.change_sense()
        self.ready_to_move = False

    # TODO: remove duplicated code
    def process_events(self):
        objs = drawing_queue[:]

        # bring to front more recent drawings
        objs.reverse() 

        for event in pygame.event.get():
            # check if person is being added to basket
            if event.type == pygame.MOUSEBUTTONUP: 
                if isinstance(self.current_clicked, Actor) and \
                   not isinstance(self.current_clicked, Basket):
                    r1 = pygame.rect.Rect(self.current_clicked.pos[0], self.current_clicked.pos[1],
                                          self.current_clicked.rect.width, self.current_clicked.rect.height)
                    for obj in objs:
                        r2 = pygame.rect.Rect(obj.pos[0], obj.pos[1], obj.rect.width, obj.rect.height)
                        if isinstance(obj, Basket) and \
                           self.current_clicked and \
                           r1.colliderect(r2):
                           if self.current_clicked in self.basket1.people:
                               self.basket1.remove_person(self.current_clicked)
                           if self.current_clicked in self.basket2.people:
                               self.basket2.remove_person(self.current_clicked)
                           obj.add_person(self.current_clicked)
                           self.current_clicked = None
                    if self.current_clicked != None:
                        if self.current_clicked in self.basket1.people:
                            self.basket1.remove_person(self.current_clicked)
                        if self.current_clicked in self.basket2.people:
                            self.basket2.remove_person(self.current_clicked)
                        self.current_clicked.move(self.current_clicked.origin)
                    self.current_clicked = None
                    continue

            # check if object is being clicked
            if event.type == pygame.MOUSEBUTTONDOWN:
                for obj in objs:
                    if obj.rect.collidepoint(event.pos[0] - obj.pos[0],
                                             event.pos[1] - obj.pos[1]):
                        obj.click()
                        self.current_clicked = obj
                        break

            if event.type == pygame.KEYDOWN and \
                event.unicode == 'g':
                self.ready_to_move = True

        # move actors (drag operation)
        motions = pygame.event.get(pygame.MOUSEMOTION)
        motions.reverse()
        if len(motions) > 0 and self.current_clicked and \
            isinstance(self.current_clicked, Actor) and \
            not isinstance(self.current_clicked, Basket):
            self.current_clicked.move(motions[-1].pos)

    def start(self):
        try:
            self.ready_to_move = False
            while True:
                self.process_events()
                if self.ready_to_move:
                    self.move_baskets()
        except KeyboardInterrupt:
            print 'Bye bye, =)'
            sys.exit(-1)
        sys.exit(0)


if __name__ == "__main__":
    Game().start()
