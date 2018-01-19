(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("admin-ui", [], factory);
	else if(typeof exports === 'object')
		exports["admin-ui"] = factory();
	else
		root["admin-ui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Wz8r");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+MZ2":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "+SdG":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("a/OS")('keys');
var uid = __webpack_require__("GmwO");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "+VX5":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("W6Rd");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "30vf":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("Wdy1");
var core = __webpack_require__("iANj");
var fails = __webpack_require__("zyKz");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "3fMt":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("SWGL");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "8ANE":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9MbE":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("8ANE");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "AP3u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepClone */
/* unused harmony export isEmptyString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return namespace; });
/* unused harmony export upload */
/* unused harmony export getDataType */
/* unused harmony export rgbToHex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);



function deepClone(obj) {
  if (!(obj instanceof Array || obj instanceof Object)) throw new Error('can only deepCopy Array or Object');
  return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(obj));
}

function isEmptyString(str) {
  return str === '' || /^\s+$/g.test(str);
}

if (!window.adminUiNameSpace) window.adminUiNameSpace = {};
var namespace = {
  set: function set(key, value) {
    window.adminUiNameSpace[key] = value;
    return window.adminUiNameSpace[key];
  },
  get: function get(key) {
    return window.adminUiNameSpace[key];
  },
  remove: function remove(key) {
    return delete window.adminUiNameSpace[key];
  }
};

function getError(action, option, xhr) {
  var msg = void 0;
  if (xhr.response) {
    msg = xhr.status + ' ' + (xhr.response.error || xhr.response);
  } else if (xhr.responseText) {
    msg = xhr.status + ' ' + xhr.responseText;
  } else {
    msg = 'fail to post ' + action + ' ' + xhr.status;
  }

  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  // copy from element
  // ### option
  // * option.action // submit url
  // * option.data // submit data
  // * option.withCredentials // indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies or authorization headers
  // * option.headers // change or set headers

  // ### file
  // * option.file
  // * option.filename

  // ### events
  // * option.onProgress(e)
  // * option.onError(e)
  // * option.onSuccess()

  if (typeof window.XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new window.XMLHttpRequest();
  var action = option.action;

  if (xhr.upload) {
    if (option.onProgress) {
      xhr.upload.onprogress = function progress(e) {
        if (e.total > 0) {
          e.percent = e.loaded / e.total * 100;
        }
        option.onProgress(e, option.index);
      };
    }
  }

  var formData = new window.FormData();

  if (option.data) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    if (option.onError) option.onError(e, option.index);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError ? option.onError(getError(action, option, xhr), option.index) : false;
    }
    if (option.onSuccess) option.onSuccess(getBody(xhr), option.index);
  };

  xhr.open(option.method || 'post', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  for (var item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }
  xhr.send(formData);
  return xhr;
}
function getDataType(o) {
  // Author: yuhaijun
  // email: yuhaijun@rongcapital.cn
  // get data type
  var regStr = /[^, ]+/g;
  var type = {};
  'Boolean Number String Function Array Date RegExp Object Error'.replace(regStr, function (name) {
    type['[object ' + name + ']'] = name.toLowerCase();
  });
  return type[Object.prototype.toString.call(o)];
}

function rgbToHex(color) {
  var rgb = color.split(',');
  var r = parseInt(rgb[0].split('(')[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(')')[0]);
  var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

/***/ }),

/***/ "B5V0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "DEMT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "\n    au-button\n    au-theme-radius",
      class: _vm.buttonClasses,
      style: {
        cursor: _vm.loading ? "wait" : ""
      },
      attrs: { type: _vm.nativeType, disabled: _vm.disabled || _vm.loading },
      on: { click: _vm.handleClick }
    },
    [
      _c("span", {
        staticClass: "before-mask au-theme-background-color--base-12"
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("span", {
        staticClass: "after-mask au-theme-background-color--base-12",
        class: { "au-theme-border-color--base-12": _vm.plain }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass:
            "au-button-loading-mask au-theme-before-background-color--base-12",
          class: { "au-theme-border-color--base-12": _vm.plain }
        },
        [
          _c(
            "svg",
            {
              ref: "svg",
              staticClass: "au-button-loading-svg",
              style: {
                animation:
                  "1.33333s linear 0s normal none infinite running Rotate",
                top: _vm.loadingSvgTop
              },
              attrs: {
                viewBox: "0 0 50 50",
                width: _vm.loadingSize,
                height: _vm.loadingSize
              }
            },
            [
              _c("circle", {
                ref: "core",
                staticStyle: {
                  "transform-origin": "center center 0px",
                  animation:
                    "1s ease 0s normal none infinite running CircularBarDash"
                },
                attrs: {
                  fill: "none",
                  stroke: _vm.stroke,
                  "stroke-width": "5",
                  "stroke-linecap": "round",
                  cx: "25",
                  cy: "25",
                  r: "20"
                }
              })
            ]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-11ea00fa", esExports)
  }
}

/***/ }),

/***/ "DvwR":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("x//u");
var toIObject = __webpack_require__("ksFB");
var arrayIndexOf = __webpack_require__("PbQV")(false);
var IE_PROTO = __webpack_require__("+SdG")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "FKWp":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8ANE");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "GCs6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("FKWp");
var IE8_DOM_DEFINE = __webpack_require__("LocR");
var toPrimitive = __webpack_require__("9MbE");
var dP = Object.defineProperty;

exports.f = __webpack_require__("qs+f") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "GhAV":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("W6Rd");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "GmwO":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "LocR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("qs+f") && !__webpack_require__("zyKz")(function () {
  return Object.defineProperty(__webpack_require__("PY1i")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "NZra":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "PY1i":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("8ANE");
var document = __webpack_require__("YjQv").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "PbQV":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("ksFB");
var toLength = __webpack_require__("GhAV");
var toAbsoluteIndex = __webpack_require__("+VX5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "SWGL":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "W6Rd":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "Wdy1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("YjQv");
var core = __webpack_require__("iANj");
var ctx = __webpack_require__("3fMt");
var hide = __webpack_require__("aLzV");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Wz8r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_button__ = __webpack_require__("Yd9X");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_button__["a"]; });


/***/ }),

