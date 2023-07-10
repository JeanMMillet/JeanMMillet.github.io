(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const u of i.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var x = {},
  ic = {
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
    },
  },
  rl = {},
  le = {},
  uc = {
    get exports() {
      return le;
    },
    set exports(e) {
      le = e;
    },
  },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zt = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.memo"),
  hc = Symbol.for("react.lazy"),
  $u = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zo = Object.assign,
  Jo = {};
function ot(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Jo),
    (this.updater = t || Xo);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qo() {}
qo.prototype = ot.prototype;
function Hi(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Jo),
    (this.updater = t || Xo);
}
var Qi = (Hi.prototype = new qo());
Qi.constructor = Hi;
Zo(Qi, ot.prototype);
Qi.isPureReactComponent = !0;
var Bu = Array.isArray,
  bo = Object.prototype.hasOwnProperty,
  Ki = { current: null },
  es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
  var r,
    l = {},
    i = null,
    u = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (u = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      bo.call(n, r) && !es.hasOwnProperty(r) && (l[r] = n[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = t;
  else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: Zt,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: Ki.current,
  };
}
function gc(e, n) {
  return {
    $$typeof: Zt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Au = /\/+/g;
function xl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case oc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + xl(u, 0) : r),
      Bu(l)
        ? ((t = ""),
          e != null && (t = e.replace(Au, "$&/") + "/"),
          Sr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Yi(l) &&
            (l = gc(
              l,
              t +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Au, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Bu(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var s = r + xl(i, o);
      u += Sr(i, n, t, s, l);
    }
  else if (((s = yc(e)), typeof s == "function"))
    for (e = s.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, o++)), (u += Sr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function rr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Sc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  kr = { transition: null },
  kc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Ki,
  };
j.Children = {
  map: rr,
  forEach: function (e, n, t) {
    rr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      rr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Yi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = ot;
j.Fragment = sc;
j.Profiler = cc;
j.PureComponent = Hi;
j.StrictMode = ac;
j.Suspense = mc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
j.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zo({}, e.props),
    l = e.key,
    i = e.ref,
    u = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (u = Ki.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (s in n)
      bo.call(n, s) &&
        !es.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && o !== void 0 ? o[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    o = Array(s);
    for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: i, props: r, _owner: u };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = ns;
j.createFactory = function (e) {
  var n = ns.bind(null, e);
  return (n.type = e), n;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
j.isValidElement = Yi;
j.lazy = function (e) {
  return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: Sc };
};
j.memo = function (e, n) {
  return { $$typeof: vc, type: e, compare: n === void 0 ? null : n };
};
j.startTransition = function (e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
j.useContext = function (e) {
  return se.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
j.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
j.useId = function () {
  return se.current.useId();
};
j.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
j.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
j.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
j.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
j.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
j.useRef = function (e) {
  return se.current.useRef(e);
};
j.useState = function (e) {
  return se.current.useState(e);
};
j.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
j.useTransition = function () {
  return se.current.useTransition();
};
j.version = "18.2.0";
(function (e) {
  e.exports = j;
})(uc);
const xc = lc(le);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ec = le,
  Cc = Symbol.for("react.element"),
  _c = Symbol.for("react.fragment"),
  Pc = Object.prototype.hasOwnProperty,
  Nc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, n, t) {
  var r,
    l = {},
    i = null,
    u = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (u = n.ref);
  for (r in n) Pc.call(n, r) && !zc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Cc,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: Nc.current,
  };
}
rl.Fragment = _c;
rl.jsx = ts;
rl.jsxs = ts;
(function (e) {
  e.exports = rl;
})(ic);
var Xl = {},
  Zl = {},
  Tc = {
    get exports() {
      return Zl;
    },
    set exports(e) {
      Zl = e;
    },
  },
  we = {},
  Jl = {},
  Lc = {
    get exports() {
      return Jl;
    },
    set exports(e) {
      Jl = e;
    },
  },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(C, z) {
    var T = C.length;
    C.push(z);
    e: for (; 0 < T; ) {
      var H = (T - 1) >>> 1,
        X = C[H];
      if (0 < l(X, z)) (C[H] = z), (C[T] = X), (T = H);
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      T = C.pop();
    if (T !== z) {
      C[0] = T;
      e: for (var H = 0, X = C.length, nr = X >>> 1; H < nr; ) {
        var yn = 2 * (H + 1) - 1,
          kl = C[yn],
          gn = yn + 1,
          tr = C[gn];
        if (0 > l(kl, T))
          gn < X && 0 > l(tr, kl)
            ? ((C[H] = tr), (C[gn] = T), (H = gn))
            : ((C[H] = kl), (C[yn] = T), (H = yn));
        else if (gn < X && 0 > l(tr, T)) (C[H] = tr), (C[gn] = T), (H = gn);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var T = C.sortIndex - z.sortIndex;
    return T !== 0 ? T : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      o = u.now();
    e.unstable_now = function () {
      return u.now() - o;
    };
  }
  var s = [],
    c = [],
    v = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C)
        r(c), (z.sortIndex = z.expirationTime), n(s, z);
      else break;
      z = t(c);
    }
  }
  function h(C) {
    if (((k = !1), d(C), !w))
      if (t(s) !== null) (w = !0), wl(S);
      else {
        var z = t(c);
        z !== null && Sl(h, z.startTime - C);
      }
  }
  function S(C, z) {
    (w = !1), k && ((k = !1), f(N), (N = -1)), (g = !0);
    var T = p;
    try {
      for (
        d(z), m = t(s);
        m !== null && (!(m.expirationTime > z) || (C && !Ne()));

      ) {
        var H = m.callback;
        if (typeof H == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var X = H(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === t(s) && r(s),
            d(z);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var nr = !0;
      else {
        var yn = t(c);
        yn !== null && Sl(h, yn.startTime - z), (nr = !1);
      }
      return nr;
    } finally {
      (m = null), (p = T), (g = !1);
    }
  }
  var _ = !1,
    P = null,
    N = -1,
    D = 5,
    L = -1;
  function Ne() {
    return !(e.unstable_now() - L < D);
  }
  function ct() {
    if (P !== null) {
      var C = e.unstable_now();
      L = C;
      var z = !0;
      try {
        z = P(!0, C);
      } finally {
        z ? ft() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var ft;
  if (typeof a == "function")
    ft = function () {
      a(ct);
    };
  else if (typeof MessageChannel < "u") {
    var Uu = new MessageChannel(),
      rc = Uu.port2;
    (Uu.port1.onmessage = ct),
      (ft = function () {
        rc.postMessage(null);
      });
  } else
    ft = function () {
      M(ct, 0);
    };
  function wl(C) {
    (P = C), _ || ((_ = !0), ft());
  }
  function Sl(C, z) {
    N = M(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), wl(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var T = p;
      p = z;
      try {
        return C();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var T = p;
      p = C;
      try {
        return z();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, T) {
      var H = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? H + T : H))
          : (T = H),
        C)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = T + X),
        (C = {
          id: v++,
          callback: z,
          priorityLevel: C,
          startTime: T,
          expirationTime: X,
          sortIndex: -1,
        }),
        T > H
          ? ((C.sortIndex = T),
            n(c, C),
            t(s) === null &&
              C === t(c) &&
              (k ? (f(N), (N = -1)) : (k = !0), Sl(h, T - H)))
          : ((C.sortIndex = X), n(s, C), w || g || ((w = !0), wl(S))),
        C
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var T = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(rs);
(function (e) {
  e.exports = rs;
})(Lc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = le,
  ge = Jl;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Ot = {};
function jn(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ql = Object.prototype.hasOwnProperty,
  jc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vu = {},
  Wu = {};
function Rc(e) {
  return ql.call(Wu, e)
    ? !0
    : ql.call(Vu, e)
    ? !1
    : jc.test(e)
    ? (Wu[e] = !0)
    : ((Vu[e] = !0), !1);
}
function Oc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, n, t, r) {
  if (n === null || typeof n > "u" || Oc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, i, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Gi, Xi);
    ee[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Gi, Xi);
    ee[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Gi, Xi);
  ee[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Mc(n, t, l, r) && (t = null),
    r || l === null
      ? Rc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  In = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Ji = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  us = Symbol.for("react.provider"),
  os = Symbol.for("react.context"),
  qi = Symbol.for("react.forward_ref"),
  ei = Symbol.for("react.suspense"),
  ni = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Hu = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  El;
function St(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      El = (n && n[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var Cl = !1;
function _l(e, n) {
  if (!e || Cl) return "";
  Cl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          u = l.length - 1,
          o = i.length - 1;
        1 <= u && 0 <= o && l[u] !== i[o];

      )
        o--;
      for (; 1 <= u && 0 <= o; u--, o--)
        if (l[u] !== i[o]) {
          if (u !== 1 || o !== 1)
            do
              if ((u--, o--, 0 > o || l[u] !== i[o])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= o);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? St(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return St(e.type);
    case 16:
      return St("Lazy");
    case 13:
      return St("Suspense");
    case 19:
      return St("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case In:
      return "Portal";
    case bl:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case ei:
      return "Suspense";
    case ni:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case os:
        return (e.displayName || "Context") + ".Consumer";
      case us:
        return (e._context.displayName || "Context") + ".Provider";
      case qi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (n = e.displayName || null), n !== null ? n : ti(e.type) || "Memo"
        );
      case Je:
        (n = e._payload), (e = e._init);
        try {
          return ti(e(n));
        } catch {}
    }
  return null;
}
function Ic(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ti(n);
    case 8:
      return n === Ji ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Fc(e) {
  var n = as(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Fc(e));
}
function cs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, n) {
  var t = n.checked;
  return V({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Qu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = dn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function fs(e, n) {
  (n = n.checked), n != null && Zi(e, "checked", n, !1);
}
function li(e, n) {
  fs(e, n);
  var t = dn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ii(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ii(e, n.type, dn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Ku(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ii(e, n, t) {
  (n !== "number" || Or(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var kt = Array.isArray;
function Gn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ui(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yu(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (kt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: dn(t) };
}
function ds(e, n) {
  var t = dn(n.value),
    r = dn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Gu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oi(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Mt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ct = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ct).forEach(function (e) {
  Uc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ct[n] = Ct[e]);
  });
});
function vs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Ct.hasOwnProperty(e) && Ct[e])
    ? ("" + n).trim()
    : n + "px";
}
function hs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = vs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var $c = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function si(e, n) {
  if (n) {
    if ($c[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function ai(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ci = null;
function eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fi = null,
  Xn = null,
  Zn = null;
function Xu(e) {
  if ((e = bt(e))) {
    if (typeof fi != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = sl(n)), fi(e.stateNode, e.type, n));
  }
}
function ys(e) {
  Xn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Xn = e);
}
function gs() {
  if (Xn) {
    var e = Xn,
      n = Zn;
    if (((Zn = Xn = null), Xu(e), n)) for (e = 0; e < n.length; e++) Xu(n[e]);
  }
}
function ws(e, n) {
  return e(n);
}
function Ss() {}
var Pl = !1;
function ks(e, n, t) {
  if (Pl) return e(n, t);
  Pl = !0;
  try {
    return ws(e, n, t);
  } finally {
    (Pl = !1), (Xn !== null || Zn !== null) && (Ss(), gs());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var di = !1;
if (Qe)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
      get: function () {
        di = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt);
  } catch {
    di = !1;
  }
function Bc(e, n, t, r, l, i, u, o, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (v) {
    this.onError(v);
  }
}
var _t = !1,
  Mr = null,
  Dr = !1,
  pi = null,
  Ac = {
    onError: function (e) {
      (_t = !0), (Mr = e);
    },
  };
function Vc(e, n, t, r, l, i, u, o, s) {
  (_t = !1), (Mr = null), Bc.apply(Ac, arguments);
}
function Wc(e, n, t, r, l, i, u, o, s) {
  if ((Vc.apply(this, arguments), _t)) {
    if (_t) {
      var c = Mr;
      (_t = !1), (Mr = null);
    } else throw Error(y(198));
    Dr || ((Dr = !0), (pi = c));
  }
}
function Rn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function xs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Zu(e) {
  if (Rn(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Rn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Zu(l), e;
        if (i === r) return Zu(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var u = !1, o = l.child; o; ) {
        if (o === t) {
          (u = !0), (t = l), (r = i);
          break;
        }
        if (o === r) {
          (u = !0), (r = l), (t = i);
          break;
        }
        o = o.sibling;
      }
      if (!u) {
        for (o = i.child; o; ) {
          if (o === t) {
            (u = !0), (t = i), (r = l);
            break;
          }
          if (o === r) {
            (u = !0), (r = i), (t = l);
            break;
          }
          o = o.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Es(e) {
  return (e = Hc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Cs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var _s = ge.unstable_scheduleCallback,
  Ju = ge.unstable_cancelCallback,
  Qc = ge.unstable_shouldYield,
  Kc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Yc = ge.unstable_getCurrentPriorityLevel,
  nu = ge.unstable_ImmediatePriority,
  Ps = ge.unstable_UserBlockingPriority,
  Ir = ge.unstable_NormalPriority,
  Gc = ge.unstable_LowPriority,
  Ns = ge.unstable_IdlePriority,
  ll = null,
  Ue = null;
function Xc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : qc,
  Zc = Math.log,
  Jc = Math.LN2;
function qc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / Jc) | 0)) | 0;
}
var or = 64,
  sr = 4194304;
function xt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    u = t & 268435455;
  if (u !== 0) {
    var o = u & ~l;
    o !== 0 ? (r = xt(o)) : ((i &= u), i !== 0 && (r = xt(i)));
  } else (u = t & ~l), u !== 0 ? (r = xt(u)) : i !== 0 && (r = xt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function bc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ef(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Re(i),
      o = 1 << u,
      s = l[u];
    s === -1
      ? (!(o & t) || o & r) && (l[u] = bc(o, n))
      : s <= n && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zs() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Re(n)),
    (e[n] = t);
}
function nf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function tu(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ls,
  ru,
  js,
  Rs,
  Os,
  vi = !1,
  ar = [],
  rn = null,
  ln = null,
  un = null,
  It = new Map(),
  Ft = new Map(),
  be = [],
  tf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      It.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = bt(n)), n !== null && ru(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function rf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (rn = mt(rn, e, n, t, r, l)), !0;
    case "dragenter":
      return (ln = mt(ln, e, n, t, r, l)), !0;
    case "mouseover":
      return (un = mt(un, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return It.set(i, mt(It.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Ft.set(i, mt(Ft.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = xs(t)), n !== null)) {
          (e.blockedOn = n),
            Os(e.priority, function () {
              js(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = hi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ci = r), t.target.dispatchEvent(r), (ci = null);
    } else return (n = bt(t)), n !== null && ru(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function bu(e, n, t) {
  xr(e) && t.delete(n);
}
function lf() {
  (vi = !1),
    rn !== null && xr(rn) && (rn = null),
    ln !== null && xr(ln) && (ln = null),
    un !== null && xr(un) && (un = null),
    It.forEach(bu),
    Ft.forEach(bu);
}
function vt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    vi ||
      ((vi = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, lf)));
}
function Ut(e) {
  function n(l) {
    return vt(l, e);
  }
  if (0 < ar.length) {
    vt(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && vt(rn, e),
      ln !== null && vt(ln, e),
      un !== null && vt(un, e),
      It.forEach(n),
      Ft.forEach(n),
      t = 0;
    t < be.length;
    t++
  )
    (r = be[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((t = be[0]), t.blockedOn === null); )
    Ms(t), t.blockedOn === null && be.shift();
}
var Jn = Xe.ReactCurrentBatchConfig,
  Ur = !0;
function uf(e, n, t, r) {
  var l = O,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (O = 1), lu(e, n, t, r);
  } finally {
    (O = l), (Jn.transition = i);
  }
}
function of(e, n, t, r) {
  var l = O,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (O = 4), lu(e, n, t, r);
  } finally {
    (O = l), (Jn.transition = i);
  }
}
function lu(e, n, t, r) {
  if (Ur) {
    var l = hi(e, n, t, r);
    if (l === null) Fl(e, n, r, $r, t), qu(e, r);
    else if (rf(l, e, n, t, r)) r.stopPropagation();
    else if ((qu(e, r), n & 4 && -1 < tf.indexOf(e))) {
      for (; l !== null; ) {
        var i = bt(l);
        if (
          (i !== null && Ls(i),
          (i = hi(e, n, t, r)),
          i === null && Fl(e, n, r, $r, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, n, r, null, t);
  }
}
var $r = null;
function hi(e, n, t, r) {
  if ((($r = null), (e = eu(r)), (e = kn(e)), e !== null))
    if (((n = Rn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = xs(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return ($r = e), null;
}
function Ds(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yc()) {
        case nu:
          return 1;
        case Ps:
          return 4;
        case Ir:
        case Gc:
          return 16;
        case Ns:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  iu = null,
  Er = null;
function Is() {
  if (Er) return Er;
  var e,
    n = iu,
    t = n.length,
    r,
    l = "value" in nn ? nn.value : nn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function eo() {
  return !1;
}
function Se(e) {
  function n(t, r, l, i, u) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cr
        : eo),
      (this.isPropagationStopped = eo),
      this
    );
  }
  return (
    V(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    n
  );
}
var st = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = Se(st),
  qt = V({}, st, { view: 0, detail: 0 }),
  sf = Se(qt),
  zl,
  Tl,
  ht,
  il = V({}, qt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ht &&
            (ht && e.type === "mousemove"
              ? ((zl = e.screenX - ht.screenX), (Tl = e.screenY - ht.screenY))
              : (Tl = zl = 0),
            (ht = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  no = Se(il),
  af = V({}, il, { dataTransfer: 0 }),
  cf = Se(af),
  ff = V({}, qt, { relatedTarget: 0 }),
  Ll = Se(ff),
  df = V({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pf = Se(df),
  mf = V({}, st, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vf = Se(mf),
  hf = V({}, st, { data: 0 }),
  to = Se(hf),
  yf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Sf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = wf[e]) ? !!n[e] : !1;
}
function ou() {
  return Sf;
}
var kf = V({}, qt, {
    key: function (e) {
      if (e.key) {
        var n = yf[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = Se(kf),
  Ef = V({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ro = Se(Ef),
  Cf = V({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  _f = Se(Cf),
  Pf = V({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nf = Se(Pf),
  zf = V({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tf = Se(zf),
  Lf = [9, 13, 27, 32],
  su = Qe && "CompositionEvent" in window,
  Pt = null;
Qe && "documentMode" in document && (Pt = document.documentMode);
var jf = Qe && "TextEvent" in window && !Pt,
  Fs = Qe && (!su || (Pt && 8 < Pt && 11 >= Pt)),
  lo = String.fromCharCode(32),
  io = !1;
function Us(e, n) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Rf(e, n) {
  switch (e) {
    case "compositionend":
      return $s(n);
    case "keypress":
      return n.which !== 32 ? null : ((io = !0), lo);
    case "textInput":
      return (e = n.data), e === lo && io ? null : e;
    default:
      return null;
  }
}
function Of(e, n) {
  if (Un)
    return e === "compositionend" || (!su && Us(e, n))
      ? ((e = Is()), (Er = iu = nn = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Fs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Mf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Mf[e.type] : n === "textarea";
}
function Bs(e, n, t, r) {
  ys(r),
    (n = Br(n, "onChange")),
    0 < n.length &&
      ((t = new uu("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Nt = null,
  $t = null;
function Df(e) {
  Js(e, 0);
}
function ul(e) {
  var n = An(e);
  if (cs(n)) return e;
}
function If(e, n) {
  if (e === "change") return n;
}
var As = !1;
if (Qe) {
  var jl;
  if (Qe) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var oo = document.createElement("div");
      oo.setAttribute("oninput", "return;"),
        (Rl = typeof oo.oninput == "function");
    }
    jl = Rl;
  } else jl = !1;
  As = jl && (!document.documentMode || 9 < document.documentMode);
}
function so() {
  Nt && (Nt.detachEvent("onpropertychange", Vs), ($t = Nt = null));
}
function Vs(e) {
  if (e.propertyName === "value" && ul($t)) {
    var n = [];
    Bs(n, $t, e, eu(e)), ks(Df, n);
  }
}
function Ff(e, n, t) {
  e === "focusin"
    ? (so(), (Nt = n), ($t = t), Nt.attachEvent("onpropertychange", Vs))
    : e === "focusout" && so();
}
function Uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul($t);
}
function $f(e, n) {
  if (e === "click") return ul(n);
}
function Bf(e, n) {
  if (e === "input" || e === "change") return ul(n);
}
function Af(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Me = typeof Object.is == "function" ? Object.is : Af;
function Bt(e, n) {
  if (Me(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!ql.call(n, l) || !Me(e[l], n[l])) return !1;
  }
  return !0;
}
function ao(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function co(e, n) {
  var t = ao(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ao(t);
  }
}
function Ws(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Ws(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Hs() {
  for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Or(e.document);
  }
  return n;
}
function au(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vf(e) {
  var n = Hs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Ws(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && au(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = co(t, i));
        var u = co(t, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wf = Qe && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  yi = null,
  zt = null,
  gi = !1;
function fo(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  gi ||
    $n == null ||
    $n !== Or(r) ||
    ((r = $n),
    "selectionStart" in r && au(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zt && Bt(zt, r)) ||
      ((zt = r),
      (r = Br(yi, "onSelect")),
      0 < r.length &&
        ((n = new uu("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = $n))));
}
function fr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Bn = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Qs = {};
Qe &&
  ((Qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function ol(e) {
  if (Ol[e]) return Ol[e];
  if (!Bn[e]) return e;
  var n = Bn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Qs) return (Ol[e] = n[t]);
  return e;
}
var Ks = ol("animationend"),
  Ys = ol("animationiteration"),
  Gs = ol("animationstart"),
  Xs = ol("transitionend"),
  Zs = new Map(),
  po =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, n) {
  Zs.set(e, n), jn(n, [e]);
}
for (var Ml = 0; Ml < po.length; Ml++) {
  var Dl = po[Ml],
    Hf = Dl.toLowerCase(),
    Qf = Dl[0].toUpperCase() + Dl.slice(1);
  mn(Hf, "on" + Qf);
}
mn(Ks, "onAnimationEnd");
mn(Ys, "onAnimationIteration");
mn(Gs, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Xs, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Et =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));
function mo(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Wc(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u],
            s = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
          mo(l, o, c), (i = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((o = r[u]),
            (s = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          mo(l, o, c), (i = s);
        }
    }
  }
  if (Dr) throw ((e = pi), (Dr = !1), (pi = null), e);
}
function F(e, n) {
  var t = n[Ei];
  t === void 0 && (t = n[Ei] = new Set());
  var r = e + "__bubble";
  t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Il(e, n, t) {
  var r = 0;
  n && (r |= 4), qs(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      is.forEach(function (t) {
        t !== "selectionchange" && (Kf.has(t) || Il(t, !1, e), Il(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || ((n[dr] = !0), Il("selectionchange", !1, n));
  }
}
function qs(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = lu;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !di ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Fl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; o !== null; ) {
          if (((u = kn(o)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = i = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = i,
      v = eu(t),
      m = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var g = uu,
          w = e;
        switch (e) {
          case "keypress":
            if (Cr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = xf;
            break;
          case "focusin":
            (w = "focus"), (g = Ll);
            break;
          case "focusout":
            (w = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = no;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _f;
            break;
          case Ks:
          case Ys:
          case Gs:
            g = pf;
            break;
          case Xs:
            g = Nf;
            break;
          case "scroll":
            g = sf;
            break;
          case "wheel":
            g = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ro;
        }
        var k = (n & 4) !== 0,
          M = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var h = d.stateNode;
          if (
            (d.tag === 5 &&
              h !== null &&
              ((d = h),
              f !== null && ((h = Dt(a, f)), h != null && k.push(Vt(a, h, d)))),
            M)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, t, v)), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            t !== ci &&
            (w = t.relatedTarget || t.fromElement) &&
            (kn(w) || w[Ke]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = c),
              (w = w ? kn(w) : null),
              w !== null &&
                ((M = Rn(w)), w !== M || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = no),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ro),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (M = g == null ? p : An(g)),
            (d = w == null ? p : An(w)),
            (p = new k(h, a + "leave", g, t, v)),
            (p.target = M),
            (p.relatedTarget = d),
            (h = null),
            kn(v) === c &&
              ((k = new k(f, a + "enter", w, t, v)),
              (k.target = d),
              (k.relatedTarget = M),
              (h = k)),
            (M = h),
            g && w)
          )
            n: {
              for (k = g, f = w, a = 0, d = k; d; d = On(d)) a++;
              for (d = 0, h = f; h; h = On(h)) d++;
              for (; 0 < a - d; ) (k = On(k)), a--;
              for (; 0 < d - a; ) (f = On(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break n;
                (k = On(k)), (f = On(f));
              }
              k = null;
            }
          else k = null;
          g !== null && vo(m, p, g, k, !1),
            w !== null && M !== null && vo(m, M, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? An(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var S = If;
        else if (uo(p))
          if (As) S = Bf;
          else {
            S = Uf;
            var _ = Ff;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = $f);
        if (S && (S = S(e, c))) {
          Bs(m, S, t, v);
          break e;
        }
        _ && _(e, p, c),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            ii(p, "number", p.value);
      }
      switch (((_ = c ? An(c) : window), e)) {
        case "focusin":
          (uo(_) || _.contentEditable === "true") &&
            (($n = _), (yi = c), (zt = null));
          break;
        case "focusout":
          zt = yi = $n = null;
          break;
        case "mousedown":
          gi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gi = !1), fo(m, t, v);
          break;
        case "selectionchange":
          if (Wf) break;
        case "keydown":
        case "keyup":
          fo(m, t, v);
      }
      var P;
      if (su)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Un
          ? Us(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Fs &&
          t.locale !== "ko" &&
          (Un || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Un && (P = Is())
            : ((nn = v),
              (iu = "value" in nn ? nn.value : nn.textContent),
              (Un = !0))),
        (_ = Br(c, N)),
        0 < _.length &&
          ((N = new to(N, e, null, t, v)),
          m.push({ event: N, listeners: _ }),
          P ? (N.data = P) : ((P = $s(t)), P !== null && (N.data = P)))),
        (P = jf ? Rf(e, t) : Of(e, t)) &&
          ((c = Br(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new to("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: c }),
            (v.data = P)));
    }
    Js(m, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Br(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dt(e, t)),
      i != null && r.unshift(Vt(e, i, l)),
      (i = Dt(e, n)),
      i != null && r.push(Vt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vo(e, n, t, r, l) {
  for (var i = n._reactName, u = []; t !== null && t !== r; ) {
    var o = t,
      s = o.alternate,
      c = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((s = Dt(t, i)), s != null && u.unshift(Vt(t, s, o)))
        : l || ((s = Dt(t, i)), s != null && u.push(Vt(t, s, o)))),
      (t = t.return);
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var Yf = /\r\n?/g,
  Gf = /\u0000|\uFFFD/g;
function ho(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yf,
      `
`
    )
    .replace(Gf, "");
}
function pr(e, n, t) {
  if (((n = ho(n)), ho(e) !== n && t)) throw Error(y(425));
}
function Ar() {}
var wi = null,
  Si = null;
function ki(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var xi = typeof setTimeout == "function" ? setTimeout : void 0,
  Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yo = typeof Promise == "function" ? Promise : void 0,
  Zf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yo < "u"
      ? function (e) {
          return yo.resolve(null).then(e).catch(Jf);
        }
      : xi;
function Jf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ut(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ut(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function go(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + at,
  Wt = "__reactProps$" + at,
  Ke = "__reactContainer$" + at,
  Ei = "__reactEvents$" + at,
  qf = "__reactListeners$" + at,
  bf = "__reactHandles$" + at;
function kn(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ke] || t[Fe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = go(e); e !== null; ) {
          if ((t = e[Fe])) return t;
          e = go(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function bt(e) {
  return (
    (e = e[Fe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Wt] || null;
}
var Ci = [],
  Vn = -1;
function vn(e) {
  return { current: e };
}
function U(e) {
  0 > Vn || ((e.current = Ci[Vn]), (Ci[Vn] = null), Vn--);
}
function I(e, n) {
  Vn++, (Ci[Vn] = e.current), (e.current = n);
}
var pn = {},
  ie = vn(pn),
  de = vn(!1),
  Pn = pn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  U(de), U(ie);
}
function wo(e, n, t) {
  if (ie.current !== pn) throw Error(y(168));
  I(ie, n), I(de, t);
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Ic(e) || "Unknown", l));
  return V({}, t, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (Pn = ie.current),
    I(ie, e),
    I(de, de.current),
    !0
  );
}
function So(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = bs(e, n, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(de),
      U(ie),
      I(ie, e))
    : U(de),
    I(de, t);
}
var Ae = null,
  al = !1,
  $l = !1;
function ea(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function ed(e) {
  (al = !0), ea(e);
}
function hn() {
  if (!$l && Ae !== null) {
    $l = !0;
    var e = 0,
      n = O;
    try {
      var t = Ae;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (al = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), _s(nu, hn), l);
    } finally {
      (O = n), ($l = !1);
    }
  }
  return null;
}
var Wn = [],
  Hn = 0,
  Hr = null,
  Qr = 0,
  ke = [],
  xe = 0,
  Nn = null,
  Ve = 1,
  We = "";
function wn(e, n) {
  (Wn[Hn++] = Qr), (Wn[Hn++] = Hr), (Hr = e), (Qr = n);
}
function na(e, n, t) {
  (ke[xe++] = Ve), (ke[xe++] = We), (ke[xe++] = Nn), (Nn = e);
  var r = Ve;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Re(n) + l;
  if (30 < i) {
    var u = l - (l % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (Ve = (1 << (32 - Re(n) + l)) | (t << l) | r),
      (We = i + e);
  } else (Ve = (1 << i) | (t << l) | r), (We = e);
}
function cu(e) {
  e.return !== null && (wn(e, 1), na(e, 1, 0));
}
function fu(e) {
  for (; e === Hr; )
    (Hr = Wn[--Hn]), (Wn[Hn] = null), (Qr = Wn[--Hn]), (Wn[Hn] = null);
  for (; e === Nn; )
    (Nn = ke[--xe]),
      (ke[xe] = null),
      (We = ke[--xe]),
      (ke[xe] = null),
      (Ve = ke[--xe]),
      (ke[xe] = null);
}
var ye = null,
  he = null,
  $ = !1,
  je = null;
function ta(e, n) {
  var t = Ee(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function ko(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ye = e), (he = on(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ye = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: Ve, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ee(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ye = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if ($) {
    var n = he;
    if (n) {
      var t = n;
      if (!ko(e, n)) {
        if (_i(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ye;
        n && ko(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (_i(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function xo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!$) return xo(e), ($ = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !ki(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (_i(e)) throw (ra(), Error(y(418)));
    for (; n; ) ta(e, n), (n = on(n.nextSibling));
  }
  if ((xo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ye ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function tt() {
  (he = ye = null), ($ = !1);
}
function du(e) {
  je === null ? (je = [e]) : je.push(e);
}
var nd = Xe.ReactCurrentBatchConfig;
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = V({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Kr = vn(null),
  Yr = null,
  Qn = null,
  pu = null;
function mu() {
  pu = Qn = Yr = null;
}
function vu(e) {
  var n = Kr.current;
  U(Kr), (e._currentValue = n);
}
function Ni(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function qn(e, n) {
  (Yr = e),
    (pu = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var n = e._currentValue;
  if (pu !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Qn === null)) {
      if (Yr === null) throw Error(y(308));
      (Qn = e), (Yr.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return n;
}
var xn = null;
function hu(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), hu(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ye(e, r)
  );
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ye(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), hu(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ye(e, t)
  );
}
function _r(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), tu(e, t);
  }
}
function Eo(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var u = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = u) : (i = i.next = u), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Gr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var s = o,
      c = s.next;
    (s.next = null), u === null ? (i = c) : (u.next = c), (u = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (o = v.lastBaseUpdate),
      o !== u &&
        (o === null ? (v.firstBaseUpdate = c) : (o.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (u = 0), (v = c = s = null), (o = i);
    do {
      var p = o.lane,
        g = o.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            k = o;
          switch (((p = n), (g = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          v === null ? ((c = v = g), (s = m)) : (v = v.next = g),
          (u |= p);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (u |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Tn |= u), (e.lanes = u), (e.memoizedState = m);
  }
}
function Co(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ua = new ls.Component().refs;
function zi(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : V({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = cn(e),
      i = He(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = sn(e, i, l)),
      n !== null && (Oe(n, e, l, r), _r(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = cn(e),
      i = He(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = sn(e, i, l)),
      n !== null && (Oe(n, e, l, r), _r(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = cn(e),
      l = He(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = sn(e, l, r)),
      n !== null && (Oe(n, e, r, t), _r(n, e, r));
  },
};
function _o(e, n, t, r, l, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, u)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Bt(t, r) || !Bt(l, i)
      : !0
  );
}
function oa(e, n, t) {
  var r = !1,
    l = pn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = pe(n) ? Pn : ie.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? nt(e, l) : pn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = cl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Po(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function Ti(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ua), yu(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = pe(n) ? Pn : ie.current), (l.context = nt(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (zi(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Gr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (u) {
            var o = l.refs;
            o === ua && (o = l.refs = {}),
              u === null ? delete o[i] : (o[i] = u);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function vr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function No(e) {
  var n = e._init;
  return n(e._payload);
}
function sa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = fn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, a, d, h) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, h) {
    var S = d.type;
    return S === Fn
      ? v(f, a, d.props.children, h, d.key)
      : a !== null &&
        (a.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Je &&
            No(S) === a.type))
      ? ((h = l(a, d.props)), (h.ref = yt(f, a, d)), (h.return = f), h)
      : ((h = jr(d.type, d.key, d.props, null, f.mode, h)),
        (h.ref = yt(f, a, d)),
        (h.return = f),
        h);
  }
  function c(f, a, d, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, h, S) {
    return a === null || a.tag !== 7
      ? ((a = _n(d, f.mode, h, S)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = jr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = yt(f, null, a)),
            (d.return = f),
            d
          );
        case In:
          return (a = Yl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var h = a._init;
          return m(f, h(a._payload), d);
      }
      if (kt(a) || dt(a))
        return (a = _n(a, f.mode, d, null)), (a.return = f), a;
      vr(f, a);
    }
    return null;
  }
  function p(f, a, d, h) {
    var S = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return S !== null ? null : o(f, a, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === S ? s(f, a, d, h) : null;
        case In:
          return d.key === S ? c(f, a, d, h) : null;
        case Je:
          return (S = d._init), p(f, a, S(d._payload), h);
      }
      if (kt(d) || dt(d)) return S !== null ? null : v(f, a, d, h, null);
      vr(f, d);
    }
    return null;
  }
  function g(f, a, d, h, S) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (f = f.get(d) || null), o(a, f, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case lr:
          return (f = f.get(h.key === null ? d : h.key) || null), s(a, f, h, S);
        case In:
          return (f = f.get(h.key === null ? d : h.key) || null), c(a, f, h, S);
        case Je:
          var _ = h._init;
          return g(f, a, d, _(h._payload), S);
      }
      if (kt(h) || dt(h)) return (f = f.get(d) || null), v(a, f, h, S, null);
      vr(a, h);
    }
    return null;
  }
  function w(f, a, d, h) {
    for (
      var S = null, _ = null, P = a, N = (a = 0), D = null;
      P !== null && N < d.length;
      N++
    ) {
      P.index > N ? ((D = P), (P = null)) : (D = P.sibling);
      var L = p(f, P, d[N], h);
      if (L === null) {
        P === null && (P = D);
        break;
      }
      e && P && L.alternate === null && n(f, P),
        (a = i(L, a, N)),
        _ === null ? (S = L) : (_.sibling = L),
        (_ = L),
        (P = D);
    }
    if (N === d.length) return t(f, P), $ && wn(f, N), S;
    if (P === null) {
      for (; N < d.length; N++)
        (P = m(f, d[N], h)),
          P !== null &&
            ((a = i(P, a, N)), _ === null ? (S = P) : (_.sibling = P), (_ = P));
      return $ && wn(f, N), S;
    }
    for (P = r(f, P); N < d.length; N++)
      (D = g(P, f, N, d[N], h)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? N : D.key),
          (a = i(D, a, N)),
          _ === null ? (S = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        P.forEach(function (Ne) {
          return n(f, Ne);
        }),
      $ && wn(f, N),
      S
    );
  }
  function k(f, a, d, h) {
    var S = dt(d);
    if (typeof S != "function") throw Error(y(150));
    if (((d = S.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (S = null), P = a, N = (a = 0), D = null, L = d.next();
      P !== null && !L.done;
      N++, L = d.next()
    ) {
      P.index > N ? ((D = P), (P = null)) : (D = P.sibling);
      var Ne = p(f, P, L.value, h);
      if (Ne === null) {
        P === null && (P = D);
        break;
      }
      e && P && Ne.alternate === null && n(f, P),
        (a = i(Ne, a, N)),
        _ === null ? (S = Ne) : (_.sibling = Ne),
        (_ = Ne),
        (P = D);
    }
    if (L.done) return t(f, P), $ && wn(f, N), S;
    if (P === null) {
      for (; !L.done; N++, L = d.next())
        (L = m(f, L.value, h)),
          L !== null &&
            ((a = i(L, a, N)), _ === null ? (S = L) : (_.sibling = L), (_ = L));
      return $ && wn(f, N), S;
    }
    for (P = r(f, P); !L.done; N++, L = d.next())
      (L = g(P, f, N, L.value, h)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? N : L.key),
          (a = i(L, a, N)),
          _ === null ? (S = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        P.forEach(function (ct) {
          return n(f, ct);
        }),
      $ && wn(f, N),
      S
    );
  }
  function M(f, a, d, h) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Fn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var S = d.key, _ = a; _ !== null; ) {
              if (_.key === S) {
                if (((S = d.type), S === Fn)) {
                  if (_.tag === 7) {
                    t(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Je &&
                    No(S) === _.type)
                ) {
                  t(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = yt(f, _, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Fn
              ? ((a = _n(d.props.children, f.mode, h, d.key)),
                (a.return = f),
                (f = a))
              : ((h = jr(d.type, d.key, d.props, null, f.mode, h)),
                (h.ref = yt(f, a, d)),
                (h.return = f),
                (f = h));
          }
          return u(f);
        case In:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Yl(d, f.mode, h)), (a.return = f), (f = a);
          }
          return u(f);
        case Je:
          return (_ = d._init), M(f, a, _(d._payload), h);
      }
      if (kt(d)) return w(f, a, d, h);
      if (dt(d)) return k(f, a, d, h);
      vr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Kl(d, f.mode, h)), (a.return = f), (f = a)),
        u(f))
      : t(f, a);
  }
  return M;
}
var rt = sa(!0),
  aa = sa(!1),
  er = {},
  $e = vn(er),
  Ht = vn(er),
  Qt = vn(er);
function En(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function gu(e, n) {
  switch ((I(Qt, n), I(Ht, e), I($e, er), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : oi(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = oi(n, e));
  }
  U($e), I($e, n);
}
function lt() {
  U($e), U(Ht), U(Qt);
}
function ca(e) {
  En(Qt.current);
  var n = En($e.current),
    t = oi(n, e.type);
  n !== t && (I(Ht, e), I($e, t));
}
function wu(e) {
  Ht.current === e && (U($e), U(Ht));
}
var B = vn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Bl = [];
function Su() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Pr = Xe.ReactCurrentDispatcher,
  Al = Xe.ReactCurrentBatchConfig,
  zn = 0,
  A = null,
  Y = null,
  Z = null,
  Zr = !1,
  Tt = !1,
  Kt = 0,
  td = 0;
function ne() {
  throw Error(y(321));
}
function ku(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Me(e[t], n[t])) return !1;
  return !0;
}
function xu(e, n, t, r, l, i) {
  if (
    ((zn = i),
    (A = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? ud : od),
    (e = t(r, l)),
    Tt)
  ) {
    i = 0;
    do {
      if (((Tt = !1), (Kt = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Pr.current = sd),
        (e = t(r, l));
    } while (Tt);
  }
  if (
    ((Pr.current = Jr),
    (n = Y !== null && Y.next !== null),
    (zn = 0),
    (Z = Y = A = null),
    (Zr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function Eu() {
  var e = Kt !== 0;
  return (Kt = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Pe() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? A.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = i.next), (i.next = u);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var o = (u = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((zn & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((o = s = m), (u = r)) : (s = s.next = m),
          (A.lanes |= v),
          (Tn |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (u = r) : (s.next = o),
      Me(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = u),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Tn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Wl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = (l = l.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== l);
    Me(i, n.memoizedState) || (fe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function fa() {}
function da(e, n) {
  var t = A,
    r = Pe(),
    l = n(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Cu(va.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Gt(9, ma.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zn & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ma(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), ha(n) && ya(e);
}
function va(e, n, t) {
  return t(function () {
    ha(n) && ya(e);
  });
}
function ha(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Me(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ye(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function zo(e) {
  var n = Ie();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = id.bind(null, A, e)),
    [n.memoizedState, e]
  );
}
function Gt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ga() {
  return Pe().memoizedState;
}
function Nr(e, n, t, r) {
  var l = Ie();
  (A.flags |= e),
    (l.memoizedState = Gt(1 | n, t, void 0, r === void 0 ? null : r));
}
function fl(e, n, t, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var u = Y.memoizedState;
    if (((i = u.destroy), r !== null && ku(r, u.deps))) {
      l.memoizedState = Gt(n, t, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Gt(1 | n, t, i, r));
}
function To(e, n) {
  return Nr(8390656, 8, e, n);
}
function Cu(e, n) {
  return fl(2048, 8, e, n);
}
function wa(e, n) {
  return fl(4, 2, e, n);
}
function Sa(e, n) {
  return fl(4, 4, e, n);
}
function ka(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function xa(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), fl(4, 4, ka.bind(null, n, e), t)
  );
}
function _u() {}
function Ea(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ku(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ku(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return zn & 21
    ? (Me(t, n) || ((t = zs()), (A.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t));
}
function rd(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Al.transition = r);
  }
}
function Pa() {
  return Pe().memoizedState;
}
function ld(e, n, t) {
  var r = cn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Na(e))
  )
    za(n, t);
  else if (((t = la(e, n, t, r)), t !== null)) {
    var l = oe();
    Oe(t, e, r, l), Ta(t, n, r);
  }
}
function id(e, n, t) {
  var r = cn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) za(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var u = n.lastRenderedState,
          o = i(u, t);
        if (((l.hasEagerState = !0), (l.eagerState = o), Me(o, u))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), hu(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = la(e, n, l, r)),
      t !== null && ((l = oe()), Oe(t, e, r, l), Ta(t, n, r));
  }
}
function Na(e) {
  var n = e.alternate;
  return e === A || (n !== null && n === A);
}
function za(e, n) {
  Tt = Zr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ta(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), tu(e, t);
  }
}
var Jr = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: _e,
    useCallback: function (e, n) {
      return (Ie().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: _e,
    useEffect: To,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Nr(4194308, 4, ka.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Nr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Nr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Ie();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Ie();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = ld.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Ie();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: zo,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = zo(!1),
        n = e[0];
      return (e = rd.bind(null, e[1])), (Ie().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = A,
        l = Ie();
      if ($) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(y(349));
        zn & 30 || pa(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        To(va.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gt(9, ma.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Ie(),
        n = J.identifierPrefix;
      if ($) {
        var t = We,
          r = Ve;
        (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Kt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = td++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: _e,
    useCallback: Ea,
    useContext: _e,
    useEffect: Cu,
    useImperativeHandle: xa,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Yt);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var n = Pe();
      return _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Pa,
    unstable_isNewReconciler: !1,
  },
  sd = {
    readContext: _e,
    useCallback: Ea,
    useContext: _e,
    useEffect: Cu,
    useImperativeHandle: xa,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: Wl,
    useRef: ga,
    useState: function () {
      return Wl(Yt);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var n = Pe();
      return Y === null ? (n.memoizedState = e) : _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Pa,
    unstable_isNewReconciler: !1,
  };
function it(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Dc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Hl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Li(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      br || ((br = !0), (Bi = r)), Li(e, n);
    }),
    t
  );
}
function ja(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Li(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Li(e, n),
          typeof r != "function" &&
            (an === null ? (an = new Set([this])) : an.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    t
  );
}
function Lo(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ad();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Ed.bind(null, e, n, t)), n.then(e, e));
}
function jo(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ro(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), sn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var cd = Xe.ReactCurrentOwner,
  fe = !1;
function ue(e, n, t, r) {
  n.child = e === null ? aa(n, null, t, r) : rt(n, e.child, t, r);
}
function Oo(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    qn(n, l),
    (r = xu(e, n, t, r, i, l)),
    (t = Eu()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : ($ && t && cu(n), (n.flags |= 1), ue(e, n, r, l), n.child)
  );
}
function Mo(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Ou(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ra(e, n, i, r, l))
      : ((e = jr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var u = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Bt), t(u, r) && e.ref === n.ref)
    )
      return Ge(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = fn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bt(i, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (n.lanes = e.lanes), Ge(e, n, l);
  }
  return ji(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Yn, ve),
        (ve |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          I(Yn, ve),
          (ve |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        I(Yn, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      I(Yn, ve),
      (ve |= r);
  return ue(e, n, l, t), n.child;
}
function Ma(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function ji(e, n, t, r, l) {
  var i = pe(t) ? Pn : ie.current;
  return (
    (i = nt(n, i)),
    qn(n, l),
    (t = xu(e, n, t, r, i, l)),
    (r = Eu()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : ($ && r && cu(n), (n.flags |= 1), ue(e, n, t, l), n.child)
  );
}
function Do(e, n, t, r, l) {
  if (pe(t)) {
    var i = !0;
    Wr(n);
  } else i = !1;
  if ((qn(n, l), n.stateNode === null))
    zr(e, n), oa(n, t, r), Ti(n, t, r, l), (r = !0);
  else if (e === null) {
    var u = n.stateNode,
      o = n.memoizedProps;
    u.props = o;
    var s = u.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(t) ? Pn : ie.current), (c = nt(n, c)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== r || s !== c) && Po(n, u, r, c)),
      (qe = !1);
    var p = n.memoizedState;
    (u.state = p),
      Gr(n, r, u, l),
      (s = n.memoizedState),
      o !== r || p !== s || de.current || qe
        ? (typeof v == "function" && (zi(n, t, v, r), (s = n.memoizedState)),
          (o = qe || _o(n, t, o, r, p, s, c))
            ? (m ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = c),
          (r = o))
        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (u = n.stateNode),
      ia(e, n),
      (o = n.memoizedProps),
      (c = n.type === n.elementType ? o : Te(n.type, o)),
      (u.props = c),
      (m = n.pendingProps),
      (p = u.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(t) ? Pn : ie.current), (s = nt(n, s)));
    var g = t.getDerivedStateFromProps;
    (v =
      typeof g == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== m || p !== s) && Po(n, u, r, s)),
      (qe = !1),
      (p = n.memoizedState),
      (u.state = p),
      Gr(n, r, u, l);
    var w = n.memoizedState;
    o !== m || p !== w || de.current || qe
      ? (typeof g == "function" && (zi(n, t, g, r), (w = n.memoizedState)),
        (c = qe || _o(n, t, c, r, p, w, s) || !1)
          ? (v ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, s)),
            typeof u.componentDidUpdate == "function" && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = s),
        (r = c))
      : (typeof u.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Ri(e, n, t, r, i, l);
}
function Ri(e, n, t, r, l, i) {
  Ma(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u) return l && So(n, t, !1), Ge(e, n, i);
  (r = n.stateNode), (cd.current = n);
  var o =
    u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && u
      ? ((n.child = rt(n, e.child, null, i)), (n.child = rt(n, null, o, i)))
      : ue(e, n, o, i),
    (n.memoizedState = r.state),
    l && So(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext
    ? wo(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && wo(e, n.context, !1),
    gu(e, n.containerInfo);
}
function Io(e, n, t, r, l) {
  return tt(), du(l), (n.flags |= 256), ue(e, n, t, r), n.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = B.current,
    i = !1,
    u = (n.flags & 128) !== 0,
    o;
  if (
    ((o = u) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(B, l & 1),
    e === null)
  )
    return (
      Pi(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = ml(u, r, 0, null)),
              (e = _n(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Mi(t)),
              (n.memoizedState = Oi),
              e)
            : Pu(n, u))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return fd(e, n, u, r, o, l, t);
  if (i) {
    (i = r.fallback), (u = n.mode), (l = e.child), (o = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = fn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = fn(o, i)) : ((i = _n(i, u, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Mi(t)
          : {
              baseLanes: u.baseLanes | t,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Oi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Pu(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && du(r),
    rt(n, e.child, null, t),
    (e = Pu(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function fd(e, n, t, r, l, i, u) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Hl(Error(y(422)))), hr(e, n, u, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = _n(i, l, u, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && rt(n, e.child, null, u),
        (n.child.memoizedState = Mi(u)),
        (n.memoizedState = Oi),
        i);
  if (!(n.mode & 1)) return hr(e, n, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(y(419))), (r = Hl(i, r, void 0)), hr(e, n, u, r);
  }
  if (((o = (u & e.childLanes) !== 0), fe || o)) {
    if (((r = J), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Oe(r, e, l, -1));
    }
    return Ru(), (r = Hl(Error(y(421)))), hr(e, n, u, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Cd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (he = on(l.nextSibling)),
      (ye = n),
      ($ = !0),
      (je = null),
      e !== null &&
        ((ke[xe++] = Ve),
        (ke[xe++] = We),
        (ke[xe++] = Nn),
        (Ve = e.id),
        (We = e.overflow),
        (Nn = n)),
      (n = Pu(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Fo(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ni(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, n, r.children, t), (r = B.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fo(e, t, n);
        else if (e.tag === 19) Fo(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(B, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Xr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, i);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ge(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = fn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function dd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), tt();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      pe(n.type) && Wr(n);
      break;
    case 4:
      gu(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      I(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(B, B.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ia(e, n, t)
          : (I(B, B.current & 1),
            (e = Ge(e, n, t)),
            e !== null ? e.sibling : null);
      I(B, B.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Oa(e, n, t);
  }
  return Ge(e, n, t);
}
var Ua, Di, $a, Ba;
Ua = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Di = function () {};
$a = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), En($e.current);
    var i = null;
    switch (t) {
      case "input":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ui(e, l)), (r = ui(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    si(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (u in o) o.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ot.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((o = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== o && (s != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (u in o)
              !o.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (t || (t = {}), (t[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                o[u] !== s[u] &&
                (t || (t = {}), (t[u] = s[u]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (o = o ? o.__html : void 0),
              s != null && o !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ot.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  i || o === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ba = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function pd(e, n, t) {
  var r = n.pendingProps;
  switch ((fu(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return pe(n.type) && Vr(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        lt(),
        U(de),
        U(ie),
        Su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), je !== null && (Wi(je), (je = null)))),
        Di(e, n),
        te(n),
        null
      );
    case 5:
      wu(n);
      var l = En(Qt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        $a(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = En($e.current)), mr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Fe] = n), (r[Wt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Et.length; l++) F(Et[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Qu(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Yu(r, i), F("invalid", r);
          }
          si(t, i), (l = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var o = i[u];
              u === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Ot.hasOwnProperty(u) &&
                  o != null &&
                  u === "onScroll" &&
                  F("scroll", r);
            }
          switch (t) {
            case "input":
              ir(r), Ku(r, i, !0);
              break;
            case "textarea":
              ir(r), Gu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ar);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(t, { is: r.is }))
                : ((e = u.createElement(t)),
                  t === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, t)),
            (e[Fe] = n),
            (e[Wt] = r),
            Ua(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((u = ai(t, r)), t)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Et.length; l++) F(Et[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Qu(e, r), (l = ri(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Yu(e, r), (l = ui(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            si(t, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "style"
                  ? hs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Mt(e, s)
                    : typeof s == "number" && Mt(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ot.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && Zi(e, i, s, u));
              }
            switch (t) {
              case "input":
                ir(e), Ku(e, r, !1);
                break;
              case "textarea":
                ir(e), Gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Gn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Ba(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = En(Qt.current)), En($e.current), mr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Fe] = n),
            (i = r.nodeValue !== t) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Fe] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (U(B),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && he !== null && n.mode & 1 && !(n.flags & 128))
          ra(), tt(), (n.flags |= 98560), (i = !1);
        else if (((i = mr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Fe] = n;
          } else
            tt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else je !== null && (Wi(je), (je = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || B.current & 1 ? G === 0 && (G = 3) : Ru())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        lt(), Di(e, n), e === null && At(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return vu(n.type._context), te(n), null;
    case 17:
      return pe(n.type) && Vr(), te(n), null;
    case 19:
      if ((U(B), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) gt(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((u = Xr(e)), u !== null)) {
                for (
                  n.flags |= 128,
                    gt(i, !1),
                    r = u.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return I(B, (B.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > ut &&
            ((n.flags |= 128), (r = !0), gt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(u)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              gt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !$)
            )
              return te(n), null;
          } else
            2 * Q() - i.renderingStartTime > ut &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), gt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((t = i.last),
            t !== null ? (t.sibling = u) : (n.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Q()),
          (n.sibling = null),
          (t = B.current),
          I(B, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        ju(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? ve & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function md(e, n) {
  switch ((fu(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Vr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        lt(),
        U(de),
        U(ie),
        Su(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return wu(n), null;
    case 13:
      if ((U(B), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        tt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return lt(), null;
    case 10:
      return vu(n.type._context), null;
    case 22:
    case 23:
      return ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  re = !1,
  vd = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Kn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        W(e, n, r);
      }
    else t.current = null;
}
function Ii(e, n, t) {
  try {
    t();
  } catch (r) {
    W(e, n, r);
  }
}
var Uo = !1;
function hd(e, n) {
  if (((wi = Ur), (e = Hs()), au(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0,
            o = -1,
            s = -1,
            c = 0,
            v = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (o = u + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = u + r),
                m.nodeType === 3 && (u += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++c === l && (o = u),
                p === i && ++v === r && (s = u),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Si = { focusedElem: e, selectionRange: t }, Ur = !1, E = n; E !== null; )
    if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (E = e);
    else
      for (; E !== null; ) {
        n = E;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    M = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Te(n.type, k),
                      M
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (h) {
          W(n, n.return, h);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (E = e);
          break;
        }
        E = n.return;
      }
  return (w = Uo), (Uo = !1), w;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ii(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Fi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Aa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Aa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Fe], delete n[Wt], delete n[Ei], delete n[qf], delete n[bf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $o(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ui(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ui(e, n, t), e = e.sibling; e !== null; ) Ui(e, n, t), (e = e.sibling);
}
function $i(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, n, t), e = e.sibling; e !== null; ) $i(e, n, t), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; ) Wa(e, n, t), (t = t.sibling);
}
function Wa(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Kn(t, n);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ze(e, n, t),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, t)
              : e.nodeType === 1 && Ul(e, t),
            Ut(e))
          : Ul(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = t.stateNode.containerInfo),
        (Le = !0),
        Ze(e, n, t),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && Ii(t, n, u),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Kn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          W(t, n, o);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ze(e, n, t), (re = r))
        : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Bo(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new vd()),
      n.forEach(function (r) {
        var l = _d.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          u = n,
          o = u;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (q = o.stateNode), (Le = !1);
              break e;
            case 3:
              (q = o.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = o.stateNode.containerInfo), (Le = !0);
              break e;
          }
          o = o.return;
        }
        if (q === null) throw Error(y(160));
        Wa(i, u, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        W(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Ha(n, e), (n = n.sibling);
}
function Ha(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), De(e), r & 4)) {
        try {
          Lt(3, e, e.return), dl(3, e);
        } catch (k) {
          W(e, e.return, k);
        }
        try {
          Lt(5, e, e.return);
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(n, e), De(e), r & 512 && t !== null && Kn(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        De(e),
        r & 512 && t !== null && Kn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mt(l, "");
        } catch (k) {
          W(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          u = t !== null ? t.memoizedProps : i,
          o = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && fs(l, i),
              ai(o, u);
            var c = ai(o, i);
            for (u = 0; u < s.length; u += 2) {
              var v = s[u],
                m = s[u + 1];
              v === "style"
                ? hs(l, m)
                : v === "dangerouslySetInnerHTML"
                ? ms(l, m)
                : v === "children"
                ? Mt(l, m)
                : Zi(l, v, m, c);
            }
            switch (o) {
              case "input":
                li(l, i);
                break;
              case "textarea":
                ds(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Gn(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Gn(l, !!i.multiple, i.defaultValue, !0)
                      : Gn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Wt] = i;
          } catch (k) {
            W(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ut(n.containerInfo);
        } catch (k) {
          W(e, e.return, k);
        }
      break;
    case 4:
      ze(n, e), De(e);
      break;
    case 13:
      ze(n, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Tu = Q())),
        r & 4 && Bo(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), ze(n, e), (re = c)) : ze(n, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (E = e, v = e.child; v !== null; ) {
            for (m = E = v; E !== null; ) {
              switch (((p = E), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lt(4, p, p.return);
                  break;
                case 1:
                  Kn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      W(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Kn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vo(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (E = g)) : Vo(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = m.stateNode),
                      (s = m.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (o.style.display = vs("display", u)));
              } catch (k) {
                W(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (k) {
                W(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), De(e), r & 4 && Bo(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Va(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mt(l, ""), (r.flags &= -33));
          var i = $o(e);
          $i(e, i, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            o = $o(e);
          Ui(e, o, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function yd(e, n, t) {
  (E = e), Qa(e);
}
function Qa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      i = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || yr;
      if (!u) {
        var o = l.alternate,
          s = (o !== null && o.memoizedState !== null) || re;
        o = yr;
        var c = re;
        if (((yr = u), (re = s) && !c))
          for (E = l; E !== null; )
            (u = E),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Wo(l)
                : s !== null
                ? ((s.return = u), (E = s))
                : Wo(l);
        for (; i !== null; ) (E = i), Qa(i), (i = i.sibling);
        (E = l), (yr = o), (re = c);
      }
      Ao(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (E = i)) : Ao(e);
  }
}
function Ao(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Co(n, i, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Co(n, u, t);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (t === null && n.flags & 4) {
                t = o;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Ut(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (n.flags & 512 && Fi(n));
      } catch (p) {
        W(n, n.return, p);
      }
    }
    if (n === e) {
      E = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (E = t);
      break;
    }
    E = n.return;
  }
}
function Vo(e) {
  for (; E !== null; ) {
    var n = E;
    if (n === e) {
      E = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (E = t);
      break;
    }
    E = n.return;
  }
}
function Wo(e) {
  for (; E !== null; ) {
    var n = E;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            W(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(n, l, s);
            }
          }
          var i = n.return;
          try {
            Fi(n);
          } catch (s) {
            W(n, i, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            Fi(n);
          } catch (s) {
            W(n, u, s);
          }
      }
    } catch (s) {
      W(n, n.return, s);
    }
    if (n === e) {
      E = null;
      break;
    }
    var o = n.sibling;
    if (o !== null) {
      (o.return = n.return), (E = o);
      break;
    }
    E = n.return;
  }
}
var gd = Math.ceil,
  qr = Xe.ReactCurrentDispatcher,
  Nu = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  ve = 0,
  Yn = vn(0),
  G = 0,
  Xt = null,
  Tn = 0,
  pl = 0,
  zu = 0,
  jt = null,
  ce = null,
  Tu = 0,
  ut = 1 / 0,
  Be = null,
  br = !1,
  Bi = null,
  an = null,
  gr = !1,
  tn = null,
  el = 0,
  Rt = 0,
  Ai = null,
  Tr = -1,
  Lr = 0;
function oe() {
  return R & 6 ? Q() : Tr !== -1 ? Tr : (Tr = Q());
}
function cn(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : nd.transition !== null
      ? (Lr === 0 && (Lr = zs()), Lr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
        e)
    : 1;
}
function Oe(e, n, t, r) {
  if (50 < Rt) throw ((Rt = 0), (Ai = null), Error(y(185)));
  Jt(e, t, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (pl |= t), G === 4 && en(e, b)),
      me(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((ut = Q() + 500), al && hn()));
}
function me(e, n) {
  var t = e.callbackNode;
  ef(e, n);
  var r = Fr(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Ju(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Ju(t), n === 1))
      e.tag === 0 ? ed(Ho.bind(null, e)) : ea(Ho.bind(null, e)),
        Zf(function () {
          !(R & 6) && hn();
        }),
        (t = null);
    else {
      switch (Ts(r)) {
        case 1:
          t = nu;
          break;
        case 4:
          t = Ps;
          break;
        case 16:
          t = Ir;
          break;
        case 536870912:
          t = Ns;
          break;
        default:
          t = Ir;
      }
      t = ba(t, Ka.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ka(e, n) {
  if (((Tr = -1), (Lr = 0), R & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t) return null;
  var r = Fr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = nl(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var i = Ga();
    (J !== e || b !== n) && ((Be = null), (ut = Q() + 500), Cn(e, n));
    do
      try {
        kd();
        break;
      } catch (o) {
        Ya(e, o);
      }
    while (1);
    mu(),
      (qr.current = i),
      (R = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = G));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = mi(e)), l !== 0 && ((r = l), (n = Vi(e, l)))), n === 1)
    )
      throw ((t = Xt), Cn(e, 0), en(e, r), me(e, Q()), t);
    if (n === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !wd(l) &&
          ((n = nl(e, r)),
          n === 2 && ((i = mi(e)), i !== 0 && ((r = i), (n = Vi(e, i)))),
          n === 1))
      )
        throw ((t = Xt), Cn(e, 0), en(e, r), me(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ce, Be);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((n = Tu + 500 - Q()), 10 < n))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xi(Sn.bind(null, e, ce, Be), n);
            break;
          }
          Sn(e, ce, Be);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Re(r);
            (i = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * gd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xi(Sn.bind(null, e, ce, Be), r);
            break;
          }
          Sn(e, ce, Be);
          break;
        case 5:
          Sn(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function Vi(e, n) {
  var t = jt;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256),
    (e = nl(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Wi(n)),
    e
  );
}
function Wi(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function wd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function en(e, n) {
  for (
    n &= ~zu,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Re(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Ho(e) {
  if (R & 6) throw Error(y(327));
  bn();
  var n = Fr(e, 0);
  if (!(n & 1)) return me(e, Q()), null;
  var t = nl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = mi(e);
    r !== 0 && ((n = r), (t = Vi(e, r)));
  }
  if (t === 1) throw ((t = Xt), Cn(e, 0), en(e, n), me(e, Q()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Sn(e, ce, Be),
    me(e, Q()),
    null
  );
}
function Lu(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((ut = Q() + 500), al && hn());
  }
}
function Ln(e) {
  tn !== null && tn.tag === 0 && !(R & 6) && bn();
  var n = R;
  R |= 1;
  var t = Ce.transition,
    r = O;
  try {
    if (((Ce.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ce.transition = t), (R = n), !(R & 6) && hn();
  }
}
function ju() {
  (ve = Yn.current), U(Yn);
}
function Cn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Xf(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((fu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          lt(), U(de), U(ie), Su();
          break;
        case 5:
          wu(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          vu(r.type._context);
          break;
        case 22:
        case 23:
          ju();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = fn(e.current, null)),
    (b = ve = n),
    (G = 0),
    (Xt = null),
    (zu = pl = Tn = 0),
    (ce = jt = null),
    xn !== null)
  ) {
    for (n = 0; n < xn.length; n++)
      if (((t = xn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = l), (r.next = u);
        }
        t.pending = r;
      }
    xn = null;
  }
  return e;
}
function Ya(e, n) {
  do {
    var t = K;
    try {
      if ((mu(), (Pr.current = Jr), Zr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((zn = 0),
        (Z = Y = A = null),
        (Tt = !1),
        (Kt = 0),
        (Nu.current = null),
        t === null || t.return === null)
      ) {
        (G = 1), (Xt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          u = t.return,
          o = t,
          s = n;
        if (
          ((n = b),
          (o.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = o,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var g = jo(u);
          if (g !== null) {
            (g.flags &= -257),
              Ro(g, u, o, i, n),
              g.mode & 1 && Lo(i, c, n),
              (n = g),
              (s = c);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Lo(i, c, n), Ru();
              break e;
            }
            s = Error(y(426));
          }
        } else if ($ && o.mode & 1) {
          var M = jo(u);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              Ro(M, u, o, i, n),
              du(it(s, o));
            break e;
          }
        }
        (i = s = it(s, o)),
          G !== 4 && (G = 2),
          jt === null ? (jt = [i]) : jt.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = La(i, s, n);
              Eo(i, f);
              break e;
            case 1:
              o = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (an === null || !an.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var h = ja(i, o, n);
                Eo(i, h);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Za(t);
    } catch (S) {
      (n = S), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Ga() {
  var e = qr.current;
  return (qr.current = Jr), e === null ? Jr : e;
}
function Ru() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Tn & 268435455) && !(pl & 268435455)) || en(J, b);
}
function nl(e, n) {
  var t = R;
  R |= 2;
  var r = Ga();
  (J !== e || b !== n) && ((Be = null), Cn(e, n));
  do
    try {
      Sd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (1);
  if ((mu(), (R = t), (qr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function Sd() {
  for (; K !== null; ) Xa(K);
}
function kd() {
  for (; K !== null && !Qc(); ) Xa(K);
}
function Xa(e) {
  var n = qa(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    n === null ? Za(e) : (K = n),
    (Nu.current = null);
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = md(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((t = pd(t, n, ve)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  G === 0 && (G = 5);
}
function Sn(e, n, t) {
  var r = O,
    l = Ce.transition;
  try {
    (Ce.transition = null), (O = 1), xd(e, n, t, r);
  } finally {
    (Ce.transition = l), (O = r);
  }
  return null;
}
function xd(e, n, t, r) {
  do bn();
  while (tn !== null);
  if (R & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (nf(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      gr ||
      ((gr = !0),
      ba(Ir, function () {
        return bn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var u = O;
    O = 1;
    var o = R;
    (R |= 4),
      (Nu.current = null),
      hd(e, t),
      Ha(t, e),
      Vf(Si),
      (Ur = !!wi),
      (Si = wi = null),
      (e.current = t),
      yd(t),
      Kc(),
      (R = o),
      (O = u),
      (Ce.transition = i);
  } else e.current = t;
  if (
    (gr && ((gr = !1), (tn = e), (el = l)),
    (i = e.pendingLanes),
    i === 0 && (an = null),
    Xc(t.stateNode),
    me(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Bi), (Bi = null), e);
  return (
    el & 1 && e.tag !== 0 && bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ai ? Rt++ : ((Rt = 0), (Ai = e))) : (Rt = 0),
    hn(),
    null
  );
}
function bn() {
  if (tn !== null) {
    var e = Ts(el),
      n = Ce.transition,
      t = O;
    try {
      if (((Ce.transition = null), (O = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (el = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null; ) {
          var i = E,
            u = i.child;
          if (E.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var c = o[s];
                for (E = c; E !== null; ) {
                  var v = E;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (E = m);
                  else
                    for (; E !== null; ) {
                      v = E;
                      var p = v.sibling,
                        g = v.return;
                      if ((Aa(v), v === c)) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (E = p);
                        break;
                      }
                      E = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var M = k.sibling;
                    (k.sibling = null), (k = M);
                  } while (k !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (E = u);
          else
            e: for (; E !== null; ) {
              if (((i = E), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (E = f);
                break e;
              }
              E = i.return;
            }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          u = E;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (E = d);
          else
            e: for (u = a; E !== null; ) {
              if (((o = E), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, o);
                  }
                } catch (S) {
                  W(o, o.return, S);
                }
              if (o === u) {
                E = null;
                break e;
              }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (E = h);
                break e;
              }
              E = o.return;
            }
        }
        if (
          ((R = l), hn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (Ce.transition = n);
    }
  }
  return !1;
}
function Qo(e, n, t) {
  (n = it(t, n)),
    (n = La(e, n, 1)),
    (e = sn(e, n, 1)),
    (n = oe()),
    e !== null && (Jt(e, 1, n), me(e, n));
}
function W(e, n, t) {
  if (e.tag === 3) Qo(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Qo(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (an === null || !an.has(r)))
        ) {
          (e = it(t, e)),
            (e = ja(n, e, 1)),
            (n = sn(n, e, 1)),
            (e = oe()),
            n !== null && (Jt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Ed(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Tu)
        ? Cn(e, 0)
        : (zu |= t)),
    me(e, n);
}
function Ja(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ye(e, n)), e !== null && (Jt(e, n, t), me(e, t));
}
function Cd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function _d(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (fe = !1), dd(e, n, t);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), $ && n.flags & 1048576 && na(n, Qr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      zr(e, n), (e = n.pendingProps);
      var l = nt(n, ie.current);
      qn(n, t), (l = xu(null, n, r, e, l, t));
      var i = Eu();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((i = !0), Wr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yu(n),
            (l.updater = cl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ti(n, r, e, t),
            (n = Ri(null, n, r, !0, i, t)))
          : ((n.tag = 0), $ && i && cu(n), ue(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (zr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Nd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = ji(null, n, r, e, t);
            break e;
          case 1:
            n = Do(null, n, r, e, t);
            break e;
          case 11:
            n = Oo(null, n, r, e, t);
            break e;
          case 14:
            n = Mo(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        ji(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Do(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ia(e, n),
          Gr(n, r, null, t);
        var u = n.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = it(Error(y(423)), n)), (n = Io(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = it(Error(y(424)), n)), (n = Io(e, n, r, t, l));
            break e;
          } else
            for (
              he = on(n.stateNode.containerInfo.firstChild),
                ye = n,
                $ = !0,
                je = null,
                t = aa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((tt(), r === l)) {
            n = Ge(e, n, t);
            break e;
          }
          ue(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && Pi(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = l.children),
        ki(r, l) ? (u = null) : i !== null && ki(r, i) && (n.flags |= 32),
        Ma(e, n),
        ue(e, n, u, t),
        n.child
      );
    case 6:
      return e === null && Pi(n), null;
    case 13:
      return Ia(e, n, t);
    case 4:
      return (
        gu(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = rt(n, null, r, t)) : ue(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Oo(e, n, r, l, t)
      );
    case 7:
      return ue(e, n, n.pendingProps, t), n.child;
    case 8:
      return ue(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ue(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (u = l.value),
          I(Kr, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (Me(i.value, u)) {
            if (i.children === l.children && !de.current) {
              n = Ge(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                u = i.child;
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = He(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Ni(i.return, t, n),
                      (o.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(y(341));
                (u.lanes |= t),
                  (o = u.alternate),
                  o !== null && (o.lanes |= t),
                  Ni(u, t, n),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        ue(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        qn(n, t),
        (l = _e(l)),
        (r = r(l)),
        (n.flags |= 1),
        ue(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Te(r, n.pendingProps)),
        (l = Te(r.type, l)),
        Mo(e, n, r, l, t)
      );
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        zr(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Wr(n)) : (e = !1),
        qn(n, t),
        oa(n, r, l),
        Ti(n, r, l, t),
        Ri(null, n, r, !0, e, t)
      );
    case 19:
      return Fa(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ba(e, n) {
  return _s(e, n);
}
function Pd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, n, t, r) {
  return new Pd(e, n, t, r);
}
function Ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nd(e) {
  if (typeof e == "function") return Ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ee(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function jr(e, n, t, r, l, i) {
  var u = 2;
  if (((r = e), typeof e == "function")) Ou(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Fn:
        return _n(t.children, l, i, n);
      case Ji:
        (u = 8), (l |= 8);
        break;
      case bl:
        return (
          (e = Ee(12, t, n, l | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case ei:
        return (e = Ee(13, t, n, l)), (e.elementType = ei), (e.lanes = i), e;
      case ni:
        return (e = Ee(19, t, n, l)), (e.elementType = ni), (e.lanes = i), e;
      case ss:
        return ml(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case us:
              u = 10;
              break e;
            case os:
              u = 9;
              break e;
            case qi:
              u = 11;
              break e;
            case bi:
              u = 14;
              break e;
            case Je:
              (u = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ee(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function _n(e, n, t, r) {
  return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ee(22, e, r, n)),
    (e.elementType = ss),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function zd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mu(e, n, t, r, l, i, u, o, s) {
  return (
    (e = new zd(e, n, t, o, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Ee(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yu(i),
    e
  );
}
function Td(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ec(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return bs(e, t, n);
  }
  return n;
}
function nc(e, n, t, r, l, i, u, o, s) {
  return (
    (e = Mu(t, r, !0, e, l, i, u, o, s)),
    (e.context = ec(null)),
    (t = e.current),
    (r = oe()),
    (l = cn(t)),
    (i = He(r, l)),
    (i.callback = n ?? null),
    sn(t, i, l),
    (e.current.lanes = l),
    Jt(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, n, t, r) {
  var l = n.current,
    i = oe(),
    u = cn(l);
  return (
    (t = ec(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(i, u)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = sn(l, n, u)),
    e !== null && (Oe(e, l, u, i), _r(e, l, u)),
    u
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ko(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Du(e, n) {
  Ko(e, n), (e = e.alternate) && Ko(e, n);
}
function Ld() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Iu(e) {
  this._internalRoot = e;
}
hl.prototype.render = Iu.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  vl(e, n, null, null);
};
hl.prototype.unmount = Iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function () {
      vl(null, e, null, null);
    }),
      (n[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++);
    be.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yo() {}
function jd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = tl(u);
        i.call(c);
      };
    }
    var u = nc(n, r, e, 0, null, !1, !1, "", Yo);
    return (
      (e._reactRootContainer = u),
      (e[Ke] = u.current),
      At(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = tl(s);
      o.call(c);
    };
  }
  var s = Mu(e, 0, !1, null, null, !1, !1, "", Yo);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      vl(n, s, t, r);
    }),
    s
  );
}
function gl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var s = tl(u);
        o.call(s);
      };
    }
    vl(n, u, e, l);
  } else u = jd(t, n, e, l, r);
  return tl(u);
}
Ls = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = xt(n.pendingLanes);
        t !== 0 &&
          (tu(n, t | 1), me(n, Q()), !(R & 6) && ((ut = Q() + 500), hn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Oe(r, e, 1, l);
        }
      }),
        Du(e, 1);
  }
};
ru = function (e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = oe();
      Oe(n, e, 134217728, t);
    }
    Du(e, 134217728);
  }
};
js = function (e) {
  if (e.tag === 13) {
    var n = cn(e),
      t = Ye(e, n);
    if (t !== null) {
      var r = oe();
      Oe(t, e, n, r);
    }
    Du(e, n);
  }
};
Rs = function () {
  return O;
};
Os = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
fi = function (e, n, t) {
  switch (n) {
    case "input":
      if ((li(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            cs(r), li(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, t);
      break;
    case "select":
      (n = t.value), n != null && Gn(e, !!t.multiple, n, !1);
  }
};
ws = Lu;
Ss = Ln;
var Rd = { usingClientEntryPoint: !1, Events: [bt, An, sl, ys, gs, Lu] },
  wt = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: wt.bundleType,
    version: wt.version,
    rendererPackageName: wt.rendererPackageName,
    rendererConfig: wt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Es(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wt.findFiberByHostInstance || Ld,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (ll = wr.inject(Od)), (Ue = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
we.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fu(n)) throw Error(y(200));
  return Td(e, n, null, t);
};
we.createRoot = function (e, n) {
  if (!Fu(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = tc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Mu(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ke] = n.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    new Iu(n)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Es(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Ln(e);
};
we.hydrate = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
  if (!Fu(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    u = tc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
    (n = nc(n, null, e, 1, t ?? null, l, !1, i, u)),
    (e[Ke] = n.current),
    At(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new hl(n);
};
we.render = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Ln(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Lu;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!yl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, n, t, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  n(), (e.exports = we);
})(Tc);
var Go = Zl;
(Xl.createRoot = Go.createRoot), (Xl.hydrateRoot = Go.hydrateRoot);
const Gl = ({ cardNumber: e, setCardNumber: n, cardName: t }) =>
  x.jsxs("div", {
    className: "sciencePointsRange",
    children: [
      x.jsx("label", { htmlFor: t, children: "Nombre de carte" }),
      x.jsx("img", { src: `src\\assets\\${t}.png`, alt: t }),
      x.jsx("output", { htmlFor: t, children: e }),
      x.jsx("input", {
        type: "range",
        name: t,
        id: "",
        value: e,
        onChange: (r) => n(+r.target.value),
        min: 0,
        max: 4,
      }),
    ],
  });
function Md(e, n, t, r, l) {
  let i = [e, n, t];
  (i = i.sort()),
    r && l
      ? i[0] === i[1] - 1 && i[0] === i[2] - 2
        ? (++i[0], ++i[2])
        : i[0] === i[1] && i[0] === i[2] - 1
        ? (++i[0], ++i[1])
        : (i[0] === 0 && i[2] === 4) || i[2] - i[1] >= 2
        ? (i[2] += 2)
        : (i[0] += 2)
      : (r || l) && (i[0] == i[1] || i[2] === 4 ? (i[2] += 1) : (i[0] += 1)),
    (i = i.sort());
  let u = 7 * i[0];
  return i[0] ** 2 + i[1] ** 2 + i[2] ** 2 + u;
}
const Dd = ({
    player: e,
    setVisible: n,
    setIsBabyloneBuilt: t,
    IsBabyloneBuilt: r,
    updatePlayer: l,
    hasScienceGuild: i,
    setHasScienceGuild: u,
  }) => {
    const [o, s] = le.useState(e.scienceCards.tablet),
      [c, v] = le.useState(e.scienceCards.wheel),
      [m, p] = le.useState(e.scienceCards.compass),
      [g, w] = le.useState(e.scienceCards.wonderBonus),
      [k, M] = le.useState(e.scienceCards.guildBonus),
      f = () => {
        n(!1);
      },
      a = (S) => {
        w(!!S);
      },
      d = (S) => {
        M(!!S);
      },
      h = (S, _, P, N, D) => {
        l({
          field: "scienceCards",
          value: {
            wheel: _,
            tablet: S,
            compass: P,
            wonderBonus: N,
            guildBonus: D,
          },
        }),
          l({ field: "sciencePoints", value: Md(S, _, P, N, D) }),
          n(!1),
          (N || (r && e.scienceCards.wonderBonus)) && t(N),
          (D || (i && e.scienceCards.guildBonus)) && u(D);
      };
    return x.jsx("div", {
      id: "scienceWindow",
      children: x.jsxs("div", {
        id: "windowContent",
        children: [
          x.jsxs("h1", {
            children: ["Calculateur de points Sciences pour ", e.playerName],
          }),
          x.jsxs("div", {
            children: [
              x.jsx(Gl, {
                cardNumber: o,
                setCardNumber: s,
                cardName: "Tablette",
              }),
              x.jsx(Gl, { cardNumber: c, setCardNumber: v, cardName: "Roue" }),
              x.jsx(Gl, {
                cardNumber: m,
                setCardNumber: p,
                cardName: "Compas",
              }),
            ],
          }),
          x.jsxs("div", {
            className: "boni",
            children: [
              x.jsx("label", {
                htmlFor: "wonderBonus",
                children: "Babylone construite ?",
              }),
              x.jsx("input", {
                type: "checkbox",
                name: "wonderBonus",
                id: "",
                checked: g,
                disabled: !!(r && !e.scienceCards.wonderBonus),
                onChange: (S) => a(S.target.checked),
              }),
              x.jsx("br", {}),
              x.jsx("label", {
                htmlFor: "guildBonus",
                children: "Guilde des scientifiques ?",
              }),
              x.jsx("input", {
                type: "checkbox",
                name: "guildBonus",
                id: "",
                checked: k,
                disabled: !!(i && !e.scienceCards.guildBonus),
                onChange: (S) => d(S.target.checked),
              }),
            ],
          }),
          x.jsxs("div", {
            className: "buttons",
            children: [
              x.jsx("button", { onClick: () => f(), children: "Cancel" }),
              x.jsx("button", {
                onClick: () => h(o, c, m, g, k),
                children: "Confirm",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Mn = ({ setTest: e, index: n }) => {
    const t = le.useRef(0),
      r = (i) => {
        const u = i.currentTarget.nextSibling;
        ((u.name === "militaryPoints" && +u.value > -6) || +u.value > 0) &&
          (e({ field: u.name, value: +u.value - 1 }, n),
          (t.current = setInterval(() => {
            ((u.name === "militaryPoints" && +u.value > -6) || +u.value > 0) &&
              e({ field: u.name, value: +u.value - 1 }, n);
          }, 150)));
      };
    function l() {
      clearInterval(t.current);
    }
    return x.jsx("button", {
      onMouseDown: r,
      onMouseUp: l,
      className: "inputButtons minus",
      children: "-",
    });
  },
  Dn = ({ setTest: e, index: n }) => {
    const t = le.useRef(0),
      r = (i) => {
        const u = i.target.previousSibling;
        u.name === "militaryPoints"
          ? u.value < 18 &&
            (e({ field: u.name, value: +u.value + 1 }, n),
            (t.current = setInterval(() => {
              u.name === "militaryPoints" &&
                u.value < 18 &&
                e({ field: u.name, value: +u.value + 1 }, n);
            }, 150)))
          : (e({ field: u.name, value: +u.value + 1 }, n),
            (t.current = setInterval(
              () => e({ field: u.name, value: +u.value + 1 }, n),
              150
            )));
      };
    function l() {
      clearInterval(t.current);
    }
    return x.jsx("button", {
      onMouseDown: r,
      onMouseUp: l,
      className: "inputButtons plus",
      children: "+",
    });
  },
  Id = ({
    player: e,
    setIsBabyloneBuilt: n,
    IsBabyloneBuilt: t,
    hasScienceGuild: r,
    setHasScienceGuild: l,
    updatePlayer: i,
  }) => {
    const [u, o] = le.useState(!1);
    function s() {
      o(!0);
    }
    return x.jsxs(x.Fragment, {
      children: [
        x.jsxs("div", {
          className: "playerRow",
          children: [
            x.jsx("div", {
              children: x.jsx("input", {
                type: "text",
                className: "playerName",
                name: "playerName",
                placeholder: "Nom du joueur",
                onChange: (c) => {
                  i({ field: c.target.name, value: c.target.value });
                },
              }),
            }),
            x.jsxs("div", {
              className: "militaryPoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "militaryPoints",
                  name: "militaryPoints",
                  value: e.militaryPoints,
                  readOnly: !0,
                  min: -6,
                  max: 18,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsxs("div", {
              className: "coinPoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "coinPoints",
                  name: "coinPoints",
                  value: e.coinPoints,
                  readOnly: !0,
                  min: 0,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsxs("div", {
              className: "wonderPoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "wonderPoints",
                  name: "wonderPoints",
                  value: e.wonderPoints,
                  readOnly: !0,
                  min: 0,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsxs("div", {
              className: "culturePoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "culturePoints",
                  name: "culturePoints",
                  value: e.culturePoints,
                  readOnly: !0,
                  min: 0,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsxs("div", {
              className: "tradingPoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "tradingPoints",
                  name: "tradingPoints",
                  value: e.tradingPoints,
                  readOnly: !0,
                  min: 0,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsxs("div", {
              className: "input guildPoints",
              children: [
                x.jsx(Mn, { setTest: i, index: e.id }),
                x.jsx("input", {
                  type: "number",
                  className: "guildPoints",
                  name: "guildPoints",
                  value: e.guildPoints,
                  readOnly: !0,
                  min: 0,
                }),
                x.jsx(Dn, { setTest: i, index: e.id }),
              ],
            }),
            x.jsx("div", {
              className: "sciencePoints",
              children: x.jsx("input", {
                type: "number",
                className: "sciencePoints",
                onClick: () => s(),
                readOnly: !0,
                min: 0,
                value: e.sciencePoints,
              }),
            }),
            x.jsx("div", {
              children: x.jsx("input", {
                type: "number",
                className: "score",
                readOnly: !0,
                value:
                  e.tradingPoints +
                  e.culturePoints +
                  e.wonderPoints +
                  e.coinPoints +
                  e.militaryPoints +
                  e.sciencePoints +
                  e.guildPoints,
              }),
            }),
          ],
        }),
        x.jsx("div", {
          children:
            u &&
            x.jsx(Dd, {
              player: e,
              updatePlayer: i,
              setVisible: o,
              setIsBabyloneBuilt: n,
              IsBabyloneBuilt: t,
              hasScienceGuild: r,
              setHasScienceGuild: l,
            }),
        }),
      ],
    });
  },
  Rr = (e) => ({
    playerName: "",
    militaryPoints: 0,
    coinPoints: 0,
    wonderPoints: 0,
    tradingPoints: 0,
    culturePoints: 0,
    guildPoints: 0,
    sciencePoints: 0,
    scienceCards: {
      tablet: 0,
      wheel: 0,
      compass: 0,
      wonderBonus: !1,
      guildBonus: !1,
    },
    score: 0,
    id: e,
  }),
  Fd = ({ setPlayers: e, players: n }) =>
    x.jsx("button", {
      onClick: () => e([...n, Rr(n.length + 1)]),
      disabled: !(n.length < 7),
      children: "Ajouter un joueur",
    }),
  Ud = ({ players: e, setPlayers: n }) =>
    x.jsx("button", {
      onClick: () => n(e.slice(0, e.length - 1)),
      disabled: !(e.length > 3),
      children: "Supprimer un joueur",
    });
function $d() {
  const e = [Rr(1), Rr(2), Rr(3)],
    [n, t] = le.useState(e),
    [r, l] = le.useState(!1),
    [i, u] = le.useState(!1),
    o = [
      "Player Name",
      "Military",
      "Coins",
      "Wonder",
      "Culture",
      "Trading",
      "Guild",
      "Science",
      "Score",
    ],
    s = (v) =>
      function (p) {
        t((g) => {
          let w = g[v];
          w = { ...w, [p.field]: p.value };
          let k = [...n];
          return (k[v] = w), k;
        });
      };
  function c() {
    let v = [];
    n.map((m) => v.push(m)),
      v.sort((m, p) => p.score - m.score),
      console.log(v, n),
      alert(`Vainqueur ${v[0].playerName} avec ${v[0].score} points`);
  }
  return x.jsxs("div", {
    className: "App",
    children: [
      x.jsx("h1", { children: "7WONDERS SCOREBOARD" }),
      x.jsx("div", {
        className: "header",
        children: o.map((v, m) =>
          x.jsx("div", { className: "columnTitle", children: v }, m)
        ),
      }),
      n.map((v, m) =>
        x.jsx(
          Id,
          {
            player: v,
            IsBabyloneBuilt: r,
            setIsBabyloneBuilt: l,
            hasScienceGuild: i,
            setHasScienceGuild: u,
            updatePlayer: s(m),
          },
          v.id
        )
      ),
      x.jsxs("div", {
        className: "buttons",
        children: [
          x.jsx(Fd, { setPlayers: t, players: n }),
          x.jsx(Ud, { setPlayers: t, players: n }),
          x.jsx("button", { onClick: () => c(), children: "Vainqueur ?" }),
        ],
      }),
    ],
  });
}
Xl.createRoot(document.getElementById("root")).render(
  x.jsx(xc.StrictMode, { children: x.jsx($d, {}) })
);
