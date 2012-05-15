/* start module: pyjamas.Window */
$pyjs.loaded_modules['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Window'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Window'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Window'] = $pyjs.loaded_modules["pyjamas.Window"];
	pyjamas['Window'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	var __name__ = pyjamas['Window'].__name__ = __mod_name__;
	var Window = pyjamas['Window'];


	pyjamas['Window']['closingListeners'] = pyjslib['list']([]);
	pyjamas['Window']['resizeListeners'] = pyjslib['list']([]);
	pyjamas['Window']['Location'] = pyjslib['___import___']('pyjamas.Location', 'pyjamas', null, false);
	pyjamas['Window']['init_listeners'] = function() {

		if (pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['closingListeners']))) {
			pyjamas['Window']['closingListeners'] = pyjslib['list']([]);
		}
		if (pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['resizeListeners']))) {
			pyjamas['Window']['resizeListeners'] = pyjslib['list']([]);
		}
		return null;
	};
	pyjamas['Window']['init_listeners'].__name__ = 'init_listeners';

	pyjamas['Window']['init_listeners'].__bind_type__ = 0;
	pyjamas['Window']['init_listeners'].__args__ = [null,null];
	pyjamas['Window']['addWindowCloseListener'] = function(listener) {

		pyjamas['Window']['closingListeners']['append'](listener);
		return null;
	};
	pyjamas['Window']['addWindowCloseListener'].__name__ = 'addWindowCloseListener';

	pyjamas['Window']['addWindowCloseListener'].__bind_type__ = 0;
	pyjamas['Window']['addWindowCloseListener'].__args__ = [null,null,['listener']];
	pyjamas['Window']['addWindowResizeListener'] = function(listener) {

		pyjamas['Window']['resizeListeners']['append'](listener);
		return null;
	};
	pyjamas['Window']['addWindowResizeListener'].__name__ = 'addWindowResizeListener';

	pyjamas['Window']['addWindowResizeListener'].__bind_type__ = 0;
	pyjamas['Window']['addWindowResizeListener'].__args__ = [null,null,['listener']];
	pyjamas['Window']['removeWindowCloseListener'] = function(listener) {

		pyjamas['Window']['closingListeners']['remove'](listener);
		return null;
	};
	pyjamas['Window']['removeWindowCloseListener'].__name__ = 'removeWindowCloseListener';

	pyjamas['Window']['removeWindowCloseListener'].__bind_type__ = 0;
	pyjamas['Window']['removeWindowCloseListener'].__args__ = [null,null,['listener']];
	pyjamas['Window']['removeWindowResizeListener'] = function(listener) {

		pyjamas['Window']['resizeListeners']['remove'](listener);
		return null;
	};
	pyjamas['Window']['removeWindowResizeListener'].__name__ = 'removeWindowResizeListener';

	pyjamas['Window']['removeWindowResizeListener'].__bind_type__ = 0;
	pyjamas['Window']['removeWindowResizeListener'].__args__ = [null,null,['listener']];
	pyjamas['Window']['alert'] = function(msg) {

		$wnd['alert'](msg);
		return null;
	};
	pyjamas['Window']['alert'].__name__ = 'alert';

	pyjamas['Window']['alert'].__bind_type__ = 0;
	pyjamas['Window']['alert'].__args__ = [null,null,['msg']];
	pyjamas['Window']['confirm'] = function(msg) {

		return $wnd['confirm'](msg);
	};
	pyjamas['Window']['confirm'].__name__ = 'confirm';

	pyjamas['Window']['confirm'].__bind_type__ = 0;
	pyjamas['Window']['confirm'].__args__ = [null,null,['msg']];
	pyjamas['Window']['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

		return $wnd['prompt'](msg, defaultReply);
	};
	pyjamas['Window']['prompt'].__name__ = 'prompt';

	pyjamas['Window']['prompt'].__bind_type__ = 0;
	pyjamas['Window']['prompt'].__args__ = [null,null,['msg'],['defaultReply', String('')]];
	pyjamas['Window']['enableScrolling'] = function(enable) {
		var $and1,$and2,$or1,$or2;
		$doc['body']['style'].overflow = (pyjslib['bool']($or1=(pyjslib['bool']($and1=enable)?String('auto'):$and1))?$or1:String('hidden'));
		return null;
	};
	pyjamas['Window']['enableScrolling'].__name__ = 'enableScrolling';

	pyjamas['Window']['enableScrolling'].__bind_type__ = 0;
	pyjamas['Window']['enableScrolling'].__args__ = [null,null,['enable']];
	pyjamas['Window']['scrollBy'] = function(x, y) {

		$wnd['scrollBy'](x, y);
		return null;
	};
	pyjamas['Window']['scrollBy'].__name__ = 'scrollBy';

	pyjamas['Window']['scrollBy'].__bind_type__ = 0;
	pyjamas['Window']['scrollBy'].__args__ = [null,null,['x'],['y']];
	pyjamas['Window']['scroll'] = function(x, y) {

		$wnd['scroll'](x, y);
		return null;
	};
	pyjamas['Window']['scroll'].__name__ = 'scroll';

	pyjamas['Window']['scroll'].__bind_type__ = 0;
	pyjamas['Window']['scroll'].__args__ = [null,null,['x'],['y']];
	pyjamas['Window']['getClientHeight'] = function() {
		var $attr1,$attr2;
		return ((($attr1=$doc['body']['clientHeight']) !== null & ($attr2=$doc['body']).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'clientHeight'):
					$doc['body']['clientHeight']);
	};
	pyjamas['Window']['getClientHeight'].__name__ = 'getClientHeight';

	pyjamas['Window']['getClientHeight'].__bind_type__ = 0;
	pyjamas['Window']['getClientHeight'].__args__ = [null,null];
	pyjamas['Window']['getClientWidth'] = function() {
		var $attr3,$attr4;
		return ((($attr3=$doc['body']['clientWidth']) !== null & ($attr4=$doc['body']).__is_instance__) && typeof $attr3 == 'function'?
					pyjslib['getattr']($attr4, 'clientWidth'):
					$doc['body']['clientWidth']);
	};
	pyjamas['Window']['getClientWidth'].__name__ = 'getClientWidth';

	pyjamas['Window']['getClientWidth'].__bind_type__ = 0;
	pyjamas['Window']['getClientWidth'].__args__ = [null,null];
	pyjamas['Window']['getScrollLeft'] = function() {
		var $attr5,$attr6;
		return ((($attr5=pyjamas.Window.getDocumentRoot()['scrollLeft']) !== null & ($attr6=pyjamas.Window.getDocumentRoot()).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'scrollLeft'):
					pyjamas.Window.getDocumentRoot()['scrollLeft']);
		return null;
	};
	pyjamas['Window']['getScrollLeft'].__name__ = 'getScrollLeft';

	pyjamas['Window']['getScrollLeft'].__bind_type__ = 0;
	pyjamas['Window']['getScrollLeft'].__args__ = [null,null];
	pyjamas['Window']['getScrollTop'] = function() {
		var $attr8,$attr7;
		return ((($attr7=pyjamas.Window.getDocumentRoot()['scrollTop']) !== null & ($attr8=pyjamas.Window.getDocumentRoot()).__is_instance__) && typeof $attr7 == 'function'?
					pyjslib['getattr']($attr8, 'scrollTop'):
					pyjamas.Window.getDocumentRoot()['scrollTop']);
		return null;
	};
	pyjamas['Window']['getScrollTop'].__name__ = 'getScrollTop';

	pyjamas['Window']['getScrollTop'].__bind_type__ = 0;
	pyjamas['Window']['getScrollTop'].__args__ = [null,null];
	pyjamas['Window']['getDocumentRoot'] = function() {
		var $attr9,$attr14,$attr11,$attr10,$attr13,$attr12;
		if (pyjslib['bool'](pyjslib['op_eq'](((($attr9=$doc['compatMode']) !== null & ($attr10=$doc).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'compatMode'):
					$doc['compatMode']), String('CSS1Compat')))) {
			return ((($attr11=$doc['documentElement']) !== null & ($attr12=$doc).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'documentElement'):
						$doc['documentElement']);
		}
		return ((($attr13=$doc['body']) !== null & ($attr14=$doc).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'body'):
					$doc['body']);
	};
	pyjamas['Window']['getDocumentRoot'].__name__ = 'getDocumentRoot';

	pyjamas['Window']['getDocumentRoot'].__bind_type__ = 0;
	pyjamas['Window']['getDocumentRoot'].__args__ = [null,null];
	pyjamas['Window']['setLocation'] = function(url) {
		var w;
		w = $wnd;
		w.location = url;
		return null;
	};
	pyjamas['Window']['setLocation'].__name__ = 'setLocation';

	pyjamas['Window']['setLocation'].__bind_type__ = 0;
	pyjamas['Window']['setLocation'].__args__ = [null,null,['url']];
	pyjamas['Window']['location'] = null;
	pyjamas['Window']['getLocation'] = function() {
		var $attr15,$attr16;
		if (pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['location']))) {
			pyjamas['Window']['location'] = pyjamas['Window']['Location']['Location'](((($attr15=$wnd['location']) !== null & ($attr16=$wnd).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'location'):
						$wnd['location']));
		}
		return pyjamas['Window']['location'];
	};
	pyjamas['Window']['getLocation'].__name__ = 'getLocation';

	pyjamas['Window']['getLocation'].__bind_type__ = 0;
	pyjamas['Window']['getLocation'].__args__ = [null,null];
	pyjamas['Window']['getTitle'] = function() {

		return $doc.title;
	};
	pyjamas['Window']['getTitle'].__name__ = 'getTitle';

	pyjamas['Window']['getTitle'].__bind_type__ = 0;
	pyjamas['Window']['getTitle'].__args__ = [null,null];
	pyjamas['Window']['open'] = function(url, name, features) {

		$wnd['open'](url, name, features);
		return null;
	};
	pyjamas['Window']['open'].__name__ = 'open';

	pyjamas['Window']['open'].__bind_type__ = 0;
	pyjamas['Window']['open'].__args__ = [null,null,['url'],['name'],['features']];
	pyjamas['Window']['setMargin'] = function(size) {

		$doc['body']['style'].margin = size;
		return null;
	};
	pyjamas['Window']['setMargin'].__name__ = 'setMargin';

	pyjamas['Window']['setMargin'].__bind_type__ = 0;
	pyjamas['Window']['setMargin'].__args__ = [null,null,['size']];
	pyjamas['Window']['setTitle'] = function(title) {
		var d;
		d = $doc;
		d.title = title;
		return null;
	};
	pyjamas['Window']['setTitle'].__name__ = 'setTitle';

	pyjamas['Window']['setTitle'].__bind_type__ = 0;
	pyjamas['Window']['setTitle'].__args__ = [null,null,['title']];
	pyjamas['Window']['setOnError'] = function(onError) {

		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['callable'](onError)))) {
			throw (pyjslib['TypeError'](String('object is not callable')));
		}
    $wnd.onerror=function(msg, url, linenumber){
        return onError(msg, url, linenumber);
    }
    
	};
	pyjamas['Window']['setOnError'].__name__ = 'setOnError';

	pyjamas['Window']['setOnError'].__bind_type__ = 0;
	pyjamas['Window']['setOnError'].__args__ = [null,null,['onError']];
	pyjamas['Window']['onError'] = function(msg, url, linenumber) {
		var tracestr,dialog;
		dialog = $doc['createElement'](String('div'));
		dialog.className = String('errordialog');
		tracestr = pyjamas.Window.sys['trackstackstr']($pyjs.trackstack.slice(0,-1));
		tracestr = tracestr['$$replace'](String('\x0A'), String('\x3Cbr /\x3E\x0A\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B'));
		dialog.innerHTML = pyjslib['sprintf'](String('\x26nbsp\x3B\x3Cb style=\x22color:red\x22\x3EJavaScript Error: \x3C/b\x3E\x0A%s at line number %d. Please inform webmaster.\x0A\x3Cbr /\x3E\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B%s\x0A'), pyjslib['tuple']([msg, linenumber, tracestr]));
		$doc['body']['appendChild'](dialog);
		return true;
	};
	pyjamas['Window']['onError'].__name__ = 'onError';

	pyjamas['Window']['onError'].__bind_type__ = 0;
	pyjamas['Window']['onError'].__args__ = [null,null,['msg'],['url'],['linenumber']];
	pyjamas['Window']['onClosed'] = function() {

		pyjamas.Window.fireClosedImpl();
		return null;
	};
	pyjamas['Window']['onClosed'].__name__ = 'onClosed';

	pyjamas['Window']['onClosed'].__bind_type__ = 0;
	pyjamas['Window']['onClosed'].__args__ = [null,null];
	pyjamas['Window']['onClosing'] = function() {

		pyjamas.Window.fireClosingImpl();
		return null;
	};
	pyjamas['Window']['onClosing'].__name__ = 'onClosing';

	pyjamas['Window']['onClosing'].__bind_type__ = 0;
	pyjamas['Window']['onClosing'].__args__ = [null,null];
	pyjamas['Window']['onResize'] = function() {

		pyjamas.Window.fireResizedImpl();
		return null;
	};
	pyjamas['Window']['onResize'].__name__ = 'onResize';

	pyjamas['Window']['onResize'].__bind_type__ = 0;
	pyjamas['Window']['onResize'].__args__ = [null,null];
	pyjamas['Window']['fireClosedAndCatch'] = function(handler) {

 		return null;
	};
	pyjamas['Window']['fireClosedAndCatch'].__name__ = 'fireClosedAndCatch';

	pyjamas['Window']['fireClosedAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireClosedAndCatch'].__args__ = [null,null,['handler']];
	pyjamas['Window']['fireClosedImpl'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
		$iter1_iter = pyjamas['Window']['closingListeners'];
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			listener = $iter1_nextval;
			listener['onWindowClosed']();
		}
		return null;
	};
	pyjamas['Window']['fireClosedImpl'].__name__ = 'fireClosedImpl';

	pyjamas['Window']['fireClosedImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireClosedImpl'].__args__ = [null,null];
	pyjamas['Window']['fireClosingAndCatch'] = function(handler) {

 		return null;
	};
	pyjamas['Window']['fireClosingAndCatch'].__name__ = 'fireClosingAndCatch';

	pyjamas['Window']['fireClosingAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireClosingAndCatch'].__args__ = [null,null,['handler']];
	pyjamas['Window']['resize'] = function(width, height) {

		$wnd['resizeTo'](width, height);
		return null;
	};
	pyjamas['Window']['resize'].__name__ = 'resize';

	pyjamas['Window']['resize'].__bind_type__ = 0;
	pyjamas['Window']['resize'].__args__ = [null,null,['width'],['height']];
	pyjamas['Window']['resizeBy'] = function(width, height) {

		$wnd['resizeBy'](width, height);
		return null;
	};
	pyjamas['Window']['resizeBy'].__name__ = 'resizeBy';

	pyjamas['Window']['resizeBy'].__bind_type__ = 0;
	pyjamas['Window']['resizeBy'].__args__ = [null,null,['width'],['height']];
	pyjamas['Window']['fireClosingImpl'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,msg,$iter2_array;
		ret = null;
		$iter2_iter = pyjamas['Window']['closingListeners'];
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			listener = $iter2_nextval;
			msg = listener['onWindowClosing']();
			if (pyjslib['bool']((ret === null))) {
				ret = msg;
			}
		}
		return ret;
	};
	pyjamas['Window']['fireClosingImpl'].__name__ = 'fireClosingImpl';

	pyjamas['Window']['fireClosingImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireClosingImpl'].__args__ = [null,null];
	pyjamas['Window']['fireResizedAndCatch'] = function(handler) {

 		return null;
	};
	pyjamas['Window']['fireResizedAndCatch'].__name__ = 'fireResizedAndCatch';

	pyjamas['Window']['fireResizedAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireResizedAndCatch'].__args__ = [null,null,['handler']];
	pyjamas['Window']['fireResizedImpl'] = function() {
		var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array;
		$iter3_iter = pyjamas['Window']['resizeListeners'];
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			listener = $iter3_nextval;
			listener['onWindowResized'](pyjamas['Window']['getClientWidth'](), pyjamas['Window']['getClientHeight']());
		}
		return null;
	};
	pyjamas['Window']['fireResizedImpl'].__name__ = 'fireResizedImpl';

	pyjamas['Window']['fireResizedImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireResizedImpl'].__args__ = [null,null];
	pyjamas['Window']['init'] = function() {

		pyjamas['Window']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
		pyjamas['Window']['init_listeners']();

    $wnd.__pygwt_initHandlers(
        function() {
            Window.onResize();
        },
        function() {
            return Window.onClosing();
        },
        function() {
            Window.onClosed();
            /*$wnd.onresize = null;
            $wnd.onbeforeclose = null;
            $wnd.onclose = null;*/
        }
    );
    
		pyjamas['Window']['setOnError'](pyjamas['Window']['onError']);
		return null;
	};
	pyjamas['Window']['init'].__name__ = 'init';

	pyjamas['Window']['init'].__bind_type__ = 0;
	pyjamas['Window']['init'].__args__ = [null,null];
	pyjamas['Window']['init']();
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas', 'sys']
*/