/***/ "XAIM":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "YTz9":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Yd9X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_button_vue__ = __webpack_require__("wXBs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_11ea00fa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_button_vue__ = __webpack_require__("DEMT");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("l8xr")
}
var normalizeComponent = __webpack_require__("XAIM")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_11ea00fa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\admin-ui\\src\\components\\button\\src\\button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11ea00fa", Component.options)
  } else {
    hotAPI.reload("data-v-11ea00fa", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YjQv":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "Zbun":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("iANj");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "ZhOs":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("rZAI");
module.exports = __webpack_require__("iANj").Object.keys;


/***/ }),

/***/ "a/OS":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("YjQv");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "aLzV":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("GCs6");
var createDesc = __webpack_require__("YTz9");
module.exports = __webpack_require__("qs+f") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "fZjL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("ZhOs"), __esModule: true };

/***/ }),

/***/ "iANj":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "ksFB":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("wiaE");
var defined = __webpack_require__("+MZ2");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "l8xr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Zbun"), __esModule: true };

/***/ }),

/***/ "pEGt":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("DvwR");
var enumBugKeys = __webpack_require__("B5V0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "qs+f":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zyKz")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "rZAI":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("wXdB");
var $keys = __webpack_require__("pEGt");

__webpack_require__("30vf")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "wXBs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utils__ = __webpack_require__("AP3u");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-button',
  mounted: function mounted() {
    this.insertLoadingSvgStyle();
    this.setPos();
  },
  data: function data() {
    return {
      loadingSize: 12,
      loadingSvgTop: '0px'
    };
  },

  props: {
    type: String,
    size: {
      type: String,
      default: 'normal'
    },
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    nativeType: String // button,submit,reset
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.setPos);
    }
  },
  computed: {
    isDefault: function isDefault() {
      return ['success', 'danger', 'warning', 'info', 'primary'].indexOf(this.type) === -1;
    },
    buttonClasses: function buttonClasses() {
      var res = [];
      if (this.plain) {
        if (this.isDefault) {
          res = ['plain', 'au-theme-background-color--base-12', 'au-theme-border-color--base-8', 'au-theme-hover-border-color--primary-4', 'au-theme-active-border-color--primary-2-important', 'au-theme-font-color--base-3', 'au-theme-hover-font-color--primary-4', 'au-theme-active-font-color--primary-2-important'];
        } else {
          res = ['plain', 'au-theme-background-color--base-12', 'au-theme-border-color--base-8', !this.disabled ? 'au-theme-hover-border-color--' + this.type + '-4' : '', !this.disabled ? 'au-theme-active-border-color--' + this.type + '-2-important' : '', 'au-theme-font-color--base-3', !this.disabled ? 'au-theme-hover-font-color--' + this.type + '-4' : '', !this.disabled ? 'au-theme-active-font-color--' + this.type + '-2-important' : ''];
        }
      } else {
        if (this.isDefault) {
          res = ['au-theme-background-color--base-5', 'au-theme-font-color--base-12'];
        } else {
          res = ['au-theme-background-color--' + this.type + '-3', 'au-theme-font-color--base-12'];
        }
      }

      res.push('au-size-' + this.size + (this.plain ? '-bordered' : ''));

      return res.join(' ');
    },
    stroke: function stroke() {
      return __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["a" /* namespace */].get('theme').colors[this.type + '-3'] || __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["a" /* namespace */].get('theme').colors['primary-3'];
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    insertLoadingSvgStyle: function insertLoadingSvgStyle() {
      var style = document.createElement('style');
      style.innerHTML = '\n        /* &lt;![CDATA[ */\n          @keyframes Rotate { 100% { transform: rotate(360deg); } }\n\n          @keyframes CircularBarDash {\n            0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n          }\n          50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35;\n          }\n          100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124;\n          }\n          }\n        /* ]]&gt; */\n      ';

      var styles = this.$refs.svg.querySelectorAll('style');
      for (var i = 0; i < styles.length; i++) {
        styles[i].parentNode.removeChild(styles[i]);
      }
      this.$refs.svg.insertBefore(style, this.$refs.core);
    },
    setPos: function setPos() {
      if (this.loading) {
        switch (this.size) {
          case 'mini':
            // 20
            this.loadingSize = '16px';
            this.loadingSvgTop = '1px';
            break;
          case 'small':
            // 26
            this.loadingSize = '18px';
            this.loadingSvgTop = '3px';
            break;
          case 'normal':
            // 32
            this.loadingSize = '20px';
            this.loadingSvgTop = '5px';
            break;
          case 'large':
            // 38
            this.loadingSize = '22px';
            this.loadingSvgTop = '7px';
            break;
        }
      }
    }
  }
});

/***/ }),

/***/ "wXdB":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("+MZ2");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "wiaE":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("NZra");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "x//u":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "zyKz":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ })

/******/ });
});