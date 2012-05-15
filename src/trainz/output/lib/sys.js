/* start module: sys */
var sys;
$pyjs.loaded_modules['sys'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sys'].__was_initialized__) return $pyjs.loaded_modules['sys'];
	sys = $pyjs.loaded_modules["sys"];
	sys.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	var __name__ = sys.__name__ = __mod_name__;


	sys['overrides'] = null;
	sys['loadpath'] = null;
	sys['stacktrace'] = null;
	sys['appname'] = null;
	sys['setloadpath'] = function(lp) {

		sys['loadpath'] = lp;
		return null;
	};
	sys['setloadpath'].__name__ = 'setloadpath';

	sys['setloadpath'].__bind_type__ = 0;
	sys['setloadpath'].__args__ = [null,null,['lp']];
	sys['setappname'] = function(an) {

		sys['appname'] = an;
		return null;
	};
	sys['setappname'].__name__ = 'setappname';

	sys['setappname'].__bind_type__ = 0;
	sys['setappname'].__args__ = [null,null,['an']];
	sys['getloadpath'] = function() {

		return sys['loadpath'];
	};
	sys['getloadpath'].__name__ = 'getloadpath';

	sys['getloadpath'].__bind_type__ = 0;
	sys['getloadpath'].__args__ = [null,null];
	sys['addoverride'] = function(module_name, path) {

		sys['overrides'].__setitem__(module_name, path);
		return null;
	};
	sys['addoverride'].__name__ = 'addoverride';

	sys['addoverride'].__bind_type__ = 0;
	sys['addoverride'].__args__ = [null,null,['module_name'],['path']];
	sys['exc_info'] = function() {
		var le,$attr1,$attr3,$attr2,$attr5,$attr4,$attr6,cls;
		le = $pyjs.__last_exception__;
		if (pyjslib['bool'](!pyjslib['bool'](le))) {
			return pyjslib['tuple']([null, null, null]);
		}
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'))))) {
			cls = null;
		}
		else {
			cls = ((($attr3=le['error']['__class__']) !== null & ($attr4=le['error']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__class__'):
						le['error']['__class__']);
		}
		return pyjslib['tuple']([cls, ((($attr5=le['error']) !== null & ($attr6=le).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'error'):
					le['error']), null]);
	};
	sys['exc_info'].__name__ = 'exc_info';

	sys['exc_info'].__bind_type__ = 0;
	sys['exc_info'].__args__ = [null,null];
	sys['exc_clear'] = function() {

$pyjs.__last_exception__ = null;
	};
	sys['exc_clear'].__name__ = 'exc_clear';

	sys['exc_clear'].__bind_type__ = 0;
	sys['exc_clear'].__args__ = [null,null];
sys.save_exception_stack = function () {
    var save_stack = [];
    for (var needle in $pyjs.trackstack) {
        var t = new Object();
        for (var p in $pyjs.trackstack[needle]) {
            t[p] = $pyjs.trackstack[needle][p];
        }
        save_stack.push(t);
        $pyjs.__last_exception_stack__ = save_stack;
    }
return null;
};
	sys['trackstackstr'] = function(stack) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		var $attr7,$attr8,$iter1_nextval,$iter1_type,$attr10,stackstrings,$iter1_iter,s,$iter1_array,msg,$attr9,$iter1_idx;
		if (pyjslib['bool']((stack === null))) {
			stack = $pyjs.__last_exception_stack__;
		}
		if (pyjslib['bool'](!pyjslib['bool'](stack))) {
			return String('');
		}
		stackstrings = pyjslib['list']([]);
		msg = String('');
		$iter1_iter = pyjslib['list'](stack);
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			s = $iter1_nextval;
msg = eval(s.module + '.__track_lines__[' + s.lineno + ']');
			if (pyjslib['bool'](msg)) {
				stackstrings['append'](msg);
			}
			else {
				stackstrings['append'](pyjslib['sprintf'](String('%s.py, line %d'), pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])])));
			}
		}
		return String('\x0A')['join'](stackstrings);
	};
	sys['trackstackstr'].__name__ = 'trackstackstr';

	sys['trackstackstr'].__bind_type__ = 0;
	sys['trackstackstr'].__args__ = [null,null,['stack', null]];
	sys['platform'] = $pyjs.platform;
	sys['byteorder'] = String('little');
	sys['maxint'] = 2147483647;
	return this;
}; /* end sys */


/* end module: sys */


