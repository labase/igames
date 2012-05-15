/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['DOM'] = $pyjs.loaded_modules["pyjamas.DOM"];
	pyjamas['DOM'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	var __name__ = pyjamas['DOM'].__name__ = __mod_name__;
	var DOM = pyjamas['DOM'];
	var $attr2,$attr1,$attr240,$attr239;

	pyjamas['DOM']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=pyjamas['DOM']['sys']['platform']) !== null & ($attr2=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['DOM']['sys']['platform'])))) {
		pyjamas['DOM']['onResize'] = pyjslib['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		pyjamas['DOM']['onClosing'] = pyjslib['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		pyjamas['DOM']['onClosed'] = pyjslib['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		pyjamas['DOM']['currentEvent'] = null;
	}
	pyjamas['DOM']['sCaptureElem'] = null;
	pyjamas['DOM']['sEventPreviewStack'] = pyjslib['list']([]);
	pyjamas['DOM']['listeners'] = pyjslib['dict']([]);
	pyjamas['DOM']['get_listener'] = function(item) {
		var $attr3,$attr4,ret;
		if (pyjslib['bool']((item === null))) {
			return null;
		}
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			ret = pyjamas['DOM']['listeners']['get'](((($attr3=item['__instance__']) !== null & ($attr4=item).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__instance__'):
						item['__instance__']));
		}
		else {
			ret = pyjamas['DOM']['listeners']['get'](pyjslib['hash'](item));
		}
		return ret;
	};
	pyjamas['DOM']['get_listener'].__name__ = 'get_listener';

	pyjamas['DOM']['get_listener'].__bind_type__ = 0;
	pyjamas['DOM']['get_listener'].__args__ = [null,null,['item']];
	pyjamas['DOM']['set_listener'] = function(item, listener) {
		var $attr5,$attr6;
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			pyjamas['DOM']['listeners'].__setitem__(((($attr5=item['__instance__']) !== null & ($attr6=item).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
		}
		else {
			pyjamas['DOM']['listeners'].__setitem__(pyjslib['hash'](item), listener);
		}
		return null;
	};
	pyjamas['DOM']['set_listener'].__name__ = 'set_listener';

	pyjamas['DOM']['set_listener'].__bind_type__ = 0;
	pyjamas['DOM']['set_listener'].__args__ = [null,null,['item'],['listener']];
	pyjamas['DOM']['hack_timer_workaround_bug_button'] = null;
	pyjamas['DOM']['init'] = function() {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		mf['_addWindowEventListener'](String('click'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('change'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('mouseout'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('mousedown'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('mouseup'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('resize'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('keyup'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('keydown'), pyjamas.DOM.browser_event_cb);
		mf['_addWindowEventListener'](String('keypress'), pyjamas.DOM.browser_event_cb);
		return null;
	};
	pyjamas['DOM']['init'].__name__ = 'init';

	pyjamas['DOM']['init'].__bind_type__ = 0;
	pyjamas['DOM']['init'].__args__ = [null,null];
	pyjamas['DOM']['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	pyjamas['DOM']['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	pyjamas['DOM']['_dispatchWindowEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	pyjamas['DOM']['_dispatchEvent'] = function(sender, evt, useCap) {
		var $attr8,$and3,err,$and1,$and2,cap,curElem,$and4,$attr7,$and5,listener,$pyjs_try_err,$and6;
		if (pyjslib['bool']((evt === null))) {
			evt = ((($attr7=$wnd['event']) !== null & ($attr8=$wnd).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			try {
				sender = pyjamas.DOM.get_main_frame()['gobject_wrap'](sender);
				evt = pyjamas.DOM.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 75};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 79;
					err = $pyjs_try_err;
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = pyjamas.DOM.getCaptureElement();
		listener = pyjamas['DOM']['get_listener'](cap);
		if (pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1))) {
			pyjamas.DOM.dispatchEvent(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while (pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool'](pyjamas['DOM']['get_listener'](curElem)):$and3))) {
			curElem = pyjamas.DOM.getParent(curElem);
		}
		if (pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq'](pyjamas.DOM.getNodeType(curElem), 1):$and5))) {
			curElem = null;
		}
		listener = pyjamas['DOM']['get_listener'](curElem);
		if (pyjslib['bool'](listener)) {
			pyjamas.DOM.dispatchEvent(evt, curElem, listener);
		}
		return null;
	};
	pyjamas['DOM']['_dispatchEvent'].__name__ = '_dispatchEvent';

	pyjamas['DOM']['_dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	pyjamas['DOM']['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		if (pyjslib['bool'](pyjamas.DOM._dispatchCapturedEvent(evt))) {
			cap = pyjamas.DOM.getCaptureElement();
			listener = pyjamas['DOM']['get_listener'](cap);
			if (pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7))) {
				pyjamas.DOM.dispatchEvent(evt, cap, listener);
				evt['stopPropagation']();
			}
		}
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		cap = pyjamas.DOM.getCaptureElement();
		if (pyjslib['bool'](cap)) {
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas.DOM.eventGetToElement(evt)))) {
				pyjamas.DOM.setCapture(null);
				listener = pyjamas['DOM']['get_listener'](cap);
				if (pyjslib['bool'](listener)) {
					lcEvent = $doc['createEvent'](String('UIEvent'));
					lcEvent['initUIEvent'](String('losecapture'), false, false, $wnd, 0);
					pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);
				}
			}
		}
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['browser_event_cb'] = function(view, event, from_window) {
		var $or4,$or1,$or3,err,$or2,$pyjs_try_err,et;
		try {
			event = pyjamas.DOM.get_main_frame()['gobject_wrap'](event);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 133};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 136;
				err = $pyjs_try_err;
			}
		}
		et = pyjamas.DOM.eventGetType(event);
		if (pyjslib['bool'](pyjslib['op_eq'](et, String('resize')))) {
			pyjamas['DOM']['onResize']();
			return null;
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')))) {
			return pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);
		}
		else if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))))) {
			return pyjamas.DOM._dispatchCapturedEvent(event);
		}
		else {
			return pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	pyjamas['DOM']['browser_event_cb'].__name__ = 'browser_event_cb';

	pyjamas['DOM']['browser_event_cb'].__bind_type__ = 0;
	pyjamas['DOM']['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	pyjamas['DOM']['_dispatchCapturedEvent'] = function(event) {

		if (pyjslib['bool'](!pyjslib['bool'](pyjamas.DOM.previewEvent(event)))) {
			event['stopPropagation']();
			pyjamas.DOM.eventPreventDefault(event);
			return false;
		}
		return true;
	};
	pyjamas['DOM']['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	pyjamas['DOM']['_dispatchCapturedEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	pyjamas['DOM']['addEventPreview'] = function(preview) {

		pyjamas['DOM']['sEventPreviewStack']['append'](preview);
		return null;
	};
	pyjamas['DOM']['addEventPreview'].__name__ = 'addEventPreview';

	pyjamas['DOM']['addEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['addEventPreview'].__args__ = [null,null,['preview']];
	pyjamas['DOM']['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	pyjamas['DOM']['appendChild'].__name__ = 'appendChild';

	pyjamas['DOM']['appendChild'].__bind_type__ = 0;
	pyjamas['DOM']['appendChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['buttonClick'] = function(element) {
		var evt;
		evt = $doc['createEvent'](String('MouseEvents'));
		evt['initMouseEvent'](String('click'), true, true, $wnd, 1, 0, 0, 0, 0, false, false, false, false, 0, element);
		element['dispatchEvent'](evt);
		return null;
	};
	pyjamas['DOM']['buttonClick'].__name__ = 'buttonClick';

	pyjamas['DOM']['buttonClick'].__bind_type__ = 0;
	pyjamas['DOM']['buttonClick'].__args__ = [null,null,['element']];
	pyjamas['DOM']['compare'] = function(elem1, elem2) {

		if (pyjslib['bool'](pyjslib['hasattr'](elem1, String('isSameNode')))) {
			return elem1['isSameNode'](elem2);
		}
		return pyjslib['op_eq'](elem1, elem2);
	};
	pyjamas['DOM']['compare'].__name__ = 'compare';

	pyjamas['DOM']['compare'].__bind_type__ = 0;
	pyjamas['DOM']['compare'].__args__ = [null,null,['elem1'],['elem2']];
	pyjamas['DOM']['createAnchor'] = function() {

		return pyjamas.DOM.createElement(String('A'));
	};
	pyjamas['DOM']['createAnchor'].__name__ = 'createAnchor';

	pyjamas['DOM']['createAnchor'].__bind_type__ = 0;
	pyjamas['DOM']['createAnchor'].__args__ = [null,null];
	pyjamas['DOM']['createButton'] = function() {

		return pyjamas.DOM.createElement(String('button'));
	};
	pyjamas['DOM']['createButton'].__name__ = 'createButton';

	pyjamas['DOM']['createButton'].__bind_type__ = 0;
	pyjamas['DOM']['createButton'].__args__ = [null,null];
	pyjamas['DOM']['createCol'] = function() {

		return pyjamas.DOM.createElement(String('col'));
	};
	pyjamas['DOM']['createCol'].__name__ = 'createCol';

	pyjamas['DOM']['createCol'].__bind_type__ = 0;
	pyjamas['DOM']['createCol'].__args__ = [null,null];
	pyjamas['DOM']['createDiv'] = function() {

		return pyjamas.DOM.createElement(String('div'));
	};
	pyjamas['DOM']['createDiv'].__name__ = 'createDiv';

	pyjamas['DOM']['createDiv'].__bind_type__ = 0;
	pyjamas['DOM']['createDiv'].__args__ = [null,null];
	pyjamas['DOM']['createElement'] = function(tag) {

		return $doc['createElement'](tag);
	};
	pyjamas['DOM']['createElement'].__name__ = 'createElement';

	pyjamas['DOM']['createElement'].__bind_type__ = 0;
	pyjamas['DOM']['createElement'].__args__ = [null,null,['tag']];
	pyjamas['DOM']['createFieldSet'] = function() {

		return pyjamas['DOM']['createElement'](String('fieldset'));
	};
	pyjamas['DOM']['createFieldSet'].__name__ = 'createFieldSet';

	pyjamas['DOM']['createFieldSet'].__bind_type__ = 0;
	pyjamas['DOM']['createFieldSet'].__args__ = [null,null];
	pyjamas['DOM']['createForm'] = function() {

		return pyjamas['DOM']['createElement'](String('form'));
	};
	pyjamas['DOM']['createForm'].__name__ = 'createForm';

	pyjamas['DOM']['createForm'].__bind_type__ = 0;
	pyjamas['DOM']['createForm'].__args__ = [null,null];
	pyjamas['DOM']['createIFrame'] = function() {

		return pyjamas['DOM']['createElement'](String('iframe'));
	};
	pyjamas['DOM']['createIFrame'].__name__ = 'createIFrame';

	pyjamas['DOM']['createIFrame'].__bind_type__ = 0;
	pyjamas['DOM']['createIFrame'].__args__ = [null,null];
	pyjamas['DOM']['createImg'] = function() {

		return pyjamas['DOM']['createElement'](String('img'));
	};
	pyjamas['DOM']['createImg'].__name__ = 'createImg';

	pyjamas['DOM']['createImg'].__bind_type__ = 0;
	pyjamas['DOM']['createImg'].__args__ = [null,null];
	pyjamas['DOM']['createInputCheck'] = function() {

		return pyjamas.DOM.createInputElement(String('checkbox'));
	};
	pyjamas['DOM']['createInputCheck'].__name__ = 'createInputCheck';

	pyjamas['DOM']['createInputCheck'].__bind_type__ = 0;
	pyjamas['DOM']['createInputCheck'].__args__ = [null,null];
	pyjamas['DOM']['createInputElement'] = function(elementType) {
		var e;
		e = pyjamas['DOM']['createElement'](String('INPUT'));
		e.type = elementType;
		return e;
	};
	pyjamas['DOM']['createInputElement'].__name__ = 'createInputElement';

	pyjamas['DOM']['createInputElement'].__bind_type__ = 0;
	pyjamas['DOM']['createInputElement'].__args__ = [null,null,['elementType']];
	pyjamas['DOM']['createInputPassword'] = function() {

		return pyjamas['DOM']['createInputElement'](String('password'));
	};
	pyjamas['DOM']['createInputPassword'].__name__ = 'createInputPassword';

	pyjamas['DOM']['createInputPassword'].__bind_type__ = 0;
	pyjamas['DOM']['createInputPassword'].__args__ = [null,null];
	pyjamas['DOM']['createInputRadio'] = function(group) {
		var e;
		e = pyjamas['DOM']['createInputElement'](String('radio'));
		e.$$name = group;
		return e;
	};
	pyjamas['DOM']['createInputRadio'].__name__ = 'createInputRadio';

	pyjamas['DOM']['createInputRadio'].__bind_type__ = 0;
	pyjamas['DOM']['createInputRadio'].__args__ = [null,null,['group']];
	pyjamas['DOM']['createInputText'] = function() {

		return pyjamas['DOM']['createInputElement'](String('text'));
	};
	pyjamas['DOM']['createInputText'].__name__ = 'createInputText';

	pyjamas['DOM']['createInputText'].__bind_type__ = 0;
	pyjamas['DOM']['createInputText'].__args__ = [null,null];
	pyjamas['DOM']['createLabel'] = function() {

		return pyjamas['DOM']['createElement'](String('label'));
	};
	pyjamas['DOM']['createLabel'].__name__ = 'createLabel';

	pyjamas['DOM']['createLabel'].__bind_type__ = 0;
	pyjamas['DOM']['createLabel'].__args__ = [null,null];
	pyjamas['DOM']['createLegend'] = function() {

		return pyjamas['DOM']['createElement'](String('legend'));
	};
	pyjamas['DOM']['createLegend'].__name__ = 'createLegend';

	pyjamas['DOM']['createLegend'].__bind_type__ = 0;
	pyjamas['DOM']['createLegend'].__args__ = [null,null];
	pyjamas['DOM']['createOptions'] = function() {

		return pyjamas['DOM']['createElement'](String('options'));
	};
	pyjamas['DOM']['createOptions'].__name__ = 'createOptions';

	pyjamas['DOM']['createOptions'].__bind_type__ = 0;
	pyjamas['DOM']['createOptions'].__args__ = [null,null];
	pyjamas['DOM']['createSelect'] = function() {

		return pyjamas['DOM']['createElement'](String('select'));
	};
	pyjamas['DOM']['createSelect'].__name__ = 'createSelect';

	pyjamas['DOM']['createSelect'].__bind_type__ = 0;
	pyjamas['DOM']['createSelect'].__args__ = [null,null];
	pyjamas['DOM']['createSpan'] = function() {

		return pyjamas['DOM']['createElement'](String('span'));
	};
	pyjamas['DOM']['createSpan'].__name__ = 'createSpan';

	pyjamas['DOM']['createSpan'].__bind_type__ = 0;
	pyjamas['DOM']['createSpan'].__args__ = [null,null];
	pyjamas['DOM']['createTable'] = function() {

		return pyjamas['DOM']['createElement'](String('table'));
	};
	pyjamas['DOM']['createTable'].__name__ = 'createTable';

	pyjamas['DOM']['createTable'].__bind_type__ = 0;
	pyjamas['DOM']['createTable'].__args__ = [null,null];
	pyjamas['DOM']['createTBody'] = function() {

		return pyjamas['DOM']['createElement'](String('tbody'));
	};
	pyjamas['DOM']['createTBody'].__name__ = 'createTBody';

	pyjamas['DOM']['createTBody'].__bind_type__ = 0;
	pyjamas['DOM']['createTBody'].__args__ = [null,null];
	pyjamas['DOM']['createTD'] = function() {

		return pyjamas['DOM']['createElement'](String('td'));
	};
	pyjamas['DOM']['createTD'].__name__ = 'createTD';

	pyjamas['DOM']['createTD'].__bind_type__ = 0;
	pyjamas['DOM']['createTD'].__args__ = [null,null];
	pyjamas['DOM']['createTextArea'] = function() {

		return pyjamas['DOM']['createElement'](String('textarea'));
	};
	pyjamas['DOM']['createTextArea'].__name__ = 'createTextArea';

	pyjamas['DOM']['createTextArea'].__bind_type__ = 0;
	pyjamas['DOM']['createTextArea'].__args__ = [null,null];
	pyjamas['DOM']['createTH'] = function() {

		return pyjamas['DOM']['createElement'](String('th'));
	};
	pyjamas['DOM']['createTH'].__name__ = 'createTH';

	pyjamas['DOM']['createTH'].__bind_type__ = 0;
	pyjamas['DOM']['createTH'].__args__ = [null,null];
	pyjamas['DOM']['createTR'] = function() {

		return pyjamas['DOM']['createElement'](String('tr'));
	};
	pyjamas['DOM']['createTR'].__name__ = 'createTR';

	pyjamas['DOM']['createTR'].__bind_type__ = 0;
	pyjamas['DOM']['createTR'].__args__ = [null,null];
	pyjamas['DOM']['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	pyjamas['DOM']['eventStopPropagation'].__name__ = 'eventStopPropagation';

	pyjamas['DOM']['eventStopPropagation'].__bind_type__ = 0;
	pyjamas['DOM']['eventStopPropagation'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventCancelBubble'] = function(evt, cancel) {

		evt.cancelBubble = cancel;
		return null;
	};
	pyjamas['DOM']['eventCancelBubble'].__name__ = 'eventCancelBubble';

	pyjamas['DOM']['eventCancelBubble'].__bind_type__ = 0;
	pyjamas['DOM']['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	pyjamas['DOM']['eventGetAltKey'] = function(evt) {
		var $attr9,$attr10;
		return ((($attr9=evt['altKey']) !== null & ($attr10=evt).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'altKey'):
					evt['altKey']);
	};
	pyjamas['DOM']['eventGetAltKey'].__name__ = 'eventGetAltKey';

	pyjamas['DOM']['eventGetAltKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetAltKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetButton'] = function(evt) {
		var $attr11,$attr12;
		return ((($attr11=evt['button']) !== null & ($attr12=evt).__is_instance__) && typeof $attr11 == 'function'?
					pyjslib['getattr']($attr12, 'button'):
					evt['button']);
	};
	pyjamas['DOM']['eventGetButton'].__name__ = 'eventGetButton';

	pyjamas['DOM']['eventGetButton'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetButton'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetClientX'] = function(evt) {
		var $attr14,$attr13;
		return ((($attr13=evt['clientX']) !== null & ($attr14=evt).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'clientX'):
					evt['clientX']);
	};
	pyjamas['DOM']['eventGetClientX'].__name__ = 'eventGetClientX';

	pyjamas['DOM']['eventGetClientX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientX'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetClientY'] = function(evt) {
		var $attr15,$attr16;
		return ((($attr15=evt['clientY']) !== null & ($attr16=evt).__is_instance__) && typeof $attr15 == 'function'?
					pyjslib['getattr']($attr16, 'clientY'):
					evt['clientY']);
	};
	pyjamas['DOM']['eventGetClientY'].__name__ = 'eventGetClientY';

	pyjamas['DOM']['eventGetClientY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientY'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetCtrlKey'] = function(evt) {
		var $attr17,$attr18;
		return ((($attr17=evt['ctrlKey']) !== null & ($attr18=evt).__is_instance__) && typeof $attr17 == 'function'?
					pyjslib['getattr']($attr18, 'ctrlKey'):
					evt['ctrlKey']);
	};
	pyjamas['DOM']['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	pyjamas['DOM']['eventGetCtrlKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetFromElement'] = function(evt) {
		var $attr20,$attr19,$pyjs_try_err,err;
		try {
			return ((($attr19=evt['fromElement']) !== null & ($attr20=evt).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'fromElement'):
						evt['fromElement']);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 318};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 321;
				err = $pyjs_try_err;
				return null;
			}
		}
		return null;
	};
	pyjamas['DOM']['eventGetFromElement'].__name__ = 'eventGetFromElement';

	pyjamas['DOM']['eventGetFromElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetFromElement'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetKeyCode'] = function(evt) {
		var $or5,$or7,$or6,$attr21,$attr22,$attr23,$attr24;
		return (pyjslib['bool']($or5=((($attr21=evt['which']) !== null & ($attr22=evt).__is_instance__) && typeof $attr21 == 'function'?
					pyjslib['getattr']($attr22, 'which'):
					evt['which']))?$or5:(pyjslib['bool']($or6=((($attr23=evt['keyCode']) !== null & ($attr24=evt).__is_instance__) && typeof $attr23 == 'function'?
					pyjslib['getattr']($attr24, 'keyCode'):
					evt['keyCode']))?$or6:0));
	};
	pyjamas['DOM']['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	pyjamas['DOM']['eventGetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetKeyCode'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetRepeat'] = function(evt) {
		var $attr25,$attr26;
		return ((($attr25=evt['repeat']) !== null & ($attr26=evt).__is_instance__) && typeof $attr25 == 'function'?
					pyjslib['getattr']($attr26, 'repeat'):
					evt['repeat']);
	};
	pyjamas['DOM']['eventGetRepeat'].__name__ = 'eventGetRepeat';

	pyjamas['DOM']['eventGetRepeat'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetRepeat'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetScreenX'] = function(evt) {
		var $attr28,$attr27;
		return ((($attr27=evt['screenX']) !== null & ($attr28=evt).__is_instance__) && typeof $attr27 == 'function'?
					pyjslib['getattr']($attr28, 'screenX'):
					evt['screenX']);
	};
	pyjamas['DOM']['eventGetScreenX'].__name__ = 'eventGetScreenX';

	pyjamas['DOM']['eventGetScreenX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenX'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetScreenY'] = function(evt) {
		var $attr29,$attr30;
		return ((($attr29=evt['screenY']) !== null & ($attr30=evt).__is_instance__) && typeof $attr29 == 'function'?
					pyjslib['getattr']($attr30, 'screenY'):
					evt['screenY']);
	};
	pyjamas['DOM']['eventGetScreenY'].__name__ = 'eventGetScreenY';

	pyjamas['DOM']['eventGetScreenY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenY'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetShiftKey'] = function(evt) {
		var $attr32,$attr31;
		return ((($attr31=evt['shiftKey']) !== null & ($attr32=evt).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'shiftKey'):
					evt['shiftKey']);
	};
	pyjamas['DOM']['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	pyjamas['DOM']['eventGetShiftKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetShiftKey'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetCurrentTarget'] = function(event) {
		var $attr33,$attr34;
		return ((($attr33=event['currentTarget']) !== null & ($attr34=event).__is_instance__) && typeof $attr33 == 'function'?
					pyjslib['getattr']($attr34, 'currentTarget'):
					event['currentTarget']);
	};
	pyjamas['DOM']['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	pyjamas['DOM']['eventGetCurrentTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetTarget'] = function(event) {
		var $attr35,$attr36;
		return ((($attr35=event['target']) !== null & ($attr36=event).__is_instance__) && typeof $attr35 == 'function'?
					pyjslib['getattr']($attr36, 'target'):
					event['target']);
	};
	pyjamas['DOM']['eventGetTarget'].__name__ = 'eventGetTarget';

	pyjamas['DOM']['eventGetTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTarget'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetToElement'] = function(evt) {
		var $attr37,$attr40,$attr39,$attr38,type;
		type = pyjamas.DOM.eventGetType(evt);
		if (pyjslib['bool'](pyjslib['op_eq'](type, String('mouseout')))) {
			return ((($attr37=evt['relatedTarget']) !== null & ($attr38=evt).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'relatedTarget'):
						evt['relatedTarget']);
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('mouseover')))) {
			return ((($attr39=evt['target']) !== null & ($attr40=evt).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'target'):
						evt['target']);
		}
		return null;
	};
	pyjamas['DOM']['eventGetToElement'].__name__ = 'eventGetToElement';

	pyjamas['DOM']['eventGetToElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetToElement'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventGetType'] = function(event) {
		var $attr42,$attr41;
		return ((($attr41=event['type']) !== null & ($attr42=event).__is_instance__) && typeof $attr41 == 'function'?
					pyjslib['getattr']($attr42, 'type'):
					event['type']);
	};
	pyjamas['DOM']['eventGetType'].__name__ = 'eventGetType';

	pyjamas['DOM']['eventGetType'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetType'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventmap'] = pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);
	pyjamas['DOM']['eventGetTypeInt'] = function(event) {
		var $attr44,$attr43;
		return pyjamas['DOM']['eventmap']['get'](pyjslib['str'](((($attr43=event['type']) !== null & ($attr44=event).__is_instance__) && typeof $attr43 == 'function'?
					pyjslib['getattr']($attr44, 'type'):
					event['type'])), 0);
	};
	pyjamas['DOM']['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	pyjamas['DOM']['eventGetTypeInt'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeInt'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventGetTypeString'] = function(event) {

		return pyjamas['DOM']['eventGetType'](event);
	};
	pyjamas['DOM']['eventGetTypeString'].__name__ = 'eventGetTypeString';

	pyjamas['DOM']['eventGetTypeString'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeString'].__args__ = [null,null,['event']];
	pyjamas['DOM']['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	pyjamas['DOM']['eventPreventDefault'].__name__ = 'eventPreventDefault';

	pyjamas['DOM']['eventPreventDefault'].__bind_type__ = 0;
	pyjamas['DOM']['eventPreventDefault'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['eventSetKeyCode'] = function(evt, key) {

		evt.keyCode = key;
		return null;
	};
	pyjamas['DOM']['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	pyjamas['DOM']['eventSetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	pyjamas['DOM']['eventToString'] = function(evt) {

		return evt['toString']();
	};
	pyjamas['DOM']['eventToString'].__name__ = 'eventToString';

	pyjamas['DOM']['eventToString'].__bind_type__ = 0;
	pyjamas['DOM']['eventToString'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['iframeGetSrc'] = function(elem) {
		var $attr46,$attr45;
		return ((($attr45=elem['src']) !== null & ($attr46=elem).__is_instance__) && typeof $attr45 == 'function'?
					pyjslib['getattr']($attr46, 'src'):
					elem['src']);
	};
	pyjamas['DOM']['iframeGetSrc'].__name__ = 'iframeGetSrc';

	pyjamas['DOM']['iframeGetSrc'].__bind_type__ = 0;
	pyjamas['DOM']['iframeGetSrc'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAbsoluteLeft'] = function(elem) {
		var $attr58,curr,$sub4,$attr51,$attr50,$attr53,$attr52,$attr55,$attr57,$attr54,$add2,$attr47,$add1,$attr56,$sub3,$sub2,$sub1,left,$attr48,$attr49;
		left = 0;
		curr = elem;
		while (pyjslib['bool'](((($attr47=curr['offsetParent']) !== null & ($attr48=curr).__is_instance__) && typeof $attr47 == 'function'?
					pyjslib['getattr']($attr48, 'offsetParent'):
					curr['offsetParent']))) {
			left = (typeof ($sub1=left)==typeof ($sub2=((($attr49=curr['scrollLeft']) !== null & ($attr50=curr).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'scrollLeft'):
						curr['scrollLeft'])) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
			curr = ((($attr51=curr['parentNode']) !== null & ($attr52=curr).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'parentNode'):
						curr['parentNode']);
		}
		while (pyjslib['bool'](elem)) {
			left = (typeof ($add1=left)==typeof ($add2=(typeof ($sub3=((($attr53=elem['offsetLeft']) !== null & ($attr54=elem).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'offsetLeft'):
						elem['offsetLeft']))==typeof ($sub4=((($attr55=elem['scrollLeft']) !== null & ($attr56=elem).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'scrollLeft'):
						elem['scrollLeft'])) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
			elem = ((($attr57=elem['offsetParent']) !== null & ($attr58=elem).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'offsetParent'):
						elem['offsetParent']);
		}
		return left;
	};
	pyjamas['DOM']['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	pyjamas['DOM']['getAbsoluteLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAbsoluteTop'] = function(elem) {
		var $attr59,$attr70,curr,$attr69,$attr64,$attr65,top,$attr67,$attr60,$attr62,$attr61,$add3,$sub8,$add4,$attr66,$attr68,$attr63,$sub7,$sub6,$sub5;
		top = 0;
		curr = elem;
		while (pyjslib['bool'](((($attr59=curr['offsetParent']) !== null & ($attr60=curr).__is_instance__) && typeof $attr59 == 'function'?
					pyjslib['getattr']($attr60, 'offsetParent'):
					curr['offsetParent']))) {
			top = (typeof ($sub5=top)==typeof ($sub6=((($attr61=curr['scrollTop']) !== null & ($attr62=curr).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'scrollTop'):
						curr['scrollTop'])) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6));
			curr = ((($attr63=curr['parentNode']) !== null & ($attr64=curr).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'parentNode'):
						curr['parentNode']);
		}
		while (pyjslib['bool'](elem)) {
			top = (typeof ($add3=top)==typeof ($add4=(typeof ($sub7=((($attr65=elem['offsetTop']) !== null & ($attr66=elem).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, 'offsetTop'):
						elem['offsetTop']))==typeof ($sub8=((($attr67=elem['scrollTop']) !== null & ($attr68=elem).__is_instance__) && typeof $attr67 == 'function'?
						pyjslib['getattr']($attr68, 'scrollTop'):
						elem['scrollTop'])) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				pyjslib['op_sub']($sub7,$sub8))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			elem = ((($attr69=elem['offsetParent']) !== null & ($attr70=elem).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, 'offsetParent'):
						elem['offsetParent']);
		}
		return top;
	};
	pyjamas['DOM']['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	pyjamas['DOM']['getAbsoluteTop'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteTop'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getAttribute'] = function(elem, attr) {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		return pyjslib['str'](pyjslib['getattr'](elem, attr));
	};
	pyjamas['DOM']['getAttribute'].__name__ = 'getAttribute';

	pyjamas['DOM']['getAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getElemAttribute'] = function(elem, attr) {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return pyjslib['str'](pyjslib['getattr'](elem, mf['mash_attrib'](attr)));
		}
		return pyjslib['str'](elem['getAttribute'](attr));
	};
	pyjamas['DOM']['getElemAttribute'].__name__ = 'getElemAttribute';

	pyjamas['DOM']['getElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getBooleanAttribute'] = function(elem, attr) {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		return pyjslib['bool'](pyjslib['getattr'](elem, mf['mash_attrib'](attr)));
	};
	pyjamas['DOM']['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	pyjamas['DOM']['getBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getBooleanElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['bool'](elem['getAttribute'](attr));
	};
	pyjamas['DOM']['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	pyjamas['DOM']['getBooleanElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getCaptureElement'] = function() {

		return pyjamas['DOM']['sCaptureElem'];
	};
	pyjamas['DOM']['getCaptureElement'].__name__ = 'getCaptureElement';

	pyjamas['DOM']['getCaptureElement'].__bind_type__ = 0;
	pyjamas['DOM']['getCaptureElement'].__args__ = [null,null];
	pyjamas['DOM']['getChild'] = function(elem, index) {
		var count,$attr76,$attr75,$attr74,$attr73,$attr71,$attr72,$add5,$add6,child,next;
		count = 0;
		child = ((($attr71=elem['firstChild']) !== null & ($attr72=elem).__is_instance__) && typeof $attr71 == 'function'?
					pyjslib['getattr']($attr72, 'firstChild'):
					elem['firstChild']);
		while (pyjslib['bool'](child)) {
			next = ((($attr73=child['nextSibling']) !== null & ($attr74=child).__is_instance__) && typeof $attr73 == 'function'?
						pyjslib['getattr']($attr74, 'nextSibling'):
						child['nextSibling']);
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr75=child['nodeType']) !== null & ($attr76=child).__is_instance__) && typeof $attr75 == 'function'?
						pyjslib['getattr']($attr76, 'nodeType'):
						child['nodeType']), 1))) {
				if (pyjslib['bool'](pyjslib['op_eq'](index, count))) {
					return child;
				}
				count = (typeof ($add5=count)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
			child = next;
		}
		return null;
	};
	pyjamas['DOM']['getChild'].__name__ = 'getChild';

	pyjamas['DOM']['getChild'].__bind_type__ = 0;
	pyjamas['DOM']['getChild'].__args__ = [null,null,['elem'],['index']];
	pyjamas['DOM']['getChildCount'] = function(elem) {
		var count,$attr82,$attr80,$attr81,$attr79,$attr78,$attr77,$add7,child,$add8;
		count = 0;
		child = ((($attr77=elem['firstChild']) !== null & ($attr78=elem).__is_instance__) && typeof $attr77 == 'function'?
					pyjslib['getattr']($attr78, 'firstChild'):
					elem['firstChild']);
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr79=child['nodeType']) !== null & ($attr80=child).__is_instance__) && typeof $attr79 == 'function'?
						pyjslib['getattr']($attr80, 'nodeType'):
						child['nodeType']), 1))) {
				count = (typeof ($add7=count)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8));
			}
			child = ((($attr81=child['nextSibling']) !== null & ($attr82=child).__is_instance__) && typeof $attr81 == 'function'?
						pyjslib['getattr']($attr82, 'nextSibling'):
						child['nextSibling']);
		}
		return count;
	};
	pyjamas['DOM']['getChildCount'].__name__ = 'getChildCount';

	pyjamas['DOM']['getChildCount'].__bind_type__ = 0;
	pyjamas['DOM']['getChildCount'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getChildIndex'] = function(parent, toFind) {
		var count,$attr83,$attr86,$attr84,$attr85,$attr88,child,$add10,$add9,$attr87;
		count = 0;
		child = ((($attr83=parent['firstChild']) !== null & ($attr84=parent).__is_instance__) && typeof $attr83 == 'function'?
					pyjslib['getattr']($attr84, 'firstChild'):
					parent['firstChild']);
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjslib['op_eq'](child, toFind))) {
				return count;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr85=child['nodeType']) !== null & ($attr86=child).__is_instance__) && typeof $attr85 == 'function'?
						pyjslib['getattr']($attr86, 'nodeType'):
						child['nodeType']), 1))) {
				count = (typeof ($add9=count)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					pyjslib['op_add']($add9,$add10));
			}
			child = ((($attr87=child['nextSibling']) !== null & ($attr88=child).__is_instance__) && typeof $attr87 == 'function'?
						pyjslib['getattr']($attr88, 'nextSibling'):
						child['nextSibling']);
		}
		return (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1));
	};
	pyjamas['DOM']['getChildIndex'].__name__ = 'getChildIndex';

	pyjamas['DOM']['getChildIndex'].__bind_type__ = 0;
	pyjamas['DOM']['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	pyjamas['DOM']['getElementById'] = function(id) {

		return $doc['getElementById'](id);
	};
	pyjamas['DOM']['getElementById'].__name__ = 'getElementById';

	pyjamas['DOM']['getElementById'].__bind_type__ = 0;
	pyjamas['DOM']['getElementById'].__args__ = [null,null,['id']];
	pyjamas['DOM']['getEventListener'] = function(element) {

		return pyjamas['DOM']['get_listener'](element);
	};
	pyjamas['DOM']['getEventListener'].__name__ = 'getEventListener';

	pyjamas['DOM']['getEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['getEventListener'].__args__ = [null,null,['element']];
	pyjamas['DOM']['eventbitsmap'] = pyjslib['dict']([]);
	pyjamas['DOM']['getEventsSunk'] = function(element) {

		return pyjamas['DOM']['eventbitsmap']['get'](element, 0);
	};
	pyjamas['DOM']['getEventsSunk'].__name__ = 'getEventsSunk';

	pyjamas['DOM']['getEventsSunk'].__bind_type__ = 0;
	pyjamas['DOM']['getEventsSunk'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getFirstChild'] = function(elem) {
		var $and9,$attr91,$attr90,$attr93,$attr92,$attr89,$and12,$and10,$and11,child,$attr94;
		child = (pyjslib['bool']($and9=elem)?((($attr89=elem['firstChild']) !== null & ($attr90=elem).__is_instance__) && typeof $attr89 == 'function'?
					pyjslib['getattr']($attr90, 'firstChild'):
					elem['firstChild']):$and9);
		while (pyjslib['bool']((pyjslib['bool']($and11=child)?!pyjslib['op_eq'](((($attr91=child['nodeType']) !== null & ($attr92=child).__is_instance__) && typeof $attr91 == 'function'?
					pyjslib['getattr']($attr92, 'nodeType'):
					child['nodeType']), 1):$and11))) {
			child = ((($attr93=child['nextSibling']) !== null & ($attr94=child).__is_instance__) && typeof $attr93 == 'function'?
						pyjslib['getattr']($attr94, 'nextSibling'):
						child['nextSibling']);
		}
		return child;
	};
	pyjamas['DOM']['getFirstChild'].__name__ = 'getFirstChild';

	pyjamas['DOM']['getFirstChild'].__bind_type__ = 0;
	pyjamas['DOM']['getFirstChild'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getInnerHTML'] = function(element) {
		var $attr95,$attr97,$attr96,err,$attr98,$and13,$pyjs_try_err,$and16,$and14,$and15;
		try {
			return (pyjslib['bool']($and13=element)?((($attr95=element['innerHtml']) !== null & ($attr96=element).__is_instance__) && typeof $attr95 == 'function'?
						pyjslib['getattr']($attr96, 'innerHtml'):
						element['innerHtml']):$and13);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 545};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 548;
				err = $pyjs_try_err;
				return (pyjslib['bool']($and15=element)?((($attr97=element['innerHTML']) !== null & ($attr98=element).__is_instance__) && typeof $attr97 == 'function'?
							pyjslib['getattr']($attr98, 'innerHTML'):
							element['innerHTML']):$and15);
			}
		}
		return null;
	};
	pyjamas['DOM']['getInnerHTML'].__name__ = 'getInnerHTML';

	pyjamas['DOM']['getInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerHTML'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getInnerText'] = function(element) {
		var $add14,$add12,$attr107,text,$attr101,$attr99,$attr106,$add13,$attr104,$attr105,$attr102,$add11,$attr100,child,$attr108,$attr103;
		text = String('');
		child = ((($attr99=element['firstChild']) !== null & ($attr100=element).__is_instance__) && typeof $attr99 == 'function'?
					pyjslib['getattr']($attr100, 'firstChild'):
					element['firstChild']);
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr101=child['nodeType']) !== null & ($attr102=child).__is_instance__) && typeof $attr101 == 'function'?
						pyjslib['getattr']($attr102, 'nodeType'):
						child['nodeType']), 1))) {
				text = (typeof ($add11=text)==typeof ($add12=child['getInnerText']()) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12));
			}
			else if (pyjslib['bool'](((($attr103=child['nodeValue']) !== null & ($attr104=child).__is_instance__) && typeof $attr103 == 'function'?
						pyjslib['getattr']($attr104, 'nodeValue'):
						child['nodeValue']))) {
				text = (typeof ($add13=text)==typeof ($add14=((($attr105=child['nodeValue']) !== null & ($attr106=child).__is_instance__) && typeof $attr105 == 'function'?
							pyjslib['getattr']($attr106, 'nodeValue'):
							child['nodeValue'])) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					pyjslib['op_add']($add13,$add14));
			}
			child = ((($attr107=child['nextSibling']) !== null & ($attr108=child).__is_instance__) && typeof $attr107 == 'function'?
						pyjslib['getattr']($attr108, 'nextSibling'):
						child['nextSibling']);
		}
		return text;
	};
	pyjamas['DOM']['getInnerText'].__name__ = 'getInnerText';

	pyjamas['DOM']['getInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerText'].__args__ = [null,null,['element']];
	pyjamas['DOM']['getIntAttribute'] = function(elem, attr) {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		return pyjslib['float_int'](pyjslib['getattr'](elem, attr));
	};
	pyjamas['DOM']['getIntAttribute'].__name__ = 'getIntAttribute';

	pyjamas['DOM']['getIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getIntElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['float_int'](elem['getAttribute'](attr));
	};
	pyjamas['DOM']['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	pyjamas['DOM']['getIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getIntStyleAttribute'] = function(elem, attr) {
		var $attr110,$attr109;
		return pyjamas['DOM']['getIntAttribute'](((($attr109=elem['style']) !== null & ($attr110=elem).__is_instance__) && typeof $attr109 == 'function'?
					pyjslib['getattr']($attr110, 'style'):
					elem['style']), attr);
	};
	pyjamas['DOM']['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	pyjamas['DOM']['getIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['getNextSibling'] = function(elem) {
		var $attr111,$attr113,$attr112,$attr115,$attr114,sib,$and17,$and18,$attr116;
		sib = ((($attr111=elem['nextSibling']) !== null & ($attr112=elem).__is_instance__) && typeof $attr111 == 'function'?
					pyjslib['getattr']($attr112, 'nextSibling'):
					elem['nextSibling']);
		while (pyjslib['bool']((pyjslib['bool']($and17=sib)?!pyjslib['op_eq'](((($attr113=sib['nodeType']) !== null & ($attr114=sib).__is_instance__) && typeof $attr113 == 'function'?
					pyjslib['getattr']($attr114, 'nodeType'):
					sib['nodeType']), 1):$and17))) {
			sib = ((($attr115=sib['nextSibling']) !== null & ($attr116=sib).__is_instance__) && typeof $attr115 == 'function'?
						pyjslib['getattr']($attr116, 'nextSibling'):
						sib['nextSibling']);
		}
		return sib;
	};
	pyjamas['DOM']['getNextSibling'].__name__ = 'getNextSibling';

	pyjamas['DOM']['getNextSibling'].__bind_type__ = 0;
	pyjamas['DOM']['getNextSibling'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getNodeType'] = function(elem) {
		var $attr118,$attr117;
		return ((($attr117=elem['nodeType']) !== null & ($attr118=elem).__is_instance__) && typeof $attr117 == 'function'?
					pyjslib['getattr']($attr118, 'nodeType'):
					elem['nodeType']);
	};
	pyjamas['DOM']['getNodeType'].__name__ = 'getNodeType';

	pyjamas['DOM']['getNodeType'].__bind_type__ = 0;
	pyjamas['DOM']['getNodeType'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getParent'] = function(elem) {
		var $attr119,$attr120,parent;
		parent = ((($attr119=elem['parentNode']) !== null & ($attr120=elem).__is_instance__) && typeof $attr119 == 'function'?
					pyjslib['getattr']($attr120, 'parentNode'):
					elem['parentNode']);
		if (pyjslib['bool']((parent === null))) {
			return null;
		}
		if (pyjslib['bool'](!pyjslib['op_eq'](pyjamas['DOM']['getNodeType'](parent), 1))) {
			return null;
		}
		return parent;
	};
	pyjamas['DOM']['getParent'].__name__ = 'getParent';

	pyjamas['DOM']['getParent'].__bind_type__ = 0;
	pyjamas['DOM']['getParent'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getStyleAttribute'] = function(elem, attr) {
		var err,$attr121,$attr122,$pyjs_try_err;
		try {
			if (pyjslib['bool'](pyjslib['hasattr'](((($attr121=pyjamas.DOM.element['style']) !== null & ($attr122=pyjamas.DOM.element).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'style'):
						pyjamas.DOM.element['style']), String('getProperty')))) {
				return elem['style']['getProperty'](pyjamas.DOM.mash_name_for_glib(attr));
			}
			return elem['style']['getAttribute'](attr);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 601};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 606;
				err = $pyjs_try_err;
				return null;
			}
		}
		return null;
	};
	pyjamas['DOM']['getStyleAttribute'].__name__ = 'getStyleAttribute';

	pyjamas['DOM']['getStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	pyjamas['DOM']['insertChild'] = function(parent, toAdd, index) {
		var count,$attr127,$add15,$add16,$attr123,$attr124,$attr125,$attr126,child,$attr128,before;
		count = 0;
		child = ((($attr123=parent['firstChild']) !== null & ($attr124=parent).__is_instance__) && typeof $attr123 == 'function'?
					pyjslib['getattr']($attr124, 'firstChild'):
					parent['firstChild']);
		before = null;
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr125=child['nodeType']) !== null & ($attr126=child).__is_instance__) && typeof $attr125 == 'function'?
						pyjslib['getattr']($attr126, 'nodeType'):
						child['nodeType']), 1))) {
				if (pyjslib['bool'](pyjslib['op_eq'](count, index))) {
					before = child;
					break;
				}
				count = (typeof ($add15=count)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					pyjslib['op_add']($add15,$add16));
			}
			child = ((($attr127=child['nextSibling']) !== null & ($attr128=child).__is_instance__) && typeof $attr127 == 'function'?
						pyjslib['getattr']($attr128, 'nextSibling'):
						child['nextSibling']);
		}
		if (pyjslib['bool']((before === null))) {
			parent['appendChild'](toAdd);
		}
		else {
			parent['insertBefore'](toAdd, before);
		}
		return null;
	};
	pyjamas['DOM']['insertChild'].__name__ = 'insertChild';

	pyjamas['DOM']['insertChild'].__bind_type__ = 0;
	pyjamas['DOM']['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	pyjamas['DOM']['IterChildrenClass'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterChildrenClass');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ac20b681ce3e37358ce4695bb6b0235a';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr129,$attr130;
			self.parent = elem;
			self.child = ((($attr129=elem['firstChild']) !== null & ($attr130=elem).__is_instance__) && typeof $attr129 == 'function'?
						pyjslib['getattr']($attr130, 'firstChild'):
						elem['firstChild']);
			self.lastChild = null;
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr133,$attr132,$attr131,$attr137,$attr136,$attr135,$attr134,$attr138;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr131=self['child']) !== null & ($attr132=self).__is_instance__) && typeof $attr131 == 'function'?
						pyjslib['getattr']($attr132, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr133=self['child']) !== null & ($attr134=self).__is_instance__) && typeof $attr133 == 'function'?
						pyjslib['getattr']($attr134, 'child'):
						self['child']);
			self.child = pyjamas['DOM']['getNextSibling'](((($attr135=self['child']) !== null & ($attr136=self).__is_instance__) && typeof $attr135 == 'function'?
						pyjslib['getattr']($attr136, 'child'):
						self['child']));
			return ((($attr137=self['lastChild']) !== null & ($attr138=self).__is_instance__) && typeof $attr137 == 'function'?
						pyjslib['getattr']($attr138, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr140,$attr139;
			self['parent']['removeChild'](((($attr139=self['lastChild']) !== null & ($attr140=self).__is_instance__) && typeof $attr139 == 'function'?
						pyjslib['getattr']($attr140, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['DOM']['iterChildren'] = function(elem) {

		return pyjamas['DOM']['IterChildrenClass'](elem);
	};
	pyjamas['DOM']['iterChildren'].__name__ = 'iterChildren';

	pyjamas['DOM']['iterChildren'].__bind_type__ = 0;
	pyjamas['DOM']['iterChildren'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['IterWalkChildren'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterWalkChildren');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bc5e5c0dda264b4692f63f3512cced97';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.parent = elem;
			self.child = pyjamas['DOM']['getFirstChild'](elem);
			self.lastChild = null;
			self.stack = pyjslib['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr142,$attr143,$attr141,$attr146,$attr147,$attr144,$attr145,$attr153,$attr149,nextSibling,firstChild,$attr154,$attr155,$attr156,$attr152,$attr151,$attr148,$attr150;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr141=self['child']) !== null & ($attr142=self).__is_instance__) && typeof $attr141 == 'function'?
						pyjslib['getattr']($attr142, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr143=self['child']) !== null & ($attr144=self).__is_instance__) && typeof $attr143 == 'function'?
						pyjslib['getattr']($attr144, 'child'):
						self['child']);
			firstChild = pyjamas['DOM']['getFirstChild'](((($attr145=self['child']) !== null & ($attr146=self).__is_instance__) && typeof $attr145 == 'function'?
						pyjslib['getattr']($attr146, 'child'):
						self['child']));
			nextSibling = pyjamas['DOM']['getNextSibling'](((($attr147=self['child']) !== null & ($attr148=self).__is_instance__) && typeof $attr147 == 'function'?
						pyjslib['getattr']($attr148, 'child'):
						self['child']));
			if (pyjslib['bool']((firstChild !== null))) {
				if (pyjslib['bool']((nextSibling !== null))) {
					self['stack']['append'](pyjslib['tuple']([nextSibling, ((($attr149=self['parent']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
								pyjslib['getattr']($attr150, 'parent'):
								self['parent'])]));
				}
				self.parent = ((($attr151=self['child']) !== null & ($attr152=self).__is_instance__) && typeof $attr151 == 'function'?
							pyjslib['getattr']($attr152, 'child'):
							self['child']);
				self.child = firstChild;
			}
			else if (pyjslib['bool']((nextSibling !== null))) {
				self.child = nextSibling;
			}
			else if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](((($attr153=self['stack']) !== null & ($attr154=self).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'stack'):
						self['stack'])), 0) == 1))) {
				var $tupleassign1 = self['stack']['pop']();
				self.child = $tupleassign1.__getitem__(0);
				self.parent = $tupleassign1.__getitem__(1);
			}
			else {
				self.child = null;
			}
			return ((($attr155=self['lastChild']) !== null & ($attr156=self).__is_instance__) && typeof $attr155 == 'function'?
						pyjslib['getattr']($attr156, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr157,$attr158;
			self['parent']['removeChild'](((($attr157=self['lastChild']) !== null & ($attr158=self).__is_instance__) && typeof $attr157 == 'function'?
						pyjslib['getattr']($attr158, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['DOM']['walkChildren'] = function(elem) {

		return pyjamas['DOM']['IterWalkChildren'](elem);
	};
	pyjamas['DOM']['walkChildren'].__name__ = 'walkChildren';

	pyjamas['DOM']['walkChildren'].__bind_type__ = 0;
	pyjamas['DOM']['walkChildren'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['isOrHasChild'] = function(parent, child) {
		var $attr159,$attr160,$attr161,$attr162;
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool'](pyjamas['DOM']['compare'](parent, child))) {
				return true;
			}
			child = ((($attr159=child['parentNode']) !== null & ($attr160=child).__is_instance__) && typeof $attr159 == 'function'?
						pyjslib['getattr']($attr160, 'parentNode'):
						child['parentNode']);
			if (pyjslib['bool'](!pyjslib['bool'](child))) {
				return false;
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr161=child['nodeType']) !== null & ($attr162=child).__is_instance__) && typeof $attr161 == 'function'?
						pyjslib['getattr']($attr162, 'nodeType'):
						child['nodeType']), 1))) {
				child = null;
			}
		}
		return false;
	};
	pyjamas['DOM']['isOrHasChild'].__name__ = 'isOrHasChild';

	pyjamas['DOM']['isOrHasChild'].__bind_type__ = 0;
	pyjamas['DOM']['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['releaseCapture'] = function(elem) {
		var $and19,$and20;
		if (pyjslib['bool']((pyjslib['bool']($and19=pyjamas['DOM']['sCaptureElem'])?pyjamas['DOM']['compare'](elem, pyjamas['DOM']['sCaptureElem']):$and19))) {
			pyjamas['DOM']['sCaptureElem'] = null;
		}
		return null;
	};
	pyjamas['DOM']['releaseCapture'].__name__ = 'releaseCapture';

	pyjamas['DOM']['releaseCapture'].__bind_type__ = 0;
	pyjamas['DOM']['releaseCapture'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	pyjamas['DOM']['removeChild'].__name__ = 'removeChild';

	pyjamas['DOM']['removeChild'].__bind_type__ = 0;
	pyjamas['DOM']['removeChild'].__args__ = [null,null,['parent'],['child']];
	pyjamas['DOM']['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	pyjamas['DOM']['replaceChild'].__name__ = 'replaceChild';

	pyjamas['DOM']['replaceChild'].__bind_type__ = 0;
	pyjamas['DOM']['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	pyjamas['DOM']['removeEventPreview'] = function(preview) {

		pyjamas['DOM']['sEventPreviewStack']['remove'](preview);
		return null;
	};
	pyjamas['DOM']['removeEventPreview'].__name__ = 'removeEventPreview';

	pyjamas['DOM']['removeEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['removeEventPreview'].__args__ = [null,null,['preview']];
	pyjamas['DOM']['getOffsetHeight'] = function(elem) {
		var $attr164,$attr163;
		return ((($attr163=elem['offsetHeight']) !== null & ($attr164=elem).__is_instance__) && typeof $attr163 == 'function'?
					pyjslib['getattr']($attr164, 'offsetHeight'):
					elem['offsetHeight']);
	};
	pyjamas['DOM']['getOffsetHeight'].__name__ = 'getOffsetHeight';

	pyjamas['DOM']['getOffsetHeight'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetHeight'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['getOffsetWidth'] = function(elem) {
		var $attr165,$attr166;
		return ((($attr165=elem['offsetWidth']) !== null & ($attr166=elem).__is_instance__) && typeof $attr165 == 'function'?
					pyjslib['getattr']($attr166, 'offsetWidth'):
					elem['offsetWidth']);
	};
	pyjamas['DOM']['getOffsetWidth'].__name__ = 'getOffsetWidth';

	pyjamas['DOM']['getOffsetWidth'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetWidth'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['scrollIntoView'] = function(elem) {
		var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$sub20,$sub21,cur,offsetLeft,$sub23,$attr221,$attr218,$attr219,$attr220,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215,$sub22,$and23,$and22,$and21,$and25,$and24,$attr168,$attr169,$attr167,$attr209,$attr208,offsetTop,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$attr229,$attr228,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170,height,top,width,$sub24,$add32,$add30,$add31,$attr230,$attr182,$add29,$add28,$add21,$add20,$attr183,$add22,$add25,$add24,$add27,$add26,$sub9,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$or9,$or8,$attr180,$attr181,$add17,$add18,$add19,$add23,left;
		left = ((($attr167=elem['offsetLeft']) !== null & ($attr168=elem).__is_instance__) && typeof $attr167 == 'function'?
					pyjslib['getattr']($attr168, 'offsetLeft'):
					elem['offsetLeft']);
		top = ((($attr169=elem['offsetTop']) !== null & ($attr170=elem).__is_instance__) && typeof $attr169 == 'function'?
					pyjslib['getattr']($attr170, 'offsetTop'):
					elem['offsetTop']);
		width = ((($attr171=elem['offsetWidth']) !== null & ($attr172=elem).__is_instance__) && typeof $attr171 == 'function'?
					pyjslib['getattr']($attr172, 'offsetWidth'):
					elem['offsetWidth']);
		height = ((($attr173=elem['offsetHeight']) !== null & ($attr174=elem).__is_instance__) && typeof $attr173 == 'function'?
					pyjslib['getattr']($attr174, 'offsetHeight'):
					elem['offsetHeight']);
		if (pyjslib['bool'](!pyjslib['op_eq'](((($attr175=elem['parentNode']) !== null & ($attr176=elem).__is_instance__) && typeof $attr175 == 'function'?
					pyjslib['getattr']($attr176, 'parentNode'):
					elem['parentNode']), ((($attr177=elem['offsetParent']) !== null & ($attr178=elem).__is_instance__) && typeof $attr177 == 'function'?
					pyjslib['getattr']($attr178, 'offsetParent'):
					elem['offsetParent'])))) {
			left = (typeof ($sub9=left)==typeof ($sub10=((($attr179=elem['parentNode']['offsetLeft']) !== null & ($attr180=elem['parentNode']).__is_instance__) && typeof $attr179 == 'function'?
						pyjslib['getattr']($attr180, 'offsetLeft'):
						elem['parentNode']['offsetLeft'])) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				pyjslib['op_sub']($sub9,$sub10));
			top = (typeof ($sub11=top)==typeof ($sub12=((($attr181=elem['parentNode']['offsetTop']) !== null & ($attr182=elem['parentNode']).__is_instance__) && typeof $attr181 == 'function'?
						pyjslib['getattr']($attr182, 'offsetTop'):
						elem['parentNode']['offsetTop'])) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				pyjslib['op_sub']($sub11,$sub12));
		}
		cur = ((($attr183=elem['parentNode']) !== null & ($attr184=elem).__is_instance__) && typeof $attr183 == 'function'?
					pyjslib['getattr']($attr184, 'parentNode'):
					elem['parentNode']);
		while (pyjslib['bool']((pyjslib['bool']($and21=cur)?pyjslib['op_eq'](((($attr185=cur['nodeType']) !== null & ($attr186=cur).__is_instance__) && typeof $attr185 == 'function'?
					pyjslib['getattr']($attr186, 'nodeType'):
					cur['nodeType']), 1):$and21))) {
			if (pyjslib['bool']((pyjslib['bool']($and23=pyjslib['hasattr'](cur, String('style')))?(pyjslib['bool']($and24=pyjslib['hasattr'](((($attr187=cur['style']) !== null & ($attr188=cur).__is_instance__) && typeof $attr187 == 'function'?
						pyjslib['getattr']($attr188, 'style'):
						cur['style']), String('overflow')))?(pyjslib['bool']($or8=pyjslib['op_eq'](((($attr189=cur['style']['overflow']) !== null & ($attr190=cur['style']).__is_instance__) && typeof $attr189 == 'function'?
						pyjslib['getattr']($attr190, 'overflow'):
						cur['style']['overflow']), String('auto')))?$or8:pyjslib['op_eq'](((($attr191=cur['style']['overflow']) !== null & ($attr192=cur['style']).__is_instance__) && typeof $attr191 == 'function'?
						pyjslib['getattr']($attr192, 'overflow'):
						cur['style']['overflow']), String('scroll'))):$and24):$and23))) {
				if (pyjslib['bool']((pyjslib['cmp'](left, ((($attr193=cur['scrollLeft']) !== null & ($attr194=cur).__is_instance__) && typeof $attr193 == 'function'?
							pyjslib['getattr']($attr194, 'scrollLeft'):
							cur['scrollLeft'])) == -1))) {
					cur.scrollLeft = left;
				}
				if (pyjslib['bool']((pyjslib['cmp']((typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18)), (typeof ($add19=((($attr195=cur['scrollLeft']) !== null & ($attr196=cur).__is_instance__) && typeof $attr195 == 'function'?
							pyjslib['getattr']($attr196, 'scrollLeft'):
							cur['scrollLeft']))==typeof ($add20=((($attr197=cur['clientWidth']) !== null & ($attr198=cur).__is_instance__) && typeof $attr197 == 'function'?
							pyjslib['getattr']($attr198, 'clientWidth'):
							cur['clientWidth'])) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20))) == 1))) {
					cur.scrollLeft = (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						pyjslib['op_add']($add21,$add22)))==typeof ($sub14=((($attr199=cur['clientWidth']) !== null & ($attr200=cur).__is_instance__) && typeof $attr199 == 'function'?
								pyjslib['getattr']($attr200, 'clientWidth'):
								cur['clientWidth'])) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						pyjslib['op_sub']($sub13,$sub14));
				}
				if (pyjslib['bool']((pyjslib['cmp'](top, ((($attr201=cur['scrollTop']) !== null & ($attr202=cur).__is_instance__) && typeof $attr201 == 'function'?
							pyjslib['getattr']($attr202, 'scrollTop'):
							cur['scrollTop'])) == -1))) {
					cur.scrollTop = top;
				}
				if (pyjslib['bool']((pyjslib['cmp']((typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)), (typeof ($add25=((($attr203=cur['scrollTop']) !== null & ($attr204=cur).__is_instance__) && typeof $attr203 == 'function'?
							pyjslib['getattr']($attr204, 'scrollTop'):
							cur['scrollTop']))==typeof ($add26=((($attr205=cur['clientHeight']) !== null & ($attr206=cur).__is_instance__) && typeof $attr205 == 'function'?
							pyjslib['getattr']($attr206, 'clientHeight'):
							cur['clientHeight'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26))) == 1))) {
					cur.scrollTop = (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						pyjslib['op_add']($add27,$add28)))==typeof ($sub16=((($attr207=cur['clientHeight']) !== null & ($attr208=cur).__is_instance__) && typeof $attr207 == 'function'?
								pyjslib['getattr']($attr208, 'clientHeight'):
								cur['clientHeight'])) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						pyjslib['op_sub']($sub15,$sub16));
				}
			}
			offsetLeft = ((($attr209=cur['offsetLeft']) !== null & ($attr210=cur).__is_instance__) && typeof $attr209 == 'function'?
						pyjslib['getattr']($attr210, 'offsetLeft'):
						cur['offsetLeft']);
			offsetTop = ((($attr211=cur['offsetTop']) !== null & ($attr212=cur).__is_instance__) && typeof $attr211 == 'function'?
						pyjslib['getattr']($attr212, 'offsetTop'):
						cur['offsetTop']);
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr213=cur['parentNode']) !== null & ($attr214=cur).__is_instance__) && typeof $attr213 == 'function'?
						pyjslib['getattr']($attr214, 'parentNode'):
						cur['parentNode']), ((($attr215=cur['offsetParent']) !== null & ($attr216=cur).__is_instance__) && typeof $attr215 == 'function'?
						pyjslib['getattr']($attr216, 'offsetParent'):
						cur['offsetParent'])))) {
				if (pyjslib['bool'](pyjslib['hasattr'](((($attr217=cur['parentNode']) !== null & ($attr218=cur).__is_instance__) && typeof $attr217 == 'function'?
							pyjslib['getattr']($attr218, 'parentNode'):
							cur['parentNode']), String('offsetLeft')))) {
					offsetLeft = (typeof ($sub17=offsetLeft)==typeof ($sub18=((($attr219=cur['parentNode']['offsetLeft']) !== null & ($attr220=cur['parentNode']).__is_instance__) && typeof $attr219 == 'function'?
								pyjslib['getattr']($attr220, 'offsetLeft'):
								cur['parentNode']['offsetLeft'])) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						pyjslib['op_sub']($sub17,$sub18));
				}
				if (pyjslib['bool'](pyjslib['hasattr'](((($attr221=cur['parentNode']) !== null & ($attr222=cur).__is_instance__) && typeof $attr221 == 'function'?
							pyjslib['getattr']($attr222, 'parentNode'):
							cur['parentNode']), String('offsetTop')))) {
					offsetTop = (typeof ($sub19=offsetTop)==typeof ($sub20=((($attr223=cur['parentNode']['offsetTop']) !== null & ($attr224=cur['parentNode']).__is_instance__) && typeof $attr223 == 'function'?
								pyjslib['getattr']($attr224, 'offsetTop'):
								cur['parentNode']['offsetTop'])) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						pyjslib['op_sub']($sub19,$sub20));
				}
			}
			left = (typeof ($add29=left)==typeof ($add30=(typeof ($sub21=offsetLeft)==typeof ($sub22=((($attr225=cur['scrollLeft']) !== null & ($attr226=cur).__is_instance__) && typeof $attr225 == 'function'?
						pyjslib['getattr']($attr226, 'scrollLeft'):
						cur['scrollLeft'])) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				pyjslib['op_sub']($sub21,$sub22))) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				pyjslib['op_add']($add29,$add30));
			top = (typeof ($add31=top)==typeof ($add32=(typeof ($sub23=offsetTop)==typeof ($sub24=((($attr227=cur['scrollTop']) !== null & ($attr228=cur).__is_instance__) && typeof $attr227 == 'function'?
						pyjslib['getattr']($attr228, 'scrollTop'):
						cur['scrollTop'])) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				pyjslib['op_sub']($sub23,$sub24))) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				pyjslib['op_add']($add31,$add32));
			cur = ((($attr229=cur['parentNode']) !== null & ($attr230=cur).__is_instance__) && typeof $attr229 == 'function'?
						pyjslib['getattr']($attr230, 'parentNode'):
						cur['parentNode']);
		}
		return null;
	};
	pyjamas['DOM']['scrollIntoView'].__name__ = 'scrollIntoView';

	pyjamas['DOM']['scrollIntoView'].__bind_type__ = 0;
	pyjamas['DOM']['scrollIntoView'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add37,$add34,$iter1_iter,$iter1_array,$add33,$add38,$iter1_type;
		res = String('');
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			if (pyjslib['bool'](c['isupper']())) {
				res = (typeof ($add35=res)==typeof ($add36=(typeof ($add33=joiner)==typeof ($add34=c['lower']()) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					pyjslib['op_add']($add33,$add34))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					pyjslib['op_add']($add35,$add36));
			}
			else {
				res = (typeof ($add37=res)==typeof ($add38=c) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					pyjslib['op_add']($add37,$add38));
			}
		}
		return res;
	};
	pyjamas['DOM']['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	pyjamas['DOM']['mash_name_for_glib'].__bind_type__ = 0;
	pyjamas['DOM']['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', String('-')]];
	pyjamas['DOM']['removeAttribute'] = function(element, attribute) {

		pyjamas.DOM.elem['removeAttribute'](attribute);
		return null;
	};
	pyjamas['DOM']['removeAttribute'].__name__ = 'removeAttribute';

	pyjamas['DOM']['removeAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	pyjamas['DOM']['setAttribute'] = function(element, attribute, value) {

		pyjslib['setattr'](element, attribute, value);
		return null;
	};
	pyjamas['DOM']['setAttribute'].__name__ = 'setAttribute';

	pyjamas['DOM']['setAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	pyjamas['DOM']['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	pyjamas['DOM']['setElemAttribute'].__name__ = 'setElemAttribute';

	pyjamas['DOM']['setElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	pyjamas['DOM']['setBooleanAttribute'] = function(elem, attr, value) {
		var mf;
		mf = pyjamas.DOM.get_main_frame();
		pyjslib['setattr'](elem, mf['mash_attrib'](attr), value);
		return null;
	};
	pyjamas['DOM']['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	pyjamas['DOM']['setBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setCapture'] = function(elem) {

		pyjamas['DOM']['sCaptureElem'] = elem;
		return null;
	};
	pyjamas['DOM']['setCapture'].__name__ = 'setCapture';

	pyjamas['DOM']['setCapture'].__bind_type__ = 0;
	pyjamas['DOM']['setCapture'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['setEventListener'] = function(element, listener) {

		pyjamas['DOM']['set_listener'](element, listener);
		return null;
	};
	pyjamas['DOM']['setEventListener'].__name__ = 'setEventListener';

	pyjamas['DOM']['setEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['setEventListener'].__args__ = [null,null,['element'],['listener']];
	pyjamas['DOM']['setInnerHTML'] = function(element, html) {
		var $pyjs_try_err,err;
		try {
			element.innerHtml = html;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 819};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 822;
				err = $pyjs_try_err;
				element.innerHTML = html;
			}
		}
		return null;
	};
	pyjamas['DOM']['setInnerHTML'].__name__ = 'setInnerHTML';

	pyjamas['DOM']['setInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	pyjamas['DOM']['setInnerText'] = function(elem, text) {
		var $attr234,$attr231,$attr232,$attr233,$or11,$or10;
		while (pyjslib['bool'](((($attr231=elem['firstChild']) !== null & ($attr232=elem).__is_instance__) && typeof $attr231 == 'function'?
					pyjslib['getattr']($attr232, 'firstChild'):
					elem['firstChild']))) {
			elem['removeChild'](((($attr233=elem['firstChild']) !== null & ($attr234=elem).__is_instance__) && typeof $attr233 == 'function'?
						pyjslib['getattr']($attr234, 'firstChild'):
						elem['firstChild']));
		}
		elem['appendChild']($doc['createTextNode']((pyjslib['bool']($or10=text)?$or10:String(''))));
		return null;
	};
	pyjamas['DOM']['setInnerText'].__name__ = 'setInnerText';

	pyjamas['DOM']['setInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerText'].__args__ = [null,null,['elem'],['text']];
	pyjamas['DOM']['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, pyjslib['str'](value));
		return null;
	};
	pyjamas['DOM']['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	pyjamas['DOM']['setIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setIntAttribute'] = function(elem, attr, value) {

		pyjslib['setattr'](elem, attr, pyjslib['float_int'](value));
		return null;
	};
	pyjamas['DOM']['setIntAttribute'].__name__ = 'setIntAttribute';

	pyjamas['DOM']['setIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setIntStyleAttribute'] = function(elem, attr, value) {
		var $attr235,$attr236,mf;
		mf = pyjamas.DOM.get_main_frame();
		if (pyjslib['bool'](pyjslib['hasattr'](((($attr235=elem['style']) !== null & ($attr236=elem).__is_instance__) && typeof $attr235 == 'function'?
					pyjslib['getattr']($attr236, 'style'):
					elem['style']), String('setProperty')))) {
			elem['style']['setProperty'](mf['mash_attrib'](attr), pyjslib['str'](value), String(''));
		}
		else {
			elem['style']['setAttribute'](mf['mash_attrib'](attr), pyjslib['str'](value), String(''));
		}
		return null;
	};
	pyjamas['DOM']['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	pyjamas['DOM']['setIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	pyjamas['DOM']['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.textContent = text;
		return null;
	};
	pyjamas['DOM']['setOptionText'].__name__ = 'setOptionText';

	pyjamas['DOM']['setOptionText'].__bind_type__ = 0;
	pyjamas['DOM']['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	pyjamas['DOM']['setStyleAttribute'] = function(element, name, value) {
		var $attr237,$attr238;
		if (pyjslib['bool'](pyjslib['hasattr'](((($attr237=element['style']) !== null & ($attr238=element).__is_instance__) && typeof $attr237 == 'function'?
					pyjslib['getattr']($attr238, 'style'):
					element['style']), String('setProperty')))) {
			element['style']['setProperty'](pyjamas['DOM']['mash_name_for_glib'](name), value, String(''));
		}
		else {
			element['style']['setAttribute'](name, value, String(''));
		}
		return null;
	};
	pyjamas['DOM']['setStyleAttribute'].__name__ = 'setStyleAttribute';

	pyjamas['DOM']['setStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
	pyjamas['DOM']['sinkEvents'] = function(element, bits) {
		var mask,mf,cb;
		mask = (pyjamas['DOM']['getEventsSunk'](element))^(bits);
		pyjamas['DOM']['eventbitsmap'].__setitem__(element, bits);
		if (pyjslib['bool'](!pyjslib['bool'](mask))) {
			return null;
		}
		bits = mask;
		if (pyjslib['bool'](!pyjslib['bool'](bits))) {
			return null;
		}
		cb = pyjamas['DOM']['_dispatchEvent'];
		mf = pyjamas.DOM.get_main_frame();
		if (pyjslib['bool']((bits)&(1))) {
			mf['addEventListener'](element, String('click'), cb);
		}
		if (pyjslib['bool']((bits)&(2))) {
			mf['addEventListener'](element, String('dblclick'), cb);
		}
		if (pyjslib['bool']((bits)&(4))) {
			mf['addEventListener'](element, String('mousedown'), cb);
		}
		if (pyjslib['bool']((bits)&(8))) {
			mf['addEventListener'](element, String('mouseup'), cb);
		}
		if (pyjslib['bool']((bits)&(16))) {
			mf['addEventListener'](element, String('mouseover'), cb);
		}
		if (pyjslib['bool']((bits)&(32))) {
			mf['addEventListener'](element, String('mouseout'), cb);
		}
		if (pyjslib['bool']((bits)&(64))) {
			mf['addEventListener'](element, String('mousemove'), cb);
		}
		if (pyjslib['bool']((bits)&(128))) {
			mf['addEventListener'](element, String('keydown'), cb);
		}
		if (pyjslib['bool']((bits)&(256))) {
			mf['addEventListener'](element, String('keypress'), cb);
		}
		if (pyjslib['bool']((bits)&(512))) {
			mf['addEventListener'](element, String('keyup'), cb);
		}
		if (pyjslib['bool']((bits)&(1024))) {
			mf['addEventListener'](element, String('change'), cb);
		}
		if (pyjslib['bool']((bits)&(2048))) {
			mf['addEventListener'](element, String('focus'), cb);
		}
		if (pyjslib['bool']((bits)&(4096))) {
			mf['addEventListener'](element, String('blur'), cb);
		}
		if (pyjslib['bool']((bits)&(8192))) {
			mf['addEventListener'](element, String('losecapture'), cb);
		}
		if (pyjslib['bool']((bits)&(16384))) {
			mf['addEventListener'](element, String('scroll'), cb);
		}
		if (pyjslib['bool']((bits)&(32768))) {
			mf['addEventListener'](element, String('load'), cb);
		}
		if (pyjslib['bool']((bits)&(65536))) {
			mf['addEventListener'](element, String('error'), cb);
		}
		if (pyjslib['bool']((bits)&(131072))) {
			mf['addEventListener'](element, String('contextmenu'), cb);
		}
		return null;
	};
	pyjamas['DOM']['sinkEvents'].__name__ = 'sinkEvents';

	pyjamas['DOM']['sinkEvents'].__bind_type__ = 0;
	pyjamas['DOM']['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	pyjamas['DOM']['toString'] = function(elem) {
		var outer,tempDiv,temp;
		temp = elem['cloneNode'](true);
		tempDiv = pyjamas['DOM']['createDiv']();
		tempDiv['appendChild'](temp);
		outer = pyjamas['DOM']['getInnerHTML'](tempDiv);
		pyjamas['DOM']['setInnerHTML'](temp, String(''));
		return outer;
	};
	pyjamas['DOM']['toString'].__name__ = 'toString';

	pyjamas['DOM']['toString'].__bind_type__ = 0;
	pyjamas['DOM']['toString'].__args__ = [null,null,['elem']];
	pyjamas['DOM']['dispatchEvent'] = function(event, element, listener) {

		pyjamas.DOM.dispatchEventImpl(event, element, listener);
		return null;
	};
	pyjamas['DOM']['dispatchEvent'].__name__ = 'dispatchEvent';

	pyjamas['DOM']['dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	pyjamas['DOM']['previewEvent'] = function(evt) {
		var $sub26,preview,ret,$sub25;
		ret = true;
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']), 0) == 1))) {
			preview = pyjamas['DOM']['sEventPreviewStack'].__getitem__((typeof ($sub25=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']))==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				pyjslib['op_sub']($sub25,$sub26)));
			ret = preview['onEventPreview'](evt);
			if (pyjslib['bool'](!pyjslib['bool'](ret))) {
				pyjamas['DOM']['eventCancelBubble'](evt, true);
				pyjamas['DOM']['eventPreventDefault'](evt);
			}
		}
		return ret;
	};
	pyjamas['DOM']['previewEvent'].__name__ = 'previewEvent';

	pyjamas['DOM']['previewEvent'].__bind_type__ = 0;
	pyjamas['DOM']['previewEvent'].__args__ = [null,null,['evt']];
	pyjamas['DOM']['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	pyjamas['DOM']['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	pyjamas['DOM']['dispatchEventAndCatch'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	pyjamas['DOM']['currentEvent'] = null;
	pyjamas['DOM']['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		if (pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']))) {
			if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['DOM']['eventGetType'](event), String('losecapture')))) {
				pyjamas['DOM']['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = pyjamas['DOM']['currentEvent'];
		pyjamas['DOM']['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		pyjamas['DOM']['currentEvent'] = prevCurrentEvent;
		return null;
	};
	pyjamas['DOM']['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	pyjamas['DOM']['dispatchEventImpl'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	pyjamas['DOM']['eventGetCurrentEvent'] = function() {

		return pyjamas['DOM']['currentEvent'];
	};
	pyjamas['DOM']['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	pyjamas['DOM']['eventGetCurrentEvent'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentEvent'].__args__ = [null,null];
	pyjamas['DOM']['insertListItem'] = function(select, item, value, index) {
		var option;
		option = pyjamas['DOM']['createElement'](String('OPTION'));
		pyjamas['DOM']['setInnerText'](option, item);
		if (pyjslib['bool']((value !== null))) {
			pyjamas['DOM']['setAttribute'](option, String('value'), value);
		}
		if (pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))))) {
			pyjamas['DOM']['appendChild'](select, option);
		}
		else {
			pyjamas['DOM']['insertChild'](select, option, index);
		}
		return null;
	};
	pyjamas['DOM']['insertListItem'].__name__ = 'insertListItem';

	pyjamas['DOM']['insertListItem'].__bind_type__ = 0;
	pyjamas['DOM']['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	pyjamas['DOM']['getBodyOffsetTop'] = function() {

		return 0;
	};
	pyjamas['DOM']['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	pyjamas['DOM']['getBodyOffsetTop'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetTop'].__args__ = [null,null];
	pyjamas['DOM']['getBodyOffsetLeft'] = function() {

		return 0;
	};
	pyjamas['DOM']['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	pyjamas['DOM']['getBodyOffsetLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetLeft'].__args__ = [null,null];
	if (pyjslib['bool'](pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr239=pyjamas['DOM']['sys']['platform']) !== null & ($attr240=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr239 == 'function'?
				pyjslib['getattr']($attr240, 'platform'):
				pyjamas['DOM']['sys']['platform'])))) {
		pyjamas['DOM']['init']();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['sys', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed']
*/
