/* start module: train */
$pyjs.loaded_modules['train'] = function (__mod_name__) {
	if($pyjs.loaded_modules['train'].__was_initialized__) return $pyjs.loaded_modules['train'];
	var $m = $pyjs.loaded_modules["train"];
	$m.__repr__ = function() { return "<module: train>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'train';
	$m.__name__ = __mod_name__;
	var $sub2,$sub1,$mul4,$mul3,$mul2,$mul1;

	$m['__author__'] = 'Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $';
	$m['__version__'] = $p['slice']('0.1 $Revision$', 10, (typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1)));
	$m['__date__'] = '2011/07/31 $Date$';
	$m['time'] = $p['___import___']('time.time', null, null, false);
	var $tupleassign1 = $p['tuple']([15, 9]);
	$m['ST'] = $tupleassign1.__getitem__(0);
	$m['MP'] = $tupleassign1.__getitem__(1);
	var $tupleassign2 = $p['tuple']([$m['ST'], (typeof ($mul1=$m['ST'])==typeof ($mul2=$m['MP']) && typeof $mul1=='number'?
		$mul1*$mul2:
		$p['op_mul']($mul1,$mul2)), $p['__op_sub']($sub1=(typeof ($mul3=$m['ST'])==typeof ($mul4=$m['MP']) && typeof $mul3=='number'?
		$mul3*$mul4:
		$p['op_mul']($mul3,$mul4)),$sub2=9)]);
	$m['SST'] = $tupleassign2.__getitem__(0);
	$m['BST'] = $tupleassign2.__getitem__(1);
	$m['AST'] = $tupleassign2.__getitem__(2);
	$m['CARSTEP'] = 62;
	var $tupleassign3 = $p['range'](7);
	$m['NOWHERE'] = $tupleassign3.__getitem__(0);
	$m['FARWEST'] = $tupleassign3.__getitem__(1);
	$m['WEST'] = $tupleassign3.__getitem__(2);
	$m['NORTH'] = $tupleassign3.__getitem__(3);
	$m['SOUTH'] = $tupleassign3.__getitem__(4);
	$m['EAST'] = $tupleassign3.__getitem__(5);
	$m['FAREAST'] = $tupleassign3.__getitem__(6);
	$m['HOUSES'] = 'NOWHERE,FARWEST,WEST,NORTH,SOUTH,EAST,FAREAST'['$$split'](',');
	$m['Car'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$cls_definition['Z'] = 50;
		$method = $pyjs__bind_method2('__init__', function(car) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				car = arguments[1];
			}
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('car', car) : $p['setattr'](self, 'car', car);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', (($attr1=($attr2=car)['$$name']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '$$name'):
						car['$$name'])) : $p['setattr'](self, '$$name', (($attr1=($attr2=car)['$$name']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '$$name'):
						car['$$name']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loco', false) : $p['setattr'](self, 'loco', false);
			return null;
		}
	, 1, [null,null,['self'],['car']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['car']['translate'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('translatez', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['car']['translatez'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translatez'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['car']['move'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('pos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['car']['pos']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['pos'] = $method;
		$method = $pyjs__bind_method2('$$split', function(cars, track) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cars = arguments[1];
				track = arguments[2];
			}

			return $p['tuple']([cars, $p['list']([self]), 0]);
		}
	, 1, [null,null,['self'],['cars'],['track']]);
		$cls_definition['$$split'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr8,$attr5,$attr4,$attr7,$attr6,$add2,$add1,$attr3;
			$m['Car'].__is_instance__ && typeof $m['Car'].__setattr__ == 'function' ? $m['Car'].__setattr__('Z', $p['__op_add']($add1=(($attr3=($attr4=$m['Car'])['Z']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'Z'):
						$m['Car']['Z']),$add2=20)) : $p['setattr']($m['Car'], 'Z', $p['__op_add']($add1=(($attr3=($attr4=$m['Car'])['Z']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'Z'):
						$m['Car']['Z']),$add2=20));
			return $p['op_eq']((($attr5=($attr6=self)['$$name']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '$$name'):
						self['$$name']), (($attr7=($attr8=other)['$$name']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, '$$name'):
						other['$$name']));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Car', $p['tuple']($bases), $data);
	})();
	$m['Loco'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('$$split', function(cars, track) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cars = arguments[1];
				track = arguments[2];
			}

			return $p['tuple']([$p['list']([self]), cars, 1]);
		}
	, 1, [null,null,['self'],['cars'],['track']]);
		$cls_definition['$$split'] = $method;
		var $bases = new Array($m['Car']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Loco', $p['tuple']($bases), $data);
	})();
	$m['NamedCar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('__init__', function(car) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				car = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', car) : $p['setattr'](self, '$$name', car);
			return null;
		}
	, 1, [null,null,['self'],['car']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Car']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NamedCar', $p['tuple']($bases), $data);
	})();
	$m['Convoy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('__init__', function(cars, rail) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cars = arguments[1];
				rail = arguments[2];
			}
			var $attr9,$attr14,$attr11,$attr10,$attr13,$attr12;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('convoy', cars) : $p['setattr'](self, 'convoy', cars);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('track', rail) : $p['setattr'](self, 'track', rail);
			rail.__is_instance__ && typeof rail.__setattr__ == 'function' ? rail.__setattr__('train', self) : $p['setattr'](rail, 'train', self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('is_splitting', 0) : $p['setattr'](self, 'is_splitting', 0);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('engageable', $p['list']([(($attr9=($attr10=self)['engage']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'engage'):
						self['engage']), (($attr11=($attr12=self)['no_engage']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'no_engage'):
						self['no_engage']), (($attr13=($attr14=self)['engage']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'engage'):
						self['engage'])])) : $p['setattr'](self, 'engageable', $p['list']([(($attr9=($attr10=self)['engage']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'engage'):
						self['engage']), (($attr11=($attr12=self)['no_engage']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'no_engage'):
						self['no_engage']), (($attr13=($attr14=self)['engage']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'engage'):
						self['engage'])]));
			return null;
		}
	, 1, [null,null,['self'],['cars'],['rail']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('no_engage', function(backconvoy, frontconvoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				backconvoy = arguments[1];
				frontconvoy = arguments[2];
			}
			var NOUSE;
			NOUSE = null;
			return null;
		}
	, 1, [null,null,['self'],['backconvoy'],['frontconvoy']]);
		$cls_definition['no_engage'] = $method;
		$method = $pyjs__bind_method2('pos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return (($attr15=($attr16=self)['convoy']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'convoy'):
						self['convoy']).__getitem__(0)['pos']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['pos'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var NOUSE;
			NOUSE = function(){
				var $iter1_nextval,$iter1_type,car,$iter1_iter,$listcomp1,$iter1_array,$iter1_idx;
	$listcomp1 = $p['list']();
			$iter1_iter = self['convoy'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				car = $iter1_nextval.$nextval;
				$listcomp1['append'](car['move'](x, y));
			}

	return $listcomp1;}();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('translate', function(step, across) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				step = arguments[1];
				across = arguments[2];
			}
			if (typeof across == 'undefined') across=arguments.callee.__args__[4][1];
			var NOUSE;
			NOUSE = function(){
				var $iter2_nextval,$iter2_type,$floordiv1,$iter2_iter,car,$add3,$iter2_idx,$listcomp2,$add6,$floordiv2,$add4,$add5,$mul6,$mul5,$iter2_array;
	$listcomp2 = $p['list']();
			$iter2_iter = self['convoy'];
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				car = $iter2_nextval.$nextval;
				$listcomp2['append'](car['translate']($p['__op_add']($add3=(typeof ($mul5=step)==typeof ($mul6=2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$add4=across), $p['__op_add']($add5=(typeof ($usub2=step)=='number'?
					-$usub2:
					$p['op_usub']($usub2)),$add6=(typeof ($floordiv1=across)==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2)))));
			}

	return $listcomp2;}();
			return null;
		}
	, 1, [null,null,['self'],['step'],['across', 0]]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('advance', function(step, across) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				step = arguments[1];
				across = arguments[2];
			}
			if (typeof across == 'undefined') across=arguments.callee.__args__[4][1];
			var $and1,$attr20,$attr19,$attr18,$attr17,$and2;
			self['translate'](step, across);
			self['translate'](($p['bool']($and1=step)?(typeof ($usub3=(($attr17=($attr18=self)['is_splitting']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'is_splitting'):
						self['is_splitting']))=='number'?
				-$usub3:
				$p['op_usub']($usub3)):$and1));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('is_splitting', 0) : $p['setattr'](self, 'is_splitting', 0);
			return self['track']['rail']['check']((($attr19=($attr20=self)['convoy']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'convoy'):
						self['convoy']));
		}
	, 1, [null,null,['self'],['step'],['across', 0]]);
		$cls_definition['advance'] = $method;
		$method = $pyjs__bind_method2('engage_coming', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28;
			(($attr21=($attr22=self)['engageable']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'engageable'):
						self['engageable']).__getitem__((typeof ($usub4=(($attr23=($attr24=self)['is_splitting']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'is_splitting'):
						self['is_splitting']))=='number'?
				-$usub4:
				$p['op_usub']($usub4)))((($attr25=($attr26=self['track']['rail'])['convoy']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'convoy'):
						self['track']['rail']['convoy']), (($attr27=($attr28=self)['convoy']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'convoy'):
						self['convoy']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['engage_coming'] = $method;
		$method = $pyjs__bind_method2('engage_going', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr30,$attr36,$attr35,$attr34,$attr29;
			(($attr29=($attr30=self)['engageable']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'engageable'):
						self['engageable']).__getitem__((($attr31=($attr32=self)['is_splitting']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'is_splitting'):
						self['is_splitting']))((($attr33=($attr34=self)['convoy']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'convoy'):
						self['convoy']), (($attr35=($attr36=self['track']['rail'])['convoy']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'convoy'):
						self['track']['rail']['convoy']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['engage_going'] = $method;
		$method = $pyjs__bind_method2('engage', function(backconvoy, frontconvoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				backconvoy = arguments[1];
				frontconvoy = arguments[2];
			}
			var $iter3_idx,minpos,car,$iter3_array,$iter3_iter,$iter3_type,$add8,$iter3_nextval,NOUSE,$add7;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('convoy', $p['__op_add']($add7=backconvoy,$add8=frontconvoy)) : $p['setattr'](self, 'convoy', $p['__op_add']($add7=backconvoy,$add8=frontconvoy));
			minpos = $p['min'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter3_iter = self['convoy'];
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							car = $iter3_nextval.$nextval;
							$yield_value = car['pos']();
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			$pyjs_kwargs_call(self, 'move', minpos, null, [{}]);
			self['track']['rail'].__is_instance__ && typeof self['track']['rail'].__setattr__ == 'function' ? self['track']['rail'].__setattr__('convoy', $p['list']([])) : $p['setattr'](self['track']['rail'], 'convoy', $p['list']([]));
			NOUSE = function(){
				var $mul9,$mul10,$iter4_nextval,$mul8,pos,$iter4_idx,$mul7,$listcomp3,$floordiv4,$attr37,$iter4_type,car,$iter4_array,$floordiv3,$attr38,$iter4_iter;
	$listcomp3 = $p['list']();
			$iter4_iter = $p['enumerate']((($attr37=($attr38=self)['convoy']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'convoy'):
						self['convoy']));
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,true);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				pos = $iter4_nextval.$nextval.__array[0];
				car = $iter4_nextval.$nextval.__array[1];
				$listcomp3['append'](car['translatez']((typeof ($mul7=pos)==typeof ($mul8=$m['CARSTEP']) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)), (typeof ($floordiv3=(typeof ($mul9=(typeof ($usub5=pos)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))==typeof ($mul10=$m['CARSTEP']) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($floordiv4=2) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math.floor($floordiv3/$floordiv4):
					$p['op_floordiv']($floordiv3,$floordiv4))));
			}

	return $listcomp3;}();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('is_splitting', 0) : $p['setattr'](self, 'is_splitting', 0);
			return null;
		}
	, 1, [null,null,['self'],['backconvoy'],['frontconvoy']]);
		$cls_definition['engage'] = $method;
		$method = $pyjs__bind_method2('popfront', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr39,$attr40;
			if ($p['bool'](!$p['bool']((($attr39=($attr40=self)['is_splitting']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'is_splitting'):
						self['is_splitting'])))) {
				self['_split_convoy']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popfront'] = $method;
		$method = $pyjs__bind_method2('popback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr42,$attr41;
			if ($p['bool'](!$p['bool']((($attr41=($attr42=self)['is_splitting']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'is_splitting'):
						self['is_splitting'])))) {
				self['_split_convoy'](0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popback'] = $method;
		$method = $pyjs__bind_method2('_split_loco', function(order) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				order = arguments[1];
			}
			if (typeof order == 'undefined') order=arguments.callee.__args__[3][1];
			var $attr46,$attr44,$attr45,$attr43;
			return self['convoy']['pop'](order)['$$split']((($attr43=($attr44=self)['convoy']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'convoy'):
						self['convoy']), (($attr45=($attr46=self)['track']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'track'):
						self['track']));
		}
	, 1, [null,null,['self'],['order', (typeof ($usub6=1)=='number'?
			-$usub6:
			$p['op_usub']($usub6))]]);
		$cls_definition['_split_loco'] = $method;
		$method = $pyjs__bind_method2('_split_convoy', function(order) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				order = arguments[1];
			}
			if (typeof order == 'undefined') order=arguments.callee.__args__[3][1];
			var $attr52,$or4,$mul12,$or1,$mul11,ahead,$or2,$attr51,$attr50,$and3,$and4,$attr47,$mul14,$add10,$or3,$mul13,$add9,$attr48,$attr49;
			if ($p['bool'](($p['bool']($or1=($p['cmp']($p['len']((($attr47=($attr48=self)['convoy']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'convoy'):
						self['convoy'])), 2) == -1))?$or1:!$p['op_eq']((($attr49=($attr50=self)['is_splitting']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'is_splitting'):
						self['is_splitting']), 0)))) {
				return null;
			}
			var $tupleassign4 = self['_split_loco'](order);
			self.convoy = $tupleassign4.__getitem__(0);
			self['track']['rail'].convoy = $tupleassign4.__getitem__(1);
			ahead = $tupleassign4.__getitem__(2);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('is_splitting', (typeof ($mul13=$p['__op_add']($add9=1,$add10=(typeof ($mul11=2)==typeof ($mul12=order) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))))==typeof ($mul14=($p['bool']($or3=($p['bool']($and3=ahead)?(typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7)):$and3))?$or3:1)) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))) : $p['setattr'](self, 'is_splitting', (typeof ($mul13=$p['__op_add']($add9=1,$add10=(typeof ($mul11=2)==typeof ($mul12=order) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))))==typeof ($mul14=($p['bool']($or3=($p['bool']($and3=ahead)?(typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7)):$and3))?$or3:1)) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)));
			self['translate']((($attr51=($attr52=self)['is_splitting']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'is_splitting'):
						self['is_splitting']));
			return null;
		}
	, 1, [null,null,['self'],['order', (typeof ($usub8=1)=='number'?
			-$usub8:
			$p['op_usub']($usub8))]]);
		$cls_definition['_split_convoy'] = $method;
		$method = $pyjs__bind_method2('$$name', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_idx,$attr54,$iter5_iter,$iter5_array,$iter5_type,$attr53,car;
			return ':'['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter5_iter = self['convoy'];
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							car = $iter5_nextval.$nextval;
							$yield_value = $p['slice']((($attr53=($attr54=car)['$$name']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
										$p['getattr']($attr54, '$$name'):
										car['$$name']), 0, 4);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
		}
	, 1, [null,null,['self']]);
		$cls_definition['$$name'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Convoy', $p['tuple']($bases), $data);
	})();
	$m['Train'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('deploy', function(cars, rail, gui) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cars = arguments[1];
				rail = arguments[2];
				gui = arguments[3];
			}
			if (typeof gui == 'undefined') gui=arguments.callee.__args__[5][1];
			var convoy,$iter7_nextval,$iter7_idx,$iter7_array,$add11,$add12,$iter7_iter,$iter7_type,car;
			convoy = $p['__op_add']($add11=function(){
				var $iter6_idx,$iter6_type,car,$iter6_array,$listcomp4,$iter6_iter,$iter6_nextval;
	$listcomp4 = $p['list']();
			$iter6_iter = $p['slice'](cars, 0, (typeof ($usub9=1)=='number'?
				-$usub9:
				$p['op_usub']($usub9)));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				car = $iter6_nextval.$nextval;
				$listcomp4['append']($m['Car'](car));
			}

	return $listcomp4;}(),$add12=$p['list']([$m['Loco'](cars.__getitem__((typeof ($usub10=1)=='number'?
				-$usub10:
				$p['op_usub']($usub10))))]));
			$m['Convoy']['__init__'](self, convoy, rail);
			$iter7_iter = convoy;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				car = $iter7_nextval.$nextval;
				car.__is_instance__ && typeof car.__setattr__ == 'function' ? car.__setattr__('canvas', gui) : $p['setattr'](car, 'canvas', gui);
			}
			return self;
		}
	, 1, [null,null,['self'],['cars'],['rail'],['gui', null]]);
		$cls_definition['deploy'] = $method;
		var $bases = new Array($m['Convoy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Train', $p['tuple']($bases), $data);
	})();
	$m['Rail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$cls_definition['Z'] = 40;
		$method = $pyjs__bind_method2('__init__', function(advance, fore, aft) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				advance = arguments[1];
				fore = arguments[2];
				aft = arguments[3];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('advance', advance) : $p['setattr'](self, 'advance', advance);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fore', fore) : $p['setattr'](self, 'fore', fore);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('aft', aft) : $p['setattr'](self, 'aft', aft);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('convoy', $p['list']([])) : $p['setattr'](self, 'convoy', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('target', $p['list']([])) : $p['setattr'](self, 'target', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self'],['advance'],['fore'],['aft']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('forward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$attr56;
			return $pyjs_kwargs_call(self, 'advance', (($attr55=($attr56=self)['fore']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'fore'):
						self['fore']), null, [{}]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['forward'] = $method;
		$method = $pyjs__bind_method2('backward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$attr57;
			return $pyjs_kwargs_call(self, 'advance', (($attr57=($attr58=self)['aft']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'aft'):
						self['aft']), null, [{}]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['backward'] = $method;
		$method = $pyjs__bind_method2('check', function(convoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				convoy = arguments[1];
			}

			return false;
		}
	, 1, [null,null,['self'],['convoy']]);
		$cls_definition['check'] = $method;
		$method = $pyjs__bind_method2('change_signal', function(change) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				change = arguments[1];
			}

			change();
			return null;
		}
	, 1, [null,null,['self'],['change']]);
		$cls_definition['change_signal'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Rail', $p['tuple']($bases), $data);
	})();
	$m['FRail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('backward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['backward'] = $method;
		$method = $pyjs__bind_method2('check', function(convoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				convoy = arguments[1];
			}
			var $attr59,$iter8_iter,i,$iter8_array,$attr60,$attr61,$attr62,$add14,$iter8_nextval,$add13,$iter8_idx,$iter8_type,car;
			$m['Rail'].__is_instance__ && typeof $m['Rail'].__setattr__ == 'function' ? $m['Rail'].__setattr__('Z', $p['__op_add']($add13=(($attr59=($attr60=$m['Rail'])['Z']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Z'):
						$m['Rail']['Z']),$add14=20)) : $p['setattr']($m['Rail'], 'Z', $p['__op_add']($add13=(($attr59=($attr60=$m['Rail'])['Z']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Z'):
						$m['Rail']['Z']),$add14=20));
			return $p['all'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter8_iter = $p['enumerate'](convoy);
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,true);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							i = $iter8_nextval.$nextval.__array[0];
							car = $iter8_nextval.$nextval.__array[1];
							$yield_value = car['__eq__']((($attr61=($attr62=self)['target']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
										$p['getattr']($attr62, 'target'):
										self['target']).__getitem__(i));
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
		}
	, 1, [null,null,['self'],['convoy']]);
		$cls_definition['check'] = $method;
		var $bases = new Array($m['Rail']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FRail', $p['tuple']($bases), $data);
	})();
	$m['BRail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('forward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['forward'] = $method;
		var $bases = new Array($m['Rail']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BRail', $p['tuple']($bases), $data);
	})();
	$m['SRail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('change_signal', function(change) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				change = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['change']]);
		$cls_definition['change_signal'] = $method;
		var $bases = new Array($m['Rail']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SRail', $p['tuple']($bases), $data);
	})();
	$m['Track'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('__init__', function(signals, gui) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				signals = arguments[1];
				gui = arguments[2];
			}
			var $attr64,$attr65,$attr63,$attr66,go;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('signals', signals) : $p['setattr'](self, 'signals', signals);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gui', gui) : $p['setattr'](self, 'gui', gui);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('init', $m['time']()) : $p['setattr'](self, 'init', $m['time']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('score', $p['list']([])) : $p['setattr'](self, 'score', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('scored', self['score_up']()) : $p['setattr'](self, 'scored', self['score_up']());
			go = (($attr63=($attr64=self)['advance']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'advance'):
						self['advance']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toglesign', 1) : $p['setattr'](self, 'toglesign', 1);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stage', $p['dict']([[$m['FARWEST'], $m['FRail'](go, $p['tuple']([self, $m['SST'], $p['tuple']([$m['WEST']])]), $p['tuple']([self, 0, $p['tuple']([$m['FARWEST']])]))], [$m['WEST'], $m['Rail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['NORTH'], $m['SOUTH']]), $m['AST']]), $p['tuple']([self, (typeof ($usub11=$m['SST'])=='number'?
				-$usub11:
				$p['op_usub']($usub11)), $p['tuple']([$m['FARWEST']])]))], [$m['NORTH'], $m['SRail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['EAST']])]), $p['tuple']([self, (typeof ($usub12=$m['BST'])=='number'?
				-$usub12:
				$p['op_usub']($usub12)), $p['tuple']([$m['WEST']])]))], [$m['SOUTH'], $m['SRail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['EAST']]), (typeof ($usub13=$m['AST'])=='number'?
				-$usub13:
				$p['op_usub']($usub13))]), $p['tuple']([self, (typeof ($usub14=$m['BST'])=='number'?
				-$usub14:
				$p['op_usub']($usub14)), $p['tuple']([$m['WEST']]), (typeof ($usub15=$m['AST'])=='number'?
				-$usub15:
				$p['op_usub']($usub15))]))], [$m['EAST'], $m['Rail'](go, $p['tuple']([self, $m['SST'], $p['tuple']([$m['FAREAST']])]), $p['tuple']([self, (typeof ($usub16=$m['BST'])=='number'?
				-$usub16:
				$p['op_usub']($usub16)), $p['tuple']([$m['NORTH'], $m['SOUTH']]), $m['AST']]))], [$m['FAREAST'], $m['BRail'](go, $p['tuple']([self, 0, $p['tuple']([$m['FAREAST']])]), $p['tuple']([self, (typeof ($usub17=$m['SST'])=='number'?
				-$usub17:
				$p['op_usub']($usub17)), $p['tuple']([$m['EAST']])]))]])) : $p['setattr'](self, 'stage', $p['dict']([[$m['FARWEST'], $m['FRail'](go, $p['tuple']([self, $m['SST'], $p['tuple']([$m['WEST']])]), $p['tuple']([self, 0, $p['tuple']([$m['FARWEST']])]))], [$m['WEST'], $m['Rail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['NORTH'], $m['SOUTH']]), $m['AST']]), $p['tuple']([self, (typeof ($usub11=$m['SST'])=='number'?
				-$usub11:
				$p['op_usub']($usub11)), $p['tuple']([$m['FARWEST']])]))], [$m['NORTH'], $m['SRail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['EAST']])]), $p['tuple']([self, (typeof ($usub12=$m['BST'])=='number'?
				-$usub12:
				$p['op_usub']($usub12)), $p['tuple']([$m['WEST']])]))], [$m['SOUTH'], $m['SRail'](go, $p['tuple']([self, $m['BST'], $p['tuple']([$m['EAST']]), (typeof ($usub13=$m['AST'])=='number'?
				-$usub13:
				$p['op_usub']($usub13))]), $p['tuple']([self, (typeof ($usub14=$m['BST'])=='number'?
				-$usub14:
				$p['op_usub']($usub14)), $p['tuple']([$m['WEST']]), (typeof ($usub15=$m['AST'])=='number'?
				-$usub15:
				$p['op_usub']($usub15))]))], [$m['EAST'], $m['Rail'](go, $p['tuple']([self, $m['SST'], $p['tuple']([$m['FAREAST']])]), $p['tuple']([self, (typeof ($usub16=$m['BST'])=='number'?
				-$usub16:
				$p['op_usub']($usub16)), $p['tuple']([$m['NORTH'], $m['SOUTH']]), $m['AST']]))], [$m['FAREAST'], $m['BRail'](go, $p['tuple']([self, 0, $p['tuple']([$m['FAREAST']])]), $p['tuple']([self, (typeof ($usub17=$m['SST'])=='number'?
				-$usub17:
				$p['op_usub']($usub17)), $p['tuple']([$m['EAST']])]))]]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('house', $m['FARWEST']) : $p['setattr'](self, 'house', $m['FARWEST']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rail', (($attr65=($attr66=self)['stage']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'stage'):
						self['stage']).__getitem__($m['FARWEST'])) : $p['setattr'](self, 'rail', (($attr65=($attr66=self)['stage']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'stage'):
						self['stage']).__getitem__($m['FARWEST']));
			return null;
		}
	, 1, [null,null,['self'],['signals'],['gui']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('advance', function(slef, step, direction, across, bar) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				slef = arguments[1];
				step = arguments[2];
				direction = arguments[3];
				across = arguments[4];
				bar = arguments[5];
			}
			if (typeof across == 'undefined') across=arguments.callee.__args__[6][1];
			if (typeof bar == 'undefined') bar=arguments.callee.__args__[7][1];
			var cross_direction,$attr69,$mul16,$mul15,$attr67,$floordiv5,do_cross,$attr70,$floordiv6,$attr71,$sub3,$attr68,$attr72,$sub4;
			cross_direction = (typeof ($floordiv5=$p['__op_sub']($sub3=(typeof ($usub18=1)=='number'?
				-$usub18:
				$p['op_usub']($usub18)),$sub4=(($attr67=($attr68=self)['toglesign']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'toglesign'):
						self['toglesign'])))==typeof ($floordiv6=2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
				Math.floor($floordiv5/$floordiv6):
				$p['op_floordiv']($floordiv5,$floordiv6));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('house', direction.__getitem__(cross_direction)) : $p['setattr'](self, 'house', direction.__getitem__(cross_direction));
			do_cross = (typeof ($mul15=(typeof ($usub19=cross_direction)=='number'?
				-$usub19:
				$p['op_usub']($usub19)))==typeof ($mul16=across) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rail', (($attr69=($attr70=self)['stage']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'stage'):
						self['stage']).__getitem__((($attr71=($attr72=self)['house']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'house'):
						self['house']))) : $p['setattr'](self, 'rail', (($attr69=($attr70=self)['stage']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'stage'):
						self['stage']).__getitem__((($attr71=($attr72=self)['house']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'house'):
						self['house'])));
			if ($p['bool'](self['train']['advance'](step, do_cross))) {
				self['score_final']();
			}
			return step;
		}
	, 1, [null,null,['self'],['slef'],['step'],['direction'],['across', 0],['bar', false]]);
		$cls_definition['advance'] = $method;
		$method = $pyjs__bind_method2('score_up', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add20,$iter10_nextval,$sub6,$add34,moves_stream,$add30,$mul18,$iter16_idx,$add25,$div7,$mul19,$iter15_idx,$iter10_iter,moves,double_movement,movements,$add29,$add28,$div8,$mul25,$iter15_iter,$iter16_type,$iter9_iter,$add21,$iter16_iter,acts,$iter9_nextval,$iter9_idx,tp,$add26,signals,score,$add31,$iter16_nextval,$mul24,$iter11_idx,$mul22,$iter9_type,$mul20,$mul21,$mul17,$iter15_array,$add27,$iter11_iter,$iter10_idx,$iter12_array,$add23,$mul23,$mul26,disengages,$div9,$iter11_array,$div2,$div3,$iter11_nextval,$div1,$div6,$add19,$div4,$div5,$iter16_array,$add22,inverted_movement,$div10,$sub5,$add32,$add33,$iter12_type,$iter11_type,m,l,$iter10_array,$iter12_nextval,$iter12_iter,s,t,$iter15_nextval,$iter15_type,$iter10_type,$add24,$iter12_idx,$iter9_array;
			t = $m['time']();
			moves_stream = ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter9_iter = self['score'];
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							s = $iter9_nextval.$nextval;
							$yield_value = s.__getitem__(0);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			acts = $p['len'](moves_stream);
			moves = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter10_iter = moves_stream;
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter10_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('fb'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			disengages = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter11_iter = moves_stream;
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter11_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('ud'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			signals = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter12_iter = moves_stream;
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter12_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('c'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			movements = function(){
				var $iter13_nextval,$iter13_iter,$iter13_type,s,$listcomp5,$iter13_idx,$iter13_array;
	$listcomp5 = $p['list']();
			$iter13_iter = self['score'];
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
				s = $iter13_nextval.$nextval;
				$listcomp5['append'](s.__getitem__(0));
			}

	return $listcomp5;}();
			tp = function(){
				var $iter14_array,$iter14_type,$add15,p,$add16,$add17,$iter14_iter,$listcomp6,$add18,$iter14_idx,$iter14_nextval;
	$listcomp6 = $p['list']();
			$iter14_iter = $p['zip']($p['__op_add']($add15=$p['list'](['a']),$add16=movements), $p['__op_add']($add17=movements,$add18=$p['list'](['a'])));
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
				p = $iter14_nextval.$nextval;
				$listcomp6['append'](''['join'](p));
			}

	return $listcomp6;}();
			double_movement = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter15_iter = tp;
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							m = $iter15_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('ffzbb'.__contains__(m))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			inverted_movement = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter16_iter = tp;
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							m = $iter16_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('fbzbfzcczudzdu'.__contains__(m))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			score = 'passos %03d desengates %03d sinais %03d tempo %06d t%f';
			return $p['__op_sub']($sub5=$p['__op_add']($add31=$p['__op_add']($add27=$p['__op_add']($add23=(typeof ($div1=(typeof ($mul17=0.5)==typeof ($mul18=moves) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)))==typeof ($div2=$p['__op_add']($add19=acts,$add20=1)) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)),$add24=(typeof ($div3=(typeof ($mul19=0.2)==typeof ($mul20=acts) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)))==typeof ($div4=$p['__op_add']($add21=disengages,$add22=1)) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))),$add28=(typeof ($div5=(typeof ($mul21=0.1)==typeof ($mul22=acts) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22)))==typeof ($div6=$p['__op_add']($add25=signals,$add26=1)) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6))),$add32=(typeof ($div7=(typeof ($mul23=0.5)==typeof ($mul24=double_movement) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)))==typeof ($div8=$p['__op_add']($add29=acts,$add30=1)) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))),$sub6=(typeof ($div9=(typeof ($mul25=2.0)==typeof ($mul26=inverted_movement) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)))==typeof ($div10=$p['__op_add']($add33=acts,$add34=1)) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['score_up'] = $method;
		$method = $pyjs__bind_method2('score_final', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter26_iter,$iter18_type,$iter20_nextval,deviation,$iter27_idx,$iter26_nextval,moves_stream,$mod2,average_step,$add37,$add35,$iter26_idx,$mod1,$iter23_idx,sqrt,$iter26_array,$iter17_type,moves,double_movement,$iter20_array,$iter27_nextval,$iter17_iter,$pow2,$pow1,$iter26_type,$iter23_iter,time_pairs,$iter19_nextval,$div12,$div13,signals,$iter19_iter,$iter18_idx,$iter20_idx,$iter27_iter,$iter18_nextval,$iter27_type,t,$iter17_nextval,$iter20_iter,$iter18_iter,$sub10,m,$iter19_array,$iter17_array,disengages,$iter20_type,$iter23_array,movements,score,$add38,$iter19_idx,inverted_movement,$iter23_nextval,$iter18_array,tp,$add36,l,times,$div14,s,$iter19_type,$div11,$iter23_type,$iter27_array,$iter17_idx,step_times,$sub9;
			moves_stream = ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter17_iter = self['score'];
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter17_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							s = $iter17_nextval.$nextval;
							$yield_value = s.__getitem__(0);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			moves = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter18_iter = moves_stream;
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter18_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter18_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('fb'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			disengages = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter19_iter = moves_stream;
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter19_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter19_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('ud'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			signals = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter20_iter = moves_stream;
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter20_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							l = $iter20_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('c'.__contains__(l))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			times = function(){
				var $iter21_idx,$listcomp7,$iter21_nextval,s,$iter21_type,$iter21_iter,$iter21_array,$mul27,$mul28;
	$listcomp7 = $p['list']();
			$iter21_iter = self['score'];
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval).$nextval) != 'undefined') {
				s = $iter21_nextval.$nextval;
				$listcomp7['append']($p['float_int']((typeof ($mul27=s.__getitem__(1))==typeof ($mul28=100) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28))));
			}

	return $listcomp7;}();
			time_pairs = $p['zip']($p['__op_add']($add35=$p['list']([0]),$add36=times), $p['__op_add']($add37=times,$add38=$p['list']([0])));
			step_times = function(){
				var a,$iter22_array,$iter22_nextval,$iter22_idx,$sub8,$iter22_type,$listcomp8,$sub7,$iter22_iter;
	$listcomp8 = $p['list']();
			$iter22_iter = $p['slice'](time_pairs, 0, (typeof ($usub20=1)=='number'?
				-$usub20:
				$p['op_usub']($usub20)));
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval).$nextval) != 'undefined') {
				a = $iter22_nextval.$nextval;
				$listcomp8['append']($p['__op_sub']($sub7=a.__getitem__(1),$sub8=a.__getitem__(0)));
			}

	return $listcomp8;}();
			average_step = (typeof ($div11=$p['sum'](step_times))==typeof ($div12=$p['len'](step_times)) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12));
			sqrt = $p['___import___']('math.sqrt', null, null, false);
			deviation = $p['float_int'](sqrt((typeof ($div13=$p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter23_iter = step_times;
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter23_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							t = $iter23_nextval.$nextval;
							$yield_value = (typeof ($pow1=$p['__op_sub']($sub9=t,$sub10=average_step))==typeof ($pow2=2) && typeof $pow1=='number'?
								Math.pow($pow1,$pow2):
								$p['op_pow']($pow1,$pow2));
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
))==typeof ($div14=$p['len'](step_times)) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))));
			$p['printFunc']([(typeof tp == "undefined"?$m.tp:tp)], 1);
			$p['printFunc']([step_times, $p['max'](step_times), $p['min'](step_times), average_step, deviation], 1);
			$p['printFunc']([(typeof double_movement == "undefined"?$m.double_movement:double_movement), (typeof inverted_movement == "undefined"?$m.inverted_movement:inverted_movement)], 1);
			movements = function(){
				var $iter24_idx,$iter24_type,s,$iter24_array,$listcomp9,$iter24_iter,$iter24_nextval;
	$listcomp9 = $p['list']();
			$iter24_iter = self['score'];
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval).$nextval) != 'undefined') {
				s = $iter24_nextval.$nextval;
				$listcomp9['append'](s.__getitem__(0));
			}

	return $listcomp9;}();
			tp = function(){
				var $add39,$iter25_nextval,$iter25_array,$add42,$iter25_iter,$add40,p,$add41,$listcomp10,$iter25_idx,$iter25_type;
	$listcomp10 = $p['list']();
			$iter25_iter = $p['zip']($p['__op_add']($add39=$p['list'](['a']),$add40=movements), $p['__op_add']($add41=movements,$add42=$p['list'](['a'])));
			$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
			while (typeof($p['__wrapped_next']($iter25_nextval).$nextval) != 'undefined') {
				p = $iter25_nextval.$nextval;
				$listcomp10['append'](''['join'](p));
			}

	return $listcomp10;}();
			double_movement = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter26_iter = tp;
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter26_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							m = $iter26_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('ffzbb'.__contains__(m))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			inverted_movement = $p['sum'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration'];
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === $p['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration'];
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter27_iter = tp;
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter27_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							m = $iter27_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']('fbzbfzcczudzdu'.__contains__(m))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = 1;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			score = 'passos %03d desengates %03d sinais %03d avanços %03d retros %03d tmedio %05d tdesv %05d';
			return self['gui']['text'](400, 20, (typeof ($mod1=score)==typeof ($mod2=$p['tuple']([moves, disengages, signals, double_movement, inverted_movement, average_step, deviation])) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['score_final'] = $method;
		$method = $pyjs__bind_method2('forward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['train']['engage_going']();
			self['rail']['forward']();
			self['train']['engage_going']();
			self['score_it']('f');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['forward'] = $method;
		$method = $pyjs__bind_method2('backward', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['train']['engage_coming']();
			self['rail']['backward']();
			self['train']['engage_coming']();
			self['score_it']('b');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['backward'] = $method;
		$method = $pyjs__bind_method2('popfront', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['train']['popfront']();
			self['score_it']('u');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popfront'] = $method;
		$method = $pyjs__bind_method2('popback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['train']['popback']();
			self['score_it']('d');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popback'] = $method;
		$method = $pyjs__bind_method2('change_signals', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73;
			self['rail']['change_signal']((($attr73=($attr74=self)['do_change_signals']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'do_change_signals'):
						self['do_change_signals']));
			self['score_it']('c');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['change_signals'] = $method;
		$method = $pyjs__bind_method2('do_change_signals', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr82,$attr81,$mul44,$mul43,cy;
			cy = function(){
				var $iter28_idx,$listcomp11,$iter29_iter,$attr80,$attr75,$iter29_type,$mul40,$mul41,$mul42,$mul29,$iter29_array,$sub13,$sub12,$sub11,$sub14,$iter29_nextval,$iter28_iter,$iter28_type,$mul37,a,$attr79,$iter28_array,i,$attr76,signal,$attr78,$mul30,$attr77,$mul39,$mul38,$mul35,$mul34,$iter29_idx,$mul36,$mul31,$iter28_nextval,$mul33,$mul32;
	$listcomp11 = $p['list']();
			$iter28_iter = $p['enumerate']($p['tuple']([$p['tuple']([0, 2]), $p['tuple']([2, 4])]));
			$iter28_nextval=$p['__iter_prepare']($iter28_iter,true);
			while (typeof($p['__wrapped_next']($iter28_nextval).$nextval) != 'undefined') {
				i = $iter28_nextval.$nextval.__array[0];
				a = $iter28_nextval.$nextval.__array[1];
				$iter29_iter = $p['slice']((($attr75=($attr76=self)['signals']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
							$p['getattr']($attr76, 'signals'):
							self['signals']), a.__getitem__(0), a.__getitem__(1));
				$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
				while (typeof($p['__wrapped_next']($iter29_nextval).$nextval) != 'undefined') {
					signal = $iter29_nextval.$nextval;
					$listcomp11['append'](signal['translate']((typeof ($mul35=(typeof ($mul29=2)==typeof ($mul30=62) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30)))==typeof ($mul36=(typeof ($mul33=(($attr77=($attr78=self)['toglesign']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
								$p['getattr']($attr78, 'toglesign'):
								self['toglesign']))==typeof ($mul34=$p['__op_sub']($sub11=1,$sub12=(typeof ($mul31=2)==typeof ($mul32=i) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32)))) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34))) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)), (typeof ($mul41=62)==typeof ($mul42=(typeof ($mul39=(($attr79=($attr80=self)['toglesign']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
								$p['getattr']($attr80, 'toglesign'):
								self['toglesign']))==typeof ($mul40=$p['__op_sub']($sub13=1,$sub14=(typeof ($mul37=2)==typeof ($mul38=i) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)))) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40))) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42))));
				}
			}

	return $listcomp11;}();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toglesign', (typeof ($mul43=(($attr81=($attr82=self)['toglesign']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'toglesign'):
						self['toglesign']))==typeof ($mul44=(typeof ($usub21=1)=='number'?
				-$usub21:
				$p['op_usub']($usub21))) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44))) : $p['setattr'](self, 'toglesign', (typeof ($mul43=(($attr81=($attr82=self)['toglesign']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'toglesign'):
						self['toglesign']))==typeof ($mul44=(typeof ($usub21=1)=='number'?
				-$usub21:
				$p['op_usub']($usub21))) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['do_change_signals'] = $method;
		$method = $pyjs__bind_method2('score_it', function(operation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				operation = arguments[1];
			}
			var $attr83,$attr86,$attr87,$attr84,$attr85,$sub16,$sub15,$attr88;
			self['score']['append']($p['list']([self['train']['$$name'](), $m['HOUSES'].__getitem__((($attr83=($attr84=self)['house']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
						$p['getattr']($attr84, 'house'):
						self['house'])), operation, self['score_up'](), $p['__op_sub']($sub15=$m['time'](),$sub16=(($attr85=($attr86=self)['init']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
						$p['getattr']($attr86, 'init'):
						self['init']))]));
			self['gui']['score']((($attr87=($attr88=self)['score']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
						$p['getattr']($attr88, 'score'):
						self['score']));
			return null;
		}
	, 1, [null,null,['self'],['operation']]);
		$cls_definition['score_it'] = $method;
		var $bases = new Array($p['dict']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Track', $p['tuple']($bases), $data);
	})();
	$m['Trains'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'train';
		$method = $pyjs__bind_method2('quandoApertaUmaTecla', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['track']['change_signals']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['quandoApertaUmaTecla'] = $method;
		$method = $pyjs__bind_method2('inicia', function(gui) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gui = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gui', gui) : $p['setattr'](self, 'gui', gui);
			self['_trains_init']();
			self['gui']['_inicia'](self);
			return null;
		}
	, 1, [null,null,['self'],['gui']]);
		$cls_definition['inicia'] = $method;
		$method = $pyjs__bind_method2('_trains_init', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr95,$attr94,$sub19,$sub18,$attr91,$attr90,img,$attr92,$attr93,$attr89,$sub17,$sub20,$attr98,signals,$attr97,$attr96,$attr100,$attr99;
			self['gui']['image']('trains.png', 0, 0, 800, 600, (typeof ($usub22=4)=='number'?
				-$usub22:
				$p['op_usub']($usub22)));
			self['gui']['image']('platform.gif', 260, $p['__op_sub']($sub19=$p['__op_sub']($sub17=600,$sub18=235),$sub20=140), 256, 140, (typeof ($usub23=3)=='number'?
				-$usub23:
				$p['op_usub']($usub23)));
			self['gui']['image']('platform.gif', 384, 289, 256, 140, (typeof ($usub24=2)=='number'?
				-$usub24:
				$p['op_usub']($usub24)));
			self['gui']['image']('halfedplat.gif', 0, 396, 175, 98, (typeof ($usub25=1)=='number'?
				-$usub25:
				$p['op_usub']($usub25)));
			self['gui']['image']('halfedplat.gif', 613, 87, 175, 98, (typeof ($usub26=1)=='number'?
				-$usub26:
				$p['op_usub']($usub26)));
			signals = $p['tuple'](['sgfrontred.gif', 'sgbackgreen.gif', 'sgfrontgreen.gif', 'sgbackred.gif']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('signals', $pyjs_kwargs_call(self, 'deploy', null, null, [{oz:600}, signals, 62, 336, 210, 24, 68])) : $p['setattr'](self, 'signals', $pyjs_kwargs_call(self, 'deploy', null, null, [{oz:600}, signals, 62, 336, 210, 24, 68]));
			img = $p['tuple'](['locomotiv.gif', 'goods.gif', 'cement.gif']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('track', $m['Track']((($attr89=($attr90=self)['signals']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'signals'):
						self['signals']), (($attr91=($attr92=self)['gui']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
						$p['getattr']($attr92, 'gui'):
						self['gui']))) : $p['setattr'](self, 'track', $m['Track']((($attr89=($attr90=self)['signals']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'signals'):
						self['signals']), (($attr91=($attr92=self)['gui']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
						$p['getattr']($attr92, 'gui'):
						self['gui'])));
			self['track']['rail'].__is_instance__ && typeof self['track']['rail'].__setattr__ == 'function' ? self['track']['rail'].__setattr__('target', function(){
				var $iter30_type,$iter30_nextval,$iter30_iter,car,$iter30_idx,$listcomp12,$iter30_array;
	$listcomp12 = $p['list']();
			$iter30_iter = img;
			$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
			while (typeof($p['__wrapped_next']($iter30_nextval).$nextval) != 'undefined') {
				car = $iter30_nextval.$nextval;
				$listcomp12['append']($m['NamedCar'](car));
			}

	return $listcomp12;}()) : $p['setattr'](self['track']['rail'], 'target', function(){
				var $iter30_type,$iter30_nextval,$iter30_iter,car,$iter30_idx,$listcomp12,$iter30_array;
	$listcomp12 = $p['list']();
			$iter30_iter = img;
			$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
			while (typeof($p['__wrapped_next']($iter30_nextval).$nextval) != 'undefined') {
				car = $iter30_nextval.$nextval;
				$listcomp12['append']($m['NamedCar'](car));
			}

	return $listcomp12;}());
			self['track']['rail'].__is_instance__ && typeof self['track']['rail'].__setattr__ == 'function' ? self['track']['rail'].__setattr__('canvas', (($attr93=($attr94=self)['gui']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
						$p['getattr']($attr94, 'gui'):
						self['gui'])) : $p['setattr'](self['track']['rail'], 'canvas', (($attr93=($attr94=self)['gui']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
						$p['getattr']($attr94, 'gui'):
						self['gui']));
			img = $p['tuple'](['cement.gif', 'goods.gif', 'locomotiv.gif']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('train', $m['Train']($p['list']([]), (($attr95=($attr96=self)['track']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'track'):
						self['track']))['deploy'](self['deploy'](img, $m['CARSTEP'], 0, 426, 76, 60, (typeof ($usub27=1)=='number'?
				-$usub27:
				$p['op_usub']($usub27))), (($attr97=($attr98=self)['track']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
						$p['getattr']($attr98, 'track'):
						self['track']), (($attr99=($attr100=self)['gui']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
						$p['getattr']($attr100, 'gui'):
						self['gui']))) : $p['setattr'](self, 'train', $m['Train']($p['list']([]), (($attr95=($attr96=self)['track']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'track'):
						self['track']))['deploy'](self['deploy'](img, $m['CARSTEP'], 0, 426, 76, 60, (typeof ($usub27=1)=='number'?
				-$usub27:
				$p['op_usub']($usub27))), (($attr97=($attr98=self)['track']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
						$p['getattr']($attr98, 'track'):
						self['track']), (($attr99=($attr100=self)['gui']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
						$p['getattr']($attr100, 'gui'):
						self['gui'])));
			self['track']['score_it']('o');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_trains_init'] = $method;
		$method = $pyjs__bind_method2('deploy', function(imagevector, dx, ox, oy, w, h, axis, oz) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagevector = arguments[1];
				dx = arguments[2];
				ox = arguments[3];
				oy = arguments[4];
				w = arguments[5];
				h = arguments[6];
				axis = arguments[7];
				oz = arguments[8];
			}
			if (typeof axis == 'undefined') axis=arguments.callee.__args__[9][1];
			if (typeof oz == 'undefined') oz=arguments.callee.__args__[10][1];

			return function(){
				var $add46,$mul47,$mul48,$iter31_array,i,$mul45,image,$add44,$iter31_nextval,$iter31_idx,$mul50,$div15,$iter31_type,$listcomp13,$add43,$add45,$mul49,$div16,$mul46,$iter31_iter;
	$listcomp13 = $p['list']();
			$iter31_iter = $p['enumerate'](imagevector);
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,true);
			while (typeof($p['__wrapped_next']($iter31_nextval).$nextval) != 'undefined') {
				i = $iter31_nextval.$nextval.__array[0];
				image = $iter31_nextval.$nextval.__array[1];
				$listcomp13['append'](self['gui']['image'](image, $p['__op_add']($add43=ox,$add44=(typeof ($mul45=i)==typeof ($mul46=dx) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46))), $p['__op_add']($add45=oy,$add46=(typeof ($mul49=axis)==typeof ($mul50=(typeof ($div15=(typeof ($mul47=i)==typeof ($mul48=dx) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)))==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))), w, h, oz));
			}

	return $listcomp13;}();
		}
	, 1, [null,null,['self'],['imagevector'],['dx'],['ox'],['oy'],['w'],['h'],['axis', 1],['oz', null]]);
		$cls_definition['deploy'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Trains', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['GUI'] = $p['___import___']('main.GUI', null, null, false);
		$m['trains'] = $m['Trains']();
		$m['trains']['inicia']($m['GUI']());
	}
	return this;
}; /* end train */


/* end module: train */


/*
PYJS_DEPS: ['time.time', 'time', 'math.sqrt', 'math', 'main.GUI', 'main']
*/
