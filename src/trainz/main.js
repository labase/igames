/* start module: main */
$pyjs.loaded_modules['main'] = function (__mod_name__) {
	if($pyjs.loaded_modules['main'].__was_initialized__) return $pyjs.loaded_modules['main'];
	var $m = $pyjs.loaded_modules["main"];
	$m.__repr__ = function() { return "<module: main>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main';
	$m.__name__ = __mod_name__;
	var $attr1,$attr2,$pyjs_try_err;

	$m['__author__'] = 'Carlo E. T. Oliveira (cetoli@yahoo.com.br) $Author: cetoli $';
	$m['__version__'] = $p['slice']('0.1 $Revision$', 10, (typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1)));
	$m['__date__'] = '2011/07/31 $Date$';
	$m['pygame'] = $p['___import___']('pygame', null);
	$m['KL'] = $pyjs.loaded_modules['pygame'];
	$m['CL'] = $p['___import___']('pygame.color.Color', null, null, false);
	$m['Sprite'] = $p['___import___']('pygame.sprite.Sprite', null, null, false);
	$m['Renderer'] = $p['___import___']('pygame.sprite.LayeredUpdates', null, null, false);
	$m['Camada'] = $p['___import___']('pygame.sprite.RenderUpdates', null, null, false);
	try {
		$m['android'] = $p['___import___']('android', null);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
		if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$m['android'] = null;
		} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
	}
	$m['time'] = $p['___import___']('time.time', null, null, false);
	$m['IMAGEREPO'] = 'image/';
	$m['TIMEREVENT'] = (($attr1=($attr2=$m['pygame'])['USEREVENT']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'USEREVENT'):
				$m['pygame']['USEREVENT']);
	$m['FPS'] = 8;
	var $tupleassign1 = $p['tuple']([800, 600]);
	$m['CANVASW'] = $tupleassign1.__getitem__(0);
	$m['CANVASH'] = $tupleassign1.__getitem__(1);
	$m['COLOR'] = $p['dict']([['forest green', $m['CL']('#228B22')], ['navajo white', $m['CL']('#FFDFB0')]]);
	$m['TECLA'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'main';
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
		$cls_definition.__module__ = 'main';
		$cls_definition['MESTRE'] = $m['Renderer']();
		$cls_definition['IMAGES'] = $p['dict']([]);
		$cls_definition['CAMADA'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function(source, x, y, w, h, l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				source = arguments[1];
				x = arguments[2];
				y = arguments[3];
				w = arguments[4];
				h = arguments[5];
				l = arguments[6];
			}
			if (typeof l == 'undefined') l=arguments.callee.__args__[8][1];
			var $attr8,graphic,$or1,$or2,$attr3,z,$attr5,$attr7,$attr4,$assign1,$attr6,image;
			$m['Sprite']['__init__'](self);
			$assign1 = source;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', $assign1) : $p['setattr'](self, '$$name', $assign1);
			image = $assign1;
			if ($p['bool'](!(($attr3=($attr4=$m['Empacotador'])['IMAGES']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'IMAGES'):
						$m['Empacotador']['IMAGES']).__contains__(image))) {
				graphic = $m['pygame']['image']['load']($p['sprintf']('image/%s', image))['convert']();
				(($attr5=($attr6=$m['Empacotador'])['IMAGES']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'IMAGES'):
							$m['Empacotador']['IMAGES']).__setitem__(image, graphic);
			}
			else {
				graphic = (($attr7=($attr8=$m['Empacotador'])['IMAGES']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'IMAGES'):
							$m['Empacotador']['IMAGES']).__getitem__(image);
			}
			graphic = $m['pygame']['transform']['scale'](graphic, $p['tuple']([w, h]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('image', graphic) : $p['setattr'](self, 'image', graphic);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rect', self['image']['get_rect']()) : $p['setattr'](self, 'rect', self['image']['get_rect']());
			self['rect'].__is_instance__ && typeof self['rect'].__setattr__ == 'function' ? self['rect'].__setattr__('topleft', $p['tuple']([x, y])) : $p['setattr'](self['rect'], 'topleft', $p['tuple']([x, y]));
			z = ($p['bool']($or1=l)?$or1:y);
			$pyjs_kwargs_call($m['Empacotador']['MESTRE'], 'add', null, null, [{layer:z}, self]);
			return null;
		}
	, 1, [null,null,['self'],['source'],['x'],['y'],['w'],['h'],['l', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr11,$attr10,$attr12;
			$m['Empacotador']['MESTRE']['remove'](self);
			(($attr9=($attr10=$m['Empacotador'])['CAMADA']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'CAMADA'):
						$m['Empacotador']['CAMADA']).__getitem__((($attr11=($attr12=self)['camada']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'camada'):
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
			var $attr14,$attr13;
			return (($attr13=($attr14=self['rect'])['topleft']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'topleft'):
						self['rect']['topleft']);
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

			self['rect'].__is_instance__ && typeof self['rect'].__setattr__ == 'function' ? self['rect'].__setattr__('topleft', $p['tuple']([x, y])) : $p['setattr'](self['rect'], 'topleft', $p['tuple']([x, y]));
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
			var $attr15,$attr16;
			return (($attr15=($attr16=self['rect'])['topleft']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'topleft'):
						self['rect']['topleft']);
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
			var $add4,$add2,$add3,$add1,$attr18,oy,ox,$attr17;
			var $tupleassign2 = (($attr17=($attr18=self['rect'])['topleft']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'topleft'):
						self['rect']['topleft']);
			ox = $tupleassign2.__getitem__(0);
			oy = $tupleassign2.__getitem__(1);
			self['rect'].__is_instance__ && typeof self['rect'].__setattr__ == 'function' ? self['rect'].__setattr__('topleft', $p['tuple']([$p['__op_add']($add1=ox,$add2=x), $p['__op_add']($add3=oy,$add4=y)])) : $p['setattr'](self['rect'], 'topleft', $p['tuple']([$p['__op_add']($add1=ox,$add2=x), $p['__op_add']($add3=oy,$add4=y)]));
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
			var $add5,$add6,$attr20,$attr19,$add7,oy,ox,$add8,$add9,$add10;
			var $tupleassign3 = (($attr19=($attr20=self['rect'])['topleft']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'topleft'):
						self['rect']['topleft']);
			ox = $tupleassign3.__getitem__(0);
			oy = $tupleassign3.__getitem__(1);
			self['rect'].__is_instance__ && typeof self['rect'].__setattr__ == 'function' ? self['rect'].__setattr__('topleft', $p['tuple']([$p['__op_add']($add5=ox,$add6=x), $p['__op_add']($add7=oy,$add8=y)])) : $p['setattr'](self['rect'], 'topleft', $p['tuple']([$p['__op_add']($add5=ox,$add6=x), $p['__op_add']($add7=oy,$add8=y)]));
			$m['Empacotador']['MESTRE']['change_layer'](self, $p['__op_add']($add9=oy,$add10=y));
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
			var $attr23,$attr21,$attr22,$attr24;
			return $p['op_eq']((($attr21=($attr22=self)['$$name']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, '$$name'):
						self['$$name']), (($attr23=($attr24=other)['$$name']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, '$$name'):
						other['$$name']));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		var $bases = new Array($m['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Empacotador', $p['tuple']($bases), $data);
	})();
	$m['GUI'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'main';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,$attr46,$attr47,$attr44,$attr45,$attr42,$attr25,$attr26,$attr27,$attr28,$attr29,$attr48,$attr49,$div1,$attr60,$attr61,$attr62,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$attr35,$attr34,$div2,$div3,$attr39,$attr38,$div6,$div4,$div5,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$attr43;
			$m['pygame']['init']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('font', $m['pygame']['font']['Font']('freesansbold.ttf', 30)) : $p['setattr'](self, 'font', $m['pygame']['font']['Font']('freesansbold.ttf', 30));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tela', $m['pygame']['display']['set_mode']($p['tuple']([$m['CANVASW'], $m['CANVASH']]))) : $p['setattr'](self, 'tela', $m['pygame']['display']['set_mode']($p['tuple']([$m['CANVASW'], $m['CANVASH']])));
			self['tela']['fill']($m['COLOR'].__getitem__('forest green'));
			$m['pygame']['time']['set_timer']($m['TIMEREVENT'], (typeof ($div1=1000)==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			self['rect'](0, 0, 800, 700, 'forest green');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('background', $m['pygame']['Surface']($p['list']([$m['CANVASW'], $m['CANVASH']]))) : $p['setattr'](self, 'background', $m['pygame']['Surface']($p['list']([$m['CANVASW'], $m['CANVASH']])));
			self['background']['fill']($m['COLOR'].__getitem__('navajo white'));
			self['text']((typeof ($div3=$m['CANVASW'])==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)), (typeof ($div5=$m['CANVASH'])==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)), 'TRAINS');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('LIDADOR', $p['dict']([[(($attr25=($attr26=$m['KL'])['K_DOWN']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'K_DOWN'):
						$m['KL']['K_DOWN']), (($attr27=($attr28=self)['Down']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'Down'):
						self['Down'])], [(($attr29=($attr30=$m['KL'])['K_END']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'K_END'):
						$m['KL']['K_END']), (($attr31=($attr32=self)['End']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'End'):
						self['End'])], [(($attr33=($attr34=$m['KL'])['K_RETURN']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'K_RETURN'):
						$m['KL']['K_RETURN']), (($attr35=($attr36=self)['Return']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'Return'):
						self['Return'])], [(($attr37=($attr38=$m['KL'])['K_HOME']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'K_HOME'):
						$m['KL']['K_HOME']), (($attr39=($attr40=self)['Home']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'Home'):
						self['Home'])], [(($attr41=($attr42=$m['KL'])['K_LEFT']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'K_LEFT'):
						$m['KL']['K_LEFT']), (($attr43=($attr44=self)['Left']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'Left'):
						self['Left'])], [(($attr45=($attr46=$m['KL'])['K_PAGEDOWN']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'K_PAGEDOWN'):
						$m['KL']['K_PAGEDOWN']), (($attr47=($attr48=self)['Next']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'Next'):
						self['Next'])], [(($attr49=($attr50=$m['KL'])['K_PAGEUP']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'K_PAGEUP'):
						$m['KL']['K_PAGEUP']), (($attr51=($attr52=self)['Prior']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'Prior'):
						self['Prior'])], [(($attr53=($attr54=$m['KL'])['K_RIGHT']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'K_RIGHT'):
						$m['KL']['K_RIGHT']), (($attr55=($attr56=self)['Right']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'Right'):
						self['Right'])], [(($attr57=($attr58=$m['KL'])['K_UP']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'K_UP'):
						$m['KL']['K_UP']), (($attr59=($attr60=self)['Up']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Up'):
						self['Up'])], [' ', (($attr61=($attr62=self)['space']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'space'):
						self['space'])]])) : $p['setattr'](self, 'LIDADOR', $p['dict']([[(($attr25=($attr26=$m['KL'])['K_DOWN']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'K_DOWN'):
						$m['KL']['K_DOWN']), (($attr27=($attr28=self)['Down']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'Down'):
						self['Down'])], [(($attr29=($attr30=$m['KL'])['K_END']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'K_END'):
						$m['KL']['K_END']), (($attr31=($attr32=self)['End']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'End'):
						self['End'])], [(($attr33=($attr34=$m['KL'])['K_RETURN']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'K_RETURN'):
						$m['KL']['K_RETURN']), (($attr35=($attr36=self)['Return']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'Return'):
						self['Return'])], [(($attr37=($attr38=$m['KL'])['K_HOME']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'K_HOME'):
						$m['KL']['K_HOME']), (($attr39=($attr40=self)['Home']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'Home'):
						self['Home'])], [(($attr41=($attr42=$m['KL'])['K_LEFT']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'K_LEFT'):
						$m['KL']['K_LEFT']), (($attr43=($attr44=self)['Left']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'Left'):
						self['Left'])], [(($attr45=($attr46=$m['KL'])['K_PAGEDOWN']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'K_PAGEDOWN'):
						$m['KL']['K_PAGEDOWN']), (($attr47=($attr48=self)['Next']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'Next'):
						self['Next'])], [(($attr49=($attr50=$m['KL'])['K_PAGEUP']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'K_PAGEUP'):
						$m['KL']['K_PAGEUP']), (($attr51=($attr52=self)['Prior']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'Prior'):
						self['Prior'])], [(($attr53=($attr54=$m['KL'])['K_RIGHT']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'K_RIGHT'):
						$m['KL']['K_RIGHT']), (($attr55=($attr56=self)['Right']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'Right'):
						self['Right'])], [(($attr57=($attr58=$m['KL'])['K_UP']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'K_UP'):
						$m['KL']['K_UP']), (($attr59=($attr60=self)['Up']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'Up'):
						self['Up'])], [' ', (($attr61=($attr62=self)['space']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'space'):
						self['space'])]]));
			return null;
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
			var $attr88,ev,$attr82,$attr83,$attr80,$attr81,$attr68,$attr69,$attr84,$attr85,$attr64,$attr65,$attr67,$attr63,$attr86,$attr87,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr66;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('game', game) : $p['setattr'](self, 'game', game);
			$m['pygame']['display']['set_caption']('Trains');
			if ($p['bool']($m['android'])) {
				$m['android']['map_key']((($attr63=($attr64=$m['android'])['KEYCODE_BACK']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
							$p['getattr']($attr64, 'KEYCODE_BACK'):
							$m['android']['KEYCODE_BACK']), (($attr65=($attr66=$m['pygame'])['K_ESCAPE']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
							$p['getattr']($attr66, 'K_ESCAPE'):
							$m['pygame']['K_ESCAPE']));
				$m['android']['map_key'](66, (($attr67=($attr68=$m['KL'])['K_PAGEUP']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
							$p['getattr']($attr68, 'K_PAGEUP'):
							$m['KL']['K_PAGEUP']));
				$m['android']['map_key'](67, (($attr69=($attr70=$m['KL'])['K_PAGEDOWN']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
							$p['getattr']($attr70, 'K_PAGEDOWN'):
							$m['KL']['K_PAGEDOWN']));
				$m['android']['map_key'](23, (($attr71=($attr72=$m['KL'])['K_HOME']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
							$p['getattr']($attr72, 'K_HOME'):
							$m['KL']['K_HOME']));
				self['text'](150, 50, $p['sprintf']('android: %d  escape: %d', $p['tuple']([(($attr73=($attr74=$m['android'])['KEYCODE_BACK']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
							$p['getattr']($attr74, 'KEYCODE_BACK'):
							$m['android']['KEYCODE_BACK']), (($attr75=($attr76=$m['pygame'])['K_ESCAPE']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
							$p['getattr']($attr76, 'K_ESCAPE'):
							$m['pygame']['K_ESCAPE'])])));
			}
			while ($p['bool'](true)) {
				ev = $m['pygame']['event']['wait']();
				self['_redraw']();
				if ($p['bool']($m['android'])) {
					if ($p['bool']($m['android']['check_pause']())) {
						$m['android']['wait_for_resume']();
					}
				}
				if ($p['bool']($p['op_eq']((($attr77=($attr78=ev)['type']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
							$p['getattr']($attr78, 'type'):
							ev['type']), $m['TIMEREVENT']))) {
					$m['pygame']['display']['flip']();
				}
				else if ($p['bool']($p['op_eq']((($attr79=($attr80=ev)['type']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
							$p['getattr']($attr80, 'type'):
							ev['type']), (($attr81=($attr82=$m['pygame'])['KEYDOWN']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
							$p['getattr']($attr82, 'KEYDOWN'):
							$m['pygame']['KEYDOWN'])))) {
					if ($p['bool']($p['tuple']([(($attr85=($attr86=$m['pygame'])['K_ESCAPE']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
								$p['getattr']($attr86, 'K_ESCAPE'):
								$m['pygame']['K_ESCAPE']), 'q', 4]).__contains__((($attr83=($attr84=ev)['key']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
								$p['getattr']($attr84, 'key'):
								ev['key'])))) {
						self['terminate']();
						break;
					}
					else {
						self['lidador_de_tecla']((($attr87=($attr88=ev)['key']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
									$p['getattr']($attr88, 'key'):
									ev['key']));
						$m['pygame']['display']['flip']();
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['_inicia'] = $method;
		$method = $pyjs__bind_method2('_redraw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr94,$attr91,$attr90,$attr93,$attr92,$attr89,rectlist;
			$m['Empacotador']['MESTRE']['clear']((($attr89=($attr90=self)['tela']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'tela'):
						self['tela']), (($attr91=($attr92=self)['background']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
						$p['getattr']($attr92, 'background'):
						self['background']));
			rectlist = $m['Empacotador']['MESTRE']['draw']((($attr93=($attr94=self)['tela']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
						$p['getattr']($attr94, 'tela'):
						self['tela']));
			$m['pygame']['display']['update'](rectlist);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_redraw'] = $method;
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
			var $$label;
			$$label = self['font']['render'](texto, 1, $m['COLOR'].__getitem__(color));
			self['tela']['blit']($$label, $p['tuple']([x, y]));
			return $$label;
		}
	, 1, [null,null,['self'],['x'],['y'],['texto'],['color', 'navajo white']]);
		$cls_definition['text'] = $method;
		$method = $pyjs__bind_method2('rect', function(x, y, w, h, color) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
				color = arguments[5];
			}
			if (typeof color == 'undefined') color=arguments.callee.__args__[7][1];
			var $attr95,$attr96;
			return $m['pygame']['draw']['rect']((($attr95=($attr96=self)['tela']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'tela'):
						self['tela']), $m['COLOR'].__getitem__(color), $p['tuple']([x, y, w, h]));
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h'],['color', 'navajo white']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('image', function(source, x, y, w, h, l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				source = arguments[1];
				x = arguments[2];
				y = arguments[3];
				w = arguments[4];
				h = arguments[5];
				l = arguments[6];
			}
			if (typeof l == 'undefined') l=arguments.callee.__args__[8][1];

			return $m['Empacotador'](source, x, y, w, h, l);
		}
	, 1, [null,null,['self'],['source'],['x'],['y'],['w'],['h'],['l', null]]);
		$cls_definition['image'] = $method;
		$method = $pyjs__bind_method2('lidador_de_tecla', function(evento) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evento = arguments[1];
			}
			var $attr97,$attr99,$attr98,$attr100;
			if ($p['bool']((($attr97=($attr98=self)['LIDADOR']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
						$p['getattr']($attr98, 'LIDADOR'):
						self['LIDADOR']).__contains__(evento))) {
				(($attr99=($attr100=self)['LIDADOR']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'LIDADOR'):
							self['LIDADOR']).__getitem__(evento)(evento);
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
			var $attr102,$attr101;
			self['game']['quandoApertaUmaTecla']((($attr101=($attr102=$m['TECLA'])['ENTER']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
						$p['getattr']($attr102, 'ENTER'):
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
			var $attr104,$attr103;
			self['game']['quandoApertaUmaTecla']((($attr103=($attr104=$m['TECLA'])['BRANCO']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
						$p['getattr']($attr104, 'BRANCO'):
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
			var $attr106,$attr105;
			self['game']['quandoApertaUmaTecla']((($attr105=($attr106=$m['TECLA'])['DESCE']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'DESCE'):
						$m['TECLA']['DESCE']));
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
			var $attr107,$attr108;
			self['game']['quandoApertaUmaTecla']((($attr107=($attr108=$m['TECLA'])['SOBE']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
						$p['getattr']($attr108, 'SOBE'):
						$m['TECLA']['SOBE']));
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
			var $attr110,$attr109;
			self['game']['quandoApertaUmaTecla']((($attr109=($attr110=$m['TECLA'])['EMPURRA']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'EMPURRA'):
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
			var $attr111,$attr112;
			self['game']['quandoApertaUmaTecla']((($attr111=($attr112=$m['TECLA'])['PUXA']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
						$p['getattr']($attr112, 'PUXA'):
						$m['TECLA']['PUXA']));
			return false;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['End'] = $method;
		$method = $pyjs__bind_method2('terminate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['pygame']['quit']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['terminate'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GUI', $p['tuple']($bases), $data);
	})();
	$m['main'] = function() {
		var trains,Trains;
		Trains = $p['___import___']('train.Trains', null, null, false);
		trains = Trains();
		trains['inicia']($m['GUI']());
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['main']();
	}
	return this;
}; /* end main */


/* end module: main */


/*
PYJS_DEPS: ['pygame', 'pygame.color.Color', 'pygame.color', 'pygame.sprite.Sprite', 'pygame.sprite', 'pygame.sprite.LayeredUpdates', 'pygame.sprite.RenderUpdates', 'android', 'time.time', 'time', 'train.Trains', 'train']
*/
