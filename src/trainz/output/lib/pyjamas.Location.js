/* start module: pyjamas.Location */
$pyjs.loaded_modules['pyjamas.Location'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Location'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Location'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Location'] = $pyjs.loaded_modules["pyjamas.Location"];
	pyjamas['Location'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Location';
	var __name__ = pyjamas['Location'].__name__ = __mod_name__;
	var Location = pyjamas['Location'];


	pyjamas['Location']['makeUrlDict'] = function(urlstring) {
		var pairs,$iter1_nextval,$iter1_type,$iter1_iter,dict,$iter1_array,pair,kv,$iter1_idx;
		dict = pyjslib['dict']([]);
		pairs = urlstring['$$split'](String('\x26'));
		$iter1_iter = pairs;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			pair = $iter1_nextval;
			if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](pair), 3) == -1))) {
				continue;
			}
			kv = pair['$$split'](String('='), 1);
			dict.__setitem__(kv.__getitem__(0), kv.__getitem__(1));
		}
		return dict;
	};
	pyjamas['Location']['makeUrlDict'].__name__ = 'makeUrlDict';

	pyjamas['Location']['makeUrlDict'].__bind_type__ = 0;
	pyjamas['Location']['makeUrlDict'].__args__ = [null,null,['urlstring']];
	pyjamas['Location']['makeUrlStringFromDict'] = function(d) {
		var pairs,$iter2_nextval,$iter2_type,$iter2_iter,k,$add2,$add3,$iter2_idx,$add1,$add4,v,$iter2_array;
		pairs = pyjslib['list']([]);
		$iter2_iter = d['iteritems']();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			k = $iter2_nextval.__array[0];
			v = $iter2_nextval.__array[1];
			pairs['append']((typeof ($add3=(typeof ($add1=k)==typeof ($add2=String('=')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)))==typeof ($add4=v) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4)));
		}
		return String('\x26')['join'](pairs);
	};
	pyjamas['Location']['makeUrlStringFromDict'].__name__ = 'makeUrlStringFromDict';

	pyjamas['Location']['makeUrlStringFromDict'].__bind_type__ = 0;
	pyjamas['Location']['makeUrlStringFromDict'].__args__ = [null,null,['d']];
	pyjamas['Location']['Location'] = (function(){
		var $cls_instance = $pyjs__class_instance('Location');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '53eb2a1a92971cbdcac3c5632c41eaa8';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self.location = location;
			self.searchDict = null;
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHash', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['location']['hash']) !== null & ($attr2=self['location']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'hash'):
						self['location']['hash']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHash'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHashDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$or1,$or2,$attr5,$attr4,$attr7,$attr6,$attr3;
			if (pyjslib['bool']((pyjslib['bool']($or1=!pyjslib['bool'](((($attr3=self['hashDict']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'hashDict'):
						self['hashDict'])))?$or1:!pyjslib['op_eq'](((($attr5=self['hashDictHash']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'hashDictHash'):
						self['hashDictHash']), self['getHash']())))) {
				self.hashDictHash = self['getHash']();
				self.hashDict = pyjamas['Location']['makeUrlDict'](pyjslib['slice'](self['getHash'](), 1, null));
			}
			return ((($attr7=self['hashDict']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'hashDict'):
						self['hashDict']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHashDict'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHost', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return ((($attr9=self['location']['host']) !== null & ($attr10=self['location']).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'host'):
						self['location']['host']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHost'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHostname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return ((($attr11=self['location']['hostname']) !== null & ($attr12=self['location']).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'hostname'):
						self['location']['hostname']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHostname'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return ((($attr13=self['location']['href']) !== null & ($attr14=self['location']).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'href'):
						self['location']['href']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHref'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPageHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16,href;
			href = ((($attr15=self['location']['href']) !== null & ($attr16=self['location']).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'href'):
						self['location']['href']);
			if (pyjslib['bool'](href['find'](String('?')))) {
				href = href['$$split'](String('?')).__getitem__(0);
			}
			if (pyjslib['bool'](href['find'](String('#')))) {
				href = href['$$split'](String('#')).__getitem__(0);
			}
			return href;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPageHref'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPathname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return ((($attr17=self['location']['pathname']) !== null & ($attr18=self['location']).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'pathname'):
						self['location']['pathname']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPathname'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPort', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return ((($attr19=self['location']['port']) !== null & ($attr20=self['location']).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'port'):
						self['location']['port']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPort'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getProtocol', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return ((($attr21=self['location']['protocol']) !== null & ($attr22=self['location']).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'protocol'):
						self['location']['protocol']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getProtocol'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSearch', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$attr23,$attr24,$add5;
			return (typeof ($add5=String(''))==typeof ($add6=((($attr23=self['location']['search']) !== null & ($attr24=self['location']).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'search'):
						self['location']['search'])) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearch'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSearchDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var search,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29;
			if (pyjslib['bool'](pyjslib['isinstance'](((($attr25=self['location']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'location'):
						self['location']), pyjslib['str']))) {
				return pyjslib['dict']([]);
			}
			if (pyjslib['bool'](!pyjslib['bool'](((($attr27=self['searchDict']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'searchDict'):
						self['searchDict'])))) {
				self.searchDict = pyjslib['dict']([]);
				search = pyjslib['slice'](self['getSearch'](), 1, null);
				self.searchDict = pyjamas['Location']['makeUrlDict'](search);
			}
			return ((($attr29=self['searchDict']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'searchDict'):
						self['searchDict']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearchDict'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSearchVar', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var searchDict;
			searchDict = self['getSearchDict']();
			return searchDict['get'](key);
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['getSearchVar'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'reload', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['location']['reload']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHref', function(href) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				href = arguments[1];
			}

			self['location'].href = href;
			return null;
		}
	, 1, [null,null,['self'],['href']]);
		$cls_definition['setHref'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSearch', function(search) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				search = arguments[1];
			}

			self['location'].search = search;
			return null;
		}
	, 1, [null,null,['self'],['search']]);
		$cls_definition['setSearch'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSearchDict', function(searchDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				searchDict = arguments[1];
			}

			self['setSearch'](pyjamas['Location']['makeUrlStringFromDict'](searchDict));
			return null;
		}
	, 1, [null,null,['self'],['searchDict']]);
		$cls_definition['setSearchDict'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHash', function(hash) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hash = arguments[1];
			}

			self['location'].hash = hash;
			return null;
		}
	, 1, [null,null,['self'],['hash']]);
		$cls_definition['setHash'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHashDict', function(hashDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hashDict = arguments[1];
			}

			self['setHash'](pyjamas['Location']['makeUrlStringFromDict'](hashDict));
			return null;
		}
	, 1, [null,null,['self'],['hashDict']]);
		$cls_definition['setHashDict'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.Location */


/* end module: pyjamas.Location */


