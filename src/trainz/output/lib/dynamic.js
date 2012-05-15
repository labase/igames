/* start module: dynamic */
var dynamic;
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	dynamic = $pyjs.loaded_modules["dynamic"];
	dynamic.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	var __name__ = dynamic.__name__ = __mod_name__;


	dynamic['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	dynamic['sys'] = pyjslib['___import___']('sys', null);
	;
	dynamic['AjaxError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AjaxError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e470508acbf89106acbe59a43e68272f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['RuntimeError']));
	})();
	dynamic['createHttpRequest'] = function() {
		var res,$pyjs_try_err,err;
		if (pyjslib['bool'](typeof $wnd.XMLHttpRequest != 'undefined')) {
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 22};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 26;
				err = $pyjs_try_err;
			}
		}
		return null;
	};
	dynamic['createHttpRequest'].__name__ = 'createHttpRequest';

	dynamic['createHttpRequest'].__bind_type__ = 0;
	dynamic['createHttpRequest'].__args__ = [null,null];
	dynamic['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
		if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
		var $or5,$attr20,req,$pyjs_try_err,$attr9,$or4,$or6,$or3,$and3,$and4,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,err,$add2,$add1;
		;
		$wnd.status = (typeof ($add1=String('Loading '))==typeof ($add2=url) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		req = dynamic['createHttpRequest']();
		if (pyjslib['bool']((onreadystatechange === null))) {
			onreadystatechange = function(evnt) {
				var $attr8,$or1,$add4,$or2,$attr1,$and1,$and2,$attr2,$attr5,$attr4,$attr7,$attr6,$add3,str,$attr3;
				if (pyjslib['bool']((pyjslib['bool']($and1=pyjslib['op_eq'](((($attr1=req['readyState']) !== null & ($attr2=req).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'readyState'):
							req['readyState']), 4))?(pyjslib['bool']($or1=pyjslib['op_eq'](((($attr3=req['status']) !== null & ($attr4=req).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'status'):
							req['status']), 200))?$or1:pyjslib['op_eq'](((($attr5=req['status']) !== null & ($attr6=req).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, 'status'):
							req['status']), 0)):$and1))) {
					str = ((($attr7=req['responseText']) !== null & ($attr8=req).__is_instance__) && typeof $attr7 == 'function'?
								pyjslib['getattr']($attr8, 'responseText'):
								req['responseText']);
					$wnd.status = (typeof ($add3=String('Loaded '))==typeof ($add4=url) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						pyjslib['op_add']($add3,$add4));
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null,['evnt']];
		}
req.onreadystatechange = onreadystatechange;
		req['open'](String('GET'), url, async);
		try {
			req['send'](null);
			if (pyjslib['bool'](async)) {
				return null;
			}
			while (pyjslib['bool'](true)) {
				if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](((($attr9=req['status']) !== null & ($attr10=req).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'status'):
							req['status']), 200))?$or3:(pyjslib['bool']($and3=pyjslib['op_eq'](((($attr11=req['status']) !== null & ($attr12=req).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'status'):
							req['status']), 0))?((($attr13=req['responseText']) !== null & ($attr14=req).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'responseText'):
							req['responseText']):$and3)))) {
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(null, req);
					}
					return req;
				}
				if (pyjslib['bool']((pyjslib['bool']($or5=!pyjslib['op_eq'](((($attr15=req['status']) !== null & ($attr16=req).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'status'):
							req['status']), 0))?$or5:!pyjslib['op_eq'](((($attr17=req['responseText']) !== null & ($attr18=req).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'responseText'):
							req['responseText']), String(''))))) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 55};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 69;
				err = $pyjs_try_err;
			}
		}
		throw (dynamic['AjaxError'](String('Synchronous error'), ((($attr19=req['status']) !== null & ($attr20=req).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'status'):
					req['status'])));
		return null;
	};
	dynamic['load'].__name__ = 'load';

	dynamic['load'].__bind_type__ = 0;
	dynamic['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	dynamic['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
		if (pyjslib['bool']((namespace === null))) {
			namespace = $pyjs.global_namespace;
		}
		values = pyjslib['dict'](values);
		if (pyjslib['bool']((names === null))) {
			$iter1_iter = values;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		return null;
	};
	dynamic['inject'].__name__ = 'inject';

	dynamic['inject'].__bind_type__ = 0;
	dynamic['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
	dynamic['activate_css'] = function(targetnode) {
		var $iter3_idx,LC,$iter3_type,$attr21,$iter3_nextval,scriptnodes,$attr22,$attr23,$attr24,$iter3_iter,$iter3_array,fileref,sn;
		scriptnodes = pyjslib['list'](targetnode['getElementsByTagName'](String('link')));
		$iter3_iter = pyjslib['range'](pyjslib['len'](scriptnodes));
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			LC = $iter3_nextval;
			sn = scriptnodes.__getitem__(LC);
			sn['parentNode']['removeChild'](sn);
			fileref = dynamic['DOM']['createElement'](String('link'));
			if (pyjslib['bool'](dynamic.hassattr(sn, String('href')))) {
				fileref.href = ((($attr21=sn['href']) !== null & ($attr22=sn).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'href'):
							sn['href']);
			}
			else {
				fileref.text = ((($attr23=sn['text']) !== null & ($attr24=sn).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'text'):
							sn['text']);
			}
			fileref.rel = String('stylesheet');
			fileref.type = String('text/css');
			$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	dynamic['activate_css'].__name__ = 'activate_css';

	dynamic['activate_css'].__bind_type__ = 0;
	dynamic['activate_css'].__args__ = [null,null,['targetnode']];
	dynamic['activate_javascript'] = function(txt) {
		var fileref;
		fileref = dynamic['DOM']['createElement'](String('script'));
		fileref.text = txt;
		fileref.type = String('text/javascript');
		fileref.language = String('javascript');
		fileref = fileref['cloneNode'](true);
		$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		return null;
	};
	dynamic['activate_javascript'].__name__ = 'activate_javascript';

	dynamic['activate_javascript'].__bind_type__ = 0;
	dynamic['activate_javascript'].__args__ = [null,null,['txt']];
	dynamic['eval'] = function(str) {

		return eval(str);
	};
	dynamic['eval'].__name__ = 'eval';

	dynamic['eval'].__bind_type__ = 0;
	dynamic['eval'].__args__ = [null,null,['str']];
	dynamic['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var str,$attr25,$attr26;
			str = ((($attr25=req['responseText']) !== null & ($attr26=req).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'responseText'):
						req['responseText']);
			dynamic['activate_javascript'](str);
			if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
				on_load_fn();
			}
			return null;
		};
		onready.__name__ = 'onready';

		onready.__bind_type__ = 0;
		onready.__args__ = [null,null,['evnt'],['req']];
		dynamic['load'](url, null, onready, async);
		return null;
	};
	dynamic['ajax_eval'].__name__ = 'ajax_eval';

	dynamic['ajax_eval'].__bind_type__ = 0;
	dynamic['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
	dynamic['__imported__'] = pyjslib['dict']([]);
	dynamic['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var e,name,err,script,$iter4_nextval,req,module,$iter4_idx,$attr28,name_getter,$pyjs_try_err,$iter4_type,$attr27,$iter4_array,$attr29,$attr30,$iter4_iter;
		;
		if (pyjslib['bool'](dynamic['__imported__']['has_key'](url))) {
			module = dynamic['__imported__'].__getitem__(url);
		}
		else {
			req = dynamic['load'](url, null, null, false);
			module = null;
			name_getter = pyjslib['list']([]);
			if (pyjslib['bool']((names === null))) {
				names = pyjslib['list']([]);
			}
			$iter4_iter = names;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				name = $iter4_nextval;
				name_getter['append'](pyjslib['sprintf'](String('$pyjs$moduleObject[\x27%s\x27] = %s\x3B'), pyjslib['tuple']([name, name])));
			}
			script = pyjslib['sprintf'](String('(function ( ) {\x0A$pyjs$moduleObject={}\x3B\x0A%s\x3B\x0A%s\x0Areturn $pyjs$moduleObject\x3B\x0A})()\x3B'), pyjslib['tuple']([((($attr27=req['responseText']) !== null & ($attr28=req).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'responseText'):
						req['responseText']), String('\x0A')['join'](name_getter)]));
			try {
				module = dynamic['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 177};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 180;
					err = $pyjs_try_err;
					e = dynamic['sys']['exc_info']();
					throw (dynamic['AjaxError'](pyjslib['sprintf'](String('Error in %s: %s'), pyjslib['tuple']([url, ((($attr29=e['message']) !== null & ($attr30=e).__is_instance__) && typeof $attr29 == 'function'?
								pyjslib['getattr']($attr30, 'message'):
								e['message'])]))));
				}
			}
			dynamic['__imported__'].__setitem__(url, module);
		}
		dynamic['inject'](module, namespace, names);
		return null;
	};
	dynamic['ajax_import'].__name__ = 'ajax_import';

	dynamic['ajax_import'].__bind_type__ = 0;
	dynamic['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
	dynamic['load_script'] = function(url, onload, async) {
		var e,onload_fn,$add6,$add5;
		$wnd.status = (typeof ($add5=String('Loading '))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			pyjslib['op_add']($add5,$add6));
		onload_fn = function() {
			var $add8,$add7;
			wnd.status = (typeof ($add7=String('Loaded '))==typeof ($add8=url) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8));
			if (pyjslib['bool'](!pyjslib['bool']((onload === null)))) {
				dynamic['eval'](onload);
			}
			return true;
		};
		onload_fn.__name__ = 'onload_fn';

		onload_fn.__bind_type__ = 0;
		onload_fn.__args__ = [null,null];
		e = dynamic['DOM']['createElement'](String('script'));
		e.src = url;
		e.type = String('text/javascript');
		e.language = String('javascript');
		e.defer = async;
		e.onload = onload_fn;
		$doc['getElementsByTagName'](String('head')).__getitem__(0)['appendChild'](e);
		return null;
	};
	dynamic['load_script'].__name__ = 'load_script';

	dynamic['load_script'].__bind_type__ = 0;
	dynamic['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
	dynamic['running_timeout'] = 0;
	dynamic['timeout_idname'] = null;
	dynamic['timeout_url'] = null;
	dynamic['timeout_on_load_fn'] = null;
	dynamic['redo_timeout'] = null;
	dynamic['timeout_id'] = null;
	dynamic['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {

		dynamic['timeout_idname'] = idname;
		dynamic['timeout_url'] = url;
		dynamic['timeout_on_load_fn'] = on_load_fn;
		dynamic['redo_timeout'] = timeout;
		if (pyjslib['bool']((pyjslib['cmp'](dynamic['running_timeout'], 0) == 1))) {
			return null;
		}
		dynamic['timeout_id'] = setTimeout(dynamic.do_ajax_dlink_refresh, timeout);
		dynamic['running_timeout'] = 1;
		return null;
	};
	dynamic['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

	dynamic['ajax_dlink_refresh'].__bind_type__ = 0;
	dynamic['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	dynamic['do_ajax_dlink_refresh'] = function() {

		if (pyjslib['bool'](pyjslib['op_eq'](dynamic.ajax_dlink(dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn']), 0))) {
			dynamic['timeout_id'] = null;
			dynamic['running_timeout'] = 0;
			return null;
		}
		dynamic['timeout_id'] = null;
		dynamic['running_timeout'] = 0;
		dynamic['ajax_dlink_refresh'](dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn'], dynamic['redo_timeout']);
		return null;
	};
	dynamic['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

	dynamic['do_ajax_dlink_refresh'].__bind_type__ = 0;
	dynamic['do_ajax_dlink_refresh'].__args__ = [null,null];
	dynamic['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,$attr32,$attr31,xhtoj,onreadystatechange;
		body = ((($attr31=$doc['body']) !== null & ($attr32=$doc).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'body'):
					$doc['body']);
		if (pyjslib['bool'](dynamic['timeout_id'])) {
			clearTimeout(dynamic['timeout_id']);
		}
		onreadystatechange = function() {
			var txt,$attr40,jsnode,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38;
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr33=dynamic.xhtoj['readyState']) !== null & ($attr34=dynamic.xhtoj).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'readyState'):
						dynamic.xhtoj['readyState']), 4))) {
				jsnode = 0;
				if (pyjslib['bool'](pyjslib['op_eq'](((($attr35=dynamic.xhtoj['status']) !== null & ($attr36=dynamic.xhtoj).__is_instance__) && typeof $attr35 == 'function'?
							pyjslib['getattr']($attr36, 'status'):
							dynamic.xhtoj['status']), 200))) {
					txt = ((($attr37=dynamic.xhtoj['responseText']) !== null & ($attr38=dynamic.xhtoj).__is_instance__) && typeof $attr37 == 'function'?
								pyjslib['getattr']($attr38, 'responseText'):
								dynamic.xhtoj['responseText']);
					jsnode = null;
					if (pyjslib['bool'](idname)) {
						jsnode = dynamic['DOM']['getElementById'](idname);
					}
					if (pyjslib['bool']((jsnode === null))) {
						jsnode = dynamic['DOM']['createElement'](String('script'));
					}
					dynamic['activate_javascript'](txt);
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						$wnd['alert'](on_load_fn);
						dynamic.test_fn();
					}
					return 1;
				}
				else {
					jsnode = dynamic['DOM']['getElementById'](idname);
					if (pyjslib['bool'](!pyjslib['bool']((jsnode === null)))) {
						jsnode.innerHTML = ((($attr39=dynamic.xhtoj['status']) !== null & ($attr40=dynamic.xhtoj).__is_instance__) && typeof $attr39 == 'function'?
									pyjslib['getattr']($attr40, 'status'):
									dynamic.xhtoj['status']);
					}
				}
			}
			return null;
		};
		onreadystatechange.__name__ = 'onreadystatechange';

		onreadystatechange.__bind_type__ = 0;
		onreadystatechange.__args__ = [null,null];
		xhtoj = dynamic['createHttpRequest']();
		xhtoj.onreadystatechange = onreadystatechange;
		xhtoj['open'](String('GET'), url, true);
		xhtoj['send'](String(''));
		return 0;
	};
	dynamic['ajax_dlink'].__name__ = 'ajax_dlink';

	dynamic['ajax_dlink'].__bind_type__ = 0;
	dynamic['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
