/* start module: trainmain */
$pyjs.loaded_modules['trainmain'] = function (__mod_name__) {
	if($pyjs.loaded_modules['trainmain'].__was_initialized__) return $pyjs.loaded_modules['trainmain'];
	var $m = $pyjs.loaded_modules["trainmain"];
	$m.__repr__ = function() { return "<module: trainmain>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'trainmain';
	$m.__name__ = __mod_name__;


	$m['__author__'] = 'Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $';
	$m['__version__'] = $p['slice']('0.1 $Revision$', 10, (typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1)));
	$m['__date__'] = '2011/08/04 $Date$';
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['KL'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Raphael'] = $p['___import___']('pyjamas.raphael.raphael.Raphael', null, null, false);
	$m['DOCK_CONNECTION'] = $p['___import___']('pyjamas.raphael.raphael.DOCK_CONNECTION', null, null, false);
	$m['j_p'] = $p['___import___']('pyjamas.JSONParser.JSONParser', null, null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Trains'] = $p['___import___']('train.Trains', null, null, false);
	$m['IMAGEREPO'] = 'image/';
	$m['IMAGEREPO'] = '/static/app/image/';
	$m['COLOR'] = $p['dict']([['forest green', '#228B22'], ['navajo white', '#FFDFB0']]);
	$m['KB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'trainmain';
		var $tupleassign1 = $p['tuple']([45, 46, 0, 0]);
		$cls_definition['KEY_INSERT'] = $tupleassign1.__getitem__(0);
		$cls_definition['KEY_DELETE'] = $tupleassign1.__getitem__(1);
		$cls_definition['KEY_Z'] = $tupleassign1.__getitem__(2);
		$cls_definition['KEY_X'] = $tupleassign1.__getitem__(3);
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('KB', $p['tuple']($bases), $data);
	})();
	$m['TECLA'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'trainmain';
		$cls_definition['ACIMA'] = 111;
		$cls_definition['ABAIXO'] = 116;
		$cls_definition['DIREITA'] = 114;
		$cls_definition['ESQUERDA'] = 113;
		$cls_definition['BRANCO'] = 65;
		$cls_definition['ENTER'] = 36;
		$cls_definition['SOBE'] = 112;
		$cls_definition['DESCE'] = 117;
		$cls_definition['EMPURRA'] = 97;
		$cls_definition['PUXA'] = 103;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TECLA', $p['tuple']($bases), $data);
	})();
	$m['Empacotador'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'trainmain';
		$cls_definition['CAMADA'] = $p['dict']([]);
		$cls_definition['Z'] = 10;
		$method = $pyjs__bind_method2('__init__', function(canvas, source, x, y, w, h, l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvas = arguments[1];
				source = arguments[2];
				x = arguments[3];
				y = arguments[4];
				w = arguments[5];
				h = arguments[6];
				l = arguments[7];
			}
			if (typeof l == 'undefined') l=arguments.callee.__args__[9][1];
			var $or1,$or2,$attr1,$attr2,$add2,$add1,$assign1,z;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('canvas', canvas) : $p['setattr'](self, 'canvas', canvas);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', source) : $p['setattr'](self, '$$name', source);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image', canvas['image']($p['__op_add']($add1=$m['IMAGEREPO'],$add2=source), x, y, w, h)) : $p['setattr'](self, 'image', canvas['image']($p['__op_add']($add1=$m['IMAGEREPO'],$add2=source), x, y, w, h));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rect', self['image']['getBBox']()) : $p['setattr'](self, 'rect', self['image']['getBBox']());
			$assign1 = ($p['bool']($or1=l)?$or1:y);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('camada', $assign1) : $p['setattr'](self, 'camada', $assign1);
			z = $assign1;
			if ($p['bool'](($p['cmp'](z, 0) == 1))) {
				self['add']((($attr1=($attr2=self)['camada']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
							$p['getattr']($attr2, 'camada'):
							self['camada']));
				self['reorder']();
			}
			return null;
		}
	, 1, [null,null,['self'],['canvas'],['source'],['x'],['y'],['w'],['h'],['l', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(camada) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				camada = arguments[1];
			}
			var $attr8,$attr3,$attr5,$attr4,$attr7,$attr6;
			if ($p['bool'](!(($attr3=($attr4=$m['Empacotador'])['CAMADA']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'CAMADA'):
						$m['Empacotador']['CAMADA']).__contains__(camada))) {
				(($attr5=($attr6=$m['Empacotador'])['CAMADA']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'CAMADA'):
							$m['Empacotador']['CAMADA']).__setitem__(camada, $p['list']([self]));
			}
			else {
				(($attr7=($attr8=$m['Empacotador'])['CAMADA']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'CAMADA'):
							$m['Empacotador']['CAMADA']).__getitem__(camada)['append'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['camada']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('reorder', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,cmd,$attr10,NOUSE;
			cmd = (($attr9=($attr10=$m['Empacotador'])['CAMADA']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'CAMADA'):
						$m['Empacotador']['CAMADA']);
			NOUSE = function(){
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,img,it,$iter1_iter,$listcomp1,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
	$listcomp1 = $p['list']();
			$iter1_iter = $p['sorted'](cmd['keys']());
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				it = $iter1_nextval.$nextval;
				$iter2_iter = cmd.__getitem__(it);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					img = $iter2_nextval.$nextval;
					$listcomp1['append'](img['image']['toFront']());
				}
			}

	return $listcomp1;}();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reorder'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr11,$attr13,$attr12;
			(($attr11=($attr12=$m['Empacotador'])['CAMADA']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'CAMADA'):
						$m['Empacotador']['CAMADA']).__getitem__((($attr13=($attr14=self)['camada']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'camada'):
						self['camada']))['remove'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('position', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([self['image']['getBBox']().__getitem__('x'), self['image']['getBBox']().__getitem__('y')]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['position'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub2,$sub3,oy,ox,$sub1,$sub4;
			var $tupleassign2 = self['position']();
			ox = $tupleassign2.__getitem__(0);
			oy = $tupleassign2.__getitem__(1);
			self['image']['translate']($p['__op_sub']($sub1=x,$sub2=ox), $p['__op_sub']($sub3=y,$sub4=oy));
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

			return $p['tuple']([self['image']['getBBox']().__getitem__('x'), self['image']['getBBox']().__getitem__('y')]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['pos'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['image']['translate'](x, y);
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
			var $attr15,$attr18,oy,ox,$attr17,$attr16;
			self['image']['translate'](x, y);
			var $tupleassign3 = self['pos']();
			ox = $tupleassign3.__getitem__(0);
			oy = $tupleassign3.__getitem__(1);
			(($attr15=($attr16=$m['Empacotador'])['CAMADA']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'CAMADA'):
						$m['Empacotador']['CAMADA']).__getitem__((($attr17=($attr18=self)['camada']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'camada'):
						self['camada']))['remove'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('camada', oy) : $p['setattr'](self, 'camada', oy);
			self['add'](oy);
			self['reorder']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translatez'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr29,$add4,$add3,$attr23,$attr20,$attr21,$attr22,$attr19,$attr25,$attr26,$attr27,$attr28,$attr24,$attr30;
			self['canvas']['text'](50, (($attr19=($attr20=$m['Empacotador'])['Z']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'Z'):
						$m['Empacotador']['Z']), $p['sprintf']('%s = %s', $p['tuple']([(($attr21=($attr22=self)['$$name']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, '$$name'):
						self['$$name']), (($attr23=($attr24=other)['$$name']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, '$$name'):
						other['$$name'])])));
			$m['Empacotador'].__is_instance__ && typeof $m['Empacotador'].__setattr__ == 'function' ? $m['Empacotador'].__setattr__('Z', $p['__op_add']($add3=(($attr25=($attr26=$m['Empacotador'])['Z']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'Z'):
						$m['Empacotador']['Z']),$add4=10)) : $p['setattr']($m['Empacotador'], 'Z', $p['__op_add']($add3=(($attr25=($attr26=$m['Empacotador'])['Z']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'Z'):
						$m['Empacotador']['Z']),$add4=10));
			return $p['op_eq']((($attr27=($attr28=self)['$$name']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, '$$name'):
						self['$$name']), (($attr29=($attr30=other)['$$name']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, '$$name'):
						other['$$name']));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Empacotador', $p['tuple']($bases), $data);
	})();
	$m['MainTrain'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'trainmain';
		$cls_definition['Z'] = 10;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73,$attr72,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$attr70,jshandler,$attr71,$attr48,$attr49,$attr68,$attr69,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$attr33,$attr32,$attr31,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,$attr59,$attr58,$attr78,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$attr77,$attr75,$attr76,$attr66;
			$m['SimplePanel']['__init__'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('canvas', $m['Raphael'](800, 700)) : $p['setattr'](self, 'canvas', $m['Raphael'](800, 700));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rr', self['rect'](0, 0, 800, 600, 'forest green')) : $p['setattr'](self, 'rr', self['rect'](0, 0, 800, 600, 'forest green'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tt', self['text'](400, 100, 'Manobrando o Trem')) : $p['setattr'](self, 'tt', self['text'](400, 100, 'Manobrando o Trem'));
			self['add']((($attr31=($attr32=self)['canvas']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'canvas'):
						self['canvas']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('LIDADOR', $p['dict']([[(($attr33=($attr34=$m['KL'])['KEY_DOWN']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'KEY_DOWN'):
						$m['KL']['KEY_DOWN']), (($attr35=($attr36=self)['Down']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'Down'):
						self['Down'])], [(($attr37=($attr38=$m['KL'])['KEY_END']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'KEY_END'):
						$m['KL']['KEY_END']), (($attr39=($attr40=self)['End']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'End'):
						self['End'])], [(($attr41=($attr42=$m['KL'])['KEY_ENTER']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'KEY_ENTER'):
						$m['KL']['KEY_ENTER']), (($attr43=($attr44=self)['Return']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'Return'):
						self['Return'])], [(($attr45=($attr46=$m['KL'])['KEY_HOME']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'KEY_HOME'):
						$m['KL']['KEY_HOME']), (($attr47=($attr48=self)['Home']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'Home'):
						self['Home'])], [(($attr49=($attr50=$m['KL'])['KEY_LEFT']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'KEY_LEFT'):
						$m['KL']['KEY_LEFT']), (($attr51=($attr52=self)['Left']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'Left'):
						self['Left'])], [(($attr53=($attr54=$m['KL'])['KEY_PAGEDOWN']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'KEY_PAGEDOWN'):
						$m['KL']['KEY_PAGEDOWN']), (($attr55=($attr56=self)['Next']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'Next'):
						self['Next'])], [(($attr57=($attr58=$m['KL'])['KEY_PAGEUP']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'KEY_PAGEUP'):
						$m['KL']['KEY_PAGEUP']), (($attr59=($attr60=self)['Prior']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Prior'):
						self['Prior'])], [(($attr61=($attr62=$m['KL'])['KEY_RIGHT']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'KEY_RIGHT'):
						$m['KL']['KEY_RIGHT']), (($attr63=($attr64=self)['Right']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'Right'):
						self['Right'])], [(($attr65=($attr66=$m['KB'])['KEY_DELETE']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'KEY_DELETE'):
						$m['KB']['KEY_DELETE']), (($attr67=($attr68=self)['Prior']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'Prior'):
						self['Prior'])], [(($attr69=($attr70=$m['KB'])['KEY_INSERT']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'KEY_INSERT'):
						$m['KB']['KEY_INSERT']), (($attr71=($attr72=self)['Next']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'Next'):
						self['Next'])], [(($attr73=($attr74=$m['KL'])['KEY_UP']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'KEY_UP'):
						$m['KL']['KEY_UP']), (($attr75=($attr76=self)['Up']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'Up'):
						self['Up'])], [' ', (($attr77=($attr78=self)['space']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'space'):
						self['space'])]])) : $p['setattr'](self, 'LIDADOR', $p['dict']([[(($attr33=($attr34=$m['KL'])['KEY_DOWN']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'KEY_DOWN'):
						$m['KL']['KEY_DOWN']), (($attr35=($attr36=self)['Down']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'Down'):
						self['Down'])], [(($attr37=($attr38=$m['KL'])['KEY_END']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'KEY_END'):
						$m['KL']['KEY_END']), (($attr39=($attr40=self)['End']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'End'):
						self['End'])], [(($attr41=($attr42=$m['KL'])['KEY_ENTER']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'KEY_ENTER'):
						$m['KL']['KEY_ENTER']), (($attr43=($attr44=self)['Return']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'Return'):
						self['Return'])], [(($attr45=($attr46=$m['KL'])['KEY_HOME']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'KEY_HOME'):
						$m['KL']['KEY_HOME']), (($attr47=($attr48=self)['Home']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'Home'):
						self['Home'])], [(($attr49=($attr50=$m['KL'])['KEY_LEFT']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'KEY_LEFT'):
						$m['KL']['KEY_LEFT']), (($attr51=($attr52=self)['Left']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'Left'):
						self['Left'])], [(($attr53=($attr54=$m['KL'])['KEY_PAGEDOWN']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'KEY_PAGEDOWN'):
						$m['KL']['KEY_PAGEDOWN']), (($attr55=($attr56=self)['Next']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'Next'):
						self['Next'])], [(($attr57=($attr58=$m['KL'])['KEY_PAGEUP']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'KEY_PAGEUP'):
						$m['KL']['KEY_PAGEUP']), (($attr59=($attr60=self)['Prior']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Prior'):
						self['Prior'])], [(($attr61=($attr62=$m['KL'])['KEY_RIGHT']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'KEY_RIGHT'):
						$m['KL']['KEY_RIGHT']), (($attr63=($attr64=self)['Right']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'Right'):
						self['Right'])], [(($attr65=($attr66=$m['KB'])['KEY_DELETE']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'KEY_DELETE'):
						$m['KB']['KEY_DELETE']), (($attr67=($attr68=self)['Prior']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'Prior'):
						self['Prior'])], [(($attr69=($attr70=$m['KB'])['KEY_INSERT']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'KEY_INSERT'):
						$m['KB']['KEY_INSERT']), (($attr71=($attr72=self)['Next']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'Next'):
						self['Next'])], [(($attr73=($attr74=$m['KL'])['KEY_UP']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'KEY_UP'):
						$m['KL']['KEY_UP']), (($attr75=($attr76=self)['Up']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'Up'):
						self['Up'])], [' ', (($attr77=($attr78=self)['space']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'space'):
						self['space'])]]));
			jshandler = $p['getattr'](self, 'lidador_de_tecla');
$doc.onkeypress=jshandler;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_inicia', function(game) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('game', game) : $p['setattr'](self, 'game', game);
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['_inicia'] = $method;
		$method = $pyjs__bind_method2('text', function(x, y, texto, color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				texto = arguments[3];
				color = arguments[4];
			}
			if (typeof color == 'undefined') color=arguments.callee.__args__[6][1];
			var t;
			t = self['canvas']['text'](x, y, texto);
			t['setAttrs']($p['dict']([['fill', $m['COLOR'].__getitem__(color)], ['stroke', $m['COLOR'].__getitem__(color)], ['font-size', '16']]));
			return t;
		}
	, 1, [null,null,['self'],['x'],['y'],['texto'],['color', 'navajo white']]);
		$cls_definition['text'] = $method;
		$method = $pyjs__bind_method2('rect', function(x, y, dx, dy, color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				dx = arguments[3];
				dy = arguments[4];
				color = arguments[5];
			}
			var $sub8,r,$sub7,$sub6,$sub5;
			r = self['canvas']['rect'](x, y, $p['__op_sub']($sub5=dx,$sub6=x), $p['__op_sub']($sub7=dy,$sub8=y));
			r['setAttrs']($p['dict']([['fill', $m['COLOR'].__getitem__(color)], ['stroke', $m['COLOR'].__getitem__(color)]]));
			return r;
		}
	, 1, [null,null,['self'],['x'],['y'],['dx'],['dy'],['color']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('image', function(glyph, x, y, dx, dy, l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				glyph = arguments[1];
				x = arguments[2];
				y = arguments[3];
				dx = arguments[4];
				dy = arguments[5];
				l = arguments[6];
			}
			if (typeof l == 'undefined') l=arguments.callee.__args__[8][1];
			var $attr80,$attr79;
			return $m['Empacotador']((($attr79=($attr80=self)['canvas']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
						$p['getattr']($attr80, 'canvas'):
						self['canvas']), glyph, x, y, dx, dy, l);
		}
	, 1, [null,null,['self'],['glyph'],['x'],['y'],['dx'],['dy'],['l', null]]);
		$cls_definition['image'] = $method;
		$method = $pyjs__bind_method2('score', function(score) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				score = arguments[1];
			}
			var $attr82,$attr81;
			score = $p['str'](score);
			$m['DOM']['setAttribute']((($attr81=($attr82=self)['scored']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'scored'):
						self['scored']), 'value', score);
			return score;
		}
	, 1, [null,null,['self'],['score']]);
		$cls_definition['score'] = $method;
		$method = $pyjs__bind_method2('inicia', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr83,$attr86,g,$attr84,f,$attr85,x,$attr88,$attr87;
			f = $m['DOM']['getElementById']('mainform');
			x = (($attr83=($attr84=$m['DOM']['getChild'](f, 0))['value']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
						$p['getattr']($attr84, 'value'):
						$m['DOM']['getChild'](f, 0)['value']);
			g = (($attr85=($attr86=$m['DOM']['getChild'](f, 1))['value']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
						$p['getattr']($attr86, 'value'):
						$m['DOM']['getChild'](f, 1)['value']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('scored', $m['DOM']['getChild'](f, 2)) : $p['setattr'](self, 'scored', $m['DOM']['getChild'](f, 2));
			if ($p['bool']($p['op_eq'](g, '12de6b622cbfe4d8f5c8d3347e56ae8c'))) {
				$m['IMAGEREPO'] = 'image/';
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('game', $m['Trains']()) : $p['setattr'](self, 'game', $m['Trains']());
			self['game']['inicia'](self);
			self['score']((($attr87=($attr88=self['game']['track'])['score']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
						$p['getattr']($attr88, 'score'):
						self['game']['track']['score']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['inicia'] = $method;
		$method = $pyjs__bind_method2('lidador_de_tecla', function(evento) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evento = arguments[1];
			}
			var $attr95,$attr97,$attr96,$attr91,$attr90,$attr93,$attr92,$attr89,$attr98,$attr94;
			if ($p['bool']((($attr91=($attr92=self)['LIDADOR']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
						$p['getattr']($attr92, 'LIDADOR'):
						self['LIDADOR']).__contains__((($attr89=($attr90=evento)['keyCode']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'keyCode'):
						evento['keyCode'])))) {
				(($attr93=($attr94=self)['LIDADOR']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
							$p['getattr']($attr94, 'LIDADOR'):
							self['LIDADOR']).__getitem__((($attr95=($attr96=evento)['keyCode']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
							$p['getattr']($attr96, 'keyCode'):
							evento['keyCode']))((($attr97=($attr98=evento)['keyCode']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
							$p['getattr']($attr98, 'keyCode'):
							evento['keyCode']));
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['evento']]);
		$cls_definition['lidador_de_tecla'] = $method;
		$method = $pyjs__bind_method2('Return', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $attr99,$attr100;
			self['game']['quandoApertaUmaTecla']((($attr99=($attr100=$m['TECLA'])['ENTER']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
						$p['getattr']($attr100, 'ENTER'):
						$m['TECLA']['ENTER']));
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Return'] = $method;
		$method = $pyjs__bind_method2('space', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $attr102,$attr101;
			self['game']['quandoApertaUmaTecla']((($attr101=($attr102=$m['TECLA'])['BRANCO']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
						$p['getattr']($attr102, 'BRANCO'):
						$m['TECLA']['BRANCO']));
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['space'] = $method;
		$method = $pyjs__bind_method2('Right', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['forward']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Right'] = $method;
		$method = $pyjs__bind_method2('Left', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['backward']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Left'] = $method;
		$method = $pyjs__bind_method2('Up', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['popback']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Up'] = $method;
		$method = $pyjs__bind_method2('Down', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['popfront']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Down'] = $method;
		$method = $pyjs__bind_method2('Next', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['popfront']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Next'] = $method;
		$method = $pyjs__bind_method2('Prior', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self['game']['track']['popback']();
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Prior'] = $method;
		$method = $pyjs__bind_method2('Home', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $attr104,$attr103;
			self['game']['quandoApertaUmaTecla']((($attr103=($attr104=$m['TECLA'])['EMPURRA']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
						$p['getattr']($attr104, 'EMPURRA'):
						$m['TECLA']['EMPURRA']));
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['Home'] = $method;
		$method = $pyjs__bind_method2('End', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $attr106,$attr105;
			self['game']['quandoApertaUmaTecla']((($attr105=($attr106=$m['TECLA'])['PUXA']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'PUXA'):
						$m['TECLA']['PUXA']));
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['End'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MainTrain', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['mundo'] = $m['MainTrain']();
		$m['RootPanel']()['add']($m['mundo']);
		$m['mundo']['inicia']();
	}
	return this;
}; /* end trainmain */


/* end module: trainmain */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.KeyboardListener', 'pyjamas.raphael.raphael.Raphael', 'pyjamas.raphael', 'pyjamas.raphael.raphael', 'pyjamas.raphael.raphael.DOCK_CONNECTION', 'pyjamas.JSONParser.JSONParser', 'pyjamas.JSONParser', 'pyjamas.Window.alert', 'pyjamas.Window', 'pyjamas.DOM', 'train.Trains', 'train']
*/
