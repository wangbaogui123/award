webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(10),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/mac-fx/wbg/award/app/views/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-938ca9a4", Component.options)
  } else {
    hotAPI.reload("data-v-938ca9a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */

module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VueSwipe = e() : t.VueSwipe = e();
}(undefined, function () {
  return function (t) {
    function e(i) {
      if (n[i]) return n[i].exports;var s = n[i] = { exports: {}, id: i, loaded: !1 };return t[i].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports;
    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : { "default": t };
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.SwipeItem = e.Swipe = void 0;var s = n(7),
        a = i(s),
        r = n(6),
        o = i(r);e.Swipe = a["default"], e.SwipeItem = o["default"];
  }, function (t, e) {
    "use strict";

    Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = { name: "mt-swipe-item", mounted: function mounted() {
        this.$parent && this.$parent.swipeItemCreated(this);
      }, destroyed: function destroyed() {
        this.$parent && this.$parent.swipeItemDestroyed(this);
      } };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(4),
        s = n(3);e["default"] = { name: "mt-swipe", created: function created() {
        this.dragState = {};
      }, data: function data() {
        return { ready: !1, dragging: !1, userScrolling: !1, animating: !1, index: 0, pages: [], timer: null, reInitTimer: null, noDrag: !1 };
      }, props: { speed: { type: Number, "default": 300 }, auto: { type: Number, "default": 3e3 }, continuous: { type: Boolean, "default": !0 }, showIndicators: { type: Boolean, "default": !0 }, noDragWhenSingle: { type: Boolean, "default": !0 }, prevent: { type: Boolean, "default": !1 } }, methods: { swipeItemCreated: function swipeItemCreated() {
          var t = this;this.ready && (clearTimeout(this.reInitTimer), this.reInitTimer = setTimeout(function () {
            t.reInitPages();
          }, 100));
        }, swipeItemDestroyed: function swipeItemDestroyed() {
          var t = this;this.ready && (clearTimeout(this.reInitTimer), this.reInitTimer = setTimeout(function () {
            t.reInitPages();
          }, 100));
        }, translate: function translate(t, e, n, s) {
          var a = this,
              r = arguments;if (n) {
            this.animating = !0, t.style.webkitTransition = "-webkit-transform " + n + "ms ease-in-out", setTimeout(function () {
              t.style.webkitTransform = "translate3d(" + e + "px, 0, 0)";
            }, 50);var o = !1,
                l = function l() {
              o || (o = !0, a.animating = !1, t.style.webkitTransition = "", t.style.webkitTransform = "", s && s.apply(a, r));
            };(0, i.once)(t, "webkitTransitionEnd", l), setTimeout(l, n + 100);
          } else t.style.webkitTransition = "", t.style.webkitTransform = "translate3d(" + e + "px, 0, 0)";
        }, reInitPages: function reInitPages() {
          var t = this.$children;this.noDrag = 1 === t.length && this.noDragWhenSingle;var e = [];this.index = 0, t.forEach(function (t, n) {
            e.push(t.$el), (0, s.removeClass)(t.$el, "is-active"), 0 === n && (0, s.addClass)(t.$el, "is-active");
          }), this.pages = e;
        }, doAnimate: function doAnimate(t, e) {
          var n = this;if (0 !== this.$children.length && (e || !(this.$children.length < 2))) {
            var i,
                a,
                r,
                o,
                l,
                u = this.speed || 300,
                c = this.index,
                d = this.pages,
                h = d.length;e ? (i = e.prevPage, r = e.currentPage, a = e.nextPage, o = e.pageWidth, l = e.offsetLeft) : (o = this.$el.clientWidth, r = d[c], i = d[c - 1], a = d[c + 1], this.continuous && d.length > 1 && (i || (i = d[d.length - 1]), a || (a = d[0])), i && (i.style.display = "block", this.translate(i, -o)), a && (a.style.display = "block", this.translate(a, o)));var f,
                p = this.$children[c].$el;"prev" === t ? (c > 0 && (f = c - 1), this.continuous && 0 === c && (f = h - 1)) : "next" === t && (h - 1 > c && (f = c + 1), this.continuous && c === h - 1 && (f = 0));var g = function g() {
              if (void 0 !== f) {
                var t = n.$children[f].$el;(0, s.removeClass)(p, "is-active"), (0, s.addClass)(t, "is-active"), n.index = f;
              }i && (i.style.display = ""), a && (a.style.display = "");
            };setTimeout(function () {
              "next" === t ? (n.translate(r, -o, u, g), a && n.translate(a, 0, u)) : "prev" === t ? (n.translate(r, o, u, g), i && n.translate(i, 0, u)) : (n.translate(r, 0, u, g), "undefined" != typeof l ? (i && l > 0 && n.translate(i, -1 * o, u), a && 0 > l && n.translate(a, o, u)) : (i && n.translate(i, -1 * o, u), a && n.translate(a, o, u)));
            }, 10);
          }
        }, next: function next() {
          this.doAnimate("next");
        }, prev: function prev() {
          this.doAnimate("prev");
        }, doOnTouchStart: function doOnTouchStart(t) {
          if (!this.noDrag) {
            var e = this.$el,
                n = this.dragState,
                i = t.touches[0];n.startTime = new Date(), n.startLeft = i.pageX, n.startTop = i.pageY, n.startTopAbsolute = i.clientY, n.pageWidth = e.offsetWidth, n.pageHeight = e.offsetHeight;var s = this.$children[this.index - 1],
                a = this.$children[this.index],
                r = this.$children[this.index + 1];this.continuous && this.pages.length > 1 && (s || (s = this.$children[this.$children.length - 1]), r || (r = this.$children[0])), n.prevPage = s ? s.$el : null, n.dragPage = a ? a.$el : null, n.nextPage = r ? r.$el : null, n.prevPage && (n.prevPage.style.display = "block"), n.nextPage && (n.nextPage.style.display = "block");
          }
        }, doOnTouchMove: function doOnTouchMove(t) {
          if (!this.noDrag) {
            var e = this.dragState,
                n = t.touches[0];e.currentLeft = n.pageX, e.currentTop = n.pageY, e.currentTopAbsolute = n.clientY;var i = e.currentLeft - e.startLeft,
                s = e.currentTopAbsolute - e.startTopAbsolute,
                a = Math.abs(i),
                r = Math.abs(s);if (5 > a || a >= 5 && r >= 1.73 * a) return void (this.userScrolling = !0);this.userScrolling = !1, t.preventDefault(), i = Math.min(Math.max(-e.pageWidth + 1, i), e.pageWidth - 1);var o = 0 > i ? "next" : "prev";e.prevPage && "prev" === o && this.translate(e.prevPage, i - e.pageWidth), this.translate(e.dragPage, i), e.nextPage && "next" === o && this.translate(e.nextPage, i + e.pageWidth);
          }
        }, doOnTouchEnd: function doOnTouchEnd() {
          if (!this.noDrag) {
            var t = this.dragState,
                e = new Date() - t.startTime,
                n = null,
                i = t.currentLeft - t.startLeft,
                s = t.currentTop - t.startTop,
                a = t.pageWidth,
                r = this.index,
                o = this.pages.length;if (300 > e) {
              var l = Math.abs(i) < 5 && Math.abs(s) < 5;(isNaN(i) || isNaN(s)) && (l = !0), l && this.$children[this.index].$emit("tap");
            }300 > e && void 0 === t.currentLeft || ((300 > e || Math.abs(i) > a / 2) && (n = 0 > i ? "next" : "prev"), this.continuous || (0 === r && "prev" === n || r === o - 1 && "next" === n) && (n = null), this.$children.length < 2 && (n = null), this.doAnimate(n, { offsetLeft: i, pageWidth: t.pageWidth, prevPage: t.prevPage, currentPage: t.dragPage, nextPage: t.nextPage }), this.dragState = {});
          }
        } }, destroyed: function destroyed() {
        this.timer && (clearInterval(this.timer), this.timer = null), this.reInitTimer && (clearTimeout(this.reInitTimer), this.reInitTimer = null);
      }, mounted: function mounted() {
        var t = this;this.ready = !0, this.auto > 0 && (this.timer = setInterval(function () {
          t.dragging || t.animating || t.next();
        }, this.auto)), this.reInitPages();var e = this.$el;e.addEventListener("touchstart", function (e) {
          t.prevent && e.preventDefault(), t.animating || (t.dragging = !0, t.userScrolling = !1, t.doOnTouchStart(e));
        }), e.addEventListener("touchmove", function (e) {
          t.dragging && t.doOnTouchMove(e);
        }), e.addEventListener("touchend", function (e) {
          return t.userScrolling ? (t.dragging = !1, void (t.dragState = {})) : void (t.dragging && (t.doOnTouchEnd(e), t.dragging = !1));
        });
      } };
  }, function (t, e) {
    "use strict";

    var n = function n(t) {
      return (t || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
    },
        i = function i(t, e) {
      if (!t || !e) return !1;if (-1 != e.indexOf(" ")) throw new Error("className should not contain space.");return t.classList ? t.classList.contains(e) : (" " + t.className + " ").indexOf(" " + e + " ") > -1;
    },
        s = function s(t, e) {
      if (t) {
        for (var n = t.className, s = (e || "").split(" "), a = 0, r = s.length; r > a; a++) {
          var o = s[a];o && (t.classList ? t.classList.add(o) : i(t, o) || (n += " " + o));
        }t.classList || (t.className = n);
      }
    },
        a = function a(t, e) {
      if (t && e) {
        for (var s = e.split(" "), a = " " + t.className + " ", r = 0, o = s.length; o > r; r++) {
          var l = s[r];l && (t.classList ? t.classList.remove(l) : i(t, l) && (a = a.replace(" " + l + " ", " ")));
        }t.classList || (t.className = n(a));
      }
    };t.exports = { hasClass: i, addClass: s, removeClass: a };
  }, function (t, e) {
    "use strict";

    var n = function () {
      return document.addEventListener ? function (t, e, n) {
        t && e && n && t.addEventListener(e, n, !1);
      } : function (t, e, n) {
        t && e && n && t.attachEvent("on" + e, n);
      };
    }(),
        i = function () {
      return document.removeEventListener ? function (t, e, n) {
        t && e && t.removeEventListener(e, n, !1);
      } : function (t, e, n) {
        t && e && t.detachEvent("on" + e, n);
      };
    }(),
        s = function s(t, e, _s) {
      var a = function r() {
        _s && _s.apply(this, arguments), i(t, e, r);
      };n(t, e, a);
    };t.exports = { on: n, off: i, once: s };
  }, function (t, e) {}, function (t, e, n) {
    var i, s;i = n(1);var a = n(8);s = i = i || {}, "object" != _typeof(i["default"]) && "function" != typeof i["default"] || (s = i = i["default"]), "function" == typeof s && (s = s.options), s.render = a.render, s.staticRenderFns = a.staticRenderFns, t.exports = i;
  }, function (t, e, n) {
    var i, s;n(5), i = n(2);var a = n(9);s = i = i || {}, "object" != _typeof(i["default"]) && "function" != typeof i["default"] || (s = i = i["default"]), "function" == typeof s && (s = s.options), s.render = a.render, s.staticRenderFns = a.staticRenderFns, t.exports = i;
  }, function (t, e) {
    t.exports = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "mint-swipe-item" }, [t._t("default")], 2);
      }, staticRenderFns: [] };
  }, function (t, e) {
    t.exports = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "mint-swipe" }, [n("div", { ref: "wrap", staticClass: "mint-swipe-items-wrap" }, [t._t("default")], 2), t._v(" "), n("div", { directives: [{ name: "show", rawName: "v-show", value: t.showIndicators, expression: "showIndicators" }], staticClass: "mint-swipe-indicators" }, t._l(t.pages, function (e, i) {
          return n("div", { staticClass: "mint-swipe-indicator", "class": { "is-active": i === t.index } });
        }))]);
      }, staticRenderFns: [] };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueSwipe = __webpack_require__(5);

