/* @preserve
 * Bigemap 2.1.0+doc-translated.fa4f6f5, a JS library for interactive maps. http://bigemapjs.com
 * (c) 2018 BIGEMAP
 */
!function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.BM = {})
}(this, function (t) {
    "use strict";

    function i(t) {
        var i, e, n, s;
        for (e = 1, n = arguments.length; e < n; e++) {
            s = arguments[e];
            for (i in s) t[i] = s[i]
        }
        return t
    }

    function e(t, i) {
        var e = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function () {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._bigemap_id = t._bigemap_id || ++vi, t._bigemap_id
    }

    function s(t, i, e) {
        var n, s, o, a;
        return a = function () {
            n = !1, s && (o.apply(e, s), s = !1)
        }, o = function () {
            n ? s = arguments : (t.apply(e, arguments), setTimeout(a, i), n = !0)
        }
    }

    function o(t, i, e) {
        var n = i[1], s = i[0], o = n - s;
        return t === n && e ? t : ((t - s) % o + o) % o + s
    }

    function a() {
        return !1
    }

    function r(t, i) {
        var e = Math.pow(10, void 0 === i ? 6 : i);
        return Math.round(t * e) / e
    }

    function h(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function l(t) {
        return h(t).split(/\s+/)
    }

    function u(t, i) {
        t.hasOwnProperty("options") || (t.options = t.options ? gi(t.options) : {});
        for (var e in i) t.options[e] = i[e];
        return t.options
    }

    function c(t, i) {
        return t.replace(yi, function (t, e) {
            var n = i[e];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(i)), n
        })
    }

    function d(t, i) {
        for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
        return -1
    }

    function p(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var i = +new Date, e = Math.max(0, 16 - (i - xi));
        return xi = i + e, window.setTimeout(t, e)
    }

    function _(t, i, n) {
        if (!n || wi !== m) return wi.call(window, e(t, i));
        t.call(i)
    }

    function f(t) {
        t && Ti.call(window, t)
    }

    function g(t, i) {
        if (!i || !i.length) return !1;
        for (var e = 0; e < i.length; e++) if (i[e] === t) return !0;
        return !1
    }

    function v(t, i) {
        -1 === t.indexOf("/") ? i.loadID(t) : i.loadURL(t)
    }

    function y(t) {
        "object" == typeof console && "function" == typeof console.error && console.error(t)
    }

    function M(t, i) {
        if (typeof t !== i) throw new Error("Invalid argument: " + i + " expected")
    }

    function b(t, i) {
        if (!g(t, i)) throw new Error("Invalid argument: " + t + " given, valid values are " + i.join(", "))
    }

    function x(t) {
        return t.replace(/<[^<]+>/g, "")
    }

    function w(t, e) {
        return !e || t.accessToken ? t : i({accessToken: e}, t)
    }

    function T(t, i) {
        if (i || (i = 16), void 0 === t && (t = 128), t <= 0) return "0";
        for (var e = Math.log(Math.pow(2, t)) / Math.log(i), n = 2; e === 1 / 0; n *= 2) e = Math.log(Math.pow(2, t / n)) / Math.log(i) * n;
        for (var s = e - Math.floor(e), o = "", n = 0; n < Math.floor(e); n++) o = (r = Math.floor(Math.random() * i).toString(i)) + o;
        if (s) {
            var a = Math.pow(i, s), r = Math.floor(Math.random() * a).toString(i);
            o = r + o
        }
        var h = parseInt(o, i);
        return h !== 1 / 0 && h >= Math.pow(2, t) ? T(t, i) : o
    }

    function L() {
    }

    function P(t) {
        if (BM && BM.Mixin) {
            t = Mi(t) ? t : [t];
            for (var i = 0; i < t.length; i++) t[i] === BM.Mixin.Events && console.warn("Deprecated include of BM.Mixin.Events: this property will be removed in future releases, please inherit from BM.Evented instead.", (new Error).stack)
        }
    }

    function E(t, i, e) {
        this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
    }

    function C(t, i, e) {
        return t instanceof E ? t : Mi(t) ? new E(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new E(t.x, t.y) : new E(t, i, e)
    }

    function S(t, i) {
        if (t) for (var e = i ? [t, i] : t, n = 0, s = e.length; n < s; n++) this.extend(e[n])
    }

    function k(t, i) {
        return !t || t instanceof S ? t : new S(t, i)
    }

    function A(t, i) {
        if (t) for (var e = i ? [t, i] : t, n = 0, s = e.length; n < s; n++) this.extend(e[n])
    }

    function z(t, i) {
        return t instanceof A ? t : new A(t, i)
    }

    function I(t) {
        return new A([[t[1], t[0]], [t[3], t[2]]])
    }

    function O(t, i, e) {
        if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
        this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
    }

    function R(t, i, e) {
        return t instanceof O ? t : Mi(t) && "object" != typeof t[0] ? 3 === t.length ? new O(t[0], t[1], t[2]) : 2 === t.length ? new O(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new O(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new O(t, i, e)
    }

    function N(t, i, e, n) {
        if (Mi(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
        this._a = t, this._b = i, this._c = e, this._d = n
    }

    function B(t, i, e, n) {
        return new N(t, i, e, n)
    }

    function Z(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function D(t, i) {
        var e, n, s, o, a, r, h = "";
        for (e = 0, s = t.length; e < s; e++) {
            for (n = 0, o = (a = t[e]).length; n < o; n++) r = a[n], h += (n ? "L" : "M") + r.x + " " + r.y;
            h += i ? pe ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function j(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function H(t, i, e, n) {
        return "touchstart" === i ? G(t, e, n) : "touchmove" === i ? K(t, e, n) : "touchend" === i && Q(t, e, n), this
    }

    function q(t, i, e) {
        var n = t["_bigemap_" + i + e];
        return "touchstart" === i ? t.removeEventListener(fe, n, !1) : "touchmove" === i ? t.removeEventListener(ge, n, !1) : "touchend" === i && (t.removeEventListener(ve, n, !1), t.removeEventListener(ye, n, !1)), this
    }

    function G(t, i, n) {
        var s = e(function (t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Me.indexOf(t.target.tagName) < 0)) return;
                ot(t)
            }
            V(t, i)
        });
        t["_bigemap_touchstart" + n] = s, t.addEventListener(fe, s, !1), xe || (document.documentElement.addEventListener(fe, F, !0), document.documentElement.addEventListener(ge, U, !0), document.documentElement.addEventListener(ve, W, !0), document.documentElement.addEventListener(ye, W, !0), xe = !0)
    }

    function F(t) {
        be[t.pointerId] = t, we++
    }

    function U(t) {
        be[t.pointerId] && (be[t.pointerId] = t)
    }

    function W(t) {
        delete be[t.pointerId], we--
    }

    function V(t, i) {
        t.touches = [];
        for (var e in be) t.touches.push(be[e]);
        t.changedTouches = [t], i(t)
    }

    function K(t, i, e) {
        var n = function (t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && V(t, i)
        };
        t["_bigemap_touchmove" + e] = n, t.addEventListener(ge, n, !1)
    }

    function Q(t, i, e) {
        var n = function (t) {
            V(t, i)
        };
        t["_bigemap_touchend" + e] = n, t.addEventListener(ve, n, !1), t.addEventListener(ye, n, !1)
    }

    function J(t, i, e) {
        function n(t) {
            var i;
            if (re) {
                if (!ji || "mouse" === t.pointerType) return;
                i = we
            } else i = t.touches.length;
            if (!(i > 1)) {
                var e = Date.now(), n = e - (o || e);
                a = t.touches ? t.touches[0] : t, r = n > 0 && n <= h, o = e
            }
        }

        function s(t) {
            if (r && !a.cancelBubble) {
                if (re) {
                    if (!ji || "mouse" === t.pointerType) return;
                    var e, n, s = {};
                    for (n in a) e = a[n], s[n] = e && e.bind ? e.bind(a) : e;
                    a = s
                }
                a.type = "dblclick", i(a), o = null
            }
        }

        var o, a, r = !1, h = 250;
        return t[Pe + Te + e] = n, t[Pe + Le + e] = s, t[Pe + "dblclick" + e] = i, t.addEventListener(Te, n, !1), t.addEventListener(Le, s, !1), t.addEventListener("dblclick", i, !1), this
    }

    function X(t, i) {
        var e = t[Pe + Te + i], n = t[Pe + Le + i], s = t[Pe + "dblclick" + i];
        return t.removeEventListener(Te, e, !1), t.removeEventListener(Le, n, !1), ji || t.removeEventListener("dblclick", s, !1), this
    }

    function Y(t, i, e, n) {
        if ("object" == typeof i) for (var s in i) tt(t, s, i[s], e); else for (var o = 0, a = (i = l(i)).length; o < a; o++) tt(t, i[o], e, n);
        return this
    }

    function $(t, i, e, n) {
        if ("object" == typeof i) for (var s in i) it(t, s, i[s], e); else if (i) for (var o = 0, a = (i = l(i)).length; o < a; o++) it(t, i[o], e, n); else {
            for (var r in t[Ee]) it(t, r, t[Ee][r]);
            delete t[Ee]
        }
        return this
    }

    function tt(t, i, e, s) {
        var o = i + n(e) + (s ? "_" + n(s) : "");
        if (t[Ee] && t[Ee][o]) return this;
        var a = function (i) {
            return e.call(s || t, i || window.event)
        }, r = a;
        re && 0 === i.indexOf("touch") ? H(t, i, a, o) : !he || "dblclick" !== i || !J || re && Vi ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : "mouseenter" === i || "mouseleave" === i ? (a = function (i) {
            i = i || window.event, ct(t, i) && r(i)
        }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", a, !1)) : ("click" === i && qi && (a = function (t) {
            dt(t, r)
        }), t.addEventListener(i, a, !1)) : "attachEvent" in t && t.attachEvent("on" + i, a) : J(t, a, o), t[Ee] = t[Ee] || {}, t[Ee][o] = a
    }

    function it(t, i, e, s) {
        var o = i + n(e) + (s ? "_" + n(s) : ""), a = t[Ee] && t[Ee][o];
        if (!a) return this;
        re && 0 === i.indexOf("touch") ? q(t, i, o) : !he || "dblclick" !== i || !X || re && Vi ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, a, !1) : "detachEvent" in t && t.detachEvent("on" + i, a) : X(t, o), t[Ee][o] = null
    }

    function et(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, ut(t), this
    }

    function nt(t) {
        return tt(t, "mousewheel", et), this
    }

    function st(t) {
        return Y(t, "mousedown touchstart dblclick", et), tt(t, "click", lt), this
    }

    function ot(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function at(t) {
        return ot(t), et(t), this
    }

    function rt(t, i) {
        if (!i) return new E(t.clientX, t.clientY);
        var e = i.getBoundingClientRect(), n = e.width / i.offsetWidth || 1, s = e.height / i.offsetHeight || 1;
        return new E(t.clientX / n - e.left - i.clientLeft, t.clientY / s - e.top - i.clientTop)
    }

    function ht(t) {
        return ji ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ce : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function lt(t) {
        Se[t.type] = !0
    }

    function ut(t) {
        var i = Se[t.type];
        return Se[t.type] = !1, i
    }

    function ct(t, i) {
        var e = i.relatedTarget;
        if (!e) return !0;
        try {
            for (; e && e !== t;) e = e.parentNode
        } catch (t) {
            return !1
        }
        return e !== t
    }

    function dt(t, i) {
        var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp, n = Ai && e - Ai;
        n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? at(t) : (Ai = e, i(t))
    }

    function pt(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function mt(t, i) {
        var e = t.style[i] || t.currentStyle && t.currentStyle[i];
        if ((!e || "auto" === e) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            e = n ? n[i] : null
        }
        return "auto" === e ? null : e
    }

    function _t(t, i, e) {
        var n = document.createElement(t);
        return n.className = i || "", e && e.appendChild(n), n
    }

    function ft(t) {
        var i = t.parentNode;
        i && i.removeChild(t)
    }

    function gt(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function vt(t) {
        var i = t.parentNode;
        i.lastChild !== t && i.appendChild(t)
    }

    function yt(t) {
        var i = t.parentNode;
        i.firstChild !== t && i.insertBefore(t, i.firstChild)
    }

    function Mt(t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var e = Tt(t);
        return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
    }

    function bt(t, i) {
        if (void 0 !== t.classList) for (var e = l(i), n = 0, s = e.length; n < s; n++) t.classList.add(e[n]); else if (!Mt(t, i)) {
            var o = Tt(t);
            wt(t, (o ? o + " " : "") + i)
        }
    }

    function xt(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : wt(t, h((" " + Tt(t) + " ").replace(" " + i + " ", " ")))
    }

    function wt(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
    }

    function Tt(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function Lt(t, i) {
        "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && Pt(t, i)
    }

    function Pt(t, i) {
        var e = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
            e = t.filters.item(n)
        } catch (t) {
            if (1 === i) return
        }
        i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
    }

    function Et(t) {
        for (var i = document.documentElement.style, e = 0; e < t.length; e++) if (t[e] in i) return t[e];
        return !1
    }

    function Ct(t, i, e) {
        var n = i || new E(0, 0);
        t.style[Ae] = ($i ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
    }

    function St(t, i) {
        t._bigemap_pos = i, ee ? Ct(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
    }

    function kt(t) {
        return t._bigemap_pos || new E(0, 0)
    }

    function At() {
        Y(window, "dragstart", ot)
    }

    function zt() {
        $(window, "dragstart", ot)
    }

    function It(t) {
        for (; -1 === t.tabIndex;) t = t.parentNode;
        t.style && (Ot(), Re = t, Ne = t.style.outline, t.style.outline = "none", Y(window, "keydown", Ot))
    }

    function Ot() {
        Re && (Re.style.outline = Ne, Re = void 0, Ne = void 0, $(window, "keydown", Ot))
    }

    function Rt(t, i) {
        if (!(i = i || BM.accessToken) && Ze.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use Bigemap.js. ");
        var e = "https:" === document.location.protocol || Ze.FORCE_HTTPS ? Ze.HTTPS_URL : Ze.HTTP_URL;
        if (e = e.replace(/\/v2$/, ""), e += t, Ze.REQUIRE_ACCESS_TOKEN) {
            if ("s" === i[0]) throw new Error("Use a public access token (pk.*) with Bigemap.js, not a secret access token (sk.*). ");
            e += -1 !== e.indexOf("?") ? "&access_token=" : "?access_token=", e += i
        }
        return e
    }

    function Nt(t, i) {
        if (0 === t.indexOf("mapbox://styles")) throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");
        if (-1 !== t.indexOf("/")) return t;
        var e = Rt("/v2/" + t + ".json", i);
        return 0 === e.indexOf("https") && (e += "&secure"), e
    }

    function Bt() {
        var t = Rt("/tokens/v1", "none");
        return 0 === t.indexOf("https") && (t += "&secure"), t
    }

    function Zt(t, i) {
        return i = {exports: {}}, t(i, i.exports), i.exports
    }

    function Dt(t, i) {
        return M(t, "string"), M(i, "function"), t = t.replace(je, function (t, i) {
            return "withCredentials" in new window.XMLHttpRequest ? "https:" === i || "https:" === document.location.protocol ? "https:" : "http:" : document.location.protocol
        }), De(t, function (t, e) {
            !t && e && (e = JSON.parse(e.responseText)), i(t, e)
        })
    }

    function jt(t) {
        var i = Bt();
        Dt(i, e(function (e, n) {
            return e ? (y("could not load Token at " + i), t(e)) : n ? (BM.accessToken = n.token, t(null, n.token)) : void 0
        }, this))
    }

    function Ht(t) {
        return /^https?/.test(t.getScheme()) ? t.toString() : /^mailto?/.test(t.getScheme()) ? t.toString() : "data" == t.getScheme() && /^image/.test(t.getPath()) ? t.toString() : void 0
    }

    function qt(t) {
        return t
    }

    function Gt(t, i) {
        if (!i || !t.length) return t.slice();
        var e = i * i;
        return t = Vt(t, e), t = Ut(t, e)
    }

    function Ft(t, i, e) {
        return Math.sqrt(Yt(t, i, e, !0))
    }

    function Ut(t, i) {
        var e = t.length, n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
        n[0] = n[e - 1] = 1, Wt(t, n, i, 0, e - 1);
        var s, o = [];
        for (s = 0; s < e; s++) n[s] && o.push(t[s]);
        return o
    }

    function Wt(t, i, e, n, s) {
        var o, a, r, h = 0;
        for (a = n + 1; a <= s - 1; a++) (r = Yt(t[a], t[n], t[s], !0)) > h && (o = a, h = r);
        h > e && (i[o] = 1, Wt(t, i, e, n, o), Wt(t, i, e, o, s))
    }

    function Vt(t, i) {
        for (var e = [t[0]], n = 1, s = 0, o = t.length; n < o; n++) Xt(t[n], t[s]) > i && (e.push(t[n]), s = n);
        return s < o - 1 && e.push(t[o - 1]), e
    }

    function Kt(t, i, e, n, s) {
        var o, a, r, h = n ? $e : Jt(t, e), l = Jt(i, e);
        for ($e = l; ;) {
            if (!(h | l)) return [t, i];
            if (h & l) return !1;
            r = Jt(a = Qt(t, i, o = h || l, e, s), e), o === h ? (t = a, h = r) : (i = a, l = r)
        }
    }

    function Qt(t, i, e, n, s) {
        var o, a, r = i.x - t.x, h = i.y - t.y, l = n.min, u = n.max;
        return 8 & e ? (o = t.x + r * (u.y - t.y) / h, a = u.y) : 4 & e ? (o = t.x + r * (l.y - t.y) / h, a = l.y) : 2 & e ? (o = u.x, a = t.y + h * (u.x - t.x) / r) : 1 & e && (o = l.x, a = t.y + h * (l.x - t.x) / r), new E(o, a, s)
    }

    function Jt(t, i) {
        var e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
    }

    function Xt(t, i) {
        var e = i.x - t.x, n = i.y - t.y;
        return e * e + n * n
    }

    function Yt(t, i, e, n) {
        var s, o = i.x, a = i.y, r = e.x - o, h = e.y - a, l = r * r + h * h;
        return l > 0 && ((s = ((t.x - o) * r + (t.y - a) * h) / l) > 1 ? (o = e.x, a = e.y) : s > 0 && (o += r * s, a += h * s)), r = t.x - o, h = t.y - a, n ? r * r + h * h : new E(o, a)
    }

    function $t(t) {
        return !Mi(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function ti(t) {
        return console.warn("Deprecated use of _flat, please use BM.LineUtil.isFlat instead."), $t(t)
    }

    function ii(t, i, e) {
        var n, s, o, a, r, h, l, u, c, d = [1, 4, 2, 8];
        for (s = 0, l = t.length; s < l; s++) t[s]._code = Jt(t[s], i);
        for (a = 0; a < 4; a++) {
            for (u = d[a], n = [], s = 0, o = (l = t.length) - 1; s < l; o = s++) r = t[s], h = t[o], r._code & u ? h._code & u || ((c = Qt(h, r, u, i, e))._code = Jt(c, i), n.push(c)) : (h._code & u && ((c = Qt(h, r, u, i, e))._code = Jt(c, i), n.push(c)), n.push(r));
            t = n
        }
        return t
    }

    function ei(t) {
        return new dn(t)
    }

    function ni(t, i) {
        return new _n(t, i)
    }

    function si(t, i) {
        var e, n, s, o, a = "Feature" === t.type ? t.geometry : t, r = a ? a.coordinates : null, h = [],
            l = i && i.pointToLayer, u = i && i.coordsToLatLng || oi;
        if (!r && !a) return null;
        switch (a.type) {
            case"Point":
                return e = u(r), l ? l(t, e) : new _n(e);
            case"MultiPoint":
                for (s = 0, o = r.length; s < o; s++) e = u(r[s]), h.push(l ? l(t, e) : new _n(e));
                return new cn(h);
            case"LineString":
            case"MultiLineString":
                return n = ai(r, "LineString" === a.type ? 0 : 1, u), new yn(n, i);
            case"Polygon":
            case"MultiPolygon":
                return n = ai(r, "Polygon" === a.type ? 1 : 2, u), new Mn(n, i);
            case"GeometryCollection":
                for (s = 0, o = a.geometries.length; s < o; s++) {
                    var c = si({geometry: a.geometries[s], type: "Feature", properties: t.properties}, i);
                    c && h.push(c)
                }
                return new cn(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function oi(t) {
        return new O(t[1], t[0], t[2])
    }

    function ai(t, i, e) {
        for (var n, s = [], o = 0, a = t.length; o < a; o++) n = i ? ai(t[o], i - 1, e) : (e || oi)(t[o]), s.push(n);
        return s
    }

    function ri(t, i) {
        return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)] : [r(t.lng, i), r(t.lat, i)]
    }

    function hi(t, i, e, n) {
        for (var s = [], o = 0, a = t.length; o < a; o++) s.push(i ? hi(t[o], i - 1, e, n) : ri(t[o], n));
        return !i && e && s.push(s[0]), s
    }

    function li(t, e) {
        return t.feature ? i({}, t.feature, {geometry: e}) : ui(e)
    }

    function ui(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function ci(t, i) {
        return new bn(t, i)
    }

    function di(t, i) {
        return new Zn(t, i)
    }

    function pi(t, i) {
        return new Un(t, i)
    }

    function mi(t) {
        return de ? new Vn(t) : null
    }

    function _i(t) {
        return pe || me ? new Xn(t) : null
    }

    var fi = Object.freeze;
    Object.freeze = function (t) {
        return t
    };
    var gi = Object.create || function () {
            function t() {
            }

            return function (i) {
                return t.prototype = i, new t
            }
        }(), vi = 0, yi = /\{ *([\w_-]+) *\}/g, Mi = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, bi = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", xi = 0,
        wi = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
        Ti = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
            window.clearTimeout(t)
        }, Li = Object.freeze({
            freeze: fi,
            extend: i,
            create: gi,
            bind: e,
            get lastId() {
                return vi
            },
            stamp: n,
            throttle: s,
            wrapNum: o,
            falseFn: a,
            formatNum: r,
            trim: h,
            splitWords: l,
            setOptions: u,
            getParamString: function (t, i, e) {
                var n = [];
                for (var s in t) n.push(encodeURIComponent(e ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
                return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
            },
            template: c,
            isArray: Mi,
            indexOf: d,
            emptyImageUrl: bi,
            requestFn: wi,
            cancelFn: Ti,
            requestAnimFrame: _,
            cancelAnimFrame: f,
            idUrl: v,
            log: y,
            strict: M,
            strictInstance: function (t, i, e) {
                if (!(t instanceof i)) throw new Error("Invalid argument: " + e + " expected")
            },
            strictOneof: b,
            stripTags: x,
            withAccessToken: w,
            hat: T,
            rack: function (t, i, e) {
                var n = function (n) {
                    var o = 0;
                    do {
                        if (o++ > 10) {
                            if (!e) throw new Error("too many ID collisions, use more bits");
                            t += e
                        }
                        var a = T(t, i)
                    } while (Object.hasOwnProperty.call(s, a));
                    return s[a] = n, a
                }, s = n.hats = {};
                return n.get = function (t) {
                    return n.hats[t]
                }, n.set = function (t, i) {
                    return n.hats[t] = i, n
                }, n.bits = t || 128, n.base = i || 16, n
            }
        });
    L.extend = function (t) {
        var e = function () {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }, n = e.__super__ = this.prototype, s = gi(n);
        s.constructor = e, e.prototype = s;
        for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
        return t.statics && (i(e, t.statics), delete t.statics), t.includes && (P(t.includes), i.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = i(gi(s.options), t.options)), i(s, t), s._initHooks = [], s.callInitHooks = function () {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, i = s._initHooks.length; t < i; t++) s._initHooks[t].call(this)
            }
        }, e
    }, L.include = function (t) {
        return i(this.prototype, t), this
    }, L.mergeOptions = function (t) {
        return i(this.prototype.options, t), this
    }, L.addInitHook = function (t) {
        var i = Array.prototype.slice.call(arguments, 1), e = "function" == typeof t ? t : function () {
            this[t].apply(this, i)
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
    };
    var Pi = {
        on: function (t, i, e) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], i); else for (var s = 0, o = (t = l(t)).length; s < o; s++) this._on(t[s], i, e);
            return this
        }, off: function (t, i, e) {
            if (t) if ("object" == typeof t) for (var n in t) this._off(n, t[n], i); else for (var s = 0, o = (t = l(t)).length; s < o; s++) this._off(t[s], i, e); else delete this._events;
            return this
        }, _on: function (t, i, e) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), e === this && (e = void 0);
            for (var s = {
                fn: i,
                ctx: e
            }, o = n, a = 0, r = o.length; a < r; a++) if (o[a].fn === i && o[a].ctx === e) return;
            o.push(s)
        }, _off: function (t, i, e) {
            var n, s, o;
            if (this._events && (n = this._events[t])) if (i) {
                if (e === this && (e = void 0), n) for (s = 0, o = n.length; s < o; s++) {
                    var r = n[s];
                    if (r.ctx === e && r.fn === i) return r.fn = a, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(s, 1)
                }
            } else {
                for (s = 0, o = n.length; s < o; s++) n[s].fn = a;
                delete this._events[t]
            }
        }, fire: function (t, e, n) {
            if (!this.listens(t, n)) return this;
            var s = i({}, e, {type: t, target: this});
            if (this._events) {
                var o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var a = 0, r = o.length; a < r; a++) {
                        var h = o[a];
                        h.fn.call(h.ctx || this, s)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(s), this
        }, listens: function (t, i) {
            var e = this._events && this._events[t];
            if (e && e.length) return !0;
            if (i) for (var n in this._eventParents) if (this._eventParents[n].listens(t, i)) return !0;
            return !1
        }, once: function (t, i, n) {
            if ("object" == typeof t) {
                for (var s in t) this.once(s, t[s], i);
                return this
            }
            var o = e(function () {
                this.off(t, i, n).off(t, o, n)
            }, this);
            return this.on(t, i, n).on(t, o, n)
        }, addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        }, removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        }, _propagateEvent: function (t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({layer: t.target}, t), !0)
        }
    };
    Pi.addEventListener = Pi.on, Pi.removeEventListener = Pi.clearAllEventListeners = Pi.off, Pi.addOneTimeEventListener = Pi.once, Pi.fireEvent = Pi.fire, Pi.hasEventListeners = Pi.listens;
    var Ei = L.extend(Pi);
    E.prototype = {
        clone: function () {
            return new E(this.x, this.y)
        }, add: function (t) {
            return this.clone()._add(C(t))
        }, _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, subtract: function (t) {
            return this.clone()._subtract(C(t))
        }, _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, divideBy: function (t) {
            return this.clone()._divideBy(t)
        }, _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        }, multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        }, _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        }, scaleBy: function (t) {
            return new E(this.x * t.x, this.y * t.y)
        }, unscaleBy: function (t) {
            return new E(this.x / t.x, this.y / t.y)
        }, round: function () {
            return this.clone()._round()
        }, _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, floor: function () {
            return this.clone()._floor()
        }, _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, ceil: function () {
            return this.clone()._ceil()
        }, _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, distanceTo: function (t) {
            var i = (t = C(t)).x - this.x, e = t.y - this.y;
            return Math.sqrt(i * i + e * e)
        }, equals: function (t) {
            return (t = C(t)).x === this.x && t.y === this.y
        }, contains: function (t) {
            return t = C(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        }, toString: function () {
            return "Point(" + r(this.x) + ", " + r(this.y) + ")"
        }
    }, S.prototype = {
        extend: function (t) {
            return t = C(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        }, getCenter: function (t) {
            return new E((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        }, getBottomLeft: function () {
            return new E(this.min.x, this.max.y)
        }, getTopRight: function () {
            return new E(this.max.x, this.min.y)
        }, getTopLeft: function () {
            return this.min
        }, getBottomRight: function () {
            return this.max
        }, getSize: function () {
            return this.max.subtract(this.min)
        }, contains: function (t) {
            var i, e;
            return (t = "number" == typeof t[0] || t instanceof E ? C(t) : k(t)) instanceof S ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        }, intersects: function (t) {
            t = k(t);
            var i = this.min, e = this.max, n = t.min, s = t.max, o = s.x >= i.x && n.x <= e.x,
                a = s.y >= i.y && n.y <= e.y;
            return o && a
        }, overlaps: function (t) {
            t = k(t);
            var i = this.min, e = this.max, n = t.min, s = t.max, o = s.x > i.x && n.x < e.x,
                a = s.y > i.y && n.y < e.y;
            return o && a
        }, isValid: function () {
            return !(!this.min || !this.max)
        }
    }, A.prototype = {
        extend: function (t) {
            var i, e, n = this._southWest, s = this._northEast;
            if (t instanceof O) i = t, e = t; else {
                if (!(t instanceof A)) return t ? this.extend(R(t) || z(t)) : this;
                if (i = t._southWest, e = t._northEast, !i || !e) return this
            }
            return n || s ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), s.lat = Math.max(e.lat, s.lat), s.lng = Math.max(e.lng, s.lng)) : (this._southWest = new O(i.lat, i.lng), this._northEast = new O(e.lat, e.lng)), this
        }, pad: function (t) {
            var i = this._southWest, e = this._northEast, n = Math.abs(i.lat - e.lat) * t,
                s = Math.abs(i.lng - e.lng) * t;
            return new A(new O(i.lat - n, i.lng - s), new O(e.lat + n, e.lng + s))
        }, getCenter: function () {
            return new O((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        }, getSouthWest: function () {
            return this._southWest
        }, getNorthEast: function () {
            return this._northEast
        }, getNorthWest: function () {
            return new O(this.getNorth(), this.getWest())
        }, getSouthEast: function () {
            return new O(this.getSouth(), this.getEast())
        }, getWest: function () {
            return this._southWest.lng
        }, getSouth: function () {
            return this._southWest.lat
        }, getEast: function () {
            return this._northEast.lng
        }, getNorth: function () {
            return this._northEast.lat
        }, contains: function (t) {
            t = "number" == typeof t[0] || t instanceof O || "lat" in t ? R(t) : z(t);
            var i, e, n = this._southWest, s = this._northEast;
            return t instanceof A ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= s.lat && i.lng >= n.lng && e.lng <= s.lng
        }, intersects: function (t) {
            t = z(t);
            var i = this._southWest, e = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(),
                o = s.lat >= i.lat && n.lat <= e.lat, a = s.lng >= i.lng && n.lng <= e.lng;
            return o && a
        }, overlaps: function (t) {
            t = z(t);
            var i = this._southWest, e = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(),
                o = s.lat > i.lat && n.lat < e.lat, a = s.lng > i.lng && n.lng < e.lng;
            return o && a
        }, toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        }, equals: function (t, i) {
            return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
        }, isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, O.prototype = {
        equals: function (t, i) {
            return !!t && (t = R(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
        }, toString: function (t) {
            return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")"
        }, distanceTo: function (t) {
            return Si.distance(this, R(t))
        }, wrap: function () {
            return Si.wrapLatLng(this)
        }, toBounds: function (t) {
            var i = 180 * t / 40075017, e = i / Math.cos(Math.PI / 180 * this.lat);
            return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
        }, clone: function () {
            return new O(this.lat, this.lng, this.alt)
        }
    };
    var Ci = {
        latLngToPoint: function (t, i) {
            var e = this.projection.project(t), n = this.scale(i);
            return this.transformation._transform(e, n)
        }, pointToLatLng: function (t, i) {
            var e = this.scale(i), n = this.transformation.untransform(t, e);
            return this.projection.unproject(n)
        }, project: function (t) {
            return this.projection.project(t)
        }, unproject: function (t) {
            return this.projection.unproject(t)
        }, scale: function (t) {
            return 256 * Math.pow(2, t)
        }, zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        }, getProjectedBounds: function (t) {
            if (this.infinite) return null;
            var i = this.projection.bounds, e = this.scale(t);
            return new S(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
        }, infinite: !1, wrapLatLng: function (t) {
            var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
            return new O(this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
        }, wrapLatLngBounds: function (t) {
            var i = t.getCenter(), e = this.wrapLatLng(i), n = i.lat - e.lat, s = i.lng - e.lng;
            if (0 === n && 0 === s) return t;
            var o = t.getSouthWest(), a = t.getNorthEast();
            return new A(new O(o.lat - n, o.lng - s), new O(a.lat - n, a.lng - s))
        }
    }, Si = i({}, Ci, {
        wrapLng: [-180, 180], R: 6371e3, distance: function (t, i) {
            var e = Math.PI / 180, n = t.lat * e, s = i.lat * e,
                o = Math.sin(n) * Math.sin(s) + Math.cos(n) * Math.cos(s) * Math.cos((i.lng - t.lng) * e);
            return this.R * Math.acos(Math.min(o, 1))
        }
    }), ki = {
        R: 6378137, MAX_LATITUDE: 85.0511287798, project: function (t) {
            var i = Math.PI / 180, e = this.MAX_LATITUDE, n = Math.max(Math.min(e, t.lat), -e), s = Math.sin(n * i);
            return new E(this.R * t.lng * i, this.R * Math.log((1 + s) / (1 - s)) / 2)
        }, unproject: function (t) {
            var i = 180 / Math.PI;
            return new O((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
        }, bounds: function () {
            var t = 6378137 * Math.PI;
            return new S([-t, -t], [t, t])
        }()
    };
    N.prototype = {
        transform: function (t, i) {
            return this._transform(t.clone(), i)
        }, _transform: function (t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        }, untransform: function (t, i) {
            return i = i || 1, new E((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    };
    var Ai, zi, Ii, Oi, Ri = i({}, Si, {
            code: "EPSG:3857", projection: ki, transformation: function () {
                var t = .5 / (Math.PI * ki.R);
                return B(t, .5, -t, .5)
            }()
        }), Ni = i({}, Ri, {code: "EPSG:900913"}), Bi = document.documentElement.style, Zi = "ActiveXObject" in window,
        Di = Zi && !document.addEventListener, ji = "msLaunchUri" in navigator && !("documentMode" in document),
        Hi = j("webkit"), qi = j("android"), Gi = j("android 2") || j("android 3"),
        Fi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        Ui = qi && j("Google") && Fi < 537 && !("AudioNode" in window), Wi = !!window.opera, Vi = j("chrome"),
        Ki = j("gecko") && !Hi && !Wi && !Zi, Qi = !Vi && j("safari"), Ji = j("phantom"), Xi = "OTransition" in Bi,
        Yi = 0 === navigator.platform.indexOf("Win"), $i = Zi && "transition" in Bi,
        te = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Gi, ie = "MozPerspective" in Bi,
        ee = !window.L_DISABLE_3D && ($i || te || ie) && !Xi && !Ji,
        ne = "undefined" != typeof orientation || j("mobile"), se = ne && Hi, oe = ne && te,
        ae = !window.PointerEvent && window.MSPointerEvent, re = !(!window.PointerEvent && !ae),
        he = !window.L_NO_TOUCH && (re || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        le = ne && Wi, ue = ne && Ki,
        ce = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        de = !!document.createElement("canvas").getContext,
        pe = !(!document.createElementNS || !Z("svg").createSVGRect), me = !pe && function () {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (t) {
                return !1
            }
        }(), _e = Object.freeze({
            ie: Zi,
            ielt9: Di,
            edge: ji,
            webkit: Hi,
            android: qi,
            android23: Gi,
            androidStock: Ui,
            opera: Wi,
            chrome: Vi,
            gecko: Ki,
            safari: Qi,
            phantom: Ji,
            opera12: Xi,
            win: Yi,
            ie3d: $i,
            webkit3d: te,
            gecko3d: ie,
            any3d: ee,
            mobile: ne,
            mobileWebkit: se,
            mobileWebkit3d: oe,
            msPointer: ae,
            pointer: re,
            touch: he,
            mobileOpera: le,
            mobileGecko: ue,
            retina: ce,
            canvas: de,
            svg: pe,
            vml: me
        }), fe = ae ? "MSPointerDown" : "pointerdown", ge = ae ? "MSPointerMove" : "pointermove",
        ve = ae ? "MSPointerUp" : "pointerup", ye = ae ? "MSPointerCancel" : "pointercancel",
        Me = ["INPUT", "SELECT", "OPTION"], be = {}, xe = !1, we = 0,
        Te = ae ? "MSPointerDown" : re ? "pointerdown" : "touchstart",
        Le = ae ? "MSPointerUp" : re ? "pointerup" : "touchend", Pe = "_bigemap_", Ee = "_bigemap_events",
        Ce = Yi && Vi ? 2 * window.devicePixelRatio : Ki ? window.devicePixelRatio : 1, Se = {}, ke = Object.freeze({
            on: Y,
            off: $,
            stopPropagation: et,
            disableScrollPropagation: nt,
            disableClickPropagation: st,
            preventDefault: ot,
            stop: at,
            getMousePosition: rt,
            getWheelDelta: ht,
            fakeStop: lt,
            skipped: ut,
            isExternalTarget: ct,
            addListener: Y,
            removeListener: $
        }), Ae = Et(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ze = Et(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        Ie = "webkitTransition" === ze || "OTransition" === ze ? ze + "End" : "transitionend";
    if ("onselectstart" in document) zi = function () {
        Y(window, "selectstart", ot)
    }, Ii = function () {
        $(window, "selectstart", ot)
    }; else {
        var Oe = Et(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        zi = function () {
            if (Oe) {
                var t = document.documentElement.style;
                Oi = t[Oe], t[Oe] = "none"
            }
        }, Ii = function () {
            Oe && (document.documentElement.style[Oe] = Oi, Oi = void 0)
        }
    }
    var Re, Ne, Be = Object.freeze({
            TRANSFORM: Ae,
            TRANSITION: ze,
            TRANSITION_END: Ie,
            get: pt,
            getStyle: mt,
            create: _t,
            remove: ft,
            empty: gt,
            toFront: vt,
            toBack: yt,
            hasClass: Mt,
            addClass: bt,
            removeClass: xt,
            setClass: wt,
            getClass: Tt,
            setOpacity: Lt,
            testProp: Et,
            setTransform: Ct,
            setPosition: St,
            getPosition: kt,
            get disableTextSelection() {
                return zi
            },
            get enableTextSelection() {
                return Ii
            },
            disableImageDrag: At,
            enableImageDrag: zt,
            preventOutline: It,
            restoreOutline: Ot
        }), Ze = {
            HTTP_URL: "http://localhost:3001/v2",
            HTTPS_URL: "https://localhost:3001/v2",
            FORCE_HTTPS: !1,
            REQUIRE_ACCESS_TOKEN: !0
        },
        De = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self, Zt(function (t) {
            t.exports = function (t, i, e) {
                function n(t) {
                    return t >= 200 && t < 300 || 304 === t
                }

                function s() {
                    void 0 === r.status || n(r.status) ? i.call(r, null, r) : i.call(r, r, null)
                }

                var o = !1;
                if (void 0 === window.XMLHttpRequest) return i(Error("Browser not supported"));
                if (void 0 === e) {
                    var a = t.match(/^\s*https?:\/\/[^\/]*/);
                    e = a && a[0] !== location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
                }
                var r = new window.XMLHttpRequest;
                if (e && !("withCredentials" in r)) {
                    r = new window.XDomainRequest;
                    var h = i;
                    i = function () {
                        if (o) h.apply(this, arguments); else {
                            var t = this, i = arguments;
                            setTimeout(function () {
                                h.apply(t, i)
                            }, 0)
                        }
                    }
                }
                return "onload" in r ? r.onload = s : r.onreadystatechange = function () {
                    4 === r.readyState && s()
                }, r.onerror = function (t) {
                    i.call(this, t || !0, null), i = function () {
                    }
                }, r.onprogress = function () {
                }, r.ontimeout = function (t) {
                    i.call(this, t, null), i = function () {
                    }
                }, r.onabort = function (t) {
                    i.call(this, t, null), i = function () {
                    }
                }, r.open("GET", t, !0), r.send(null), o = !0, r
            }
        })), je = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/, He = Object.freeze({
            _loadTileJSON: function (t) {
                "string" == typeof t ? jt(function (i) {
                    if (i) return this.fire("error", {error: i});
                    Dt(t = Nt(t, this.options && this.options.accessToken), e(function (i, e) {
                        i ? (y("could not load TileJSON at " + t), this.fire("error", {error: i})) : e && (this._setTileJSON(e), this.fire("ready"))
                    }, this))
                }.bind(this)) : t && "object" == typeof t && this._setTileJSON(t)
            }
        }), qe = Ei.extend({
            run: function (t, i, e, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = kt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            }, stop: function () {
                this._inProgress && (this._step(!0), this._complete())
            }, _animate: function () {
                this._animId = _(this._animate, this), this._step()
            }, _step: function (t) {
                var i = +new Date - this._startTime, e = 1e3 * this._duration;
                i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
            }, _runFrame: function (t, i) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                i && e._round(), St(this._el, e), this.fire("step")
            }, _complete: function () {
                f(this._animId), this._inProgress = !1, this.fire("end")
            }, _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }), Ge = Zt(function (t) {
            var i = function () {
                function t(t) {
                    var i = ("" + t).match(d);
                    return i ? new r(h(i[1]), h(i[2]), h(i[3]), h(i[4]), h(i[5]), h(i[6]), h(i[7])) : null
                }

                function i(t) {
                    return "string" == typeof t ? encodeURIComponent(t) : null
                }

                function e(t, i) {
                    return "string" == typeof t ? encodeURI(t).replace(i, n) : null
                }

                function n(t) {
                    var i = t.charCodeAt(0);
                    return "%" + "0123456789ABCDEF".charAt(i >> 4 & 15) + "0123456789ABCDEF".charAt(15 & i)
                }

                function s(t) {
                    return t.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                }

                function o(t) {
                    if (null === t) return null;
                    for (var i, e = s(t), n = u; (i = e.replace(n, "$1")) != e; e = i) ;
                    return e
                }

                function a(t, i) {
                    var e = t.clone(), n = i.hasScheme();
                    n ? e.setRawScheme(i.getRawScheme()) : n = i.hasCredentials(), n ? e.setRawCredentials(i.getRawCredentials()) : n = i.hasDomain(), n ? e.setRawDomain(i.getRawDomain()) : n = i.hasPort();
                    var s = i.getRawPath(), a = o(s);
                    if (n) e.setPort(i.getPort()), a = a && a.replace(c, ""); else if (n = !!s) {
                        if (47 !== a.charCodeAt(0)) {
                            var r = o(e.getRawPath() || "").replace(c, ""), h = r.lastIndexOf("/") + 1;
                            a = o((h ? r.substring(0, h) : "") + o(s)).replace(c, "")
                        }
                    } else (a = a && a.replace(c, "")) !== s && e.setRawPath(a);
                    return n ? e.setRawPath(a) : n = i.hasQuery(), n ? e.setRawQuery(i.getRawQuery()) : n = i.hasFragment(), n && e.setRawFragment(i.getRawFragment()), e
                }

                function r(t, i, e, n, s, o, a) {
                    this.scheme_ = t, this.credentials_ = i, this.domain_ = e, this.port_ = n, this.path_ = s, this.query_ = o, this.fragment_ = a, this.paramCache_ = null
                }

                function h(t) {
                    return "string" == typeof t && t.length > 0 ? t : null
                }

                var l = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
                    u = new RegExp(l), c = /^(?:\.\.\/)*(?:\.\.$)?/;
                r.prototype.toString = function () {
                    var t = [];
                    return null !== this.scheme_ && t.push(this.scheme_, ":"), null !== this.domain_ && (t.push("//"), null !== this.credentials_ && t.push(this.credentials_, "@"), t.push(this.domain_), null !== this.port_ && t.push(":", this.port_.toString())), null !== this.path_ && t.push(this.path_), null !== this.query_ && t.push("?", this.query_), null !== this.fragment_ && t.push("#", this.fragment_), t.join("")
                }, r.prototype.clone = function () {
                    return new r(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                }, r.prototype.getScheme = function () {
                    return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                }, r.prototype.getRawScheme = function () {
                    return this.scheme_
                }, r.prototype.setScheme = function (t) {
                    return this.scheme_ = e(t, p), this
                }, r.prototype.setRawScheme = function (t) {
                    return this.scheme_ = t || null, this
                }, r.prototype.hasScheme = function () {
                    return null !== this.scheme_
                }, r.prototype.getCredentials = function () {
                    return this.credentials_ && decodeURIComponent(this.credentials_)
                }, r.prototype.getRawCredentials = function () {
                    return this.credentials_
                }, r.prototype.setCredentials = function (t) {
                    return this.credentials_ = e(t, p), this
                }, r.prototype.setRawCredentials = function (t) {
                    return this.credentials_ = t || null, this
                }, r.prototype.hasCredentials = function () {
                    return null !== this.credentials_
                }, r.prototype.getDomain = function () {
                    return this.domain_ && decodeURIComponent(this.domain_)
                }, r.prototype.getRawDomain = function () {
                    return this.domain_
                }, r.prototype.setDomain = function (t) {
                    return this.setRawDomain(t && encodeURIComponent(t))
                }, r.prototype.setRawDomain = function (t) {
                    return this.domain_ = t || null, this.setRawPath(this.path_)
                }, r.prototype.hasDomain = function () {
                    return null !== this.domain_
                }, r.prototype.getPort = function () {
                    return this.port_ && decodeURIComponent(this.port_)
                }, r.prototype.setPort = function (t) {
                    if (t) {
                        if ((t = Number(t)) !== (65535 & t)) throw new Error("Bad port number " + t);
                        this.port_ = "" + t
                    } else this.port_ = null;
                    return this
                }, r.prototype.hasPort = function () {
                    return null !== this.port_
                }, r.prototype.getPath = function () {
                    return this.path_ && decodeURIComponent(this.path_)
                }, r.prototype.getRawPath = function () {
                    return this.path_
                }, r.prototype.setPath = function (t) {
                    return this.setRawPath(e(t, m))
                }, r.prototype.setRawPath = function (t) {
                    return t ? (t = String(t), this.path_ = !this.domain_ || /^\//.test(t) ? t : "/" + t) : this.path_ = null, this
                }, r.prototype.hasPath = function () {
                    return null !== this.path_
                }, r.prototype.getQuery = function () {
                    return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                }, r.prototype.getRawQuery = function () {
                    return this.query_
                }, r.prototype.setQuery = function (t) {
                    return this.paramCache_ = null, this.query_ = i(t), this
                }, r.prototype.setRawQuery = function (t) {
                    return this.paramCache_ = null, this.query_ = t || null, this
                }, r.prototype.hasQuery = function () {
                    return null !== this.query_
                }, r.prototype.setAllParameters = function (t) {
                    if ("object" == typeof t && !(t instanceof Array) && (t instanceof Object || "[object Array]" !== Object.prototype.toString.call(t))) {
                        var i = [], e = -1;
                        for (var n in t) "string" == typeof (r = t[n]) && (i[++e] = n, i[++e] = r);
                        t = i
                    }
                    this.paramCache_ = null;
                    for (var s = [], o = "", a = 0; a < t.length;) {
                        var n = t[a++], r = t[a++];
                        s.push(o, encodeURIComponent(n.toString())), o = "&", r && s.push("=", encodeURIComponent(r.toString()))
                    }
                    return this.query_ = s.join(""), this
                }, r.prototype.checkParameterCache_ = function () {
                    if (!this.paramCache_) {
                        var t = this.query_;
                        if (t) {
                            for (var i = t.split(/[&\?]/), e = [], n = -1, s = 0; s < i.length; ++s) {
                                var o = i[s].match(/^([^=]*)(?:=(.*))?$/);
                                e[++n] = decodeURIComponent(o[1]).replace(/\+/g, " "), e[++n] = decodeURIComponent(o[2] || "").replace(/\+/g, " ")
                            }
                            this.paramCache_ = e
                        } else this.paramCache_ = []
                    }
                }, r.prototype.setParameterValues = function (t, i) {
                    "string" == typeof i && (i = [i]), this.checkParameterCache_();
                    for (var e = 0, n = this.paramCache_, s = [], o = 0; o < n.length; o += 2) t === n[o] ? e < i.length && s.push(t, i[e++]) : s.push(n[o], n[o + 1]);
                    for (; e < i.length;) s.push(t, i[e++]);
                    return this.setAllParameters(s), this
                }, r.prototype.removeParameter = function (t) {
                    return this.setParameterValues(t, [])
                }, r.prototype.getAllParameters = function () {
                    return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                }, r.prototype.getParameterValues = function (t) {
                    this.checkParameterCache_();
                    for (var i = [], e = 0; e < this.paramCache_.length; e += 2) t === this.paramCache_[e] && i.push(this.paramCache_[e + 1]);
                    return i
                }, r.prototype.getParameterMap = function (t) {
                    this.checkParameterCache_();
                    for (var i = {}, e = 0; e < this.paramCache_.length; e += 2) {
                        var n = this.paramCache_[e++], s = this.paramCache_[e++];
                        n in i ? i[n].push(s) : i[n] = [s]
                    }
                    return i
                }, r.prototype.getParameterValue = function (t) {
                    this.checkParameterCache_();
                    for (var i = 0; i < this.paramCache_.length; i += 2) if (t === this.paramCache_[i]) return this.paramCache_[i + 1];
                    return null
                }, r.prototype.getFragment = function () {
                    return this.fragment_ && decodeURIComponent(this.fragment_)
                }, r.prototype.getRawFragment = function () {
                    return this.fragment_
                }, r.prototype.setFragment = function (t) {
                    return this.fragment_ = t ? encodeURIComponent(t) : null, this
                }, r.prototype.setRawFragment = function (t) {
                    return this.fragment_ = t || null, this
                }, r.prototype.hasFragment = function () {
                    return null !== this.fragment_
                };
                var d = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                    p = /[#\/\?@]/g, m = /[\#\?]/g;
                return r.parse = t, r.create = function (t, s, o, a, h, l, u) {
                    var c = new r(e(t, p), e(s, p), i(o), a > 0 ? a.toString() : null, e(h, m), null, i(u));
                    return l && ("string" == typeof l ? c.setRawQuery(l.replace(/[^?&=0-9A-Za-z_\-~.%]/g, n)) : c.setAllParameters(l)), c
                }, r.resolve = a, r.collapse_dots = o, r.utils = {
                    mimeTypeOf: function (i) {
                        var e = t(i);
                        return /\.html$/.test(e.getPath()) ? "text/html" : "application/javascript"
                    }, resolve: function (i, e) {
                        return i ? a(t(i), t(e)).toString() : "" + e
                    }
                }, r
            }(), e = {};
            if (e.atype = {
                NONE: 0,
                URI: 1,
                URI_FRAGMENT: 11,
                SCRIPT: 2,
                STYLE: 3,
                HTML: 12,
                ID: 4,
                IDREF: 5,
                IDREFS: 6,
                GLOBAL_NAME: 7,
                LOCAL_NAME: 8,
                CLASSES: 9,
                FRAME_TARGET: 10,
                MEDIA_QUERY: 13
            }, e.atype = e.atype, e.ATTRIBS = {
                "*::class": 9,
                "*::dir": 0,
                "*::draggable": 0,
                "*::hidden": 0,
                "*::id": 4,
                "*::inert": 0,
                "*::itemprop": 0,
                "*::itemref": 6,
                "*::itemscope": 0,
                "*::lang": 0,
                "*::onblur": 2,
                "*::onchange": 2,
                "*::onclick": 2,
                "*::ondblclick": 2,
                "*::onfocus": 2,
                "*::onkeydown": 2,
                "*::onkeypress": 2,
                "*::onkeyup": 2,
                "*::onload": 2,
                "*::onmousedown": 2,
                "*::onmousemove": 2,
                "*::onmouseout": 2,
                "*::onmouseover": 2,
                "*::onmouseup": 2,
                "*::onreset": 2,
                "*::onscroll": 2,
                "*::onselect": 2,
                "*::onsubmit": 2,
                "*::onunload": 2,
                "*::spellcheck": 0,
                "*::style": 3,
                "*::title": 0,
                "*::translate": 0,
                "a::accesskey": 0,
                "a::coords": 0,
                "a::href": 1,
                "a::hreflang": 0,
                "a::name": 7,
                "a::onblur": 2,
                "a::onfocus": 2,
                "a::shape": 0,
                "a::tabindex": 0,
                "a::target": 10,
                "a::type": 0,
                "area::accesskey": 0,
                "area::alt": 0,
                "area::coords": 0,
                "area::href": 1,
                "area::nohref": 0,
                "area::onblur": 2,
                "area::onfocus": 2,
                "area::shape": 0,
                "area::tabindex": 0,
                "area::target": 10,
                "audio::controls": 0,
                "audio::loop": 0,
                "audio::mediagroup": 5,
                "audio::muted": 0,
                "audio::preload": 0,
                "bdo::dir": 0,
                "blockquote::cite": 1,
                "br::clear": 0,
                "button::accesskey": 0,
                "button::disabled": 0,
                "button::name": 8,
                "button::onblur": 2,
                "button::onfocus": 2,
                "button::tabindex": 0,
                "button::type": 0,
                "button::value": 0,
                "canvas::height": 0,
                "canvas::width": 0,
                "caption::align": 0,
                "col::align": 0,
                "col::char": 0,
                "col::charoff": 0,
                "col::span": 0,
                "col::valign": 0,
                "col::width": 0,
                "colgroup::align": 0,
                "colgroup::char": 0,
                "colgroup::charoff": 0,
                "colgroup::span": 0,
                "colgroup::valign": 0,
                "colgroup::width": 0,
                "command::checked": 0,
                "command::command": 5,
                "command::disabled": 0,
                "command::icon": 1,
                "command::label": 0,
                "command::radiogroup": 0,
                "command::type": 0,
                "data::value": 0,
                "del::cite": 1,
                "del::datetime": 0,
                "details::open": 0,
                "dir::compact": 0,
                "div::align": 0,
                "dl::compact": 0,
                "fieldset::disabled": 0,
                "font::color": 0,
                "font::face": 0,
                "font::size": 0,
                "form::accept": 0,
                "form::action": 1,
                "form::autocomplete": 0,
                "form::enctype": 0,
                "form::method": 0,
                "form::name": 7,
                "form::novalidate": 0,
                "form::onreset": 2,
                "form::onsubmit": 2,
                "form::target": 10,
                "h1::align": 0,
                "h2::align": 0,
                "h3::align": 0,
                "h4::align": 0,
                "h5::align": 0,
                "h6::align": 0,
                "hr::align": 0,
                "hr::noshade": 0,
                "hr::size": 0,
                "hr::width": 0,
                "iframe::align": 0,
                "iframe::frameborder": 0,
                "iframe::height": 0,
                "iframe::marginheight": 0,
                "iframe::marginwidth": 0,
                "iframe::width": 0,
                "img::align": 0,
                "img::alt": 0,
                "img::border": 0,
                "img::height": 0,
                "img::hspace": 0,
                "img::ismap": 0,
                "img::name": 7,
                "img::src": 1,
                "img::usemap": 11,
                "img::vspace": 0,
                "img::width": 0,
                "input::accept": 0,
                "input::accesskey": 0,
                "input::align": 0,
                "input::alt": 0,
                "input::autocomplete": 0,
                "input::checked": 0,
                "input::disabled": 0,
                "input::inputmode": 0,
                "input::ismap": 0,
                "input::list": 5,
                "input::max": 0,
                "input::maxlength": 0,
                "input::min": 0,
                "input::multiple": 0,
                "input::name": 8,
                "input::onblur": 2,
                "input::onchange": 2,
                "input::onfocus": 2,
                "input::onselect": 2,
                "input::placeholder": 0,
                "input::readonly": 0,
                "input::required": 0,
                "input::size": 0,
                "input::src": 1,
                "input::step": 0,
                "input::tabindex": 0,
                "input::type": 0,
                "input::usemap": 11,
                "input::value": 0,
                "ins::cite": 1,
                "ins::datetime": 0,
                "label::accesskey": 0,
                "label::for": 5,
                "label::onblur": 2,
                "label::onfocus": 2,
                "legend::accesskey": 0,
                "legend::align": 0,
                "li::type": 0,
                "li::value": 0,
                "map::name": 7,
                "menu::compact": 0,
                "menu::label": 0,
                "menu::type": 0,
                "meter::high": 0,
                "meter::low": 0,
                "meter::max": 0,
                "meter::min": 0,
                "meter::value": 0,
                "ol::compact": 0,
                "ol::reversed": 0,
                "ol::start": 0,
                "ol::type": 0,
                "optgroup::disabled": 0,
                "optgroup::label": 0,
                "option::disabled": 0,
                "option::label": 0,
                "option::selected": 0,
                "option::value": 0,
                "output::for": 6,
                "output::name": 8,
                "p::align": 0,
                "pre::width": 0,
                "progress::max": 0,
                "progress::min": 0,
                "progress::value": 0,
                "q::cite": 1,
                "select::autocomplete": 0,
                "select::disabled": 0,
                "select::multiple": 0,
                "select::name": 8,
                "select::onblur": 2,
                "select::onchange": 2,
                "select::onfocus": 2,
                "select::required": 0,
                "select::size": 0,
                "select::tabindex": 0,
                "source::type": 0,
                "table::align": 0,
                "table::bgcolor": 0,
                "table::border": 0,
                "table::cellpadding": 0,
                "table::cellspacing": 0,
                "table::frame": 0,
                "table::rules": 0,
                "table::summary": 0,
                "table::width": 0,
                "tbody::align": 0,
                "tbody::char": 0,
                "tbody::charoff": 0,
                "tbody::valign": 0,
                "td::abbr": 0,
                "td::align": 0,
                "td::axis": 0,
                "td::bgcolor": 0,
                "td::char": 0,
                "td::charoff": 0,
                "td::colspan": 0,
                "td::headers": 6,
                "td::height": 0,
                "td::nowrap": 0,
                "td::rowspan": 0,
                "td::scope": 0,
                "td::valign": 0,
                "td::width": 0,
                "textarea::accesskey": 0,
                "textarea::autocomplete": 0,
                "textarea::cols": 0,
                "textarea::disabled": 0,
                "textarea::inputmode": 0,
                "textarea::name": 8,
                "textarea::onblur": 2,
                "textarea::onchange": 2,
                "textarea::onfocus": 2,
                "textarea::onselect": 2,
                "textarea::placeholder": 0,
                "textarea::readonly": 0,
                "textarea::required": 0,
                "textarea::rows": 0,
                "textarea::tabindex": 0,
                "textarea::wrap": 0,
                "tfoot::align": 0,
                "tfoot::char": 0,
                "tfoot::charoff": 0,
                "tfoot::valign": 0,
                "th::abbr": 0,
                "th::align": 0,
                "th::axis": 0,
                "th::bgcolor": 0,
                "th::char": 0,
                "th::charoff": 0,
                "th::colspan": 0,
                "th::headers": 6,
                "th::height": 0,
                "th::nowrap": 0,
                "th::rowspan": 0,
                "th::scope": 0,
                "th::valign": 0,
                "th::width": 0,
                "thead::align": 0,
                "thead::char": 0,
                "thead::charoff": 0,
                "thead::valign": 0,
                "tr::align": 0,
                "tr::bgcolor": 0,
                "tr::char": 0,
                "tr::charoff": 0,
                "tr::valign": 0,
                "track::default": 0,
                "track::kind": 0,
                "track::label": 0,
                "track::srclang": 0,
                "ul::compact": 0,
                "ul::type": 0,
                "video::controls": 0,
                "video::height": 0,
                "video::loop": 0,
                "video::mediagroup": 5,
                "video::muted": 0,
                "video::poster": 1,
                "video::preload": 0,
                "video::width": 0
            }, e.ATTRIBS = e.ATTRIBS, e.eflags = {
                OPTIONAL_ENDTAG: 1,
                EMPTY: 2,
                CDATA: 4,
                RCDATA: 8,
                UNSAFE: 16,
                FOLDABLE: 32,
                SCRIPT: 64,
                STYLE: 128,
                VIRTUALIZED: 256
            }, e.eflags = e.eflags, e.ELEMENTS = {
                a: 0,
                abbr: 0,
                acronym: 0,
                address: 0,
                applet: 272,
                area: 2,
                article: 0,
                aside: 0,
                audio: 0,
                b: 0,
                base: 274,
                basefont: 274,
                bdi: 0,
                bdo: 0,
                big: 0,
                blockquote: 0,
                body: 305,
                br: 2,
                button: 0,
                canvas: 0,
                caption: 0,
                center: 0,
                cite: 0,
                code: 0,
                col: 2,
                colgroup: 1,
                command: 2,
                data: 0,
                datalist: 0,
                dd: 1,
                del: 0,
                details: 0,
                dfn: 0,
                dialog: 272,
                dir: 0,
                div: 0,
                dl: 0,
                dt: 1,
                em: 0,
                fieldset: 0,
                figcaption: 0,
                figure: 0,
                font: 0,
                footer: 0,
                form: 0,
                frame: 274,
                frameset: 272,
                h1: 0,
                h2: 0,
                h3: 0,
                h4: 0,
                h5: 0,
                h6: 0,
                head: 305,
                header: 0,
                hgroup: 0,
                hr: 2,
                html: 305,
                i: 0,
                iframe: 16,
                img: 2,
                input: 2,
                ins: 0,
                isindex: 274,
                kbd: 0,
                keygen: 274,
                label: 0,
                legend: 0,
                li: 1,
                link: 274,
                map: 0,
                mark: 0,
                menu: 0,
                meta: 274,
                meter: 0,
                nav: 0,
                nobr: 0,
                noembed: 276,
                noframes: 276,
                noscript: 276,
                object: 272,
                ol: 0,
                optgroup: 0,
                option: 1,
                output: 0,
                p: 1,
                param: 274,
                pre: 0,
                progress: 0,
                q: 0,
                s: 0,
                samp: 0,
                script: 84,
                section: 0,
                select: 0,
                small: 0,
                source: 2,
                span: 0,
                strike: 0,
                strong: 0,
                style: 148,
                sub: 0,
                summary: 0,
                sup: 0,
                table: 0,
                tbody: 1,
                td: 1,
                textarea: 8,
                tfoot: 1,
                th: 1,
                thead: 1,
                time: 0,
                title: 280,
                tr: 1,
                track: 2,
                tt: 0,
                u: 0,
                ul: 0,
                var: 0,
                video: 0,
                wbr: 2
            }, e.ELEMENTS = e.ELEMENTS, e.ELEMENT_DOM_INTERFACES = {
                a: "HTMLAnchorElement",
                abbr: "HTMLElement",
                acronym: "HTMLElement",
                address: "HTMLElement",
                applet: "HTMLAppletElement",
                area: "HTMLAreaElement",
                article: "HTMLElement",
                aside: "HTMLElement",
                audio: "HTMLAudioElement",
                b: "HTMLElement",
                base: "HTMLBaseElement",
                basefont: "HTMLBaseFontElement",
                bdi: "HTMLElement",
                bdo: "HTMLElement",
                big: "HTMLElement",
                blockquote: "HTMLQuoteElement",
                body: "HTMLBodyElement",
                br: "HTMLBRElement",
                button: "HTMLButtonElement",
                canvas: "HTMLCanvasElement",
                caption: "HTMLTableCaptionElement",
                center: "HTMLElement",
                cite: "HTMLElement",
                code: "HTMLElement",
                col: "HTMLTableColElement",
                colgroup: "HTMLTableColElement",
                command: "HTMLCommandElement",
                data: "HTMLElement",
                datalist: "HTMLDataListElement",
                dd: "HTMLElement",
                del: "HTMLModElement",
                details: "HTMLDetailsElement",
                dfn: "HTMLElement",
                dialog: "HTMLDialogElement",
                dir: "HTMLDirectoryElement",
                div: "HTMLDivElement",
                dl: "HTMLDListElement",
                dt: "HTMLElement",
                em: "HTMLElement",
                fieldset: "HTMLFieldSetElement",
                figcaption: "HTMLElement",
                figure: "HTMLElement",
                font: "HTMLFontElement",
                footer: "HTMLElement",
                form: "HTMLFormElement",
                frame: "HTMLFrameElement",
                frameset: "HTMLFrameSetElement",
                h1: "HTMLHeadingElement",
                h2: "HTMLHeadingElement",
                h3: "HTMLHeadingElement",
                h4: "HTMLHeadingElement",
                h5: "HTMLHeadingElement",
                h6: "HTMLHeadingElement",
                head: "HTMLHeadElement",
                header: "HTMLElement",
                hgroup: "HTMLElement",
                hr: "HTMLHRElement",
                html: "HTMLHtmlElement",
                i: "HTMLElement",
                iframe: "HTMLIFrameElement",
                img: "HTMLImageElement",
                input: "HTMLInputElement",
                ins: "HTMLModElement",
                isindex: "HTMLUnknownElement",
                kbd: "HTMLElement",
                keygen: "HTMLKeygenElement",
                label: "HTMLLabelElement",
                legend: "HTMLLegendElement",
                li: "HTMLLIElement",
                link: "HTMLLinkElement",
                map: "HTMLMapElement",
                mark: "HTMLElement",
                menu: "HTMLMenuElement",
                meta: "HTMLMetaElement",
                meter: "HTMLMeterElement",
                nav: "HTMLElement",
                nobr: "HTMLElement",
                noembed: "HTMLElement",
                noframes: "HTMLElement",
                noscript: "HTMLElement",
                object: "HTMLObjectElement",
                ol: "HTMLOListElement",
                optgroup: "HTMLOptGroupElement",
                option: "HTMLOptionElement",
                output: "HTMLOutputElement",
                p: "HTMLParagraphElement",
                param: "HTMLParamElement",
                pre: "HTMLPreElement",
                progress: "HTMLProgressElement",
                q: "HTMLQuoteElement",
                s: "HTMLElement",
                samp: "HTMLElement",
                script: "HTMLScriptElement",
                section: "HTMLElement",
                select: "HTMLSelectElement",
                small: "HTMLElement",
                source: "HTMLSourceElement",
                span: "HTMLSpanElement",
                strike: "HTMLElement",
                strong: "HTMLElement",
                style: "HTMLStyleElement",
                sub: "HTMLElement",
                summary: "HTMLElement",
                sup: "HTMLElement",
                table: "HTMLTableElement",
                tbody: "HTMLTableSectionElement",
                td: "HTMLTableDataCellElement",
                textarea: "HTMLTextAreaElement",
                tfoot: "HTMLTableSectionElement",
                th: "HTMLTableHeaderCellElement",
                thead: "HTMLTableSectionElement",
                time: "HTMLTimeElement",
                title: "HTMLTitleElement",
                tr: "HTMLTableRowElement",
                track: "HTMLTrackElement",
                tt: "HTMLElement",
                u: "HTMLElement",
                ul: "HTMLUListElement",
                var: "HTMLElement",
                video: "HTMLVideoElement",
                wbr: "HTMLElement"
            }, e.ELEMENT_DOM_INTERFACES = e.ELEMENT_DOM_INTERFACES, e.ueffects = {
                NOT_LOADED: 0,
                SAME_DOCUMENT: 1,
                NEW_DOCUMENT: 2
            }, e.ueffects = e.ueffects, e.URIEFFECTS = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 0,
                "command::icon": 1,
                "del::cite": 0,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 0,
                "q::cite": 0,
                "video::poster": 1
            }, e.URIEFFECTS = e.URIEFFECTS, e.ltypes = {
                UNSANDBOXED: 2,
                SANDBOXED: 1,
                DATA: 0
            }, e.ltypes = e.ltypes, e.LOADERTYPES = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 2,
                "command::icon": 1,
                "del::cite": 2,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 2,
                "q::cite": 2,
                "video::poster": 1
            }, e.LOADERTYPES = e.LOADERTYPES, "i" !== "I".toLowerCase()) throw"I/i problem";
            var n = function (t) {
                function e(t) {
                    if (k.hasOwnProperty(t)) return k[t];
                    var i = t.match(A);
                    if (i) return String.fromCharCode(parseInt(i[1], 10));
                    if (i = t.match(z)) return String.fromCharCode(parseInt(i[1], 16));
                    if (O && I.test(t)) {
                        O.innerHTML = "&" + t + ";";
                        var e = O.textContent;
                        return k[t] = e, e
                    }
                    return "&" + t + ";"
                }

                function n(t, i) {
                    return e(i)
                }

                function s(t) {
                    return t.replace(R, "")
                }

                function o(t) {
                    return t.replace(N, n)
                }

                function a(t) {
                    return ("" + t).replace(Z, "&amp;").replace(j, "&lt;").replace(H, "&gt;").replace(q, "&#34;")
                }

                function r(t) {
                    return t.replace(D, "&amp;$1").replace(j, "&lt;").replace(H, "&gt;")
                }

                function h(t) {
                    var i = {
                        cdata: t.cdata || t.cdata,
                        comment: t.comment || t.comment,
                        endDoc: t.endDoc || t.endDoc,
                        endTag: t.endTag || t.endTag,
                        pcdata: t.pcdata || t.pcdata,
                        rcdata: t.rcdata || t.rcdata,
                        startDoc: t.startDoc || t.startDoc,
                        startTag: t.startTag || t.startTag
                    };
                    return function (t, e) {
                        return l(t, i, e)
                    }
                }

                function l(t, i, e) {
                    c(i, d(t), 0, {noMoreGT: !1, noMoreEndComments: !1}, e)
                }

                function u(t, i, e, n, s) {
                    return function () {
                        c(t, i, e, n, s)
                    }
                }

                function c(i, e, n, s, o) {
                    try {
                        i.startDoc && 0 == n && i.startDoc(o);
                        for (var a, r, h, l = n, c = e.length; l < c;) {
                            var d = e[l++], f = e[l];
                            switch (d) {
                                case"&":
                                    B.test(f) ? (i.pcdata && i.pcdata("&" + f, o, W, u(i, e, l, s, o)), l++) : i.pcdata && i.pcdata("&amp;", o, W, u(i, e, l, s, o));
                                    break;
                                case"</":
                                    (a = /^([-\w:]+)[^\'\"]*/.exec(f)) ? a[0].length === f.length && ">" === e[l + 1] ? (l += 2, h = a[1].toLowerCase(), i.endTag && i.endTag(h, o, W, u(i, e, l, s, o))) : l = p(e, l, i, o, W, s) : i.pcdata && i.pcdata("&lt;/", o, W, u(i, e, l, s, o));
                                    break;
                                case"<":
                                    if (a = /^([-\w:]+)\s*\/?/.exec(f)) if (a[0].length === f.length && ">" === e[l + 1]) {
                                        l += 2, h = a[1].toLowerCase(), i.startTag && i.startTag(h, [], o, W, u(i, e, l, s, o));
                                        var g = t.ELEMENTS[h];
                                        g & U && (l = _(e, {name: h, next: l, eflags: g}, i, o, W, s))
                                    } else l = m(e, l, i, o, W, s); else i.pcdata && i.pcdata("&lt;", o, W, u(i, e, l, s, o));
                                    break;
                                case"\x3c!--":
                                    if (!s.noMoreEndComments) {
                                        for (r = l + 1; r < c && (">" !== e[r] || !/--$/.test(e[r - 1])); r++) ;
                                        if (r < c) {
                                            if (i.comment) {
                                                var v = e.slice(l, r).join("");
                                                i.comment(v.substr(0, v.length - 2), o, W, u(i, e, r + 1, s, o))
                                            }
                                            l = r + 1
                                        } else s.noMoreEndComments = !0
                                    }
                                    s.noMoreEndComments && i.pcdata && i.pcdata("&lt;!--", o, W, u(i, e, l, s, o));
                                    break;
                                case"<!":
                                    if (/^\w/.test(f)) {
                                        if (!s.noMoreGT) {
                                            for (r = l + 1; r < c && ">" !== e[r]; r++) ;
                                            r < c ? l = r + 1 : s.noMoreGT = !0
                                        }
                                        s.noMoreGT && i.pcdata && i.pcdata("&lt;!", o, W, u(i, e, l, s, o))
                                    } else i.pcdata && i.pcdata("&lt;!", o, W, u(i, e, l, s, o));
                                    break;
                                case"<?":
                                    if (!s.noMoreGT) {
                                        for (r = l + 1; r < c && ">" !== e[r]; r++) ;
                                        r < c ? l = r + 1 : s.noMoreGT = !0
                                    }
                                    s.noMoreGT && i.pcdata && i.pcdata("&lt;?", o, W, u(i, e, l, s, o));
                                    break;
                                case">":
                                    i.pcdata && i.pcdata("&gt;", o, W, u(i, e, l, s, o));
                                    break;
                                case"":
                                    break;
                                default:
                                    i.pcdata && i.pcdata(d, o, W, u(i, e, l, s, o))
                            }
                        }
                        i.endDoc && i.endDoc(o)
                    } catch (t) {
                        if (t !== W) throw t
                    }
                }

                function d(t) {
                    var i = /(<\/|<\!--|<[!?]|[&<>])/g;
                    if (t += "", F) return t.split(i);
                    for (var e, n = [], s = 0; null !== (e = i.exec(t));) n.push(t.substring(s, e.index)), n.push(e[0]), s = e.index + e[0].length;
                    return n.push(t.substring(s)), n
                }

                function p(t, i, e, n, s, o) {
                    var a = f(t, i);
                    return a ? (e.endTag && e.endTag(a.name, n, s, u(e, t, i, o, n)), a.next) : t.length
                }

                function m(t, i, e, n, s, o) {
                    var a = f(t, i);
                    return a ? (e.startTag && e.startTag(a.name, a.attrs, n, s, u(e, t, a.next, o, n)), a.eflags & U ? _(t, a, e, n, s, o) : a.next) : t.length
                }

                function _(i, e, n, s, o, a) {
                    var h = i.length;
                    V.hasOwnProperty(e.name) || (V[e.name] = new RegExp("^" + e.name + "(?:[\\s\\/]|$)", "i"));
                    for (var l = V[e.name], c = e.next, d = e.next + 1; d < h && ("</" !== i[d - 1] || !l.test(i[d])); d++) ;
                    d < h && (d -= 1);
                    var p = i.slice(c, d).join("");
                    if (e.eflags & t.eflags.CDATA) n.cdata && n.cdata(p, s, o, u(n, i, d, a, s)); else {
                        if (!(e.eflags & t.eflags.RCDATA)) throw new Error("bug");
                        n.rcdata && n.rcdata(r(p), s, o, u(n, i, d, a, s))
                    }
                    return d
                }

                function f(i, e) {
                    var n = /^([-\w:]+)/.exec(i[e]), s = {};
                    s.name = n[1].toLowerCase(), s.eflags = t.ELEMENTS[s.name];
                    for (var o = i[e].substr(n[0].length), a = e + 1, r = i.length; a < r && ">" !== i[a]; a++) o += i[a];
                    if (!(r <= a)) {
                        for (var h = []; "" !== o;) if (n = G.exec(o)) {
                            if (n[4] && !n[5] || n[6] && !n[7]) {
                                for (var l = n[4] || n[6], u = !1, c = [o, i[a++]]; a < r; a++) {
                                    if (u) {
                                        if (">" === i[a]) break
                                    } else 0 <= i[a].indexOf(l) && (u = !0);
                                    c.push(i[a])
                                }
                                if (r <= a) break;
                                o = c.join("");
                                continue
                            }
                            var d = n[1].toLowerCase(), p = n[2] ? g(n[3]) : "";
                            h.push(d, p), o = o.substr(n[0].length)
                        } else o = o.replace(/^[\s\S][^a-z\s]*/, "");
                        return s.attrs = h, s.next = a + 1, s
                    }
                }

                function g(t) {
                    var i = t.charCodeAt(0);
                    return 34 !== i && 39 !== i || (t = t.substr(1, t.length - 2)), o(s(t))
                }

                function v(i) {
                    var e, n, s = function (t, i) {
                        n || i.push(t)
                    };
                    return h({
                        startDoc: function (t) {
                            e = [], n = !1
                        }, startTag: function (s, o, r) {
                            if (!n && t.ELEMENTS.hasOwnProperty(s)) {
                                var h = t.ELEMENTS[s];
                                if (!(h & t.eflags.FOLDABLE)) {
                                    var l = i(s, o);
                                    if (l) {
                                        if ("object" != typeof l) throw new Error("tagPolicy did not return object (old API?)");
                                        if (!("attribs" in l)) throw new Error("tagPolicy gave no attribs");
                                        o = l.attribs;
                                        var u, c;
                                        if ("tagName" in l ? (c = l.tagName, u = t.ELEMENTS[c]) : (c = s, u = h), h & t.eflags.OPTIONAL_ENDTAG) {
                                            var d = e[e.length - 1];
                                            !d || d.orig !== s || d.rep === c && s === c || r.push("</", d.rep, ">")
                                        }
                                        h & t.eflags.EMPTY || e.push({orig: s, rep: c}), r.push("<", c);
                                        for (var p = 0, m = o.length; p < m; p += 2) {
                                            var _ = o[p], f = o[p + 1];
                                            null !== f && void 0 !== f && r.push(" ", _, '="', a(f), '"')
                                        }
                                        r.push(">"), h & t.eflags.EMPTY && !(u & t.eflags.EMPTY) && r.push("</", c, ">")
                                    } else n = !(h & t.eflags.EMPTY)
                                }
                            }
                        }, endTag: function (i, s) {
                            if (n) n = !1; else if (t.ELEMENTS.hasOwnProperty(i)) {
                                var o = t.ELEMENTS[i];
                                if (!(o & (t.eflags.EMPTY | t.eflags.FOLDABLE))) {
                                    var a;
                                    if (o & t.eflags.OPTIONAL_ENDTAG) for (a = e.length; --a >= 0;) {
                                        var r = e[a].orig;
                                        if (r === i) break;
                                        if (!(t.ELEMENTS[r] & t.eflags.OPTIONAL_ENDTAG)) return
                                    } else for (a = e.length; --a >= 0 && e[a].orig !== i;) ;
                                    if (a < 0) return;
                                    for (var h = e.length; --h > a;) {
                                        var l = e[h].rep;
                                        t.ELEMENTS[l] & t.eflags.OPTIONAL_ENDTAG || s.push("</", l, ">")
                                    }
                                    a < e.length && (i = e[a].rep), e.length = a, s.push("</", i, ">")
                                }
                            }
                        }, pcdata: s, rcdata: s, cdata: s, endDoc: function (t) {
                            for (; e.length; e.length--) t.push("</", e[e.length - 1].rep, ">")
                        }
                    })
                }

                function y(t, e, n, s, o) {
                    if (!o) return null;
                    try {
                        var a = i.parse("" + t);
                        if (a && (!a.hasScheme() || K.test(a.getScheme()))) {
                            var r = o(a, e, n, s);
                            return r ? r.toString() : null
                        }
                    } catch (t) {
                        return null
                    }
                    return null
                }

                function M(t, i, e, n, s) {
                    if (e || t(i + " removed", {change: "removed", tagName: i}), n !== s) {
                        var o = "changed";
                        n && !s ? o = "removed" : !n && s && (o = "added"), t(i + "." + e + " " + o, {
                            change: o,
                            tagName: i,
                            attribName: e,
                            oldValue: n,
                            newValue: s
                        })
                    }
                }

                function b(t, i, e) {
                    var n;
                    return n = i + "::" + e, t.hasOwnProperty(n) ? t[n] : (n = "*::" + e, t.hasOwnProperty(n) ? t[n] : void 0)
                }

                function x(i, e) {
                    return b(t.LOADERTYPES, i, e)
                }

                function w(i, e) {
                    return b(t.URIEFFECTS, i, e)
                }

                function T(i, e, n, s, o) {
                    for (var a = 0; a < e.length; a += 2) {
                        var r, h = e[a], l = e[a + 1], u = l, c = null;
                        if (r = i + "::" + h, (t.ATTRIBS.hasOwnProperty(r) || (r = "*::" + h, t.ATTRIBS.hasOwnProperty(r))) && (c = t.ATTRIBS[r]), null !== c) switch (c) {
                            case t.atype.NONE:
                                break;
                            case t.atype.SCRIPT:
                                l = null, o && M(o, i, h, u, l);
                                break;
                            case t.atype.STYLE:
                                if (void 0 === E) {
                                    l = null, o && M(o, i, h, u, l);
                                    break
                                }
                                var d = [];
                                E(l, {
                                    declaration: function (i, e) {
                                        var s = i.toLowerCase(), o = S[s];
                                        o && (C(s, o, e, n ? function (i) {
                                            return y(i, t.ueffects.SAME_DOCUMENT, t.ltypes.SANDBOXED, {
                                                TYPE: "CSS",
                                                CSS_PROP: s
                                            }, n)
                                        } : null), d.push(i + ": " + e.join(" ")))
                                    }
                                }), l = d.length > 0 ? d.join(" ; ") : null, o && M(o, i, h, u, l);
                                break;
                            case t.atype.ID:
                            case t.atype.IDREF:
                            case t.atype.IDREFS:
                            case t.atype.GLOBAL_NAME:
                            case t.atype.LOCAL_NAME:
                            case t.atype.CLASSES:
                                l = s ? s(l) : l, o && M(o, i, h, u, l);
                                break;
                            case t.atype.URI:
                                l = y(l, w(i, h), x(i, h), {
                                    TYPE: "MARKUP",
                                    XML_ATTR: h,
                                    XML_TAG: i
                                }, n), o && M(o, i, h, u, l);
                                break;
                            case t.atype.URI_FRAGMENT:
                                l && "#" === l.charAt(0) ? (l = l.substring(1), null !== (l = s ? s(l) : l) && void 0 !== l && (l = "#" + l)) : l = null, o && M(o, i, h, u, l);
                                break;
                            default:
                                l = null, o && M(o, i, h, u, l)
                        } else l = null, o && M(o, i, h, u, l);
                        e[a + 1] = l
                    }
                    return e
                }

                function L(i, e, n) {
                    return function (s, o) {
                        if (!(t.ELEMENTS[s] & t.eflags.UNSAFE)) return {attribs: T(s, o, i, e, n)};
                        n && M(n, s, void 0, void 0, void 0)
                    }
                }

                function P(t, i) {
                    var e = [];
                    return v(i)(t, e), e.join("")
                }

                var E, C, S;
                "undefined" != typeof window && (E = window.parseCssDeclarations, C = window.sanitizeCssProperty, S = window.cssSchema);
                var k = {lt: "<", LT: "<", gt: ">", GT: ">", amp: "&", AMP: "&", quot: '"', apos: "'", nbsp: " "},
                    A = /^#(\d+)$/, z = /^#x([0-9A-Fa-f]+)$/, I = /^[A-Za-z][A-za-z0-9]+$/,
                    O = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
                    R = /\0/g, N = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g, B = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/, Z = /&/g,
                    D = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, j = /[<]/g, H = />/g, q = /\"/g,
                    G = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                    F = 3 === "a,b".split(/(,)/).length, U = t.eflags.CDATA | t.eflags.RCDATA, W = {}, V = {},
                    K = /^(?:https?|mailto|data)$/i, Q = {};
                return Q.escapeAttrib = Q.escapeAttrib = a, Q.makeHtmlSanitizer = Q.makeHtmlSanitizer = v, Q.makeSaxParser = Q.makeSaxParser = h, Q.makeTagPolicy = Q.makeTagPolicy = L, Q.normalizeRCData = Q.normalizeRCData = r, Q.sanitize = Q.sanitize = function (t, i, e, n) {
                    return P(t, L(i, e, n))
                }, Q.sanitizeAttribs = Q.sanitizeAttribs = T, Q.sanitizeWithPolicy = Q.sanitizeWithPolicy = P, Q.unescapeEntities = Q.unescapeEntities = o, Q
            }(e).sanitize;
            e.ATTRIBS["*::style"] = 0, e.ELEMENTS.style = 0, e.ATTRIBS["a::target"] = 0, e.ELEMENTS.video = 0, e.ATTRIBS["video::src"] = 0, e.ATTRIBS["video::poster"] = 0, e.ATTRIBS["video::controls"] = 0, e.ELEMENTS.audio = 0, e.ATTRIBS["audio::src"] = 0, e.ATTRIBS["video::autoplay"] = 0, e.ATTRIBS["video::controls"] = 0, t.exports = n
        }), Fe = function (t) {
            return t ? Ge(t, Ht, qt) : ""
        }, Ue = Ei.extend({
            includes: [He],
            options: {
                crs: Ri,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
                tileLayer: {},
                featureLayer: {},
                legendControl: {},
                sanitizer: Fe
            },
            _tilejson: {},
            initialize: function (t, i, n) {
                n = u(this, n), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), n.maxBounds && this.setMaxBounds(n.maxBounds), void 0 !== n.zoom && (this._zoom = this._limitZoom(n.zoom)), n.center && void 0 !== n.zoom && this.setView(R(n.center), n.zoom, {reset: !0}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._zoomAnimated = ze && ee && !le && this.options.zoomAnimation, this.callInitHooks(), this._zoomAnimated && (this._createAnimProxy(), Y(this._proxy, Ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers), this._loadTileJSON(i), this.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this)
            },
            setView: function (t, e, n) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(R(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({animate: n.animate}, n.zoom), n.pan = i({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
            },
            setZoom: function (t, i) {
                return this._loaded ? this.setView(this.getCenter(), t, {zoom: i}) : (this._zoom = t, this)
            },
            zoomIn: function (t, i) {
                return t = t || (ee ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
            },
            zoomOut: function (t, i) {
                return t = t || (ee ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
            },
            setZoomAround: function (t, i, e) {
                var n = this.getZoomScale(i), s = this.getSize().divideBy(2),
                    o = (t instanceof E ? t : this.latLngToContainerPoint(t)).subtract(s).multiplyBy(1 - 1 / n),
                    a = this.containerPointToLatLng(s.add(o));
                return this.setView(a, i, {zoom: e})
            },
            _getBoundsCenterZoom: function (t, i) {
                i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
                var e = C(i.paddingTopLeft || i.padding || [0, 0]), n = C(i.paddingBottomRight || i.padding || [0, 0]),
                    s = this.getBoundsZoom(t, !1, e.add(n));
                if ((s = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, s) : s) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: s
                };
                var o = n.subtract(e).divideBy(2), a = this.project(t.getSouthWest(), s),
                    r = this.project(t.getNorthEast(), s);
                return {center: this.unproject(a.add(r).divideBy(2).add(o), s), zoom: s}
            },
            fitBounds: function (t, i) {
                if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
                var e = this._getBoundsCenterZoom(t, i);
                return this.setView(e.center, e.zoom, i)
            },
            fitWorld: function (t) {
                return this.fitBounds([[-90, -180], [90, 180]], t)
            },
            panTo: function (t, i) {
                return this.setView(t, this._zoom, {pan: i})
            },
            panBy: function (t, i) {
                if (t = C(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
                if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new qe, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                    bt(this._mapPane, "bigemap-pan-anim");
                    var e = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function (t, i, e) {
                function n(t) {
                    var i = (g * g - f * f + (t ? -1 : 1) * M * M * v * v) / (2 * (t ? g : f) * M * v),
                        e = Math.sqrt(i * i + 1) - i;
                    return e < 1e-9 ? -18 : Math.log(e)
                }

                function s(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function o(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function a(t) {
                    return s(t) / o(t)
                }

                function r(t) {
                    return f * (o(b) / o(b + y * t))
                }

                function h(t) {
                    return f * (o(b) * a(b + y * t) - s(b)) / M
                }

                function l(t) {
                    return 1 - Math.pow(1 - t, 1.5)
                }

                function u() {
                    var e = (Date.now() - x) / T, n = l(e) * w;
                    e <= 1 ? (this._flyToFrame = _(u, this), this._move(this.unproject(c.add(d.subtract(c).multiplyBy(h(n) / v)), m), this.getScaleZoom(f / r(n), m), {flyTo: !0})) : this._move(t, i)._moveEnd(!0)
                }

                if (!1 === (e = e || {}).animate || !ee) return this.setView(t, i, e);
                this._stop();
                var c = this.project(this.getCenter()), d = this.project(t), p = this.getSize(), m = this._zoom;
                t = R(t), i = void 0 === i ? m : i;
                var f = Math.max(p.x, p.y), g = f * this.getZoomScale(m, i), v = d.distanceTo(c) || 1, y = 1.42, M = y * y,
                    b = n(0), x = Date.now(), w = (n(1) - b) / y, T = e.duration ? 1e3 * e.duration : 1e3 * w * .8;
                return this._moveStart(!0), u.call(this), this
            },
            flyToBounds: function (t, i) {
                var e = this._getBoundsCenterZoom(t, i);
                return this.flyTo(e.center, e.zoom, i)
            },
            setMaxBounds: function (t) {
                return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function (t) {
                var i = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function (t) {
                var i = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function (t, i) {
                this._enforcingBounds = !0;
                var e = this.getCenter(), n = this._limitCenter(e, this._zoom, z(t));
                return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
            },
            invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = i({animate: !1, pan: !0}, !0 === t ? {animate: !0} : t);
                var n = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var s = this.getSize(), o = n.divideBy(2).round(), a = s.divideBy(2).round(), r = o.subtract(a);
                return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: n,
                    newSize: s
                })) : this
            },
            stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function (t) {
                if (t = this._locateOptions = i({
                    timeout: 1e4,
                    watch: !1
                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var n = e(this._handleGeolocationResponse, this), s = e(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, s, t) : navigator.geolocation.getCurrentPosition(n, s, t), this
            },
            stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function (t) {
                var i = t.code,
                    e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: i,
                    message: "Geolocation error: " + e + "."
                })
            },
            _handleGeolocationResponse: function (t) {
                var i = new O(t.coords.latitude, t.coords.longitude), e = i.toBounds(t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var s = this.getBoundsZoom(e);
                    this.setView(i, n.maxZoom ? Math.min(s, n.maxZoom) : s)
                }
                var o = {latlng: i, bounds: e, timestamp: t.timestamp};
                for (var a in t.coords) "number" == typeof t.coords[a] && (o[a] = t.coords[a]);
                this.fire("locationfound", o)
            },
            addHandler: function (t, i) {
                if (!i) return this;
                var e = this[t] = new i(this);
                return this._handlers.push(e), this.options[t] && e.enable(), this
            },
            remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._bigemap_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._bigemap_id, delete this._containerId
                } catch (t) {
                    this._container._bigemap_id = void 0, this._containerId = void 0
                }
                ft(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
                var t;
                for (t in this._layers) this._layers[t].remove();
                for (t in this._panes) ft(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function (t, i) {
                var e = _t("div", "bigemap-pane" + (t ? " bigemap-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                return t && (this._panes[t] = e), e
            },
            getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function () {
                return this._zoom
            },
            getBounds: function () {
                var t = this.getPixelBounds();
                return new A(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function (t, i, e) {
                t = z(t), e = C(e || [0, 0]);
                var n = this.getZoom() || 0, s = this.getMinZoom(), o = this.getMaxZoom(), a = t.getNorthWest(),
                    r = t.getSouthEast(), h = this.getSize().subtract(e),
                    l = k(this.project(r, n), this.project(a, n)).getSize(), u = ee ? this.options.zoomSnap : 1,
                    c = h.x / l.x, d = h.y / l.y, p = i ? Math.max(c, d) : Math.min(c, d);
                return n = this.getScaleZoom(p, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = i ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(s, Math.min(o, n))
            },
            getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new E(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function (t, i) {
                var e = this._getTopLeftPoint(t, i);
                return new S(e, e.add(this.getSize()))
            },
            getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function () {
                return this._panes
            },
            getContainer: function () {
                return this._container
            },
            getZoomScale: function (t, i) {
                var e = this.options.crs;
                return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
            },
            getScaleZoom: function (t, i) {
                var e = this.options.crs;
                i = void 0 === i ? this._zoom : i;
                var n = e.zoom(t * e.scale(i));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(R(t), i)
            },
            unproject: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(C(t), i)
            },
            layerPointToLatLng: function (t) {
                var i = C(t).add(this.getPixelOrigin());
                return this.unproject(i)
            },
            latLngToLayerPoint: function (t) {
                return this.project(R(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(R(t))
            },
            wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(z(t))
            },
            distance: function (t, i) {
                return this.options.crs.distance(R(t), R(i))
            },
            containerPointToLayerPoint: function (t) {
                return C(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function (t) {
                return C(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function (t) {
                var i = this.containerPointToLayerPoint(C(t));
                return this.layerPointToLatLng(i)
            },
            latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(t)))
            },
            mouseEventToContainerPoint: function (t) {
                return rt(t, this._container)
            },
            mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function (t) {
                var i = this._container = pt(t);
                if (!i) throw new Error("Map container not found.");
                if (i._bigemap_id) throw new Error("Map container is already initialized.");
                Y(i, "scroll", this._onScroll, this), this._containerId = n(i)
            },
            _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && ee, bt(t, "bigemap-container" + (he ? " bigemap-touch" : "") + (ce ? " bigemap-retina" : "") + (Di ? " bigemap-oldie" : "") + (Qi ? " bigemap-safari" : "") + (this._fadeAnimated ? " bigemap-fade-anim" : ""));
                var i = mt(t, "position");
                "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), St(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (bt(t.markerPane, "bigemap-zoom-hide"), bt(t.shadowPane, "bigemap-zoom-hide"))
            },
            _resetView: function (t, i) {
                St(this._mapPane, new E(0, 0));
                var e = !this._loaded;
                this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                var n = this._zoom !== i;
                this._moveStart(n)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
            },
            _moveStart: function (t) {
                return t && this.fire("zoomstart"), this.fire("movestart")
            },
            _move: function (t, i, e) {
                void 0 === i && (i = this._zoom);
                var n = this._zoom !== i;
                return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
            },
            _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function () {
                return f(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function (t) {
                St(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function (t) {
                this._targets = {}, this._targets[n(this._container)] = this;
                var i = t ? $ : Y;
                i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ee && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function () {
                f(this._resizeRequest), this._resizeRequest = _(function () {
                    this.invalidateSize({debounceMoveend: !0})
                }, this)
            },
            _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function (t, i) {
                for (var e, s = [], o = "mouseout" === i || "mouseover" === i, a = t.target || t.srcElement, r = !1; a;) {
                    if ((e = this._targets[n(a)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                        r = !0;
                        break
                    }
                    if (e && e.listens(i, !0)) {
                        if (o && !ct(a, t)) break;
                        if (s.push(e), o) break
                    }
                    if (a === this._container) break;
                    a = a.parentNode
                }
                return s.length || r || o || !ct(a, t) || (s = [this]), s
            },
            _handleDOMEvent: function (t) {
                if (this._loaded && !ut(t)) {
                    var i = t.type;
                    "mousedown" !== i && "keypress" !== i || It(t.target || t.srcElement), this._fireDOMEvent(t, i)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function (t, e, n) {
                if ("click" === t.type) {
                    var s = i({}, t);
                    s.type = "preclick", this._fireDOMEvent(s, s.type, n)
                }
                if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                    var o = n[0];
                    "contextmenu" === e && o.listens(e, !0) && ot(t);
                    var a = {originalEvent: t};
                    if ("keypress" !== t.type) {
                        var r = o.options && "icon" in o.options;
                        a.containerPoint = r ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? o.getLatLng() : this.layerPointToLatLng(a.layerPoint)
                    }
                    for (var h = 0; h < n.length; h++) if (n[h].fire(e, a, !0), a.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function () {
                for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
            },
            whenReady: function (t, i) {
                return this._loaded ? t.call(i || this, {target: this}) : this.on("load", t, i), this
            },
            _getMapPanePos: function () {
                return kt(this._mapPane) || new E(0, 0)
            },
            _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function (t, i) {
                return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function (t, i) {
                var e = this.getSize()._divideBy(2);
                return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return this.project(t, i)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return k([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
            },
            _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function (t, i, e) {
                if (!e) return t;
                var n = this.project(t, i), s = this.getSize().divideBy(2), o = new S(n.subtract(s), n.add(s)),
                    a = this._getBoundsOffset(o, e, i);
                return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), i)
            },
            _limitOffset: function (t, i) {
                if (!i) return t;
                var e = this.getPixelBounds(), n = new S(e.min.add(t), e.max.add(t));
                return t.add(this._getBoundsOffset(n, i))
            },
            _getBoundsOffset: function (t, i, e) {
                var n = k(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)), s = n.min.subtract(t.min),
                    o = n.max.subtract(t.max);
                return new E(this._rebound(s.x, -o.x), this._rebound(s.y, -o.y))
            },
            _rebound: function (t, i) {
                return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
            },
            _limitZoom: function (t) {
                var i = this.getMinZoom(), e = this.getMaxZoom(), n = ee ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
            },
            _onPanTransitionStep: function () {
                this.fire("move")
            },
            _onPanTransitionEnd: function () {
                xt(this._mapPane, "bigemap-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function (t, i) {
                var e = this._getCenterOffset(t)._floor();
                return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
            },
            _createAnimProxy: function () {
                var t = this._proxy = _t("div", "bigemap-proxy bigemap-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
                    var i = Ae, e = this._proxy.style[i];
                    Ct(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function () {
                    var t = this.getCenter(), i = this.getZoom();
                    Ct(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function () {
                ft(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function (t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("bigemap-zoom-animated").length
            },
            _tryAnimatedZoom: function (t, i, e) {
                if (this._animatingZoom) return !0;
                if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(i), s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== e.animate && !this.getSize().contains(s)) && (_(function () {
                    this._moveStart(!0)._animateZoom(t, i, !0)
                }, this), !0)
            },
            _animateZoom: function (t, i, n, s) {
                n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, bt(this._mapPane, "bigemap-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: i,
                    noUpdate: s
                }), setTimeout(e(this._onZoomTransitionEnd, this), 250)
            },
            _onZoomTransitionEnd: function () {
                this._animatingZoom && (xt(this._mapPane, "bigemap-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), _(function () {
                    this._moveEnd(!0)
                }, this))
            },
            _setTileJSON: function (t) {
                return this._tilejson = t, this._initialize(t), this
            },
            getTileJSON: function () {
                return this._tilejson
            },
            _initialize: function (t) {
                if (this.tileLayer && (this.tileLayer._setTileJSON(t), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && t.data && t.data[0] && this.featureLayer.loadURL(t.data[0]), this.legendControl && t.legend && this.legendControl.addLegend(t.legend), !this._loaded && t.center) {
                    var i = void 0 !== this.getZoom() ? this.getZoom() : t.center[2], e = R([t.center[1], t.center[0]]);
                    this.setView(e, i)
                }
                this.fire("tjloaded")
            },
            _onLayerAdd: function (t) {
                "on" in t.layer && t.layer.on("ready", this._onLayerReady, this)
            },
            _onLayerRemove: function (t) {
                "on" in t.layer && t.layer.off("ready", this._onLayerReady, this)
            },
            _onLayerReady: function (t) {
                this._updateLayer(t.target)
            },
            _updateLayer: function (t) {
                t.options && (this.attributionControl && this._loaded && t.getAttribution && this.attributionControl.addAttribution(t.getAttribution()), n(t) in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels())
            }
        }), We = L.extend({
            options: {position: "topright"}, initialize: function (t) {
                u(this, t)
            }, getPosition: function () {
                return this.options.position
            }, setPosition: function (t) {
                var i = this._map;
                return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
            }, getContainer: function () {
                return this._container
            }, addTo: function (t) {
                this.remove(), this._map = t;
                var i = this._container = this.onAdd(t), e = this.getPosition(), n = t._controlCorners[e];
                return bt(i, "bigemap-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
            }, remove: function () {
                return this._map ? (ft(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
            }, _refocusOnMap: function (t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        }), Ve = function (t) {
            return new We(t)
        };
    Ue.include({
        addControl: function (t) {
            return t.addTo(this), this
        }, removeControl: function (t) {
            return t.remove(), this
        }, _initControlPos: function () {
            function t(t, s) {
                var o = e + t + " " + e + s;
                i[t + s] = _t("div", o, n)
            }

            var i = this._controlCorners = {}, e = "bigemap-",
                n = this._controlContainer = _t("div", e + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        }, _clearControlPos: function () {
            for (var t in this._controlCorners) ft(this._controlCorners[t]);
            ft(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Ke = We.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function (t, i, e, n) {
                return e < n ? -1 : n < e ? 1 : 0
            }
        }, initialize: function (t, i, e) {
            u(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
            for (var n in t) this._addLayer(t[n], n);
            for (n in i) this._addLayer(i[n], n, !0)
        }, onAdd: function (t) {
            this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
            return this._container
        }, addTo: function (t) {
            return We.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
        }, onRemove: function () {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
        }, addBaseLayer: function (t, i) {
            return this._addLayer(t, i), this._map ? this._update() : this
        }, addOverlay: function (t, i) {
            return this._addLayer(t, i, !0), this._map ? this._update() : this
        }, removeLayer: function (t) {
            t.off("add remove", this._onLayerChange, this);
            var i = this._getLayer(n(t));
            return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
        }, expand: function () {
            bt(this._container, "bigemap-control-layers-expanded"), this._form.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._form.clientHeight ? (bt(this._form, "bigemap-control-layers-scrollbar"), this._form.style.height = t + "px") : xt(this._form, "bigemap-control-layers-scrollbar"), this._checkDisabledLayers(), this
        }, collapse: function () {
            return xt(this._container, "bigemap-control-layers-expanded"), this
        }, _initLayout: function () {
            var t = "bigemap-control-layers", i = this._container = _t("div", t), e = this.options.collapsed;
            i.setAttribute("aria-haspopup", !0), st(i), nt(i);
            var n = this._form = _t("form", t + "-list");
            e && (this._map.on("click", this.collapse, this), qi || Y(i, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var s = this._layersLink = _t("a", t + "-toggle", i);
            s.href = "#", s.title = "Layers", he ? (Y(s, "click", at), Y(s, "click", this.expand, this)) : Y(s, "focus", this.expand, this), e || this.expand(), this._baseLayersList = _t("div", t + "-base", n), this._separator = _t("div", t + "-separator", n), this._overlaysList = _t("div", t + "-overlays", n), i.appendChild(n)
        }, _getLayer: function (t) {
            for (var i = 0; i < this._layers.length; i++) if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
        }, _addLayer: function (t, i, n) {
            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                layer: t,
                name: i,
                overlay: n
            }), this.options.sortLayers && this._layers.sort(e(function (t, i) {
                return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
            }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
        }, _update: function () {
            if (!this._container) return this;
            gt(this._baseLayersList), gt(this._overlaysList), this._layerControlInputs = [];
            var t, i, e, n, s = 0;
            for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
        }, _onLayerChange: function (t) {
            this._handlingClick || this._update();
            var i = this._getLayer(n(t.target)),
                e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            e && this._map.fire(e, i)
        }, _createRadioElement: function (t, i) {
            var e = '<input type="radio" class="bigemap-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                n = document.createElement("div");
            return n.innerHTML = e, n.firstChild
        }, _addItem: function (t) {
            var i, e = document.createElement("label"), s = this._map.hasLayer(t.layer);
            t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "bigemap-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("bigemap-base-layers", s), this._layerControlInputs.push(i), i.layerId = n(t.layer), Y(i, "click", this._onInputClick, this);
            var o = document.createElement("span");
            o.innerHTML = " " + t.name;
            var a = document.createElement("div");
            return e.appendChild(a), a.appendChild(i), a.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
        }, _onInputClick: function () {
            var t, i, e = this._layerControlInputs, n = [], s = [];
            this._handlingClick = !0;
            for (var o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || s.push(i);
            for (o = 0; o < s.length; o++) this._map.hasLayer(s[o]) && this._map.removeLayer(s[o]);
            for (o = 0; o < n.length; o++) this._map.hasLayer(n[o]) || this._map.addLayer(n[o]);
            this._handlingClick = !1, this._refocusOnMap()
        }, _checkDisabledLayers: function () {
            for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
        }, _expandIfNotCollapsed: function () {
            return this._map && !this.options.collapsed && this.expand(), this
        }, _expand: function () {
            return this.expand()
        }, _collapse: function () {
            return this.collapse()
        }
    }), Qe = We.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        }, onAdd: function (t) {
            var i = "bigemap-control-zoom", e = _t("div", i + " bigemap-bar"), n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
        }, onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        }, disable: function () {
            return this._disabled = !0, this._updateDisabled(), this
        }, enable: function () {
            return this._disabled = !1, this._updateDisabled(), this
        }, _zoomIn: function (t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        }, _zoomOut: function (t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        }, _createButton: function (t, i, e, n, s) {
            var o = _t("a", e, n);
            return o.innerHTML = t, o.href = "#", o.title = i, o.setAttribute("role", "button"), o.setAttribute("aria-label", i), st(o), Y(o, "click", at), Y(o, "click", s, this), Y(o, "click", this._refocusOnMap, this), o
        }, _updateDisabled: function () {
            var t = this._map, i = "bigemap-disabled";
            xt(this._zoomInButton, i), xt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && bt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && bt(this._zoomInButton, i)
        }
    });
    Ue.mergeOptions({zoomControl: !0}), Ue.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new Qe, this.addControl(this.zoomControl))
    });
    var Je = We.extend({
        options: {position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0}, onAdd: function (t) {
            var i = _t("div", "bigemap-control-scale"), e = this.options;
            return this._addScales(e, "bigemap-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
        }, onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        }, _addScales: function (t, i, e) {
            t.metric && (this._mScale = _t("div", i, e)), t.imperial && (this._iScale = _t("div", i, e))
        }, _update: function () {
            var t = this._map, i = t.getSize().y / 2,
                e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
            this._updateScales(e)
        }, _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
        }, _updateMetric: function (t) {
            var i = this._getRoundNum(t), e = i < 1e3 ? i + " m" : i / 1e3 + " km";
            this._updateScale(this._mScale, e, i / t)
        }, _updateImperial: function (t) {
            var i, e, n, s = 3.2808399 * t;
            s > 5280 ? (i = s / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(s), this._updateScale(this._iScale, n + " ft", n / s))
        }, _updateScale: function (t, i, e) {
            t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
        }, _getRoundNum: function (t) {
            var i = Math.pow(10, (Math.floor(t) + "").length - 1), e = t / i;
            return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
        }
    }), Xe = We.extend({
        options: {position: "bottomright"}, initialize: function (t) {
            u(this, t), this._attributions = {}
        }, onAdd: function (t) {
            t.attributionControl = this, this._container = _t("div", "bigemap-control-attribution"), st(this._container);
            for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
            return this._update(), this._container
        }, addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
        }, removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
        }, _update: function () {
            if (this._map) {
                var t = [];
                for (var i in this._attributions) this._attributions[i] && t.push(i);
                var e = [];
                e.push('<a target="_blank" href="http://bigemap.com">&copy; Bigemap</a>'), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
            }
        }
    });
    Ue.mergeOptions({attributionControl: !0}), Ue.addInitHook(function () {
        if (this.options.attributionControl && (new Xe).addTo(this), this.attributionControl) {
            var t = this.options.attributionControl.compact;
            (t || !1 !== t && this._container.offsetWidth <= 640) && bt(this.attributionControl._container, "bigemap-compact-attribution"), void 0 === t && this.on("resize", function () {
                this._container.offsetWidth > 640 ? xt(this.attributionControl._container, "bigemap-compact-attribution") : bt(this.attributionControl._container, "bigemap-compact-attribution")
            })
        }
    });
    var Ye = We.extend({
        options: {position: "bottomleft"}, initialize: function (t) {
            u(this, t)
        }, onAdd: function () {
            return this._container = _t("div", "bigemap-logo"), bt(this._container, "bigemap-logo-true"), this._container
        }
    });
    Ue.addInitHook(function () {
        (new Ye).addTo(this)
    });
    We.Layers = Ke, We.Zoom = Qe, We.Scale = Je, We.Attribution = Xe, We.Logo = Ye, Ve.layers = function (t, i, e) {
        return new Ke(t, i, e)
    }, Ve.zoom = function (t) {
        return new Qe(t)
    }, Ve.scale = function (t) {
        return new Je(t)
    }, Ve.attribution = function (t) {
        return new Xe(t)
    }, Ve.logo = function (t) {
        return new Ye(t)
    };
    var $e, tn = L.extend({
            initialize: function (t) {
                this._map = t
            }, enable: function () {
                return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
            }, disable: function () {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            }, enabled: function () {
                return !!this._enabled
            }
        }), en = {Events: Pi}, nn = he ? "touchstart mousedown" : "mousedown",
        sn = {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"},
        on = {mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove"},
        an = Ei.extend({
            options: {clickTolerance: 3}, initialize: function (t, i, e, n) {
                u(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
            }, enable: function () {
                this._enabled || (Y(this._dragStartTarget, nn, this._onDown, this), this._enabled = !0)
            }, disable: function () {
                this._enabled && (an._dragging === this && this.finishDrag(), $(this._dragStartTarget, nn, this._onDown, this), this._enabled = !1, this._moved = !1)
            }, _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !Mt(this._element, "bigemap-zoom-anim") && !(an._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (an._dragging = this, this._preventOutline && It(this._element), At(), zi(), this._moving)))) {
                    this.fire("down");
                    var i = t.touches ? t.touches[0] : t;
                    this._startPoint = new E(i.clientX, i.clientY), Y(document, on[t.type], this._onMove, this), Y(document, sn[t.type], this._onUp, this)
                }
            }, _onMove: function (t) {
                if (!t._simulated && this._enabled) if (t.touches && t.touches.length > 1) this._moved = !0; else {
                    var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                        e = new E(i.clientX, i.clientY).subtract(this._startPoint);
                    (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (ot(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = kt(this._element).subtract(e), bt(document.body, "bigemap-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), bt(this._lastTarget, "bigemap-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, f(this._animRequest), this._lastEvent = t, this._animRequest = _(this._updatePosition, this, !0)))
                }
            }, _updatePosition: function () {
                var t = {originalEvent: this._lastEvent};
                this.fire("predrag", t), St(this._element, this._newPos), this.fire("drag", t)
            }, _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
            }, finishDrag: function () {
                xt(document.body, "bigemap-dragging"), this._lastTarget && (xt(this._lastTarget, "bigemap-drag-target"), this._lastTarget = null);
                for (var t in on) $(document, on[t], this._onMove, this), $(document, sn[t], this._onUp, this);
                zt(), Ii(), this._moved && this._moving && (f(this._animRequest), this.fire("dragend", {distance: this._newPos.distanceTo(this._startPos)})), this._moving = !1, an._dragging = !1
            }
        }), rn = Object.freeze({
            simplify: Gt,
            pointToSegmentDistance: Ft,
            closestPointOnSegment: function (t, i, e) {
                return Yt(t, i, e)
            },
            clipSegment: Kt,
            _getEdgeIntersection: Qt,
            _getBitCode: Jt,
            _sqClosestPointOnSegment: Yt,
            isFlat: $t,
            _flat: ti
        }), hn = Object.freeze({clipPolygon: ii}), ln = Ei.extend({
            options: {pane: "overlayPane", attribution: null, bubblingMouseEvents: !0},
            addTo: function (t) {
                return t.addLayer(this), this
            },
            remove: function () {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function (t) {
                return t && t.removeLayer(this), this
            },
            getPane: function (t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function (t) {
                return this._map._targets[n(t)] = this, this
            },
            removeInteractiveTarget: function (t) {
                return delete this._map._targets[n(t)], this
            },
            getAttribution: function () {
                return this.options.attribution
            },
            _layerAdd: function (t) {
                var i = t.target;
                if (i.hasLayer(this)) {
                    if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                        var e = this.getEvents();
                        i.on(e, this), this.once("remove", function () {
                            i.off(e, this)
                        }, this)
                    }
                    this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {layer: this})
                }
            }
        });
    Ue.include({
        addLayer: function (t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var i = n(t);
            return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        }, removeLayer: function (t) {
            var i = n(t);
            return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {layer: t}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        }, hasLayer: function (t) {
            return !!t && n(t) in this._layers
        }, eachLayer: function (t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        }, _addLayers: function (t) {
            for (var i = 0, e = (t = t ? Mi(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
        }, _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        }, _removeZoomLimit: function (t) {
            var i = n(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
        }, _updateZoomLevels: function () {
            var t = 1 / 0, i = -1 / 0, e = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[n].options;
                t = void 0 === s.minZoom ? t : Math.min(t, s.minZoom), i = void 0 === s.maxZoom ? i : Math.max(i, s.maxZoom)
            }
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var un = ln.extend({
        initialize: function (t) {
            this._layers = {};
            var i, e;
            if (t) for (i = 0, e = t.length; i < e; i++) this.addLayer(t[i])
        }, addLayer: function (t) {
            var i = this.getLayerId(t);
            return this._layers[i] = t, this._map && this._map.addLayer(t), this
        }, removeLayer: function (t) {
            var i = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
        }, hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
        }, clearLayers: function () {
            return this.eachLayer(this.removeLayer, this)
        }, invoke: function (t) {
            var i, e, n = Array.prototype.slice.call(arguments, 1);
            for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
            return this
        }, onAdd: function (t) {
            this.eachLayer(t.addLayer, t)
        }, onRemove: function (t) {
            this.eachLayer(t.removeLayer, t)
        }, eachLayer: function (t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        }, getLayer: function (t) {
            return this._layers[t]
        }, getLayers: function () {
            var t = [];
            return this.eachLayer(t.push, t), t
        }, setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        }, getLayerId: function (t) {
            return n(t)
        }
    }), cn = un.extend({
        addLayer: function (t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this), un.prototype.addLayer.call(this, t), this.fire("layeradd", {layer: t}))
        }, removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), un.prototype.removeLayer.call(this, t), this.fire("layerremove", {layer: t})) : this
        }, setStyle: function (t) {
            return this.invoke("setStyle", t)
        }, bringToFront: function () {
            return this.invoke("bringToFront")
        }, bringToBack: function () {
            return this.invoke("bringToBack")
        }, getBounds: function () {
            var t = new A;
            for (var i in this._layers) {
                var e = this._layers[i];
                t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
            }
            return t
        }
    }), dn = L.extend({
        initialize: function (t) {
            u(this, t)
        }, createIcon: function (t) {
            return this._createIcon("icon", t)
        }, createShadow: function (t) {
            return this._createIcon("shadow", t)
        }, _createIcon: function (t, i) {
            var e = this._getIconUrl(t);
            if (!e) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
            return this._setIconStyles(n, t), n
        }, _setIconStyles: function (t, i) {
            var e = this.options, n = e[i + "Size"];
            "number" == typeof n && (n = [n, n]);
            var s = C(n), o = C("shadow" === i && e.shadowAnchor || e.iconAnchor || s && s.divideBy(2, !0));
            t.className = "bigemap-marker-" + i + " " + (e.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        }, _createImg: function (t, i) {
            return i = i || document.createElement("img"), i.src = t, i
        }, _getIconUrl: function (t) {
            return ce && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    }), pn = dn.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        }, _getIconUrl: function (t) {
            return pn.imagePath || (pn.imagePath = this._detectIconPath()), (this.options.imagePath || pn.imagePath) + dn.prototype._getIconUrl.call(this, t)
        }, _detectIconPath: function () {
            var t = _t("div", "bigemap-default-icon-path", document.body),
                i = mt(t, "background-image") || mt(t, "backgroundImage");
            return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
        }
    }), mn = tn.extend({
        initialize: function (t) {
            this._marker = t
        }, addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new an(t, t, !0)), this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(), bt(t, "bigemap-marker-draggable")
        }, removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && xt(this._marker._icon, "bigemap-marker-draggable")
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _adjustPan: function (t) {
            var i = this._marker, e = i._map, n = this._marker.options.autoPanSpeed,
                s = this._marker.options.autoPanPadding, o = BM.DomUtil.getPosition(i._icon), a = e.getPixelBounds(),
                r = e.getPixelOrigin(), h = k(a.min._subtract(r).add(s), a.max._subtract(r).subtract(s));
            if (!h.contains(o)) {
                var l = C((Math.max(h.max.x, o.x) - h.max.x) / (a.max.x - h.max.x) - (Math.min(h.min.x, o.x) - h.min.x) / (a.min.x - h.min.x), (Math.max(h.max.y, o.y) - h.max.y) / (a.max.y - h.max.y) - (Math.min(h.min.y, o.y) - h.min.y) / (a.min.y - h.min.y)).multiplyBy(n);
                e.panBy(l, {animate: !1}), this._draggable._newPos._add(l), this._draggable._startPos._add(l), BM.DomUtil.setPosition(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = _(this._adjustPan.bind(this, t))
            }
        }, _onDragStart: function () {
            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
        }, _onPreDrag: function (t) {
            this._marker.options.autoPan && (f(this._panRequest), this._panRequest = _(this._adjustPan.bind(this, t)))
        }, _onDrag: function (t) {
            var i = this._marker, e = i._shadow, n = kt(i._icon), s = i._map.layerPointToLatLng(n);
            e && St(e, n), i._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
        }, _onDragEnd: function (t) {
            f(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
        }
    }), _n = ln.extend({
        options: {
            icon: new pn,
            interactive: !0,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            bubblingMouseEvents: !1
        }, initialize: function (t, i) {
            u(this, i), this._latlng = R(t)
        }, onAdd: function (t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
        }, onRemove: function (t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
        }, getEvents: function () {
            return {zoom: this.update, viewreset: this.update}
        }, getLatLng: function () {
            return this._latlng
        }, setLatLng: function (t) {
            var i = this._latlng;
            return this._latlng = R(t), this.update(), this.fire("move", {oldLatLng: i, latlng: this._latlng})
        }, setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update()
        }, setIcon: function (t) {
            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
        }, getElement: function () {
            return this._icon
        }, update: function () {
            if (this._icon && this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        }, _initIcon: function () {
            var t = this.options, i = "bigemap-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                e = t.icon.createIcon(this._icon), n = !1;
            e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), t.alt && (e.alt = t.alt)), bt(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var s = t.icon.createShadow(this._shadow), o = !1;
            s !== this._shadow && (this._removeShadow(), o = !0), s && (bt(s, i), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && o && this.getPane("shadowPane").appendChild(this._shadow)
        }, _removeIcon: function () {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), ft(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
        }, _removeShadow: function () {
            this._shadow && ft(this._shadow), this._shadow = null
        }, _setPos: function (t) {
            St(this._icon, t), this._shadow && St(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        }, _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        }, _animateZoom: function (t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(i)
        }, _initInteraction: function () {
            if (this.options.interactive && (bt(this._icon, "bigemap-interactive"), this.addInteractiveTarget(this._icon), mn)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new mn(this), t && this.dragging.enable()
            }
        }, setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        }, _updateOpacity: function () {
            var t = this.options.opacity;
            Lt(this._icon, t), this._shadow && Lt(this._shadow, t)
        }, _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        }, _resetZIndex: function () {
            this._updateZIndex(0)
        }, _getPopupAnchor: function () {
            return this.options.icon.options.popupAnchor || [0, 0]
        }, _getTooltipAnchor: function () {
            return this.options.icon.options.tooltipAnchor || [0, 0]
        }
    }), fn = ln.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        }, beforeAdd: function (t) {
            this._renderer = t.getRenderer(this)
        }, onAdd: function () {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
        }, onRemove: function () {
            this._renderer._removePath(this)
        }, redraw: function () {
            return this._map && this._renderer._updatePath(this), this
        }, setStyle: function (t) {
            return u(this, t), this._renderer && this._renderer._updateStyle(this), this
        }, bringToFront: function () {
            return this._renderer && this._renderer._bringToFront(this), this
        }, bringToBack: function () {
            return this._renderer && this._renderer._bringToBack(this), this
        }, getElement: function () {
            return this._path
        }, _reset: function () {
            this._project(), this._update()
        }, _clickTolerance: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (he ? 10 : 0)
        }
    }), gn = fn.extend({
        options: {fill: !0, radius: 10}, initialize: function (t, i) {
            u(this, i), this._latlng = R(t), this._radius = this.options.radius
        }, setLatLng: function (t) {
            return this._latlng = R(t), this.redraw(), this.fire("move", {latlng: this._latlng})
        }, getLatLng: function () {
            return this._latlng
        }, setRadius: function (t) {
            return this.options.radius = this._radius = t, this.redraw()
        }, getRadius: function () {
            return this._radius
        }, setStyle: function (t) {
            var i = t && t.radius || this._radius;
            return fn.prototype.setStyle.call(this, t), this.setRadius(i), this
        }, _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
        }, _updateBounds: function () {
            var t = this._radius, i = this._radiusY || t, e = this._clickTolerance(), n = [t + e, i + e];
            this._pxBounds = new S(this._point.subtract(n), this._point.add(n))
        }, _update: function () {
            this._map && this._updatePath()
        }, _updatePath: function () {
            this._renderer._updateCircle(this)
        }, _empty: function () {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        }, _containsPoint: function (t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    }), vn = gn.extend({
        initialize: function (t, e, n) {
            if ("number" == typeof e && (e = i({}, n, {radius: e})), u(this, e), this._latlng = R(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        }, setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        }, getRadius: function () {
            return this._mRadius
        }, getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new A(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
        }, setStyle: fn.prototype.setStyle, _project: function () {
            var t = this._latlng.lng, i = this._latlng.lat, e = this._map, n = e.options.crs;
            if (n.distance === Si.distance) {
                var s = Math.PI / 180, o = this._mRadius / Si.R / s, a = e.project([i + o, t]),
                    r = e.project([i - o, t]), h = a.add(r).divideBy(2), l = e.unproject(h).lat,
                    u = Math.acos((Math.cos(o * s) - Math.sin(i * s) * Math.sin(l * s)) / (Math.cos(i * s) * Math.cos(l * s))) / s;
                (isNaN(u) || 0 === u) && (u = o / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(u) ? 0 : h.x - e.project([l, t - u]).x, this._radiusY = h.y - a.y
            } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
            }
            this._updateBounds()
        }
    }), yn = fn.extend({
        options: {smoothFactor: 1, noClip: !1}, initialize: function (t, i) {
            u(this, i), this._setLatLngs(t)
        }, getLatLngs: function () {
            return this._latlngs
        }, setLatLngs: function (t) {
            return this._setLatLngs(t), this.redraw()
        }, isEmpty: function () {
            return !this._latlngs.length
        }, closestLayerPoint: function (t) {
            for (var i, e, n = 1 / 0, s = null, o = Yt, a = 0, r = this._parts.length; a < r; a++) for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
                var c = o(t, i = h[l - 1], e = h[l], !0);
                c < n && (n = c, s = o(t, i, e))
            }
            return s && (s.distance = Math.sqrt(n)), s
        }, getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, i, e, n, s, o, a, r = this._rings[0], h = r.length;
            if (!h) return null;
            for (t = 0, i = 0; t < h - 1; t++) i += r[t].distanceTo(r[t + 1]) / 2;
            if (0 === i) return this._map.layerPointToLatLng(r[0]);
            for (t = 0, n = 0; t < h - 1; t++) if (s = r[t], o = r[t + 1], e = s.distanceTo(o), (n += e) > i) return a = (n - i) / e, this._map.layerPointToLatLng([o.x - a * (o.x - s.x), o.y - a * (o.y - s.y)])
        }, getBounds: function () {
            return this._bounds
        }, addLatLng: function (t, i) {
            return i = i || this._defaultShape(), t = R(t), i.push(t), this._bounds.extend(t), this.redraw()
        }, _setLatLngs: function (t) {
            this._bounds = new A, this._latlngs = this._convertLatLngs(t)
        }, _defaultShape: function () {
            return $t(this._latlngs) ? this._latlngs : this._latlngs[0]
        }, _convertLatLngs: function (t) {
            for (var i = [], e = $t(t), n = 0, s = t.length; n < s; n++) e ? (i[n] = R(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
            return i
        }, _project: function () {
            var t = new S;
            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
            var i = this._clickTolerance(), e = new E(i, i);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
        }, _projectLatlngs: function (t, i, e) {
            var n, s, o = t[0] instanceof O, a = t.length;
            if (o) {
                for (s = [], n = 0; n < a; n++) s[n] = this._map.latLngToLayerPoint(t[n]), e.extend(s[n]);
                i.push(s)
            } else for (n = 0; n < a; n++) this._projectLatlngs(t[n], i, e)
        }, _clipPoints: function () {
            var t = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else {
                var i, e, n, s, o, a, r, h = this._parts;
                for (i = 0, n = 0, s = this._rings.length; i < s; i++) for (e = 0, o = (r = this._rings[i]).length; e < o - 1; e++) (a = Kt(r[e], r[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(a[0]), a[1] === r[e + 1] && e !== o - 2 || (h[n].push(a[1]), n++))
            }
        }, _simplifyPoints: function () {
            for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Gt(t[e], i)
        }, _update: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
        }, _updatePath: function () {
            this._renderer._updatePoly(this)
        }, _containsPoint: function (t, i) {
            var e, n, s, o, a, r, h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (e = 0, o = this._parts.length; e < o; e++) for (n = 0, s = (a = (r = this._parts[e]).length) - 1; n < a; s = n++) if ((i || 0 !== n) && Ft(t, r[s], r[n]) <= h) return !0;
            return !1
        }
    });
    yn._flat = ti;
    var Mn = yn.extend({
        options: {fill: !0}, isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
        }, getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, i, e, n, s, o, a, r, h, l = this._rings[0], u = l.length;
            if (!u) return null;
            for (o = a = r = 0, t = 0, i = u - 1; t < u; i = t++) e = l[t], n = l[i], s = e.y * n.x - n.y * e.x, a += (e.x + n.x) * s, r += (e.y + n.y) * s, o += 3 * s;
            return h = 0 === o ? l[0] : [a / o, r / o], this._map.layerPointToLatLng(h)
        }, _convertLatLngs: function (t) {
            var i = yn.prototype._convertLatLngs.call(this, t), e = i.length;
            return e >= 2 && i[0] instanceof O && i[0].equals(i[e - 1]) && i.pop(), i
        }, _setLatLngs: function (t) {
            yn.prototype._setLatLngs.call(this, t), $t(this._latlngs) && (this._latlngs = [this._latlngs])
        }, _defaultShape: function () {
            return $t(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        }, _clipPoints: function () {
            var t = this._renderer._bounds, i = this.options.weight, e = new E(i, i);
            if (t = new S(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else for (var n, s = 0, o = this._rings.length; s < o; s++) (n = ii(this._rings[s], t, !0)).length && this._parts.push(n)
        }, _updatePath: function () {
            this._renderer._updatePoly(this, !0)
        }, _containsPoint: function (t) {
            var i, e, n, s, o, a, r, h, l = !1;
            if (!this._pxBounds.contains(t)) return !1;
            for (s = 0, r = this._parts.length; s < r; s++) for (o = 0, a = (h = (i = this._parts[s]).length) - 1; o < h; a = o++) e = i[o], n = i[a], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (l = !l);
            return l || yn.prototype._containsPoint.call(this, t, !0)
        }
    }), bn = cn.extend({
        initialize: function (t, i) {
            u(this, i), this._layers = {}, t && this.addData(t)
        }, addData: function (t) {
            var i, e, n, s = Mi(t) ? t : t.features;
            if (s) {
                for (i = 0, e = s.length; i < e; i++) ((n = s[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var o = this.options;
            if (o.filter && !o.filter(t)) return this;
            var a = si(t, o);
            return a ? (a.feature = ui(t), a.defaultOptions = a.options, this.resetStyle(a), o.onEachFeature && o.onEachFeature(t, a), this.addLayer(a)) : this
        }, resetStyle: function (t) {
            return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
        }, setStyle: function (t) {
            return this.eachLayer(function (i) {
                this._setLayerStyle(i, t)
            }, this)
        }, _setLayerStyle: function (t, i) {
            "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
        }
    }), xn = {
        toGeoJSON: function (t) {
            return li(this, {type: "Point", coordinates: ri(this.getLatLng(), t)})
        }
    };
    _n.include(xn), vn.include(xn), gn.include(xn), yn.include({
        toGeoJSON: function (t) {
            var i = !$t(this._latlngs), e = hi(this._latlngs, i ? 1 : 0, !1, t);
            return li(this, {type: (i ? "Multi" : "") + "LineString", coordinates: e})
        }
    }), Mn.include({
        toGeoJSON: function (t) {
            var i = !$t(this._latlngs), e = i && !$t(this._latlngs[0]), n = hi(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]), li(this, {type: (e ? "Multi" : "") + "Polygon", coordinates: n})
        }
    }), un.include({
        toMultiPoint: function (t) {
            var i = [];
            return this.eachLayer(function (e) {
                i.push(e.toGeoJSON(t).geometry.coordinates)
            }), li(this, {type: "MultiPoint", coordinates: i})
        }, toGeoJSON: function (t) {
            var i = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === i) return this.toMultiPoint(t);
            var e = "GeometryCollection" === i, n = [];
            return this.eachLayer(function (i) {
                if (i.toGeoJSON) {
                    var s = i.toGeoJSON(t);
                    if (e) n.push(s.geometry); else {
                        var o = ui(s);
                        "FeatureCollection" === o.type ? n.push.apply(n, o.features) : n.push(o)
                    }
                }
            }), e ? li(this, {geometries: n, type: "GeometryCollection"}) : {type: "FeatureCollection", features: n}
        }
    });
    var wn = ci, Tn = ln.extend({
        options: {opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: ""},
        initialize: function (t, i, e) {
            this._url = t, this._bounds = z(i), u(this, e)
        },
        onAdd: function () {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (bt(this._image, "bigemap-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
        },
        onRemove: function () {
            ft(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._image && this._updateOpacity(), this
        },
        setStyle: function (t) {
            return t.opacity && this.setOpacity(t.opacity), this
        },
        bringToFront: function () {
            return this._map && vt(this._image), this
        },
        bringToBack: function () {
            return this._map && yt(this._image), this
        },
        setUrl: function (t) {
            return this._url = t, this._image && (this._image.src = t), this
        },
        setBounds: function (t) {
            return this._bounds = z(t), this._map && this._reset(), this
        },
        getEvents: function () {
            var t = {zoom: this._reset, viewreset: this._reset};
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        getBounds: function () {
            return this._bounds
        },
        getElement: function () {
            return this._image
        },
        _initImage: function () {
            var t = this._image = _t("img", "bigemap-image-layer " + (this._zoomAnimated ? "bigemap-zoom-animated " : "") + (this.options.className || ""));
            t.onselectstart = a, t.onmousemove = a, t.onload = e(this.fire, this, "load"), t.onerror = e(this._overlayOnError, this, "error"), this.options.crossOrigin && (t.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t.src = this._url, t.alt = this.options.alt
        },
        _animateZoom: function (t) {
            var i = this._map.getZoomScale(t.zoom),
                e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            Ct(this._image, e, i)
        },
        _reset: function () {
            var t = this._image,
                i = new S(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                e = i.getSize();
            St(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
        },
        _updateOpacity: function () {
            Lt(this._image, this.options.opacity)
        },
        _updateZIndex: function () {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function () {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t, this._image.src = t)
        }
    }), Ln = Zt(function (t, i) {
        !function (i, e) {
            t.exports = e()
        }(0, function () {
            function t(t, i) {
                if (t[i]) return t[i];
                for (var e, n = Object.keys(t), s = i.toLowerCase().replace(_t, ""), o = -1; ++o < n.length;) if (e = n[o], e.toLowerCase().replace(_t, "") === s) return t[e]
            }

            function i(t) {
                if ("string" != typeof t) throw new Error("not a string");
                this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = gt
            }

            function e(t) {
                return new i(t).output()
            }

            function n(t, i, e) {
                Array.isArray(i) && (e.unshift(i), i = null);
                var n = i ? {} : t, o = e.reduce(function (t, i) {
                    return s(i, t), t
                }, n);
                i && (t[i] = o)
            }

            function s(t, i) {
                if (Array.isArray(t)) {
                    var e = t.shift();
                    if ("PARAMETER" === e && (e = t.shift()), 1 === t.length) return Array.isArray(t[0]) ? (i[e] = {}, void s(t[0], i[e])) : void (i[e] = t[0]);
                    if (t.length) if ("TOWGS84" !== e) {
                        Array.isArray(e) || (i[e] = {});
                        var o;
                        switch (e) {
                            case"UNIT":
                            case"PRIMEM":
                            case"VERT_DATUM":
                                return i[e] = {
                                    name: t[0].toLowerCase(),
                                    convert: t[1]
                                }, void (3 === t.length && s(t[2], i[e]));
                            case"SPHEROID":
                            case"ELLIPSOID":
                                return i[e] = {name: t[0], a: t[1], rf: t[2]}, void (4 === t.length && s(t[3], i[e]));
                            case"PROJECTEDCRS":
                            case"PROJCRS":
                            case"GEOGCS":
                            case"GEOCCS":
                            case"PROJCS":
                            case"LOCAL_CS":
                            case"GEODCRS":
                            case"GEODETICCRS":
                            case"GEODETICDATUM":
                            case"EDATUM":
                            case"ENGINEERINGDATUM":
                            case"VERT_CS":
                            case"VERTCRS":
                            case"VERTICALCRS":
                            case"COMPD_CS":
                            case"COMPOUNDCRS":
                            case"ENGINEERINGCRS":
                            case"ENGCRS":
                            case"FITTED_CS":
                            case"LOCAL_DATUM":
                            case"DATUM":
                                return t[0] = ["name", t[0]], void n(i, e, t);
                            default:
                                for (o = -1; ++o < t.length;) if (!Array.isArray(t[o])) return s(t, i[e]);
                                return n(i, e, t)
                        }
                    } else i[e] = t; else i[e] = !0
                } else i[t] = !0
            }

            function o(t, i) {
                var e = i[0], n = i[1];
                !(e in t) && n in t && (t[e] = t[n], 3 === i.length && (t[e] = i[2](t[e])))
            }

            function a(t) {
                return t * wt
            }

            function r(t) {
                function i(i) {
                    return i * (t.to_meter || 1)
                }

                "GEOGCS" === t.type ? t.projName = "longlat" : "LOCAL_CS" === t.type ? (t.projName = "identity", t.local = !0) : "object" == typeof t.PROJECTION ? t.projName = Object.keys(t.PROJECTION)[0] : t.projName = t.PROJECTION, t.UNIT && (t.units = t.UNIT.name.toLowerCase(), "metre" === t.units && (t.units = "meter"), t.UNIT.convert && ("GEOGCS" === t.type ? t.DATUM && t.DATUM.SPHEROID && (t.to_meter = t.UNIT.convert * t.DATUM.SPHEROID.a) : t.to_meter = t.UNIT.convert));
                var e = t.GEOGCS;
                "GEOGCS" === t.type && (e = t), e && (e.DATUM ? t.datumCode = e.DATUM.name.toLowerCase() : t.datumCode = e.name.toLowerCase(), "d_" === t.datumCode.slice(0, 2) && (t.datumCode = t.datumCode.slice(2)), "new_zealand_geodetic_datum_1949" !== t.datumCode && "new_zealand_1949" !== t.datumCode || (t.datumCode = "nzgd49"), "wgs_1984" === t.datumCode && ("Mercator_Auxiliary_Sphere" === t.PROJECTION && (t.sphere = !0), t.datumCode = "wgs84"), "_ferro" === t.datumCode.slice(-6) && (t.datumCode = t.datumCode.slice(0, -6)), "_jakarta" === t.datumCode.slice(-8) && (t.datumCode = t.datumCode.slice(0, -8)), ~t.datumCode.indexOf("belge") && (t.datumCode = "rnb72"), e.DATUM && e.DATUM.SPHEROID && (t.ellps = e.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t.ellps.toLowerCase().slice(0, 13) && (t.ellps = "intl"), t.a = e.DATUM.SPHEROID.a, t.rf = parseFloat(e.DATUM.SPHEROID.rf, 10)), ~t.datumCode.indexOf("osgb_1936") && (t.datumCode = "osgb36"), ~t.datumCode.indexOf("osni_1952") && (t.datumCode = "osni52"), (~t.datumCode.indexOf("tm65") || ~t.datumCode.indexOf("geodetic_datum_of_1965")) && (t.datumCode = "ire65")), t.b && !isFinite(t.b) && (t.b = t.a);
                [["standard_parallel_1", "Standard_Parallel_1"], ["standard_parallel_2", "Standard_Parallel_2"], ["false_easting", "False_Easting"], ["false_northing", "False_Northing"], ["central_meridian", "Central_Meridian"], ["latitude_of_origin", "Latitude_Of_Origin"], ["latitude_of_origin", "Central_Parallel"], ["scale_factor", "Scale_Factor"], ["k0", "scale_factor"], ["latitude_of_center", "Latitude_of_center"], ["lat0", "latitude_of_center", a], ["longitude_of_center", "Longitude_Of_Center"], ["longc", "longitude_of_center", a], ["x0", "false_easting", i], ["y0", "false_northing", i], ["long0", "central_meridian", a], ["lat0", "latitude_of_origin", a], ["lat0", "standard_parallel_1", a], ["lat1", "standard_parallel_1", a], ["lat2", "standard_parallel_2", a], ["alpha", "azimuth", a], ["srsCode", "name"]].forEach(function (i) {
                    return o(t, i)
                }), t.long0 || !t.longc || "Albers_Conic_Equal_Area" !== t.projName && "Lambert_Azimuthal_Equal_Area" !== t.projName || (t.long0 = t.longc), t.lat_ts || !t.lat1 || "Stereographic_South_Pole" !== t.projName && "Polar Stereographic (variant B)" !== t.projName || (t.lat0 = a(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1)
            }

            function h(t) {
                var i = this;
                if (2 === arguments.length) {
                    var e = arguments[1];
                    "string" == typeof e ? "+" === e.charAt(0) ? h[t] = ft(arguments[1]) : h[t] = Tt(arguments[1]) : h[t] = e
                } else if (1 === arguments.length) {
                    if (Array.isArray(t)) return t.map(function (t) {
                        Array.isArray(t) ? h.apply(i, t) : h(t)
                    });
                    if ("string" == typeof t) {
                        if (t in h) return h[t]
                    } else "EPSG" in t ? h["EPSG:" + t.EPSG] = t : "ESRI" in t ? h["ESRI:" + t.ESRI] = t : "IAU2000" in t ? h["IAU2000:" + t.IAU2000] = t : console.log(t);
                    return
                }
            }

            function l(t) {
                return "string" == typeof t
            }

            function u(t) {
                return t in h
            }

            function c(t) {
                return Lt.some(function (i) {
                    return t.indexOf(i) > -1
                })
            }

            function d(t) {
                return "+" === t[0]
            }

            function p(t) {
                return l(t) ? u(t) ? h[t] : c(t) ? Tt(t) : d(t) ? ft(t) : void 0 : t
            }

            function m(t) {
                return t
            }

            function _(t, i) {
                var e = Ot.length;
                return t.names ? (Ot[e] = t, t.names.forEach(function (t) {
                    It[t.toLowerCase()] = e
                }), this) : (console.log(i), !0)
            }

            function f(t, i, e, n) {
                var s = t * t, o = i * i, a = (s - o) / s, r = 0;
                return n ? (t *= 1 - a * (st + a * (ot + a * at)), s = t * t, a = 0) : r = Math.sqrt(a), {
                    es: a,
                    e: r,
                    ep2: (s - o) / o
                }
            }

            function g(i, e, n, s, o) {
                if (!i) {
                    var a = t(Nt, s);
                    a || (a = Bt), i = a.a, e = a.b, n = a.rf
                }
                return n && !e && (e = (1 - 1 / n) * i), (0 === n || Math.abs(i - e) < rt) && (o = !0, e = i), {
                    a: i,
                    b: e,
                    rf: n,
                    sphere: o
                }
            }

            function v(t, i, e, n, s, o) {
                var a = {};
                return a.datum_type = void 0 === t || "none" === t ? it : tt, i && (a.datum_params = i.map(parseFloat), 0 === a.datum_params[0] && 0 === a.datum_params[1] && 0 === a.datum_params[2] || (a.datum_type = Y), a.datum_params.length > 3 && (0 === a.datum_params[3] && 0 === a.datum_params[4] && 0 === a.datum_params[5] && 0 === a.datum_params[6] || (a.datum_type = $, a.datum_params[3] *= et, a.datum_params[4] *= et, a.datum_params[5] *= et, a.datum_params[6] = a.datum_params[6] / 1e6 + 1))), a.a = e, a.b = n, a.es = s, a.ep2 = o, a
            }

            function y(i, e) {
                if (!(this instanceof y)) return new y(i);
                e = e || function (t) {
                    if (t) throw t
                };
                var n = p(i);
                if ("object" == typeof n) {
                    var s = y.projections.get(n.projName);
                    if (s) {
                        if (n.datumCode && "none" !== n.datumCode) {
                            var o = t(Zt, n.datumCode);
                            o && (n.datum_params = o.towgs84 ? o.towgs84.split(",") : null, n.ellps = o.ellipse, n.datumName = o.datumName ? o.datumName : n.datumCode)
                        }
                        n.k0 = n.k0 || 1, n.axis = n.axis || "enu", n.ellps = n.ellps || "wgs84";
                        var a = g(n.a, n.b, n.rf, n.ellps, n.sphere), r = f(a.a, a.b, a.rf, n.R_A),
                            h = n.datum || v(n.datumCode, n.datum_params, a.a, a.b, r.es, r.ep2);
                        Pt(this, n), Pt(this, s), this.a = a.a, this.b = a.b, this.rf = a.rf, this.sphere = a.sphere, this.es = r.es, this.e = r.e, this.ep2 = r.ep2, this.datum = h, this.init(), e(null, this)
                    } else e(i)
                } else e(i)
            }

            function M(t, i) {
                return t.datum_type === i.datum_type && (!(t.a !== i.a || Math.abs(t.es - i.es) > 5e-11) && (t.datum_type === Y ? t.datum_params[0] === i.datum_params[0] && t.datum_params[1] === i.datum_params[1] && t.datum_params[2] === i.datum_params[2] : t.datum_type !== $ || t.datum_params[0] === i.datum_params[0] && t.datum_params[1] === i.datum_params[1] && t.datum_params[2] === i.datum_params[2] && t.datum_params[3] === i.datum_params[3] && t.datum_params[4] === i.datum_params[4] && t.datum_params[5] === i.datum_params[5] && t.datum_params[6] === i.datum_params[6]))
            }

            function b(t, i, e) {
                var n, s, o, a, r = t.x, h = t.y, l = t.z ? t.z : 0;
                if (-nt > h && h > -1.001 * nt) h = -nt; else if (h > nt && 1.001 * nt > h) h = nt; else if (-nt > h || h > nt) return null;
                return r > Math.PI && (r -= 2 * Math.PI), s = Math.sin(h), a = Math.cos(h), o = s * s, n = e / Math.sqrt(1 - i * o), {
                    x: (n + l) * a * Math.cos(r),
                    y: (n + l) * a * Math.sin(r),
                    z: (n * (1 - i) + l) * s
                }
            }

            function x(t, i, e, n) {
                var s, o, a, r, h, l, u, c, d, p, m, _, f, g, v, y, M = 1e-12, b = t.x, x = t.y, w = t.z ? t.z : 0;
                if (s = Math.sqrt(b * b + x * x), o = Math.sqrt(b * b + x * x + w * w), M > s / e) {
                    if (g = 0, M > o / e) return v = nt, y = -n, {x: t.x, y: t.y, z: t.z}
                } else g = Math.atan2(x, b);
                a = w / o, c = (r = s / o) * (1 - i) * (h = 1 / Math.sqrt(1 - i * (2 - i) * r * r)), d = a * h, f = 0;
                do {
                    f++, u = e / Math.sqrt(1 - i * d * d), y = s * c + w * d - u * (1 - i * d * d), l = i * u / (u + y), h = 1 / Math.sqrt(1 - l * (2 - l) * r * r), p = r * (1 - l) * h, m = a * h, _ = m * c - p * d, c = p, d = m
                } while (_ * _ > 1e-24 && 30 > f);
                return v = Math.atan(m / Math.abs(p)), {x: g, y: v, z: y}
            }

            function w(t, i, e) {
                if (i === Y) return {x: t.x + e[0], y: t.y + e[1], z: t.z + e[2]};
                if (i === $) {
                    var n = e[0], s = e[1], o = e[2], a = e[3], r = e[4], h = e[5], l = e[6];
                    return {
                        x: l * (t.x - h * t.y + r * t.z) + n,
                        y: l * (h * t.x + t.y - a * t.z) + s,
                        z: l * (-r * t.x + a * t.y + t.z) + o
                    }
                }
            }

            function T(t, i, e) {
                if (i === Y) return {x: t.x - e[0], y: t.y - e[1], z: t.z - e[2]};
                if (i === $) {
                    var n = e[0], s = e[1], o = e[2], a = e[3], r = e[4], h = e[5], l = e[6], u = (t.x - n) / l,
                        c = (t.y - s) / l, d = (t.z - o) / l;
                    return {x: u + h * c - r * d, y: -h * u + c + a * d, z: r * u - a * c + d}
                }
            }

            function L(t) {
                return t === Y || t === $
            }

            function P(t) {
                if ("function" == typeof Number.isFinite) {
                    if (Number.isFinite(t)) return;
                    throw new TypeError("coordinates must be finite numbers")
                }
                if ("number" != typeof t || t !== t || !isFinite(t)) throw new TypeError("coordinates must be finite numbers")
            }

            function E(t, i) {
                return (t.datum.datum_type === Y || t.datum.datum_type === $) && "WGS84" !== i.datumCode || (i.datum.datum_type === Y || i.datum.datum_type === $) && "WGS84" !== t.datumCode
            }

            function C(t, i, e) {
                var n;
                return Array.isArray(e) && (e = Ht(e)), qt(e), t.datum && i.datum && E(t, i) && (n = new y("WGS84"), e = C(t, n, e), t = n), "enu" !== t.axis && (e = jt(t, !1, e)), "longlat" === t.projName ? e = {
                    x: e.x * ht,
                    y: e.y * ht
                } : (t.to_meter && (e = {
                    x: e.x * t.to_meter,
                    y: e.y * t.to_meter
                }), e = t.inverse(e)), t.from_greenwich && (e.x += t.from_greenwich), e = Dt(t.datum, i.datum, e), i.from_greenwich && (e = {
                    x: e.x - i.from_greenwich,
                    y: e.y
                }), "longlat" === i.projName ? e = {
                    x: e.x * lt,
                    y: e.y * lt
                } : (e = i.forward(e), i.to_meter && (e = {
                    x: e.x / i.to_meter,
                    y: e.y / i.to_meter
                })), "enu" !== i.axis ? jt(i, !0, e) : e
            }

            function S(t, i, e) {
                var n, s, o;
                return Array.isArray(e) ? (n = C(t, i, e), 3 === e.length ? [n.x, n.y, n.z] : [n.x, n.y]) : (s = C(t, i, e), 2 === (o = Object.keys(e)).length ? s : (o.forEach(function (t) {
                    "x" !== t && "y" !== t && (s[t] = e[t])
                }), s))
            }

            function k(t) {
                return t instanceof y ? t : t.oProj ? t.oProj : y(t)
            }

            function A(t, i, e) {
                t = k(t);
                var n, s = !1;
                return void 0 === i ? (i = t, t = Gt, s = !0) : (void 0 !== i.x || Array.isArray(i)) && (e = i, i = t, t = Gt, s = !0), i = k(i), e ? S(t, i, e) : (n = {
                    forward: function (e) {
                        return S(t, i, e)
                    }, inverse: function (e) {
                        return S(i, t, e)
                    }
                }, s && (n.oProj = i), n)
            }

            function z(t, i) {
                return i = i || 5, D(N({lat: t[1], lon: t[0]}), i)
            }

            function I(t) {
                var i = B(G(t.toUpperCase()));
                return i.lat && i.lon ? [i.lon, i.lat] : [(i.left + i.right) / 2, (i.top + i.bottom) / 2]
            }

            function O(t) {
                return t * (Math.PI / 180)
            }

            function R(t) {
                return t / Math.PI * 180
            }

            function N(t) {
                var i, e, n, s, o, a, r, h, l = t.lat, u = t.lon, c = 6378137, d = .00669438, p = O(l), m = O(u);
                h = Math.floor((u + 180) / 6) + 1, 180 === u && (h = 60), l >= 56 && 64 > l && u >= 3 && 12 > u && (h = 32), l >= 72 && 84 > l && (u >= 0 && 9 > u ? h = 31 : u >= 9 && 21 > u ? h = 33 : u >= 21 && 33 > u ? h = 35 : u >= 33 && 42 > u && (h = 37)), r = O(6 * (h - 1) - 180 + 3), i = d / (1 - d), e = c / Math.sqrt(1 - d * Math.sin(p) * Math.sin(p)), n = Math.tan(p) * Math.tan(p), s = i * Math.cos(p) * Math.cos(p);
                var _ = .9996 * e * ((o = Math.cos(p) * (m - r)) + (1 - n + s) * o * o * o / 6 + (5 - 18 * n + n * n + 72 * s - 58 * i) * o * o * o * o * o / 120) + 5e5,
                    f = .9996 * ((a = c * (.9983242984503243 * p - .002514607064228144 * Math.sin(2 * p) + 2639046602129982e-21 * Math.sin(4 * p) - 35 * d * d * d / 3072 * Math.sin(6 * p))) + e * Math.tan(p) * (o * o / 2 + (5 - n + 9 * s + 4 * s * s) * o * o * o * o / 24 + (61 - 58 * n + n * n + 600 * s - 330 * i) * o * o * o * o * o * o / 720));
                return 0 > l && (f += 1e7), {
                    northing: Math.round(f),
                    easting: Math.round(_),
                    zoneNumber: h,
                    zoneLetter: Z(l)
                }
            }

            function B(t) {
                var i = t.northing, e = t.easting, n = t.zoneLetter, s = t.zoneNumber;
                if (0 > s || s > 60) return null;
                var o, a, r, h, l, u, c, d, p, m = 6378137, _ = .00669438,
                    f = (1 - Math.sqrt(1 - _)) / (1 + Math.sqrt(1 - _)), g = e - 5e5, v = i;
                "N" > n && (v -= 1e7), c = 6 * (s - 1) - 180 + 3, o = _ / (1 - _), p = (d = v / .9996 / 6367449.145945056) + (3 * f / 2 - 27 * f * f * f / 32) * Math.sin(2 * d) + (21 * f * f / 16 - 55 * f * f * f * f / 32) * Math.sin(4 * d) + 151 * f * f * f / 96 * Math.sin(6 * d), a = m / Math.sqrt(1 - _ * Math.sin(p) * Math.sin(p)), r = Math.tan(p) * Math.tan(p), h = o * Math.cos(p) * Math.cos(p), l = m * (1 - _) / Math.pow(1 - _ * Math.sin(p) * Math.sin(p), 1.5), u = g / (.9996 * a);
                var y = p - a * Math.tan(p) / l * (u * u / 2 - (5 + 3 * r + 10 * h - 4 * h * h - 9 * o) * u * u * u * u / 24 + (61 + 90 * r + 298 * h + 45 * r * r - 252 * o - 3 * h * h) * u * u * u * u * u * u / 720);
                y = R(y);
                var M = (u - (1 + 2 * r + h) * u * u * u / 6 + (5 - 2 * h + 28 * r - 3 * h * h + 8 * o + 24 * r * r) * u * u * u * u * u / 120) / Math.cos(p);
                M = c + R(M);
                var b;
                if (t.accuracy) {
                    var x = B({
                        northing: t.northing + t.accuracy,
                        easting: t.easting + t.accuracy,
                        zoneLetter: t.zoneLetter,
                        zoneNumber: t.zoneNumber
                    });
                    b = {top: x.lat, right: x.lon, bottom: y, left: M}
                } else b = {lat: y, lon: M};
                return b
            }

            function Z(t) {
                var i = "Z";
                return 84 >= t && t >= 72 ? i = "X" : 72 > t && t >= 64 ? i = "W" : 64 > t && t >= 56 ? i = "V" : 56 > t && t >= 48 ? i = "U" : 48 > t && t >= 40 ? i = "T" : 40 > t && t >= 32 ? i = "S" : 32 > t && t >= 24 ? i = "R" : 24 > t && t >= 16 ? i = "Q" : 16 > t && t >= 8 ? i = "P" : 8 > t && t >= 0 ? i = "N" : 0 > t && t >= -8 ? i = "M" : -8 > t && t >= -16 ? i = "L" : -16 > t && t >= -24 ? i = "K" : -24 > t && t >= -32 ? i = "J" : -32 > t && t >= -40 ? i = "H" : -40 > t && t >= -48 ? i = "G" : -48 > t && t >= -56 ? i = "F" : -56 > t && t >= -64 ? i = "E" : -64 > t && t >= -72 ? i = "D" : -72 > t && t >= -80 && (i = "C"), i
            }

            function D(t, i) {
                var e = "00000" + t.easting, n = "00000" + t.northing;
                return t.zoneNumber + t.zoneLetter + j(t.easting, t.northing, t.zoneNumber) + e.substr(e.length - 5, i) + n.substr(n.length - 5, i)
            }

            function j(t, i, e) {
                var n = H(e);
                return q(Math.floor(t / 1e5), Math.floor(i / 1e5) % 20, n)
            }

            function H(t) {
                var i = t % Ft;
                return 0 === i && (i = Ft), i
            }

            function q(t, i, e) {
                var n = e - 1, s = Ut.charCodeAt(n), o = Wt.charCodeAt(n), a = s + t - 1, r = o + i, h = !1;
                return a > Xt && (a = a - Xt + Vt - 1, h = !0), (a === Kt || Kt > s && a > Kt || (a > Kt || Kt > s) && h) && a++, (a === Qt || Qt > s && a > Qt || (a > Qt || Qt > s) && h) && ++a === Kt && a++, a > Xt && (a = a - Xt + Vt - 1), r > Jt ? (r = r - Jt + Vt - 1, h = !0) : h = !1, (r === Kt || Kt > o && r > Kt || (r > Kt || Kt > o) && h) && r++, (r === Qt || Qt > o && r > Qt || (r > Qt || Qt > o) && h) && ++r === Kt && r++, r > Jt && (r = r - Jt + Vt - 1), String.fromCharCode(a) + String.fromCharCode(r)
            }

            function G(t) {
                if (t && 0 === t.length) throw"MGRSPoint coverting from nothing";
                for (var i, e = t.length, n = null, s = "", o = 0; !/[A-Z]/.test(i = t.charAt(o));) {
                    if (o >= 2) throw"MGRSPoint bad conversion from: " + t;
                    s += i, o++
                }
                var a = parseInt(s, 10);
                if (0 === o || o + 3 > e) throw"MGRSPoint bad conversion from: " + t;
                var r = t.charAt(o++);
                if ("A" >= r || "B" === r || "Y" === r || r >= "Z" || "I" === r || "O" === r) throw"MGRSPoint zone letter " + r + " not handled: " + t;
                n = t.substring(o, o += 2);
                for (var h = H(a), l = F(n.charAt(0), h), u = U(n.charAt(1), h); u < W(r);) u += 2e6;
                var c = e - o;
                if (c % 2 != 0) throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t;
                var d, p, m, _, f, g = c / 2, v = 0, y = 0;
                return g > 0 && (d = 1e5 / Math.pow(10, g), p = t.substring(o, o + g), v = parseFloat(p) * d, m = t.substring(o + g), y = parseFloat(m) * d), _ = v + l, f = y + u, {
                    easting: _,
                    northing: f,
                    zoneLetter: r,
                    zoneNumber: a,
                    accuracy: d
                }
            }

            function F(t, i) {
                for (var e = Ut.charCodeAt(i - 1), n = 1e5, s = !1; e !== t.charCodeAt(0);) {
                    if (++e === Kt && e++, e === Qt && e++, e > Xt) {
                        if (s) throw"Bad character: " + t;
                        e = Vt, s = !0
                    }
                    n += 1e5
                }
                return n
            }

            function U(t, i) {
                if (t > "V") throw"MGRSPoint given invalid Northing " + t;
                for (var e = Wt.charCodeAt(i - 1), n = 0, s = !1; e !== t.charCodeAt(0);) {
                    if (++e === Kt && e++, e === Qt && e++, e > Jt) {
                        if (s) throw"Bad character: " + t;
                        e = Vt, s = !0
                    }
                    n += 1e5
                }
                return n
            }

            function W(t) {
                var i;
                switch (t) {
                    case"C":
                        i = 11e5;
                        break;
                    case"D":
                        i = 2e6;
                        break;
                    case"E":
                        i = 28e5;
                        break;
                    case"F":
                        i = 37e5;
                        break;
                    case"G":
                        i = 46e5;
                        break;
                    case"H":
                        i = 55e5;
                        break;
                    case"J":
                        i = 64e5;
                        break;
                    case"K":
                        i = 73e5;
                        break;
                    case"L":
                        i = 82e5;
                        break;
                    case"M":
                        i = 91e5;
                        break;
                    case"N":
                        i = 0;
                        break;
                    case"P":
                        i = 8e5;
                        break;
                    case"Q":
                        i = 17e5;
                        break;
                    case"R":
                        i = 26e5;
                        break;
                    case"S":
                        i = 35e5;
                        break;
                    case"T":
                        i = 44e5;
                        break;
                    case"U":
                        i = 53e5;
                        break;
                    case"V":
                        i = 62e5;
                        break;
                    case"W":
                        i = 7e6;
                        break;
                    case"X":
                        i = 79e5;
                        break;
                    default:
                        i = -1
                }
                if (i >= 0) return i;
                throw"Invalid zone letter: " + t
            }

            function V(t, i, e) {
                if (!(this instanceof V)) return new V(t, i, e);
                if (Array.isArray(t)) this.x = t[0], this.y = t[1], this.z = t[2] || 0; else if ("object" == typeof t) this.x = t.x, this.y = t.y, this.z = t.z || 0; else if ("string" == typeof t && void 0 === i) {
                    var n = t.split(",");
                    this.x = parseFloat(n[0], 10), this.y = parseFloat(n[1], 10), this.z = parseFloat(n[2], 10) || 0
                } else this.x = t, this.y = i, this.z = e || 0;
                console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")
            }

            function K(t) {
                var i, e = [];
                return e[0] = t * Ri, i = t * t, e[0] += i * Ni, e[1] = i * Zi, i *= t, e[0] += i * Bi, e[1] += i * Di, e[2] = i * ji, e
            }

            function Q(t, i) {
                var e = t + t;
                return t + i[0] * Math.sin(e) + i[1] * Math.sin(e + e) + i[2] * Math.sin(e + e + e)
            }

            function J(t, i, e, n) {
                var s;
                return rt > t ? (n.value = ae.AREA_0, s = 0) : (s = Math.atan2(i, e), Math.abs(s) <= ut ? n.value = ae.AREA_0 : s > ut && nt + ut >= s ? (n.value = ae.AREA_1, s -= nt) : s > nt + ut || -(nt + ut) >= s ? (n.value = ae.AREA_2, s = s >= 0 ? s - dt : s + dt) : (n.value = ae.AREA_3, s += nt)), s
            }

            function X(t, i) {
                var e = t + i;
                return -dt > e ? e += ct : e > +dt && (e -= ct), e
            }

            var Y = 1, $ = 2, tt = 4, it = 5, et = 484813681109536e-20, nt = Math.PI / 2, st = .16666666666666666,
                ot = .04722222222222222, at = .022156084656084655, rt = 1e-10, ht = .017453292519943295,
                lt = 57.29577951308232, ut = Math.PI / 4, ct = 2 * Math.PI, dt = 3.14159265359, pt = {};
            pt.greenwich = 0, pt.lisbon = -9.131906111111, pt.paris = 2.337229166667, pt.bogota = -74.080916666667, pt.madrid = -3.687938888889, pt.rome = 12.452333333333, pt.bern = 7.439583333333, pt.jakarta = 106.807719444444, pt.ferro = -17.666666666667, pt.brussels = 4.367975, pt.stockholm = 18.058277777778, pt.athens = 23.7163375, pt.oslo = 10.722916666667;
            var mt = {ft: {to_meter: .3048}, "us-ft": {to_meter: 1200 / 3937}}, _t = /[\s_\-\/\(\)]/g,
                ft = function (i) {
                    var e, n, s, o = {}, a = i.split("+").map(function (t) {
                        return t.trim()
                    }).filter(function (t) {
                        return t
                    }).reduce(function (t, i) {
                        var e = i.split("=");
                        return e.push(!0), t[e[0].toLowerCase()] = e[1], t
                    }, {}), r = {
                        proj: "projName", datum: "datumCode", rf: function (t) {
                            o.rf = parseFloat(t)
                        }, lat_0: function (t) {
                            o.lat0 = t * ht
                        }, lat_1: function (t) {
                            o.lat1 = t * ht
                        }, lat_2: function (t) {
                            o.lat2 = t * ht
                        }, lat_ts: function (t) {
                            o.lat_ts = t * ht
                        }, lon_0: function (t) {
                            o.long0 = t * ht
                        }, lon_1: function (t) {
                            o.long1 = t * ht
                        }, lon_2: function (t) {
                            o.long2 = t * ht
                        }, alpha: function (t) {
                            o.alpha = parseFloat(t) * ht
                        }, lonc: function (t) {
                            o.longc = t * ht
                        }, x_0: function (t) {
                            o.x0 = parseFloat(t)
                        }, y_0: function (t) {
                            o.y0 = parseFloat(t)
                        }, k_0: function (t) {
                            o.k0 = parseFloat(t)
                        }, k: function (t) {
                            o.k0 = parseFloat(t)
                        }, a: function (t) {
                            o.a = parseFloat(t)
                        }, b: function (t) {
                            o.b = parseFloat(t)
                        }, r_a: function () {
                            o.R_A = !0
                        }, zone: function (t) {
                            o.zone = parseInt(t, 10)
                        }, south: function () {
                            o.utmSouth = !0
                        }, towgs84: function (t) {
                            o.datum_params = t.split(",").map(function (t) {
                                return parseFloat(t)
                            })
                        }, to_meter: function (t) {
                            o.to_meter = parseFloat(t)
                        }, units: function (i) {
                            o.units = i;
                            var e = t(mt, i);
                            e && (o.to_meter = e.to_meter)
                        }, from_greenwich: function (t) {
                            o.from_greenwich = t * ht
                        }, pm: function (i) {
                            var e = t(pt, i);
                            o.from_greenwich = (e || parseFloat(i)) * ht
                        }, nadgrids: function (t) {
                            "@null" === t ? o.datumCode = "none" : o.nadgrids = t
                        }, axis: function (t) {
                            var i = "ewnsud";
                            3 === t.length && -1 !== i.indexOf(t.substr(0, 1)) && -1 !== i.indexOf(t.substr(1, 1)) && -1 !== i.indexOf(t.substr(2, 1)) && (o.axis = t)
                        }
                    };
                    for (e in a) n = a[e], e in r ? "function" == typeof (s = r[e]) ? s(n) : o[s] = n : o[e] = n;
                    return "string" == typeof o.datumCode && "WGS84" !== o.datumCode && (o.datumCode = o.datumCode.toLowerCase()), o
                }, gt = 1, vt = /\s/, yt = /[A-Za-z]/, Mt = /[A-Za-z84]/, bt = /[,\]]/, xt = /[\d\.E\-\+]/;
            i.prototype.readCharicter = function () {
                var t = this.text[this.place++];
                if (4 !== this.state) for (; vt.test(t);) {
                    if (this.place >= this.text.length) return;
                    t = this.text[this.place++]
                }
                switch (this.state) {
                    case gt:
                        return this.neutral(t);
                    case 2:
                        return this.keyword(t);
                    case 4:
                        return this.quoted(t);
                    case 5:
                        return this.afterquote(t);
                    case 3:
                        return this.number(t);
                    case-1:
                        return
                }
            }, i.prototype.afterquote = function (t) {
                if ('"' === t) return this.word += '"', void (this.state = 4);
                if (bt.test(t)) return this.word = this.word.trim(), void this.afterItem(t);
                throw new Error("havn't handled \"" + t + '" in afterquote yet, index ' + this.place)
            }, i.prototype.afterItem = function (t) {
                return "," === t ? (null !== this.word && this.currentObject.push(this.word), this.word = null, void (this.state = gt)) : "]" === t ? (this.level--, null !== this.word && (this.currentObject.push(this.word), this.word = null), this.state = gt, this.currentObject = this.stack.pop(), void (this.currentObject || (this.state = -1))) : void 0
            }, i.prototype.number = function (t) {
                if (!xt.test(t)) {
                    if (bt.test(t)) return this.word = parseFloat(this.word), void this.afterItem(t);
                    throw new Error("havn't handled \"" + t + '" in number yet, index ' + this.place)
                }
                this.word += t
            }, i.prototype.quoted = function (t) {
                return '"' === t ? void (this.state = 5) : void (this.word += t)
            }, i.prototype.keyword = function (t) {
                if (Mt.test(t)) this.word += t; else {
                    if ("[" === t) {
                        var i = [];
                        return i.push(this.word), this.level++, null === this.root ? this.root = i : this.currentObject.push(i), this.stack.push(this.currentObject), this.currentObject = i, void (this.state = gt)
                    }
                    if (!bt.test(t)) throw new Error("havn't handled \"" + t + '" in keyword yet, index ' + this.place);
                    this.afterItem(t)
                }
            }, i.prototype.neutral = function (t) {
                if (yt.test(t)) return this.word = t, void (this.state = 2);
                if ('"' === t) return this.word = "", void (this.state = 4);
                if (xt.test(t)) return this.word = t, void (this.state = 3);
                {
                    if (!bt.test(t)) throw new Error("havn't handled \"" + t + '" in neutral yet, index ' + this.place);
                    this.afterItem(t)
                }
            }, i.prototype.output = function () {
                for (; this.place < this.text.length;) this.readCharicter();
                if (-1 === this.state) return this.root;
                throw new Error('unable to parse string "' + this.text + '". State is ' + this.state)
            };
            var wt = .017453292519943295, Tt = function (t) {
                var i = e(t), n = i.shift(), o = i.shift();
                i.unshift(["name", o]), i.unshift(["type", n]);
                var a = {};
                return s(i, a), r(a), a
            };
            !function (t) {
                t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"]
            }(h);
            var Lt = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"],
                Pt = function (t, i) {
                    t = t || {};
                    var e, n;
                    if (!i) return t;
                    for (n in i) void 0 !== (e = i[n]) && (t[n] = e);
                    return t
                }, Et = function (t, i, e) {
                    var n = t * i;
                    return e / Math.sqrt(1 - n * n)
                }, Ct = function (t) {
                    return 0 > t ? -1 : 1
                }, St = function (t) {
                    return Math.abs(t) <= dt ? t : t - Ct(t) * ct
                }, kt = function (t, i, e) {
                    var n = t * e, s = .5 * t;
                    return n = Math.pow((1 - n) / (1 + n), s), Math.tan(.5 * (nt - i)) / n
                }, At = function (t, i) {
                    for (var e, n, s = .5 * t, o = nt - 2 * Math.atan(i), a = 0; 15 >= a; a++) if (e = t * Math.sin(o), n = nt - 2 * Math.atan(i * Math.pow((1 - e) / (1 + e), s)) - o, o += n, Math.abs(n) <= 1e-10) return o;
                    return -9999
                }, zt = [{
                    init: function () {
                        var t = this.b / this.a;
                        this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = Et(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1)
                    },
                    forward: function (t) {
                        var i = t.x, e = t.y;
                        if (e * lt > 90 && -90 > e * lt && i * lt > 180 && -180 > i * lt) return null;
                        var n, s;
                        if (Math.abs(Math.abs(e) - nt) <= rt) return null;
                        if (this.sphere) n = this.x0 + this.a * this.k0 * St(i - this.long0), s = this.y0 + this.a * this.k0 * Math.log(Math.tan(ut + .5 * e)); else {
                            var o = Math.sin(e), a = kt(this.e, e, o);
                            n = this.x0 + this.a * this.k0 * St(i - this.long0), s = this.y0 - this.a * this.k0 * Math.log(a)
                        }
                        return t.x = n, t.y = s, t
                    },
                    inverse: function (t) {
                        var i, e, n = t.x - this.x0, s = t.y - this.y0;
                        if (this.sphere) e = nt - 2 * Math.atan(Math.exp(-s / (this.a * this.k0))); else {
                            var o = Math.exp(-s / (this.a * this.k0));
                            if (-9999 === (e = At(this.e, o))) return null
                        }
                        return i = St(this.long0 + n / (this.a * this.k0)), t.x = i, t.y = e, t
                    },
                    names: ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"]
                }, {
                    init: function () {
                    }, forward: m, inverse: m, names: ["longlat", "identity"]
                }], It = {}, Ot = [], Rt = {
                    start: function () {
                        zt.forEach(_)
                    }, add: _, get: function (t) {
                        if (!t) return !1;
                        var i = t.toLowerCase();
                        return void 0 !== It[i] && Ot[It[i]] ? Ot[It[i]] : void 0
                    }
                }, Nt = {};
            Nt.MERIT = {a: 6378137, rf: 298.257, ellipseName: "MERIT 1983"}, Nt.SGS85 = {
                a: 6378136,
                rf: 298.257,
                ellipseName: "Soviet Geodetic System 85"
            }, Nt.GRS80 = {a: 6378137, rf: 298.257222101, ellipseName: "GRS 1980(IUGG, 1980)"}, Nt.IAU76 = {
                a: 6378140,
                rf: 298.257,
                ellipseName: "IAU 1976"
            }, Nt.airy = {a: 6377563.396, b: 6356256.91, ellipseName: "Airy 1830"}, Nt.APL4 = {
                a: 6378137,
                rf: 298.25,
                ellipseName: "Appl. Physics. 1965"
            }, Nt.NWL9D = {
                a: 6378145,
                rf: 298.25,
                ellipseName: "Naval Weapons Lab., 1965"
            }, Nt.mod_airy = {a: 6377340.189, b: 6356034.446, ellipseName: "Modified Airy"}, Nt.andrae = {
                a: 6377104.43,
                rf: 300,
                ellipseName: "Andrae 1876 (Den., Iclnd.)"
            }, Nt.aust_SA = {
                a: 6378160,
                rf: 298.25,
                ellipseName: "Australian Natl & S. Amer. 1969"
            }, Nt.GRS67 = {
                a: 6378160,
                rf: 298.247167427,
                ellipseName: "GRS 67(IUGG 1967)"
            }, Nt.bessel = {a: 6377397.155, rf: 299.1528128, ellipseName: "Bessel 1841"}, Nt.bess_nam = {
                a: 6377483.865,
                rf: 299.1528128,
                ellipseName: "Bessel 1841 (Namibia)"
            }, Nt.clrk66 = {a: 6378206.4, b: 6356583.8, ellipseName: "Clarke 1866"}, Nt.clrk80 = {
                a: 6378249.145,
                rf: 293.4663,
                ellipseName: "Clarke 1880 mod."
            }, Nt.clrk58 = {
                a: 6378293.645208759,
                rf: 294.2606763692654,
                ellipseName: "Clarke 1858"
            }, Nt.CPM = {
                a: 6375738.7,
                rf: 334.29,
                ellipseName: "Comm. des Poids et Mesures 1799"
            }, Nt.delmbr = {a: 6376428, rf: 311.5, ellipseName: "Delambre 1810 (Belgium)"}, Nt.engelis = {
                a: 6378136.05,
                rf: 298.2566,
                ellipseName: "Engelis 1985"
            }, Nt.evrst30 = {a: 6377276.345, rf: 300.8017, ellipseName: "Everest 1830"}, Nt.evrst48 = {
                a: 6377304.063,
                rf: 300.8017,
                ellipseName: "Everest 1948"
            }, Nt.evrst56 = {a: 6377301.243, rf: 300.8017, ellipseName: "Everest 1956"}, Nt.evrst69 = {
                a: 6377295.664,
                rf: 300.8017,
                ellipseName: "Everest 1969"
            }, Nt.evrstSS = {
                a: 6377298.556,
                rf: 300.8017,
                ellipseName: "Everest (Sabah & Sarawak)"
            }, Nt.fschr60 = {
                a: 6378166,
                rf: 298.3,
                ellipseName: "Fischer (Mercury Datum) 1960"
            }, Nt.fschr60m = {a: 6378155, rf: 298.3, ellipseName: "Fischer 1960"}, Nt.fschr68 = {
                a: 6378150,
                rf: 298.3,
                ellipseName: "Fischer 1968"
            }, Nt.helmert = {a: 6378200, rf: 298.3, ellipseName: "Helmert 1906"}, Nt.hough = {
                a: 6378270,
                rf: 297,
                ellipseName: "Hough"
            }, Nt.intl = {a: 6378388, rf: 297, ellipseName: "International 1909 (Hayford)"}, Nt.kaula = {
                a: 6378163,
                rf: 298.24,
                ellipseName: "Kaula 1961"
            }, Nt.lerch = {a: 6378139, rf: 298.257, ellipseName: "Lerch 1979"}, Nt.mprts = {
                a: 6397300,
                rf: 191,
                ellipseName: "Maupertius 1738"
            }, Nt.new_intl = {
                a: 6378157.5,
                b: 6356772.2,
                ellipseName: "New International 1967"
            }, Nt.plessis = {a: 6376523, rf: 6355863, ellipseName: "Plessis 1817 (France)"}, Nt.krass = {
                a: 6378245,
                rf: 298.3,
                ellipseName: "Krassovsky, 1942"
            }, Nt.SEasia = {a: 6378155, b: 6356773.3205, ellipseName: "Southeast Asia"}, Nt.walbeck = {
                a: 6376896,
                b: 6355834.8467,
                ellipseName: "Walbeck"
            }, Nt.WGS60 = {a: 6378165, rf: 298.3, ellipseName: "WGS 60"}, Nt.WGS66 = {
                a: 6378145,
                rf: 298.25,
                ellipseName: "WGS 66"
            }, Nt.WGS7 = {a: 6378135, rf: 298.26, ellipseName: "WGS 72"};
            var Bt = Nt.WGS84 = {a: 6378137, rf: 298.257223563, ellipseName: "WGS 84"};
            Nt.sphere = {a: 6370997, b: 6370997, ellipseName: "Normal Sphere (r=6370997)"};
            var Zt = {};
            Zt.wgs84 = {
                towgs84: "0,0,0",
                ellipse: "WGS84",
                datumName: "WGS84"
            }, Zt.ch1903 = {
                towgs84: "674.374,15.056,405.346",
                ellipse: "bessel",
                datumName: "swiss"
            }, Zt.ggrs87 = {
                towgs84: "-199.87,74.79,246.62",
                ellipse: "GRS80",
                datumName: "Greek_Geodetic_Reference_System_1987"
            }, Zt.nad83 = {
                towgs84: "0,0,0",
                ellipse: "GRS80",
                datumName: "North_American_Datum_1983"
            }, Zt.nad27 = {
                nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
                ellipse: "clrk66",
                datumName: "North_American_Datum_1927"
            }, Zt.potsdam = {
                towgs84: "606.0,23.0,413.0",
                ellipse: "bessel",
                datumName: "Potsdam Rauenberg 1950 DHDN"
            }, Zt.carthage = {
                towgs84: "-263.0,6.0,431.0",
                ellipse: "clark80",
                datumName: "Carthage 1934 Tunisia"
            }, Zt.hermannskogel = {
                towgs84: "653.0,-212.0,449.0",
                ellipse: "bessel",
                datumName: "Hermannskogel"
            }, Zt.osni52 = {
                towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
                ellipse: "airy",
                datumName: "Irish National"
            }, Zt.ire65 = {
                towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
                ellipse: "mod_airy",
                datumName: "Ireland 1965"
            }, Zt.rassadiran = {
                towgs84: "-133.63,-157.5,-158.62",
                ellipse: "intl",
                datumName: "Rassadiran"
            }, Zt.nzgd49 = {
                towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
                ellipse: "intl",
                datumName: "New Zealand Geodetic Datum 1949"
            }, Zt.osgb36 = {
                towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
                ellipse: "airy",
                datumName: "Airy 1830"
            }, Zt.s_jtsk = {
                towgs84: "589,76,480",
                ellipse: "bessel",
                datumName: "S-JTSK (Ferro)"
            }, Zt.beduaram = {
                towgs84: "-106,-87,188",
                ellipse: "clrk80",
                datumName: "Beduaram"
            }, Zt.gunung_segara = {
                towgs84: "-403,684,41",
                ellipse: "bessel",
                datumName: "Gunung Segara Jakarta"
            }, Zt.rnb72 = {
                towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
                ellipse: "intl",
                datumName: "Reseau National Belge 1972"
            }, y.projections = Rt, y.projections.start();
            var Dt = function (t, i, e) {
                    return M(t, i) ? e : t.datum_type === it || i.datum_type === it ? e : t.es !== i.es || t.a !== i.a || L(t.datum_type) || L(i.datum_type) ? (e = b(e, t.es, t.a), L(t.datum_type) && (e = w(e, t.datum_type, t.datum_params)), L(i.datum_type) && (e = T(e, i.datum_type, i.datum_params)), x(e, i.es, i.a, i.b)) : e
                }, jt = function (t, i, e) {
                    var n, s, o, a = e.x, r = e.y, h = e.z || 0, l = {};
                    for (o = 0; 3 > o; o++) if (!i || 2 !== o || void 0 !== e.z) switch (0 === o ? (n = a, s = "x") : 1 === o ? (n = r, s = "y") : (n = h, s = "z"), t.axis[o]) {
                        case"e":
                            l[s] = n;
                            break;
                        case"w":
                            l[s] = -n;
                            break;
                        case"n":
                            l[s] = n;
                            break;
                        case"s":
                            l[s] = -n;
                            break;
                        case"u":
                            void 0 !== e[s] && (l.z = n);
                            break;
                        case"d":
                            void 0 !== e[s] && (l.z = -n);
                            break;
                        default:
                            return null
                    }
                    return l
                }, Ht = function (t) {
                    var i = {x: t[0], y: t[1]};
                    return t.length > 2 && (i.z = t[2]), t.length > 3 && (i.m = t[3]), i
                }, qt = function (t) {
                    P(t.x), P(t.y)
                }, Gt = y("WGS84"), Ft = 6, Ut = "AJSAJS", Wt = "AFAFAF", Vt = 65, Kt = 73, Qt = 79, Jt = 86, Xt = 90,
                Yt = {
                    forward: z, inverse: function (t) {
                        var i = B(G(t.toUpperCase()));
                        return i.lat && i.lon ? [i.lon, i.lat, i.lon, i.lat] : [i.left, i.bottom, i.right, i.top]
                    }, toPoint: I
                };
            V.fromMGRS = function (t) {
                return new V(I(t))
            }, V.prototype.toMGRS = function (t) {
                return z([this.x, this.y], t)
            };
            var $t = .01953125, ti = .01068115234375, ii = function (t) {
                    var i = [];
                    i[0] = 1 - t * (.25 + t * (.046875 + t * ($t + t * ti))), i[1] = t * (.75 - t * (.046875 + t * ($t + t * ti)));
                    var e = t * t;
                    return i[2] = e * (.46875 - t * (.013020833333333334 + .007120768229166667 * t)), e *= t, i[3] = e * (.3645833333333333 - .005696614583333333 * t), i[4] = e * t * .3076171875, i
                }, ei = function (t, i, e, n) {
                    return e *= i, i *= i, n[0] * t - e * (n[1] + i * (n[2] + i * (n[3] + i * n[4])))
                }, ni = function (t, i, e) {
                    for (var n = 1 / (1 - i), s = t, o = 20; o; --o) {
                        var a = Math.sin(s), r = 1 - i * a * a;
                        if (r = (ei(s, a, Math.cos(s), e) - t) * (r * Math.sqrt(r)) * n, s -= r, Math.abs(r) < rt) return s
                    }
                    return s
                }, si = {
                    init: function () {
                        this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.es && (this.en = ii(this.es), this.ml0 = ei(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en))
                    }, forward: function (t) {
                        var i, e, n, s = t.x, o = t.y, a = St(s - this.long0), r = Math.sin(o), h = Math.cos(o);
                        if (this.es) {
                            var l = h * a, u = Math.pow(l, 2), c = this.ep2 * Math.pow(h, 2), d = Math.pow(c, 2),
                                p = Math.abs(h) > rt ? Math.tan(o) : 0, m = Math.pow(p, 2), _ = Math.pow(m, 2);
                            i = 1 - this.es * Math.pow(r, 2), l /= Math.sqrt(i);
                            var f = ei(o, r, h, this.en);
                            e = this.a * (this.k0 * l * (1 + u / 6 * (1 - m + c + u / 20 * (5 - 18 * m + _ + 14 * c - 58 * m * c + u / 42 * (61 + 179 * _ - _ * m - 479 * m))))) + this.x0, n = this.a * (this.k0 * (f - this.ml0 + r * a * l / 2 * (1 + u / 12 * (5 - m + 9 * c + 4 * d + u / 30 * (61 + _ - 58 * m + 270 * c - 330 * m * c + u / 56 * (1385 + 543 * _ - _ * m - 3111 * m)))))) + this.y0
                        } else {
                            var g = h * Math.sin(a);
                            if (Math.abs(Math.abs(g) - 1) < rt) return 93;
                            if (e = .5 * this.a * this.k0 * Math.log((1 + g) / (1 - g)) + this.x0, n = h * Math.cos(a) / Math.sqrt(1 - Math.pow(g, 2)), (g = Math.abs(n)) >= 1) {
                                if (g - 1 > rt) return 93;
                                n = 0
                            } else n = Math.acos(n);
                            0 > o && (n = -n), n = this.a * this.k0 * (n - this.lat0) + this.y0
                        }
                        return t.x = e, t.y = n, t
                    }, inverse: function (t) {
                        var i, e, n, s, o = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
                        if (this.es) if (i = this.ml0 + a / this.k0, e = ni(i, this.es, this.en), Math.abs(e) < nt) {
                            var r = Math.sin(e), h = Math.cos(e), l = Math.abs(h) > rt ? Math.tan(e) : 0,
                                u = this.ep2 * Math.pow(h, 2), c = Math.pow(u, 2), d = Math.pow(l, 2), p = Math.pow(d, 2);
                            i = 1 - this.es * Math.pow(r, 2);
                            var m = o * Math.sqrt(i) / this.k0, _ = Math.pow(m, 2);
                            n = e - (i *= l) * _ / (1 - this.es) * .5 * (1 - _ / 12 * (5 + 3 * d - 9 * u * d + u - 4 * c - _ / 30 * (61 + 90 * d - 252 * u * d + 45 * p + 46 * u - _ / 56 * (1385 + 3633 * d + 4095 * p + 1574 * p * d)))), s = St(this.long0 + m * (1 - _ / 6 * (1 + 2 * d + u - _ / 20 * (5 + 28 * d + 24 * p + 8 * u * d + 6 * u - _ / 42 * (61 + 662 * d + 1320 * p + 720 * p * d)))) / h)
                        } else n = nt * Ct(a), s = 0; else {
                            var f = Math.exp(o / this.k0), g = .5 * (f - 1 / f), v = this.lat0 + a / this.k0,
                                y = Math.cos(v);
                            i = Math.sqrt((1 - Math.pow(y, 2)) / (1 + Math.pow(g, 2))), n = Math.asin(i), 0 > a && (n = -n), s = 0 === g && 0 === y ? 0 : St(Math.atan2(g, y) + this.long0)
                        }
                        return t.x = s, t.y = n, t
                    }, names: ["Transverse_Mercator", "Transverse Mercator", "tmerc"]
                }, oi = function (t) {
                    var i = Math.exp(t);
                    return i = (i - 1 / i) / 2
                }, ai = function (t, i) {
                    t = Math.abs(t), i = Math.abs(i);
                    var e = Math.max(t, i), n = Math.min(t, i) / (e || 1);
                    return e * Math.sqrt(1 + Math.pow(n, 2))
                }, ri = function (t) {
                    var i = 1 + t, e = i - 1;
                    return 0 === e ? t : t * Math.log(i) / e
                }, hi = function (t) {
                    var i = Math.abs(t);
                    return i = ri(i * (1 + i / (ai(1, i) + 1))), 0 > t ? -i : i
                }, li = function (t, i) {
                    for (var e, n = 2 * Math.cos(2 * i), s = t.length - 1, o = t[s], a = 0; --s >= 0;) e = n * o - a + t[s], a = o, o = e;
                    return i + e * Math.sin(2 * i)
                }, ui = function (t, i) {
                    for (var e, n = 2 * Math.cos(i), s = t.length - 1, o = t[s], a = 0; --s >= 0;) e = n * o - a + t[s], a = o, o = e;
                    return Math.sin(i) * e
                }, ci = function (t) {
                    var i = Math.exp(t);
                    return i = (i + 1 / i) / 2
                }, di = function (t, i, e) {
                    for (var n, s, o = Math.sin(i), a = Math.cos(i), r = oi(e), h = ci(e), l = 2 * a * h, u = -2 * o * r, c = t.length - 1, d = t[c], p = 0, m = 0, _ = 0; --c >= 0;) n = m, s = p, m = d, p = _, d = l * m - n - u * p + t[c], _ = u * m - s + l * p;
                    return l = o * h, u = a * r, [l * d - u * _, l * _ + u * d]
                }, pi = {
                    init: function () {
                        if (void 0 === this.es || this.es <= 0) throw new Error("incorrect elliptical usage");
                        this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
                        var t = this.es / (1 + Math.sqrt(1 - this.es)), i = t / (2 - t), e = i;
                        this.cgb[0] = i * (2 + i * (-2 / 3 + i * (i * (116 / 45 + i * (26 / 45 + i * (-2854 / 675))) - 2))), this.cbg[0] = i * (i * (2 / 3 + i * (4 / 3 + i * (-82 / 45 + i * (32 / 45 + i * (4642 / 4725))))) - 2), e *= i, this.cgb[1] = e * (7 / 3 + i * (i * (-227 / 45 + i * (2704 / 315 + i * (2323 / 945))) - 1.6)), this.cbg[1] = e * (5 / 3 + i * (-16 / 15 + i * (-13 / 9 + i * (904 / 315 + i * (-1522 / 945))))), e *= i, this.cgb[2] = e * (56 / 15 + i * (-136 / 35 + i * (-1262 / 105 + i * (73814 / 2835)))), this.cbg[2] = e * (-26 / 15 + i * (34 / 21 + i * (1.6 + i * (-12686 / 2835)))), e *= i, this.cgb[3] = e * (4279 / 630 + i * (-332 / 35 + i * (-399572 / 14175))), this.cbg[3] = e * (1237 / 630 + i * (i * (-24832 / 14175) - 2.4)), e *= i, this.cgb[4] = e * (4174 / 315 + i * (-144838 / 6237)), this.cbg[4] = e * (-734 / 315 + i * (109598 / 31185)), e *= i, this.cgb[5] = e * (601676 / 22275), this.cbg[5] = e * (444337 / 155925), e = Math.pow(i, 2), this.Qn = this.k0 / (1 + i) * (1 + e * (.25 + e * (1 / 64 + e / 256))), this.utg[0] = i * (i * (2 / 3 + i * (-37 / 96 + i * (1 / 360 + i * (81 / 512 + i * (-96199 / 604800))))) - .5), this.gtu[0] = i * (.5 + i * (-2 / 3 + i * (5 / 16 + i * (41 / 180 + i * (-127 / 288 + i * (7891 / 37800)))))), this.utg[1] = e * (-1 / 48 + i * (-1 / 15 + i * (437 / 1440 + i * (-46 / 105 + i * (1118711 / 3870720))))), this.gtu[1] = e * (13 / 48 + i * (i * (557 / 1440 + i * (281 / 630 + i * (-1983433 / 1935360))) - .6)), e *= i, this.utg[2] = e * (-17 / 480 + i * (37 / 840 + i * (209 / 4480 + i * (-5569 / 90720)))), this.gtu[2] = e * (61 / 240 + i * (-103 / 140 + i * (15061 / 26880 + i * (167603 / 181440)))), e *= i, this.utg[3] = e * (-4397 / 161280 + i * (11 / 504 + i * (830251 / 7257600))), this.gtu[3] = e * (49561 / 161280 + i * (-179 / 168 + i * (6601661 / 7257600))), e *= i, this.utg[4] = e * (-4583 / 161280 + i * (108847 / 3991680)), this.gtu[4] = e * (34729 / 80640 + i * (-3418889 / 1995840)), e *= i, this.utg[5] = -.03233083094085698 * e, this.gtu[5] = .6650675310896665 * e;
                        var n = li(this.cbg, this.lat0);
                        this.Zb = -this.Qn * (n + ui(this.gtu, 2 * n))
                    }, forward: function (t) {
                        var i = St(t.x - this.long0), e = t.y;
                        e = li(this.cbg, e);
                        var n = Math.sin(e), s = Math.cos(e), o = Math.sin(i), a = Math.cos(i);
                        e = Math.atan2(n, a * s), i = Math.atan2(o * s, ai(n, s * a)), i = hi(Math.tan(i));
                        var r = di(this.gtu, 2 * e, 2 * i);
                        e += r[0], i += r[1];
                        var h, l;
                        return Math.abs(i) <= 2.623395162778 ? (h = this.a * (this.Qn * i) + this.x0, l = this.a * (this.Qn * e + this.Zb) + this.y0) : (h = 1 / 0, l = 1 / 0), t.x = h, t.y = l, t
                    }, inverse: function (t) {
                        var i = (t.x - this.x0) * (1 / this.a), e = (t.y - this.y0) * (1 / this.a);
                        e = (e - this.Zb) / this.Qn, i /= this.Qn;
                        var n, s;
                        if (Math.abs(i) <= 2.623395162778) {
                            var o = di(this.utg, 2 * e, 2 * i);
                            e += o[0], i += o[1], i = Math.atan(oi(i));
                            var a = Math.sin(e), r = Math.cos(e), h = Math.sin(i), l = Math.cos(i);
                            e = Math.atan2(a * l, ai(h, l * r)), i = Math.atan2(h, l * r), n = St(i + this.long0), s = li(this.cgb, e)
                        } else n = 1 / 0, s = 1 / 0;
                        return t.x = n, t.y = s, t
                    }, names: ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc"]
                }, mi = function (t, i) {
                    if (void 0 === t) {
                        if (0 > (t = Math.floor(30 * (St(i) + Math.PI) / Math.PI) + 1)) return 0;
                        if (t > 60) return 60
                    }
                    return t
                }, _i = {
                    init: function () {
                        var t = mi(this.zone, this.long0);
                        if (void 0 === t) throw new Error("unknown utm zone");
                        this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * ht, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = .9996, pi.init.apply(this), this.forward = pi.forward, this.inverse = pi.inverse
                    }, names: ["Universal Transverse Mercator System", "utm"], dependsOn: "etmerc"
                }, fi = function (t, i) {
                    return Math.pow((1 - t) / (1 + t), i)
                }, gi = 20, vi = {
                    init: function () {
                        var t = Math.sin(this.lat0), i = Math.cos(this.lat0);
                        i *= i, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * i * i / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = .5 * this.C * this.e, this.K = Math.tan(.5 * this.phic0 + ut) / (Math.pow(Math.tan(.5 * this.lat0 + ut), this.C) * fi(this.e * t, this.ratexp))
                    }, forward: function (t) {
                        var i = t.x, e = t.y;
                        return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * e + ut), this.C) * fi(this.e * Math.sin(e), this.ratexp)) - nt, t.x = this.C * i, t
                    }, inverse: function (t) {
                        for (var i = t.x / this.C, e = t.y, n = Math.pow(Math.tan(.5 * e + ut) / this.K, 1 / this.C), s = gi; s > 0 && (e = 2 * Math.atan(n * fi(this.e * Math.sin(t.y), -.5 * this.e)) - nt, !(Math.abs(e - t.y) < 1e-14)); --s) t.y = e;
                        return s ? (t.x = i, t.y = e, t) : null
                    }, names: ["gauss"]
                }, yi = {
                    init: function () {
                        vi.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"))
                    },
                    forward: function (t) {
                        var i, e, n, s;
                        return t.x = St(t.x - this.long0), vi.forward.apply(this, [t]), i = Math.sin(t.y), e = Math.cos(t.y), n = Math.cos(t.x), s = this.k0 * this.R2 / (1 + this.sinc0 * i + this.cosc0 * e * n), t.x = s * e * Math.sin(t.x), t.y = s * (this.cosc0 * i - this.sinc0 * e * n), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t
                    },
                    inverse: function (t) {
                        var i, e, n, s, o;
                        if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, o = Math.sqrt(t.x * t.x + t.y * t.y)) {
                            var a = 2 * Math.atan2(o, this.R2);
                            i = Math.sin(a), e = Math.cos(a), s = Math.asin(e * this.sinc0 + t.y * i * this.cosc0 / o), n = Math.atan2(t.x * i, o * this.cosc0 * e - t.y * this.sinc0 * i)
                        } else s = this.phic0, n = 0;
                        return t.x = n, t.y = s, vi.inverse.apply(this, [t]), t.x = St(t.x + this.long0), t
                    },
                    names: ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative"]
                }, Mi = {
                    init: function () {
                        this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= rt && (this.k0 = .5 * (1 + Ct(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= rt && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= rt && (this.k0 = .5 * this.cons * Et(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / kt(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = Et(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - nt, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0))
                    },
                    forward: function (t) {
                        var i, e, n, s, o, a, r = t.x, h = t.y, l = Math.sin(h), u = Math.cos(h), c = St(r - this.long0);
                        return Math.abs(Math.abs(r - this.long0) - Math.PI) <= rt && Math.abs(h + this.lat0) <= rt ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (i = 2 * this.k0 / (1 + this.sinlat0 * l + this.coslat0 * u * Math.cos(c)), t.x = this.a * i * u * Math.sin(c) + this.x0, t.y = this.a * i * (this.coslat0 * l - this.sinlat0 * u * Math.cos(c)) + this.y0, t) : (e = 2 * Math.atan(this.ssfn_(h, l, this.e)) - nt, s = Math.cos(e), n = Math.sin(e), Math.abs(this.coslat0) <= rt ? (o = kt(this.e, h * this.con, this.con * l), a = 2 * this.a * this.k0 * o / this.cons, t.x = this.x0 + a * Math.sin(r - this.long0), t.y = this.y0 - this.con * a * Math.cos(r - this.long0), t) : (Math.abs(this.sinlat0) < rt ? (i = 2 * this.a * this.k0 / (1 + s * Math.cos(c)), t.y = i * n) : (i = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * n + this.cosX0 * s * Math.cos(c))), t.y = i * (this.cosX0 * n - this.sinX0 * s * Math.cos(c)) + this.y0), t.x = i * s * Math.sin(c) + this.x0, t))
                    },
                    inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i, e, n, s, o, a = Math.sqrt(t.x * t.x + t.y * t.y);
                        if (this.sphere) {
                            var r = 2 * Math.atan(a / (.5 * this.a * this.k0));
                            return i = this.long0, e = this.lat0, rt >= a ? (t.x = i, t.y = e, t) : (e = Math.asin(Math.cos(r) * this.sinlat0 + t.y * Math.sin(r) * this.coslat0 / a), i = St(Math.abs(this.coslat0) < rt ? this.lat0 > 0 ? this.long0 + Math.atan2(t.x, -1 * t.y) : this.long0 + Math.atan2(t.x, t.y) : this.long0 + Math.atan2(t.x * Math.sin(r), a * this.coslat0 * Math.cos(r) - t.y * this.sinlat0 * Math.sin(r))), t.x = i, t.y = e, t)
                        }
                        if (Math.abs(this.coslat0) <= rt) {
                            if (rt >= a) return e = this.lat0, i = this.long0, t.x = i, t.y = e, t;
                            t.x *= this.con, t.y *= this.con, n = a * this.cons / (2 * this.a * this.k0), e = this.con * At(this.e, n), i = this.con * St(this.con * this.long0 + Math.atan2(t.x, -1 * t.y))
                        } else s = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), i = this.long0, rt >= a ? o = this.X0 : (o = Math.asin(Math.cos(s) * this.sinX0 + t.y * Math.sin(s) * this.cosX0 / a), i = St(this.long0 + Math.atan2(t.x * Math.sin(s), a * this.cosX0 * Math.cos(s) - t.y * this.sinX0 * Math.sin(s)))), e = -1 * At(this.e, Math.tan(.5 * (nt + o)));
                        return t.x = i, t.y = e, t
                    },
                    names: ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"],
                    ssfn_: function (t, i, e) {
                        return i *= e, Math.tan(.5 * (nt + t)) * Math.pow((1 - i) / (1 + i), .5 * e)
                    }
                }, bi = {
                    init: function () {
                        var t = this.lat0;
                        this.lambda0 = this.long0;
                        var i = Math.sin(t), e = this.a, n = 1 / this.rf, s = 2 * n - Math.pow(n, 2),
                            o = this.e = Math.sqrt(s);
                        this.R = this.k0 * e * Math.sqrt(1 - s) / (1 - s * Math.pow(i, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(i / this.alpha);
                        var a = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), r = Math.log(Math.tan(Math.PI / 4 + t / 2)),
                            h = Math.log((1 + o * i) / (1 - o * i));
                        this.K = a - this.alpha * r + this.alpha * o / 2 * h
                    }, forward: function (t) {
                        var i = Math.log(Math.tan(Math.PI / 4 - t.y / 2)),
                            e = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))),
                            n = -this.alpha * (i + e) + this.K, s = 2 * (Math.atan(Math.exp(n)) - Math.PI / 4),
                            o = this.alpha * (t.x - this.lambda0),
                            a = Math.atan(Math.sin(o) / (Math.sin(this.b0) * Math.tan(s) + Math.cos(this.b0) * Math.cos(o))),
                            r = Math.asin(Math.cos(this.b0) * Math.sin(s) - Math.sin(this.b0) * Math.cos(s) * Math.cos(o));
                        return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0, t.x = this.R * a + this.x0, t
                    }, inverse: function (t) {
                        for (var i = t.x - this.x0, e = t.y - this.y0, n = i / this.R, s = 2 * (Math.atan(Math.exp(e / this.R)) - Math.PI / 4), o = Math.asin(Math.cos(this.b0) * Math.sin(s) + Math.sin(this.b0) * Math.cos(s) * Math.cos(n)), a = Math.atan(Math.sin(n) / (Math.cos(this.b0) * Math.cos(n) - Math.sin(this.b0) * Math.tan(s))), r = this.lambda0 + a / this.alpha, h = 0, l = o, u = -1e3, c = 0; Math.abs(l - u) > 1e-7;) {
                            if (++c > 20) return;
                            h = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + o / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(h)) - Math.PI / 2
                        }
                        return t.x = r, t.y = l, t
                    }, names: ["somerc"]
                }, xi = {
                    init: function () {
                        this.no_off = this.no_off || !1, this.no_rot = this.no_rot || !1, isNaN(this.k0) && (this.k0 = 1);
                        var t = Math.sin(this.lat0), i = Math.cos(this.lat0), e = this.e * t;
                        this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(i, 4)), this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - e * e);
                        var n = kt(this.e, this.lat0, t), s = this.bl / i * Math.sqrt((1 - this.es) / (1 - e * e));
                        1 > s * s && (s = 1);
                        var o, a;
                        if (isNaN(this.longc)) {
                            var r = kt(this.e, this.lat1, Math.sin(this.lat1)),
                                h = kt(this.e, this.lat2, Math.sin(this.lat2));
                            this.lat0 >= 0 ? this.el = (s + Math.sqrt(s * s - 1)) * Math.pow(n, this.bl) : this.el = (s - Math.sqrt(s * s - 1)) * Math.pow(n, this.bl);
                            var l = Math.pow(r, this.bl), u = Math.pow(h, this.bl);
                            a = .5 * ((o = this.el / l) - 1 / o);
                            var c = (this.el * this.el - u * l) / (this.el * this.el + u * l), d = (u - l) / (u + l),
                                p = St(this.long1 - this.long2);
                            this.long0 = .5 * (this.long1 + this.long2) - Math.atan(c * Math.tan(.5 * this.bl * p) / d) / this.bl, this.long0 = St(this.long0);
                            var m = St(this.long1 - this.long0);
                            this.gamma0 = Math.atan(Math.sin(this.bl * m) / a), this.alpha = Math.asin(s * Math.sin(this.gamma0))
                        } else o = this.lat0 >= 0 ? s + Math.sqrt(s * s - 1) : s - Math.sqrt(s * s - 1), this.el = o * Math.pow(n, this.bl), a = .5 * (o - 1 / o), this.gamma0 = Math.asin(Math.sin(this.alpha) / s), this.long0 = this.longc - Math.asin(a * Math.tan(this.gamma0)) / this.bl;
                        this.no_off ? this.uc = 0 : this.lat0 >= 0 ? this.uc = this.al / this.bl * Math.atan2(Math.sqrt(s * s - 1), Math.cos(this.alpha)) : this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(s * s - 1), Math.cos(this.alpha))
                    },
                    forward: function (t) {
                        var i, e, n, s = t.x, o = t.y, a = St(s - this.long0);
                        if (Math.abs(Math.abs(o) - nt) <= rt) n = o > 0 ? -1 : 1, e = this.al / this.bl * Math.log(Math.tan(ut + n * this.gamma0 * .5)), i = -1 * n * nt * this.al / this.bl; else {
                            var r = kt(this.e, o, Math.sin(o)), h = this.el / Math.pow(r, this.bl), l = .5 * (h - 1 / h),
                                u = .5 * (h + 1 / h), c = Math.sin(this.bl * a),
                                d = (l * Math.sin(this.gamma0) - c * Math.cos(this.gamma0)) / u;
                            e = Math.abs(Math.abs(d) - 1) <= rt ? Number.POSITIVE_INFINITY : .5 * this.al * Math.log((1 - d) / (1 + d)) / this.bl, i = Math.abs(Math.cos(this.bl * a)) <= rt ? this.al * this.bl * a : this.al * Math.atan2(l * Math.cos(this.gamma0) + c * Math.sin(this.gamma0), Math.cos(this.bl * a)) / this.bl
                        }
                        return this.no_rot ? (t.x = this.x0 + i, t.y = this.y0 + e) : (i -= this.uc, t.x = this.x0 + e * Math.cos(this.alpha) + i * Math.sin(this.alpha), t.y = this.y0 + i * Math.cos(this.alpha) - e * Math.sin(this.alpha)), t
                    },
                    inverse: function (t) {
                        var i, e;
                        this.no_rot ? (e = t.y - this.y0, i = t.x - this.x0) : (e = (t.x - this.x0) * Math.cos(this.alpha) - (t.y - this.y0) * Math.sin(this.alpha), i = (t.y - this.y0) * Math.cos(this.alpha) + (t.x - this.x0) * Math.sin(this.alpha), i += this.uc);
                        var n = Math.exp(-1 * this.bl * e / this.al), s = .5 * (n - 1 / n), o = .5 * (n + 1 / n),
                            a = Math.sin(this.bl * i / this.al),
                            r = (a * Math.cos(this.gamma0) + s * Math.sin(this.gamma0)) / o,
                            h = Math.pow(this.el / Math.sqrt((1 + r) / (1 - r)), 1 / this.bl);
                        return Math.abs(r - 1) < rt ? (t.x = this.long0, t.y = nt) : Math.abs(r + 1) < rt ? (t.x = this.long0, t.y = -1 * nt) : (t.y = At(this.e, h), t.x = St(this.long0 - Math.atan2(s * Math.cos(this.gamma0) - a * Math.sin(this.gamma0), Math.cos(this.bl * i / this.al)) / this.bl)), t
                    },
                    names: ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"]
                }, wi = {
                    init: function () {
                        if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < rt)) {
                            var t = this.b / this.a;
                            this.e = Math.sqrt(1 - t * t);
                            var i = Math.sin(this.lat1), e = Math.cos(this.lat1), n = Et(this.e, i, e),
                                s = kt(this.e, this.lat1, i), o = Math.sin(this.lat2), a = Math.cos(this.lat2),
                                r = Et(this.e, o, a), h = kt(this.e, this.lat2, o),
                                l = kt(this.e, this.lat0, Math.sin(this.lat0));
                            Math.abs(this.lat1 - this.lat2) > rt ? this.ns = Math.log(n / r) / Math.log(s / h) : this.ns = i, isNaN(this.ns) && (this.ns = i), this.f0 = n / (this.ns * Math.pow(s, this.ns)), this.rh = this.a * this.f0 * Math.pow(l, this.ns), this.title || (this.title = "Lambert Conformal Conic")
                        }
                    },
                    forward: function (t) {
                        var i = t.x, e = t.y;
                        Math.abs(2 * Math.abs(e) - Math.PI) <= rt && (e = Ct(e) * (nt - 2 * rt));
                        var n, s, o = Math.abs(Math.abs(e) - nt);
                        if (o > rt) n = kt(this.e, e, Math.sin(e)), s = this.a * this.f0 * Math.pow(n, this.ns); else {
                            if (0 >= (o = e * this.ns)) return null;
                            s = 0
                        }
                        var a = this.ns * St(i - this.long0);
                        return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t
                    },
                    inverse: function (t) {
                        var i, e, n, s, o, a = (t.x - this.x0) / this.k0, r = this.rh - (t.y - this.y0) / this.k0;
                        this.ns > 0 ? (i = Math.sqrt(a * a + r * r), e = 1) : (i = -Math.sqrt(a * a + r * r), e = -1);
                        var h = 0;
                        if (0 !== i && (h = Math.atan2(e * a, e * r)), 0 !== i || this.ns > 0) {
                            if (e = 1 / this.ns, n = Math.pow(i / (this.a * this.f0), e), -9999 === (s = At(this.e, n))) return null
                        } else s = -nt;
                        return o = St(h / this.ns + this.long0), t.x = o, t.y = s, t
                    },
                    names: ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"]
                }, Ti = {
                    init: function () {
                        this.a = 6377397.155, this.es = .006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = .863937979737193), this.long0 || (this.long0 = .4334234309119251), this.k0 || (this.k0 = .9999), this.s45 = .785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq
                    }, forward: function (t) {
                        var i, e, n, s, o, a, r, h = t.x, l = t.y, u = St(h - this.long0);
                        return i = Math.pow((1 + this.e * Math.sin(l)) / (1 - this.e * Math.sin(l)), this.alfa * this.e / 2), e = 2 * (Math.atan(this.k * Math.pow(Math.tan(l / 2 + this.s45), this.alfa) / i) - this.s45), n = -u * this.alfa, s = Math.asin(Math.cos(this.ad) * Math.sin(e) + Math.sin(this.ad) * Math.cos(e) * Math.cos(n)), o = Math.asin(Math.cos(e) * Math.sin(n) / Math.cos(s)), a = this.n * o, r = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n), t.y = r * Math.cos(a) / 1, t.x = r * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a, r, h = t.x;
                        t.x = t.y, t.y = h, this.czech || (t.y *= -1, t.x *= -1), o = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x) / Math.sin(this.s0), n = 2 * (Math.atan(Math.pow(this.ro0 / o, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), i = Math.asin(Math.cos(this.ad) * Math.sin(n) - Math.sin(this.ad) * Math.cos(n) * Math.cos(s)), e = Math.asin(Math.cos(n) * Math.sin(s) / Math.cos(i)), t.x = this.long0 - e / this.alfa, a = i, r = 0;
                        var l = 0;
                        do {
                            t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(i / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(a)) / (1 - this.e * Math.sin(a)), this.e / 2)) - this.s45), Math.abs(a - t.y) < 1e-10 && (r = 1), a = t.y, l += 1
                        } while (0 === r && 15 > l);
                        return l >= 15 ? null : t
                    }, names: ["Krovak", "krovak"]
                }, Li = function (t, i, e, n, s) {
                    return t * s - i * Math.sin(2 * s) + e * Math.sin(4 * s) - n * Math.sin(6 * s)
                }, Pi = function (t) {
                    return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
                }, Ei = function (t) {
                    return .375 * t * (1 + .25 * t * (1 + .46875 * t))
                }, Ci = function (t) {
                    return .05859375 * t * t * (1 + .75 * t)
                }, Si = function (t) {
                    return t * t * t * (35 / 3072)
                }, ki = function (t, i, e) {
                    var n = i * e;
                    return t / Math.sqrt(1 - n * n)
                }, Ai = function (t) {
                    return Math.abs(t) < nt ? t : t - Ct(t) * Math.PI
                }, zi = function (t, i, e, n, s) {
                    var o, a;
                    o = t / i;
                    for (var r = 0; 15 > r; r++) if (a = (t - (i * o - e * Math.sin(2 * o) + n * Math.sin(4 * o) - s * Math.sin(6 * o))) / (i - 2 * e * Math.cos(2 * o) + 4 * n * Math.cos(4 * o) - 6 * s * Math.cos(6 * o)), o += a, Math.abs(a) <= 1e-10) return o;
                    return NaN
                }, Ii = {
                    init: function () {
                        this.sphere || (this.e0 = Pi(this.es), this.e1 = Ei(this.es), this.e2 = Ci(this.es), this.e3 = Si(this.es), this.ml0 = this.a * Li(this.e0, this.e1, this.e2, this.e3, this.lat0))
                    }, forward: function (t) {
                        var i, e, n = t.x, s = t.y;
                        if (n = St(n - this.long0), this.sphere) i = this.a * Math.asin(Math.cos(s) * Math.sin(n)), e = this.a * (Math.atan2(Math.tan(s), Math.cos(n)) - this.lat0); else {
                            var o = Math.sin(s), a = Math.cos(s), r = ki(this.a, this.e, o), h = Math.tan(s) * Math.tan(s),
                                l = n * Math.cos(s), u = l * l, c = this.es * a * a / (1 - this.es);
                            i = r * l * (1 - u * h * (1 / 6 - (8 - h + 8 * c) * u / 120)), e = this.a * Li(this.e0, this.e1, this.e2, this.e3, s) - this.ml0 + r * o / a * u * (.5 + (5 - h + 6 * c) * u / 24)
                        }
                        return t.x = i + this.x0, t.y = e + this.y0, t
                    }, inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i, e, n = t.x / this.a, s = t.y / this.a;
                        if (this.sphere) {
                            var o = s + this.lat0;
                            i = Math.asin(Math.sin(o) * Math.cos(n)), e = Math.atan2(Math.tan(n), Math.cos(o))
                        } else {
                            var a = this.ml0 / this.a + s, r = zi(a, this.e0, this.e1, this.e2, this.e3);
                            if (Math.abs(Math.abs(r) - nt) <= rt) return t.x = this.long0, t.y = nt, 0 > s && (t.y *= -1), t;
                            var h = ki(this.a, this.e, Math.sin(r)), l = h * h * h / this.a / this.a * (1 - this.es),
                                u = Math.pow(Math.tan(r), 2), c = n * this.a / h, d = c * c;
                            i = r - h * Math.tan(r) / l * c * c * (.5 - (1 + 3 * u) * c * c / 24), e = c * (1 - d * (u / 3 + (1 + 3 * u) * u * d / 15)) / Math.cos(r)
                        }
                        return t.x = St(e + this.long0), t.y = Ai(i), t
                    }, names: ["Cassini", "Cassini_Soldner", "cass"]
                }, Oi = function (t, i) {
                    var e;
                    return t > 1e-7 ? (e = t * i, (1 - t * t) * (i / (1 - e * e) - .5 / t * Math.log((1 - e) / (1 + e)))) : 2 * i
                }, Ri = .3333333333333333, Ni = .17222222222222222, Bi = .10257936507936508, Zi = .06388888888888888,
                Di = .0664021164021164, ji = .016415012942191543, Hi = {
                    init: function () {
                        var t = Math.abs(this.lat0);
                        if (Math.abs(t - nt) < rt ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < rt ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
                            var i;
                            switch (this.qp = Oi(this.e, 1), this.mmf = .5 / (1 - this.es), this.apa = K(this.es), this.mode) {
                                case this.N_POLE:
                                case this.S_POLE:
                                    this.dd = 1;
                                    break;
                                case this.EQUIT:
                                    this.rq = Math.sqrt(.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = .5 * this.qp;
                                    break;
                                case this.OBLIQ:
                                    this.rq = Math.sqrt(.5 * this.qp), i = Math.sin(this.lat0), this.sinb1 = Oi(this.e, i) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * i * i) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd
                            }
                        } else this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0))
                    },
                    forward: function (t) {
                        var i, e, n, s, o, a, r, h, l, u, c = t.x, d = t.y;
                        if (c = St(c - this.long0), this.sphere) {
                            if (o = Math.sin(d), u = Math.cos(d), n = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                                if (e = this.mode === this.EQUIT ? 1 + u * n : 1 + this.sinph0 * o + this.cosph0 * u * n, rt >= e) return null;
                                i = (e = Math.sqrt(2 / e)) * u * Math.sin(c), e *= this.mode === this.EQUIT ? o : this.cosph0 * o - this.sinph0 * u * n
                            } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                                if (this.mode === this.N_POLE && (n = -n), Math.abs(d + this.phi0) < rt) return null;
                                e = ut - .5 * d, i = (e = 2 * (this.mode === this.S_POLE ? Math.cos(e) : Math.sin(e))) * Math.sin(c), e *= n
                            }
                        } else {
                            switch (r = 0, h = 0, l = 0, n = Math.cos(c), s = Math.sin(c), o = Math.sin(d), a = Oi(this.e, o), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (r = a / this.qp, h = Math.sqrt(1 - r * r)), this.mode) {
                                case this.OBLIQ:
                                    l = 1 + this.sinb1 * r + this.cosb1 * h * n;
                                    break;
                                case this.EQUIT:
                                    l = 1 + h * n;
                                    break;
                                case this.N_POLE:
                                    l = nt + d, a = this.qp - a;
                                    break;
                                case this.S_POLE:
                                    l = d - nt, a = this.qp + a
                            }
                            if (Math.abs(l) < rt) return null;
                            switch (this.mode) {
                                case this.OBLIQ:
                                case this.EQUIT:
                                    l = Math.sqrt(2 / l), e = this.mode === this.OBLIQ ? this.ymf * l * (this.cosb1 * r - this.sinb1 * h * n) : (l = Math.sqrt(2 / (1 + h * n))) * r * this.ymf, i = this.xmf * l * h * s;
                                    break;
                                case this.N_POLE:
                                case this.S_POLE:
                                    a >= 0 ? (i = (l = Math.sqrt(a)) * s, e = n * (this.mode === this.S_POLE ? l : -l)) : i = e = 0
                            }
                        }
                        return t.x = this.a * i + this.x0, t.y = this.a * e + this.y0, t
                    },
                    inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i, e, n, s, o, a, r, h = t.x / this.a, l = t.y / this.a;
                        if (this.sphere) {
                            var u, c = 0, d = 0;
                            if (u = Math.sqrt(h * h + l * l), (e = .5 * u) > 1) return null;
                            switch (e = 2 * Math.asin(e), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (d = Math.sin(e), c = Math.cos(e)), this.mode) {
                                case this.EQUIT:
                                    e = Math.abs(u) <= rt ? 0 : Math.asin(l * d / u), h *= d, l = c * u;
                                    break;
                                case this.OBLIQ:
                                    e = Math.abs(u) <= rt ? this.phi0 : Math.asin(c * this.sinph0 + l * d * this.cosph0 / u), h *= d * this.cosph0, l = (c - Math.sin(e) * this.sinph0) * u;
                                    break;
                                case this.N_POLE:
                                    l = -l, e = nt - e;
                                    break;
                                case this.S_POLE:
                                    e -= nt
                            }
                            i = 0 !== l || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(h, l) : 0
                        } else {
                            if (r = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                                if (h /= this.dd, l *= this.dd, a = Math.sqrt(h * h + l * l), rt > a) return t.x = 0, t.y = this.phi0, t;
                                s = 2 * Math.asin(.5 * a / this.rq), n = Math.cos(s), h *= s = Math.sin(s), this.mode === this.OBLIQ ? (r = n * this.sinb1 + l * s * this.cosb1 / a, o = this.qp * r, l = a * this.cosb1 * n - l * this.sinb1 * s) : (r = l * s / a, o = this.qp * r, l = a * n)
                            } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                                if (this.mode === this.N_POLE && (l = -l), !(o = h * h + l * l)) return t.x = 0, t.y = this.phi0, t;
                                r = 1 - o / this.qp, this.mode === this.S_POLE && (r = -r)
                            }
                            i = Math.atan2(h, l), e = Q(Math.asin(r), this.apa)
                        }
                        return t.x = St(this.long0 + i), t.y = e, t
                    },
                    names: ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"],
                    S_POLE: 1,
                    N_POLE: 2,
                    EQUIT: 3,
                    OBLIQ: 4
                }, qi = function (t) {
                    return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t)
                }, Gi = {
                    init: function () {
                        Math.abs(this.lat1 + this.lat2) < rt || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = Et(this.e3, this.sin_po, this.cos_po), this.qs1 = Oi(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = Et(this.e3, this.sin_po, this.cos_po), this.qs2 = Oi(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Oi(this.e3, this.sin_po, this.cos_po), Math.abs(this.lat1 - this.lat2) > rt ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0)
                    }, forward: function (t) {
                        var i = t.x, e = t.y;
                        this.sin_phi = Math.sin(e), this.cos_phi = Math.cos(e);
                        var n = Oi(this.e3, this.sin_phi, this.cos_phi),
                            s = this.a * Math.sqrt(this.c - this.ns0 * n) / this.ns0, o = this.ns0 * St(i - this.long0),
                            a = s * Math.sin(o) + this.x0, r = this.rh - s * Math.cos(o) + this.y0;
                        return t.x = a, t.y = r, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a;
                        return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (i = Math.sqrt(t.x * t.x + t.y * t.y), n = 1) : (i = -Math.sqrt(t.x * t.x + t.y * t.y), n = -1), s = 0, 0 !== i && (s = Math.atan2(n * t.x, n * t.y)), n = i * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - n * n) / (2 * this.ns0)) : (e = (this.c - n * n) / this.ns0, a = this.phi1z(this.e3, e)), o = St(s / this.ns0 + this.long0), t.x = o, t.y = a, t
                    }, names: ["Albers_Conic_Equal_Area", "Albers", "aea"], phi1z: function (t, i) {
                        var e, n, s, o, a, r = qi(.5 * i);
                        if (rt > t) return r;
                        for (var h = t * t, l = 1; 25 >= l; l++) if (e = Math.sin(r), n = Math.cos(r), s = t * e, o = 1 - s * s, a = .5 * o * o / n * (i / (1 - h) - e / o + .5 / t * Math.log((1 - s) / (1 + s))), r += a, Math.abs(a) <= 1e-7) return r;
                        return null
                    }
                }, Fi = {
                    init: function () {
                        this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1
                    }, forward: function (t) {
                        var i, e, n, s, o, a, r, h = t.x, l = t.y;
                        return n = St(h - this.long0), i = Math.sin(l), e = Math.cos(l), s = Math.cos(n), (o = this.sin_p14 * i + this.cos_p14 * e * s) > 0 || Math.abs(o) <= rt ? (a = this.x0 + 1 * this.a * e * Math.sin(n) / o, r = this.y0 + 1 * this.a * (this.cos_p14 * i - this.sin_p14 * e * s) / o) : (a = this.x0 + this.infinity_dist * e * Math.sin(n), r = this.y0 + this.infinity_dist * (this.cos_p14 * i - this.sin_p14 * e * s)), t.x = a, t.y = r, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a;
                        return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (i = Math.sqrt(t.x * t.x + t.y * t.y)) ? (s = Math.atan2(i, this.rc), e = Math.sin(s), n = Math.cos(s), a = qi(n * this.sin_p14 + t.y * e * this.cos_p14 / i), o = Math.atan2(t.x * e, i * this.cos_p14 * n - t.y * this.sin_p14 * e), o = St(this.long0 + o)) : (a = this.phic0, o = 0), t.x = o, t.y = a, t
                    }, names: ["gnom"]
                }, Ui = function (t, i) {
                    var e = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
                    if (Math.abs(Math.abs(i) - e) < 1e-6) return 0 > i ? -1 * nt : nt;
                    for (var n, s, o, a, r = Math.asin(.5 * i), h = 0; 30 > h; h++) if (s = Math.sin(r), o = Math.cos(r), a = t * s, n = Math.pow(1 - a * a, 2) / (2 * o) * (i / (1 - t * t) - s / (1 - a * a) + .5 / t * Math.log((1 - a) / (1 + a))), r += n, Math.abs(n) <= 1e-10) return r;
                    return NaN
                }, Wi = {
                    init: function () {
                        this.sphere || (this.k0 = Et(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)))
                    }, forward: function (t) {
                        var i, e, n = t.x, s = t.y, o = St(n - this.long0);
                        if (this.sphere) i = this.x0 + this.a * o * Math.cos(this.lat_ts), e = this.y0 + this.a * Math.sin(s) / Math.cos(this.lat_ts); else {
                            var a = Oi(this.e, Math.sin(s));
                            i = this.x0 + this.a * this.k0 * o, e = this.y0 + this.a * a * .5 / this.k0
                        }
                        return t.x = i, t.y = e, t
                    }, inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i, e;
                        return this.sphere ? (i = St(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), e = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (e = Ui(this.e, 2 * t.y * this.k0 / this.a), i = St(this.long0 + t.x / (this.a * this.k0))), t.x = i, t.y = e, t
                    }, names: ["cea"]
                }, Vi = {
                    init: function () {
                        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts)
                    }, forward: function (t) {
                        var i = t.x, e = t.y, n = St(i - this.long0), s = Ai(e - this.lat0);
                        return t.x = this.x0 + this.a * n * this.rc, t.y = this.y0 + this.a * s, t
                    }, inverse: function (t) {
                        var i = t.x, e = t.y;
                        return t.x = St(this.long0 + (i - this.x0) / (this.a * this.rc)), t.y = Ai(this.lat0 + (e - this.y0) / this.a), t
                    }, names: ["Equirectangular", "Equidistant_Cylindrical", "eqc"]
                }, Ki = 20, Qi = {
                    init: function () {
                        this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Pi(this.es), this.e1 = Ei(this.es), this.e2 = Ci(this.es), this.e3 = Si(this.es), this.ml0 = this.a * Li(this.e0, this.e1, this.e2, this.e3, this.lat0)
                    }, forward: function (t) {
                        var i, e, n, s = t.x, o = t.y, a = St(s - this.long0);
                        if (n = a * Math.sin(o), this.sphere) Math.abs(o) <= rt ? (i = this.a * a, e = -1 * this.a * this.lat0) : (i = this.a * Math.sin(n) / Math.tan(o), e = this.a * (Ai(o - this.lat0) + (1 - Math.cos(n)) / Math.tan(o))); else if (Math.abs(o) <= rt) i = this.a * a, e = -1 * this.ml0; else {
                            var r = ki(this.a, this.e, Math.sin(o)) / Math.tan(o);
                            i = r * Math.sin(n), e = this.a * Li(this.e0, this.e1, this.e2, this.e3, o) - this.ml0 + r * (1 - Math.cos(n))
                        }
                        return t.x = i + this.x0, t.y = e + this.y0, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a, r, h, l;
                        if (n = t.x - this.x0, s = t.y - this.y0, this.sphere) if (Math.abs(s + this.a * this.lat0) <= rt) i = St(n / this.a + this.long0), e = 0; else {
                            a = this.lat0 + s / this.a, r = n * n / this.a / this.a + a * a, h = a;
                            var u;
                            for (o = Ki; o; --o) if (u = Math.tan(h), l = -1 * (a * (h * u + 1) - h - .5 * (h * h + r) * u) / ((h - a) / u - 1), h += l, Math.abs(l) <= rt) {
                                e = h;
                                break
                            }
                            i = St(this.long0 + Math.asin(n * Math.tan(h) / this.a) / Math.sin(e))
                        } else if (Math.abs(s + this.ml0) <= rt) e = 0, i = St(this.long0 + n / this.a); else {
                            a = (this.ml0 + s) / this.a, r = n * n / this.a / this.a + a * a, h = a;
                            var c, d, p, m, _;
                            for (o = Ki; o; --o) if (_ = this.e * Math.sin(h), c = Math.sqrt(1 - _ * _) * Math.tan(h), d = this.a * Li(this.e0, this.e1, this.e2, this.e3, h), p = this.e0 - 2 * this.e1 * Math.cos(2 * h) + 4 * this.e2 * Math.cos(4 * h) - 6 * this.e3 * Math.cos(6 * h), m = d / this.a, l = (a * (c * m + 1) - m - .5 * c * (m * m + r)) / (this.es * Math.sin(2 * h) * (m * m + r - 2 * a * m) / (4 * c) + (a - m) * (c * p - 2 / Math.sin(2 * h)) - p), h -= l, Math.abs(l) <= rt) {
                                e = h;
                                break
                            }
                            c = Math.sqrt(1 - this.es * Math.pow(Math.sin(e), 2)) * Math.tan(e), i = St(this.long0 + Math.asin(n * c / this.a) / Math.sin(e))
                        }
                        return t.x = i, t.y = e, t
                    }, names: ["Polyconic", "poly"]
                }, Ji = {
                    init: function () {
                        this.A = [], this.A[1] = .6399175073, this.A[2] = -.1358797613, this.A[3] = .063294409, this.A[4] = -.02526853, this.A[5] = .0117879, this.A[6] = -.0055161, this.A[7] = .0026906, this.A[8] = -.001333, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = .7557853228, this.B_im[1] = 0, this.B_re[2] = .249204646, this.B_im[2] = .003371507, this.B_re[3] = -.001541739, this.B_im[3] = .04105856, this.B_re[4] = -.10162907, this.B_im[4] = .01727609, this.B_re[5] = -.26623489, this.B_im[5] = -.36249218, this.B_re[6] = -.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -.577245789, this.C_im[2] = -.007809598, this.C_re[3] = .508307513, this.C_im[3] = -.112208952, this.C_re[4] = -.15094762, this.C_im[4] = .18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = .5185406398, this.D[3] = -.03333098, this.D[4] = -.1052906, this.D[5] = -.0368594, this.D[6] = .007317, this.D[7] = .0122, this.D[8] = .00394, this.D[9] = -.0013
                    }, forward: function (t) {
                        var i, e = t.x, n = t.y - this.lat0, s = e - this.long0, o = n / et * 1e-5, a = s, r = 1, h = 0;
                        for (i = 1; 10 >= i; i++) r *= o, h += this.A[i] * r;
                        var l, u, c = h, d = a, p = 1, m = 0, _ = 0, f = 0;
                        for (i = 1; 6 >= i; i++) l = p * c - m * d, u = m * c + p * d, p = l, m = u, _ = _ + this.B_re[i] * p - this.B_im[i] * m, f = f + this.B_im[i] * p + this.B_re[i] * m;
                        return t.x = f * this.a + this.x0, t.y = _ * this.a + this.y0, t
                    }, inverse: function (t) {
                        var i, e, n, s = t.x, o = t.y, a = s - this.x0, r = (o - this.y0) / this.a, h = a / this.a, l = 1,
                            u = 0, c = 0, d = 0;
                        for (i = 1; 6 >= i; i++) e = l * r - u * h, n = u * r + l * h, l = e, u = n, c = c + this.C_re[i] * l - this.C_im[i] * u, d = d + this.C_im[i] * l + this.C_re[i] * u;
                        for (var p = 0; p < this.iterations; p++) {
                            var m, _, f = c, g = d, v = r, y = h;
                            for (i = 2; 6 >= i; i++) m = f * c - g * d, _ = g * c + f * d, f = m, g = _, v += (i - 1) * (this.B_re[i] * f - this.B_im[i] * g), y += (i - 1) * (this.B_im[i] * f + this.B_re[i] * g);
                            f = 1, g = 0;
                            var M = this.B_re[1], b = this.B_im[1];
                            for (i = 2; 6 >= i; i++) m = f * c - g * d, _ = g * c + f * d, f = m, g = _, M += i * (this.B_re[i] * f - this.B_im[i] * g), b += i * (this.B_im[i] * f + this.B_re[i] * g);
                            var x = M * M + b * b;
                            c = (v * M + y * b) / x, d = (y * M - v * b) / x
                        }
                        var w = c, T = d, L = 1, P = 0;
                        for (i = 1; 9 >= i; i++) L *= w, P += this.D[i] * L;
                        var E = this.lat0 + P * et * 1e5, C = this.long0 + T;
                        return t.x = C, t.y = E, t
                    }, names: ["New_Zealand_Map_Grid", "nzmg"]
                }, Xi = {
                    init: function () {
                    }, forward: function (t) {
                        var i = t.x, e = t.y, n = St(i - this.long0), s = this.x0 + this.a * n,
                            o = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + e / 2.5)) * 1.25;
                        return t.x = s, t.y = o, t
                    }, inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i = St(this.long0 + t.x / this.a),
                            e = 2.5 * (Math.atan(Math.exp(.8 * t.y / this.a)) - Math.PI / 4);
                        return t.x = i, t.y = e, t
                    }, names: ["Miller_Cylindrical", "mill"]
                }, Yi = 20, $i = {
                    init: function () {
                        this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = ii(this.es)
                    }, forward: function (t) {
                        var i, e, n = t.x, s = t.y;
                        if (n = St(n - this.long0), this.sphere) {
                            if (this.m) for (var o = this.n * Math.sin(s), a = Yi; a; --a) {
                                var r = (this.m * s + Math.sin(s) - o) / (this.m + Math.cos(s));
                                if (s -= r, Math.abs(r) < rt) break
                            } else s = 1 !== this.n ? Math.asin(this.n * Math.sin(s)) : s;
                            i = this.a * this.C_x * n * (this.m + Math.cos(s)), e = this.a * this.C_y * s
                        } else {
                            var h = Math.sin(s), l = Math.cos(s);
                            e = this.a * ei(s, h, l, this.en), i = this.a * n * l / Math.sqrt(1 - this.es * h * h)
                        }
                        return t.x = i, t.y = e, t
                    }, inverse: function (t) {
                        var i, e, n, s;
                        return t.x -= this.x0, n = t.x / this.a, t.y -= this.y0, i = t.y / this.a, this.sphere ? (i /= this.C_y, n /= this.C_x * (this.m + Math.cos(i)), this.m ? i = qi((this.m * i + Math.sin(i)) / this.n) : 1 !== this.n && (i = qi(Math.sin(i) / this.n)), n = St(n + this.long0), i = Ai(i)) : (i = ni(t.y / this.a, this.es, this.en), s = Math.abs(i), nt > s ? (s = Math.sin(i), e = this.long0 + t.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(i)), n = St(e)) : nt > s - rt && (n = this.long0)), t.x = n, t.y = i, t
                    }, names: ["Sinusoidal", "sinu"]
                }, te = {
                    init: function () {
                    }, forward: function (t) {
                        for (var i = t.x, e = t.y, n = St(i - this.long0), s = e, o = Math.PI * Math.sin(e); ;) {
                            var a = -(s + Math.sin(s) - o) / (1 + Math.cos(s));
                            if (s += a, Math.abs(a) < rt) break
                        }
                        s /= 2, Math.PI / 2 - Math.abs(e) < rt && (n = 0);
                        var r = .900316316158 * this.a * n * Math.cos(s) + this.x0,
                            h = 1.4142135623731 * this.a * Math.sin(s) + this.y0;
                        return t.x = r, t.y = h, t
                    }, inverse: function (t) {
                        var i, e;
                        t.x -= this.x0, t.y -= this.y0, e = t.y / (1.4142135623731 * this.a), Math.abs(e) > .999999999999 && (e = .999999999999), i = Math.asin(e);
                        var n = St(this.long0 + t.x / (.900316316158 * this.a * Math.cos(i)));
                        n < -Math.PI && (n = -Math.PI), n > Math.PI && (n = Math.PI), e = (2 * i + Math.sin(2 * i)) / Math.PI, Math.abs(e) > 1 && (e = 1);
                        var s = Math.asin(e);
                        return t.x = n, t.y = s, t
                    }, names: ["Mollweide", "moll"]
                }, ie = {
                    init: function () {
                        Math.abs(this.lat1 + this.lat2) < rt || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Pi(this.es), this.e1 = Ei(this.es), this.e2 = Ci(this.es), this.e3 = Si(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = Et(this.e, this.sinphi, this.cosphi), this.ml1 = Li(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < rt ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = Et(this.e, this.sinphi, this.cosphi), this.ml2 = Li(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Li(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0))
                    }, forward: function (t) {
                        var i, e = t.x, n = t.y;
                        if (this.sphere) i = this.a * (this.g - n); else {
                            var s = Li(this.e0, this.e1, this.e2, this.e3, n);
                            i = this.a * (this.g - s)
                        }
                        var o = this.ns * St(e - this.long0), a = this.x0 + i * Math.sin(o),
                            r = this.y0 + this.rh - i * Math.cos(o);
                        return t.x = a, t.y = r, t
                    }, inverse: function (t) {
                        t.x -= this.x0, t.y = this.rh - t.y + this.y0;
                        var i, e, n, s;
                        this.ns >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), i = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), i = -1);
                        var o = 0;
                        if (0 !== e && (o = Math.atan2(i * t.x, i * t.y)), this.sphere) return s = St(this.long0 + o / this.ns), n = Ai(this.g - e / this.a), t.x = s, t.y = n, t;
                        var a = this.g - e / this.a;
                        return n = zi(a, this.e0, this.e1, this.e2, this.e3), s = St(this.long0 + o / this.ns), t.x = s, t.y = n, t
                    }, names: ["Equidistant_Conic", "eqdc"]
                }, ee = {
                    init: function () {
                        this.R = this.a
                    }, forward: function (t) {
                        var i, e, n = t.x, s = t.y, o = St(n - this.long0);
                        Math.abs(s) <= rt && (i = this.x0 + this.R * o, e = this.y0);
                        var a = qi(2 * Math.abs(s / Math.PI));
                        (Math.abs(o) <= rt || Math.abs(Math.abs(s) - nt) <= rt) && (i = this.x0, e = s >= 0 ? this.y0 + Math.PI * this.R * Math.tan(.5 * a) : this.y0 + Math.PI * this.R * -Math.tan(.5 * a));
                        var r = .5 * Math.abs(Math.PI / o - o / Math.PI), h = r * r, l = Math.sin(a), u = Math.cos(a),
                            c = u / (l + u - 1), d = c * c, p = c * (2 / l - 1), m = p * p,
                            _ = Math.PI * this.R * (r * (c - m) + Math.sqrt(h * (c - m) * (c - m) - (m + h) * (d - m))) / (m + h);
                        0 > o && (_ = -_), i = this.x0 + _;
                        var f = h + c;
                        return _ = Math.PI * this.R * (p * f - r * Math.sqrt((m + h) * (h + 1) - f * f)) / (m + h), e = s >= 0 ? this.y0 + _ : this.y0 - _, t.x = i, t.y = e, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a, r, h, l, u, c, d, p;
                        return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, n = t.x / c, s = t.y / c, o = n * n + s * s, a = -Math.abs(s) * (1 + o), r = a - 2 * s * s + n * n, h = -2 * a + 1 + 2 * s * s + o * o, p = s * s / h + (2 * r * r * r / h / h / h - 9 * a * r / h / h) / 27, l = (a - r * r / 3 / h) / h, u = 2 * Math.sqrt(-l / 3), c = 3 * p / l / u, Math.abs(c) > 1 && (c = c >= 0 ? 1 : -1), d = Math.acos(c) / 3, e = t.y >= 0 ? (-u * Math.cos(d + Math.PI / 3) - r / 3 / h) * Math.PI : -(-u * Math.cos(d + Math.PI / 3) - r / 3 / h) * Math.PI, i = Math.abs(n) < rt ? this.long0 : St(this.long0 + Math.PI * (o - 1 + Math.sqrt(1 + 2 * (n * n - s * s) + o * o)) / 2 / n), t.x = i, t.y = e, t
                    }, names: ["Van_der_Grinten_I", "VanDerGrinten", "vandg"]
                }, ne = {
                    init: function () {
                        this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0)
                    }, forward: function (t) {
                        var i, e, n, s, o, a, r, h, l, u, c, d, p, m, _, f, g, v, y, M, b, x, w, T = t.x, L = t.y,
                            P = Math.sin(t.y), E = Math.cos(t.y), C = St(T - this.long0);
                        return this.sphere ? Math.abs(this.sin_p12 - 1) <= rt ? (t.x = this.x0 + this.a * (nt - L) * Math.sin(C), t.y = this.y0 - this.a * (nt - L) * Math.cos(C), t) : Math.abs(this.sin_p12 + 1) <= rt ? (t.x = this.x0 + this.a * (nt + L) * Math.sin(C), t.y = this.y0 + this.a * (nt + L) * Math.cos(C), t) : (v = this.sin_p12 * P + this.cos_p12 * E * Math.cos(C), f = Math.acos(v), g = f / Math.sin(f), t.x = this.x0 + this.a * g * E * Math.sin(C), t.y = this.y0 + this.a * g * (this.cos_p12 * P - this.sin_p12 * E * Math.cos(C)), t) : (i = Pi(this.es), e = Ei(this.es), n = Ci(this.es), s = Si(this.es), Math.abs(this.sin_p12 - 1) <= rt ? (o = this.a * Li(i, e, n, s, nt), a = this.a * Li(i, e, n, s, L), t.x = this.x0 + (o - a) * Math.sin(C), t.y = this.y0 - (o - a) * Math.cos(C), t) : Math.abs(this.sin_p12 + 1) <= rt ? (o = this.a * Li(i, e, n, s, nt), a = this.a * Li(i, e, n, s, L), t.x = this.x0 + (o + a) * Math.sin(C), t.y = this.y0 + (o + a) * Math.cos(C), t) : (r = P / E, h = ki(this.a, this.e, this.sin_p12), l = ki(this.a, this.e, P), u = Math.atan((1 - this.es) * r + this.es * h * this.sin_p12 / (l * E)), c = Math.atan2(Math.sin(C), this.cos_p12 * Math.tan(u) - this.sin_p12 * Math.cos(C)), y = 0 === c ? Math.asin(this.cos_p12 * Math.sin(u) - this.sin_p12 * Math.cos(u)) : Math.abs(Math.abs(c) - Math.PI) <= rt ? -Math.asin(this.cos_p12 * Math.sin(u) - this.sin_p12 * Math.cos(u)) : Math.asin(Math.sin(C) * Math.cos(u) / Math.sin(c)), d = this.e * this.sin_p12 / Math.sqrt(1 - this.es), p = this.e * this.cos_p12 * Math.cos(c) / Math.sqrt(1 - this.es), m = d * p, _ = p * p, M = y * y, b = M * y, x = b * y, w = x * y, f = h * y * (1 - M * _ * (1 - _) / 6 + b / 8 * m * (1 - 2 * _) + x / 120 * (_ * (4 - 7 * _) - 3 * d * d * (1 - 7 * _)) - w / 48 * m), t.x = this.x0 + f * Math.sin(c), t.y = this.y0 + f * Math.cos(c), t))
                    }, inverse: function (t) {
                        t.x -= this.x0, t.y -= this.y0;
                        var i, e, n, s, o, a, r, h, l, u, c, d, p, m, _, f, g, v, y, M, b, x, w;
                        if (this.sphere) {
                            if ((i = Math.sqrt(t.x * t.x + t.y * t.y)) > 2 * nt * this.a) return;
                            return e = i / this.a, n = Math.sin(e), s = Math.cos(e), o = this.long0, Math.abs(i) <= rt ? a = this.lat0 : (a = qi(s * this.sin_p12 + t.y * n * this.cos_p12 / i), r = Math.abs(this.lat0) - nt, o = St(Math.abs(r) <= rt ? this.lat0 >= 0 ? this.long0 + Math.atan2(t.x, -t.y) : this.long0 - Math.atan2(-t.x, t.y) : this.long0 + Math.atan2(t.x * n, i * this.cos_p12 * s - t.y * this.sin_p12 * n))), t.x = o, t.y = a, t
                        }
                        return h = Pi(this.es), l = Ei(this.es), u = Ci(this.es), c = Si(this.es), Math.abs(this.sin_p12 - 1) <= rt ? (d = this.a * Li(h, l, u, c, nt), i = Math.sqrt(t.x * t.x + t.y * t.y), p = d - i, a = zi(p / this.a, h, l, u, c), o = St(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = o, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= rt ? (d = this.a * Li(h, l, u, c, nt), i = Math.sqrt(t.x * t.x + t.y * t.y), p = i - d, a = zi(p / this.a, h, l, u, c), o = St(this.long0 + Math.atan2(t.x, t.y)), t.x = o, t.y = a, t) : (i = Math.sqrt(t.x * t.x + t.y * t.y), f = Math.atan2(t.x, t.y), m = ki(this.a, this.e, this.sin_p12), g = Math.cos(f), v = this.e * this.cos_p12 * g, y = -v * v / (1 - this.es), M = 3 * this.es * (1 - y) * this.sin_p12 * this.cos_p12 * g / (1 - this.es), b = i / m, x = b - y * (1 + y) * Math.pow(b, 3) / 6 - M * (1 + 3 * y) * Math.pow(b, 4) / 24, w = 1 - y * x * x / 2 - b * x * x * x / 6, _ = Math.asin(this.sin_p12 * Math.cos(x) + this.cos_p12 * Math.sin(x) * g), o = St(this.long0 + Math.asin(Math.sin(f) * Math.sin(x) / Math.cos(_))), a = Math.atan((1 - this.es * w * this.sin_p12 / Math.sin(_)) * Math.tan(_) / (1 - this.es)), t.x = o, t.y = a, t)
                    }, names: ["Azimuthal_Equidistant", "aeqd"]
                }, se = {
                    init: function () {
                        this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0)
                    }, forward: function (t) {
                        var i, e, n, s, o, a, r, h = t.x, l = t.y;
                        return n = St(h - this.long0), i = Math.sin(l), e = Math.cos(l), s = Math.cos(n), ((o = this.sin_p14 * i + this.cos_p14 * e * s) > 0 || Math.abs(o) <= rt) && (a = 1 * this.a * e * Math.sin(n), r = this.y0 + 1 * this.a * (this.cos_p14 * i - this.sin_p14 * e * s)), t.x = a, t.y = r, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a, r;
                        return t.x -= this.x0, t.y -= this.y0, i = Math.sqrt(t.x * t.x + t.y * t.y), e = qi(i / this.a), n = Math.sin(e), s = Math.cos(e), a = this.long0, Math.abs(i) <= rt ? (r = this.lat0, t.x = a, t.y = r, t) : (r = qi(s * this.sin_p14 + t.y * n * this.cos_p14 / i), o = Math.abs(this.lat0) - nt, Math.abs(o) <= rt ? (a = St(this.lat0 >= 0 ? this.long0 + Math.atan2(t.x, -t.y) : this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = r, t) : (a = St(this.long0 + Math.atan2(t.x * n, i * this.cos_p14 * s - t.y * this.sin_p14 * n)), t.x = a, t.y = r, t))
                    }, names: ["ortho"]
                }, oe = {FRONT: 1, RIGHT: 2, BACK: 3, LEFT: 4, TOP: 5, BOTTOM: 6},
                ae = {AREA_0: 1, AREA_1: 2, AREA_2: 3, AREA_3: 4}, re = {
                    init: function () {
                        this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= nt - ut / 2 ? this.face = oe.TOP : this.lat0 <= -(nt - ut / 2) ? this.face = oe.BOTTOM : Math.abs(this.long0) <= ut ? this.face = oe.FRONT : Math.abs(this.long0) <= nt + ut ? this.face = this.long0 > 0 ? oe.RIGHT : oe.LEFT : this.face = oe.BACK, 0 !== this.es && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f)
                    }, forward: function (t) {
                        var i, e, n, s, o, a, r = {x: 0, y: 0}, h = {value: 0};
                        if (t.x -= this.long0, i = 0 !== this.es ? Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : t.y, e = t.x, this.face === oe.TOP) s = nt - i, e >= ut && nt + ut >= e ? (h.value = ae.AREA_0, n = e - nt) : e > nt + ut || -(nt + ut) >= e ? (h.value = ae.AREA_1, n = e > 0 ? e - dt : e + dt) : e > -(nt + ut) && -ut >= e ? (h.value = ae.AREA_2, n = e + nt) : (h.value = ae.AREA_3, n = e); else if (this.face === oe.BOTTOM) s = nt + i, e >= ut && nt + ut >= e ? (h.value = ae.AREA_0, n = -e + nt) : ut > e && e >= -ut ? (h.value = ae.AREA_1, n = -e) : -ut > e && e >= -(nt + ut) ? (h.value = ae.AREA_2, n = -e - nt) : (h.value = ae.AREA_3, n = e > 0 ? -e + dt : -e - dt); else {
                            var l, u, c, d, p, m;
                            this.face === oe.RIGHT ? e = X(e, +nt) : this.face === oe.BACK ? e = X(e, +dt) : this.face === oe.LEFT && (e = X(e, -nt)), d = Math.sin(i), p = Math.cos(i), m = Math.sin(e), l = p * Math.cos(e), u = p * m, c = d, this.face === oe.FRONT ? (s = Math.acos(l), n = J(s, c, u, h)) : this.face === oe.RIGHT ? (s = Math.acos(u), n = J(s, c, -l, h)) : this.face === oe.BACK ? (s = Math.acos(-l), n = J(s, c, -u, h)) : this.face === oe.LEFT ? (s = Math.acos(-u), n = J(s, c, l, h)) : (s = n = 0, h.value = ae.AREA_0)
                        }
                        return a = Math.atan(12 / dt * (n + Math.acos(Math.sin(n) * Math.cos(ut)) - nt)), o = Math.sqrt((1 - Math.cos(s)) / (Math.cos(a) * Math.cos(a)) / (1 - Math.cos(Math.atan(1 / Math.cos(n))))), h.value === ae.AREA_1 ? a += nt : h.value === ae.AREA_2 ? a += dt : h.value === ae.AREA_3 && (a += 1.5 * dt), r.x = o * Math.cos(a), r.y = o * Math.sin(a), r.x = r.x * this.a + this.x0, r.y = r.y * this.a + this.y0, t.x = r.x, t.y = r.y, t
                    }, inverse: function (t) {
                        var i, e, n, s, o, a, r, h, l, u = {lam: 0, phi: 0}, c = {value: 0};
                        if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, e = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), i = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = ae.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = ae.AREA_1, i -= nt) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = ae.AREA_2, i = 0 > i ? i + dt : i - dt) : (c.value = ae.AREA_3, i += nt), l = dt / 12 * Math.tan(i), o = Math.sin(l) / (Math.cos(l) - 1 / Math.sqrt(2)), a = Math.atan(o), n = Math.cos(i), s = Math.tan(e), -1 > (r = 1 - n * n * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(a))))) ? r = -1 : r > 1 && (r = 1), this.face === oe.TOP) h = Math.acos(r), u.phi = nt - h, c.value === ae.AREA_0 ? u.lam = a + nt : c.value === ae.AREA_1 ? u.lam = 0 > a ? a + dt : a - dt : c.value === ae.AREA_2 ? u.lam = a - nt : u.lam = a; else if (this.face === oe.BOTTOM) h = Math.acos(r), u.phi = h - nt, c.value === ae.AREA_0 ? u.lam = -a + nt : c.value === ae.AREA_1 ? u.lam = -a : c.value === ae.AREA_2 ? u.lam = -a - nt : u.lam = 0 > a ? -a - dt : -a + dt; else {
                            var d, p, m;
                            l = (d = r) * d, p = (l += (m = l >= 1 ? 0 : Math.sqrt(1 - l) * Math.sin(a)) * m) >= 1 ? 0 : Math.sqrt(1 - l), c.value === ae.AREA_1 ? (l = p, p = -m, m = l) : c.value === ae.AREA_2 ? (p = -p, m = -m) : c.value === ae.AREA_3 && (l = p, p = m, m = -l), this.face === oe.RIGHT ? (l = d, d = -p, p = l) : this.face === oe.BACK ? (d = -d, p = -p) : this.face === oe.LEFT && (l = d, d = p, p = -l), u.phi = Math.acos(-m) - nt, u.lam = Math.atan2(p, d), this.face === oe.RIGHT ? u.lam = X(u.lam, -nt) : this.face === oe.BACK ? u.lam = X(u.lam, -dt) : this.face === oe.LEFT && (u.lam = X(u.lam, +nt))
                        }
                        if (0 !== this.es) {
                            var _, f, g;
                            _ = u.phi < 0 ? 1 : 0, f = Math.tan(u.phi), g = this.b / Math.sqrt(f * f + this.one_minus_f_squared), u.phi = Math.atan(Math.sqrt(this.a * this.a - g * g) / (this.one_minus_f * g)), _ && (u.phi = -u.phi)
                        }
                        return u.lam += this.long0, t.x = u.lam, t.y = u.phi, t
                    }, names: ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"]
                };
            return A.defaultDatum = "WGS84", A.Proj = y, A.WGS84 = new A.Proj("WGS84"), A.Point = V, A.toPoint = Ht, A.defs = h, A.transform = C, A.mgrs = Yt, A.version = "2.4.4", function (t) {
                t.Proj.projections.add(si), t.Proj.projections.add(pi), t.Proj.projections.add(_i), t.Proj.projections.add(yi), t.Proj.projections.add(Mi), t.Proj.projections.add(bi), t.Proj.projections.add(xi), t.Proj.projections.add(wi), t.Proj.projections.add(Ti), t.Proj.projections.add(Ii), t.Proj.projections.add(Hi), t.Proj.projections.add(Gi), t.Proj.projections.add(Fi), t.Proj.projections.add(Wi), t.Proj.projections.add(Vi), t.Proj.projections.add(Qi), t.Proj.projections.add(Ji), t.Proj.projections.add(Xi), t.Proj.projections.add($i), t.Proj.projections.add(te), t.Proj.projections.add(ie), t.Proj.projections.add(ee), t.Proj.projections.add(ne), t.Proj.projections.add(se), t.Proj.projections.add(re)
            }(A), A
        })
    }), Pn = {};
    Pn._isProj4Obj = function (t) {
        return void 0 !== t.inverse && void 0 !== t.forward
    }, Pn.Projection = L.extend({
        initialize: function (t, i, e) {
            var n = Pn._isProj4Obj(t);
            this._proj = n ? t : this._projFromCodeDef(t, i), this.bounds = n ? i : e
        }, project: function (t) {
            var i = this._proj.forward([t.lng, t.lat]);
            return new E(i[0], i[1])
        }, unproject: function (t, i) {
            var e = this._proj.inverse([t.x, t.y]);
            return new O(e[1], e[0], i)
        }, _projFromCodeDef: function (t, i) {
            if (i) Ln.defs(t, i); else if (void 0 === Ln.defs[t]) {
                var e = t.split(":");
                if (e.length > 3 && (t = e[e.length - 3] + ":" + e[e.length - 1]), void 0 === Ln.defs[t]) throw"No projection definition for code " + t
            }
            return Ln(t)
        }
    }), Pn.CRS = L.extend({
        includes: Ci,
        distance: Si.distance,
        R: Si.R,
        options: {transformation: B(1, 0, -1, 0)},
        initialize: function (t, i, e) {
            var n, s, o, a;
            if (Pn._isProj4Obj(t) ? (n = (s = t).srsCode, a = i || {}, this.projection = new Pn.Projection(s, a.bounds)) : (n = t, o = i, a = e || {}, this.projection = new Pn.Projection(n, o, a.bounds)), u(this, a), this.code = n, this.transformation = this.options.transformation, this.options.origin && (this.transformation = B(1, -this.options.origin[0], -1, this.options.origin[1])), this.options.scales) this._scales = this.options.scales; else if (this.options.resolutions) {
                this._scales = [];
                for (var r = this.options.resolutions.length - 1; r >= 0; r--) this.options.resolutions[r] && (this._scales[r] = 1 / this.options.resolutions[r])
            }
            this.infinite = !this.options.bounds
        },
        scale: function (t) {
            var i, e, n, s, o = Math.floor(t);
            return t === o ? this._scales[t] : (i = this._scales[o], e = this._scales[o + 1], n = e - i, s = t - o, i + n * s)
        },
        zoom: function (t) {
            var i, e, n, s = this._closestElement(this._scales, t), o = this._scales.indexOf(s);
            return t === s ? o : void 0 === s ? -1 / 0 : (e = o + 1, void 0 === (i = this._scales[e]) ? 1 / 0 : (n = i - s, (t - s) / n + o))
        },
        _closestElement: function (t, i) {
            for (var e, n = t.length; n--;) t[n] <= i && (void 0 === e || e < t[n]) && (e = t[n]);
            return e
        }
    }), Pn.GeoJSON = i({}, bn, {
        initialize: function (t, i) {
            this._callLevel = 0, bn.prototype.initialize.call(this, t, i)
        }, addData: function (t) {
            var i;
            t && (t.crs && "name" === t.crs.type ? i = new Pn.CRS(t.crs.properties.name) : t.crs && t.crs.type && (i = new Pn.CRS(t.crs.type + ":" + t.crs.properties.code)), void 0 !== i && (this.options.coordsToLatLng = function (t) {
                var e = C(t[0], t[1]);
                return i.projection.unproject(e)
            })), this._callLevel++;
            try {
                bn.prototype.addData.call(this, t)
            } finally {
                0 === --this._callLevel && delete this.options.coordsToLatLng
            }
        }
    }), Pn.geoJson = function (t, i) {
        return new Pn.GeoJSON(t, i)
    }, Pn.ImageOverlay = i({}, Tn, {
        initialize: function (t, i, e) {
            Tn.prototype.initialize.call(this, t, null, e), this._projectedBounds = i
        }, _animateZoom: function (t) {
            var i = this._map.getZoomScale(t.zoom), e = C(this._projectedBounds.min.x, this._projectedBounds.max.y),
                n = this._projectedToNewLayerPoint(e, t.zoom, t.center);
            Ct(this._image, n, i)
        }, _reset: function () {
            var t = this._map.getZoom(), i = this._map.getPixelOrigin(),
                e = new S(this._transform(this._projectedBounds.min, t)._subtract(i), this._transform(this._projectedBounds.max, t)._subtract(i)),
                n = e.getSize();
            St(this._image, e.min), this._image.style.width = n.x + "px", this._image.style.height = n.y + "px"
        }, _projectedToNewLayerPoint: function (t, i, e) {
            var n = this._map.getSize()._divideBy(2),
                s = this._map.project(e, i)._subtract(n)._round().add(this._map._getMapPanePos());
            return this._transform(t, i)._subtract(s)
        }, _transform: function (t, i) {
            var e = this._map.options.crs, n = e.transformation, s = e.scale(i);
            return n.transform(t, s)
        }
    }), Pn.imageOverlay = function (t, i, e) {
        return new Pn.ImageOverlay(t, i, e)
    };
    var En = {
            project: function (t) {
                return new E(t.lng, t.lat)
            }, unproject: function (t) {
                return new O(t.y, t.x)
            }, bounds: new S([-180, -90], [180, 90])
        }, Cn = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new S([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function (t) {
                var i = Math.PI / 180, e = this.R, n = t.lat * i, s = this.R_MINOR / e, o = Math.sqrt(1 - s * s),
                    a = o * Math.sin(n), r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), o / 2);
                return n = -e * Math.log(Math.max(r, 1e-10)), new E(t.lng * i * e, n)
            },
            unproject: function (t) {
                for (var i, e = 180 / Math.PI, n = this.R, s = this.R_MINOR / n, o = Math.sqrt(1 - s * s), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++) i = o * Math.sin(r), i = Math.pow((1 - i) / (1 + i), o / 2), r += l = Math.PI / 2 - 2 * Math.atan(a * i) - r;
                return new O(r * e, t.x * e / n)
            }
        }, Sn = Object.freeze({LonLat: En, Mercator: Cn, SphericalMercator: ki}), kn = i({}, Si, {
            code: "EPSG:3395", projection: Cn, transformation: function () {
                var t = .5 / (Math.PI * Cn.R);
                return B(t, .5, -t, .5)
            }()
        }), An = i({}, Si, {code: "EPSG:4326", projection: En, transformation: B(1 / 180, 1, -1 / 180, .5)}),
        zn = i({}, Ci, {
            projection: En, transformation: B(1, 0, -1, 0), scale: function (t) {
                return Math.pow(2, t)
            }, zoom: function (t) {
                return Math.log(t) / Math.LN2
            }, distance: function (t, i) {
                var e = i.lng - t.lng, n = i.lat - t.lat;
                return Math.sqrt(e * e + n * n)
            }, infinite: !0
        }),
        In = new Pn.CRS("Baidu", "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs", {
            resolutions: function () {
                for (var t = [], i = 0; i < 24; i++) t[i] = Math.pow(2, 18 - i);
                return t
            }(),
            origin: [0, 0],
            bounds: new S([20037508.342789244, -20037508.342789244], [-20037508.342789244, 20037508.342789244])
        });
    Ci.Earth = Si, Ci.EPSG3395 = kn, Ci.EPSG3857 = Ri, Ci.EPSG900913 = Ni, Ci.EPSG4326 = An, Ci.Simple = zn, Ci.Baidu = In;
    var On = {
            icon: function (t, i) {
                var e = {small: [20, 50], medium: [30, 70], large: [35, 90]}, n = (t = t || {})["marker-size"] || "medium",
                    s = "marker-symbol" in t && "" !== t["marker-symbol"] ? "-" + t["marker-symbol"] : "-circle",
                    o = (t["marker-color"] || "52a1d8").replace("#", ""), a = !1 === t.visibled ? "bigemap-hidden" : "";
                return ei({
                    iconUrl: Rt("/v2/marker/pin-" + n.charAt(0) + s + "+" + o + (ce ? "@2x" : "") + ".png", i && i.accessToken),
                    iconSize: e[n],
                    iconAnchor: [e[n][0] / 2, e[n][1] / 2],
                    popupAnchor: [0, -e[n][1] / 2],
                    className: a
                })
            }, style: function (t, i, e) {
                return ni(i, {icon: this.icon(t.properties, e), title: x(Fe(t.properties && t.properties.title || ""))})
            }, createPopup: function (t, i) {
                if (!t || !t.properties) return "";
                var e = "";
                return t.properties.title && (e += '<div class="marker-title">' + t.properties.title + "</div>"), t.properties.description && (e += '<div class="marker-description">' + t.properties.description + "</div>"), (i || Fe)(e)
            }
        }, Rn = {
            stroke: "#3bb2d0",
            "stroke-width": 2,
            "stroke-opacity": 1,
            fill: "#3bb2d0",
            "fill-opacity": .2,
            visibled: !0
        },
        Nn = [["stroke", "color"], ["stroke-width", "weight"], ["stroke-opacity", "opacity"], ["fill", "fillColor"], ["fill-opacity", "fillOpacity"]],
        Bn = {
            defaults: Rn, fallback: function (t, i) {
                var e = {};
                for (var n in i) void 0 === t[n] ? e[n] = i[n] : e[n] = t[n];
                return e
            }, remap: function (t) {
                for (var i = {}, e = 0; e < Nn.length; e++) i[Nn[e][1]] = t[Nn[e][0]];
                return i.className = !1 === t.visibled ? "bigemap-hidden" : "", i
            }, style: function (t) {
                return this.remap(this.fallback(t.properties || {}, Rn))
            }
        }, Zn = cn.extend({
            options: {
                filter: function () {
                    return !0
                }, sanitizer: Fe, style: Bn, popupOptions: {closeButton: !1}
            }, initialize: function (t, i) {
                u(this, i), this._layers = {}, "string" == typeof t ? v(t, this) : t && "object" == typeof t && this.setGeoJSON(t)
            }, setGeoJSON: function (t) {
                return this._geojson = t, this.clearLayers(), this._initialize(t), this
            }, getGeoJSON: function () {
                return this._geojson
            }, loadURL: function (t) {
                this._request && "abort" in this._request && this._request.abort();
                var i = Bt();
                return this._request = Dt(i, e(function (n, s) {
                    if (n && "abort" !== n.type) y("could not load Token at " + i), this.fire("error", {error: n}); else if (s) {
                        BM.accessToken = s.token;
                        var o = Rt("/v2/" + t + "/features", this.options.accessToken);
                        Dt(o, e(function (t, i) {
                            this._request = null, t && "abort" !== t.type ? (y("could not load features at " + o), this.fire("error", {error: t})) : i && (this.setGeoJSON(i), this.fire("ready"))
                        }, this))
                    }
                }, this)), this
            }, loadID: function (t) {
                return this.loadURL(t)
            }, setFilter: function (t) {
                return this.options.filter = t, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
            }, getFilter: function () {
                return this.options.filter
            }, _initialize: function (t) {
                var i, e, n = Mi(t) ? t : t.features;
                if (n) for (i = 0, e = n.length; i < e; i++) (n[i].geometries || n[i].geometry || n[i].features) && this._initialize(n[i]); else if (this.options.filter(t)) {
                    var s = {accessToken: this.options.accessToken}, o = this.options.pointToLayer || function (t, i) {
                            return On.style(t, i, s)
                        }, a = bn.geometryToLayer(t, {pointToLayer: o}), r = On.createPopup(t, this.options.sanitizer),
                        h = this.options.style, l = h === Bn;
                    !(h && "setStyle" in a) || l && (a instanceof vn || a instanceof gn) || ("function" == typeof h.style && (h = h.style(t)), a.setStyle(h)), a.feature = t, r && a.bindPopup(r, this.options.popupOptions), this.addLayer(a)
                }
            }
        });
    Ue.addInitHook(function () {
        this.options.featureLayer && (this.featureLayer = di(void 0, w(this.options.featureLayer, this.options.accessToken)), this.addLayer(this.featureLayer))
    });
    var Dn = Tn.extend({
        options: {autoplay: !0, loop: !0}, _initImage: function () {
            var t = "VIDEO" === this._url.tagName, i = this._image = t ? this._url : _t("video");
            if (bt(i, "bigemap-image-layer"), this._zoomAnimated && bt(i, "bigemap-zoom-animated"), i.onselectstart = a, i.onmousemove = a, i.onloadeddata = e(this.fire, this, "load"), !t) {
                Mi(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                for (var n = 0; n < this._url.length; n++) {
                    var s = _t("source");
                    s.src = this._url[n], i.appendChild(s)
                }
            }
        }
    }), jn = ln.extend({
        options: {offset: [0, 7], className: "", pane: "popupPane"}, initialize: function (t, i) {
            u(this, t), this._source = i
        }, onAdd: function (t) {
            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Lt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Lt(this._container, 1), this.bringToFront()
        }, onRemove: function (t) {
            t._fadeAnimated ? (Lt(this._container, 0), this._removeTimeout = setTimeout(e(ft, void 0, this._container), 200)) : ft(this._container)
        }, getLatLng: function () {
            return this._latlng
        }, setLatLng: function (t) {
            return this._latlng = R(t), this._map && (this._updatePosition(), this._adjustPan()), this
        }, getContent: function () {
            return this._content
        }, setContent: function (t) {
            return this._content = t, this.update(), this
        }, getElement: function () {
            return this._container
        }, update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        }, getEvents: function () {
            var t = {zoom: this._updatePosition, viewreset: this._updatePosition};
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        }, isOpen: function () {
            return !!this._map && this._map.hasLayer(this)
        }, bringToFront: function () {
            return this._map && vt(this._container), this
        }, bringToBack: function () {
            return this._map && yt(this._container), this
        }, _updateContent: function () {
            if (this._content) {
                var t = this._contentNode,
                    i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof i) t.innerHTML = i; else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(i)
                }
                this.fire("contentupdate")
            }
        }, _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng), i = C(this.options.offset), e = this._getAnchor();
                this._zoomAnimated ? St(this._container, t.add(e)) : i = i.add(t).add(e);
                var n = this._containerBottom = -i.y,
                    s = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                this._container.style.bottom = n + "px", this._container.style.left = s + "px"
            }
        }, _getAnchor: function () {
            return [0, 0]
        }
    }), Hn = jn.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
        }, openOn: function (t) {
            return t.openPopup(this), this
        }, onAdd: function (t) {
            jn.prototype.onAdd.call(this, t), t.fire("popupopen", {popup: this}), this._source && (this._source.fire("popupopen", {popup: this}, !0), this._source instanceof fn || this._source.on("preclick", et))
        }, onRemove: function (t) {
            jn.prototype.onRemove.call(this, t), t.fire("popupclose", {popup: this}), this._source && (this._source.fire("popupclose", {popup: this}, !0), this._source instanceof fn || this._source.off("preclick", et))
        }, getEvents: function () {
            var t = jn.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        }, _close: function () {
            this._map && this._map.closePopup(this)
        }, _initLayout: function () {
            var t = "bigemap-popup",
                i = this._container = _t("div", t + " " + (this.options.className || "") + " bigemap-zoom-animated"),
                e = this._wrapper = _t("div", t + "-content-wrapper", i);
            if (this._contentNode = _t("div", t + "-content", e), st(e), nt(this._contentNode), Y(e, "contextmenu", et), this._tipContainer = _t("div", t + "-tip-container", i), this._tip = _t("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                var n = this._closeButton = _t("a", t + "-close-button", i);
                n.href = "#close", n.innerHTML = "&#215;", Y(n, "click", this._onCloseButtonClick, this)
            }
        }, _updateLayout: function () {
            var t = this._contentNode, i = t.style;
            i.width = "", i.whiteSpace = "nowrap";
            var e = t.offsetWidth;
            e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
            var n = t.offsetHeight, s = this.options.maxHeight;
            s && n > s ? (i.height = s + "px", bt(t, "bigemap-popup-scrolled")) : xt(t, "bigemap-popup-scrolled"), this._containerWidth = this._container.offsetWidth
        }, _animateZoom: function (t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), e = this._getAnchor();
            St(this._container, i.add(e))
        }, _adjustPan: function () {
            if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map, i = parseInt(mt(this._container, "marginBottom"), 10) || 0,
                    e = this._container.offsetHeight + i, n = this._containerWidth,
                    s = new E(this._containerLeft, -e - this._containerBottom);
                s._add(kt(this._container));
                var o = t.layerPointToContainerPoint(s), a = C(this.options.autoPanPadding),
                    r = C(this.options.autoPanPaddingTopLeft || a), h = C(this.options.autoPanPaddingBottomRight || a),
                    l = t.getSize(), u = 0, c = 0;
                o.x + n + h.x > l.x && (u = o.x + n - l.x + h.x), o.x - u - r.x < 0 && (u = o.x - r.x), o.y + e + h.y > l.y && (c = o.y + e - l.y + h.y), o.y - c - r.y < 0 && (c = o.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
            }
        }, _onCloseButtonClick: function (t) {
            this._close(), at(t)
        }, _getAnchor: function () {
            return C(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    });
    Ue.mergeOptions({closePopupOnClick: !0}), Ue.include({
        openPopup: function (t, i, e) {
            return t instanceof Hn || (t = new Hn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        }, closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), ln.include({
        bindPopup: function (t, i) {
            return t instanceof Hn ? (u(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new Hn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        }, unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        }, openPopup: function (t, i) {
            if (t instanceof ln || (i = t, t = this), t instanceof cn) for (var e in this._layers) {
                t = this._layers[e];
                break
            }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        }, isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
        }, setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        }, getPopup: function () {
            return this._popup
        }, _openPopup: function (t) {
            var i = t.layer || t.target;
            this._popup && this._map && (at(t), i instanceof fn ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
        }, _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }, _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var qn = jn.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        }, onAdd: function (t) {
            jn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {tooltip: this}), this._source && this._source.fire("tooltipopen", {tooltip: this}, !0)
        }, onRemove: function (t) {
            jn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {tooltip: this}), this._source && this._source.fire("tooltipclose", {tooltip: this}, !0)
        }, getEvents: function () {
            var t = jn.prototype.getEvents.call(this);
            return he && !this.options.permanent && (t.preclick = this._close), t
        }, _close: function () {
            this._map && this._map.closeTooltip(this)
        }, _initLayout: function () {
            var t = "bigemap-tooltip " + (this.options.className || "") + " bigemap-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = _t("div", t)
        }, _updateLayout: function () {
        }, _adjustPan: function () {
        }, _setPosition: function (t) {
            var i = this._map, e = this._container, n = i.latLngToContainerPoint(i.getCenter()),
                s = i.layerPointToContainerPoint(t), o = this.options.direction, a = e.offsetWidth, r = e.offsetHeight,
                h = C(this.options.offset), l = this._getAnchor();
            "top" === o ? t = t.add(C(-a / 2 + h.x, -r + h.y + l.y, !0)) : "bottom" === o ? t = t.subtract(C(a / 2 - h.x, -h.y, !0)) : "center" === o ? t = t.subtract(C(a / 2 + h.x, r / 2 - l.y + h.y, !0)) : "right" === o || "auto" === o && s.x < n.x ? (o = "right", t = t.add(C(h.x + l.x, l.y - r / 2 + h.y, !0))) : (o = "left", t = t.subtract(C(a + l.x - h.x, r / 2 - l.y - h.y, !0))), xt(e, "bigemap-tooltip-right"), xt(e, "bigemap-tooltip-left"), xt(e, "bigemap-tooltip-top"), xt(e, "bigemap-tooltip-bottom"), bt(e, "bigemap-tooltip-" + o), St(e, t)
        }, _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        }, setOpacity: function (t) {
            this.options.opacity = t, this._container && Lt(this._container, t)
        }, _animateZoom: function (t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i)
        }, _getAnchor: function () {
            return C(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    Ue.include({
        openTooltip: function (t, i, e) {
            return t instanceof qn || (t = new qn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
        }, closeTooltip: function (t) {
            return t && this.removeLayer(t), this
        }
    }), ln.include({
        bindTooltip: function (t, i) {
            return t instanceof qn ? (u(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new qn(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        }, unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        }, _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
                var i = t ? "off" : "on", e = {remove: this.closeTooltip, move: this._moveTooltip};
                this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), he && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
            }
        }, openTooltip: function (t, i) {
            if (t instanceof ln || (i = t, t = this), t instanceof cn) for (var e in this._layers) {
                t = this._layers[e];
                break
            }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (bt(this._tooltip._container, "bigemap-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        }, closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (xt(this._tooltip._container, "bigemap-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        }, toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        }, isTooltipOpen: function () {
            return this._tooltip.isOpen()
        }, setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t), this
        }, getTooltip: function () {
            return this._tooltip
        }, _openTooltip: function (t) {
            var i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
        }, _moveTooltip: function (t) {
            var i, e, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
        }
    });
    var Gn = dn.extend({
        options: {iconSize: [12, 12], html: !1, bgPos: null, className: "bigemap-div-icon"},
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"), e = this.options;
            if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                var n = C(e.bgPos);
                i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    });
    dn.Default = pn;
    var Fn = ln.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: ne,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        }, initialize: function (t) {
            u(this, t)
        }, onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
        }, beforeAdd: function (t) {
            t._addZoomLimit(this)
        }, onRemove: function (t) {
            this._removeAllTiles(), ft(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
        }, bringToFront: function () {
            return this._map && (vt(this._container), this._setAutoZIndex(Math.max)), this
        }, bringToBack: function () {
            return this._map && (yt(this._container), this._setAutoZIndex(Math.min)), this
        }, getContainer: function () {
            return this._container
        }, setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        }, setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        }, isLoading: function () {
            return this._loading
        }, redraw: function () {
            return this._map && (this._removeAllTiles(), this._update()), this
        }, getEvents: function () {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = s(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        }, createTile: function () {
            return document.createElement("div")
        }, getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof E ? t : new E(t, t)
        }, _updateZIndex: function () {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        }, _setAutoZIndex: function (t) {
            for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), s = 0, o = e.length; s < o; s++) i = e[s].style.zIndex, e[s] !== this._container && i && (n = t(n, +i));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
        }, _updateOpacity: function () {
            if (this._map && !Di) {
                Lt(this._container, this.options.opacity);
                var t = +new Date, i = !1, e = !1;
                for (var n in this._tiles) {
                    var s = this._tiles[n];
                    if (s.current && s.loaded) {
                        var o = Math.min(1, (t - s.loaded) / 200);
                        Lt(s.el, o), o < 1 ? i = !0 : (s.active ? e = !0 : this._onOpaqueTile(s), s.active = !0)
                    }
                }
                e && !this._noPrune && this._pruneTiles(), i && (f(this._fadeFrame), this._fadeFrame = _(this._updateOpacity, this))
            }
        }, _onOpaqueTile: a, _initContainer: function () {
            this._container || (this._container = _t("div", "bigemap-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
        }, _updateLevels: function () {
            var t = this._tileZoom, i = this.options.maxZoom;
            if (void 0 !== t) {
                for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ft(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                var n = this._levels[t], s = this._map;
                return n || ((n = this._levels[t] = {}).el = _t("div", "bigemap-tile-container bigemap-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
            }
        }, _onUpdateLevel: a, _onRemoveLevel: a, _onCreateLevel: a, _pruneTiles: function () {
            if (this._map) {
                var t, i, e = this._map.getZoom();
                if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles(); else {
                    for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
                    for (t in this._tiles) if ((i = this._tiles[t]).current && !i.active) {
                        var n = i.coords;
                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                    }
                    for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            }
        }, _removeTilesAtZoom: function (t) {
            for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
        }, _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t)
        }, _invalidateAll: function () {
            for (var t in this._levels) ft(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
            this._removeAllTiles(), this._tileZoom = null
        }, _retainParent: function (t, i, e, n) {
            var s = Math.floor(t / 2), o = Math.floor(i / 2), a = e - 1, r = new E(+s, +o);
            r.z = +a;
            var h = this._tileCoordsToKey(r), l = this._tiles[h];
            return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), a > n && this._retainParent(s, o, a, n))
        }, _retainChildren: function (t, i, e, n) {
            for (var s = 2 * t; s < 2 * t + 2; s++) for (var o = 2 * i; o < 2 * i + 2; o++) {
                var a = new E(s, o);
                a.z = e + 1;
                var r = this._tileCoordsToKey(a), h = this._tiles[r];
                h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(s, o, e + 1, n))
            }
        }, _resetView: function (t) {
            var i = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
        }, _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        }, _clampZoom: function (t) {
            var i = this.options;
            return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
        }, _setView: function (t, i, e, n) {
            var s = this._clampZoom(Math.round(i));
            (void 0 !== this.options.maxZoom && s > this.options.maxZoom || void 0 !== this.options.minZoom && s < this.options.minZoom) && (s = void 0);
            var o = this.options.updateWhenZooming && s !== this._tileZoom;
            n && !o || (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== s && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
        }, _setZoomTransforms: function (t, i) {
            for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
        }, _setZoomTransform: function (t, i, e) {
            var n = this._map.getZoomScale(e, t.zoom),
                s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
            ee ? Ct(t.el, s, n) : St(t.el, s)
        }, _resetGrid: function () {
            var t = this._map, i = t.options.crs, e = this._tileSize = this.getTileSize(), n = this._tileZoom,
                s = this._map.getPixelWorldBounds(this._tileZoom);
            s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
        }, _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
        }, _getTiledPixelBounds: function (t) {
            var i = this._map, e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                n = i.getZoomScale(e, this._tileZoom), s = i.project(t, this._tileZoom).floor(),
                o = i.getSize().divideBy(2 * n);
            return new S(s.subtract(o), s.add(o))
        }, _update: function (t) {
            var i = this._map;
            if (i) {
                var e = this._clampZoom(i.getZoom());
                if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                    var n = this._getTiledPixelBounds(t), s = this._pxBoundsToTileRange(n), o = s.getCenter(), a = [],
                        r = this.options.keepBuffer,
                        h = new S(s.getBottomLeft().subtract([r, -r]), s.getTopRight().add([r, -r]));
                    if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var l in this._tiles) {
                        var u = this._tiles[l].coords;
                        u.z === this._tileZoom && h.contains(new E(u.x, u.y)) || (this._tiles[l].current = !1)
                    }
                    if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e); else {
                        for (var c = s.min.y; c <= s.max.y; c++) for (var d = s.min.x; d <= s.max.x; d++) {
                            var p = new E(d, c);
                            if (p.z = this._tileZoom, this._isValidTile(p)) {
                                var m = this._tiles[this._tileCoordsToKey(p)];
                                m ? m.current = !0 : a.push(p)
                            }
                        }
                        if (a.sort(function (t, i) {
                            return t.distanceTo(o) - i.distanceTo(o)
                        }), 0 !== a.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var _ = document.createDocumentFragment();
                            for (d = 0; d < a.length; d++) this._addTile(a[d], _);
                            this._level.el.appendChild(_)
                        }
                    }
                }
            }
        }, _isValidTile: function (t) {
            var i = this._map.options.crs;
            if (!i.infinite) {
                var e = this._globalTileRange;
                if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return z(this.options.bounds).overlaps(n)
        }, _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        }, _tileCoordsToBounds: function (t) {
            var i = this._map, e = this.getTileSize(), n = t.scaleBy(e), s = n.add(e),
                o = new A(i.unproject(n, t.z), i.unproject(s, t.z));
            return this.options.noWrap || (o = i.wrapLatLngBounds(o)), o
        }, _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        }, _keyToTileCoords: function (t) {
            var i = t.split(":"), e = new E(+i[0], +i[1]);
            return e.z = +i[2], e
        }, _removeTile: function (t) {
            var i = this._tiles[t];
            i && (Ui || i.el.setAttribute("src", bi), ft(i.el), delete this._tiles[t], this.fire("tileunload", {
                tile: i.el,
                coords: this._keyToTileCoords(t)
            }))
        }, _initTile: function (t) {
            bt(t, "bigemap-tile");
            var i = this.getTileSize();
            t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = a, t.onmousemove = a, Di && this.options.opacity < 1 && Lt(t, this.options.opacity), qi && !Gi && (t.style.WebkitBackfaceVisibility = "hidden")
        }, _addTile: function (t, i) {
            var n = this._getTilePos(t), s = this._tileCoordsToKey(t),
                o = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
            this._initTile(o), this.createTile.length < 2 && _(e(this._tileReady, this, t, null, o)), St(o, n), this._tiles[s] = {
                el: o,
                coords: t,
                current: !0
            }, i.appendChild(o), this.fire("tileloadstart", {tile: o, coords: t})
        }, _tileReady: function (t, i, n) {
            if (this._map) {
                i && this.fire("tileerror", {error: i, tile: n, coords: t});
                var s = this._tileCoordsToKey(t);
                (n = this._tiles[s]) && (n.loaded = +new Date, this._map._fadeAnimated ? (Lt(n.el, 0), f(this._fadeFrame), this._fadeFrame = _(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (bt(n.el, "bigemap-tile-loaded"), this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Di || !this._map._fadeAnimated ? _(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
            }
        }, _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        }, _wrapCoords: function (t) {
            var i = new E(this._wrapX ? o(t.x, this._wrapX) : t.x, this._wrapY ? o(t.y, this._wrapY) : t.y);
            return i.z = t.z, i
        }, _pxBoundsToTileRange: function (t) {
            var i = this.getTileSize();
            return new S(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
        }, _noTilesToLoad: function () {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
            return !0
        }
    }), Un = Fn.extend({
        includes: [He],
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        formats: ["png", "jpg", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
        scalePrefix: "@2x.",
        initialize: function (t, i) {
            (i = u(this, i)).detectRetina && ce && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), qi || this.on("tileunload", this._onTileRemove), this._tilejson = {}, i && i.format && b(i.format, this.formats), this._loadTileJSON(t)
        },
        setUrl: null,
        _setTileJSON: function (t) {
            M(t, "object"), this.options.format = t.format, t.tiles || (t.tiles = [t.tms]);
            var e = t.zoomoffset ? t.zoomoffset : 0;
            return i(this.options, {
                name: t.name,
                tiles: t.tiles,
                attribution: t.attribution,
                minZoom: t.minzoom - e,
                maxZoom: t.maxzoom - e,
                tms: "tms" === t.scheme,
                bounds: t.bounds && I(t.bounds),
                zoomOffset: e
            }), this._tilejson = t, this.redraw(), this
        },
        getTileJSON: function () {
            return this._tilejson
        },
        createTile: function (t, i) {
            var n = document.createElement("img");
            return Y(n, "load", e(this._tileOnLoad, this, i, n)), Y(n, "error", e(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
        },
        getTileUrl: function (t) {
            var e = {
                layer: this.options.name,
                r: ce ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var n = this._globalTileRange.max.y - t.y + this._globalTileRange.min.y;
                this.options.tms && (e.y = n), e["-y"] = n
            }
            var s = this.options.tiles;
            return c(s[Math.floor(Math.abs(t.x + t.y) % s.length)], i(e, this.options))
        },
        _update: function () {
            this.options.tiles && Fn.prototype._update.call(this)
        },
        _tileOnLoad: function (t, i) {
            Di ? setTimeout(e(t, this, null, i), 0) : t(null, i)
        },
        _tileOnError: function (t, i, e) {
            var n = this.options.errorTileUrl;
            n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
        },
        _onTileRemove: function (t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function () {
            var t = this._tileZoom, i = this.options.maxZoom, e = this.options.zoomReverse, n = this.options.zoomOffset;
            return e && (t = i - t), t + n
        },
        _getSubdomain: function (t) {
            var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[i]
        },
        _abortLoading: function () {
            var t, i;
            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = a, i.onerror = a, i.complete || (i.src = bi, ft(i), delete this._tiles[t]))
        }
    });
    Ue.addInitHook(function () {
        this.options.tileLayer && (this.tileLayer = pi(void 0, w(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer))
    });
    var Wn = ln.extend({
        options: {padding: .1}, initialize: function (t) {
            u(this, t), n(this), this._layers = this._layers || {}
        }, onAdd: function () {
            this._container || (this._initContainer(), this._zoomAnimated && bt(this._container, "bigemap-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
        }, onRemove: function () {
            this.off("update", this._updatePaths, this), this._destroyContainer()
        }, getEvents: function () {
            var t = {viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd};
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
        }, _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
        }, _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        }, _updateTransform: function (t, i) {
            var e = this._map.getZoomScale(i, this._zoom), n = kt(this._container),
                s = this._map.getSize().multiplyBy(.5 + this.options.padding), o = this._map.project(this._center, i),
                a = this._map.project(t, i).subtract(o), r = s.multiplyBy(-e).add(n).add(s).subtract(a);
            ee ? Ct(this._container, r, e) : St(this._container, r)
        }, _reset: function () {
            this._update(), this._updateTransform(this._center, this._zoom);
            for (var t in this._layers) this._layers[t]._reset()
        }, _onZoomEnd: function () {
            for (var t in this._layers) this._layers[t]._project()
        }, _updatePaths: function () {
            for (var t in this._layers) this._layers[t]._update()
        }, _update: function () {
            var t = this.options.padding, i = this._map.getSize(),
                e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
            this._bounds = new S(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
        }
    }), Vn = Wn.extend({
        getEvents: function () {
            var t = Wn.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset, t
        }, _onViewPreReset: function () {
            this._postponeUpdatePaths = !0
        }, onAdd: function () {
            Wn.prototype.onAdd.call(this), this._draw()
        }, _initContainer: function () {
            var t = this._container = document.createElement("canvas");
            Y(t, "mousemove", s(this._onMouseMove, 32, this), this), Y(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Y(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
        }, _destroyContainer: function () {
            delete this._ctx, ft(this._container), $(this._container), delete this._container
        }, _updatePaths: function () {
            if (!this._postponeUpdatePaths) {
                this._redrawBounds = null;
                for (var t in this._layers) this._layers[t]._update();
                this._redraw()
            }
        }, _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                this._drawnLayers = {}, Wn.prototype._update.call(this);
                var t = this._bounds, i = this._container, e = t.getSize(), n = ce ? 2 : 1;
                St(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", ce && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
            }
        }, _reset: function () {
            Wn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
        }, _initPath: function (t) {
            this._updateDashArray(t), this._layers[n(t)] = t;
            var i = t._order = {layer: t, prev: this._drawLast, next: null};
            this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
        }, _addPath: function (t) {
            this._requestRedraw(t)
        }, _removePath: function (t) {
            var i = t._order, e = i.next, n = i.prev;
            e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[BM.stamp(t)], this._requestRedraw(t)
        }, _updatePath: function (t) {
            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
        }, _updateStyle: function (t) {
            this._updateDashArray(t), this._requestRedraw(t)
        }, _updateDashArray: function (t) {
            if (t.options.dashArray) {
                var i, e = t.options.dashArray.split(","), n = [];
                for (i = 0; i < e.length; i++) n.push(Number(e[i]));
                t.options._dashArray = n
            }
        }, _requestRedraw: function (t) {
            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || _(this._redraw, this))
        }, _extendRedrawBounds: function (t) {
            if (t._pxBounds) {
                var i = (t.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new S, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
            }
        }, _redraw: function () {
            this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
        }, _clear: function () {
            var t = this._redrawBounds;
            if (t) {
                var i = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
        }, _draw: function () {
            var t, i = this._redrawBounds;
            if (this._ctx.save(), i) {
                var e = i.getSize();
                this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
            }
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
            this._drawing = !1, this._ctx.restore()
        }, _updatePoly: function (t, i) {
            if (this._drawing) {
                var e, n, s, o, a = t._parts, r = a.length, h = this._ctx;
                if (r) {
                    for (this._drawnLayers[t._bigemap_id] = t, h.beginPath(), e = 0; e < r; e++) {
                        for (n = 0, s = a[e].length; n < s; n++) o = a[e][n], h[n ? "lineTo" : "moveTo"](o.x, o.y);
                        i && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        }, _updateCircle: function (t) {
            if (this._drawing && !t._empty()) {
                var i = t._point, e = this._ctx, n = Math.max(Math.round(t._radius), 1),
                    s = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                this._drawnLayers[t._bigemap_id] = t, 1 !== s && (e.save(), e.scale(1, s)), e.beginPath(), e.arc(i.x, i.y / s, n, 0, 2 * Math.PI, !1), 1 !== s && e.restore(), this._fillStroke(e, t)
            }
        }, _fillStroke: function (t, i) {
            var e = i.options;
            e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
        }, _onClick: function (t) {
            for (var i, e, n = this._map.mouseEventToLayerPoint(t), s = this._drawFirst; s; s = s.next) (i = s.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
            e && (lt(t), this._fireEvent([e], t))
        }, _onMouseMove: function (t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var i = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, i)
            }
        }, _handleMouseOut: function (t) {
            var i = this._hoveredLayer;
            i && (xt(this._container, "bigemap-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
        }, _handleMouseHover: function (t, i) {
            for (var e, n, s = this._drawFirst; s; s = s.next) (e = s.layer).options.interactive && e._containsPoint(i) && (n = e);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (bt(this._container, "bigemap-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
        }, _fireEvent: function (t, i, e) {
            this._map._fireDOMEvent(i, e || i.type, t)
        }, _bringToFront: function (t) {
            var i = t._order, e = i.next, n = i.prev;
            e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
        }, _bringToBack: function (t) {
            var i = t._order, e = i.next, n = i.prev;
            n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
        }
    }), Kn = function () {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {
            return function (t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }(), Qn = {
        _initContainer: function () {
            this._container = _t("div", "bigemap-vml-container")
        }, _update: function () {
            this._map._animatingZoom || (Wn.prototype._update.call(this), this.fire("update"))
        }, _initPath: function (t) {
            var i = t._container = Kn("shape");
            bt(i, "bigemap-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = Kn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
        }, _addPath: function (t) {
            var i = t._container;
            this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
        }, _removePath: function (t) {
            var i = t._container;
            ft(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
        }, _updateStyle: function (t) {
            var i = t._stroke, e = t._fill, n = t.options, s = t._container;
            s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = Kn("stroke")), s.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = Mi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (s.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = Kn("fill")), s.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (s.removeChild(e), t._fill = null)
        }, _updateCircle: function (t) {
            var i = t._point.round(), e = Math.round(t._radius), n = Math.round(t._radiusY || e);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
        }, _setPath: function (t, i) {
            t._path.v = i
        }, _bringToFront: function (t) {
            vt(t._container)
        }, _bringToBack: function (t) {
            yt(t._container)
        }
    }, Jn = me ? Kn : Z, Xn = Wn.extend({
        getEvents: function () {
            var t = Wn.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart, t
        }, _initContainer: function () {
            this._container = Jn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Jn("g"), this._container.appendChild(this._rootGroup)
        }, _destroyContainer: function () {
            ft(this._container), $(this._container), delete this._container, delete this._rootGroup
        }, _onZoomStart: function () {
            this._update()
        }, _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                Wn.prototype._update.call(this);
                var t = this._bounds, i = t.getSize(), e = this._container;
                this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), St(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
            }
        }, _initPath: function (t) {
            var i = t._path = Jn("path");
            t.options.className && bt(i, t.options.className), t.options.interactive && bt(i, "bigemap-interactive"), this._updateStyle(t), this._layers[n(t)] = t
        }, _addPath: function (t) {
            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
        }, _removePath: function (t) {
            ft(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
        }, _updatePath: function (t) {
            t._project(), t._update()
        }, _updateStyle: function (t) {
            var i = t._path, e = t.options;
            i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
        }, _updatePoly: function (t, i) {
            this._setPath(t, D(t._parts, i))
        }, _updateCircle: function (t) {
            var i = t._point, e = Math.max(Math.round(t._radius), 1),
                n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                s = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
            this._setPath(t, s)
        }, _setPath: function (t, i) {
            t._path.setAttribute("d", i)
        }, _bringToFront: function (t) {
            vt(t._path)
        }, _bringToBack: function (t) {
            yt(t._path)
        }
    });
    me && Xn.include(Qn), Ue.include({
        getRenderer: function (t) {
            var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return i || (i = this._renderer = this.options.preferCanvas && mi() || _i()), this.hasLayer(i) || this.addLayer(i), i
        }, _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._paneRenderers[t];
            return void 0 === i && (i = Xn && _i({pane: t}) || Vn && mi({pane: t}), this._paneRenderers[t] = i), i
        }
    });
    var Yn = Mn.extend({
        initialize: function (t, i) {
            Mn.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
        }, setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        }, _boundsToLatLngs: function (t) {
            return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Xn.create = Jn, Xn.pointsToPath = D, bn.geometryToLayer = si, bn.coordsToLatLng = oi, bn.coordsToLatLngs = ai, bn.latLngToCoords = ri, bn.latLngsToCoords = hi, bn.getFeature = li, bn.asFeature = ui, Ue.mergeOptions({boxZoom: !0});
    var $n = tn.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        }, addHooks: function () {
            Y(this._container, "mousedown", this._onMouseDown, this)
        }, removeHooks: function () {
            $(this._container, "mousedown", this._onMouseDown, this)
        }, moved: function () {
            return this._moved
        }, _destroy: function () {
            ft(this._pane), delete this._pane
        }, _resetState: function () {
            this._resetStateTimeout = 0, this._moved = !1
        }, _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        }, _onMouseDown: function (t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), zi(), At(), this._startPoint = this._map.mouseEventToContainerPoint(t), Y(document, {
                contextmenu: at,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        }, _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = _t("div", "bigemap-zoom-box", this._container), bt(this._container, "bigemap-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var i = new S(this._point, this._startPoint), e = i.getSize();
            St(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
        }, _finish: function () {
            this._moved && (ft(this._box), xt(this._container, "bigemap-crosshair")), Ii(), zt(), $(document, {
                contextmenu: at,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        }, _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
                var i = new A(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(i).fire("boxzoomend", {boxZoomBounds: i})
            }
        }, _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ue.addInitHook("addHandler", "boxZoom", $n), Ue.mergeOptions({doubleClickZoom: !0});
    var ts = tn.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        }, removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        }, _onDoubleClick: function (t) {
            var i = this._map, e = i.getZoom(), n = i.options.zoomDelta, s = t.originalEvent.shiftKey ? e - n : e + n;
            "center" === i.options.doubleClickZoom ? i.setZoom(s) : i.setZoomAround(t.containerPoint, s)
        }
    });
    Ue.addInitHook("addHandler", "doubleClickZoom", ts), Ue.mergeOptions({
        dragging: !0,
        inertia: !Gi,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var is = tn.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new an(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            bt(this._map._container, "bigemap-grab bigemap-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        }, removeHooks: function () {
            xt(this._map._container, "bigemap-grab"), xt(this._map._container, "bigemap-touch-drag"), this._draggable.disable()
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, moving: function () {
            return this._draggable && this._draggable._moving
        }, _onDragStart: function () {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var i = z(this._map.options.maxBounds);
                this._offsetLimit = k(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        }, _onDrag: function (t) {
            if (this._map.options.inertia) {
                var i = this._lastTime = +new Date,
                    e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(e), this._times.push(i), this._prunePositions(i)
            }
            this._map.fire("move", t).fire("drag", t)
        }, _prunePositions: function (t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
        }, _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2), i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        }, _viscousLimit: function (t, i) {
            return t - (t - i) * this._viscosity
        }, _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit;
                t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        }, _onPreDragWrap: function () {
            var t = this._worldWidth, i = Math.round(t / 2), e = this._initialWorldOffset,
                n = this._draggable._newPos.x, s = (n - i + e) % t + i - e, o = (n + i + e) % t - i - e,
                a = Math.abs(s + e) < Math.abs(o + e) ? s : o;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
        }, _onDragEnd: function (t) {
            var i = this._map, e = i.options, n = !e.inertia || this._times.length < 2;
            if (i.fire("dragend", t), n) i.fire("moveend"); else {
                this._prunePositions(+new Date);
                var s = this._lastPos.subtract(this._positions[0]), o = (this._lastTime - this._times[0]) / 1e3,
                    a = e.easeLinearity, r = s.multiplyBy(a / o), h = r.distanceTo([0, 0]),
                    l = Math.min(e.inertiaMaxSpeed, h), u = r.multiplyBy(l / h), c = l / (e.inertiaDeceleration * a),
                    d = u.multiplyBy(-c / 2).round();
                d.x || d.y ? (d = i._limitOffset(d, i.options.maxBounds), _(function () {
                    i.panBy(d, {duration: c, easeLinearity: a, noMoveStart: !0, animate: !0})
                })) : i.fire("moveend")
            }
        }
    });
    Ue.addInitHook("addHandler", "dragging", is), Ue.mergeOptions({keyboard: !0, keyboardPanDelta: 80});
    var es = tn.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        }, initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        }, addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), Y(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({focus: this._addHooks, blur: this._removeHooks}, this)
        }, removeHooks: function () {
            this._removeHooks(), $(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({focus: this._addHooks, blur: this._removeHooks}, this)
        }, _onMouseDown: function () {
            if (!this._focused) {
                var t = document.body, i = document.documentElement, e = t.scrollTop || i.scrollTop,
                    n = t.scrollLeft || i.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, e)
            }
        }, _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        }, _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        }, _setPanDelta: function (t) {
            var i, e, n = this._panKeys = {}, s = this.keyCodes;
            for (i = 0, e = s.left.length; i < e; i++) n[s.left[i]] = [-1 * t, 0];
            for (i = 0, e = s.right.length; i < e; i++) n[s.right[i]] = [t, 0];
            for (i = 0, e = s.down.length; i < e; i++) n[s.down[i]] = [0, t];
            for (i = 0, e = s.up.length; i < e; i++) n[s.up[i]] = [0, -1 * t]
        }, _setZoomDelta: function (t) {
            var i, e, n = this._zoomKeys = {}, s = this.keyCodes;
            for (i = 0, e = s.zoomIn.length; i < e; i++) n[s.zoomIn[i]] = t;
            for (i = 0, e = s.zoomOut.length; i < e; i++) n[s.zoomOut[i]] = -t
        }, _addHooks: function () {
            Y(document, "keydown", this._onKeyDown, this)
        }, _removeHooks: function () {
            $(document, "keydown", this._onKeyDown, this)
        }, _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, e = t.keyCode, n = this._map;
                if (e in this._panKeys) {
                    if (n._panAnim && n._panAnim._inProgress) return;
                    i = this._panKeys[e], t.shiftKey && (i = C(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                } else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]); else {
                    if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                at(t)
            }
        }
    });
    Ue.addInitHook("addHandler", "keyboard", es), Ue.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var ns = tn.extend({
        addHooks: function () {
            Y(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        }, removeHooks: function () {
            $(this._map._container, "mousewheel", this._onWheelScroll, this)
        }, _onWheelScroll: function (t) {
            var i = ht(t), n = this._map.options.wheelDebounceTime;
            this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var s = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), s), at(t)
        }, _performZoom: function () {
            var t = this._map, i = t.getZoom(), e = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, o = e ? Math.ceil(s / e) * e : s,
                a = t._limitZoom(i + (this._delta > 0 ? o : -o)) - i;
            this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + a) : t.setZoomAround(this._lastMousePos, i + a))
        }
    });
    Ue.addInitHook("addHandler", "scrollWheelZoom", ns), Ue.mergeOptions({tap: !0, tapTolerance: 15});
    var ss = tn.extend({
        addHooks: function () {
            Y(this._map._container, "touchstart", this._onDown, this)
        }, removeHooks: function () {
            $(this._map._container, "touchstart", this._onDown, this)
        }, _onDown: function (t) {
            if (t.touches) {
                if (ot(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0], n = i.target;
                this._startPos = this._newPos = new E(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && bt(n, "bigemap-active"), this._holdTimeout = setTimeout(e(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), Y(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        }, _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), $(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0], e = i.target;
                e && e.tagName && "a" === e.tagName.toLowerCase() && xt(e, "bigemap-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        }, _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        }, _onMove: function (t) {
            var i = t.touches[0];
            this._newPos = new E(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
        }, _simulateEvent: function (t, i) {
            var e = document.createEvent("MouseEvents");
            e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
        }
    });
    he && !re && Ue.addInitHook("addHandler", "tap", ss), Ue.mergeOptions({
        touchZoom: he && !Gi,
        bounceAtZoomLimits: !0
    });
    var os = tn.extend({
        addHooks: function () {
            bt(this._map._container, "bigemap-touch-zoom"), Y(this._map._container, "touchstart", this._onTouchStart, this)
        }, removeHooks: function () {
            xt(this._map._container, "bigemap-touch-zoom"), $(this._map._container, "touchstart", this._onTouchStart, this)
        }, _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var e = i.mouseEventToContainerPoint(t.touches[0]), n = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), Y(document, "touchmove", this._onTouchMove, this), Y(document, "touchend", this._onTouchEnd, this), ot(t)
            }
        }, _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = this._map, n = i.mouseEventToContainerPoint(t.touches[0]),
                    s = i.mouseEventToContainerPoint(t.touches[1]), o = n.distanceTo(s) / this._startDist;
                if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && o > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === o) return
                } else {
                    var a = n._add(s)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === o && 0 === a.x && 0 === a.y) return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                }
                this._moved || (i._moveStart(!0), this._moved = !0), f(this._animRequest);
                var r = e(i._move, i, this._center, this._zoom, {pinch: !0, round: !1});
                this._animRequest = _(r, this, !0), ot(t)
            }
        }, _onTouchEnd: function () {
            this._moved && this._zooming ? (this._zooming = !1, f(this._animRequest), $(document, "touchmove", this._onTouchMove), $(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    Ue.addInitHook("addHandler", "touchZoom", os), Ue.BoxZoom = $n, Ue.DoubleClickZoom = ts, Ue.Drag = is, Ue.Keyboard = es, Ue.ScrollWheelZoom = ns, Ue.Tap = ss, Ue.TouchZoom = os;
    var as = window.BM;
    window.BM = t, Object.freeze = fi, t.version = "2.1.0+doc-translated.fa4f6f5", t.noConflict = function () {
        return window.BM = as, this
    }, t.Control = We, t.control = Ve, t.Browser = _e, t.Evented = Ei, t.Mixin = en, t.Util = Li, t.Class = L, t.Handler = tn, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = u, t.DomEvent = ke, t.DomUtil = Be, t.PosAnimation = qe, t.Draggable = an, t.LineUtil = rn, t.PolyUtil = hn, t.Point = E, t.point = C, t.Bounds = S, t.bounds = k, t.Transformation = N, t.transformation = B, t.Projection = Sn, t.LatLng = O, t.latLng = R, t.LatLngBounds = A, t.latLngBounds = z, t.Proj = Pn, t.CRS = Ci, t.GeoJSON = bn, t.geoJSON = ci, t.geoJson = wn, t.Layer = ln, t.LayerGroup = un, t.layerGroup = function (t) {
        return new un(t)
    }, t.FeatureGroup = cn, t.featureGroup = function (t) {
        return new cn(t)
    }, t.FeatureLayer = Zn, t.featureLayer = di, t.ImageOverlay = Tn, t.imageOverlay = function (t, i, e) {
        return new Tn(t, i, e)
    }, t.VideoOverlay = Dn, t.videoOverlay = function (t, i, e) {
        return new Dn(t, i, e)
    }, t.DivOverlay = jn, t.Popup = Hn, t.popup = function (t, i) {
        return new Hn(t, i)
    }, t.Tooltip = qn, t.tooltip = function (t, i) {
        return new qn(t, i)
    }, t.Icon = dn, t.icon = ei, t.DivIcon = Gn, t.divIcon = function (t) {
        return new Gn(t)
    }, t.Marker = _n, t.marker = ni, t.TileLayer = Un, t.tileLayer = pi, t.GridLayer = Fn, t.gridLayer = function (t) {
        return new Fn(t)
    }, t.SVG = Xn, t.svg = _i, t.Renderer = Wn, t.Canvas = Vn, t.canvas = mi, t.Path = fn, t.CircleMarker = gn, t.circleMarker = function (t, i) {
        return new gn(t, i)
    }, t.Circle = vn, t.circle = function (t, i, e) {
        return new vn(t, i, e)
    }, t.Polyline = yn, t.polyline = function (t, i) {
        return new yn(t, i)
    }, t.Polygon = Mn, t.polygon = function (t, i) {
        return new Mn(t, i)
    }, t.Rectangle = Yn, t.rectangle = function (t, i) {
        return new Yn(t, i)
    }, t.Map = Ue, t.map = function (t, i, e) {
        return new Ue(t, i, e)
    }, t.Config = Ze, t.MarkerUtil = On, t.SimpleStyle = Bn
});