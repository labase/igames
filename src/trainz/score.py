sc = [('f', 2.5834789276123047),
('d', 6.7275500297546387),
('f', 9.9677290916442871),
('c', 10.970818996429443),
('b', 11.667006969451904),
('b', 13.111047983169556),
('c', 14.59709906578064),
('f', 15.433039903640747),
('f', 17.786386966705322),
('u', 21.95474910736084),
('b', 24.96818208694458),
('u', 28.522034883499146),
('f', 31.296478033065796),
('u', 36.497288942337036),
('c', 40.013150930404663),
('b', 40.653311967849731),
('b', 41.403323888778687),
('c', 42.521559953689575),
('f', 43.010061025619507),
('f', 43.982392072677612),
('c', 45.014934062957764),
('b', 45.494920015335083),
('b', 46.459322929382324),
('b', 47.117273092269897)]

moves_stream =''.join(s[0] for s in sc)
moves =sum(1 for l in moves_stream if l in 'fb')
disengages =sum(1 for l in moves_stream if l in 'ud')
signals =sum(1 for l in moves_stream if l in 'c')
print 'string,%s moves %d split %d signals %d'%(moves_stream,moves,disengages,signals)

times = [int(s[1]*10) for s in sc]
time_pairs = zip([0]+times,times+[0])
tm = [s[0] for s in sc]
tp = [''.join(p) for p in zip(['a']+tm,tm+['a'])]
go = sum(1 for m in tp if m in 'ffzbb')
ind = sum(1 for m in tp if m in 'fbzbfzcczudzdu')
step_times = [a[1]-a[0] for a in time_pairs[:-1]]
average_step = sum(step_times)/len(step_times)
from math import sqrt
deviation = sqrt(sum((t-average_step)**2 for t in step_times)/len(step_times))
print tp
print step_times, max(step_times), min (step_times), average_step, deviation
print go, ind