Vue.component('swipe', _vueSwipe.Swipe); //
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


Vue.component('swipe-item', _vueSwipe.SwipeItem);

var homeData = {

    itemArr: [],
    bannerList: [],
    topshow: false

};

exports.default = {
    name: "app",
    data: function data() {
        return homeData;
    },
    created: function created() {
        var _this = this;
        var $this = this.$parent;

        $this.com_Ajax({
            method: 'get',
            url: './app/data/list.json'
        }, function (data) {

            _this.bannerList = data.data.banner;
        }, function (data) {

            console.log(data);
        });
    }

};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.home{\n    padding-top: 3rem;\n}\n.animate-box2 {\n    position: relative;\n    width: 20rem;\n    height: 15rem;\n    margin: 0 auto;\n    transform-style: preserve-3d;\n    -webkit-transform: rotateX(-20deg) rotateY(0deg);\n    transform: rotateX(-20deg) rotateY(0deg);\n    -webkit-perspective-origin: 50% 50%;\n    perspective-origin: 50% 50%;\n    -webkit-perspective: 10rem;\n    perspective: 20rem;\n}\n.animate-box2 div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8rem;\n    height: 8rem;\n    opacity: .9;\n    background-size: 100% auto;\n    transition: all 1s ease-in-out;\n    will-change:transform;\n    -webkit-transform-origin: 10rem 10rem 0;\n    transform-origin: 10rem 10rem 0;\n    border: 5px solid darksalmon;\n}\n.list-box{\n    width: 100%;\n    height: auto;\n}\n.list-box ul{\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n    padding: 2rem 0;\n}\n.list-box ul li{\n    width: 98%;\n    margin: 0 auto;\n    height: 7rem;\n    box-shadow: 1px 3px 5px #ccc;\n    border-radius: 8px;\n    background: #fcfcfc;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('my-top', {
    attrs: {
      "top-show": _vm.topshow
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "animate-box2",
    attrs: {
      "id": "movebox"
    }
  }, _vm._l((_vm.itemArr), function(item) {
    return _c('div', {
      directives: [{
        name: "move",
        rawName: "v-move",
        value: (item),
        expression: "item"
      }],
      key: item.$inex
    })
  })), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('my-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-box"
  }, [_c('ul', [_c('li')])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-938ca9a4", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("0f2e976e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-938ca9a4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-938ca9a4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(4)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })
]);