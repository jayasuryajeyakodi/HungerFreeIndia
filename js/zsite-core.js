function _getVendorPropertyName(e) {
  var t,
    n,
    i = ["Moz", "Webkit", "O", "ms"],
    r = document.createElement("div"),
    a = e.charAt(0).toUpperCase() + e.substr(1);
  if (e in r.style) return e;
  for (n = 0; n < i.length; ++n) if ((t = i[n] + a) in r.style) return t;
  this.div = null;
}
function _css(e, t) {
  for (prop in t)
    t.hasOwnProperty(prop) && (e.style[_getVendorPropertyName(prop)] = t[prop]);
}
function _toVacuum(e) {}
function _merge(e) {
  for (var t in defaults) e.hasOwnProperty(t) || (e[t] = defaults[t]);
}
function menuVisibilityHandler(e) {
  var t = $D.get("[data-zp-theme-menu] > ul");
  t && 0 !== e.length && (hideMenus(t, e), removePermissionDeniedMenus(t));
}
function hideMenus(e, t) {
  for (var n = e.childElementCount, i = 0; i < n; i++)
    hideMenu(e.children[i], t);
}
function hideMenu(e, t) {
  "1" == t[INDEXFORDATA] &&
    e.childElementCount > 0 &&
    e.children[0].setAttribute("class", "remove"),
    (INDEXFORDATA += 1),
    e.childElementCount > 1 && hideMenus(e.children[1], t);
}
function removePermissionDeniedMenus(e, t) {
  for (var n = 0, i = e.childElementCount, r = 0; r < i; r++)
    n = removePermissionDeniedMenu(e.children[r - n], t, n);
}
function removePermissionDeniedMenu(e, t, n) {
  if (
    (e.childElementCount > 1 && removePermissionDeniedMenus(e.children[1], t),
    e.childElementCount > 0 && "remove" == e.children[0].getAttribute("class"))
  ) {
    1 === e.parentElement.childElementCount
      ? ((spanResponsive = $D.get(
          ".theme-responsive-menu",
          e.parentElement.previousSibling
        )),
        (spanNonResponsive = $D.get(
          ".theme-non-responsive-menu",
          e.parentElement.previousSibling
        )),
        $D.remove(e.parentElement),
        spanResponsive &&
          spanNonResponsive &&
          ($D.remove(spanResponsive), $D.remove(spanNonResponsive)))
      : $D.remove(e),
      n++;
    var i = $D.get("[data-zp-more-menu]");
    null !== i && 1 === i.childElementCount && $D.remove(i);
  }
  return n;
}
function getCookie(e) {
  for (
    var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0;
    i < n.length;
    i++
  ) {
    for (var r = n[i]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
  }
  return "";
}
function startSliders(e) {
  var t = [];
  $D.getAll("[data-zs-slider]", document.body).forEach(function (n) {
    t.push(e.init(n));
  }),
    console.log(t),
    (window.heroInstances = t);
}
function initNewSlider(e) {
  heroInstances.push(zsSlider.init(e));
}
function initiateSliders() {
  startSliders(window.zsSlider),
    window.removeEventListener("DOMContentLoaded", initiateSliders);
}
function _cs(e, t) {
  return window.getComputedStyle(e)[t];
}
function round(e) {
  return e;
}
function toNum(e) {
  return parseFloat(e.replace("px", ""));
}
function toVw(e) {
  return (100 / document.documentElement.clientWidth) * e + "vw";
}
function _hasClass(e, t) {
  return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className);
}
function refreshZSSlider(e, t) {
  zsSlider.reInitSlider(e, t);
}
function _get(e, t) {
  return t || (t = doc), t.querySelector(e);
}
function _getAll(e, t) {
  return t || (t = doc), t.querySelectorAll(e);
}
function _getByClass(e, t) {
  return t || (t = doc), t.getElementsByClassName(e);
}
function _hasClass(e, t) {
  return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className);
}
function _addClass(e, t) {
  _hasClass(e, t) || (e.className += " " + t);
}
function _removeClass(e, t) {
  var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
  n.test(e.className) && (e.className = e.className.replace(n, " "));
}
function _attr(e, t, n) {
  return void 0 === n ? e.getAttribute(t) : e.setAttribute(t, n);
}
function _bind(e, t, n) {
  e.addEventListener(t, n, !1),
    listeners.push({ element: e, type: t, listener: n });
}
function _unbind(e, t, n) {
  e && e.removeEventListener(t, n, !1);
  for (var i = listeners.length - 1; i >= 0; i--)
    if (
      listeners[i].element === e &&
      listeners[i].type === t &&
      listeners[i].listener === n
    ) {
      listeners.splice(i, 1);
      break;
    }
}
function _purge(e) {
  for (var t = listeners.length - 1; t >= 0; t--)
    ((listeners[t].element.nodeType && e.contains(listeners[t].element)) ||
      e === listeners[t].element) &&
      _unbind(listeners[t].element, listeners[t].type, listeners[t].listener);
}
function _hasOwn(e, t) {
  return e.hasOwnProperty(t);
}
function getRandomArbitrary(e, t) {
  return Math.random() * (t - e) + e;
}
function getRandomInt(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function _getCSS(e, t) {
  return window.getComputedStyle(e)[t];
}
function _scrollX(e) {
  return (e = e || window).pageXOffset || e.document.documentElement.scrollLeft;
}
function _scrollY(e) {
  return (e = e || window).pageYOffset || e.document.documentElement.scrollTop;
}
function _getOffset(e, t) {
  var n = !1;
  if (!e) throw new Error("Element to _find offset doesnot exists.");
  t = t || window;
  var i = e.getBoundingClientRect();
  return {
    top: "true" === n ? i.top : i.top + _scrollY(t),
    left: "true" === n ? i.left : i.left + _scrollX(t),
    width: i.width,
    height: i.height,
  };
}
function _box(e) {
  return e.getBoundingClientRect();
}
function start() {
  layout(), lightbox.init(), set_dimension();
}
function set_dimension(e, t) {
  function n() {
    for (
      var e = $D.getAll('[data-element-type="gallery"]'), t = 0;
      t < e.length;
      t++
    )
      $E.dispatch(e[t], "element:resized");
  }
  function i(t) {
    (e || document)
      .querySelectorAll("div.hb-grid-gallery[data-layout-type='" + t + "']")
      .forEach(function (e) {
        e &&
          e.nextElementSibling &&
          (e.nextElementSibling.innerHTML = i18n.get(
            "gallery.common.loadingGallery"
          ));
      });
  }
  function r(n) {
    (e || document)
      .querySelectorAll("div.hb-grid-gallery[data-layout-type='" + n + "']")
      .forEach(function (e) {
        e &&
          e.nextElementSibling &&
          (e.nextElementSibling.style.display = "none");
      }),
      e && t && t();
  }
  i("square"), i("row");
  var a = (e || document).querySelectorAll('[data-layout-type="square"] img'),
    o = a.length;
  a.forEach(function (e, t) {
    var i = new Image();
    !(function (e, t, i) {
      t.onload = function () {
        var i = t.height,
          a = t.width;
        i === a || i > a
          ? ((e.style.maxWidth = "100%"), (e.style.height = "auto"))
          : ((e.style.maxHeight = "100%"), (e.style.width = "auto")),
          0 == --o && (r("square"), n());
      };
    })(e, i),
      (i.src = e.src);
  }),
    grid_animate.bindAnimation("square_gallery");
  var s = [],
    l = (a = (e || document).querySelectorAll('[data-layout-type="row"] img'))
      .length;
  a.forEach(function (e, t) {
    var i = new Image();
    !(function (e, t, i) {
      (t.onload = function () {
        var e = t.height,
          o = t.width;
        (s[i] = { width: o, height: e }),
          0 == --l &&
            (r("row"),
            (function (e) {
              a.forEach(function (t, n) {
                var i = e[n],
                  r = (200 * i.width) / i.height,
                  a = document.createElement("i"),
                  o = t.parentElement.parentElement.parentElement;
                (a.style.paddingBottom = (i.height / i.width) * 100 + "%"),
                  (o.style.width = r + "px"),
                  (o.style.flexGrow = r),
                  t.parentElement.insertBefore(a, t);
              });
            })(s),
            n(),
            grid_animate.bindAnimation("row_gallery"));
      }),
        (t.onerror = function () {
          0 == --l &&
            (r("row"), n(), grid_animate.bindAnimation("row_gallery"));
        });
    })(0, i, t),
      (i.src = e.src);
  });
}
var i18n = {};
i18n.get = function () {
  var e = Array.prototype.slice.call(arguments);
  if (0 === e.length) return "";
  var t = langObj[e[0]];
  return t
    ? (e.splice(0, 1),
      e.splice(0, 0, t),
      hbMessageFormat.format.apply(hbMessageFormat.format, e))
    : "";
};
var cms_i18n = i18n.get,
  hbMessageFormat = (function () {
    "use strict";
    function e(e) {
      (this.index = 0),
        (this.tokens = e),
        (this.nodes = []),
        (this.openString = !1),
        (this.openCode = !1),
        (this.isSubformat = !1);
    }
    function t(e, t) {
      (this.input = t),
        (this.str = []),
        (this.nodes = e),
        (this.formatters = {});
    }
    (e.prototype.codeOpen = function (e, t, n) {
      e[n - 1];
      this.openString
        ? this.nodes.push({ data: "{" })
        : this.openCode
        ? (this.isSubformat = !0)
        : (this.openCode = !0);
    }),
      (e.prototype.codeClose = function (e, t, n) {
        "'" === e[n - 1].char || this.openString
          ? this.nodes.push({ data: "}" })
          : (this.openCode &&
              (this.isSubformat
                ? (this.isSubformat = !1)
                : (this.openCode = !1)),
            (this.openString = !1));
      }),
      (e.prototype.string = function (e, t, n) {
        e[n - 1];
        var i = e[n + 1];
        this.openString
          ? i && "'" === i.char
            ? (this.index++,
              this.nodes.push({ data: "'" }),
              (this.openString = !1))
            : (this.openString = !1)
          : i && "'" === i.char
          ? (this.index++, this.nodes.push({ data: "'" }))
          : (this.openString = !0);
      }),
      (e.prototype.data = function (e, t, n) {
        var i;
        this.openCode
          ? ((i = { code: t.data }),
            this.isSubformat && (i.sub = !0),
            this.nodes.push(i))
          : this.nodes.push({ data: t.data });
      });
    var n = t.prototype;
    (n.add = function (e, t) {
      this.formatters[e] = t;
    }),
      (n.getFormatter = function (e, n) {
        for (var r, a, o, s, l = []; ; ) {
          if (e.sub) {
            for (
              s = [];
              s.push(e),
                (e.sub = !1),
                void 0 !== (e = this.nodes[++this.index]) &&
                  e.hasOwnProperty("sub") &&
                  !0 === e.sub;

            );
            (o = new t(s, this.input)), l.push({ code: o.get() });
          }
          if (
            (l.push(e),
            void 0 === (e = this.nodes[++this.index]) ||
              !e.hasOwnProperty("code"))
          ) {
            --this.index;
            break;
          }
        }
        if (0 === l.length) return !1;
        if (/^[\d]+$/.test(l[0].code)) r = i.placeholder;
        else {
          if (!(a = l[0].code.match(/^\s*[\d]+\s*,\s*([\w]+).*$/))) return !1;
          r = i[a[1]];
        }
        var u = l
          .map(function (e) {
            return e.code;
          })
          .join("");
        return { method: r.method, currNodes: u };
      }),
      (n.get = function () {
        return this.walk(), this.str.join("");
      }),
      (n.walk = function () {
        var e,
          t,
          n = this.nodes;
        this.index = 0;
        for (var i = n.length; this.index < i; ) {
          if ((e = n[this.index]).hasOwnProperty("code")) {
            if (!(t = this.getFormatter(e, this.index))) return this.input;
            this.str.push(t.method(t.currNodes, this.input));
          } else this.str.push(e.data);
          this.index++;
        }
      });
    var i = {
      placeholder: {
        method: function (e, t) {
          return t[e];
        },
      },
      choice: {
        method: function (e, t) {
          var n,
            i,
            r,
            a = /^(-?\d*(?:\.\d+)?)([#<>=]{1})([\s\S]+?)$/,
            o = e.match(/^\s*([\d]+)\s*,\s*([\w]+)\s*,\s*([\s\S]*?)$/),
            s = o[3];
          s = s.split("|");
          for (var l, u = o[1], d = 0, c = s.length; d < c; d++)
            switch (
              ((n = s[d]),
              (i = n.match(a)),
              (r = i[2]),
              (l = i[1]),
              isNaN(Number(l)) || (l = Number(l)),
              r)
            ) {
              case "#":
                if (Number(t[u]) === l) return i[3];
                break;
              case "<":
                if (l < Number(t[u]))
                  return i[3].replace("{0,number,integer}", t[u]);
                break;
              case ">":
                if (l > Number(t[u]))
                  return i[3].replace("{0,number,integer}", t[u]);
            }
        },
      },
      time: {
        method: function (e, t) {
          return "time" === e.match(/(\d+)\s*,\s*(time|date)\s*,?\s*[\w]*/)[2]
            ? t[1].getHours() + ":" + t[1].getMinutes()
            : t[1].getDate() +
                "/" +
                t[1].getMonth() +
                "1/" +
                t[1].getFullYear();
        },
      },
      date: {
        method: function (e, t) {
          return "time" === e.match(this.test)[2]
            ? t[1].getHours() + ":" + t[1].getMinutes()
            : t[1].getDate() +
                "/" +
                t[1].getMonth() +
                "1/" +
                t[1].getFullYear();
        },
      },
      number: {
        method: function (e, t) {
          return t[e.match(/([\d]+)/)[1]];
        },
      },
    };
    return (function () {
      function n(e, t) {
        r[e] = t;
      }
      var r = {};
      return (
        n("choice", i.choice),
        n("placeholder", i.placeholder),
        n("dateTime", i.dateTime),
        {
          formatters: r,
          add: n,
          format: function (n) {
            var i = (function (t) {
                for (var n, i = new e(t), r = t.length; i.index < r; )
                  (n = t[i.index]).hasOwnProperty("type")
                    ? i[n.type](t, n, i.index)
                    : i.data(t, n, i.index),
                    i.index++;
                return i.nodes;
              })(
                (function (e) {
                  function t(e) {
                    for (var t = 0, n = l.length; t < n; t++)
                      if (e === l[t].char) return l[t];
                    return !1;
                  }
                  for (
                    var n,
                      i,
                      r,
                      a = 0,
                      o = e.length,
                      s = [],
                      l = [
                        { type: "codeOpen", char: "{" },
                        { type: "codeClose", char: "}" },
                        { type: "string", char: "'" },
                      ],
                      u = l.map(function (e) {
                        return e.char;
                      });
                    e[a];

                  ) {
                    if (((i = ""), (n = e[a]), (r = t(n))))
                      s.push({ char: n, type: r.type });
                    else {
                      for (
                        n && (i = n);
                        -1 === u.indexOf(e[a + 1]) && a + 1 < o;

                      )
                        i += e[++a];
                      s.push({ data: i });
                    }
                    a++;
                  }
                  return s;
                })(n)
              ),
              r = Array.prototype.slice.call(arguments);
            return new t(i, (r = r.splice(1))).get();
          },
        }
      );
    })();
  })();
"undefined" != typeof module && (module.exports = hbMessageFormat),
  (function () {
    "use strict";
    var t,
      n =
        "undefined" != typeof window &&
        "[object Object]" !== Object.prototype.toString.call(window),
      i = n && navigator.userAgent.indexOf("MSIE") > -1,
      r = n ? document : null,
      a = n ? window : global,
      o = Object.prototype.toString;
    n && ((t = r.body), (o = Object.prototype.toString));
    var s = {};
    s.core = {};
    var l = /^[a-z-_]$/i;
    if (
      ((s.is = {
        array: function (e) {
          return "[object Array]" === o.call(e);
        },
        date: function (e) {
          return "[object Date]" === o.call(e);
        },
        function: function (e) {
          return "[object Function]" === o.call(e);
        },
        regex: function (e) {
          return "[object RegExp]" === o.call(e);
        },
        object: function (e) {
          return "[object Object]" === o.call(e);
        },
        url: function (e) {
          return /^https?:\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/.test(
            e
          );
        },
      }),
      (s.dom = {
        isNode: function (e) {
          return "object" == typeof Node
            ? e instanceof Node
            : e &&
                "object" == typeof e &&
                "number" == typeof e.nodeType &&
                "string" == typeof e.nodeName;
        },
        selector: function (e, t) {
          var n = e[0];
          return -1 !== e.indexOf(" ") || -1 !== e.indexOf(":")
            ? this.getAll(e, t)
            : "#" === n && 0 === e.lastIndexOf("#")
            ? this.getById(e.substr(1), t)
            : "." === n && 0 === e.lastIndexOf(".")
            ? this.getByClass(e.substr(1), t)
            : l.test(e)
            ? this.getByTag(e, t)
            : this.getAll(e, t);
        },
        get: function (e, t) {
          return t || (t = r), t.querySelector(e);
        },
        getAll: function (e, t) {
          return t || (t = r), t.querySelectorAll(e);
        },
        getByClass: function (e, t) {
          return t || (t = r), t.getElementsByClassName(e);
        },
        getByTag: function (e, t) {
          return t || (t = r), t.getElementsByTagName(e);
        },
        getById: function (e, t) {
          return t || (t = r), t.getElementById(e);
        },
        getByDataId: function (e, t) {
          return t || (t = r), t.querySelector('[data-element-id="' + e + '"]');
        },
        getClasses: function (e) {
          var t = e.className.match(/[\w-]+/g),
            n = [];
          if (null === t) return [];
          for (var i = t.length - 1; i >= 0; i--) n.push(t[i]);
          return n;
        },
        hasClass: function (e, t) {
          return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className);
        },
        addClass: function (e, t) {
          this.hasClass(e, t) || (e.className += " " + t);
        },
        removeClass: function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          n.test(e.className) && (e.className = e.className.replace(n, " "));
        },
        innerDimension: function (e) {
          return this._getBox(e, "client");
        },
        outerDimension: function (e) {
          return this._getBox(e, "offset");
        },
        scrollDimension: function (e) {
          return this._getBox(e, "scroll");
        },
        offset: function (e) {
          var t = 0,
            n = 0;
          if (e.offsetParent)
            for (t = e.offsetLeft, n = e.offsetTop; (e = e.offsetParent); )
              (t += e.offsetLeft), (n += e.offsetTop);
          return { left: t, top: n };
        },
        css: (function () {
          var e = function (e, t) {
              return t.toUpperCase();
            },
            t = function (t) {
              return t.replace(/\-(\w)/g, e);
            };
          return function (e, n, i) {
            if (void 0 === i && "string" == typeof n)
              return (
                (i = ""),
                r.defaultView && r.defaultView.getComputedStyle
                  ? (i = r.defaultView
                      .getComputedStyle(e, "")
                      .getPropertyValue(n))
                  : e.currentStyle &&
                    ("float" == n && (n = "styleFloat"),
                    (i = e.currentStyle[t(n)])),
                i
              );
            if ("object" == typeof n)
              for (var a in n) {
                var o = n[a];
                "float" == a &&
                  (a = e.currentStyle ? "styleFloat" : "cssFloat"),
                  (e.style[t(a)] = o);
              }
            else
              "float" == n && (n = e.currentStyle ? "styleFloat" : "cssFloat"),
                (e.style[t(n)] = i);
          };
        })(),
        parents: function (e) {
          var t = [];
          for (e = e.parentNode; e; ) t.push(e), (e = e.parentNode);
          return t;
        },
        isAncestor: function (e, t) {
          return (
            !(!s.dom.isNode(e) || !s.dom.isNode(t)) &&
            ("contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition(t) % 16)
          );
        },
        findParent: function (e, t) {
          for (e = e.parentNode; e; ) {
            if (this.hasClass(e, t)) return e;
            e = e.parentNode;
          }
          return !1;
        },
        findParentByTag: function (e, t) {
          for (e = e.parentNode; e; ) {
            if (e.tagName && e.tagName.toUpperCase() === t.toUpperCase())
              return e;
            e = e.parentNode;
          }
          return !1;
        },
        append: function (e, t) {
          e.appendChild(t);
        },
        prepend: function (e, t) {
          e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
        },
        insertAfter: function (e, t) {
          t.parentNode.insertBefore(e, t.nextSibling);
        },
        insertBefore: function (e, t) {
          e.parentNode.insertBefore(t, e);
        },
        remove: function (e) {
          return e.parentNode.removeChild(e);
        },
        text: function (e, t) {
          e.appendChild(e.ownerDocument.createTextNode(t));
        },
        _getBox: function (e, t) {
          var n = { width: e[t + "Width"], height: e[t + "Height"] };
          if (0 === n.width && 0 === n.height) {
            var i,
              r,
              a = this.parents(e),
              o = [];
            for (i = 0, r = a.length; i < r; i++) {
              var s = a[i];
              s.style && "none" == s.style.display && o.push(s);
            }
            o.push(e);
            var l = [];
            for (i = 0, r = o.length; i < r; i++) {
              var u = o[i];
              l.push({ position: u.style.position, display: u.style.display }),
                (u.style.display = "block");
            }
            for (
              n.width = e[t + "Width"],
                n.height = e[t + "Height"],
                i = 0,
                r = o.length;
              i < r;
              i++
            ) {
              (u = o[i]).style.display = l[i].display;
            }
          }
          return n;
        },
        getChildConts: function (e, t) {
          for (
            var n = [].slice.call(this.getAll(e, t)), i = [];
            n.length != i.length;

          ) {
            for (var r = n.pop(), a = !1, o = n.length - 1; o >= 0; o--) {
              var s = n[o];
              if (this.isAncestor(s, r)) {
                a = !0;
                break;
              }
            }
            a || (i.push(r), n.unshift(r));
          }
          return i;
        },
        childrenByCont: function (e, t, n) {
          for (
            var i = this.getChildConts(e, n), r = [], a = 0;
            a < i.length;
            a++
          )
            i[a].childNodes.forEach(function (e) {
              e.matches && e.matches(t) && r.push(e);
            });
          return r;
        },
      }),
      n)
    ) {
      s.event = {
        listeners: [],
        unloadListeners: [],
        domreadyListeners: [],
        bind: function (e, t, n, i) {
          if (e && t && n) {
            var r = {
                element: e,
                type: t,
                etype: t,
                handler: n,
                options: (i = i || {}),
              },
              a = i.scope || e,
              o = i.args;
            r.fn = function (e) {
              n.call(a, e, o);
            };
            var s = t.indexOf(".");
            -1 != s && (r.etype = t = t.substring(s + 1)),
              "unload" === t && this.unloadListener
                ? this.unloadListeners.push(r)
                : (e.addEventListener
                    ? e.addEventListener(t, r.fn, !1)
                    : e.attachEvent && e.attachEvent("on" + t, r.fn),
                  this.listeners.push(r),
                  "unload" === t &&
                    i.scope == this &&
                    (this.unloadListener = r));
          }
        },
        unbind: function (e, t, n) {
          if (e && "string" == typeof t)
            if (n) {
              var i = "unload" === t ? this.unloadListeners : this.listeners,
                r = this._getListenerIndex(i, e, t, n);
              r > -1 && this._removeListener(r, i);
            } else this._removeListeners(e, t);
        },
        purge: function (e) {
          for (var t = this.listeners.length; t--; ) {
            var n = this.listeners[t];
            n &&
              (n.element === e || s.dom.isAncestor(e, n.element)) &&
              this._removeListener(t, this.listeners);
          }
        },
        target: function (e) {
          return this._getHTMLNode(e.target || e.srcElement);
        },
        relatedTarget: function (e) {
          var t = e.relatedTarget;
          return (
            t ||
              ("mouseout" == e.type
                ? (t = e.toElement)
                : "mouseover" == e.type && (t = e.fromElement)),
            this._getHTMLNode(t)
          );
        },
        _getHTMLNode: function (e) {
          for (; e && 3 == e.nodeType; ) e = e.parentNode;
          return e;
        },
        dispatch: function (e, n, i, a) {
          "string" == typeof e && ((a = i), (i = n), (n = e), (e = t));
          var o = (function (e) {
            var t = null;
            return (
              "function" == typeof CustomEvent
                ? (t = new CustomEvent(n, {
                    detail: e,
                    bubbles: !0,
                    capture: !!a,
                  }))
                : (t = r.createEvent("CustomEvent")).initCustomEvent(
                    n,
                    !0,
                    !0,
                    e
                  ),
              t
            );
          })(i);
          e.dispatchEvent(o);
        },
        fireEvent: function (e, t) {
          if (document.createEventObject) {
            var n = document.createEventObject();
            return e.fireEvent("on" + t, n);
          }
          return (
            (n = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
            e.dispatchEvent(n)
          );
        },
        pageOffset: (function () {
          if (r) {
            var e =
              !r.compatMode || "CSS1Compat" == r.compatMode
                ? r.documentElement
                : t;
            return function (t) {
              return t.type.match(/(click|mouse|menu|drag)/i)
                ? {
                    x: t.pageX || t.clientX + e.scrollLeft,
                    y: t.pageY || t.clientY + e.scrollTop,
                  }
                : null;
            };
          }
        })(),
        clientOffset: (function () {
          if (r) {
            (!r.compatMode || "CSS1Compat" == r.compatMode) &&
              r.documentElement;
            return function (e) {
              return e.type.match(/(click|mouse|menu)/i)
                ? {
                    x: e.pageX ? e.pageX - a.pageXOffset : e.clientX,
                    y: e.pageY ? e.pageY - a.pageYOffset : e.clientY,
                  }
                : null;
            };
          }
        })(),
        isRightClick: function (e) {
          return (e.button && 2 == e.button) || (e.which && 3 == e.which);
        },
        mousescroll: function (e) {},
        wheelDelta: function () {
          return type.match(/(dommousescroll|mousewheel)/i)
            ? e.wheelDelta
              ? e.wheelDelta / 120
              : -(e.detail || 0) / 3
            : null;
        },
        isDOMLoaded: function (e) {
          e || (e = r);
          return (i && -1 != navigator.userAgent.indexOf("MSIE 10")
            ? /complete/
            : /interactive|loaded|complete/
          ).test(e.readyState);
        },
        callOnLoad: function (e, t) {
          t || (t = r),
            this.isDOMLoaded(t) ? e() : this.bind(t, "DOMContentLoaded", e);
        },
        checkDOMReady: function () {
          var e,
            t,
            n = function (t) {
              if (!t || ("DOMContentLoaded" != t.type && "load" != t.type)) {
                if (r.readyState)
                  if (/loaded|complete/.test(r.readyState)) i();
                  else if ("function" == typeof r.documentElement.doScroll) {
                    try {
                      e || r.documentElement.doScroll("left");
                    } catch (t) {
                      return;
                    }
                    i();
                  }
              } else i();
            },
            i = function () {
              e ||
                ((e = !0),
                r.removeEventListener &&
                  r.removeEventListener("DOMContentLoaded", n, !1),
                (r.onreadystatechange = null),
                "undefined" !== t && clearInterval(t),
                (t = null),
                s.event._domready());
            };
          r &&
            (r.addEventListener
              ? r.addEventListener("DOMContentLoaded", n, !1)
              : ((r.onreadystatechange = n),
                (a.onload = n),
                (t = setInterval(n, 5))));
        },
        ready: function (e, t) {
          this.domreadyListeners.push(function () {
            e.call(t || d);
          });
        },
        _domready: function () {
          for (var e = 0, t = this.domreadyListeners.length; e < t; e++)
            try {
              this.domreadyListeners[e]();
            } catch (e) {}
        },
        _getListenerIndex: function (e, t, n, i) {
          for (var r = e.length; r--; ) {
            var a = e[r];
            if (a && a.element === t && n === a.type && a.handler === i)
              return r;
          }
          return -1;
        },
        _removeListeners: function (e, t) {
          for (var n = this.listeners.length; n--; ) {
            var i = this.listeners[n];
            i &&
              i.element === e &&
              (("function" == typeof t && i.handler === t) ||
                ("string" == typeof t && t === i.type)) &&
              this._removeListener(n, this.listeners);
          }
        },
        _removeListener: function (e, t) {
          var n = t[e];
          if ((t.splice(e, 1), "unload" != n.etype)) {
            var i = n.element;
            i.removeEventListener
              ? i.removeEventListener(n.etype, n.fn, !1)
              : i.detachEvent && i.detachEvent("on" + n.etype, n.fn);
          }
          (n.fn = null), (n.handler = null), (n = null);
        },
        _unload: function (e) {
          e = e || a.event;
          var t, n;
          for (t = 0, n = this.unloadListeners.length; t < n; t++) {
            var i = this.unloadListeners[t];
            if (i)
              try {
                i.fn(e);
              } catch (e) {}
            (i.fn = null), (i.handler = null);
          }
          for (t = this.listeners.length; t--; )
            this._removeListener(t, this.listeners);
        },
      };
      s.dcAjax = {
        get: function (e) {
          (e.url = u(e.url)), s.ajax.get(e);
        },
        post: function (e) {
          (e.url = u(e.url)), s.ajax.post(e);
        },
      };
      function u(e) {
        return (
          e.startsWith("/dcapp/") || (e = "/dcapp" + e),
          stand_alone_path + "/siteapps" + e
        );
      }
      (s.ajax = {
        error: function (e) {
          s.ajax.errorOptions = e;
        },
        setDynamicHeaderModifier: function (e) {
          s.ajax.dynamicHeaderModifier = e;
        },
        errorTest: null,
        post: function (e) {
          return (e.method = "POST"), this.request(e);
        },
        get: function (e) {
          return (e.method = "GET"), this.request(e);
        },
        put: function (e) {
          return (e.method = "PUT"), this.request(e);
        },
        del: function (e) {
          return (e.method = "DELETE"), this.request(e);
        },
        request: function (e) {
          var t = e.url;
          if (t) {
            var n = e.method || "GET",
              i = e.sync || !1,
              r = e.params || {},
              a = (e.headers = e.headers || {}),
              o = e.dynamicHeaderModifier || s.ajax.dynamicHeaderModifier;
            0 != e.dynamicHeaderModifier && o && o(e);
            var l = e.handler,
              u = e.error,
              d = e.errorHandler,
              c = u && u.condition,
              h = e.args,
              p = this.listener,
              f = this._getTransport();
            i ||
              (f.onreadystatechange = function () {
                if (4 == f.readyState) {
                  var e = !0;
                  if ((p && (e = p.call(f)), e && l))
                    try {
                      !(function (e, t) {
                        var n = s.ajax.errorOptions;
                        return (
                          t || (t = n && n.condition && n.condition),
                          !(!t || !t.call(e))
                        );
                      })(f, c)
                        ? l.call(f, h)
                        : d
                        ? d.call(f, h)
                        : s.ajax.errorOptions && s.ajax.errorOptions.handler
                        ? s.ajax.errorOptions.handler.call(f, h)
                        : l.call(f, h);
                    } catch (e) {}
                  f = null;
                }
              });
            var m;
            if ("object" == typeof r) {
              var g = [];
              for (var v in r)
                g.push(encodeURIComponent(v) + "=" + encodeURIComponent(r[v]));
              g.length > 0 && (m = g.join("&"));
            } else "string" == typeof r && (m = r);
            "GET" === n && m && (t += (t.indexOf("?") + 1 ? "&" : "?") + m),
              f.open(n, t, !i);
            for (var y in a) f.setRequestHeader(y, a[y]);
            return (
              "GET" !== n &&
                (e.bodyJSON
                  ? (f.setRequestHeader(
                      "Content-Type",
                      "application/json;charset=UTF-8"
                    ),
                    (m = JSON.stringify(e.bodyJSON)))
                  : f.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    )),
              e.credential && (f.withCredentials = !0),
              f.send(m),
              i ? f : void 0
            );
          }
        },
        _getTransport: function () {
          if (a.XMLHttpRequest) return new XMLHttpRequest();
          if (a.ActiveXObject)
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
              try {
                return new ActiveXObject("Msxml2.XMLHTTP");
              } catch (e) {
                throw new Exception("Browser not supported");
              }
            }
        },
      }),
        s.event.bind(a, "unload", s.event._unload, { scope: s.event }),
        s.event.checkDOMReady(),
        (s.CX = (function (e, t) {
          function n(e) {
            return "String" === a(e) ? e : JSON.stringify(e);
          }
          function i(e) {
            var t = null;
            try {
              t = JSON.parse(e);
            } catch (t) {
              return e;
            }
            return t;
          }
          function r(e) {
            var t = a(e);
            if ("HTMLIFrameElement" === t) return e.contentWindow;
            if ("global" === t || "Window" === t || "Object" === t) return e;
            throw new Error("Provide a valid target !!");
          }
          function a(e) {
            return Object.prototype.toString
              .call(e)
              .match(/^\[object (\w+)\]$/)[1];
          }
          function o(t) {
            (this.ctx = t.ctx || e),
              (this.origin = t.targetOrigin),
              (this.target = t.target),
              (this.winHandler = t.winHandler),
              (this.handlers = {}),
              (this.targetReady = -1 !== s.indexOf(t.targetOrigin)),
              (this.queuedMsgs = []),
              this.initialise(),
              l.push(this);
          }
          var s = [],
            l = [];
          return (
            e.addEventListener("load", function n() {
              var i = t.getElementsByTagName("iframe");
              parent &&
                parent !== e &&
                parent.postMessage("CX_load__" + this.location.origin, "*");
              for (var r = i.length - 1; r >= 0; r--)
                i[r].contentWindow.postMessage(
                  "CX_load__" + this.location.origin,
                  "*"
                );
              t.removeEventListener("DOMContentLoaded", n);
            }),
            e.addEventListener("message", function (e) {
              if (o.defaultHandlers) {
                var t = i(e.data);
                if ($IS.object(t)) {
                  if (!o.defaultHandlers[t.requestId]) return;
                  if (!o.defaultHandlers[t.requestId].handler) return;
                  !(function (e, t) {
                    var n;
                    return !(
                      !(n =
                        t && t.condition
                          ? t.condition
                          : o.errorOptions && o.errorOptions.condition) ||
                      !n.call(e)
                    );
                  })(t, o.defaultHandlers[t.requestId].error)
                    ? o.defaultHandlers[t.requestId].handler.call(
                        t,
                        o.defaultHandlers[t.requestId].args
                      )
                    : o.defaultHandlers[t.requestId].errorHandler
                    ? o.defaultHandlers[t.requestId].errorHandler.call(
                        t,
                        o.defaultHandlers[t.requestId].args
                      )
                    : o.errorOptions && o.errorOptions.handler
                    ? o.errorOptions.handler.call(
                        t,
                        o.defaultHandlers[t.requestId].args
                      )
                    : $E.dispatch(document, "lib:xhrError", {
                        responseText: t.responseText,
                      });
                } else if (/^CX_load__/.test(e.data)) {
                  s.push(e.origin);
                  for (var n = l.length - 1; n >= 0; n--)
                    l[n].origin === e.origin &&
                      ((l[n].targetReady = !0),
                      l[n].dispatchQueuedMsg(),
                      l.splice(n, 1));
                }
              }
            }),
            (o.prototype._ = {}),
            (o.prototype.initialise = function () {
              this.ctx.addEventListener(
                "message",
                function (e) {
                  var t = null;
                  this.origin === e.origin &&
                    ((t = this._.unserialize(e.data)),
                    this.winHandler && this.winHandler.call(this, e, t.data),
                    "Object" === this._.getType(t) &&
                      t.msgType &&
                      this.handlers[t.msgType] &&
                      this.handlers[t.msgType].forEach(function (n) {
                        n.call(this, e, t.data);
                      }));
                }.bind(this)
              );
            }),
            (o.prototype._.getType = a),
            (o.prototype._.serialize = n),
            (o.prototype._.unserialize = i),
            (o.prototype._.getTargetWindow = function (e) {
              var t = this.getType(e);
              if ("HTMLIFrameElement" === t) return e.contentWindow;
              if ("global" === t) return e;
              throw new Error("Provide a valid target !!");
            }),
            (o.prototype.dispatchQueuedMsg = function () {
              for (var e = 0, t = this.queuedMsgs.length; e < t; e++)
                this.dispatchMessage(
                  this.queuedMsgs[e].msgType,
                  this.queuedMsgs[e].data
                );
              this.queuedMsgs = null;
            }),
            (o.prototype.dispatchMessage = function (e, t) {
              var n = { msgType: e, data: t };
              this.targetReady
                ? this._.getTargetWindow(this.target).postMessage(
                    this._.serialize(n),
                    this.origin
                  )
                : this.queuedMsgs.push(n);
            }),
            (o.prototype.bind = function (e, t) {
              this.handlers[e] || (this.handlers[e] = []),
                this.handlers[e].push(t);
            }),
            (o.prototype.unbind = function (e, t) {
              if (this.handlers[e]) {
                for (var n = this.handlers[e].length - 1; n >= 0; n--)
                  this.handlers[e][n] === t && this.handlers[e].splice(n, 1);
                0 === this.handlers.messageType.length &&
                  delete this.handlers.messageType;
              }
            }),
            (o.initDefaultChannel = function (t, n, r) {
              (o.defaultChannel = {
                target: t,
                targetOrigin: n,
                defaultHandler: r,
              }),
                (o.defaultHandlers = {}),
                e.addEventListener(
                  "message",
                  function (e) {
                    var t = i(e.data);
                    -1 !== o.defaultChannel.targetOrigin.indexOf(e.origin) &&
                      "default-channel" === t.msgType &&
                      o.defaultChannel.defaultHandler({
                        method: t.cxType,
                        data: t.data,
                        requestId: t.requestId,
                      });
                  }.bind(o.defaultChannel)
                );
            }),
            (o.error = function (e) {
              o.errorOptions = e;
            }),
            (o.post = function (e) {
              this.request(e, "post");
            }),
            (o.get = function (e) {
              this.request(e, "get");
            }),
            (o.put = function (e) {
              this.request(e, "put");
            }),
            (o.delete = function (e) {
              this.request(e, "delete");
            }),
            (o.window_open = function (e) {
              this.request(e, "window_open");
            }),
            (o.request = function (e, t) {
              var i = (function () {
                function e() {
                  return Math.floor(65536 * (1 + Math.random()))
                    .toString(16)
                    .substring(1);
                }
                return (
                  e() +
                  e() +
                  "-" +
                  e() +
                  "-" +
                  e() +
                  "-" +
                  e() +
                  "-" +
                  e() +
                  e() +
                  e()
                );
              })();
              o.defaultHandlers[i] = {
                handler: e.handler,
                error: e.error,
                errorHandler: e.error && e.errorHandler,
                args: e.args,
              };
              var a = {
                cxType: t,
                requestId: i,
                msgType: "default-channel",
                data: e,
              };
              r(o.defaultChannel.target).postMessage(
                n(a),
                o.defaultChannel.targetOrigin
              );
            }),
            (o.dispatch = function (e) {
              r(o.defaultChannel.target).postMessage(
                n(e),
                o.defaultChannel.targetOrigin
              );
            }),
            o
          );
        })(a, document)),
        null === a.$ || void 0 === a.$
          ? (a.$ = s.dom.selector.bind(s.dom))
          : (s.dollar = a.$),
        window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = function (e, t) {
            t = t || window;
            for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
          }),
        (s.dom.matches = function (e, t) {
          if (void 0 !== e && 1 === e.nodeType) {
            var n = Element.prototype;
            return (
              n.matches ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector ||
              function (e) {
                return (
                  -1 !==
                  [].slice.call(document.querySelectorAll(e)).indexOf(this)
                );
              }
            ).call(e, t);
          }
        }),
        (s.noConflict = function () {
          a.$ = s.dollar;
        }),
        (s.util = {
          getQueryParams: function (e) {
            var t = e || a.location.search;
            t = decodeURIComponent(t.replace(/\+/g, " "));
            var n = {};
            if (URLSearchParams) {
              new URLSearchParams(t).forEach(function (e, t) {
                n[t] = e;
              });
            } else
              for (
                var i = /([^?=&]+?)=([^&]+)/g;
                null !== (param = i.exec(t));

              )
                n[param[1]] = param[2];
            return n;
          },
        }),
        (a.$U = s.util),
        (a.$D = s.dom),
        (a.$E = s.event),
        (a.$X = s.ajax),
        (a.$CX = s.CX),
        (a.$DX = s.dcAjax),
        (a.$IS = s.is);
    } else (a.$IS = s.is), (a.$D = s.dom);
  })();
