#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
############################################################
Jeppeto : An Educational Game Builder
############################################################

:Author: *Carlo E. T. Oliveira*
:Contact: carlo@nce.ufrj.br
:Date: $Date: 2011/09/09  $
:Status: This is a "work in progress"
:Revision: $Revision: 0.1 $
:Home: `Labase <http://labase.nce.ufrj.br/>`__
:Copyright: ©2011, `GPL <http://is.gd/3Udt>`__. 
"""
__author__  = "Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $"
__version__ = "0.1 $Revision$"[10:-1]
__date__    = "2011/07/31 $Date$"

from time import time

ST, MP = 15, 9
SST,BST,AST = ST, ST*MP, ST*MP-9
CARSTEP = 62
NOWHERE,FARWEST,WEST,NORTH,SOUTH,EAST,FAREAST = range(7)
HOUSES ='NOWHERE,FARWEST,WEST,NORTH,SOUTH,EAST,FAREAST'.split(',')

class Car:
    Z=50 #DEBUG
    def __init__(self, car):
        """ Standard initialiser.
        """
        self.car = car
        self.name = car.name
        self.loco = False
    def translate(self,x,y):
        self.car.translate(x,y)
    def translatez(self,x,y):
        self.car.translatez(x,y)
    def move(self,x,y):
        self.car.move(x,y)
    def pos(self):
        return self.car.pos()
    def split(self, cars, track):
        return cars, [self], 0
    def __eq__(self,other):
        #self.canvas.text(300,Car.Z,'%s = %s'%(self.name,other.name)) #DEBUG
        Car.Z+=20 #DEBUG
        return self.name == other.name

class Loco(Car):
    def split(self, cars, track):
        return [self], cars, 1
    pass
class NamedCar(Car):
    def __init__(self, car):
        """ Standard initialiser.
        """
        self.name = car
    

class Convoy:
    """ When splitting convoy, locomotive and cars left in rail can happen so:
    popfront:  cars and loco (loco_ahead), convoy and car(loco_behind)
    popback:  car and convoy(loco_ahead), loco and cars(loco_behind)
    when moving after split:
    forward: loco_ahead (no_engage), loco_behind (engage_going)
    backward: loco_ahead(engage_coming), loco_behind (no_engage)
    """
    def __init__(self, cars, rail):
        """ Standard initialiser.
        """
        self.convoy = cars
        self.track = rail
        rail.train = self
        self.is_splitting = 0
        self.engageable = [self.engage, self.no_engage, self.engage]
    def no_engage(self, backconvoy, frontconvoy): 
        NOUSE = None
    def pos(self): return self.convoy[0].pos()
    def move(self, x, y):NOUSE=[car.move(x,y) for car in self.convoy]
    def translate(self, step, across=0):
        NOUSE = [car.translate(step * 2 + across, -step + across // 2)
         for car in self.convoy]
    def advance(self, step, across=0):
        self.translate(step,across)
        self.translate(step and -self.is_splitting)
        self.is_splitting = 0
        return self.track.rail.check(self.convoy)
    def engage_coming(self):
        self.engageable[-self.is_splitting](self.track.rail.convoy, self.convoy)
    def engage_going(self):
        self.engageable[self.is_splitting](self.convoy, self.track.rail.convoy)
    def engage(self,backconvoy,frontconvoy):
        self.convoy =  backconvoy + frontconvoy
        minpos = min (car.pos() for car in self.convoy)
        self.move(*minpos)
        self.track.rail.convoy = []
        NOUSE = [car.translatez(pos*CARSTEP,-pos*CARSTEP//2)
                    for pos,car in enumerate(self.convoy)]
        self.is_splitting = 0
        
    def popfront(self):
        if not self.is_splitting: self._split_convoy()
    def popback(self):
        if not self.is_splitting:  self._split_convoy(0)
    def _split_loco(self, order = -1):
        return self.convoy.pop(order).split(self.convoy, self.track)
    def _split_convoy(self, order = -1):
        if (len(self.convoy) <2) or (self.is_splitting != 0): return
        self.convoy, self.track.rail.convoy, ahead = self._split_loco(order)
        self.is_splitting = (1 + 2 * order) * (ahead and -1 or 1)
        self.translate(self.is_splitting)
    def name(self): return ':'.join(car.name[:4] for car in self.convoy)

class Train(Convoy):
    def deploy(self, cars, rail, gui=None):
        """ Standard initialiser.
        """
        convoy = [Car(car) for car in cars[:-1]]+ [Loco(cars[-1])]
        Convoy.__init__(self,convoy,rail)
        for car in convoy: car.canvas = gui
        return self
        
class Rail:
    Z=40 #DEBUG
    def __init__(self, advance, fore, aft):
        """ Standard initialiser.
        """
        self.advance = advance
        self.fore = fore
        self.aft = aft
        self.convoy = []
        self.target = []
    def forward(self):
        return self.advance(*self.fore)
    def backward(self):
        return self.advance(*self.aft)
    def check(self, convoy):
        return False
    def change_signal(self,change):
        change()
class FRail(Rail):
    def backward(self):
        pass
    def check(self, convoy):
        #self.canvas.text(300,Rail.Z,'%s = %s'%(self.target,convoy)) #DEBUG
        Rail.Z+=20 #DEBUG
        return all(car.__eq__(self.target[i]) for i, car in enumerate(convoy))
class BRail(Rail):
    def forward(self):
        pass
class SRail(Rail):
    def change_signal(self,change):
        pass
        
class Track(dict):
    def __init__(self, signals, gui):
        """ Standard initialiser.
        """
        self.signals = signals
        self.gui = gui
        self.init = time()
        self.score = []
        self.scored = self.score_up()
        go = self.advance
        self.toglesign = 1
        self.stage = {
            FARWEST:FRail(go, (self, SST,(WEST,)), 
                         (self, 0,(FARWEST,))),
            WEST:Rail(go, (self, BST,(NORTH,SOUTH), AST),
                      (self, -SST,(FARWEST,))),
            NORTH:SRail(go, (self, BST,(EAST,)),
                       (self, -BST,(WEST,))),
            SOUTH:SRail(go, (self, BST,(EAST,), -AST),
                       (self, -BST,(WEST,), -AST)),
            EAST:Rail(go, (self, SST,(FAREAST,)),
                      (self, -BST,(NORTH,SOUTH), AST)),
            FAREAST:BRail(go, (self,0 ,(FAREAST,)),
                         (self, -SST,(EAST,))),
        }
        self.house = FARWEST
        self.rail = self.stage[FARWEST]
    def advance(self, slef, step, direction, across=0, bar=False):
        cross_direction = (-1-self.toglesign)//2
        self.house = direction[cross_direction]
        do_cross = -cross_direction*across
        self.rail = self.stage[self.house]
        if self.train.advance(step,do_cross):
            self.score_final()
        return step
    def score_up(self):
        t=time()
        moves_stream =''.join(s[0] for s in self.score)
        acts = len(moves_stream)
        moves = sum(1 for l in moves_stream if l in 'fb')
        disengages =sum(1 for l in moves_stream if l in 'ud')
        signals =sum(1 for l in moves_stream if l in 'c')
        movements = [s[0] for s in self.score]
        tp = [''.join(p) for p in zip(['a']+movements,movements+['a'])]
        double_movement = sum(1 for m in tp if m in 'ffzbb')
        inverted_movement = sum(1 for m in tp if m in 'fbzbfzcczudzdu')
        
        score = 'passos %03d desengates %03d sinais %03d tempo %06d t%f'
        #self.rr = self.gui.rect(190,10,600,30,'forest green')
        return (0.5*moves/(acts+1) +0.2*acts/(disengages+1)
                +  0.1*acts/(signals+1)+0.5*double_movement/(acts+1)
                -2.0*inverted_movement/(acts+1))
        #self.gui.text(400,20, score%(moves,disengages,signals,
             #time()-self.init, time()-t))
    def score_final(self):
        moves_stream =''.join(s[0] for s in self.score)
        moves = sum(1 for l in moves_stream if l in 'fb')
        disengages =sum(1 for l in moves_stream if l in 'ud')
        signals =sum(1 for l in moves_stream if l in 'c')
        times = [int(s[1]*100) for s in self.score]
        time_pairs = zip([0]+times,times+[0])
        step_times = [a[1]-a[0] for a in time_pairs[:-1]]
        average_step = sum(step_times)/len(step_times)
        from math import sqrt
        deviation = int(sqrt(sum((t-average_step)**2 for t in step_times)/len(step_times)))
        print tp
        print step_times, max(step_times), min (step_times), average_step, deviation
        print double_movement, inverted_movement
        movements = [s[0] for s in self.score]
        tp = [''.join(p) for p in zip(['a']+movements,movements+['a'])]
        double_movement = sum(1 for m in tp if m in 'ffzbb')
        inverted_movement = sum(1 for m in tp if m in 'fbzbfzcczudzdu')
        score = 'passos %03d desengates %03d sinais %03d avanços %03d retros %03d tmedio %05d tdesv %05d'
        return self.gui.text(400,20, score%(moves,disengages,signals,
             double_movement,inverted_movement,average_step,deviation))
        
    def forward(self):
        self.train.engage_going()
        self.rail.forward()
        self.train.engage_going()
        self.score_it('f')
        #self.scored = self.score_up()
    def backward(self):
        self.train.engage_coming()
        self.rail.backward()
        self.train.engage_coming()
        self.score_it('b')
        #self.scored = self.score_up()
    def popfront(self):
        self.train.popfront()
        self.score_it('u')
    def popback(self):
        self.train.popback()
        self.score_it('d')
    def change_signals(self):
        self.rail.change_signal(self.do_change_signals)
        self.score_it('c')
    
    def do_change_signals(self):
        cy=[signal.translate(2*62*(self.toglesign*(1-2*i)),62*(self.toglesign*(1-2*i)))
         for i,a in enumerate(((0,2),(2,4))) for signal in self.signals[a[0]:a[1]]]
        self.toglesign *= -1
    def score_it(self,operation):
        self.score.append([self.train.name(),HOUSES[self.house], operation, self.score_up(), time() - self.init])
        self.gui.score(self.score)

class Trains:
    """ O terreno onde o Festival Kuarup é apresentado
    """
    def quandoApertaUmaTecla(self, ev):
        self.track.change_signals()
        return False
    def inicia(self, gui):
        self.gui = gui
        self._trains_init()
        self.gui._inicia(self)
    def _trains_init(self):
        
        self.gui.image('trains.png',0,0,800,600,-4)
        self.gui.image('platform.gif',260,600-235-140,256,140,-3)
        self.gui.image('platform.gif',384,289,256,140,-2)
        self.gui.image('halfedplat.gif',0,396,175,98,-1)
        self.gui.image('halfedplat.gif',613,87,175,98,-1)

        signals=('sgfrontred.gif','sgbackgreen.gif','sgfrontgreen.gif','sgbackred.gif')
        self.signals = self.deploy(signals,62,336,210,24,68,oz=600)
        img= ('locomotiv.gif','goods.gif','cement.gif')
        self.track = Track(self.signals, self.gui)
        self.track.rail.target = [NamedCar(car) for car in img]
        self.track.rail.canvas = self.gui #DEBUG
        img= ('cement.gif','goods.gif','locomotiv.gif')
        self.train = Train([],self.track).deploy(
            self.deploy(img,CARSTEP, 0, 426,76,60,-1), self.track, self.gui) #DEBUG ,self.gui
        self.track.score_it('o')
        
    def deploy(self,imagevector,dx,ox,oy,w,h,axis=1, oz= None):
        return [self.gui.image(image,ox+i*dx,oy+axis*(i*dx/2),w,h,oz)
                     for i,image in enumerate(imagevector)]

    
if __name__ == "__main__":
    from main import GUI
    trains = Trains()
    trains.inicia(GUI())