var requirejs, require, define;
!(function (ba) {
  function G(e) {
    return "[object Function]" === K.call(e);
  }
  function H(e) {
    return "[object Array]" === K.call(e);
  }
  function v(e, t) {
    if (e) {
      var n;
      for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
    }
  }
  function T(e, t) {
    if (e) {
      var n;
      for (n = e.length - 1; -1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
    }
  }
  function t(e, t) {
    return fa.call(e, t);
  }
  function m(e, n) {
    return t(e, n) && e[n];
  }
  function B(e, n) {
    for (var i in e) if (t(e, i) && n(e[i], i)) break;
  }
  function U(e, n, i, r) {
    return (
      n &&
        B(n, function (n, a) {
          (!i && t(e, a)) ||
            (!r ||
            "object" != typeof n ||
            !n ||
            H(n) ||
            G(n) ||
            n instanceof RegExp
              ? (e[a] = n)
              : (e[a] || (e[a] = {}), U(e[a], n, i, r)));
        }),
      e
    );
  }
  function u(e, t) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function ca(e) {
    throw e;
  }
  function da(e) {
    if (!e) return e;
    var t = ba;
    return (
      v(e.split("."), function (e) {
        t = t[e];
      }),
      t
    );
  }
  function C(e, t, n, i) {
    return (
      (t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e)),
      (t.requireType = e),
      (t.requireModules = i),
      n && (t.originalError = n),
      t
    );
  }
  function ga(e) {
    function n(e, t, n) {
      t = t && t.split("/");
      var i,
        r,
        a,
        o,
        s,
        l,
        u,
        d,
        c = A.map,
        h = c && c["*"];
      if (e) {
        for (
          r = (e = e.split("/")).length - 1,
            A.nodeIdCompat && Q.test(e[r]) && (e[r] = e[r].replace(Q, "")),
            "." === e[0].charAt(0) &&
              t &&
              ((r = t.slice(0, t.length - 1)), (e = r.concat(e))),
            r = e,
            a = 0;
          a < r.length;
          a++
        )
          "." === (o = r[a])
            ? (r.splice(a, 1), (a -= 1))
            : ".." === o &&
              0 !== a &&
              (1 != a || ".." !== r[2]) &&
              ".." !== r[a - 1] &&
              0 < a &&
              (r.splice(a - 1, 2), (a -= 2));
        e = e.join("/");
      }
      if (n && c && (t || h)) {
        a = (r = e.split("/")).length;
        e: for (; 0 < a; a -= 1) {
          if (((s = r.slice(0, a).join("/")), t))
            for (o = t.length; 0 < o; o -= 1)
              if ((n = m(c, t.slice(0, o).join("/"))) && (n = m(n, s))) {
                (i = n), (l = a);
                break e;
              }
          !u && h && m(h, s) && ((u = m(h, s)), (d = a));
        }
        !i && u && ((i = u), (l = d)),
          i && (r.splice(0, l, i), (e = r.join("/")));
      }
      return (i = m(A.pkgs, e)) ? i : e;
    }
    function i(e) {
      z &&
        v(document.getElementsByTagName("script"), function (t) {
          if (
            t.getAttribute("data-requiremodule") === e &&
            t.getAttribute("data-requirecontext") === _.contextName
          )
            return t.parentNode.removeChild(t), !0;
        });
    }
    function r(e) {
      var t = m(A.paths, e);
      if (t && H(t) && 1 < t.length)
        return (
          t.shift(),
          _.require.undef(e),
          _.makeRequire(null, { skipMap: !0 })([e]),
          !0
        );
    }
    function a(e) {
      var t,
        n = e ? e.indexOf("!") : -1;
      return (
        -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
        [t, e]
      );
    }
    function o(e, t, i, r) {
      var o,
        s,
        l = null,
        u = t ? t.name : null,
        d = e,
        c = !0,
        h = "";
      return (
        e || ((c = !1), (e = "_@r" + (F += 1))),
        (e = a(e)),
        (l = e[0]),
        (e = e[1]),
        l && ((l = n(l, u, r)), (s = m(O, l))),
        e &&
          (l
            ? (h =
                s && s.normalize
                  ? s.normalize(e, function (e) {
                      return n(e, u, r);
                    })
                  : -1 === e.indexOf("!")
                  ? n(e, u, r)
                  : e)
            : ((h = n(e, u, r)),
              (e = a(h)),
              (l = e[0]),
              (h = e[1]),
              (i = !0),
              (o = _.nameToUrl(h)))),
        (i = !l || s || i ? "" : "_unnormalized" + (j += 1)),
        {
          prefix: l,
          name: h,
          parentMap: t,
          unnormalized: !!i,
          url: o,
          originalName: d,
          isDefine: c,
          id: (l ? l + "!" + h : h) + i,
        }
      );
    }
    function s(e) {
      var t = e.id,
        n = m(I, t);
      return n || (n = I[t] = new _.Module(e)), n;
    }
    function l(e, n, i) {
      var r = e.id,
        a = m(I, r);
      !t(O, r) || (a && !a.defineEmitComplete)
        ? (a = s(e)).error && "error" === n
          ? i(a.error)
          : a.on(n, i)
        : "defined" === n && i(O[r]);
    }
    function d(e, t) {
      var n = e.requireModules,
        i = !1;
      t
        ? t(e)
        : (v(n, function (t) {
            (t = m(I, t)) &&
              ((t.error = e), t.events.error && ((i = !0), t.emit("error", e)));
          }),
          i || g.onError(e));
    }
    function c() {
      R.length && (ha.apply(L, [L.length, 0].concat(R)), (R = []));
    }
    function h(e) {
      delete I[e], delete k[e];
    }
    function p(e, t, n) {
      var i = e.map.id;
      e.error
        ? e.emit("error", e.error)
        : ((t[i] = !0),
          v(e.depMaps, function (i, r) {
            var a = i.id,
              o = m(I, a);
            o &&
              !e.depMatched[r] &&
              !n[a] &&
              (m(t, a) ? (e.defineDep(r, O[a]), e.check()) : p(o, t, n));
          }),
          (n[i] = !0));
    }
    function f() {
      var e,
        t,
        n = (e = 1e3 * A.waitSeconds) && _.startTime + e < new Date().getTime(),
        a = [],
        o = [],
        s = !1,
        l = !0;
      if (!$) {
        if (
          (($ = !0),
          B(k, function (e) {
            var u = e.map,
              d = u.id;
            if (e.enabled && (u.isDefine || o.push(e), !e.error))
              if (!e.inited && n) r(d) ? (s = t = !0) : (a.push(d), i(d));
              else if (
                !e.inited &&
                e.fetched &&
                u.isDefine &&
                ((s = !0), !u.prefix)
              )
                return (l = !1);
          }),
          n && a.length)
        )
          return (
            (e = C("timeout", "Load timeout for modules: " + a, null, a)),
            (e.contextName = _.contextName),
            d(e)
          );
        l &&
          v(o, function (e) {
            p(e, {}, {});
          }),
          (n && !t) ||
            !s ||
            (!z && !ea) ||
            x ||
            (x = setTimeout(function () {
              (x = 0), f();
            }, 50)),
          ($ = !1);
      }
    }
    function y(e) {
      t(O, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2]);
    }
    function b(e) {
      e = e.currentTarget || e.srcElement;
      var t = _.onScriptLoad;
      return (
        e.detachEvent && !Y
          ? e.detachEvent("onreadystatechange", t)
          : e.removeEventListener("load", t, !1),
        (t = _.onScriptError),
        (!e.detachEvent || Y) && e.removeEventListener("error", t, !1),
        { node: e, id: e && e.getAttribute("data-requiremodule") }
      );
    }
    function w() {
      var e;
      for (c(); L.length; ) {
        if (null === (e = L.shift())[0])
          return d(
            C(
              "mismatch",
              "Mismatched anonymous define() module: " + e[e.length - 1]
            )
          );
        y(e);
      }
    }
    var $,
      E,
      _,
      D,
      x,
      A = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {},
      },
      I = {},
      k = {},
      S = {},
      L = [],
      O = {},
      q = {},
      P = {},
      F = 1,
      j = 1;
    return (
      (D = {
        require: function (e) {
          return e.require ? e.require : (e.require = _.makeRequire(e.map));
        },
        exports: function (e) {
          if (((e.usingExports = !0), e.map.isDefine))
            return e.exports
              ? (O[e.map.id] = e.exports)
              : (e.exports = O[e.map.id] = {});
        },
        module: function (e) {
          return e.module
            ? e.module
            : (e.module = {
                id: e.map.id,
                uri: e.map.url,
                config: function () {
                  return m(A.config, e.map.id) || {};
                },
                exports: e.exports || (e.exports = {}),
              });
        },
      }),
      (E = function (e) {
        (this.events = m(S, e.id) || {}),
          (this.map = e),
          (this.shim = m(A.shim, e.id)),
          (this.depExports = []),
          (this.depMaps = []),
          (this.depMatched = []),
          (this.pluginMaps = {}),
          (this.depCount = 0);
      }),
      (E.prototype = {
        init: function (e, t, n, i) {
          (i = i || {}),
            this.inited ||
              ((this.factory = t),
              n
                ? this.on("error", n)
                : this.events.error &&
                  (n = u(this, function (e) {
                    this.emit("error", e);
                  })),
              (this.depMaps = e && e.slice(0)),
              (this.errback = n),
              (this.inited = !0),
              (this.ignore = i.ignore),
              i.enabled || this.enabled ? this.enable() : this.check());
        },
        defineDep: function (e, t) {
          this.depMatched[e] ||
            ((this.depMatched[e] = !0),
            (this.depCount -= 1),
            (this.depExports[e] = t));
        },
        fetch: function () {
          if (!this.fetched) {
            (this.fetched = !0), (_.startTime = new Date().getTime());
            var e = this.map;
            if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
            _.makeRequire(this.map, { enableBuildCallback: !0 })(
              this.shim.deps || [],
              u(this, function () {
                return e.prefix ? this.callPlugin() : this.load();
              })
            );
          }
        },
        load: function () {
          var e = this.map.url;
          q[e] || ((q[e] = !0), _.load(this.map.id, e));
        },
        check: function () {
          if (this.enabled && !this.enabling) {
            var e,
              t,
              n = this.map.id;
            t = this.depExports;
            var i = this.exports,
              r = this.factory;
            if (this.inited) {
              if (this.error) this.emit("error", this.error);
              else if (!this.defining) {
                if (
                  ((this.defining = !0), 1 > this.depCount && !this.defined)
                ) {
                  if (G(r)) {
                    if (
                      (this.events.error && this.map.isDefine) ||
                      g.onError !== ca
                    )
                      try {
                        i = _.execCb(n, r, t, i);
                      } catch (t) {
                        e = t;
                      }
                    else i = _.execCb(n, r, t, i);
                    if (
                      (this.map.isDefine &&
                        void 0 === i &&
                        ((t = this.module)
                          ? (i = t.exports)
                          : this.usingExports && (i = this.exports)),
                      e)
                    )
                      return (
                        (e.requireMap = this.map),
                        (e.requireModules = this.map.isDefine
                          ? [this.map.id]
                          : null),
                        (e.requireType = this.map.isDefine
                          ? "define"
                          : "require"),
                        d((this.error = e))
                      );
                  } else i = r;
                  (this.exports = i),
                    this.map.isDefine &&
                      !this.ignore &&
                      ((O[n] = i), g.onResourceLoad) &&
                      g.onResourceLoad(_, this.map, this.depMaps),
                    h(n),
                    (this.defined = !0);
                }
                (this.defining = !1),
                  this.defined &&
                    !this.defineEmitted &&
                    ((this.defineEmitted = !0),
                    this.emit("defined", this.exports),
                    (this.defineEmitComplete = !0));
              }
            } else this.fetch();
          }
        },
        callPlugin: function () {
          var e = this.map,
            i = e.id,
            r = o(e.prefix);
          this.depMaps.push(r),
            l(
              r,
              "defined",
              u(this, function (r) {
                var a, c;
                c = m(P, this.map.id);
                var p = this.map.name,
                  f = this.map.parentMap ? this.map.parentMap.name : null,
                  v = _.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                this.map.unnormalized
                  ? (r.normalize &&
                      (p =
                        r.normalize(p, function (e) {
                          return n(e, f, !0);
                        }) || ""),
                    l(
                      (r = o(e.prefix + "!" + p, this.map.parentMap)),
                      "defined",
                      u(this, function (e) {
                        this.init(
                          [],
                          function () {
                            return e;
                          },
                          null,
                          { enabled: !0, ignore: !0 }
                        );
                      })
                    ),
                    (c = m(I, r.id)) &&
                      (this.depMaps.push(r),
                      this.events.error &&
                        c.on(
                          "error",
                          u(this, function (e) {
                            this.emit("error", e);
                          })
                        ),
                      c.enable()))
                  : c
                  ? ((this.map.url = _.nameToUrl(c)), this.load())
                  : ((a = u(this, function (e) {
                      this.init(
                        [],
                        function () {
                          return e;
                        },
                        null,
                        { enabled: !0 }
                      );
                    })),
                    (a.error = u(this, function (e) {
                      (this.inited = !0),
                        (this.error = e),
                        (e.requireModules = [i]),
                        B(I, function (e) {
                          0 === e.map.id.indexOf(i + "_unnormalized") &&
                            h(e.map.id);
                        }),
                        d(e);
                    })),
                    (a.fromText = u(this, function (n, r) {
                      var l = e.name,
                        u = o(l),
                        c = M;
                      r && (n = r),
                        c && (M = !1),
                        s(u),
                        t(A.config, i) && (A.config[l] = A.config[i]);
                      try {
                        g.exec(n);
                      } catch (e) {
                        return d(
                          C(
                            "fromtexteval",
                            "fromText eval for " + i + " failed: " + e,
                            e,
                            [i]
                          )
                        );
                      }
                      c && (M = !0),
                        this.depMaps.push(u),
                        _.completeLoad(l),
                        v([l], a);
                    })),
                    r.load(e.name, v, a, A));
              })
            ),
            _.enable(r, this),
            (this.pluginMaps[r.id] = r);
        },
        enable: function () {
          (k[this.map.id] = this),
            (this.enabling = this.enabled = !0),
            v(
              this.depMaps,
              u(this, function (e, n) {
                var i, r;
                if ("string" == typeof e) {
                  if (
                    ((e = o(
                      e,
                      this.map.isDefine ? this.map : this.map.parentMap,
                      !1,
                      !this.skipMap
                    )),
                    (this.depMaps[n] = e),
                    (i = m(D, e.id)))
                  )
                    return void (this.depExports[n] = i(this));
                  (this.depCount += 1),
                    l(
                      e,
                      "defined",
                      u(this, function (e) {
                        this.defineDep(n, e), this.check();
                      })
                    ),
                    this.errback && l(e, "error", u(this, this.errback));
                }
                (i = e.id),
                  (r = I[i]),
                  !t(D, i) && r && !r.enabled && _.enable(e, this);
              })
            ),
            B(
              this.pluginMaps,
              u(this, function (e) {
                var t = m(I, e.id);
                t && !t.enabled && _.enable(e, this);
              })
            ),
            (this.enabling = !1),
            this.check();
        },
        on: function (e, t) {
          var n = this.events[e];
          n || (n = this.events[e] = []), n.push(t);
        },
        emit: function (e, t) {
          v(this.events[e], function (e) {
            e(t);
          }),
            "error" === e && delete this.events[e];
        },
      }),
      (_ = {
        config: A,
        contextName: e,
        registry: I,
        defined: O,
        urlFetched: q,
        defQueue: L,
        Module: E,
        makeModuleMap: o,
        nextTick: g.nextTick,
        onError: d,
        configure: function (e) {
          e.baseUrl &&
            "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) &&
            (e.baseUrl += "/");
          var t = A.shim,
            n = { paths: !0, bundles: !0, config: !0, map: !0 };
          B(e, function (e, t) {
            n[t] ? (A[t] || (A[t] = {}), U(A[t], e, !0, !0)) : (A[t] = e);
          }),
            e.bundles &&
              B(e.bundles, function (e, t) {
                v(e, function (e) {
                  e !== t && (P[e] = t);
                });
              }),
            e.shim &&
              (B(e.shim, function (e, n) {
                H(e) && (e = { deps: e }),
                  (!e.exports && !e.init) ||
                    e.exportsFn ||
                    (e.exportsFn = _.makeShimExports(e)),
                  (t[n] = e);
              }),
              (A.shim = t)),
            e.packages &&
              v(e.packages, function (e) {
                var t;
                (t = (e = "string" == typeof e ? { name: e } : e).name),
                  e.location && (A.paths[t] = e.location),
                  (A.pkgs[t] =
                    e.name +
                    "/" +
                    (e.main || "main").replace(ia, "").replace(Q, ""));
              }),
            B(I, function (e, t) {
              !e.inited && !e.map.unnormalized && (e.map = o(t));
            }),
            (e.deps || e.callback) && _.require(e.deps || [], e.callback);
        },
        makeShimExports: function (e) {
          return function () {
            var t;
            return (
              e.init && (t = e.init.apply(ba, arguments)),
              t || (e.exports && da(e.exports))
            );
          };
        },
        makeRequire: function (r, a) {
          function l(n, i, u) {
            var c, h;
            return (
              a.enableBuildCallback && i && G(i) && (i.__requireJsBuild = !0),
              "string" == typeof n
                ? G(i)
                  ? d(C("requireargs", "Invalid require call"), u)
                  : r && t(D, n)
                  ? D[n](I[r.id])
                  : g.get
                  ? g.get(_, n, r, l)
                  : ((c = o(n, r, !1, !0)),
                    (c = c.id),
                    t(O, c)
                      ? O[c]
                      : d(
                          C(
                            "notloaded",
                            'Module name "' +
                              c +
                              '" has not been loaded yet for context: ' +
                              e +
                              (r ? "" : ". Use require([])")
                          )
                        ))
                : (w(),
                  _.nextTick(function () {
                    w(),
                      ((h = s(o(null, r))).skipMap = a.skipMap),
                      h.init(n, i, u, { enabled: !0 }),
                      f();
                  }),
                  l)
            );
          }
          return (
            (a = a || {}),
            U(l, {
              isBrowser: z,
              toUrl: function (e) {
                var t,
                  i = e.lastIndexOf("."),
                  a = e.split("/")[0];
                return (
                  -1 !== i &&
                    (("." !== a && ".." !== a) || 1 < i) &&
                    ((t = e.substring(i, e.length)), (e = e.substring(0, i))),
                  _.nameToUrl(n(e, r && r.id, !0), t, !0)
                );
              },
              defined: function (e) {
                return t(O, o(e, r, !1, !0).id);
              },
              specified: function (e) {
                return (e = o(e, r, !1, !0).id), t(O, e) || t(I, e);
              },
            }),
            r ||
              (l.undef = function (e) {
                c();
                var t = o(e, r, !0),
                  n = m(I, e);
                i(e),
                  delete O[e],
                  delete q[t.url],
                  delete S[e],
                  T(L, function (t, n) {
                    t[0] === e && L.splice(n, 1);
                  }),
                  n && (n.events.defined && (S[e] = n.events), h(e));
              }),
            l
          );
        },
        enable: function (e) {
          m(I, e.id) && s(e).enable();
        },
        completeLoad: function (e) {
          var n,
            i,
            a = m(A.shim, e) || {},
            o = a.exports;
          for (c(); L.length; ) {
            if (null === (i = L.shift())[0]) {
              if (((i[0] = e), n)) break;
              n = !0;
            } else i[0] === e && (n = !0);
            y(i);
          }
          if (((i = m(I, e)), !n && !t(O, e) && i && !i.inited)) {
            if (A.enforceDefine && (!o || !da(o)))
              return r(e)
                ? void 0
                : d(C("nodefine", "No define call for " + e, null, [e]));
            y([e, a.deps || [], a.exportsFn]);
          }
          f();
        },
        nameToUrl: function (e, t, n) {
          var i, r, a;
          if (((i = m(A.pkgs, e)) && (e = i), (i = m(P, e))))
            return _.nameToUrl(i, t, n);
          if (g.jsExtRegExp.test(e)) i = e + (t || "");
          else {
            for (i = A.paths, r = (e = e.split("/")).length; 0 < r; r -= 1)
              if (((a = e.slice(0, r).join("/")), (a = m(i, a)))) {
                H(a) && (a = a[0]), e.splice(0, r, a);
                break;
              }
            (i = e.join("/")),
              (i =
                ("/" ===
                  (i += t || (/^data\:|\?/.test(i) || n ? "" : ".js")).charAt(
                    0
                  ) || i.match(/^[\w\+\.\-]+:/)
                  ? ""
                  : A.baseUrl) + i);
          }
          return A.urlArgs
            ? i + (-1 === i.indexOf("?") ? "?" : "&") + A.urlArgs
            : i;
        },
        load: function (e, t) {
          g.load(_, e, t);
        },
        execCb: function (e, t, n, i) {
          return t.apply(i, n);
        },
        onScriptLoad: function (e) {
          ("load" === e.type ||
            ja.test((e.currentTarget || e.srcElement).readyState)) &&
            ((N = null), (e = b(e)), _.completeLoad(e.id));
        },
        onScriptError: function (e) {
          var t = b(e);
          if (!r(t.id))
            return d(C("scripterror", "Script error for: " + t.id, e, [t.id]));
        },
      }),
      (_.require = _.makeRequire()),
      _
    );
  }
  var g,
    x,
    y,
    D,
    I,
    E,
    N,
    J,
    s,
    O,
    ka = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    la = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    Q = /\.js$/,
    ia = /^\.\//;
  x = Object.prototype;
  var K = x.toString,
    fa = x.hasOwnProperty,
    ha = Array.prototype.splice,
    z = !(
      "undefined" == typeof window ||
      "undefined" == typeof navigator ||
      !window.document
    ),
    ea = !z && "undefined" != typeof importScripts,
    ja =
      z && "PLAYSTATION 3" === navigator.platform
        ? /^complete$/
        : /^(complete|loaded)$/,
    Y = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    F = {},
    q = {},
    R = [],
    M = !1;
  if (void 0 === define) {
    if (void 0 !== requirejs) {
      if (G(requirejs)) return;
      (q = requirejs), (requirejs = void 0);
    }
    void 0 !== require && !G(require) && ((q = require), (require = void 0)),
      (g = requirejs = function (e, t, n, i) {
        var r,
          a = "_";
        return (
          !H(e) &&
            "string" != typeof e &&
            ((r = e), H(t) ? ((e = t), (t = n), (n = i)) : (e = [])),
          r && r.context && (a = r.context),
          (i = m(F, a)) || (i = F[a] = g.s.newContext(a)),
          r && i.configure(r),
          i.require(e, t, n)
        );
      }),
      (g.config = function (e) {
        return g(e);
      }),
      (g.nextTick =
        "undefined" != typeof setTimeout
          ? function (e) {
              setTimeout(e, 4);
            }
          : function (e) {
              e();
            }),
      require || (require = g),
      (g.version = "2.1.15"),
      (g.jsExtRegExp = /^\/|:|\?|\.js$/),
      (g.isBrowser = z),
      (x = g.s = { contexts: F, newContext: ga }),
      g({}),
      v(["toUrl", "undef", "defined", "specified"], function (e) {
        g[e] = function () {
          var t = F._;
          return t.require[e].apply(t, arguments);
        };
      }),
      z &&
        ((y = x.head = document.getElementsByTagName("head")[0]),
        (D = document.getElementsByTagName("base")[0])) &&
        (y = x.head = D.parentNode),
      (g.onError = ca),
      (g.createNode = function (e) {
        var t = e.xhtml
          ? document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "html:script"
            )
          : document.createElement("script");
        return (
          (t.type = e.scriptType || "text/javascript"),
          (t.charset = "utf-8"),
          (t.async = !0),
          t
        );
      }),
      (g.load = function (e, t, n) {
        var i = (e && e.config) || {};
        if (z)
          return (
            (i = g.createNode(i, t, n)).setAttribute(
              "data-requirecontext",
              e.contextName
            ),
            i.setAttribute("data-requiremodule", t),
            !i.attachEvent ||
            (i.attachEvent.toString &&
              0 > i.attachEvent.toString().indexOf("[native code")) ||
            Y
              ? (i.addEventListener("load", e.onScriptLoad, !1),
                i.addEventListener("error", e.onScriptError, !1))
              : ((M = !0), i.attachEvent("onreadystatechange", e.onScriptLoad)),
            (i.src = n),
            (J = i),
            D ? y.insertBefore(i, D) : y.appendChild(i),
            (J = null),
            i
          );
        if (ea)
          try {
            importScripts(n), e.completeLoad(t);
          } catch (i) {
            e.onError(
              C(
                "importscripts",
                "importScripts failed for " + t + " at " + n,
                i,
                [t]
              )
            );
          }
      }),
      z &&
        !q.skipDataMain &&
        T(document.getElementsByTagName("script"), function (e) {
          if ((y || (y = e.parentNode), (I = e.getAttribute("data-main"))))
            return (
              (s = I),
              q.baseUrl ||
                ((E = s.split("/")),
                (s = E.pop()),
                (O = E.length ? E.join("/") + "/" : "./"),
                (q.baseUrl = O)),
              (s = s.replace(Q, "")),
              g.jsExtRegExp.test(s) && (s = I),
              (q.deps = q.deps ? q.deps.concat(s) : [s]),
              !0
            );
        }),
      (define = function (e, t, n) {
        var i, r;
        "string" != typeof e && ((n = t), (t = e), (e = null)),
          H(t) || ((n = t), (t = null)),
          !t &&
            G(n) &&
            ((t = []),
            n.length &&
              (n
                .toString()
                .replace(ka, "")
                .replace(la, function (e, n) {
                  t.push(n);
                }),
              (t = (1 === n.length
                ? ["require"]
                : ["require", "exports", "module"]
              ).concat(t)))),
          M &&
            ((i = J) ||
              ((N && "interactive" === N.readyState) ||
                T(document.getElementsByTagName("script"), function (e) {
                  if ("interactive" === e.readyState) return (N = e);
                }),
              (i = N)),
            i &&
              (e || (e = i.getAttribute("data-requiremodule")),
              (r = F[i.getAttribute("data-requirecontext")]))),
          (r ? r.defQueue : R).push([e, t, n]);
      }),
      (define.amd = { jQuery: !0 }),
      (g.exec = function (b) {
        return eval(b);
      }),
      g(q);
  }
})(this);
var zsTools = (function () {
    "use strict";
    function e(e) {
      var n = e.split(":"),
        i = t(n[0]);
      e &&
        i &&
        (this[i] =
          n.length > 2
            ? (function (e) {
                return e.splice(1).join(":").trim();
              })(n)
            : t(n[1]));
    }
    function t(e) {
      return (e && e.trim()) || "";
    }
    function n(e, t, n) {
      function i(e) {
        return d.test(e);
      }
      function r() {
        var e;
        return (
          1 == f.length
            ? (e = h)
            : (g && f.pop(), (e = Array.prototype.concat.apply([], f))),
          e.join("")
        );
      }
      function a(n) {
        return t.p + (n || 0) < e.length;
      }
      var o,
        s,
        c,
        h = [],
        p = h,
        f = [h],
        m = !1,
        g = !1,
        v = !1;
      for (++t.p; a(); t.p++) {
        if (("\\" != c || a(1) || t.p++, (c = e[t.p]) === n)) return r();
        if (v) {
          if (c != n && !i(c)) throw "Character(s) after string consumption";
        } else {
          if (i(c)) {
            if (!o && !m) continue;
            g || ((p = []), f.push(p)), (g = !0);
          } else {
            if (o) {
              if (m && c === s) {
                v = !0;
                continue;
              }
            } else {
              if (!(m || (c !== l && c !== u))) {
                (m = !0), (s = c);
                continue;
              }
              o = c;
            }
            g = !1;
          }
          p.push(c);
        }
      }
      return r();
    }
    function i() {
      var e = window.console;
      e.log.apply(e, arguments);
    }
    function r() {
      (this.map = {}), (this.key = {}), (this.rev = {});
    }
    function a(e) {
      return e.__zsuid || e.__zsUniqueId;
    }
    var o = ";",
      s = ":",
      l = "'",
      u = '"',
      d = /\s/;
    (r.prototype = {
      get length() {
        return Object.keys(this.map).length;
      },
      add: function (e, t) {
        if ("object" != typeof e) throw new TypeError("Only Objects Supported");
        var n = a(e),
          i = t && a(t);
        (this.map[n] = e), t && ((this.key[i] = n), (this.rev[n] = i));
      },
      remove: function (e) {
        if (e) {
          var t = a(e),
            n = this.rev[t];
          delete this.map[t],
            n && (delete this.key[n], delete this.rev[t]),
            this.dispatch && 0 == this.length && this.dispatch();
        }
      },
      get: function (e) {
        var t = this.key[a(e)];
        return t && this.map[t];
      },
      removeByKey: function (e) {
        this.remove(this.get(e));
      },
      has: function (e) {
        return this.map.hasOwnProperty(a(e));
      },
      clear: function () {
        var e = this;
        Object.keys(this.map).forEach(function (t) {
          e.remove(e.map[t]);
        });
      },
      onEmpty: function (e, t) {
        this.dispatch = e.bind(t);
      },
      isEmpty: function () {
        return 0 === this.length;
      },
      forEach: function (e, t) {
        var n = this;
        Object.keys(this.map).forEach(function (i) {
          e.call(t || null, n.map[i]);
        });
      },
    }),
      (function () {
        if (void 0 === Object.prototype.__zsUniqueId) {
          var e = 0;
          Object.defineProperty(Object.prototype, "__zsUniqueId", {
            get: function () {
              return (
                void 0 === this.__zsuid &&
                  Object.defineProperty(this, "__zsuid", { value: ++e }),
                this.__zsuid
              );
            },
          });
        }
      })(),
      window.Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            i = this;
          do {
            for (t = n.length; --t >= 0 && n.item(t) !== i; );
          } while (t < 0 && (i = i.parentElement));
          return i;
        }),
      Element.prototype.isSameNode ||
        (Element.prototype.isSameNode = function (e, t) {
          return $D.isNode(e) && e === t;
        }),
      Array.prototype.filter ||
        (Array.prototype.filter = function (e, t) {
          if ("function" != typeof e || !this) throw new TypeError();
          var n = this.length >>> 0,
            i = new Array(n),
            r = 0,
            a = -1;
          if (void 0 === t)
            for (; ++a !== n; )
              a in this && e(this[a], a, this) && (i[r++] = this[a]);
          else
            for (; ++a !== n; )
              a in this && e.call(t, this[a], a, this) && (i[r++] = this[a]);
          return (i.length = r), i;
        });
    return {
      oldParser: {
        parse: function (t) {
          if (!t) return null;
          var n = {};
          return t.split(";").forEach(e, n), n;
        },
      },
      attrParser: {
        parse: function (e) {
          if ("string" != typeof e) return null;
          try {
            for (
              var t, r, a = {}, l = { p: -1 };
              l.p < e.length - 1 && "" != (t = n(e, l, s));

            )
              (r = n(e, l, o)), (a[t] = r);
            return a;
          } catch (e) {
            i("Syntax Error while parsing input : ", e);
          }
        },
      },
      ZSHashSet: r,
      log: i,
    };
  })(),
  zsUtils = (function () {
    function e(e) {
      function t() {
        (i = !0), $E.unbind(document, "contentWindow:initted", t), e();
      }
      "canvas" !== window.zs_rendering_mode || i
        ? $E.callOnLoad(e)
        : $E.bind(document, "contentWindow:initted", t);
    }
    function t(e) {
      var t = new RegExp(e + "=[^;]*"),
        n = document.cookie,
        i = t.exec(n);
      if (i) {
        var r = i[0].split("=");
        return unescape(r[1]);
      }
      return null;
    }
    function n(e) {
      var t, i;
      Object.freeze(e);
      for (i in e)
        (t = e[i]),
          e.hasOwnProperty(i) &&
            "object" == typeof t &&
            !Object.isFrozen(t) &&
            n(t);
    }
    var i = !1;
    return (
      e(function () {
        return !0;
      }),
      {
        onDocumentReady: e,
        debounce: function (e, t, n) {
          var i;
          return function () {
            var r = this,
              a = arguments,
              o = n && !i;
            clearTimeout(i),
              (i = setTimeout(function () {
                (i = null), n || e.apply(r, a);
              }, t)),
              o && e.apply(r, a);
          };
        },
        deepFreeze: n,
        onImageLoad: function (e, t) {
          function n(e) {
            s++,
              e.complete
                ? i()
                : ($E.bind(e, "load", i),
                  $E.bind(e, "error", i),
                  /MSIE|Trident/.test(navigator.userAgent) && (e.src = e.src));
          }
          function i() {
            s--, $E.unbind(this, "load", i), $E.unbind(this, "error", i), r();
          }
          function r() {
            o || (a && 0 === s && ((o = !0), t()));
          }
          if (!e || !t)
            throw new TypeError("Element and callback both are necessary");
          var a,
            o,
            s = 0;
          e && "IMG" == e.tagName && n(e);
          for (var l = e.getElementsByTagName("IMG"), u = 0; u < l.length; u++)
            n(l[u]);
          (a = !0), r();
        },
        getCookie: t,
        getCSRFHeader: function () {
          return { "X-ZCSRF-TOKEN": "csrfp=" + t("csrfc") };
        },
      }
    );
  })(),
  zsApp = (function () {
    "use strict";
    function e() {
      document.removeEventListener("DOMContentLoaded", e, !0), (c = !0), r(!1);
    }
    function t(e) {
      Object.freeze(e);
    }
    function n(e, n) {
      var r = (n = n || document).querySelectorAll(u);
      (r = Array.prototype.slice.call(r)),
        n.matches && n.matches(u) && r.push(n);
      var o, s, d;
      ("canvas" !== window.zs_rendering_mode &&
        "live" !== window.zs_rendering_mode) ||
        ((f = r.length), (l = f));
      for (var c = {}, m = r.length - 1; m >= 0; m--) {
        if (((d = r[m]), (o = d.getAttribute("data-zs-app")), !(s = p[o])))
          throw "Module not defined in manifest!";
        if ((s.module, !e && s.containerApp)) {
          var v = {
            name: o,
            app: d,
            info: {
              el: d,
              type: {
                category: "",
                label: "App",
                subType: o,
                type: "app",
                containerApp: !0,
              },
            },
          };
          t(v.info), t(v), h.push(v);
        }
        c.hasOwnProperty(o) || (c[o] = []), c[o].push(d);
      }
      for (o in c)
        !(function (e, t, n) {
          setTimeout(function () {
            window[n] ? i(t, n) : a(e, i.bind(null, t, n));
          }, 0);
        })(o, c[o], p[o].module);
      0 == r.length && (g = !0);
    }
    function i(e, t) {
      for (var n = 0; n < e.length; n++)
        !(function (e, t) {
          setTimeout(function () {
            window[t] &&
              window[t].init(
                e,
                (function (e, t) {
                  return (
                    (e.util = {
                      hasClass: function (e) {
                        return $D.hasClass(e, this);
                      }.bind(t),
                      getData: function (e) {
                        return this.getAttribute("data-" + e);
                      }.bind(t),
                    }),
                    (e.el = t),
                    (e.loaded = s.bind(null, e)),
                    e
                  );
                })({}, e)
              );
          }, 0);
        })(e[n], t);
    }
    function r(e, t) {
      var i = n.bind(null, e, t);
      if (
        "undefined" == typeof zs_rendering_mode ||
        ("canvas" != zs_rendering_mode && "preview" != zs_rendering_mode)
      )
        if (null == p)
          $X.get({
            url: "/site-conf.json",
            handler: function () {
              (p = JSON.parse(this.responseText).apps), i();
            },
          });
        else {
          if (!$IS.object(p))
            throw TypeError("Unexpected AppManifest Value : " + p);
          i();
        }
      else
        (p =
          "preview" == zs_rendering_mode ? parent.appManifest : app_manifest),
          i();
    }
    function a(e, t) {
      var n,
        i,
        r,
        a,
        s = p[e],
        l = s.module;
      if (window[s.module]) t();
      else if (
        ((r = s.assets.js.site),
        (a = function (e, t, n) {
          try {
            if (n) {
              "string" == typeof n && (n = [n]);
              for (var i, r, a, s = { count: n.length }, l = 0; (i = n[l]); l++)
                ((r = document.createElement("link")).rel = "stylesheet"),
                  (r.type = "text/css"),
                  (a = o.bind(r, e, !0, s)),
                  r.addEventListener("load", a),
                  (r.href = d + i.replace(/\.scss$/, ".css")),
                  (r.onerror = a),
                  document.head.appendChild(r),
                  (r = a = i = null);
            } else e();
          } catch (t) {
            e();
          }
        }.bind(null, t, l, s.assets.css)),
        r)
      ) {
        "string" == typeof r && (r = [r]);
        for (var u = { count: r.length }, c = 0; r[c]; c++)
          (n = document.createElement("script")),
            (i = o.bind(n, a, !1, u)),
            n.addEventListener("load", i),
            (n.src = d + r[c]),
            (n.onerror = i),
            document.head.appendChild(n),
            (n = i = null);
      }
    }
    function o(e, t, n, i) {
      this.removeEventListener("load", this.onerror),
        n.count--,
        (this.onerror = null),
        t ||
          "error" != i.type ||
          ((n.error = !0), m.error("Error while loading the app asset", this)),
        n.error || 0 != n.count || e();
    }
    function s(e, t) {
      var n = e.el.closest("[data-zs-slider]");
      n ? zsSlider.resize(n, t) : t && t(),
        ("canvas" !== window.zs_rendering_mode &&
          "live" !== window.zs_rendering_mode) ||
          (0 == --f && ((g = !0), $E.dispatch(document.body, "zsapps:loaded")));
      $E.dispatch(e.el, "app:loaded", { isLoaded: !0 });
    }
    var l,
      u = "[data-zs-app]",
      d = "/zs-app/",
      c = !1,
      h = [],
      p = null,
      f = 0,
      m = window.console,
      g = !1;
    return (
      /interactive|complete|loaded/.test(document.readyState)
        ? e()
        : document.addEventListener("DOMContentLoaded", e, !0),
      $E.bind(document.body, "element:resized", function (e) {
        s({ el: e.target, isLoaded: !0 });
      }),
      {
        init: r.bind(null, !1),
        reinit: r.bind(null, !0),
        afterLoad: s,
        loadResources: a,
        containerApps: h,
        checkAppStatus: function () {
          return void 0 !== l && (0 == l || g);
        },
      }
    );
  })(),
  tabs = (function () {
    function e(e) {
      t($D.getByClass("zptab", e));
    }
    function t(e, t) {
      for (var r = 0; r < e.length; r++)
        $E.unbind(e[r], "click", n), $E.bind(e[r], "click", n);
      e.length > 0 && !t && i(e[0]);
    }
    function n(e) {
      i(this);
    }
    function i(e) {
      !(function (e) {
        for (
          var t = $D.findParent(e, "zptabelem-inner-container"),
            n = $D.getByClass("zptab", t),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i];
          r(e) != r(a) || $D.hasClass(a, d)
            ? r(e) != r(a) &&
              $D.hasClass(a, "zptab-active") &&
              $D.removeClass(a, "zptab-active")
            : $D.addClass(a, d);
        }
        for (
          var o = $D.getByClass("zptab-content", t), i = 0;
          i < o.length;
          i++
        ) {
          var s = o[i];
          $D.hasClass(s, "zptab-active-content") &&
            $D.removeClass(s, "zptab-active-content");
        }
      })(e),
        (function (e) {
          var t = e.getAttribute("data-content-id"),
            n = $D.getByDataId(t, document);
          $D.hasClass(n, "zptab-active-content") ||
            $D.addClass(n, "zptab-active-content");
        })(e);
    }
    function r(e) {
      return e.getAttribute("data-element-id");
    }
    function a(e) {
      o($D.getByClass("zpaccordion", e));
    }
    function o(e, t) {
      for (var n = 0; n < e.length; n++) $E.bind(e[n], "click", s);
      e.length > 0 && !t && l(e[0]);
    }
    function s(e) {
      l(this);
    }
    function l(e) {
      !(function (e) {
        for (
          var t, n = $D.findParent(e, "zpaccordion-container").children, i = 0;
          i < n.length;
          i += 2
        )
          (t = n[i]).isSameNode(e)
            ? ($D.addClass(t, "zpaccordion-active"),
              $D.addClass(t.nextElementSibling, "zpaccordion-active-content"))
            : ($D.removeClass(t, "zpaccordion-active"),
              $D.removeClass(
                t.nextElementSibling,
                "zpaccordion-active-content"
              ));
      })(e);
    }
    function u() {
      !(function () {
        for (
          var t = document.body.querySelectorAll(".zpelement.zpelem-tabs"),
            n = 0;
          n < t.length;
          n++
        )
          e($D.getByClass("zptabelem-inner-container", t[n])[0]);
      })(),
        (function () {
          for (
            var e = document.body.querySelectorAll(
                ".zpelement.zpelem-accordion"
              ),
              t = 0;
            t < e.length;
            t++
          )
            a($D.getByClass("zpaccordion-container", e[t])[0]);
        })(),
        $E.unbind(window, "DOMContentLoaded", u);
    }
    var d = "zptab-active";
    return (
      $E.callOnLoad(u),
      {
        changeTab: n,
        changeAccordion: s,
        bindTabs: e,
        bindTabHeaders: t,
        setTabActive: i,
        setAccordionActive: l,
        bindAccordion: a,
        bindAccordionHeaders: o,
      }
    );
  })(),
  audio = (function () {
    function e() {
      !(function () {
        for (
          var e = $D.getAll(".zpelement.zpelem-audioplayer"), t = 0;
          t < e.length;
          t++
        ) {
          var n = $D.getByClass("zpaudio-container", e[t])[0],
            i = !1,
            r = !1;
          ("true" != n.getAttribute("data-autoplay") &&
            1 != n.getAttribute("data-autoplay")) ||
            (i = !0),
            ("true" != n.getAttribute("data-loop") &&
              1 != n.getAttribute("data-loop")) ||
              (r = !0),
            w(n, i, r);
        }
      })(),
        $E.unbind(window, "DOMContentLoaded", e);
    }
    function t() {
      var e = $D.findParent(this, "zpaudio-container");
      "zpaudio-play" == this.className
        ? ((this.className = "zpaudio-pause"),
          e.audio.play(),
          e.native ||
            (e.timer = setInterval(function () {
              var t = e.audio.getCurrentTime() / 1e3,
                n = e.audio.getDuration() / 1e3,
                i = Math.floor(t / 60),
                r = Math.round(t % 60);
              $D.getByClass("zpaudio-timer", e)[0].innerHTML =
                (i > 9 ? i : "0" + i) + ":" + (r > 9 ? r : "0" + r);
              var a =
                $D.getByClass("zpaudio-progress-base-bar", e)[0].clientWidth -
                8;
              $D.css(
                $D.getByClass("zpaudio-progress-bar-button", e)[0],
                "left",
                ((a / n) * t * 100) / (a + 8) + "%"
              ),
                $D.css(
                  $D.getByClass("zpaudio-progress-play-bar", e)[0],
                  "width",
                  (t / n) * 100 + "%"
                );
            }, 100)))
        : ((this.className = "zpaudio-play"),
          e.audio.pause(),
          e.native || clearInterval(e.timer));
    }
    function n(e) {
      if (
        "zpaudio-progress-bar-button" !=
        (e.srcElement ? e.srcElement : e.target).className
      ) {
        var n = e.layerX,
          i = $D.findParent(this, "zpaudio-container"),
          r = $D.getByClass("zpaudio-progress-base-bar", i)[0].clientWidth - 8;
        if (i.native)
          try {
            i.audio.currentTime = (i.audio.duration / r) * n;
          } catch (e) {
            t.call($D.getByClass("zpaudio-play", i)[0]),
              setTimeout(function () {
                i.audio.currentTime = (i.audio.duration / r) * n;
              }, 300);
          }
        else if (i.audio.isPlaying())
          i.audio.play((i.audio.getDuration() / r) * n);
        else {
          var a = (i.audio.getDuration() / r) * n;
          i.audio.setSeekTime(a),
            ($D.getByClass("zpaudio-timer", i)[0].innerHTML =
              (Math.floor(a / 1e3 / 60) < 9
                ? "0" + Math.floor(a / 1e3 / 60)
                : Math.floor(a / 1e3 / 60)) +
              ":" +
              (Math.floor((a / 1e3) % 60) < 9
                ? "0" + Math.floor((a / 1e3) % 60)
                : Math.floor((a / 1e3) % 60))),
            $D.css(
              $D.getByClass("zpaudio-progress-bar-button", i)[0],
              "left",
              (100 * n) / (r + 8) + "%"
            ),
            $D.css(
              $D.getByClass("zpaudio-progress-play-bar", i)[0],
              "width",
              (n / r) * 100 + "%"
            );
        }
      }
    }
    function i(e) {
      var t = $D.findParent(this, "zpaudio-container");
      (i.left = this.parentNode.offsetLeft),
        (i.currentLeft = e.clientX),
        (i.seekBar = this),
        (i.duration = t.native
          ? t.audio.duration
          : t.audio.getDuration() / 1e3),
        (i.paused = t.native ? t.audio.paused : !t.audio.isPlaying()),
        t.audio.pause(),
        t.native || clearInterval(t.timer),
        $D.addClass(document.body, "no-select"),
        $E.bind(window, "mousemove", r),
        $E.bind(window, "mouseup", a);
    }
    function r(e) {
      e.preventDefault(), e.stopPropagation();
      var t = e.clientX,
        n = i.currentLeft - t,
        r = i.seekBar.offsetLeft,
        a = $D.findParent(i.seekBar, "zpaudio-container");
      if (a.audio.duration || a.audio.getDuration()) {
        a.audio.duration || a.audio.getDuration();
        var o =
          $D.getByClass("zpaudio-progress-base-bar", a)[0].clientWidth - 8;
        if (r - n >= 0 && r - n <= o) {
          var s = (i.duration / o) * (r - n),
            l = Math.floor(s / 60),
            u = Math.round(s % 60);
          ($D.getByClass("zpaudio-timer", a)[0].innerHTML =
            (l < 10 ? "0" + l : l) + ":" + (u < 10 ? "0" + u : u)),
            $D.css(
              i.seekBar,
              "left",
              ((o / i.duration) * s * 100) / (o + 8) + "%"
            ),
            $D.css(
              $D.getByClass("zpaudio-progress-play-bar", a)[0],
              "width",
              (s / i.duration) * 100 + "%"
            ),
            (i.curTime = s);
        }
      }
      i.currentLeft = t;
    }
    function a(e) {
      var n = $D.findParent(i.seekBar, "zpaudio-container");
      if (n.native) {
        try {
          n.audio.currentTime = i.curTime;
        } catch (e) {}
        i.paused || n.audio.play();
      } else
        i.paused
          ? (t.call($D.getByClass("playBtn", n)[0]),
            $D
              .findParent(i.seekBar, "zpaudio-container")
              .audio.setSeekTime(1e3 * i.curTime))
          : (n.audio.play(1e3 * Math.floor(i.curTime)),
            (n.timer = setInterval(function () {
              var e = n.audio.getCurrentTime() / 1e3,
                t = n.audio.getDuration() / 1e3,
                i = Math.floor(e / 60),
                r = Math.round(e % 60);
              (seekWidth =
                $D.getByClass("zpaudio-progress-base-bar", n)[0].clientWidth -
                8),
                ($D.getByClass("zpaudio-timer", n)[0].innerHTML =
                  (i > 9 ? i : "0" + i) + ":" + (r > 9 ? r : "0" + r)),
                $D.css(
                  $D.getByClass("zpaudio-progress-bar-button", n)[0],
                  "left",
                  ((seekWidth / t) * e * 100) / (seekWidth + 8) + "%"
                ),
                $D.css(
                  $D.getByClass("zpaudio-progress-play-bar", n)[0],
                  "width",
                  (e / t) * 100 + "%"
                );
            }, 100)));
      $E.unbind(window, "mousemove", r),
        $E.unbind(window, "mouseup", a),
        $D.removeClass(document.body, "no-select");
    }
    function o(e) {
      (o.left = this.parentNode.offsetLeft),
        (o.leftTot = o.left + this.parentNode.clientWidth - 8),
        (o.seeklength = this.parentNode.clientWidth - 8),
        (o.currentLeft = e.clientX),
        (o.volBtn = this),
        $D.addClass(document.body, "no-select"),
        $E.bind(window, "mousemove", fnMoveVolBtn),
        $E.bind(window, "mouseup", fnReleaseVolBtn);
    }
    function s(e) {
      if (
        "zpaudio-volume-progress-bar-button" !=
        (e.srcElement ? e.srcElement : e.target).className
      ) {
        var t = $D.findParent(this, "zpaudio-container"),
          n = $D.getByClass("zpaudio-volume-bar", t)[0].clientWidth - 8,
          i = ((e.layerX / (n + 8)) * 100) / 100;
        t.native
          ? ((t.audio.volume = i), i > 0.1 && (t.audio.muted = !1))
          : t.audio.setVolume(i.toFixed(1)),
          l(t, i);
      }
    }
    function l(e, t) {
      var n =
          $D.getByClass("zpaudio-volume", e)[0] ||
          $D.getByClass("zpaudio-volume-mute", e)[0] ||
          $D.getByClass("zpaudio-volume-down", e)[0],
        i = $D.getByClass("zpaudio-volume-bar", e)[0].clientWidth - 8;
      (n.className =
        t > 0.1 && t < 0.6
          ? "zpaudio-volume-down"
          : t >= 0.6
          ? "zpaudio-volume"
          : "zpaudio-volume-mute"),
        i < 1
          ? ($D.css(
              $D.getByClass("zpaudio-volume-progress-bar-button", e)[0],
              "left",
              "0%"
            ),
            $D.css(
              $D.getByClass("zpaudio-volume-progress-base-bar", e)[0],
              "width",
              "0%"
            ))
          : ($D.css(
              $D.getByClass("zpaudio-volume-progress-bar-button", e)[0],
              "left",
              ((i / 1) * t * 100) / (i + 8) + "%"
            ),
            $D.css(
              $D.getByClass("zpaudio-volume-progress-base-bar", e)[0],
              "width",
              (t / 1) * 100 + "%"
            ));
    }
    function u() {
      var e = $D.findParent(this, "zpaudio-container"),
        t = $D.getByClass("zpaudio-volume-bar", e)[0].clientWidth - 8;
      if (e.native)
        e.audio.muted
          ? ((n = e.audio.volume), (e.audio.muted = !1))
          : ((n = 0), (e.audio.muted = !0));
      else {
        var n;
        0 != (n = this.parentNode.audio.getVolume())
          ? ((e.volume = n), (n = 0))
          : (n = e.volume),
          e.audio.setVolume(n);
      }
      (this.className =
        n > 0.1 && n < 0.6
          ? "zpaudio-volume-down"
          : n >= 0.6
          ? "zpaudio-volume"
          : "zpaudio-volume-mute"),
        $D.css(
          $D.getByClass("zpaudio-volume-progress-bar-button", e)[0],
          "left",
          ((t / 1) * n * 100) / (t + 8) + "%"
        ),
        $D.css(
          $D.getByClass("zpaudio-volume-progress-base-bar", e)[0],
          "width",
          (n / 1) * 100 + "%"
        );
    }
    function d() {
      var e = $D.findParent(this, "zpaudio-container"),
        t = e.repeat,
        n = $D.getByClass("zpaudio-player", e)[0],
        i =
          $D.getByClass("zpaudio-repeat", n)[0] ||
          $D.getByClass("zpaudio-repeat-one", n)[0] ||
          null,
        r = $D.getByClass("zpaudio-more-options", e)[0],
        a =
          $D.getByClass("zpaudio-repeat", r)[0] ||
          $D.getByClass("zpaudio-repeat-one", r)[0] ||
          null,
        o = "";
      "none" == t || "" == t
        ? (e.setAttribute("data-loop", "true"),
          (e.repeat = "all"),
          e.isPlayList ||
            (e.native ? e.audio.setAttribute("loop", "true") : (e.loop = !0)),
          (o = "zpaudio-repeat zpaudio-select"))
        : (e.setAttribute("data-loop", "false"),
          "all" == t
            ? e.isPlayList
              ? ((e.repeat = "one"), (o = "zpaudio-repeat-one zpaudio-select"))
              : (e.native ? e.audio.removeAttribute("loop") : (e.loop = !1),
                (e.repeat = "none"),
                (o = "zpaudio-repeat"))
            : "one" == t && ((e.repeat = "none"), (o = "zpaudio-repeat"))),
        i && (i.className = o),
        a && (a.className = o);
    }
    function c() {
      m($D.findParent(this, "zpaudio-container"), !0, !1);
    }
    function h() {
      m($D.findParent(this, "zpaudio-container"), !1, !0);
    }
    function p() {
      var e = $D.findParent(this, "zpaudio-container"),
        t = $D.getByClass("zpaudio-playlist", e)[0],
        n = $D.getByClass("zpaudio-player", e)[0],
        i = $D.getByClass("zpaudio-playlist-icon", n)[0] || null,
        r = $D.getByClass("zpaudio-more-options", e)[0],
        a = $D.getByClass("zpaudio-playlist-icon", r)[0] || null,
        o = t.getAttribute("data-show");
      $D.hasClass(e, "zpaudio-player-playlist") || (o = "true"),
        "false" === o
          ? ($D.css(t, "display", "block"),
            t.setAttribute("data-show", "true"),
            $D.addClass(i, "zpaudio-select"),
            a && $D.addClass(a, "zpaudio-select"))
          : ($D.css(t, "display", "none"),
            t.setAttribute("data-show", "false"),
            $D.removeClass(i, "zpaudio-select"),
            a && $D.removeClass(a, "zpaudio-select"));
    }
    function f() {
      var e = $D.findParent(this, "zpaudio-container"),
        t = $D.getByClass("zpaudio-more-options", e)[0];
      "false" === t.getAttribute("data-show")
        ? ($D.css(t, "display", "inline-flex"),
          t.setAttribute("data-show", "true"),
          $D.addClass(this, "zpaudio-select"))
        : ($D.css(t, "display", "none"),
          t.setAttribute("data-show", "false"),
          $D.removeClass(this, "zpaudio-select"));
    }
    function m(e, n, i) {
      var r = !1;
      $D.getByClass("zpaudio-pause", e)[0];
      if (
        ($D.getByClass("zpaudio-pause", e)[0] &&
          t.call($D.getByClass("zpaudio-pause", e)[0]),
        e.isPlayList)
      ) {
        list_count = y(e);
        var a = e.repeat || "none";
        if ("none" == a || "" == a) {
          if (e.shuffle)
            if (n && e.stack.length > 1)
              (e.curPlayItem = e.stack.pop()), (e.curPlayItem = e.stack.pop());
            else if (n || e.stack.length === list_count.length)
              (e.curPlayItem = 0), (e.stack = []), (r = !0);
            else {
              for (
                var o = Math.floor(Math.random() * list_count.length), s = -1;
                s < 0;

              )
                -1 == e.stack.indexOf(o)
                  ? ((s = 0), e.stack.push(o))
                  : ((o = Math.floor(Math.random() * list_count.length)),
                    (s = -1));
              e.curPlayItem = o;
            }
          else
            i || (e.curPlayItem < list_count.length && !n)
              ? (e.curPlayItem += 1)
              : n && (e.curPlayItem -= 1),
              (!(e.curPlayItem < 0) && e.curPlayItem < list_count.length) ||
                ((e.curPlayItem = 0), (r = !0));
          w(e, !1, !1, r);
        } else if ("all" == a) {
          if (
            (e.stack.length === list_count.length && (e.stack = []), e.shuffle)
          )
            if (n && e.stack.length > 1)
              (e.curPlayItem = e.stack.pop()), (e.curPlayItem = e.stack.pop());
            else {
              n && (e.stack = []);
              for (
                o = Math.floor(Math.random() * list_count.length), s = -1;
                s < 0;

              )
                -1 == e.stack.indexOf(o)
                  ? ((s = 0), e.stack.push(o))
                  : ((o = Math.floor(Math.random() * list_count.length)),
                    (s = -1));
              e.curPlayItem = o;
            }
          else
            n
              ? e.curPlayItem > 0
                ? (e.curPlayItem -= 1)
                : (e.curPlayItem = list_count.length - 1)
              : e.curPlayItem < list_count.length - 1
              ? (e.curPlayItem += 1)
              : (e.curPlayItem = 0);
          w(e, !1, !1);
        } else
          "one" == a &&
            (e.native ? (e.audio.currentTime = 0) : e.audio.setSeekTime(0),
            setTimeout(function () {
              t.call($D.getByClass("zpaudio-play", e)[0]);
            }, 600));
      } else
        e.native ||
          (1 == e.loop &&
            (e.audio.setSeekTime(0),
            setTimeout(function () {
              t.call($D.getByClass("zpaudio-play", e)[0]);
            }, 600)));
    }
    function g() {
      var e = $D.findParent(this, "zpaudio-container");
      (player_elem = $D.getByClass("zpaudio-player", e)[0]),
        (shuffle_butt =
          $D.getByClass("zpaudio-suffle", player_elem)[0] || null),
        (more_elem = $D.getByClass("zpaudio-more-options", e)[0]),
        (shuffle_butt2 = $D.getByClass("zpaudio-suffle", more_elem)[0] || null),
        e.shuffle
          ? ($D.removeClass(shuffle_butt, "zpaudio-select"),
            shuffle_butt2 && $D.removeClass(shuffle_butt2, "zpaudio-select"),
            (e.shuffle = !1))
          : ($D.addClass(shuffle_butt, "zpaudio-select"),
            shuffle_butt2 && $D.addClass(shuffle_butt2, "zpaudio-select"),
            (e.shuffle = !0));
    }
    function v() {
      var e = $D.findParent(this, "zpaudio-container"),
        t = this.getAttribute("data-item");
      (e.curPlayItem = parseInt(t)), w(e, !1, !1);
    }
    function y(e) {
      for (
        var t = [],
          n = $D.getByClass("zpaudio-playlist", e)[0],
          i = $D.getByTag("li", n),
          r = 0;
        i[r];
        r++
      ) {
        var a = i[r];
        t.push(a.getAttribute("data-src"));
      }
      return t;
    }
    function b(e, t) {
      var n = $D.getByClass("zpaudio-playlist", e)[0],
        i = $D.getByTag("li", n);
      return i.length > t
        ? i[t].getAttribute("data-src")
        : i[0]
        ? i[0].getAttribute("data-src")
        : "";
    }
    function w(e, n, i, r) {
      var a,
        o = document.createElement("audio"),
        s = e.audio ? e.audio.volume : 1,
        u = $D.getByClass("zpaudio-player", e)[0];
      $D.getByClass("zpaudio-repeat", u)[0] ||
        $D.getByClass("zpaudio-repeat-one", u)[0];
      if (e.isPlayList || y(e).length > 1) {
        e.curPlayItem || (e.curPlayItem = 0),
          o.setAttribute("src", b(e, e.curPlayItem));
        var d = $D.getByClass("zpaudio-playlist", e)[0];
        if (
          ((listContain_ul = $D.getByTag("ul", d)[0]),
          (li_elms = $D.getByTag("li", listContain_ul)),
          e.isPlayList)
        ) {
          var c = $D.getByClass("zpaudio-playing", listContain_ul)[0];
          c && $D.removeClass(c, "zpaudio-playing"),
            $D.addClass(li_elms[e.curPlayItem], "zpaudio-playing");
        } else {
          C(e), (e.isPlayList = !0), (a = !0);
          $D.getByClass("zpaudio-more-options", e)[0];
          (e.repeat = i ? "all" : "none"), (e.shuffle = !1), (e.stack = []);
          for (
            var h,
              p = function () {
                var e = Math.floor(this.duration / 60),
                  t = Math.round(this.duration % 60);
                this.durationCont.innerHTML =
                  (e > 9 ? e : "0" + e) + ":" + (t > 9 ? t : "09");
              },
              f = 0;
            (h = li_elms[f]);
            f++
          ) {
            var g = document.createElement("audio");
            g.setAttribute("preload", "metadata"),
              g.setAttribute("src", h.getAttribute("data-src")),
              h.setAttribute("data-item", f),
              $D.addClass(h, 0 == f ? "zpaudio-playing" : "");
            var w = $D.getByTag("SPAN", h)[0];
            !g.canPlayType ||
              ("maybe" != o.canPlayType("audio/mpeg") &&
                "probably" != o.canPlayType("audio/mpeg")) ||
              ((g.durationCont = w), $E.bind(g, "loadedmetadata", p)),
              $E.unbind(h, "click", v),
              $E.bind(h, "click", v);
          }
        }
      } else
        C(e), o.setAttribute("src", b(e, 0)), (e.repeat = i ? "all" : "none");
      e.isPlayList &&
        -1 == e.stack.indexOf(e.curPlayItem) &&
        e.stack.push(e.curPlayItem),
        (e.native = !1);
      var $ = $D.getByClass("zpaudio-progress-bar-button", e)[0],
        E = $D.getByClass("zpaudio-progress-base-bar", e)[0],
        _ = $D.getByClass("zpaudio-progress-play-bar", e)[0],
        D =
          $D.getByClass("zpaudio-play", e)[0] ||
          $D.getByClass("zpaudio-pause", e)[0];
      if (
        (e.audio &&
          (e.audio.pause && e.audio.pause(),
          $D.hasClass(D, "zpaudio-pause") && (D.className = "zpaudio-play"),
          e.native
            ? (e.audio.currentTime = 0)
            : (clearInterval(e.timer),
              ($D.getByClass("zpaudio-timer", e)[0].innerHTML = "00:00"),
              $D.css($, "left", "0%"),
              $D.css(_, "width", "0%"))),
        D)
      ) {
        if (
          (($D.getByClass("zpaudio-timer", e)[0].innerHTML = "00:00"),
          !o.canPlayType ||
            ("maybe" != o.canPlayType("audio/mpeg") &&
              "probably" != o.canPlayType("audio/mpeg")))
        ) {
          var x = FlashAudio.init(e, b(e, e.curPlayItem));
          (e.audio = x),
            addEvent(x, "ended", function () {
              var e = this.parentNode;
              clearInterval(e.timer), m(e);
            }),
            "true" == n &&
              setTimeout(function () {
                t.call(D);
              }, 600),
            e.isPlayList &&
              !a &&
              setTimeout(function () {
                t.call(D);
              }, 600),
            (audio.loop = i);
        } else {
          (e.native = !0),
            (e.audio = o),
            n &&
              ((D.className = "zpaudio-pause"),
              o.setAttribute("autoplay", "true")),
            i && !e.isPlayList && o.setAttribute("loop", "true"),
            !e.isPlayList || a || r || t.call(D);
          var z = $D.getByClass("zpaudio-progress-seek-bar", e)[0];
          $D.css(z, "width", "0px");
          var A = function () {
            var e = o.buffered.length,
              t = 0;
            if (!(!e > 0)) {
              o.buffered.start(e - 1), (t = o.buffered.end(e - 1));
              E.clientWidth;
              var n = (t / o.duration) * 100;
              $D.css(z, "width", n + "%");
            }
          };
          o.addEventListener("progress", A, !1),
            o.addEventListener(
              "timeupdate",
              function () {
                _.clientWidth > z.clientWidth && A();
                var t = E.clientWidth - 8,
                  n = Math.floor(this.currentTime % 60);
                ($D.getByClass("zpaudio-timer", e)[0].innerHTML =
                  (Math.floor(this.currentTime / 60) < 9
                    ? "0" + Math.floor(this.currentTime / 60)
                    : Math.floor(this.currentTime / 60)) +
                  ":" +
                  (n > 9 ? n : "0" + n)),
                  $D.css(
                    $,
                    "left",
                    ((t / this.duration) * this.currentTime * 100) / (t + 8) +
                      "%"
                  ),
                  $D.css(
                    _,
                    "width",
                    (this.currentTime / this.duration) * 100 + "%"
                  );
              },
              !1
            );
          $E.bind(o, "ended", function () {
            m(e);
          });
        }
        l(e, s || e.audio.volume || 1);
      }
    }
    function C(e) {
      var r = $D.getByClass("zpaudio-player", e)[0],
        a = $D.getByClass("zpaudio-more-options", e)[0],
        l = $D.getByClass("zpaudio-backward", e)[0],
        m = $D.getByClass("zpaudio-forward", e)[0],
        v = $D.getByClass("zpaudio-suffle", r)[0],
        y =
          $D.getByClass("zpaudio-repeat", r)[0] ||
          $D.getByClass("zpaudio-repeat-one", r)[0],
        b = $D.getByClass("zpaudio-suffle", a)[0] || null,
        w =
          $D.getByClass("zpaudio-repeat", a)[0] ||
          $D.getByClass("zpaudio-repeat-one", a)[0],
        C = $D.getByClass("zpaudio-playlist-icon", e)[0],
        $ = $D.getByClass("zpaudio-playlist-icon ", a)[0],
        E = $D.getByClass("zpaudio-progress-bar-button", e)[0],
        _ = $D.getByClass("zpaudio-progressbar", e)[0],
        D =
          $D.getByClass("zpaudio-volume", e)[0] ||
          $D.getByClass("zpaudio-volume-down", e)[0] ||
          $D.getByClass("zpaudio-volume-mute", e)[0],
        x =
          $D.getByClass("zpaudio-play", e)[0] ||
          $D.getByClass("zpaudio-pause", e)[0];
      (volCont = $D.getByClass("zpaudio-volume-bar", e)[0]),
        (vol_bar = $D.getByClass("zpaudio-volume-progress-bar-button", e)[0]),
        $E.bind(E, "mousedown", i),
        $E.bind(_, "click", n),
        $E.bind(D, "click", u),
        $E.bind(x, "click", t),
        $E.bind(volCont, "click", s),
        $E.bind(vol_bar, "mousedown", o),
        $E.bind(l, "click", c),
        $E.bind(m, "click", h),
        $E.bind(v, "click", g),
        $E.bind(b, "click", g),
        $E.bind(y, "click", d),
        $E.bind(w, "click", d),
        $E.bind(C, "click", p),
        $E.bind($, "click", p),
        $E.bind($D.getByClass("zpaudio-options", e)[0], "click", f),
        $E.bind(a, "mouseleave", f);
    }
    return (
      $E.callOnLoad(e),
      (fnMoveVolBtn = function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = e.clientX,
          n = o.volBtn.offsetLeft,
          i = t - o.currentLeft;
        if (n + i >= 0 && n + i <= o.seeklength) {
          var r = $D.findParent(o.volBtn, "zpaudio-container");
          (toMove = n + i),
            (vol = ((toMove / o.seeklength) * 100) / 100),
            r.native ? (r.audio.volume = vol) : r.audio.setVolume(vol),
            l(r, vol);
        }
        o.currentLeft = t;
      }),
      (fnReleaseVolBtn = function () {
        $D.removeClass(document.body, "no-select"),
          $E.unbind(window, "mousemove", fnMoveVolBtn),
          $E.unbind(window, "mouseup", fnReleaseVolBtn);
      }),
      (FlashAudio = {}),
      (FlashAudio.init = function (e, t) {
        var n = "fa" + Math.ceil(0xa1b01d4b1c7 * Math.random()),
          i =
            '<object id="' +
            n +
            '" data="/swf/mp3player.swf" type="application/x-shockwave-flash" allowscriptaccess="sameDomain" allowfullscreen="true" width="1" height="1" ><param name="movie" value="mp3player.swf"></param><param name="flashvars" value="src=' +
            t +
            "&faid=" +
            n +
            '"></param><param name="menu" value="false"></param><param name="align" value="middle"></param><param name="allowScriptAccess" value="sameDomain"></param><param name="quality" value="high"></param><param name="wmode" value="opaque"></param></object>',
          r = document.createElement("div");
        (r.innerHTML = i), $D.append(e, r);
        var a = r.firstChild;
        return (
          e.insertBefore(a, r),
          e.removeChild(r),
          e.setAttribute("data-faid", n),
          a
        );
      }),
      (FlashAudio.postMessage = function (e) {
        var t = JSON.parse(e);
        switch (t.cmd) {
          case "event":
            var n = $D.getById(t.faid);
            fireEvent.call(n, t.type);
        }
      }),
      {
        initAudio: w,
        bindNewChild: function (e, t) {
          var n = $D.getByClass("zpaudio-playlist", e)[0],
            i = $D.getByClass("zpaudio-playlist-icon", e)[0],
            r = $D.getByTag("li", n),
            a = y(e),
            o = a.length,
            s = !1;
          a.length > 1 && !e.isPlayList && (s = !0),
            a.length > 1
              ? ((o = 0),
                (e.isPlayList = !0),
                (e.curPlayItem = e.curPlayItem || 0),
                (e.stack = e.stack || []),
                $D.addClass(e, "zpaudio-player-playlist"),
                s && p.call(i))
              : $D.removeClass(e, "zpaudio-player-playlist");
          for (
            var l,
              u = function () {
                var e = Math.floor(this.duration / 60),
                  t = Math.round(this.duration % 60);
                this.durationCont.innerHTML =
                  (e > 9 ? e : "0" + e) + ":" + (t > 9 ? t : "09");
              };
            (l = r[o]);
            o++
          ) {
            var d = document.createElement("audio");
            d.setAttribute("preload", "metadata"),
              d.setAttribute("src", l.getAttribute("data-src")),
              l.setAttribute("data-item", o),
              o == e.curPlayItem
                ? $D.addClass(l, "zpaudio-playing")
                : $D.removeClass(l, "zpaudio-playing");
            var c = $D.getByTag("SPAN", l)[0];
            "00:00" == c.innerHTML &&
              (!d.canPlayType ||
                ("maybe" != d.canPlayType("audio/mpeg") &&
                  "probably" != d.canPlayType("audio/mpeg")) ||
                ((d.durationCont = c), $E.bind(d, "loadedmetadata", u, d))),
              $E.unbind(l, "click", v),
              $E.bind(l, "click", v);
          }
        },
        deleteChild: function (e) {
          if (e) {
            parseInt(e.getAttribute("data-item"));
            var t = $D.findParent(e, "zpaudio-playlist"),
              n = $D.findParent(e, "zpaudio-container"),
              i = $D.getByClass("zpaudio-playlist-icon", n)[0],
              r = $D.getByClass("zpaudio-playing", t)[0],
              a = 0;
            r == e &&
              (m(n, !1, !0), (r = $D.getByClass("zpaudio-playing", t)[0])),
              $E.purge(e),
              $D.remove(e);
            for (
              var o = $D.getByTag("li", t), s = 1 == o.length;
              (e = o[a]);
              a++
            )
              e.setAttribute("data-item", a);
            (n.curPlayItem = r
              ? parseInt(r.getAttribute("data-item")) || 0
              : 0),
              s &&
                ((a = 0),
                $D.removeClass(n, "zpaudio-player-playlist"),
                p.call(i),
                (n.isPlayList = !1),
                (n.curPlayItem = null),
                (n.stack = null));
          }
        },
        deletePlayer: function (e) {
          if (
            e &&
            ((function (e) {
              var r = $D.getByClass("zpaudio-player", e)[0],
                a = $D.getByClass("zpaudio-more-options", e)[0],
                l = $D.getByClass("zpaudio-backward", e)[0],
                m = $D.getByClass("zpaudio-forward", e)[0],
                v = $D.getByClass("zpaudio-suffle", r)[0],
                y =
                  $D.getByClass("zpaudio-repeat", r)[0] ||
                  $D.getByClass("zpaudio-repeat-one", r)[0],
                b = $D.getByClass("zpaudio-suffle", a)[0] || null,
                w =
                  $D.getByClass("zpaudio-repeat", a)[0] ||
                  $D.getByClass("zpaudio-repeat-one", a)[0],
                C = $D.getByClass("zpaudio-playlist-icon", e)[0],
                $ = $D.getByClass("zpaudio-playlist-icon ", a)[0],
                E = $D.getByClass("zpaudio-progress-bar-button", e)[0],
                _ = $D.getByClass("zpaudio-progressbar", e)[0],
                D =
                  $D.getByClass("zpaudio-volume", e)[0] ||
                  $D.getByClass("zpaudio-volume-down", e)[0] ||
                  $D.getByClass("zpaudio-volume-mute", e)[0],
                x =
                  $D.getByClass("zpaudio-play", e)[0] ||
                  $D.getByClass("zpaudio-pause", e)[0];
              (volCont = $D.getByClass("zpaudio-volume-bar", e)[0]),
                (vol_bar = $D.getByClass(
                  "zpaudio-volume-progress-bar-button",
                  e
                )[0]),
                $E.unbind(E, "mousedown", i),
                $E.unbind(_, "click", n),
                $E.unbind(D, "click", u),
                $E.unbind(x, "click", t),
                $E.unbind(volCont, "click", s),
                $E.unbind(vol_bar, "mousedown", o),
                $E.unbind(l, "click", c),
                $E.unbind(m, "click", h),
                $E.unbind(v, "click", g),
                $E.unbind(b, "click", g),
                $E.unbind(y, "click", d),
                $E.unbind(w, "click", d),
                $E.unbind(C, "click", p),
                $E.unbind($, "click", p),
                $E.unbind($D.getByClass("zpaudio-options", e)[0], "click", f),
                $E.unbind(a, "mouseleave", f);
            })(e),
            e.audio)
          ) {
            var r = $D.getByClass("zpaudio-pause", e)[0];
            r && t.call(r);
          }
        },
        resetAudio: function (e) {
          if (e) {
            var t = $D.getByClass("zpaudio-player", e)[0],
              n = $D.getByClass("zpaudio-more-options", e)[0],
              i =
                $D.getByClass("zpaudio-repeat", t)[0] ||
                $D.getByClass("zpaudio-repeat-one", t)[0],
              r =
                $D.getByClass("zpaudio-repeat", n)[0] ||
                $D.getByClass("zpaudio-repeat-one", n)[0];
            e.audio.pause(),
              (e.shuffle = !1),
              "true" == e.getAttribute("data-loop")
                ? ((e.repeat = "all"),
                  e.isPlayList ||
                    (audio.native
                      ? e.audio.setAttribute("loop", "true")
                      : (e.loop = !0)),
                  (i.className = "zpaudio-repeat zpaudio-select"),
                  (r.className = "zpaudio-repeat zpaudio-select"))
                : ((audio.repeat = "none"),
                  (e.repeat = "none"),
                  e.native ? e.audio.removeAttribute("loop") : (e.loop = !1),
                  (i.className = "zpaudio-repeat"),
                  (r.className = "zpaudio-repeat")),
              e.native
                ? (e.audio.setAttribute(
                    "autoplay",
                    e.getAttribute("data-autoplay")
                  ),
                  (e.audio.currentTime = 0))
                : (clearInterval(audio.timer), audio.setSeekTime(0)),
              l(e, e.audio.volume || 1);
          }
        },
        getPlayList: y,
      }
    );
  })(),
  transitionEnd = (function () {
    var e,
      t = document.createElement("div"),
      n = {
        transition: "transitionend",
        OTransition: "otransitionend",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
      };
    for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e];
  })(),
  animationEnd = (function () {
    var e,
      t = document.createElement("div"),
      n = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
      };
    for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e];
  })(),
  defaults = { remove: !0, callback: function () {} },
  distType = { short: 100, medium: 200, long: 350 },
  animation = {
    do: function (e, t, n) {
      e.style.removeProperty("transition"),
        _merge((n = n || {})),
        _css(e, t),
        n.remove &&
          e.addEventListener(
            transitionEnd,
            function (t, i, r, a) {
              for (var o in i)
                i.hasOwnProperty(o) &&
                  t.style.removeProperty(_getVendorPropertyName(o));
              r.callback && r.callback(e, i, n, a);
            }.bind(null, e, t, n)
          );
    },
    animateUsingName: function (e, t, n, i) {
      var r;
      e.style.removeProperty("animation"),
        i && e.addEventListener("animationstart", i),
        _merge((n = n || {})),
        _css(e, t),
        n.remove &&
          ((r = function (t, a, o, s) {
            for (var l in a)
              a.hasOwnProperty(l) &&
                t.style.removeProperty(_getVendorPropertyName(l));
            o.callback && o.callback(e, a, n, s),
              t.removeEventListener(animationEnd, r),
              i && t.removeEventListener("animationstart", i);
          }.bind(null, e, t, n)),
          e.addEventListener(animationEnd, r));
    },
    setFadeFinal: function (e, t) {
      this.forceRepaint(e),
        this.do(
          e,
          { transition: "transform " + t, opacity: 1 },
          {
            remove: !0,
            callback: function (e, t, n) {
              e.style.opacity = 1;
            },
          }
        );
    },
    fadeIn: function (e, t) {
      this.do(e, { opacity: 0 }), this.setFadeFinal(e, t);
    },
    fade_in: function (e, t) {
      this.fadeIn(e, t);
    },
    forceRepaint: function (e) {
      e.offsetHeight;
    },
    setFinalState: function (e, t) {
      this.forceRepaint(e),
        this.do(
          e,
          {
            transition: "all " + t,
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
          {
            remove: !0,
            callback: function (e, t, n) {
              e.style.opacity = 1;
            },
          }
        );
    },
    slide_from_top: function (e, t, n) {
      this.do(e, { transform: "translate3d(0, -" + distType[t] + "px, 0)" }),
        this.setFinalState(e, n);
    },
    slide_from_bottom: function (e, t, n) {
      this.do(e, { transform: "translate3d(0, " + distType[t] + "px, 0)" }),
        this.setFinalState(e, n);
    },
    slide_from_right: function (e, t, n) {
      this.do(e, { transform: "translate3d(" + distType[t] + "px, 0, 0)" }),
        this.setFinalState(e, n);
    },
    slide_from_left: function (e, t, n) {
      this.do(e, { transform: "translate3d(-" + distType[t] + "px, 0, 0)" }),
        this.setFinalState(e, n);
    },
    appear_from_top: function (e, t) {
      this.do(e, { transform: "translate3d(0, -" + e.clientHeight + "px, 0)" }),
        this.setFinalState(e, t);
    },
    appear_from_bottom: function (e, t) {
      this.do(e, { transform: "translate3d(0, " + e.clientHeight + "px, 0)" }),
        this.setFinalState(e, t);
    },
    appear_from_right: function (e, t) {
      this.do(e, { transform: "translate3d(" + e.clientWidth + "px, 0, 0)" }),
        this.setFinalState(e, t);
    },
    appear_from_left: function (e, t) {
      this.do(e, { transform: "translate3d(-" + e.clientWidth + "px, 0, 0)" }),
        this.setFinalState(e, t);
    },
    setExpandFinal: function (e, t) {
      this.forceRepaint(e),
        this.do(
          e,
          {
            transition: "transform " + t,
            opacity: 1,
            transform: "scale3d(1, 1, 1)",
          },
          {
            remove: !0,
            callback: function (e, t, n) {
              e.style.opacity = 1;
            },
          }
        );
    },
    expandOut: function (e, t) {
      this.forceRepaint(e),
        this.do(
          e,
          {
            transition: "transform " + t,
            opacity: 1,
            transform: "scale3d(1, 1, 1)",
          },
          {
            remove: !0,
            callback: function (e, t, n) {
              e.style.opacity = 1;
            },
          }
        );
    },
    expandOutDown: function (e, t) {
      this.forceRepaint(e),
        this.do(
          e,
          {
            transition: "transform " + t + "  ease",
            transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
          },
          {
            remove: !0,
            callback: function (e, t, n) {
              e.style.opacity = 1;
            },
          }
        );
    },
    setFinalPerspective: function (e) {
      this.forceRepaint(e), this.do(e, { transform: "rotateX(0deg)" });
    },
    perspective: function (e, t) {
      (e.style.perspective = "600px"),
        this.do(e.querySelector("img"), {
          transform: "rotateX(90deg)",
          "transform-origin": "bottom",
        }),
        this.setFinalPerspective(e.querySelector("img"), t);
    },
  },
  INDEXFORDATA = 0;
"live" === window.zs_rendering_mode &&
  menuVisibilityHandler(getCookie("serializedPermissionData").split(":")[0]);
var zsTools = (function () {
    "use strict";
    function e(e) {
      var n = e.split(":"),
        i = t(n[0]);
      e &&
        i &&
        (this[i] =
          n.length > 2
            ? (function (e) {
                return e.splice(1).join(":").trim();
              })(n)
            : t(n[1]));
    }
    function t(e) {
      return (e && e.trim()) || "";
    }
    function n(e, t, n) {
      function i(e) {
        return d.test(e);
      }
      function r() {
        var e;
        return (
          1 == f.length
            ? (e = h)
            : (g && f.pop(), (e = Array.prototype.concat.apply([], f))),
          e.join("")
        );
      }
      function a(n) {
        return t.p + (n || 0) < e.length;
      }
      var o,
        s,
        c,
        h = [],
        p = h,
        f = [h],
        m = !1,
        g = !1,
        v = !1;
      for (++t.p; a(); t.p++) {
        if (("\\" != c || a(1) || t.p++, (c = e[t.p]) === n)) return r();
        if (v) {
          if (c != n && !i(c)) throw "Character(s) after string consumption";
        } else {
          if (i(c)) {
            if (!o && !m) continue;
            g || ((p = []), f.push(p)), (g = !0);
          } else {
            if (o) {
              if (m && c === s) {
                v = !0;
                continue;
              }
            } else {
              if (!(m || (c !== l && c !== u))) {
                (m = !0), (s = c);
                continue;
              }
              o = c;
            }
            g = !1;
          }
          p.push(c);
        }
      }
      return r();
    }
    function i() {
      var e = window.console;
      e.log.apply(e, arguments);
    }
    function r() {
      (this.map = {}), (this.key = {}), (this.rev = {});
    }
    function a(e) {
      return e.__zsuid || e.__zsUniqueId;
    }
    var o = ";",
      s = ":",
      l = "'",
      u = '"',
      d = /\s/;
    (r.prototype = {
      get length() {
        return Object.keys(this.map).length;
      },
      add: function (e, t) {
        if ("object" != typeof e) throw new TypeError("Only Objects Supported");
        var n = a(e),
          i = t && a(t);
        (this.map[n] = e), t && ((this.key[i] = n), (this.rev[n] = i));
      },
      remove: function (e) {
        if (e) {
          var t = a(e),
            n = this.rev[t];
          delete this.map[t],
            n && (delete this.key[n], delete this.rev[t]),
            this.dispatch && 0 == this.length && this.dispatch();
        }
      },
      get: function (e) {
        var t = this.key[a(e)];
        return t && this.map[t];
      },
      removeByKey: function (e) {
        this.remove(this.get(e));
      },
      has: function (e) {
        return this.map.hasOwnProperty(a(e));
      },
      clear: function () {
        var e = this;
        Object.keys(this.map).forEach(function (t) {
          e.remove(e.map[t]);
        });
      },
      onEmpty: function (e, t) {
        this.dispatch = e.bind(t);
      },
      isEmpty: function () {
        return 0 === this.length;
      },
      forEach: function (e, t) {
        var n = this;
        Object.keys(this.map).forEach(function (i) {
          e.call(t || null, n.map[i]);
        });
      },
    }),
      (function () {
        if (void 0 === Object.prototype.__zsUniqueId) {
          var e = 0;
          Object.defineProperty(Object.prototype, "__zsUniqueId", {
            get: function () {
              return (
                void 0 === this.__zsuid &&
                  Object.defineProperty(this, "__zsuid", { value: ++e }),
                this.__zsuid
              );
            },
          });
        }
      })(),
      window.Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            i = this;
          do {
            for (t = n.length; --t >= 0 && n.item(t) !== i; );
          } while (t < 0 && (i = i.parentElement));
          return i;
        }),
      Element.prototype.isSameNode ||
        (Element.prototype.isSameNode = function (e, t) {
          return $D.isNode(e) && e === t;
        }),
      Array.prototype.filter ||
        (Array.prototype.filter = function (e, t) {
          if ("function" != typeof e || !this) throw new TypeError();
          var n = this.length >>> 0,
            i = new Array(n),
            r = 0,
            a = -1;
          if (void 0 === t)
            for (; ++a !== n; )
              a in this && e(this[a], a, this) && (i[r++] = this[a]);
          else
            for (; ++a !== n; )
              a in this && e.call(t, this[a], a, this) && (i[r++] = this[a]);
          return (i.length = r), i;
        });
    return {
      oldParser: {
        parse: function (t) {
          if (!t) return null;
          var n = {};
          return t.split(";").forEach(e, n), n;
        },
      },
      attrParser: {
        parse: function (e) {
          if ("string" != typeof e) return null;
          try {
            for (
              var t, r, a = {}, l = { p: -1 };
              l.p < e.length - 1 && "" != (t = n(e, l, s));

            )
              (r = n(e, l, o)), (a[t] = r);
            return a;
          } catch (e) {
            i("Syntax Error while parsing input : ", e);
          }
        },
      },
      ZSHashSet: r,
      log: i,
    };
  })(),
  zpThemeMenu = (function () {
    "use strict";
    function e(e, t) {
      return t && e && e.isSameNode(t);
    }
    function t(e, t, n, i, r, a) {
      (this.p1x = e),
        (this.p1y = t),
        (this.p2x = n),
        (this.p2y = i),
        (this.p3x = r),
        (this.p3y = a),
        (this.ul = null),
        (this.over = null),
        (this.watching = null);
    }
    function n(e) {
      return e < F;
    }
    function i(e, t) {
      return e == t
        ? null
        : ze[e >= F ? (t < F ? "d2m" : "d2d") : t >= F ? "m2d" : "m2m"];
    }
    function r(e, t) {
      var n = "[" + e;
      return t && (n += '="' + t + '"'), (n += "]");
    }
    function a(e) {
      var t = 0,
        n = $D.getAll("[data-header]", $e);
      n &&
        n.length > 0 &&
        "none" != n[0].getAttribute("data-header") &&
        (t = n[0].clientHeight),
        window.IntersectionObserver
          ? (function () {
              for (
                var e = $D.getAll("." + ye, document),
                  t = {
                    root: null,
                    rootMargin: "0px",
                    threshold: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
                  },
                  n = 0;
                n < e.length;
                n++
              )
                if (e[n].id && "" != e[n].id) {
                  var i = e[n],
                    r = new IntersectionObserver(b, t);
                  r.observe(i);
                }
              (r = new IntersectionObserver(b, t)).observe(
                document.body.firstElementChild
              );
            })()
          : $E.bind(Ee, "scroll", w),
        $E.bind(Ee, "hashchange", function (e) {
          var n = Ee.location.hash,
            i = document.getElementById(n.replace(/^#/, ""));
          if (i) {
            $D.getAll(De, document).forEach(function (e) {
              R(null, e, !0);
            }),
              Ee.scrollTo(0, $D.offset(i).top - t);
          }
        });
    }
    function o(t, n) {
      var i,
        r,
        a = this,
        o = $D.get("ul", a),
        l = o && o.firstElementChild,
        u = (o && o.lastElementChild, $D.get("ul", n));
      U.init(u);
      var d = !1,
        c = (function (e, t, n) {
          var i,
            r = !1;
          return function () {
            function a() {
              clearTimeout(i);
            }
            function o() {
              r || ((r = !0), a(), e.apply(s, l));
            }
            var s = this,
              l = arguments,
              u = n && !i;
            return (
              a(),
              (i = setTimeout(function () {
                (i = null), n || o();
              }, t)),
              u && o(),
              { cancel: a, now: o }
            );
          };
        })(
          function () {
            if (
              ((d = !0),
              j.forEach(function (t) {
                clearTimeout(t.val);
                var n = t.el;
                n.contains(a) || e(n, a) || s.call(n, t);
              }),
              j.clear(),
              l)
            ) {
              i = B(n);
              var r = L(),
                c = p(l),
                h =
                  ((function (e) {
                    (e = e || Ee).document.documentElement.clientHeight;
                  })(),
                  $D.findParentByTag(a, "ul"));
              ((h && $D.hasClass(h, i[G])) || c.right + we > r) &&
                $D.addClass(o, i[G]),
                U.bound(o, i[G], a),
                U.vertex(t),
                U.watch(u);
            }
          },
          ke,
          !0
        );
      (r = c()),
        (U.bounce = null),
        l &&
          $E.bind(a, "mouseleave", function e(t) {
            d || ((i = B(n)), r.cancel());
            var l = { el: a, ul: o, watch: u, data: i };
            (l.val = setTimeout(s.bind(a, l), Ie)),
              j.add(l, a),
              $E.unbind(a, "mouseleave", e);
          });
    }
    function s(e) {
      clearTimeout(e.val);
      var t = e.ul;
      $D.removeClass(t, e.data[G]), j.remove(e);
    }
    function l() {
      for (var e = 0, t = 0; t < arguments.length; t++)
        e += (function (e) {
          return Number(e.replace("px", ""));
        })(arguments[t]);
      return e;
    }
    function u(t, n, i, r) {
      if (e(t.lastElementChild, n)) {
        var a = n && window.getComputedStyle(n),
          o = n && window.getComputedStyle(t.firstElementChild),
          s = i.firstElementChild.cloneNode(!0);
        (s.style.visibility = "hidden"),
          "none" == s.style.display && (s.style.display = ""),
          k(s, "." + r[K], r, !1),
          $D.insertAfter(s, n);
        try {
          if (T(t.firstElementChild, s)) return !0;
          if (1 === i.childElementCount) {
            var u = (function (e) {
                var t = window.getComputedStyle(e);
                return (
                  l(
                    t.marginLeft,
                    t.marginRight,
                    t.paddingLeft,
                    t.paddingRight,
                    d(t.borderRight),
                    d(t.borderLeft)
                  ) + p(e).width
                );
              })(s),
              c = p(t),
              h =
                c.right -
                (p(n).left - l(a.marginLeft, a.paddingLeft, d(a.borderLeft))),
              f =
                p(t.firstElementChild).left -
                  l(o.marginLeft, o.paddingLeft, d(o.borderLeft)) -
                  c.left +
                  h >=
                u;
            return T(t.firstElementChild, n) && f;
          }
          return !1;
        } finally {
          $D.remove(s);
        }
      }
    }
    function d(e) {
      return be.test(e) ? be.exec(e)[0] : "";
    }
    function c(e, t) {
      var n = t.lastElementChild,
        i = $D.get("a", n);
      return i.textContent.trim() === e[Z] && le.test(i.protocol)
        ? (n.setAttribute(ce, e[ee]), n)
        : null;
    }
    function h(e) {
      return document.createElement(e);
    }
    function p(e) {
      return e.getBoundingClientRect();
    }
    function f(e) {
      var t;
      try {
        t = B(e);
      } catch (e) {
        return;
      }
      var i = $D.get("ul", e);
      if (i && 0 != i.childElementCount) {
        i.setAttribute(ve, "");
        n(L(Ee))
          ? (c(t, i) && S(i, t), y(e, t), g(e, i, t))
          : (A(i, t), m(e, i, t)),
          $E.bind(e, "zsMenu:rewrap", O.bind(null, e));
        var r,
          a,
          o = Ee[ge];
        o &&
          (r = (function (e, t) {
            var n = 'li > a[href="' + t + '"]',
              i = "ul[" + ve + "] > " + n;
            return $D.get(i, e) || $D.get(n, e);
          })(e, o)) &&
          (a = $D.findParentByTag(r, "li")) &&
          t.active &&
          $D.addClass(a, t.active);
      }
    }
    function m(e, t, n) {
      $D.getAll("li", t).forEach(function (t) {
        $E.bind(t, "mouseenter", o, { args: e });
      });
    }
    function g(e, t, n) {
      var i = z(ue, n);
      i && $E.bind(i, "click", R, { args: e });
      $D.getAll("." + n[Q], t).forEach(function (t) {
        $E.bind(t, "click", H, { args: e });
        var n = t.parentElement;
        "javascript:;" == n.getAttribute("href") &&
          $E.bind(n, "click", H, { args: e });
      }),
        $E.bind(t, "click", v, { args: e });
    }
    function v(e, t) {
      var n = e.target;
      if (n.matches("a")) {
        var i = window.location;
        i.origin === n.origin &&
          i.hash === n.hash &&
          i.pathname === n.pathname &&
          R(e, t, !0);
      }
    }
    function y(e, t) {
      var n = r(he, t[ee]),
        i = $D.get(n);
      i && $D.append(i, e);
    }
    function b(e, t) {
      e.forEach(function (e) {
        var t = parseFloat(e.intersectionRatio.toFixed(1));
        if (e.isIntersecting) {
          -1 != (n = Be.indexOf(e.target.id)) &&
            (Te.splice(n, 1), Be.splice(n, 1)),
            Te.push(e),
            Be.push(e.target.id);
        } else if (0 == t && !e.isIntersecting) {
          var n;
          -1 != (n = Be.indexOf(e.target.id)) &&
            (Te.splice(n, 1), Be.splice(n, 1));
        }
        for (var i, r, a = 0; a < Te.length; a++)
          _(Te[a].target) &&
            (!r || r > Te[a].target.offsetTop) &&
            ((i = Te[a].target), (r = Te[a].target.offsetTop));
        if (!i && Te.length > 0) {
          parseFloat(Te[0].intersectionRatio.toFixed(1)) > 0.5 &&
            ((i = Te[0].target), (r = Te[0].target.offsetTop));
        }
        i && C(i);
      });
    }
    function w(e) {
      e.preventDefault();
      for (var t, n = $D.getAll("." + ye, document), i = 0; i < n.length; i++)
        if (n[i].id && "" != n[i].id && _(n[i], e)) {
          t = n[i];
          break;
        }
      t && C(t);
    }
    function C(e) {
      V && clearTimeout(V),
        (V = setTimeout(function () {
          var t = $D.getAll(De, document);
          e
            ? t.forEach(
                function (e, t, n, i) {
                  var r = e.id;
                  $D.hasClass(e, ye) || (r = "");
                  E(r, t);
                }.bind(null, e)
              )
            : t.forEach($);
        }, 50));
    }
    function $(e, t, n) {
      E("", e);
    }
    function E(e, t) {
      var n;
      try {
        n = B(t);
      } catch (e) {
        return;
      }
      var i = $D.get("li." + n.active, t);
      i && $D.removeClass(i, n.active), (e = "" != e ? "#" + e : "");
      var r = Ee[ge],
        a = $D.get('li > a[href="' + r + e + '"]', t);
      if ((a = a || $D.get('li > a[href="' + r + '"]', t))) {
        var o = $D.findParentByTag(a, "li");
        o && n.active && $D.addClass(o, n.active),
          "" == e
            ? window.history.replaceState(
                "",
                "",
                window.location.pathname + window.location.search
              )
            : window.location.hash != e &&
              window.history.replaceState("", "", e),
          "canvas" === window.zs_rendering_mode &&
            window.frameElement &&
            !window.frameElement.hasAttribute("data-hidden-frame") &&
            ("" == e
              ? parent.window.history.replaceState(
                  "",
                  "",
                  parent.window.location.pathname +
                    parent.window.location.search
                )
              : parent.window.location.hash != e &&
                parent.window.history.replaceState("", "", e));
      }
    }
    function _(e, t) {
      return (
        document.documentElement.scrollTop >
          e.offsetTop - window.innerHeight / 2 &&
        document.documentElement.scrollTop <
          e.offsetTop + e.clientHeight - window.innerHeight / 2
      );
    }
    function D(e) {
      var t = L(Ee),
        r = i(_e, t);
      if (null == r) return n(L(Ee)) || $D.getAll(De).forEach(O), !1;
      var a = $D.getAll(De);
      switch (r) {
        case ze.d2m:
          a.forEach(P);
          break;
        case ze.m2d:
          a.forEach(q);
          break;
        case ze.d2d:
          a.forEach(O);
          break;
        case ze.m2m:
          a.forEach(x);
      }
      _e = t;
    }
    function x(e) {
      var t = B(e),
        n = z(fe, t),
        i = t[te];
      $D.hasClass(n, i) &&
        $E.dispatch(e, "zsMenu:orientationchange", { menu: e });
    }
    function z(e, t, n) {
      return (n = n || $e), $D.get(r(e, t[ee]), n);
    }
    function A(e, t) {
      var n = z(ce, t, e) || c(t, e),
        i = n && $D.get("ul", n),
        r = t[K],
        a = t[Y] == xe.VER ? t[X] : 2;
      if (i) {
        for (
          ;
          n &&
          i &&
          i.firstElementChild &&
          (t[Y] === xe.HOR ? 100 : a) > e.childElementCount &&
          (t[Y] === xe.VER || u(e, n, i, t));

        )
          $D.insertBefore(n, k(i.firstElementChild, "." + r, t, !1));
        i && null == i.firstElementChild && ($E.purge(n), $D.remove(n));
      }
      for (
        ;
        (t[Y] === xe.VER && e.childElementCount > a) ||
        (t[Y] === xe.HOR && !T(e.firstElementChild, e.lastElementChild));

      ) {
        if (null == n) {
          var o = I(t);
          (n = o.moreMenu), (i = o.moreUl);
        }
        if (
          (i.firstElementChild
            ? $D.insertBefore(
                i.firstElementChild,
                k(n.previousElementSibling, "." + r, t, !0)
              )
            : ($D.append(i, k(e.lastElementChild, "." + r, t, !0)),
              $D.append(e, n)),
          e.childElementCount <= a)
        )
          break;
      }
    }
    function I(e) {
      var t = (function (e, t) {
          var n = h("a"),
            i = h("li"),
            r = h("ul");
          e[J] && $D.addClass(r, e[J]), (n.innerHTML = e[Z]);
          for (var a = z(de, e).children, o = 0; a && o < a.length; o++)
            $D.append(n, a[o].cloneNode());
          return (
            $D.append(i, n), $D.append(i, r), t && i.setAttribute(ce, e[ee]), i
          );
        })(e, !0),
        n = $D.get("ul", t),
        i = e[K];
      if (n && i) {
        var r = $D.get("." + i, t);
        r && e[oe] && $D.addClass(r, e[oe]);
      }
      return { moreMenu: t, moreUl: n };
    }
    function k(e, t, n, i) {
      var r;
      return (
        e &&
          t &&
          (r = $D.get(t, e)) &&
          (i
            ? ($D.removeClass(r, n[oe]), $D.addClass(r, n[se]))
            : ($D.removeClass(r, n[se]), $D.addClass(r, n[oe]))),
        e
      );
    }
    function S(e, t) {
      var n = z(ce, t, e),
        i = n && $D.get("ul", n),
        r = z(de, t) && t[K];
      if (n && i) {
        for (; i.firstElementChild; )
          $D.insertBefore(n, k(i.firstElementChild, "." + r, t, !1));
        $E.purge(n), $D.remove(n);
      }
    }
    function T(e, t) {
      return p(e).top === p(t).top;
    }
    function B(e) {
      var t = (function (e) {
        return zsTools.oldParser.parse(M(e, me));
      })(e);
      return t
        ? (Ce.forEach(function (e) {
            t[e.key] = t[e.key] || e.val || "";
          }),
          t)
        : t;
    }
    function M(e, t) {
      var n = e.getAttribute(t);
      return n && n.trim();
    }
    function L(e) {
      return (e = e || Ee).document.documentElement.clientWidth;
    }
    function O(e) {
      var t = B(e),
        n = $D.get("ul", e);
      n && 0 != n.childElementCount && A(n, t);
    }
    function N(e) {
      S($D.get("ul", e), B(e));
    }
    function q(e) {
      var t = $D.get("ul", e),
        n = B(e);
      !(function (e, t, n) {
        var i = z(ue, n);
        i && $E.unbind(i, "click", R),
          $D.getAll("." + n[Q], t).forEach(function (e) {
            $E.unbind(e, "click", H);
            var t = e.parentElement;
            "javascript:;" == t.getAttribute("href") &&
              $E.unbind(t, "click", H);
          }),
          $E.unbind(t, "click", v);
      })(0, t, n),
        (function (e, t) {
          var n = r(pe, t[ee]),
            i = $D.get(n);
          i && $D.append(i, e);
        })(e, n),
        (function (e, t) {
          if (t.childElementCount > Se) {
            for (
              var n = I(e), i = n.moreMenu, r = n.moreUl;
              t.children[Se - 1];

            )
              $D.append(r, k(t.children[Se - 1], "." + e[K], e, !0));
            $D.append(t, i);
          }
        })(n, t),
        setTimeout(function () {
          A(t, n), m(e, t);
        }, Ae);
    }
    function P(e) {
      var t = $D.get("ul", e),
        n = B(e);
      !(function (e, t, n) {
        $D.getAll("li", t).forEach(function (e) {
          $E.unbind(e, "mouseenter", o);
        });
      })(0, t),
        S(t, n),
        y(e, n),
        g(e, t, n);
    }
    function R(e, t, n) {
      var i = B(t),
        r = z(fe, i),
        a = i[te],
        o = i[ne],
        s = i[ie],
        l = "zsMenu:burgerIcon:";
      if ($D.hasClass(r, a)) {
        $D.removeClass(r, a), $D.removeClass(t, o), $D.addClass(t, s);
        for (
          var u, d = $D.get("ul", t).children, c = i[Q], h = i[ae], p = 0;
          p < d.length;
          p++
        )
          (u = $D.get("." + c, d[p])) &&
            $D.hasClass(u, h) &&
            H.call(u, null, t);
        l += "close";
      } else
        n ||
          ($D.addClass(r, a),
          $D.removeClass(t, s),
          $D.addClass(t, o),
          (l += "open"));
      $E.dispatch(t, l, { menu: t, burgerIcon: r });
    }
    function H(e, t) {
      function n(e, t) {
        e && (e.style.display = t ? "block" : "none");
      }
      if (!e || !e.__actionDone) {
        var i = this;
        "SPAN" != i.tagName && (i = i.children[1]);
        var r = B(t),
          a = r[ae],
          o = r[re],
          s = $D.findParentByTag(i, "li");
        if ($D.hasClass(i, o)) {
          $D.removeClass(i, o), $D.addClass(i, a);
          n($D.get("ul", s), !0);
        } else
          for (
            var l = $D.getAll('ul[style="display: block;"]', s),
              u = $D.getAll("." + a, s),
              d = 0;
            d < l.length;
            d++
          )
            $D.removeClass(u[d], a), $D.addClass(u[d], o), n(l[d], !1);
        e && e.preventDefault(), e && (e.__actionDone = !0);
      }
    }
    var F,
      j,
      U,
      V,
      W,
      X = "maxitem",
      G = "position",
      Y = "orientation",
      J = "submenu",
      Z = "moretext",
      K = "nonresponsive-icon-el",
      Q = "responsive-icon-el",
      ee = "id",
      te = "burger-close-icon",
      ne = "animate-open",
      ie = "animate-close",
      re = "open-icon",
      ae = "close-icon",
      oe = "root-icon",
      se = "subtree-icon",
      le = /^(javascript:|:)?$/,
      ue = "data-zp-burger-clickable-area",
      de = "data-zp-submenu-icon",
      ce = "data-zp-more-menu",
      he = "data-zp-responsive-container",
      pe = "data-zp-nonresponsive-container",
      fe = "data-zp-theme-burger-icon",
      me = "data-zp-theme-menu",
      ge = "zs_resource_url",
      ve = "data-zp-menu-top",
      ye = "zpsection",
      be = /(\d+(\.\d+)?)px/,
      we = 15,
      Ce = [{ key: Z, val: "More" }],
      $e = document,
      Ee = window,
      _e = L(Ee),
      De = r(me),
      xe = Object.freeze({ HOR: "horizontal", VER: "vertical" }),
      ze =
        (Object.freeze({ mobile: "mobile", desktop: "desktop" }),
        Object.freeze({ d2m: "d2m", m2d: "m2d", m2m: "m2m", d2d: "d2d" })),
      Ae = 300,
      Ie = 0,
      ke = 0,
      Se = 5,
      Te = [],
      Be = [],
      Me = [],
      Le = !1;
    t.prototype = {
      init: function (t) {
        function n() {
          $E.unbind(i.ul, "mouseleave", n),
            (i.ul = null),
            (i.ulClear = setTimeout(function () {
              j.forEach(s);
            }, Ie));
        }
        var i = this;
        e(t, i.ul) ||
          (clearTimeout(i.ulClear), $E.bind(t, "mouseleave", n), (i.ul = t));
      },
      has: function (e, t) {
        return (function (e, t, n, i, r, a, o, s) {
          var l = [o - n, s - i],
            u = [r - n, a - i],
            d = [e - n, t - i],
            c = l[0] * l[0] + l[1] * l[1],
            h = l[0] * u[0] + l[1] * u[1],
            p = l[0] * d[0] + l[1] * d[1],
            f = u[0] * u[0] + u[1] * u[1],
            m = u[0] * d[0] + u[1] * d[1],
            g = 1 / (c * f - h * h),
            v = (f * p - h * m) * g,
            y = (c * m - h * p) * g;
          return v >= 0 && y >= 0 && v + y < 1;
        })(e, t, this.p1x, this.p1y, this.p2x, this.p2y, this.p3x, this.p3y);
      },
      mouseMoved: function (t) {
        var n =
            !t.target.matches("[data-zp-theme-menu] > ul") &&
            t.target.closest("li"),
          i = !1;
        if (!this.bounce && n && !e(n, this.over)) {
          var r = j.get(this.over);
          r && s.call(s, r), this.bound($D.get("ul", n), this.pos, n), (i = !0);
        }
        var a = !1;
        if (
          ((i || this.has(t.clientX, t.clientY)) && (a = !0),
          (this.p1x = t.clientX),
          (this.p1y = t.clientY),
          Le)
        ) {
          var o =
            this.p1x +
            "," +
            this.p1y +
            " " +
            this.p2x +
            "," +
            this.p2y +
            " " +
            this.p3x +
            "," +
            this.p3y;
          $D.getById("svg-polygon").setAttribute("points", o);
        }
        return (
          a || (this.bounce && (this.bounce.ctrl.now(), (this.bounce = null))),
          a
        );
      },
      vertex: function (e) {
        this.mouseMoved(e);
      },
      bound: function (e, t, n) {
        if (e) {
          var i = p(e.firstElementChild),
            r = p(e.lastElementChild),
            a = !$D.hasClass(e, t);
          (this.p2x = a ? i.left : i.right),
            (this.p2y = i.top),
            (this.p3x = a ? i.left : i.right),
            (this.p3y = r.bottom),
            (this.over = n),
            (this.pos = t);
        }
      },
      watch: function (t) {
        e(t, this.watching) ||
          (this.unwatch(),
          (this.watching = t),
          (this.boundFn = (function (e, t, n) {
            var i = new Date().getTime();
            return function () {
              var r = new Date().getTime();
              r - i >= e && ((i = r), t.apply(n || null, arguments));
            };
          })(0, this.mouseMoved, this)),
          $E.bind(t, "mousemove", this.boundFn),
          Le && ($D.getById("SVG-DEBUG").style.display = null));
      },
      unwatch: function () {
        var e = this.watching;
        $E.unbind(e, "mousemove", this.boundFn),
          (this.watching = null),
          (this.boundFn = null),
          Le && ($D.getById("SVG-DEBUG").style.display = "none");
      },
      entered: function (t) {
        !this.watching ||
          (e(t.closest("ul"), this.over) && $D.get("ul", t)) ||
          this.unwatch();
      },
      trace: function () {
        function e(e) {
          return $e.createElementNS(t, e);
        }
        if (Le) {
          var t = "http://www.w3.org/2000/svg";
          if (!$D.getById("SVG-DEBUG")) {
            var n = e("svg");
            (n.id = "SVG-DEBUG"), n.setAttribute("class", "svgelement");
            var i = e("polygon");
            (i.id = "svg-polygon"),
              i.setAttribute("points", "200,10 250,190 160,210"),
              n.append(i),
              $D.getById("svg-placeholder").append(n);
          }
        }
      },
    };
    var Oe = !1;
    if (void 0 !== zsApp && zsApp.checkAppStatus())
      "scrollingElement" in document &&
        (document.scrollingElement.style.scrollBehavior = "smooth"),
        $E.callOnLoad(function (e) {
          var t = 0,
            n = document.body,
            i = $D.getAll("[data-header]", n);
          if (
            (i &&
              i.length > 0 &&
              "none" != i[0].getAttribute("data-header") &&
              (t = i[0].clientHeight),
            window.location.hash && 0 != t)
          ) {
            var r = document.getElementById(Ee.location.hash.replace(/^#/, ""));
            if (r) {
              function o() {
                if (
                  (W && clearTimeout(W),
                  (t = $D.getAll("[data-header]", n)[0].clientHeight),
                  Me.push($D.offset(r).top),
                  Me.length < 10)
                ) {
                  var e = Me.slice(
                    Me.length - 3 < 0 ? 0 : Me.length - 3,
                    Me.length
                  ).filter(function (e, t, n) {
                    return n.indexOf(e) === t;
                  });
                  Me.length > 4 && 1 == e.length
                    ? (Ee.scrollTo(0, $D.offset(r).top - t),
                      clearTimeout(W),
                      (W = null),
                      a())
                    : (W = setTimeout(o, 100));
                } else (W = null), a();
              }
              W = setTimeout(o, 100);
            } else a();
          } else a();
        });
    else {
      "scrollingElement" in document &&
        (document.scrollingElement.style.scrollBehavior = "smooth");
      var Ne = Ee.location.hash.replace(/^#/, "");
      "" != Ne
        ? ($E.bind(document.body, "zsapps:loaded", function () {
            !(function (e) {
              var t = document.getElementById(e),
                n = 0,
                i = document.body,
                r = $D.getAll("[data-header]", i);
              r &&
                r.length > 0 &&
                "none" != r[0].getAttribute("data-header") &&
                (n = r[0].clientHeight),
                t && Ee.scrollTo(0, $D.offset(t).top - n),
                Oe || (a(), (Oe = !0));
            })(Ne);
          }),
          setTimeout(function () {
            Oe || (a(), (Oe = !0));
          }, 7e3))
        : $E.callOnLoad(a);
    }
    return (
      zsUtils.onDocumentReady(function () {
        F = Number(M($e.body, "data-zp-theme-responive-width")) || 992;
        var e = $D.getAll(De, $e),
          t = $D.get(".theme-header", $e);
        e.length > 0 &&
          (e.forEach(f),
          t && zsUtils.onImageLoad(t, D),
          $E.bind(Ee, "load", D));
      }),
      $E.bind(Ee, "resize", D),
      $E.callOnLoad(function (e, n) {
        (n = n || $e),
          $D.getAll(De, n).length > 0 &&
            ((j = new zsTools.ZSHashSet()), (U = new t()), Le && U.trace());
      }),
      {
        init: f,
        rewrap: O,
        rewrapAll: function () {
          for (
            var e, t = $D.getAll("[data-zp-theme-menu]", document.body), n = 0;
            (e = t[n]);
            n++
          )
            O(e);
        },
        destruct: N,
        destroy: function (e) {
          N(e), $E.purge(e);
        },
      }
    );
  })(),
  zpAnimation = (function () {
    "use strict";
    function e(e) {
      for (
        var n = new IntersectionObserver(t, { threshold: [0, 0.5, 0.75, 1] }),
          i = 0;
        i < e.length;
        i++
      )
        n.observe(e[i]);
    }
    function t(e) {
      e.forEach(function (e) {
        var t = parseFloat(e.intersectionRatio.toFixed(1)),
          a = e.target;
        a.isVisible = (function (e, t) {
          return t.height > 0;
        })(e.boundingClientRect, e.intersectionRect);
        var o = a.getAttribute("data-animation-repeat") || "false",
          s = i.indexOf(e.target),
          l = r.indexOf(a),
          u = !1;
        0 != t || e.isIntersecting || a.isVisible
          ? t >= 0.5 && -1 == l && (r.push(a), (u = !0))
          : ("true" == o && -1 != s && i.splice(s, 1),
            -1 != l && r.splice(l, 1)),
          t >= 0.5 &&
            e.isIntersecting &&
            u &&
            -1 == s &&
            (i.push(e.target),
            a.isVisible &&
              n(
                a,
                function (e) {
                  if ("canvas" === window.zs_rendering_mode) return;
                  var t = i.indexOf(e);
                  "true" ==
                    (e.getAttribute("data-animation-repeat") || "false") &&
                    -1 != t &&
                    i.splice(t, 1);
                }.bind(null, a)
              ));
      });
    }
    function n(e, t) {
      var n = e.getAttribute("data-animation-name");
      if (n && "" != n) {
        var i = e.getAttribute("data-animation-duration") || "1s",
          r = {};
        (r["animation-name"] = n), (r["animation-duration"] = i);
        var a = {};
        (a.remove = !0),
          t && (a.callback = t),
          animation.animateUsingName(e, r, a);
      }
    }
    var i = [],
      r = [];
    return (
      $E.callOnLoad(function () {
        "canvas" !== window.zs_rendering_mode &&
          window.IntersectionObserver &&
          e(document.querySelectorAll("[data-animation-name]"));
      }),
      { bindAnimationObserver: e, animateElement: n }
    );
  })(),
  grid_animate = (function () {
    function e(e) {
      if (e)
        for (
          var n,
            r = (function () {
              i ||
                (i = new IntersectionObserver(t, {
                  threshold: [0, 0.5, 0.75, 1],
                }));
              return i;
            })(),
            s = 0;
          (n = e[s]);
          s++
        )
          if (-1 == o.indexOf(n)) {
            o.push(n);
            var l = n.getAttribute("data-grid-animation-name"),
              u = a[l] ? a[l].preAnimateClass : null;
            if ("" != l && "none" != l)
              for (var d = 0, c = n.children.length; d < c; d++)
                r.observe(n.children[d]), u && $D.addClass(n.children[d], u);
          }
    }
    function t(e) {
      var t = 0;
      e.forEach(function (e) {
        var n = e.intersectionRatio,
          r = e.target;
        r.isVisible = (function (e, t) {
          return t.height > 0;
        })(e.boundingClientRect, e.intersectionRect);
        var o =
            r.parentElement.getAttribute("data-grid-animation-repeat") ||
            "false",
          u = s.indexOf(r),
          d = !1;
        if ("true" == o && 0 == n) {
          -1 != u && s.splice(u, 1);
          var c = r.parentElement.getAttribute("data-grid-animation-name"),
            h = (a[c] && a[c].preAnimateClass) || null;
          h && $D.addClass(r, h);
        } else n >= 0.5 && e.isIntersecting && -1 == u && r.isVisible && ((d = !0), s.push(r));
        d &&
          (t++,
          l(
            r,
            function (e) {
              if ("canvas" !== window.zs_rendering_mode) {
                var t = s.indexOf(e),
                  n =
                    e.parentElement.getAttribute(
                      "data-grid-animation-repeat"
                    ) || "false";
                "true" == n && -1 != t && s.splice(t, 1),
                  "true" != n && i.unobserve(e);
              }
            }.bind(null, r),
            t
          ));
      });
    }
    var n,
      i,
      r = {
        row_gallery: '[data-layout-type="row"]',
        square_gallery: '[data-layout-type="square"]',
      },
      a = {
        zoomIn: { preAnimateClass: "gridHide" },
        rollIn: { preAnimateClass: "gridHide" },
        flipInY: { preAnimateClass: "gridHide" },
        flipInX: { preAnimateClass: "gridHide" },
        bounceIn: { preAnimateClass: "gridHide" },
        fadeIn: { preAnimateClass: "gridHide" },
        rotateIn: { preAnimateClass: "gridHide" },
        lightSpeedIn: { preAnimateClass: "gridHide" },
      },
      o = [],
      s = [],
      l = function (e, t, n) {
        var i = e.parentElement.getAttribute("data-grid-animation-name");
        if (i && "" != i) {
          var r = (a[i] && a[i].preAnimateClass) || null,
            o =
              e.parentElement.getAttribute("data-grid-animation-duration") ||
              "1s",
            s = e.parentElement.getAttribute("data-grid-animation-timing"),
            l = {};
          "same" == s && (n = 0),
            (l["animation-delay"] =
              "random" == s
                ? (function (e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e + "ms";
                  })(100, 1500)
                : (function (e) {
                    return e ? 200 * e + "ms" : "100ms";
                  })(n)),
            (l["animation-name"] = i),
            (l["animation-duration"] = o);
          var u = {};
          (u.remove = !0), t && (u.callback = t);
          var d =
            r &&
            "" != r &&
            function (e) {
              $D.removeClass(e, r);
            }.bind(null, e);
          animation.animateUsingName(e, l, u, d);
        }
      };
    return {
      bindAnimation: function (t) {
        var i = (r[t] || "") + "[data-grid-animation-name]";
        "canvas" !== window.zs_rendering_mode &&
          window.IntersectionObserver &&
          e((n = document.querySelectorAll(i)));
      },
      previewGridAnimate: function (e, t) {
        if (e)
          for (
            var n,
              i = [],
              r = function (e, t) {
                var n = i.indexOf(e);
                -1 != n && (i.splice(n, 1), 0 == i.length && t());
              },
              a = e.hasAttribute("data-grid-animation-name")
                ? e
                : $D.get("[data-grid-animation-name]", e),
              o = 0;
            (n = a.children[o]);
            o++
          )
            t ? (i.push(n), l(n, r.bind(null, n, t), o)) : l(n, null, o);
      },
    };
  })();
!(function (e, t) {
  e.zsSlider = (function () {
    "use strict";
    function e(e, t) {
      return t || (t = j), t.querySelector(e);
    }
    function t(e, t) {
      return t || (t = j), t.querySelectorAll(e);
    }
    function n(e, t) {
      return t || (t = j), t.getElementsByClassName(e);
    }
    function i(e, t) {
      var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
      return n.test(e.className);
    }
    function r(e, t) {
      i(e, t) || (e.className += " " + t);
    }
    function a(e, t) {
      var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
      n.test(e.className) && (e.className = e.className.replace(n, " "));
    }
    function o(e, t, n) {
      return n === U ? e.getAttribute(t) : e.setAttribute(t, n);
    }
    function s(e, t, n) {
      t.addEventListener(e, n);
    }
    function l(e, t, n) {
      t.removeEventListener(e, n);
    }
    function u(e, t) {
      return e.hasOwnProperty(t);
    }
    function d(e, t) {
      for (var n = e.length - 1; n >= 0; n--)
        for (var i in t) u(t, i) && a(e[n], t[i]);
    }
    function c(e, t) {
      function n(e) {
        s++,
          e.complete
            ? i()
            : ($E.bind(e, "load", i),
              $E.bind(e, "error", i),
              /MSIE|Trident/.test(navigator.userAgent) && (e.src = e.src));
      }
      function i() {
        s--, $E.unbind(this, "load", i), $E.unbind(this, "error", i), r();
      }
      function r() {
        o || (a && 0 === s && ((o = !0), t()));
      }
      if (!e || !t)
        throw new TypeError("Element and callback both are necessary");
      var a,
        o,
        s = 0;
      e && "IMG" == e.tagName && n(e);
      for (var l = e.getElementsByTagName("IMG"), u = 0; u < l.length; u++)
        n(l[u]);
      (a = !0), r();
    }
    function h(e, t) {
      return Number(e) || t;
    }
    function p(e) {}
    function f(e) {}
    function m(t) {
      var n = t.container;
      this.sliderCont = n;
      var i = (this.hero = $D.matches(n, E) ? n : e(E, n));
      this._parse(),
        (this.slides = null),
        (this.animateId = null),
        (this.curSlideIndex = 0),
        (this.nextSlideIndex = 1),
        (this.transitionName = null),
        (this.autoslide =
          this.hero.hasAttribute(D) &&
          "true" == this.hero.getAttribute(D).trim()),
        (this.transitionCounter = 0),
        (this.slidesCount = null),
        (this.minHeightEl = this[L] ? $D.get("." + this[L], n) : n),
        (this.sliderInterval = h(o(i, "data-slider-interval"), 5e3)),
        (this.transitionDuration = h(o(i, "data-transition-time"), 1)),
        (this.fnRefs = { anim: [], links: [], tabs: [], trans: U });
    }
    function g() {
      for (var e = 0; e < H.length; e++) v(H[e].instance);
      H.length > 0 && $E.dispatch(document.body, "slider:orientationchange");
    }
    function v(e, t, n) {
      if ("false" != !e.resize) {
        var i = e.minHeightEl;
        c(i, function () {
          var r = n && { ctx: n, top: n.scrollTop };
          (i.style.minHeight = null),
            $D.removeClass(i, x),
            0 == V
              ? C(e, 0, 0, t, r)
              : setTimeout(C.bind(null, e, 0, 0, t), V, r);
        });
      }
    }
    function y(e) {
      for (var t = 0; t < H.length; t++)
        if (H[t].container == e) return H[t].instance;
    }
    function b(e) {
      var t = window.getComputedStyle(e);
      return (function () {
        for (var e = 0, t = 0; t < arguments.length; t++)
          e += (function (e) {
            return Number(e.replace("px", ""));
          })(arguments[t]);
        return e;
      })(t.marginTop, t.marginBottom, w(t.borderBottom), w(t.borderTop));
    }
    function w(e) {
      return F.test(e) ? F.exec(e)[0] : "";
    }
    function C(e, t, n, i, r) {
      (t = t || 0), (n = n > 0 ? n : 15);
      var a = e.minHeightEl,
        o = window.getComputedStyle(a),
        s = o.minHeight ? parseFloat(o.minHeight) : 0;
      if (t > n) return $D.addClass(a, x), void $(i);
      a.style.minHeight = null;
      var l = (function (e, t) {
        var n = null;
        window.getComputedStyle(t);
        for (var i = 0; i < e.length; i++)
          n < e[i].scrollHeight && (n = e[i].scrollHeight + b(e[i]));
        return n;
      })(e.slides, a);
      if ("" == a.style.minHeight || parseFloat(a.style.minHeight) < l) {
        var u = l + 1;
        if (
          ((a.style.minHeight = (s > u ? s : u) + "px"),
          s + "px" == a.style.minHeight)
        )
          return $D.addClass(a, x), void $(i);
        0 == V
          ? C(e, t + 1, n, i, r)
          : setTimeout(C.bind(this, e, t + 1, n, i, r), V);
      } else $D.addClass(a, x), $(i);
      return !1;
    }
    function $(e) {
      e && e();
    }
    var E = "[data-zs-slider]",
      _ = "data-zs-slides-cont",
      D = "data-zs-autoslide",
      x = "zpapply-height",
      z = "arrow-cont",
      A = "left-arrow",
      I = "right-arrow",
      k = "active-controller",
      S = "controller-cont",
      T = "controller",
      B = "active-slide",
      M = "content-cont",
      L = "min-height-el",
      O = [z, A, I, k, S, T, "slide", B, "slides-cont", M, "background"],
      N = [L],
      q = {};
    (q[z] = "zsslider-arrows-container"),
      (q[A] = "zsslider-arrow-left"),
      (q[I] = "zsslider-arrow-right"),
      (q[k] = "zsslider-controller-active"),
      (q[S] = "zsslider-controller-container"),
      (q[T] = "zsslider-controller"),
      (q.slide = ""),
      (q["slides-cont"] = ""),
      (q[M] = ""),
      (q.background = "true"),
      (q[B] = "curslide");
    var P = {},
      R = window,
      H = [],
      F = /(\d+(\.\d+)?)px/,
      j = document,
      U = void 0,
      V = 0,
      W = {
        slide_right: {
          in: "slideInLeft",
          out: "slideOutRight",
          revIn: "slideInRight",
          revOut: "slideOutLeft",
        },
        slide_left: {
          in: "slideInRight",
          out: "slideOutLeft",
          revIn: "slideInLeft",
          revOut: "slideOutRight",
        },
        slide_down: {
          in: "slideInDown",
          out: "slideOutDown",
          revIn: "slideInUp",
          revOut: "slideOutUp",
        },
        slide_up: {
          in: "slideInUp",
          out: "slideOutUp",
          revIn: "slideInDown",
          revOut: "slideOutDown",
        },
        diffuse: {
          in: "fadeIn",
          out: "fadeOut",
          revIn: "fadeIn",
          revOut: "fadeOut",
        },
        diffuse_left: {
          in: "fadeIn",
          out: "fadeOut",
          revIn: "fadeIn",
          revOut: "fadeOut",
        },
        diffuse_right: {
          in: "fadeIn",
          out: "fadeOut",
          revIn: "fadeIn",
          revOut: "fadeOut",
        },
      };
    var X =
        R.requestAnimationFrame ||
        (function () {
          var e = 0;
          return (
            R.webkitRequestAnimationFrame ||
            R.mozRequestAnimationFrame ||
            function (t) {
              var n,
                i = new Date().getTime();
              return (
                (n = Math.max(0, 16 - (i - e))),
                (e = i + n),
                setTimeout(function () {
                  t(i + n);
                }, n)
              );
            }
          );
        })(),
      G = !!(
        R.requestAnimationFrame ||
        R.webkitRequestAnimationFrame ||
        (R.mozRequestAnimationFrame && R.mozCancelRequestAnimationFrame) ||
        R.oRequestAnimationFrame ||
        R.msRequestAnimationFrame
      ),
      Y = function (e) {
        null !== e &&
          void 0 !== e.value &&
          (R.cancelAnimationFrame
            ? R.cancelAnimationFrame(e.value)
            : R.webkitCancelAnimationFrame
            ? R.webkitCancelAnimationFrame(e.value)
            : R.webkitCancelRequestAnimationFrame
            ? R.webkitCancelRequestAnimationFrame(e.value)
            : R.mozCancelRequestAnimationFrame
            ? R.mozCancelRequestAnimationFrame(e.value)
            : R.oCancelRequestAnimationFrame
            ? R.oCancelRequestAnimationFrame(e.value)
            : R.msCancelRequestAnimationFrame
            ? R.msCancelRequestAnimationFrame(e.value)
            : clearInterval(e));
      },
      J =
        ((function () {
          var e,
            t = document.createElement("div"),
            n = {
              transition: "transitionend",
              OTransition: "otransitionend",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in n) if (u(n, e) && t.style[e] !== U) return n[e];
        })(),
        (function () {
          var e,
            t = document.createElement("div"),
            n = {
              animation: "animationend",
              OAnimation: "oAnimationEnd",
              MozAnimation: "animationend",
              WebkitAnimation: "webkitAnimationEnd",
            };
          for (e in n) if (u(n, e) && t.style[e] !== U) return n[e];
        })());
    (m.prototype = {
      start: function (e) {
        var t,
          i,
          r,
          a,
          l = this,
          e = e || {},
          u = l[B];
        try {
          (this.transitionName =
            o(this.hero, "data-transition") || "slide_left"),
            (this.slides = Array.prototype.slice.call(
              n(this.slide, this.sliderCont)
            )),
            (this.slidesCount = this.slides.length),
            void 0 !== e.slideIndex && (this.curSlideIndex = e.slideIndex),
            this.curSlideIndex >= this.slidesCount &&
              (this.curSlideIndex = this.slidesCount - 1);
          var d = this.curSlideIndex;
          for (this.initiateSliderNav(), r = 0; r < this.slidesCount; r++)
            this.hookAnimation(this.slides[r], r);
          this.slidesCount > 1 &&
            (this.autoslide && (this.animateId = this.slideFn()),
            (t = n(this[I], this.sliderCont)[0]),
            (i = n(this[A], this.sliderCont)[0]),
            (a = this.nextSlide.bind(this)),
            (this.fnRefs.next = a),
            t && s("click", t, a),
            (a = this.prevSlide.bind(this)),
            (this.fnRefs.prev = a),
            i && s("click", i, a)),
            this.slides &&
              this.slides.forEach(function (e, t) {
                t == d
                  ? ($D.addClass(e, u), (e.style.visibility = ""), f(e))
                  : ($D.removeClass(e, u),
                    (e.style.visibility = "hidden"),
                    p(e),
                    $D.addClass(e, W[l.transitionName].out));
              }),
            this.setCurSlideNav(),
            v(this, function () {
              $E.dispatch(l.hero, "sliderActive:changed", {
                index: l.curSlideIndex,
                slide: l.slides[l.curSlideIndex],
                hero: l.hero,
              });
            });
        } catch (e) {}
      },
      pause: function (e) {
        Y(this.animateId);
      },
      hookAnimation: function (e, n) {
        var r = function (e, n, r) {
          var a, s, l, u;
          if (i(n, r.animationName))
            for (a = t("[data-animation]", n), l = 0, u = a.length; l < u; l++)
              "" !== (s = o(a[l], "data-animation").trim()) &&
                ((s = s.split("-"))[1]
                  ? animation[s[0]](a[l], s[1], "2s")
                  : animation[s[0]](a[l], "2s"));
        }.bind(this, n, e);
        (this.fnRefs.anim[n] = r), s(J, e, r);
      },
      unHookAnimation: function (e, t) {
        l(J, e, this.fnRefs.anim[t]), (this.fnRefs.anim[t] = U);
      },
      changeTransition: function (e) {
        for (
          var t = W[this.transitionName],
            n = W[e],
            i = this.slides,
            s = i.length - 1;
          s >= 0;
          s--
        )
          for (var l in t)
            u(t, l) &&
              (this.curSlideIndex === s
                ? (a(i[s], t.in),
                  a(i[s], t.out),
                  a(i[s], t.revIn),
                  a(i[s], t.revOut),
                  r(i[s], n.in))
                : a(i[s], t[l]));
        (this.transitionName = e), o(this.hero, "data-transition", e);
      },
      _parse: function () {
        function e(e) {
          if (((n[e] = t[e] || q[e]), 1 == this.val && !n[e]))
            throw TypeError("slider option " + e + " is must");
        }
        var t =
            zsTools.oldParser.parse(this.hero.getAttribute("data-zs-slider")) ||
            {},
          n = this;
        O.forEach(e, { val: 1 }), N.forEach(e, { val: 0 });
      },
      restart: function () {
        Y(this.animateId), (this.animateId = this.slideFn());
      },
      nextSlide: function (e) {
        Y(this.animateId),
          (this.animateId = null),
          this.transitionSlide(),
          e && e.preventDefault();
      },
      prevSlide: function () {
        Y(this.animateId), (this.animateId = null), this.transitionSlide(!0);
      },
      goToSlide: function (e, t) {
        Y(this.animateId),
          (this.animateId = null),
          this.transitionSlide(!1, e, t);
      },
      slideFn: function () {
        var e = this.transitionSlide.bind(this);
        return (
          (this.fnRefs.trans = e),
          (function (e, t) {
            function n() {
              if ("undefined" == typeof zs || zs.state.animation) {
                var a = new Date().getTime(),
                  o = a - i;
                o >= t && (e.call(), (i = new Date().getTime())),
                  (r.value = X(n));
              }
            }
            if (!G) return R.setInterval(e, t);
            var i = new Date().getTime(),
              r = {};
            return (r.value = X(n)), r;
          })(e, this.sliderInterval)
        );
      },
      curIndex: function () {
        return this.curSlideIndex;
      },
      getNextIndex: function (e) {
        var t = e || this.curSlideIndex;
        return t === this.slidesCount - 1 ? 0 : t + 1;
      },
      prevIndex: function () {
        return 0 === this.curSlideIndex
          ? this.slidesCount - 1
          : this.curSlideIndex - 1;
      },
      hookSliderLink: function (e, t) {
        var n = this.showSlide.bind(this, t);
        (this.fnRefs.links[t] = n), s("click", e, n);
      },
      hookSliderTab: function (e, t) {
        var n = this.showSlide.bind(this, t);
        (this.fnRefs.tabs[t] = n), s("click", e, n);
      },
      unHookSliderLink: function (e, t) {
        l("click", e, this.fnRefs.links[t]), (this.fnRefs.links[t] = U);
      },
      unHookSliderTab: function (e, t) {
        l("click", e, this.fnRefs.tabs[t]), (this.fnRefs.tabs[t] = U);
      },
      setSliderAttrs: function () {
        var e,
          t = n(this["slides-cont"], this.sliderCont)[0];
        if ((t.setAttribute(_, ""), this.slides.length > 0))
          for (
            var i = (e = n(this[M], this.sliderCont)).length - 1;
            i >= 0;
            i--
          )
            e[i].setAttribute("data-zs-content-cont", "");
        n(this[z], this.sliderCont)[0].setAttribute(
          "data-zs-slider-arrow-cont",
          ""
        ),
          n(this[A], this.sliderCont)[0].setAttribute(
            "data-zs-slider-left-arrow",
            ""
          ),
          n(this[I], this.sliderCont)[0].setAttribute(
            "data-zs-slider-right-arrow",
            ""
          ),
          "false" !== this.background &&
            this.hero.setAttribute("data-zs-slider-bg", "");
      },
      initiateSliderNav: function () {
        var e,
          n,
          i = t("." + this[T], this.sliderCont),
          r = t(".zs-slider-tab", this.sliderCont);
        for (e = 0, n = i.length; e < n; e++) this.hookSliderLink(i[e], e);
        for (e = 0, n = r.length; e < n; e++) this.hookSliderTab(r[e], e);
      },
      unbindSliderNav: function () {
        var e = t("." + this[T], this.sliderCont),
          n = t(".zs-slider-tab", this.sliderCont);
        e.forEach(this.unHookSliderLink.bind(this)),
          n.forEach(this.unHookSliderTab.bind(this));
      },
      setCurSlideNav: function () {
        for (
          var n = t("." + this[T], this.sliderCont),
            i = e("." + this[S], this.sliderCont),
            s = e("." + this[z], this.sliderCont),
            l = this[k],
            u = t(".zs-slider-tab", this.sliderCont),
            d = n.length - 1;
          d >= 0;
          d--
        )
          d === this.curSlideIndex
            ? (r(n[d], l),
              u[d] && r(u[d], l),
              o(this.hero, "data-currentslide-index", d))
            : (a(n[d], l), u[d] && a(u[d], l));
        n.length < 2
          ? ((i.style.display = "none"), (s.style.display = "none"))
          : ((i.style.display = null), (s.style.display = null));
      },
      showSlide: function (e) {
        if (this.curSlideIndex !== e) {
          var t = this.curSlideIndex > e;
          Y(this.animateId),
            (this.animateId = null),
            this.transitionSlide(t, e);
        }
      },
      transitionSlide: function (e, n, i) {
        var a,
          o = [this.slides[this.curSlideIndex]],
          s = this[B],
          l = W[this.transitionName];
        try {
          i === U && (i = !0),
            e
              ? ((a = n !== U ? n : this.prevIndex()), o.push(this.slides[a]))
              : ((this.nextSlideIndex =
                  n !== U ? n : this.getNextIndex(this.curSlideIndex)),
                o.push(this.slides[this.nextSlideIndex])),
            d(o, l),
            $D.removeClass(this.slides[this.curSlideIndex], s),
            p(this.slides[this.curSlideIndex]),
            e
              ? (r(this.slides[this.curSlideIndex], l.revOut),
                r(this.slides[a], l.revIn),
                (this.curSlideIndex = a),
                $D.addClass(this.slides[a], s),
                (this.slides[a].style.visibility = ""),
                f(this.slides[a]))
              : (r(this.slides[this.curSlideIndex], l.out),
                r(this.slides[this.nextSlideIndex], l.in),
                (this.curSlideIndex = this.nextSlideIndex),
                $D.addClass(this.slides[this.nextSlideIndex], s),
                (this.slides[this.nextSlideIndex].style.visibility = ""),
                f(this.slides[this.nextSlideIndex])),
            (function (e) {
              var n,
                i,
                r = t("[data-animation]", e);
              for (n = 0, i = r.length; n < i; n++) r[n].style.opacity = 0;
            })(this.slides[this.curSlideIndex]),
            !this.animateId &&
              i &&
              this.autoslide &&
              (this.animateId = this.slideFn()),
            this.setCurSlideNav(),
            $E.dispatch(this.hero, "sliderActive:changed", {
              index: this.curSlideIndex,
              slide: this.slides[this.curSlideIndex],
              hero: this.hero,
            });
        } catch (e) {}
      },
      changeTransitionDuration: function (e) {
        for (var t = this.slides.length - 1; t >= 0; t--)
          this.slides[t].style.animationDuration = e;
        this.transitionDuration = Number(e.replace("s", ""), 10);
      },
      changeTimingFn: function (e) {
        for (var t = this.slides.length - 1; t >= 0; t--)
          this.slides[t].style.animationTimingFunction = e;
      },
      changeSlideInterval: function (e) {
        (this.sliderInterval =
          1e3 * (parseInt(e, 10) + this.transitionDuration)),
          this.restart();
      },
      refresh: function (e) {
        this.unbindEvents(), this.start(e);
      },
      unbindEvents: function () {
        var e = n(this[I], this.sliderCont)[0],
          t = n(this[A], this.sliderCont)[0];
        e && l("click", e, this.fnRefs.next),
          (this.fnRefs.next = U),
          t && l("click", t, this.fnRefs.prev),
          (this.fnRefs.prev = U),
          this.slides.forEach(this.unHookAnimation.bind(this)),
          this.unbindSliderNav(),
          d(this.slides, W[this.transitionName]);
      },
    }),
      s("orientationchange", R, g),
      s("resize", R, zsUtils.debounce(g, 1e3));
    P.init = function (e) {
      try {
        var t = new m({ container: e }),
          n = { container: e, instance: t };
        return H.push(n), t.start(), t;
      } catch (e) {}
    };
    (P.pauseSlider = function (e) {
      Y(e.animateId);
    }),
      (P.clearRequestInterval = Y),
      (P.logHeights = function (e) {});
    (P.reInitSlider = function (e, t) {
      var n = y(e);
      n.refresh(t);
    }),
      (P.resize = function (e, t, n) {
        var i = y(e);
        i && v(i, t, n);
      });
    return (
      (P.dispatchActive = function (e) {
        var t = y(e);
        $E.dispatch(t.hero, "sliderActive:changed", {
          index: t.curSlideIndex,
          slide: t.slides[t.curSlideIndex],
          hero: t.hero,
        });
      }),
      (P.showSlide = function (e, t) {
        y(e).showSlide(t);
      }),
      (P.getInstance = y),
      P
    );
  })(document);
})(this),
  zsUtils.onDocumentReady(initiateSliders);
var portal = (function () {
    function e() {
      var e = JSON.parse(this.responseText).current_user,
        t = e.user,
        n = e.site_visibility,
        i = e.is_zsadmin;
      if (-1 == t.indexOf("null")) {
        (document.querySelector("[data-portal-loggedout]").style.display =
          "none"),
          (document.querySelector("[data-portal-loggedin]").style.display =
            "block");
        var r = document
          .querySelector("[data-portal-loggedin]")
          .querySelector("[data-portal-profile]");
        r.querySelector("[data-portal-user-name]").innerHTML = i18n.get(
          "portal.welcome",
          t
        );
        var a = document
          .querySelector("[data-portal-loggedin]")
          .querySelector("[data-portal-logout]");
        ((0 != n && 4 != n) || i) && (r.target = "_blank"),
          e.is_store_enabled || (r.href = e.profile_url),
          (a.href = e.logout_url);
      } else {
        var o = document.querySelector("[data-portal-loggedout]");
        (o.style.display = "block"),
          (document.querySelector("[data-portal-loggedin]").style.display =
            "none");
        var s = "";
        ("/checkout" != window.location.pathname &&
          "/cart" != window.location.pathname) ||
          "" == window.location.search ||
          (s =
            "?uri=" +
            encodeURIComponent(
              window.location.pathname + window.location.search
            )),
          (o.querySelector("[data-portal-signin]").href = "/signin" + s),
          (o.querySelector("[data-portal-signup]").href = "/signup" + s);
      }
    }
    function t() {
      window.is_portal_site &&
        $X.get({ url: "/portaluser/getCurrentPortalUser", handler: e }),
        $E.unbind(window, "DOMContentLoaded", t);
    }
    $E.callOnLoad(t);
  })(),
  Newsletter = (function () {
    function e(e) {
      return 0 == e.trim().length
        ? (i("Please enter your name", "error"), !1)
        : !(e.trim().length > 50) ||
            (i("Length of the name must not exceed 50 charecters", "error"),
            !1);
    }
    function t(t) {
      if (
        (t.preventDefault(),
        t.stopPropagation(),
        "preview" != window.zs_rendering_mode)
      ) {
        var r = (a = $D.findParent(t.target, "zpelem-newsletter")).getAttribute(
            "data-list-id"
          ),
          o = $D.getByClass("zpnewsletter-email-input-field", a)[0].value,
          s = {};
        if ("" != o.trim())
          if ("" != r)
            if (
              (function (e) {
                return /^((([^<>()[\]\\.,;:\s@!#&$%*"]+(\.[^<>()[\]\\.,;:\s@!#&$%*"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/.test(
                  e
                );
              })(o)
            ) {
              i("Please wait", "success"),
                (s.email = o),
                (s.domain_name = window.location.hostname),
                (s.newsletter_id = r);
              var l = $D.getByClass(
                "zpnewsletter-first-name-input-field",
                a
              )[0];
              if (l) {
                if (!e(l.value)) return;
                s.fname = l.value;
              }
              var u = $D.getByClass("zpnewsletter-last-name-input-field", a)[0];
              if (u) {
                if (!e(u.value)) return;
                s.lname = u.value;
              }
              var d = $D.getByClass("zpnewsletter-name-input-field", a)[0];
              if (d) {
                if (!e(d.value)) return;
                s.fname = d.value;
              }
              $X.post({ url: "/siteapps/newsletter", params: s, handler: n });
            } else i("Invalid email address", "error");
          else i("No mailing list is associated", "error");
        else i("Please enter your email", "error");
      } else alert("Subscribers cannot be added in the preview mode.");
    }
    function n() {
      var e = JSON.parse(this.responseText);
      if ("error_code" in e)
        switch (e.error_code) {
          case 102:
            i("Newsletter service is disconnected", "error");
            break;
          case 502:
            var t = JSON.parse(e.msg);
            "Please provide a valid email address." == t.detail
              ? i("Invalid email address", "error")
              : "Member Exists" == t.title &&
                i("Email already added to the list", "error");
            break;
          default:
            i("Error in adding user", "error");
        }
      else if ("subscriber_added" in e && "true" == e.subscriber_added) {
        i("Successfully Added", "success");
        $D.getByTag("form", a)[0].reset();
      }
    }
    function i(e, t) {
      var n = $D.getAll("#newsletter_response", a)[0];
      n && n.parentNode.removeChild(n);
      var i = document.createElement("div");
      (i.style.textAlign = "center"),
        (i.id = "newsletter_response"),
        (i.innerHTML = e),
        (color = "success" == t ? "green" : "red"),
        (i.style.color = color),
        a.appendChild(i);
    }
    function r() {
      var e = $D.getAll("#newsletter_response", a)[0];
      e && a.contains(e) && e.parentNode.removeChild(e);
    }
    $E.callOnLoad(function () {
      for (
        var e = document.querySelectorAll(".zpnewsletter-input-container"),
          n = 0;
        n < e.length;
        n++
      ) {
        $E.bind(e[n], "submit", t);
        for (var i = $D.getByTag("input", e[n]), a = 0; a < i.length; a++)
          $E.bind(i[a], "keydown", r);
      }
    });
    var a;
    return { subscribeUser: t };
  })(),
  doc = document,
  listeners = [],
  createElement = document.createElement.bind(document),
  lightbox = (function () {
    "use strict";
    function e(e) {
      var n = i(this),
        r = _get('[data-action="fullscreen"] use', n.controlsCont);
      (document.fullScreenElement && null !== document.fullScreenElement) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
        ? (document.documentElement.requestFullScreen
            ? document.documentElement.requestFullScreen()
            : document.documentElement.mozRequestFullScreen
            ? document.documentElement.mozRequestFullScreen()
            : document.documentElement.webkitRequestFullScreen &&
              document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
              ),
          r.setAttribute("xlink:href", "#focus"))
        : t(n);
    }
    function t(e) {
      var t = _get(
        '[data-action="fullscreen"] use',
        (e = e || this).controlsCont
      );
      document.cancelFullScreen
        ? document.cancelFullScreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitCancelFullScreen && document.webkitCancelFullScreen(),
        t.setAttribute("xlink:href", "#expand");
    }
    function n(e) {
      var t = i(this),
        n = _get('[data-action="zoom"] use', t.controlsCont),
        r = (t.imageCont, t.items),
        a = t.curImageIndex;
      _hasClass(r[a], "hb-zoom_in")
        ? (_removeClass(r[a], "hb-zoom_in"),
          _addClass(r[a], "hb-zoom_out"),
          n.setAttribute("xlink:href", "#zoom-in"))
        : (_removeClass(r[a], "hb-zoom_out"),
          _addClass(r[a], "hb-zoom_in"),
          n.setAttribute("xlink:href", "#zoom-out"));
    }
    function i(e) {
      for (var t = u.length - 1; t >= 0; t--)
        if (u[t].cont && u[t].cont.contains(e)) return u[t];
    }
    function r(e) {
      if (
        ((this.container = e.cont),
        this._parseOptions(),
        (this.type = this.options.type),
        (this.remainingAni = 2),
        (this.state = "closed"),
        "fullscreen" === this.type)
      ) {
        this.gridItems = [];
        for (
          var t, n = [].slice.call(this.container.children), i = 0;
          (t = n[i]) && s(n[i]);
          i++
        )
          _hasClass(t, "hb-grid-hide") || this.gridItems.push(t);
        (this.gridContainer = e.cont), this.bindGridEvents();
      } else
        (this.cont = e.cont),
          (this.items = _getAll(".hb-lightbox__img-wrapper", this.cont)),
          _addClass(this.cont, "hb-inplace"),
          this._start(0);
    }
    function a(e) {
      i(this).closeLightBox();
    }
    function o(e) {
      var t = i(this),
        n = t.curImageIndex,
        r = s(t.items[n]);
      _get('[data-action="download"] a', t.controlsCont).href = r.getAttribute(
        "data-src"
      );
    }
    function s(e) {
      return e ? ("IMG" == e.tagName ? e : _get("img", e)) : null;
    }
    var l = ".hb-lightbox",
      u = [],
      d = void 0 !== document.createElement("a").download,
      c =
        document.documentElement.requestFullScreen ||
        document.documentElement.mozRequestFullScreen ||
        document.documentElement.webkitRequestFullScreen,
      h = !(window.innerWidth <= 768),
      p = (function () {
        var e,
          t = document.createElement("div"),
          n = {
            transition: "transitionend",
            OTransition: "otransitionend",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (e in n) if (_hasOwn(n, e) && void 0 !== t.style[e]) return n[e];
      })(),
      f = (function () {
        var e,
          t = document.createElement("div"),
          n = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
          };
        for (e in n) if (_hasOwn(n, e) && void 0 !== t.style[e]) return n[e];
      })();
    return (
      (r.prototype.bindGridEvents = function () {
        if ("false" != this.options.gridclick)
          for (var e = this.gridItems, t = 0, n = e.length; t < n; t++)
            _bind(
              e[t],
              "click",
              function (e, t) {
                if (
                  (t.preventDefault(),
                  ("undefined" == typeof zs || zs.state.animation) &&
                    "opened" != this.state)
                ) {
                  this.state = "opened";
                  var n = s(this.gridItems[e]),
                    i = n.getAttribute("data-src") || n.src,
                    r = new Image(),
                    a = this;
                  (r.onload = function () {
                    a._start(e);
                  }),
                    (r.src = i);
                }
              }.bind(this, t)
            );
      }),
      (r.prototype._parseOptions = function () {
        var e = {
          escClose: "true",
          thumbs: "false",
          caption: "false",
          type: "fullscreen",
          "inplace-height": "600px",
          "thumbs-height": "100px",
          "caption-height": "100px",
          gridclick: "true",
          "thumbs-img-format": ".src_t.jpg",
        };
        this.container
          .getAttribute("data-lightbox-options")
          .split(",")
          .forEach(function (t) {
            ((t = t.split(":"))[0] = t[0].trim()),
              (t[1] = t[1].trim()),
              (e[t[0]] = t[1]);
          }),
          (this.options = e);
      }),
      (r.prototype._start = function (e) {
        var t;
        "fullscreen" === this.type &&
          (((t = document.createElement("div")).innerHTML =
            '<div class="hb-lightbox__cont"><div class="hb-lightbox__controls"><div class="hb-lightbox__counter"></div><div class="hb-lightbox__buttons"><ul><li data-action="zoom"><svg class="icon"><use xlink:href="#zoom-in" /></svg></li><li data-action="download"><a href="" download><svg class="icon"><use xlink:href="#download" /></svg></a></li><li data-action="fullscreen"><svg class="icon"><use xlink:href="#expand" /></svg></li><li data-action="close"><svg class="icon"><use xlink:href="#cross-out" /></svg></li></ul></div></div><div class="hb-lightbox__images"></div><div class="hb-lightbox__caption"></div><div class="hb-lightbox__thumbs-cont"><div class="hb-lightbox__thumbs"></div></div><div class="hb-lightbox__arrow-nav nav-left hb-lightbox__arrow-1"><svg class="icon"><use xlink:href="#back" /></svg></div><div class="hb-lightbox__arrow-nav nav-right hb-lightbox__arrow-1"><svg class="icon"><use xlink:href="#next" /></svg></div><div class="loader" style="display: none"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"><rect x="0" y="0" width="4" height="10" fill="#333"><animateTransform attributeType="xml"attributeName="transform" type="translate"values="0 0; 0 20; 0 0"begin="0" dur="0.6s" repeatCount="indefinite" /></rect><rect x="10" y="0" width="4" height="10" fill="#333"><animateTransform attributeType="xml"attributeName="transform" type="translate"values="0 0; 0 20; 0 0"begin="0.2s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="20" y="0" width="4" height="10" fill="#333"><animateTransform attributeType="xml"attributeName="transform" type="translate"values="0 0; 0 20; 0 0"begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div><svg xmlns="http://www.w3.org/2000/svg"><symbol viewBox="0 0 18 18" id="cross-out"><title>cross-out</title><path d="M16 3.41L14.59 2 9 7.59 3.41 2 2 3.41 7.59 9 2 14.59 3.41 16 9 10.41 14.59 16 16 14.59 10.41 9"></path></symbol><symbol viewBox="0 0 18 18" id="download"><title>download</title> <path d="M13 9l-4 4-4-4h3V2h2v7h3zM1 12h.86l.112 4.05h14.025l.15-4.05H17v5H1v-5z" fill-rule="nonzero"></path> </symbol><symbol viewBox="0 0 18 18" id="expand"><title>expand</title><path d="M6.16 6.98L1.57 2.39c-.22-.22-.41-.148-.41.173v2.663c0 .318-.26.58-.58.58-.322 0-.58-.258-.58-.578V.578C0 .265.26 0 .578 0h4.65c.314 0 .578.26.578.58 0 .324-.26.58-.58.58H2.563c-.318 0-.398.184-.173.41l4.59 4.59-.82.82zm0 4.02l.82.82-4.59 4.592c-.225.226-.145.408.173.408h2.663c.32 0 .58.258.58.58 0 .32-.264.58-.578.58H.578c-.32 0-.578-.263-.578-.577v-4.65c0-.32.258-.578.58-.578.32 0 .58.263.58.58v2.663c0 .32.19.393.41.173L6.16 11zm5.66-4.02L11 6.16l4.59-4.59c.226-.226.146-.41-.172-.41h-2.662c-.32 0-.58-.256-.58-.58 0-.32.263-.58.577-.58h4.65c.32 0 .578.265.578.578v4.65c0 .32-.256.578-.58.578-.32 0-.58-.262-.58-.58V2.563c0-.32-.188-.393-.408-.173l-4.59 4.59zm0 4.02l4.592 4.59c.22.22.408.15.408-.172v-2.662c0-.318.26-.58.58-.58.324 0 .58.258.58.577v4.65c0 .314-.257.578-.577.578h-4.65c-.314 0-.578-.26-.578-.58 0-.322.26-.58.58-.58h2.663c.318 0 .398-.182.173-.408L11 11.822l.82-.822z" fill-rule="nonzero"></path></symbol><symbol viewBox="0 0 18 18" id="focus"><title>focus</title><path d="M.82 0l4.592 4.59c.22.22.408.15.408-.172V1.756c0-.318.26-.58.58-.58.324 0 .58.258.58.577v4.65c0 .314-.257.578-.577.578h-4.65c-.314 0-.578-.26-.578-.58 0-.322.26-.58.58-.58H4.42c.318 0 .398-.182.173-.408L0 .822.82 0zm0 17.98L0 17.16l4.59-4.59c.226-.226.146-.41-.172-.41H1.756c-.32 0-.58-.256-.58-.58 0-.32.263-.58.577-.58h4.65c.32 0 .578.265.578.578v4.65c0 .32-.256.578-.58.578-.32 0-.58-.262-.58-.58v-2.663c0-.32-.188-.393-.408-.173l-4.59 4.59zM17.16 0l.82.82-4.59 4.592c-.225.226-.145.408.173.408h2.663c.32 0 .58.258.58.58 0 .32-.264.58-.578.58h-4.65c-.32 0-.578-.263-.578-.577v-4.65c0-.32.258-.578.58-.578.32 0 .58.263.58.58V4.42c0 .32.19.393.41.173L17.16 0zm0 17.98l-4.59-4.59c-.22-.22-.41-.148-.41.173v2.663c0 .318-.26.58-.58.58-.322 0-.58-.258-.58-.578v-4.65c0-.313.26-.578.578-.578h4.65c.314 0 .578.26.578.58 0 .324-.26.58-.58.58h-2.663c-.318 0-.398.184-.173.41l4.59 4.59-.82.82z" fill-rule="nonzero"></path></symbol><symbol viewBox="0 0 18 18" id="next"><title>next</title><path d="M0 8h14.105l-5.59-5.59L9.935 1l8 8-8 8-1.41-1.41 5.58-5.59H0" fill-rule="nonzero"></path></symbol><symbol viewBox="0 0 18 18" id="back"><title>prev</title><path d="M17.942 8H3.83l5.59-5.59L8 1 0 9l8 8 1.41-1.41L3.83 10h14.112" fill-rule="nonzero"></path></symbol><symbol viewBox="0 0 18 18" id="zoom-in"><title>zoom-in</title> <path d="M17.604 16.896l-5.173-5.173C13.407 10.586 14 9.113 14 7.5 14 3.916 11.084 1 7.5 1c-1.737 0-3.37.676-4.597 1.904C1.675 4.13 1 5.764 1 7.5 1 11.084 3.916 14 7.5 14c1.612 0 3.086-.594 4.224-1.57l5.173 5.174.707-.708zM7.5 13C4.467 13 2 10.533 2 7.5c0-1.47.57-2.85 1.61-3.89C4.65 2.572 6.03 2 7.5 2 10.533 2 13 4.467 13 7.5S10.533 13 7.5 13zM8 7h2v1H8v2H7V8H5V7h2V5h1v2z" fill-rule="nonzero"></path> </symbol><symbol viewBox="0 0 18 18" id="zoom-out"><title>zoom-out</title> <path d="M17.604 16.896l-5.173-5.173C13.407 10.586 14 9.113 14 7.5 14 3.916 11.084 1 7.5 1c-1.736 0-3.37.676-4.598 1.903C1.675 4.13 1 5.763 1 7.5 1 11.084 3.916 14 7.5 14c1.612 0 3.087-.594 4.224-1.57l5.173 5.174.707-.708zM7.5 13C4.468 13 2 10.533 2 7.5c0-1.47.57-2.85 1.61-3.89C4.648 2.573 6.03 2 7.5 2 10.532 2 13 4.467 13 7.5c0 3.032-2.468 5.5-5.5 5.5zM5 7h5v1H5V7z" fill-rule="nonzero"></path> </symbol></svg></div>'),
          document.body.appendChild(t),
          (document.body.style.overflow = "hidden"),
          (this.cont = _get(".hb-lightbox__cont", t)));
        var n = this.cont;
        (this.arrowNav = _getAll(".hb-lightbox__arrow-nav", n)),
          (this.imageCont = _get(".hb-lightbox__images", n)),
          (this.thumbsCont = _get(".hb-lightbox__thumbs", n)),
          (this.controlsCont = _get(".hb-lightbox__controls", n)),
          (this.captionCont = _get(".hb-lightbox__caption", n)),
          (this.counterCont = _get(".hb-lightbox__counter", n)),
          (this.curImageIndex = e);
        var i = 0;
        if (
          ("inplace" === this.type
            ? (this.controlsCont.style.display = "none")
            : "fullscreen" === this.type &&
              (this.createImageWrappers(e),
              (this.items = _getAll(".hb-lightbox__img-wrapper", this.cont))),
          this.items.length < 2)
        ) {
          for (var r = this.arrowNav.length - 1; r >= 0; r--)
            this.arrowNav[r].style.display = "none";
          this.counterCont.style.display = "none";
        }
        var a = this.options;
        "true" === a.escClose &&
          (this.boundOnKeyUp = function (e) {
            (e = e || window.event).stopPropagation();
            var t,
              n = e.keyCode;
            27 === n
              ? this.closeLightBox()
              : 39 === n
              ? ((t =
                  this.curImageIndex === this.items.length - 1
                    ? 0
                    : this.curImageIndex + 1),
                this.handleNav(null, t, 1))
              : 37 === n &&
                ((t =
                  0 === this.curImageIndex
                    ? this.items.length - 1
                    : this.curImageIndex - 1),
                this.handleNav(null, t, -1));
          }.bind(this)),
          "true" !== a.caption && (this.captionCont.style.display = "none"),
          a.theme && _addClass(n, a.theme + "_theme"),
          "fullscreen" === a.type &&
            (_addClass(n, "hb-lightbox__fullscreen"),
            _addClass(document.body, "hb-lightbox__fixed-active")),
          this._bindLightboxEvents(),
          _addClass(n, "isVisible"),
          this.items[e].setAttribute("data-hb-current", ""),
          this.changeCaption(e);
        i = 0;
        "inplace" !== a.type && (i = _box(this.controlsCont).height),
          "true" === a.caption &&
            (a["caption-height"]
              ? (i += Number(
                  a["caption-height"].replace("px", "").replace("%", "")
                ))
              : "inplace" === a.type &&
                ("inplace" === this.type
                  ? (i += _box(this.captionCont).height)
                  : (i += 100)));
        var o,
          s = _get(".hb-lightbox__thumbs-cont", this.cont);
        a.thumbs && "true" == a.thumbs
          ? (a["thumbs-height"]
              ? (i += o = Number(
                  a["thumbs-height"].replace("px", "").replace("%", "")
                ))
              : "inplace" === this.type
              ? ((o = 70), (i += 70))
              : ((o = 100), (i += 100)),
            (s.style.height = o + "px"))
          : (s.style.display = "none");
        var l;
        if (
          ("fullscreen" === this.type
            ? (this.imageCont.style.height = "calc(100% - " + (i + 10) + "px)")
            : this.options["inplace-height"]
            ? (this.imageCont.style.height = this.options["inplace-height"])
            : ((l = _box(this.cont.parentElement).width) > 670 && (l = 670),
              (this.imageCont.style.height = l - i + "px")),
          "fullscreen" === this.options.type)
        )
          this.getReady(this.items[e]),
            a.thumbs && "true" == a.thumbs && this.populateThumbs(e, s, o);
        else {
          _addClass(this.items[e], "hb-current"),
            (s.style.bottom = "-15px"),
            (s.style.height = _box(s).height + 25 + "px");
          var u = _getAll("img", this.thumbsCont),
            d = 0;
          this.thumbImgsLenth = u.length;
          var c = this;
          for (r = c.thumbImgsLenth - 1; r >= 0; r--)
            u[r].complete
              ? (c.options["thumbs-height"] &&
                  (u[r].style.height = c.options["thumbs-height"]),
                (d += _box(u[r]).width + 10),
                --c.thumbImgsLenth <= 0 &&
                  (this.thumbsCont.style.width = d + "px"))
              : _bind(u[r], "load", function () {
                  c.options["thumbs-height"] &&
                    (this.style.height = c.options["thumbs-height"]),
                    (d += _box(this).width + 10),
                    0 == --c.thumbImgsLenth &&
                      (c.thumbsCont.style.width = d + "px");
                });
        }
        this.options.thumbs &&
          "true" === this.options.thumbs &&
          this.highlightActiveThumb(e);
      }),
      (r.prototype._bindLightboxEvents = function () {
        for (var t = this.arrowNav.length - 1; t >= 0; t--)
          _bind(this.arrowNav[t], "click", this.handleNav);
        var i = _get(".hb-lightbox__buttons", this.cont);
        if ("inplace" !== this.type) {
          var r = _get('[data-action="zoom"]', i),
            s = _get('[data-action="fullscreen"]', i),
            l = _get('[data-action="download"]', i),
            u = _get('[data-action="close"]', i);
          h && (d || c) ? _bind(r, "click", n) : (r.style.display = "none"),
            h && d ? _bind(l, "click", o) : (l.style.display = "none"),
            h && c ? _bind(s, "click", e) : (s.style.display = "none"),
            _bind(u, "click", a),
            _bind(window, "keyup", this.boundOnKeyUp);
        }
        _bind(this.thumbsCont, "click", this.handleThumbsClick),
          _bind(
            this.thumbsCont.parentElement,
            "mousewheel",
            function (e) {
              var t = this.scrollWidth - this.offsetWidth;
              this.scrollHeight, this.offsetHeight;
              (this.scrollLeft + e.deltaX < 0 ||
                this.scrollLeft + e.deltaX > t) &&
                (e.preventDefault(),
                (this.scrollLeft = Math.max(
                  0,
                  Math.min(t, this.scrollLeft + e.deltaX)
                )),
                (window.scrollTop = window.scrollTop + e.deltaY));
            },
            !1
          );
      }),
      (r.prototype.go = function (e, t, n) {
        this.positionThumbsCont(e),
          this.changeCaption(e),
          this.loadImage(e),
          (this.curImageIndex = e),
          _bind(t, f, this.handleAnimationEnd.bind(t, this)),
          _bind(n, f, this.handleAnimationEnd.bind(n, this)),
          _addClass(t, this.entryAnimation),
          _addClass(n, this.exitAnimation);
        _get('[data-action="zoom"] use', this.controlsCont).setAttribute(
          "xlink:href",
          "#zoom-in"
        );
        var i = _get(".hb-active", this.cont);
        i && _removeClass(i, "hb-active");
        var r = _get('[data-index="' + this.curImageIndex + '"]', this.cont);
        r && _addClass(r, "hb-active");
      }),
      (r.prototype.handleNav = function (e, t, n) {
        var a;
        this instanceof r
          ? (a = this)
          : this instanceof r || ((e = this), (a = i(this)));
        var o;
        if (
          ((o =
            e && _hasClass(e, "hb-lightbox__thumbs")
              ? "thumb"
              : n
              ? "key"
              : "arrNav"),
          !(
            2 !== a.remainingAni ||
            t === a.curImageIndex ||
            a.items.length < 2
          ))
        ) {
          --a.remainingAni;
          var s, l, u, d;
          "key" === o
            ? ((d = 1 === n), (s = t))
            : (d =
                "thumb" === o
                  ? !(a.curImageIndex > t)
                  : _hasClass(e, "nav-right")),
            n
              ? d
                ? ((l = "slideInRight"), (u = "slideOutLeft"))
                : ((l = "slideInLeft"), (u = "slideOutRight"))
              : d
              ? ((s = isNaN(t)
                  ? a.curImageIndex === a.items.length - 1
                    ? 0
                    : a.curImageIndex + 1
                  : t),
                (l = "slideInRight"),
                (u = "slideOutLeft"))
              : ((s = isNaN(t)
                  ? 0 === a.curImageIndex
                    ? a.items.length - 1
                    : a.curImageIndex - 1
                  : t),
                (l = "slideInLeft"),
                (u = "slideOutRight"));
          var c = _get('[data-pos="' + s + '"]', a.cont),
            h = _get('[data-pos="' + a.curImageIndex + '"]', a.cont);
          (a.entryAnimation = l),
            (a.exitAnimation = u),
            _hasClass(h, "hb-zoom_in")
              ? (_bind(h, f, function e() {
                  _removeClass(this, "hb-zoom_out"),
                    _unbind(this, f, e),
                    a.go(s, c, h);
                }),
                _removeClass(h, "hb-zoom_in"),
                _addClass(h, "hb-zoom_out"))
              : (_removeClass(h, "hb-zoom_out"),
                _removeClass(h, "hb-zoom_in"),
                a.go(s, c, h));
        }
      }),
      (r.prototype.closeLightBox = function () {
        (this.state = "closed"), document.body.style.removeProperty("overflow");
        var e = _get(".hb-current img", this.cont);
        if ((_removeClass(document.body, "hb-lightbox__fixed-active"), e)) {
          var n = e.cloneNode(!0);
          document.body.appendChild(n),
            (n.className = ""),
            n.removeAttribute("style");
          var i = _getOffset(e);
          (n.style.position = "fixed"),
            (n.style.left = i.left + "px"),
            (n.style.top = i.top - _scrollY() + "px"),
            (n.style.width = i.width + "px"),
            (n.style.height = i.height + "px"),
            n.offsetHeight;
          var r, a;
          "square" === this.gridContainer.getAttribute("data-layout-type")
            ? ((r = this.gridItems[this.curImageIndex]), (a = !0))
            : (r = s(this.gridItems[this.curImageIndex])),
            (r = _getOffset(r)),
            (n.style.transition = "all .3s"),
            (n.style.position = "fixed"),
            (n.style.left = r.left + "px"),
            (n.style.top = r.top - _scrollY() + "px"),
            (n.style.width = r.width + "px"),
            (n.style.height = r.height + "px"),
            a && (n.style.opacity = 0),
            _bind(n, p, function t() {
              (e = null), _unbind(this, p, t), document.body.removeChild(this);
            }),
            "inplace" !== this.type &&
              (_unbind(window, "keyup", this.boundOnKeyUp),
              (this.boundOnKeyUp = null)),
            _removeClass(this.cont, "isVisible"),
            _removeClass(document.body, "hb-lightbox__active"),
            _removeClass(document.body, "hb-lightbox__fixed-active"),
            _purge(this.cont),
            this.cont.parentNode.removeChild(this.cont),
            (this.cont = null),
            t.call(this);
        }
      }),
      (r.prototype.getReady = function (e) {
        var t = this.gridItems[this.curImageIndex];
        (t = s(t)), _addClass(e, "hb-current");
        var n = _getOffset(t);
        t.offsetHeight;
        var i = t.cloneNode(!0);
        document.body.appendChild(i),
          (i.style.transition = "all .4s"),
          (i.style.zIndex = "9999999999"),
          (i.style.position = "fixed"),
          (i.style.top = n.top - _scrollY() + "px"),
          (i.style.left = n.left + "px"),
          (i.style.width = n.width + "px"),
          (i.style.height = n.height + "px");
        var r = _getOffset(s(e));
        e.offsetHeight,
          _removeClass(e, "hb-current"),
          (i.style.top = r.top - _scrollY() + "px"),
          (i.style.left = r.left + "px"),
          (i.style.width = r.width + "px"),
          (i.style.height = r.height + "px"),
          i.clientHeight,
          _bind(i, p, function t() {
            _addClass(e, "hb-current"),
              _unbind(i, p, t),
              i.parentNode.removeChild(i);
          });
      }),
      (r.prototype.populateThumbs = function (e, t, n) {
        function i() {
          r.options["thumbs-height"] &&
            (this.style.height = r.options["thumbs-height"]),
            (l += _box(this).width + 10),
            0 == --a &&
              (l > _box(t).width &&
                ((t.style.bottom = "-15px"), (t.style.height = n + 15 + "px")),
              (o.style.width = l + "px"),
              r.positionThumbsCont(e));
        }
        var r = this,
          a = this.gridItems.length,
          o = this.thumbsCont,
          l = 0,
          u = this.options;
        this.gridItems.forEach(function (e, t) {
          var n = s(e),
            r = document.createElement("img", t);
          r.setAttribute("data-index", t),
            (r.className = ""),
            o.appendChild(r),
            _bind(r, "load", i);
          var a = (n.getAttribute("data-src") || n.src).split("/"),
            l = a.pop(),
            d =
              -1 != u["thumbs-img-format"].indexOf("src")
                ? u["thumbs-img-format"].replace("src", l)
                : u["thumbs-img-format"];
          a.push(d);
          var c = a.join("/");
          r.src = c;
        });
      }),
      (r.prototype.createImageWrappers = function (e) {
        for (var t, n, i, r = this.gridItems, a = 0, o = r.length; a < o; a++) {
          i =
            '<div class="hb-lightbox__img-wrapper hb-center" data-pos="{pos}">    <img data-src="{link}" src="{src}" alt="{alt}"></div>';
          var l = s(r[a]),
            u = l.getAttribute("alt");
          (t = l.getAttribute("data-src") || l.src),
            (n = a == e ? l.getAttribute("data-src") || l.src : ""),
            (i = i
              .replace(/{pos}/g, a)
              .replace(/{link}/, t)
              .replace(/{src}/, n)
              .replace(/{caption}/, "")
              .replace(/{alt}/, u)),
            this.imageCont.insertAdjacentHTML("beforeend", i);
        }
        this.items = _getAll(".hb-lightbox__img-wrapper", this.imageCont);
      }),
      (r.prototype.loadImage = function (e, t) {
        var n = this.items[e],
          i = s(n),
          r = new Image();
        (r.onload = function () {
          i.src = this.src;
        }),
          (r.src = i.getAttribute("data-src")),
          _addClass(n, "hb-current");
      }),
      (r.prototype.openLightbox = function (e) {
        if (
          ((!e || e >= this.gridItems.length) && (e = 0),
          ("undefined" == typeof zs || zs.state.animation) &&
            "opened" != this.state)
        ) {
          this.state = "opened";
          var t = s(this.gridItems[e]),
            n = t.getAttribute("data-src") || t.src,
            i = new Image(),
            r = this;
          (i.onload = function () {
            r._start(e);
          }),
            (i.src = n);
        }
      }),
      (r.prototype.positionThumbsCont = function (e) {
        if (this.options.thumbs && "false" != this.options.thumbs) {
          var t,
            n = this.thumbsCont,
            i = _box(n),
            r = _box(this.cont),
            a = _get('[data-index="' + e + '"]', n),
            o = _box(a),
            s = _get(".hb-lightbox__thumbs-cont", this.cont),
            l =
              (_box(s),
              this.items.length,
              (Math.abs(a.offsetLeft - r.left) / i.width) * 100),
            u = (r.width * l) / 100;
          if ((u + o.width > r.width && (u = r.width - o.width), e < 1)) t = 0;
          else {
            var d = o.left - r.left - u;
            t = s.scrollLeft + d;
          }
          var c = s.scrollLeft,
            h = Math.abs(t - c) / 10,
            p = t > c ? 1 : -1,
            f = 0;
          if (c != t)
            var m = setInterval(function () {
              ++f,
                (c = Number((c + p * h).toFixed(4))),
                f > 10 ? clearInterval(m) : (s.scrollLeft = c);
            }, 10);
        }
      }),
      (r.prototype.changeCaption = function (e) {
        var t;
        (t =
          "fullscreen" === this.type
            ? _get("figcaption", this.gridItems[e])
            : _get("figcaption", this.items[e])) &&
          (this.captionCont.innerHTML = t.innerHTML),
          (this.counterCont.innerHTML = e + 1 + "/" + this.items.length);
      }),
      (r.prototype.handleAnimationEnd = function (e) {
        _purge(this);
        this.getAttribute("data-pos") === e.curImageIndex + ""
          ? (_addClass(this, "hb-current"),
            _removeClass(this, e.entryAnimation))
          : (_removeClass(this, "hb-current"),
            _removeClass(this, e.exitAnimation)),
          --e.remainingAni < 0 && (e.remainingAni = 2);
      }),
      (r.prototype.handleActions = function (t) {
        for (
          var r, a = i(this), s = t.target;
          !_hasClass(s, "hb-lightbox__buttons");

        ) {
          if (s.hasAttribute("data-action")) {
            r = s.getAttribute("data-action");
            break;
          }
          s = s.parentElement;
        }
        switch (r) {
          case "close":
            a.closeLightBox();
            break;
          case "fullscreen":
            e();
            break;
          case "zoom":
            n();
            break;
          case "download":
            o();
        }
      }),
      (r.prototype.highlightActiveThumb = function (e, t) {
        var n = _get(".hb-active", this.thumbsCont);
        n && _removeClass(n, "hb-active"),
          t || (t = _get('[data-index="' + e + '"]', this.thumbsCont)),
          _addClass(t, "hb-active");
      }),
      (r.prototype.handleThumbsClick = function (e) {
        var t = e.target,
          n = i(t);
        "IMG" === t.tagName &&
          n.handleNav(this, Number(t.getAttribute("data-index").trim()));
      }),
      {
        getInstance: function (e) {
          for (var t = u.length - 1; t >= 0; t--)
            if (u[t].container && u[t].container.contains(e)) return u[t];
        },
        init: function (e) {
          for (var t = _getAll(l, e), n = t.length - 1; n >= 0; n--)
            u.push(new r({ cont: t[n] }));
        },
        destroy: function (e) {
          var t = (function (e) {
            for (var t = u.length - 1; t >= 0; t--)
              if (u[t].container && u[t].container === e) return t;
          })(e);
          void 0 !== t && ((u[t] = null), u.splice(t, 1), _purge(e));
        },
      }
    );
  })(),
  layout = (function () {
    "use strict";
    function e(e) {
      return window.getComputedStyle(e);
    }
    function t(e) {
      return void 0 === e;
    }
    function n(e) {
      return Number(e.replace("px", ""));
    }
    function i(e, n, i, r) {
      var a,
        o,
        s = !1;
      for (a = 0; a < i && !s; a++)
        for (o = 0; o < r; o++)
          if (
            o !== r - 1 &&
            a + 1 !== i &&
            t(e[a][o]) &&
            t(e[a][o + 1]) &&
            t(e[a + 1][o]) &&
            t(e[a + 1][o + 1])
          ) {
            (e[a][o] = n),
              (e[a][o + 1] = n),
              (e[a + 1][o] = n),
              (e[a + 1][o + 1] = n),
              (s = !0);
            break;
          }
    }
    function r(e, t, n, i, r) {
      var a,
        o,
        s = !1;
      for (a = 0; a < n && !s; a++)
        for (o = 0; o < i; o++)
          if (r) {
            if (void 0 === e[a][o] && void 0 === e[a][o + 1]) {
              (e[a][o] = t), (e[a][o + 1] = t), (s = !0);
              break;
            }
          } else if (void 0 === e[a][o]) {
            (e[a][o] = t), (s = !0);
            break;
          }
    }
    function a(e, t, n, i) {
      var r,
        a,
        o = !1;
      for (r = 0; r < n && !o; r++)
        for (a = 0; a < i; a++)
          if (void 0 === e[r][a] && r + 1 < n && void 0 === e[r + 1][a]) {
            (e[r + 1][a] = t), (e[r][a] = t), (o = !0);
            break;
          }
    }
    function o(e) {
      var t = {
        album_name: _attr(e, "data-album_name") || "",
        columns: parseInt(_attr(e, "data-columns")),
        rows: parseInt(_attr(e, "data-rows")),
        crop_type: _attr(e, "data-crop_type"),
        enable_caption: _attr(e, "data-enable_caption"),
        collage_type: _attr(e, "data-collage_type"),
        style: _attr(e, "data-style"),
      };
      return (
        isNaN(t.columns) && (t.columns = 5),
        isNaN(t.rows) && (t.rows = ""),
        "false" === t.enable_caption
          ? (t.enable_caption = !1)
          : "true" === t.enable_caption
          ? (t.enable_caption = !0)
          : (t.enable_caption = !1),
        t.collage_type || (t.collage_type = "gallery"),
        t
      );
    }
    function s(e, t) {
      (this.id = getRandomInt(1e4, 999999)),
        (this.options = t),
        (this.container = e),
        (this.items = _getByClass("hb-grid-item", e)),
        (this.itemsRemaining = this.items.length),
        this.rCount,
        this.cCount,
        this.init();
    }
    function l() {
      c++;
      var e = JSON.parse(JSON.stringify(d)),
        t = 0;
      for (var n in e)
        e.hasOwnProperty(n) &&
          (e[n].isLikeSquare
            ? (t += 4)
            : e[n].isLandScape
            ? getRandomInt(1, 2) % 2 == 0
              ? ((t += 2), (e[n].isTwoCell = !0))
              : (t += 1)
            : e[n].isPortrait && (t += 2));
      var i = this.options.columns;
      if (i * Math.ceil(t / i) === t) {
        this.createGrid(e, t);
        for (var r in e)
          e[r].isLikeSquare ? 0 : e[r].isPortrait ? 0 : e[r].isLandScape && 0;
      } else l.call(this, e);
    }
    window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      });
    var u = [];
    (s.prototype.init = function () {
      function t() {
        r.checkIfLoadDone();
      }
      var i = n(e(document.body).width),
        r = this;
      i <= 320
        ? (this.options.columns = 1)
        : i <= 480 && (this.options.columns = 2);
      for (var a = this.items.length - 1; a >= 0; a--)
        (this.items[a].style.display = "none"),
          _get("img", this.items[a]).complete
            ? r.checkIfLoadDone()
            : _bind(_get("img", this.items[a]), "load", t);
    }),
      (s.prototype.checkIfLoadDone = function () {
        this.itemsRemaining--, 0 === this.itemsRemaining && this.onLayoutLoad();
      }),
      (s.prototype.onLayoutLoad = function () {
        this.getDimensions();
        for (var e = this.items.length - 1; e >= 0; e--) {
          var t = this.items[e];
          (t.style.display = "block"), _addClass(t, "zoomIn");
        }
      });
    var d,
      c = 0;
    return (
      (s.prototype.getDimensions = function () {
        function e(e) {
          var t = (100 * this.width) / this.height;
          (r[e] = {
            w: this.width,
            h: this.height,
            isLikeSquare: t > 80 && t < 140,
            isLandScape: t > 100,
            isPortrait: t < 100,
          }),
            0 === --i && ((d = JSON.parse(JSON.stringify(r))), l.call(a));
        }
        c = 0;
        for (
          var t = null,
            n = null,
            i = this.items.length,
            r = {},
            a = this,
            o = 0,
            s = this.items.length;
          o < s;
          o++
        )
          (t = _get("img", this.items[o])),
            _bind((n = new Image()), "load", e.bind(n, o, this)),
            (n.src = t.src);
      }),
      (s.prototype.createGrid = function (e, t) {
        var n = this.items;
        this.imgDimensions = e;
        var o = this.options.columns,
          s = Math.ceil(t / o);
        (this.rCount = s), (this.cCount = o);
        for (
          var u,
            d = n.length,
            c = new (function (e, t) {
              for (var n = new Array(e), i = 0; i < e; i++) n[i] = new Array(t);
              return n;
            })(s, o),
            h = 0,
            p = 0,
            f = d;
          p < f;
          p++
        )
          e[p].isLikeSquare
            ? i(c, p, s, o)
            : e[p].isLandScape
            ? r(c, p, s, o, e[p].isTwoCell)
            : e[p].isPortrait && a(c, p, s, o);
        this.matrix = c;
        for (var m = new Array(d), g = 0; g < s; g++)
          for (u = 0; u < o; u++)
            void 0 === m[(h = c[g][u])] || null === m[h]
              ? ((m[h] = {}),
                (m[h].startCol = u),
                (m[h].startRow = g),
                (m[h].endCol = u),
                (m[h].endRow = g))
              : ((m[h].endCol = u), (m[h].endRow = g));
        this.hasEmptyCell(m).length > 0
          ? l.call(this, e)
          : ((this.grid = m), this.positionImages(e, t));
      }),
      (s.prototype.positionImages = function (t, i) {
        var r,
          a = this.grid,
          o = this.items,
          s = 0,
          u = 0,
          d = this.options.columns,
          c =
            ((n(e(this.container).width) /
              n(e(document.documentElement).width)) *
              100) /
            d,
          h = o.length,
          p = c / 1.3;
        for (s = 0; s < h; s++) {
          if (((r = 1), !a[s])) {
            l.call(this, t);
            break;
          }
          a[s].endCol === d - 1 && (r = 0),
            (o[s].style.position = "absolute"),
            (u = a[s].endRow - a[s].startRow + 1),
            (o[s].style.height = u * p - 1 + "vw"),
            (u = a[s].endCol - a[s].startCol + 1),
            (o[s].style.width = u * c - r + "vw"),
            (o[s].style.top = a[s].startRow * p + "vw"),
            (o[s].style.left = a[s].startCol * c + "vw");
        }
        this.container.style.height = this.rCount * p + "vw";
      }),
      (s.prototype.hasEmptyCell = function () {
        for (var e = [], t = 0; t < this.rCount; t++)
          for (var n = 0; n < this.cCount; n++)
            (void 0 !== this.matrix[t] && void 0 !== this.matrix[t][n]) ||
              e.push([t, n]);
        return e;
      }),
      (s.prototype.destroy = function () {}),
      function () {
        for (
          var e = _getByClass("hb-layout"),
            t = null,
            n = null,
            i = e.length - 1;
          i >= 0;
          i--
        )
          "collage" === e[i].getAttribute("data-layout-type") &&
            ((t = o(e[i])), (n = new s(e[i], t)), u.push(n));
      }
    );
  })();
$E.callOnLoad(start);
var ZPLPForm = (function () {
    function e(e) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        "preview" != window.zs_rendering_mode)
      ) {
        for (
          var i = (a = e.target).elements,
            o = a.id.replace("myform_", ""),
            s = [],
            l = {},
            u = 0;
          u < i.length;
          u++
        ) {
          var d = {},
            c = i[u];
          if (
            ((d.field_id = $D
              .findParentByTag(c, "li")
              .getAttribute("data-element-id")),
            (d.field_type = c.type),
            "radio" == c.type || "checkbox" == c.type)
          ) {
            if (
              ("radio" == c.type && c.checked && (d.field_value = c.value),
              "checkbox" == c.type && c.checked)
            ) {
              if (l[c.name]) {
                l[c.name].field_value.push(c.value);
                continue;
              }
              (d.field_value = []), d.field_value.push(c.value);
            }
            (l[c.name] = d), s.includes(c.name) || s.push(c.name);
          } else
            "submit" != c.type &&
              "reset" != c.type &&
              ((d.field_value = c.value),
              (l[c.name] = d),
              s.includes(c.name) || s.push(c.name));
        }
        n("Please wait", "success");
        var h = {};
        (h.form_id = o),
          (h.form_field_list = l),
          (h.form_field_order = s),
          (h.domain_name = window.location.hostname),
          (h.lpageportal = window.lpageportal),
          (h.zs_resource_id = window.zs_resource_id),
          (h.zfpABEnabled = r("zfpABEnabled")),
          (h.zfpBucket = r("zfpBucket")),
          (h.zfpNewVisitor = r("zfpNewVisitor")),
          (h.zfpVisitId = r("zfpVisitId")),
          (h.zfpVisitorId = r("zfpVisitorId")),
          (h.zabUserId = r("zabUserId")),
          (h.zabVisitId = r("zabVisitId")),
          (h.zfpPZBucket = r("zfpPZBucket")),
          (h.zfpType = r("zfpType")),
          $X.post({
            url: "/landingPageSubmit",
            bodyJSON: h,
            handler: t,
            args: a,
          });
      } else alert("Subscribers cannot be added in the preview mode.");
    }
    function t(e) {
      var t = $D.findParent(e, "zplpformparent");
      n(
        t.getAttribute("data-success-msg-text") || "Successfully Added",
        "success"
      ),
        e.reset();
      var i = t.getAttribute("data-submit-action-type");
      if ("open_link" === i) {
        (r = t.getAttribute("data-link-open-url")).startsWith("http://") ||
          r.startsWith("https://") ||
          (r = "http://" + r),
          window.open(r, "_blank");
      } else if ("download_file" === i) {
        var r;
        !(function (e) {
          var t = document.createElement("a");
          document.body.appendChild(t),
            (t.download = ""),
            (t.href = e),
            t.click();
        })((r = t.getAttribute("data-link-download-url")));
      }
    }
    function n(e, t) {
      var n = $D.getAll("#formsubmit_response", a)[0];
      n && n.parentNode.removeChild(n);
      var i = document.createElement("div");
      (i.style.textAlign = "center"),
        (i.id = "formsubmit_response"),
        (i.innerHTML = e),
        (color = "success" == t ? "green" : "red"),
        (i.style.color = color),
        a.appendChild(i);
    }
    function i() {
      var e = $D.getAll("#formsubmit_response", a)[0];
      e && a.contains(e) && e.parentNode.removeChild(e);
    }
    function r(e) {
      var t = new RegExp(e + "=[^;]*"),
        n = document.cookie,
        i = t.exec(n);
      if (i) {
        var r = i[0].split("=");
        return unescape(r[1]);
      }
      return null;
    }
    $E.callOnLoad(function () {
      for (
        var t = document.querySelectorAll(".zplpform-input-container"), n = 0;
        n < t.length;
        n++
      ) {
        $E.bind(t[n], "submit", e);
        for (var r = $D.getByTag("input", t[n]), a = 0; a < r.length; a++)
          $E.bind(r[a], "keydown", i);
      }
    });
    var a;
    return { lpFormSubmit: e };
  })(),
  Countdown = (function () {
    function e() {
      e.prototype.init = function (e) {
        var i = e,
          r = new Date(i.dataset.countdownEndtime).getTime(),
          a = i.dataset.elementId,
          o = setInterval(function () {
            var e = new Date().getTime(),
              n = r - e;
            if (n < 0 || isNaN(n))
              return clearInterval(o), void t(i, "00", "00", "00", "00");
            var a = Math.floor(n / 864e5),
              s = Math.floor((n % 864e5) / 36e5),
              l = Math.floor((n % 36e5) / 6e4),
              u = Math.floor((n % 6e4) / 1e3);
            t(i, a, s, l, u);
          }, 1e3);
        n[a] = o;
      };
    }
    function t(e, t, n, i, r) {
      ($D.getByClass("timerdays", e)[0].innerHTML =
        1 == t.toString().length ? "0" + t : t),
        ($D.getByClass("timerhours", e)[0].innerHTML =
          1 == n.toString().length ? "0" + n : n),
        ($D.getByClass("timerminutes", e)[0].innerHTML =
          1 == i.toString().length ? "0" + i : i),
        ($D.getByClass("timerseconds", e)[0].innerHTML =
          1 == r.toString().length ? "0" + r : r);
    }
    var n = {};
    $E.callOnLoad(function () {
      for (
        var t = document.querySelectorAll(".zpcountdown-container"), n = 0;
        n < t.length;
        n++
      ) {
        var i = t[n];
        new e().init(i);
      }
    }),
      (window.bindCountdownElement = function (t) {
        new e().init(t);
      }),
      (window.stopTimer = function (e, t) {
        var i = e.dataset.elementId;
        (x = n[i]),
          clearInterval(x),
          t &&
            (($D.getByClass("timerdays", e)[0].innerHTML = "00"),
            ($D.getByClass("timerhours", e)[0].innerHTML = "00"),
            ($D.getByClass("timerminutes", e)[0].innerHTML = "00"),
            ($D.getByClass("timerseconds", e)[0].innerHTML = "00"));
      });
  })();
