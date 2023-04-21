import { breakpoints as breakpoints$1, compose, display, flexbox, palette, positions, sizing, spacing, typography, borders, shadows } from '@material-ui/system';
import r, { useRef, useDebugValue, useContext, createElement } from 'react';
import { darken, lighten, ButtonBase, Typography as Typography$1 } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = requireReactIs_production_min();
} else {
  reactIs$1.exports = requireReactIs_development();
}

var reactIsExports = reactIs$1.exports;

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs = reactIsExports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var m = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjs);

function v(){return (v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var y=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIsExports.typeOf(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&(void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV)),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e);},M="style["+N+'][data-styled-version="5.3.9"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},Y=function(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.9");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=v({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return !1}return !0}var re=te("5.3.9"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=r.createContext();ce.Consumer;var le=r.createContext(),de=(le.Consumer,new X),he=ae();function pe(){return useContext(ce)||de}function fe(){return useContext(le)||he}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return "";if(_(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIsExports.isElement(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(y(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(y(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},useRef(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}finally{console.error=r;}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t;}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&ze(e,i[a],a);}return e}var Me=r.createContext();Me.Consumer;var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.9"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Oe(t,useContext(Me),a)||w,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,createElement(_,C)}(C,e,t,P)};return O.displayName=y,(C=r.forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=y,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,v({},o,{attrs:N,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Pe(y,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(y,g)),Object.defineProperty(C,"toString",{value:function(){return "."+C.styledComponentId}}),i&&m(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIsExports.isValidElementType(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);var styled = qe;

var breakpointsFn = breakpoints$1(compose(display, flexbox, palette, positions, sizing, spacing, typography));
var Box = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography, breakpointsFn);
var templateObject_1$7;

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

var deepMerge = /*@__PURE__*/getDefaultExportFromCjs(cjs);

var _a, _b, _c;
var breakpoints = createBreakpoints({});
var baseMuiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff933e',
            main: '#E86202',
            dark: '#ae3200',
        },
        secondary: {
            light: '#9CBA6C',
            main: '#537124',
            dark: '#374C19',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#3C4340',
            secondary: '#686D6B',
            disabled: '#F0F0F0',
        },
    },
    typography: {
        fontFamily: '"Poppins", Helvetica, Arial, Sans-Serif',
        fontSize: 16,
        htmlFontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: (_a = {
                fontSize: '70px',
                fontWeight: 700,
                lineHeight: 1.09
            },
            _a[breakpoints.down('xs')] = {
                fontSize: '46px',
            },
            _a),
        h2: (_b = {
                fontSize: '48px',
                fontWeight: 700
            },
            _b[breakpoints.down('xs')] = {
                fontSize: '40px',
            },
            _b),
        h3: (_c = {
                fontSize: '36px',
                fontWeight: 600
            },
            _c[breakpoints.down('xs')] = {
                fontSize: '32px',
            },
            _c),
        h4: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h5: {
            fontSize: '18px',
            fontWeight: 600,
        },
        h6: {
            fontSize: '16px',
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: '24px',
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: '20px',
            fontWeight: 400,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.68,
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.68,
        },
        overline: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#686D6B',
            lineHeight: 1.68,
            textTransform: 'none',
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '.4px',
        },
    },
    props: {
        MuiButtonBase: {
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
});
var extendedTheme = {
    typography: {
        fontWeightSlab: 900,
        fontFamilySlab: '"Playfair Display", Helvetica, Arial, Sans-Serif',
        label: {
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: '0.4px',
        },
    },
    colors: {
        periglacialBlue: '#DDE3D3',
    },
    navbar: {
        height: '65px',
    },
};
var theme = deepMerge(baseMuiTheme, extendedTheme);

var colors = {
    primary: {
        fill: theme.palette.primary.main,
    },
    secondary: {
        fill: '#3C4340',
    },
    tertiary: {
        fill: '#F0F0F0',
        text: '#3C4340',
    },
};
var CustomButton = function (_a) {
    _a.rounded; _a.outlined; var restProps = __rest(_a, ["rounded", "outlined"]);
    return r.createElement(ButtonBase, __assign({}, restProps));
};
var Button = styled(CustomButton)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 600;\n  font-family: ", ";\n  text-decoration: none;\n  transition-duration: ", "ms;\n  transition-timing-function: ", ";\n  color: ", ";\n  white-space: nowrap;\n  display: inline-flex;\n  vertical-align: middle;\n  line-height: normal;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n\n  &:disabled {\n    opacity: 0.35;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 600;\n  font-family: ", ";\n  text-decoration: none;\n  transition-duration: ", "ms;\n  transition-timing-function: ", ";\n  color: ", ";\n  white-space: nowrap;\n  display: inline-flex;\n  vertical-align: middle;\n  line-height: normal;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n\n  &:disabled {\n    opacity: 0.35;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.transitions.duration.short; }, function (props) {
    return props.theme.transitions.easing.sharp;
}, function (props) { return props.theme.palette.common.white; }, function (props) { return VARIANTS[props.variant || 'primary']; }, function (props) { return SIZES[props.size || 'md']; }, function (props) { return props.rounded && ROUNDED; }, function (props) { return props.outlined && OUTLINED[props.variant || 'primary']; }, function (props) { return props.block && BLOCK; }, function (props) { return props.blockXS && BLOCK_XS; });
var VARIANTS = {
    primary: Ae(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n    background-color: ", ";\n    transition-property: background-color, color;\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    transition-property: background-color, color;\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.primary.fill, colors.primary.fill, darken(colors.primary.fill, 0.1), darken(colors.primary.fill, 0.1)),
    secondary: Ae(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.secondary.fill, colors.secondary.fill, darken(colors.secondary.fill, 0.1), darken(colors.secondary.fill, 0.1)),
    tertiary: Ae(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.tertiary.fill, colors.tertiary.fill, colors.tertiary.text, darken(colors.tertiary.fill, 0.1), darken(colors.tertiary.fill, 0.1)),
};
var SIZES = {
    md: Ae(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 14px;\n    padding: 8px 24px;\n  "], ["\n    font-size: 14px;\n    padding: 8px 24px;\n  "]))),
    lg: Ae(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: ", "px;\n    padding: 12px 24px;\n  "], ["\n    font-size: ", "px;\n    padding: 12px 24px;\n  "])), function (props) { return props.theme.typography.fontSize; }),
};
var ROUNDED = Ae(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-radius: 500px;\n"], ["\n  border-radius: 500px;\n"])));
var OUTLINED = {
    primary: Ae(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.primary.fill, darken(colors.primary.fill, 0.1), lighten(colors.primary.fill, 0.95), darken(colors.primary.fill, 0.1)),
    secondary: Ae(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.secondary.fill, darken(colors.secondary.fill, 0.1), lighten(colors.secondary.fill, 0.95), darken(colors.secondary.fill, 0.1)),
    tertiary: '',
};
var BLOCK = Ae(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var BLOCK_XS = Ae(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", " {\n    width: 100%;\n  }\n"], ["\n  ", " {\n    width: 100%;\n  }\n"])), function (props) { return props.theme.breakpoints.down('xs'); });
var templateObject_1$6, templateObject_2$5, templateObject_3$2, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

var breakpointSpacing = breakpoints$1(compose(spacing, typography));
var CustomTypography = function (_a) {
    _a.slab; var restProps = __rest(_a, ["slab"]);
    return r.createElement(Typography$1, __assign({}, restProps));
};
var Typography = styled(CustomTypography)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), spacing, typography, breakpointSpacing, function (_a) {
    var slab = _a.slab;
    return slab && slabStyles;
});
var slabStyles = Ae(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"], ["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.fontFamilySlab;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.fontWeightSlab;
});
var templateObject_1$5, templateObject_2$4;

var FormControl = function (_a) {
    var error = _a.error, disabled = _a.disabled, required = _a.required, children = _a.children;
    var childrenWithProps = r.Children.map(children, function (child) {
        if (r.isValidElement(child)) {
            return r.cloneElement(child, { error: error, disabled: disabled, required: required });
        }
        return child;
    });
    var classes = ['hc-form-control'];
    if (disabled) {
        classes.push('hc-form-control--disabled');
    }
    if (error) {
        classes.push('hc-form-control--error');
    }
    if (required) {
        classes.push('hc-form-control--required');
    }
    return (r.createElement(FormWrapper, { className: classes.join(' ') }, childrenWithProps));
};
var FormWrapper = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), function (props) { return props.theme.spacing(2); });
var templateObject_1$4;

var FormHelperText = function (_a) {
    var children = _a.children, restProps = __rest(_a, ["children"]);
    return (r.createElement(StyledTypography, __assign({ variant: "caption" }, restProps), children));
};
var StyledTypography = styled(Typography)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"], ["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var error = _a.error;
    return error && Ae(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && Ae(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, spacing);
var templateObject_1$3, templateObject_2$3, templateObject_3$1;

var Input$1 = styled.input(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.typography.body1.fontWeight; }, function (props) { return props.theme.typography.body1.fontSize; }, function (props) { return props.theme.typography.body1.lineHeight; }, function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[600]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[200]; }, function (_a) {
    var error = _a.error;
    return error && Ae(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
});
var templateObject_1$2, templateObject_2$2;

var lib=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=r;},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i);}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n);}();},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,f=s.Symbol,d=f?f.prototype:void 0,p=d?d.toString:void 0;function h(e){if("string"==typeof e)return e;if(y(e))return p?p.call(e):"";var t=e+"";return "0"==t&&1/e==-1/0?"-0":t}function m(e){var t=typeof e;return !!e&&("object"==t||"function"==t)}function y(e){return "symbol"==typeof e||function(e){return !!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}function b(e){return e?(e=function(e){if("number"==typeof e)return e;if(y(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var u=a.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}e.exports=function(e,t,r){var n,a,o,i;return e=null==(n=e)?"":h(n),a=function(e){var t=b(e),r=t%1;return t==t?r?t-r:t:0}(r),o=0,i=e.length,a==a&&(void 0!==i&&(a=a<=i?a:i),void 0!==o&&(a=a>=o?a:o)),r=a,t=h(t),e.slice(r,r+t.length)==t};}).call(this,r(3));},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")();}catch(e){"object"==typeof window&&(r=window);}e.exports=r;},function(e,t,r){(function(t){var r=/^\[object .+?Constructor\]$/,n="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();var i,u=Array.prototype,c=Function.prototype,s=Object.prototype,l=o["__core-js_shared__"],f=(i=/[^.]+$/.exec(l&&l.keys&&l.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",d=c.toString,p=s.hasOwnProperty,h=s.toString,m=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=u.splice,b=x(o,"Map"),g=x(Object,"create");function v(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function w(e,t){for(var r,n,a=e.length;a--;)if((r=e[a][0])===(n=t)||r!=r&&n!=n)return a;return -1}function S(e){return !(!O(e)||(t=e,f&&f in t))&&(function(e){var t=O(e)?h.call(e):"";return "[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"");}catch(e){}return t}(e)?m:r).test(function(e){if(null!=e){try{return d.call(e)}catch(e){}try{return e+""}catch(e){}}return ""}(e));var t;}function j(e,t){var r,n,a=e.__data__;return ("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function x(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return S(r)?r:void 0}function N(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i),i};return r.cache=new(N.Cache||_),r}function O(e){var t=typeof e;return !!e&&("object"==t||"function"==t)}v.prototype.clear=function(){this.__data__=g?g(null):{};},v.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},v.prototype.get=function(e){var t=this.__data__;if(g){var r=t[e];return "__lodash_hash_undefined__"===r?void 0:r}return p.call(t,e)?t[e]:void 0},v.prototype.has=function(e){var t=this.__data__;return g?void 0!==t[e]:p.call(t,e)},v.prototype.set=function(e,t){return this.__data__[e]=g&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[];},C.prototype.delete=function(e){var t=this.__data__,r=w(t,e);return !(r<0)&&(r==t.length-1?t.pop():y.call(t,r,1),!0)},C.prototype.get=function(e){var t=this.__data__,r=w(t,e);return r<0?void 0:t[r][1]},C.prototype.has=function(e){return w(this.__data__,e)>-1},C.prototype.set=function(e,t){var r=this.__data__,n=w(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},_.prototype.clear=function(){this.__data__={hash:new v,map:new(b||C),string:new v};},_.prototype.delete=function(e){return j(this,e).delete(e)},_.prototype.get=function(e){return j(this,e).get(e)},_.prototype.has=function(e){return j(this,e).has(e)},_.prototype.set=function(e,t){return j(this,e).set(e,t),this},N.Cache=_,e.exports=N;}).call(this,r(3));},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return s.Date.now()};function h(e){var t=typeof e;return !!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return "symbol"==typeof e||function(e){return !!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var u=a.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var n,a,o,i,u,c,s=0,l=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=a;return n=a=void 0,s=t,i=e.apply(o,r)}function v(e){return s=e,u=setTimeout(_,t),l?g(e):i}function C(e){var r=e-c;return void 0===c||r>=t||r<0||y&&e-s>=o}function _(){var e=p();if(C(e))return w(e);u=setTimeout(_,function(e){var r=t-(e-c);return y?d(r,o-(e-s)):r}(e));}function w(e){return u=void 0,b&&n?g(e):(n=a=void 0,i)}function S(){var e=p(),r=C(e);if(n=arguments,a=this,c=e,r){if(void 0===u)return v(c);if(y)return u=setTimeout(_,t),g(c)}return void 0===u&&(u=setTimeout(_,t)),i}return t=m(t)||0,h(r)&&(l=!!r.leading,o=(y="maxWait"in r)?f(m(r.maxWait)||0,t):o,b="trailing"in r?!!r.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=c=a=u=void 0;},S.flush=function(){return void 0===u?i:w(p())},S};}).call(this,r(3));},function(e,t,r){(function(e,r){var n="[object Arguments]",a="[object Map]",o="[object Object]",i="[object Set]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,s=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h[n]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h[a]=h["[object Number]"]=h[o]=h["[object RegExp]"]=h[i]=h["[object String]"]=h["[object WeakMap]"]=!1;var m="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),g=t&&!t.nodeType&&t,v=g&&"object"==typeof r&&r&&!r.nodeType&&r,C=v&&v.exports===g&&m.process,_=function(){try{return C&&C.binding("util")}catch(e){}}(),w=_&&_.isTypedArray;function S(e,t,r,n){var a=-1,o=e?e.length:0;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r}function j(e,t){for(var r=-1,n=e?e.length:0;++r<n;)if(t(e[r],r,e))return !0;return !1}function x(e,t,r,n,a){return a(e,(function(e,a,o){r=n?(n=!1,e):t(r,e,a,o);})),r}function N(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"");}catch(e){}return t}function O(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e];})),r}function k(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e;})),r}var E,T,I,A=Array.prototype,D=Function.prototype,P=Object.prototype,F=b["__core-js_shared__"],M=(E=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",R=D.toString,L=P.hasOwnProperty,z=P.toString,B=RegExp("^"+R.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=b.Symbol,$=b.Uint8Array,V=P.propertyIsEnumerable,K=A.splice,U=(T=Object.keys,I=Object,function(e){return T(I(e))}),q=Ne(b,"DataView"),H=Ne(b,"Map"),W=Ne(b,"Promise"),J=Ne(b,"Set"),Z=Ne(b,"WeakMap"),Q=Ne(Object,"create"),Y=Pe(q),X=Pe(H),ee=Pe(W),te=Pe(J),re=Pe(Z),ne=G?G.prototype:void 0,ae=ne?ne.valueOf:void 0,oe=ne?ne.toString:void 0;function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function ue(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function ce(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1]);}}function se(e){var t=-1,r=e?e.length:0;for(this.__data__=new ce;++t<r;)this.add(e[t]);}function le(e){this.__data__=new ue(e);}function fe(e,t){var r=Le(e)||Re(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,a=!!n;for(var o in e)!t&&!L.call(e,o)||a&&("length"==o||ke(o,n))||r.push(o);return r}function de(e,t){for(var r=e.length;r--;)if(Me(e[r][0],t))return r;return -1}ie.prototype.clear=function(){this.__data__=Q?Q(null):{};},ie.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ie.prototype.get=function(e){var t=this.__data__;if(Q){var r=t[e];return "__lodash_hash_undefined__"===r?void 0:r}return L.call(t,e)?t[e]:void 0},ie.prototype.has=function(e){var t=this.__data__;return Q?void 0!==t[e]:L.call(t,e)},ie.prototype.set=function(e,t){return this.__data__[e]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},ue.prototype.clear=function(){this.__data__=[];},ue.prototype.delete=function(e){var t=this.__data__,r=de(t,e);return !(r<0)&&(r==t.length-1?t.pop():K.call(t,r,1),!0)},ue.prototype.get=function(e){var t=this.__data__,r=de(t,e);return r<0?void 0:t[r][1]},ue.prototype.has=function(e){return de(this.__data__,e)>-1},ue.prototype.set=function(e,t){var r=this.__data__,n=de(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ce.prototype.clear=function(){this.__data__={hash:new ie,map:new(H||ue),string:new ie};},ce.prototype.delete=function(e){return xe(this,e).delete(e)},ce.prototype.get=function(e){return xe(this,e).get(e)},ce.prototype.has=function(e){return xe(this,e).has(e)},ce.prototype.set=function(e,t){return xe(this,e).set(e,t),this},se.prototype.add=se.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},se.prototype.has=function(e){return this.__data__.has(e)},le.prototype.clear=function(){this.__data__=new ue;},le.prototype.delete=function(e){return this.__data__.delete(e)},le.prototype.get=function(e){return this.__data__.get(e)},le.prototype.has=function(e){return this.__data__.has(e)},le.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ue){var n=r.__data__;if(!H||n.length<199)return n.push([e,t]),this;r=this.__data__=new ce(n);}return r.set(e,t),this};var pe,me=(pe=function(e,t){return e&&ye(e,t,qe)},function(e,t){if(null==e)return e;if(!ze(e))return pe(e,t);for(var r=e.length,n=-1,a=Object(e);(++n<r)&&!1!==t(a[n],n,a););return e}),ye=function(e){return function(t,r,n){for(var a=-1,o=Object(t),i=n(t),u=i.length;u--;){var c=i[e?u:++a];if(!1===r(o[c],c,o))break}return t}}();function be(e,t){for(var r=0,n=(t=Ee(t,e)?[t]:Se(t)).length;null!=e&&r<n;)e=e[De(t[r++])];return r&&r==n?e:void 0}function ge(e,t){return null!=e&&t in Object(e)}function ve(e,t,r,u,c){return e===t||(null==e||null==t||!$e(e)&&!Ve(t)?e!=e&&t!=t:function(e,t,r,u,c,s){var l=Le(e),f=Le(t),d="[object Array]",p="[object Array]";l||(d=(d=Oe(e))==n?o:d);f||(p=(p=Oe(t))==n?o:p);var h=d==o&&!N(e),m=p==o&&!N(t),y=d==p;if(y&&!h)return s||(s=new le),l||Ue(e)?je(e,t,r,u,c,s):function(e,t,r,n,o,u,c){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return !1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return !(e.byteLength!=t.byteLength||!n(new $(e),new $(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Me(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case a:var s=O;case i:var l=2&u;if(s||(s=k),e.size!=t.size&&!l)return !1;var f=c.get(e);if(f)return f==t;u|=1,c.set(e,t);var d=je(s(e),s(t),n,o,u,c);return c.delete(e),d;case"[object Symbol]":if(ae)return ae.call(e)==ae.call(t)}return !1}(e,t,d,r,u,c,s);if(!(2&c)){var b=h&&L.call(e,"__wrapped__"),g=m&&L.call(t,"__wrapped__");if(b||g){var v=b?e.value():e,C=g?t.value():t;return s||(s=new le),r(v,C,u,c,s)}}if(!y)return !1;return s||(s=new le),function(e,t,r,n,a,o){var i=2&a,u=qe(e),c=u.length,s=qe(t).length;if(c!=s&&!i)return !1;var l=c;for(;l--;){var f=u[l];if(!(i?f in t:L.call(t,f)))return !1}var d=o.get(e);if(d&&o.get(t))return d==t;var p=!0;o.set(e,t),o.set(t,e);var h=i;for(;++l<c;){f=u[l];var m=e[f],y=t[f];if(n)var b=i?n(y,m,f,t,e,o):n(m,y,f,e,t,o);if(!(void 0===b?m===y||r(m,y,n,a,o):b)){p=!1;break}h||(h="constructor"==f);}if(p&&!h){var g=e.constructor,v=t.constructor;g==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof g&&g instanceof g&&"function"==typeof v&&v instanceof v||(p=!1);}return o.delete(e),o.delete(t),p}(e,t,r,u,c,s)}(e,t,ve,r,u,c))}function Ce(e){return !(!$e(e)||function(e){return !!M&&M in e}(e))&&(Be(e)||N(e)?B:d).test(Pe(e))}function _e(e){return "function"==typeof e?e:null==e?He:"object"==typeof e?Le(e)?function(e,t){if(Ee(e)&&Te(t))return Ie(De(e),t);return function(r){var n=function(e,t,r){var n=null==e?void 0:be(e,t);return void 0===n?r:n}(r,e);return void 0===n&&n===t?function(e,t){return null!=e&&function(e,t,r){t=Ee(t,e)?[t]:Se(t);var n,a=-1,o=t.length;for(;++a<o;){var i=De(t[a]);if(!(n=null!=e&&r(e,i)))break;e=e[i];}if(n)return n;return !!(o=e?e.length:0)&&Ge(o)&&ke(i,o)&&(Le(e)||Re(e))}(e,t,ge)}(r,e):ve(t,n,void 0,3)}}(e[0],e[1]):function(e){var t=function(e){var t=qe(e),r=t.length;for(;r--;){var n=t[r],a=e[n];t[r]=[n,a,Te(a)];}return t}(e);if(1==t.length&&t[0][2])return Ie(t[0][0],t[0][1]);return function(r){return r===e||function(e,t,r,n){var a=r.length,o=a,i=!n;if(null==e)return !o;for(e=Object(e);a--;){var u=r[a];if(i&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return !1}for(;++a<o;){var c=(u=r[a])[0],s=e[c],l=u[1];if(i&&u[2]){if(void 0===s&&!(c in e))return !1}else {var f=new le;if(n)var d=n(s,l,c,e,t,f);if(!(void 0===d?ve(l,s,n,3,f):d))return !1}}return !0}(r,e,t)}}(e):Ee(t=e)?(r=De(t),function(e){return null==e?void 0:e[r]}):function(e){return function(t){return be(t,e)}}(t);var t,r;}function we(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||P,t!==n)return U(e);var t,r,n,a=[];for(var o in Object(e))L.call(e,o)&&"constructor"!=o&&a.push(o);return a}function Se(e){return Le(e)?e:Ae(e)}function je(e,t,r,n,a,o){var i=2&a,u=e.length,c=t.length;if(u!=c&&!(i&&c>u))return !1;var s=o.get(e);if(s&&o.get(t))return s==t;var l=-1,f=!0,d=1&a?new se:void 0;for(o.set(e,t),o.set(t,e);++l<u;){var p=e[l],h=t[l];if(n)var m=i?n(h,p,l,t,e,o):n(p,h,l,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(d){if(!j(t,(function(e,t){if(!d.has(t)&&(p===e||r(p,e,n,a,o)))return d.add(t)}))){f=!1;break}}else if(p!==h&&!r(p,h,n,a,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function xe(e,t){var r,n,a=e.__data__;return ("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function Ne(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Ce(r)?r:void 0}var Oe=function(e){return z.call(e)};function ke(e,t){return !!(t=null==t?9007199254740991:t)&&("number"==typeof e||p.test(e))&&e>-1&&e%1==0&&e<t}function Ee(e,t){if(Le(e))return !1;var r=typeof e;return !("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ke(e))||(c.test(e)||!u.test(e)||null!=t&&e in Object(t))}function Te(e){return e==e&&!$e(e)}function Ie(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}(q&&"[object DataView]"!=Oe(new q(new ArrayBuffer(1)))||H&&Oe(new H)!=a||W&&"[object Promise]"!=Oe(W.resolve())||J&&Oe(new J)!=i||Z&&"[object WeakMap]"!=Oe(new Z))&&(Oe=function(e){var t=z.call(e),r=t==o?e.constructor:void 0,n=r?Pe(r):void 0;if(n)switch(n){case Y:return "[object DataView]";case X:return a;case ee:return "[object Promise]";case te:return i;case re:return "[object WeakMap]"}return t});var Ae=Fe((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(Ke(e))return oe?oe.call(e):"";var t=e+"";return "0"==t&&1/e==-1/0?"-0":t}(t);var r=[];return s.test(e)&&r.push(""),e.replace(l,(function(e,t,n,a){r.push(n?a.replace(f,"$1"):t||e);})),r}));function De(e){if("string"==typeof e||Ke(e))return e;var t=e+"";return "0"==t&&1/e==-1/0?"-0":t}function Pe(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return ""}function Fe(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i),i};return r.cache=new(Fe.Cache||ce),r}function Me(e,t){return e===t||e!=e&&t!=t}function Re(e){return function(e){return Ve(e)&&ze(e)}(e)&&L.call(e,"callee")&&(!V.call(e,"callee")||z.call(e)==n)}Fe.Cache=ce;var Le=Array.isArray;function ze(e){return null!=e&&Ge(e.length)&&!Be(e)}function Be(e){var t=$e(e)?z.call(e):"";return "[object Function]"==t||"[object GeneratorFunction]"==t}function Ge(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function $e(e){var t=typeof e;return !!e&&("object"==t||"function"==t)}function Ve(e){return !!e&&"object"==typeof e}function Ke(e){return "symbol"==typeof e||Ve(e)&&"[object Symbol]"==z.call(e)}var Ue=w?function(e){return function(t){return e(t)}}(w):function(e){return Ve(e)&&Ge(e.length)&&!!h[z.call(e)]};function qe(e){return ze(e)?fe(e):we(e)}function He(e){return e}r.exports=function(e,t,r){var n=Le(e)?S:x,a=arguments.length<3;return n(e,_e(t),r,a,me)};}).call(this,r(3),r(7)(e));},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e};},function(e,t){String.prototype.padEnd||(String.prototype.padEnd=function(e,t){return e>>=0,t=String(void 0!==t?t:" "),this.length>e?String(this):((e-=this.length)>t.length&&(t+=t.repeat(e/t.length)),String(this)+t.slice(0,e))});},function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e){if(Array.isArray(e))return e}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return (f="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return (p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return (h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.r(t);var m=r(0),y=r.n(m),b=r(5),g=r.n(b),v=r(4),C=r.n(v),_=r(6),w=r.n(_),S=r(2),j=r.n(S),x=r(1),N=r.n(x);r(8);function O(e,t){return i(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e;}finally{try{n||null==u.return||u.return();}finally{if(a)throw o}}return r}(e,t)||u()}var k=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........",0,["11","221","223","261","264","2652","280","2905","291","2920","2966","299","341","342","343","351","376","379","381","3833","385","387","388"]],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ....",0,["2","3","4","7","8","02","03","04","07","08"]],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","..-........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506","....-...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91",".....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ...-..-..",1,["310","311","312","313","315","318","321","324","325","326","327","336","7172","73622"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ....",0,["55","81","33","656","664","998","774","229"]],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","...-...-..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","....-...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ...-..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],E=[["American Samoa",["oceania"],"as","1684"],["Anguilla",["america","carribean"],"ai","1264"],["Bermuda",["america","north-america"],"bm","1441"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Cayman Islands",["america","carribean"],"ky","1345"],["Cook Islands",["oceania"],"ck","682"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Gibraltar",["europe"],"gi","350"],["Greenland",["america"],"gl","299"],["Jersey",["europe","eu-union"],"je","44",".... ......"],["Montserrat",["america","carribean"],"ms","1664"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Sint Maarten",["america","carribean"],"sx","1721"],["Tokelau",["oceania"],"tk","690"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Wallis and Futuna",["oceania"],"wf","681"]];function T(e,t,r,n,a){return !r||a?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r}function I(e,t,r,a,i){var u,c,s=[];return c=!0===t,[(u=[]).concat.apply(u,o(e.map((function(e){var o={name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],dialCode:e[3],format:T(r,e[3],e[4],a,i),priority:e[5]||0},u=[];return e[6]&&e[6].map((function(t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t]);}));}return e}({},o);r.dialCode=e[3]+t,r.isAreaCode=!0,r.areaCodeLength=t.length,u.push(r);})),u.length>0?(o.mainCode=!0,c||"Array"===t.constructor.name&&t.includes(e[2])?(o.hasAreaCodes=!0,[o].concat(u)):(s=s.concat(u),[o])):[o]})))),s]}function A(e,t,r,n){if(null!==r){var a=Object.keys(r),o=Object.values(r);a.forEach((function(r,a){if(n)return e.push([r,o[a]]);var i=e.findIndex((function(e){return e[0]===r}));if(-1===i){var u=[r];u[t]=o[a],e.push(u);}else e[i][t]=o[a];}));}}function D(e,t){return 0===t.length?e:e.map((function(e){var r=t.findIndex((function(t){return t[0]===e[2]}));if(-1===r)return e;var n=t[r];return n[1]&&(e[4]=n[1]),n[3]&&(e[5]=n[3]),n[2]&&(e[6]=n[2]),e}))}var P=function e(t,r,n,a,i,u,s,l,f,d,p,h,m,y){c(this,e),this.filterRegions=function(e,t){if("string"==typeof e){var r=e;return t.filter((function(e){return e.regions.some((function(e){return e===r}))}))}return t.filter((function(t){return e.map((function(e){return t.regions.some((function(t){return t===e}))})).some((function(e){return e}))}))},this.sortTerritories=function(e,t){var r=[].concat(o(e),o(t));return r.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),r},this.getFilteredCountryList=function(e,t,r){return 0===e.length?t:r?e.map((function(e){var r=t.find((function(t){return t.iso2===e}));if(r)return r})).filter((function(e){return e})):t.filter((function(t){return e.some((function(e){return e===t.iso2}))}))},this.localizeCountries=function(e,t,r){for(var n=0;n<e.length;n++)void 0!==t[e[n].iso2]?e[n].localName=t[e[n].iso2]:void 0!==t[e[n].name]&&(e[n].localName=t[e[n].name]);return r||e.sort((function(e,t){return e.localName<t.localName?-1:e.localName>t.localName?1:0})),e},this.getCustomAreas=function(e,t){for(var r=[],n=0;n<t.length;n++){var a=JSON.parse(JSON.stringify(e));a.dialCode+=t[n],r.push(a);}return r},this.excludeCountries=function(e,t){return 0===t.length?e:e.filter((function(e){return !t.includes(e.iso2)}))};var b=function(e,t,r){var n=[];return A(n,1,e,!0),A(n,3,t),A(n,2,r),n}(l,f,d),g=D(JSON.parse(JSON.stringify(k)),b),v=D(JSON.parse(JSON.stringify(E)),b),C=O(I(g,t,h,m,y),2),_=C[0],w=C[1];if(r){var S=O(I(v,t,h,m,y),2),j=S[0];S[1];_=this.sortTerritories(j,_);}n&&(_=this.filterRegions(n,_)),this.onlyCountries=this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a,_,s.includes("onlyCountries")),u),p,s.includes("onlyCountries")),this.preferredCountries=0===i.length?[]:this.localizeCountries(this.getFilteredCountryList(i,_,s.includes("preferredCountries")),p,s.includes("preferredCountries")),this.hiddenAreaCodes=this.excludeCountries(this.getFilteredCountryList(a,w),u);},F=function(e){function t(e){var r;c(this,t),(r=function(e,t){return !t||"object"!==f(t)&&"function"!=typeof t?d(e):t}(this,p(t).call(this,e))).getProbableCandidate=C()((function(e){return e&&0!==e.length?r.state.onlyCountries.filter((function(t){return j()(t.name.toLowerCase(),e.toLowerCase())}),d(d(r)))[0]:null})),r.guessSelectedCountry=C()((function(e,t,n,a){var o;if(!1===r.props.enableAreaCodes&&(a.some((function(t){if(j()(e,t.dialCode))return n.some((function(e){if(t.iso2===e.iso2&&e.mainCode)return o=e,!0})),!0})),o))return o;var i=n.find((function(e){return e.iso2==t}));if(""===e.trim())return i;var u=n.reduce((function(t,r){if(j()(e,r.dialCode)){if(r.dialCode.length>t.dialCode.length)return r;if(r.dialCode.length===t.dialCode.length&&r.priority<t.priority)return r}return t}),{dialCode:"",priority:10001},d(d(r)));return u.name?u:i})),r.updateCountry=function(e){var t,n=r.state.onlyCountries;(t=e.indexOf(0)>="0"&&e.indexOf(0)<="9"?n.find((function(t){return t.dialCode==+e})):n.find((function(t){return t.iso2==e})))&&t.dialCode&&r.setState({selectedCountry:t,formattedNumber:r.props.disableCountryCode?"":r.formatNumber(t.dialCode,t)});},r.scrollTo=function(e,t){if(e){var n=r.dropdownRef;if(n&&document.body){var a=n.offsetHeight,o=n.getBoundingClientRect().top+document.body.scrollTop,i=o+a,u=e,c=u.getBoundingClientRect(),s=u.offsetHeight,l=c.top+document.body.scrollTop,f=l+s,d=l-o+n.scrollTop,p=a/2-s/2;if(r.props.enableSearch?l<o+32:l<o)t&&(d-=p),n.scrollTop=d;else if(f>i){t&&(d+=p);var h=a-s;n.scrollTop=d-h;}}}},r.scrollToTop=function(){var e=r.dropdownRef;e&&document.body&&(e.scrollTop=0);},r.formatNumber=function(e,t){if(!t)return e;var n,o=t.format,c=r.props,s=c.disableCountryCode,l=c.enableAreaCodeStretch,f=c.enableLongNumbers,d=c.autoFormat;if(s?((n=o.split(" ")).shift(),n=n.join(" ")):l&&t.isAreaCode?((n=o.split(" "))[1]=n[1].replace(/\.+/,"".padEnd(t.areaCodeLength,".")),n=n.join(" ")):n=o,!e||0===e.length)return s?"":r.props.prefix;if(e&&e.length<2||!n||!d)return s?e:r.props.prefix+e;var p,h=w()(n,(function(e,t){if(0===e.remainingText.length)return e;if("."!==t)return {formattedText:e.formattedText+t,remainingText:e.remainingText};var r,n=i(r=e.remainingText)||a(r)||u(),o=n[0],c=n.slice(1);return {formattedText:e.formattedText+o,remainingText:c}}),{formattedText:"",remainingText:e.split("")});return (p=f?h.formattedText+h.remainingText.join(""):h.formattedText).includes("(")&&!p.includes(")")&&(p+=")"),p},r.cursorToEnd=function(){var e=r.numberInputRef;if(document.activeElement===e){e.focus();var t=e.value.length;")"===e.value.charAt(t-1)&&(t-=1),e.setSelectionRange(t,t);}},r.getElement=function(e){return r["flag_no_".concat(e)]},r.getCountryData=function(){return r.state.selectedCountry?{name:r.state.selectedCountry.name||"",dialCode:r.state.selectedCountry.dialCode||"",countryCode:r.state.selectedCountry.iso2||"",format:r.state.selectedCountry.format||""}:{}},r.handleFlagDropdownClick=function(e){if(e.preventDefault(),r.state.showDropdown||!r.props.disabled){var t=r.state,n=t.preferredCountries,a=t.onlyCountries,o=t.selectedCountry,i=r.concatPreferredCountries(n,a).findIndex((function(e){return e.dialCode===o.dialCode&&e.iso2===o.iso2}));r.setState({showDropdown:!r.state.showDropdown,highlightCountryIndex:i},(function(){r.state.showDropdown&&r.scrollTo(r.getElement(r.state.highlightCountryIndex));}));}},r.handleInput=function(e){var t=e.target.value,n=r.props,a=n.prefix,o=n.onChange,i=r.props.disableCountryCode?"":a,u=r.state.selectedCountry,c=r.state.freezeSelection;if(!r.props.countryCodeEditable){var s=a+(u.hasAreaCodes?r.state.onlyCountries.find((function(e){return e.iso2===u.iso2&&e.mainCode})).dialCode:u.dialCode);if(t.slice(0,s.length)!==s)return}if(t===a)return o&&o("",r.getCountryData(),e,""),r.setState({formattedNumber:""});if(t.replace(/\D/g,"").length>15){if(!1===r.props.enableLongNumbers)return;if("number"==typeof r.props.enableLongNumbers&&t.replace(/\D/g,"").length>r.props.enableLongNumbers)return}if(t!==r.state.formattedNumber){e.preventDefault?e.preventDefault():e.returnValue=!1;var l=r.props.country,f=r.state,d=f.onlyCountries,p=f.selectedCountry,h=f.hiddenAreaCodes;if(o&&e.persist(),t.length>0){var m=t.replace(/\D/g,"");(!r.state.freezeSelection||p&&p.dialCode.length>m.length)&&(u=r.props.disableCountryGuess?p:r.guessSelectedCountry(m.substring(0,6),l,d,h)||p,c=!1),i=r.formatNumber(m,u),u=u.dialCode?u:p;}var y=e.target.selectionStart,b=e.target.selectionStart,g=r.state.formattedNumber,v=i.length-g.length;r.setState({formattedNumber:i,freezeSelection:c,selectedCountry:u},(function(){v>0&&(b-=v),")"==i.charAt(i.length-1)?r.numberInputRef.setSelectionRange(i.length-1,i.length-1):b>0&&g.length>=i.length?r.numberInputRef.setSelectionRange(b,b):y<g.length&&r.numberInputRef.setSelectionRange(y,y),o&&o(i.replace(/[^0-9]+/g,""),r.getCountryData(),e,i);}));}},r.handleInputClick=function(e){r.setState({showDropdown:!1}),r.props.onClick&&r.props.onClick(e,r.getCountryData());},r.handleDoubleClick=function(e){var t=e.target.value.length;e.target.setSelectionRange(0,t);},r.handleFlagItemClick=function(e,t){var n=r.state.selectedCountry,a=r.state.onlyCountries.find((function(t){return t==e}));if(a){var o=r.state.formattedNumber.replace(" ","").replace("(","").replace(")","").replace("-",""),i=o.length>1?o.replace(n.dialCode,a.dialCode):a.dialCode,u=r.formatNumber(i.replace(/\D/g,""),a);r.setState({showDropdown:!1,selectedCountry:a,freezeSelection:!0,formattedNumber:u,searchValue:""},(function(){r.cursorToEnd(),r.props.onChange&&r.props.onChange(u.replace(/[^0-9]+/g,""),r.getCountryData(),t,u);}));}},r.handleInputFocus=function(e){r.numberInputRef&&r.numberInputRef.value===r.props.prefix&&r.state.selectedCountry&&!r.props.disableCountryCode&&r.setState({formattedNumber:r.props.prefix+r.state.selectedCountry.dialCode},(function(){r.props.jumpCursorToEnd&&setTimeout(r.cursorToEnd,0);})),r.setState({placeholder:""}),r.props.onFocus&&r.props.onFocus(e,r.getCountryData()),r.props.jumpCursorToEnd&&setTimeout(r.cursorToEnd,0);},r.handleInputBlur=function(e){e.target.value||r.setState({placeholder:r.props.placeholder}),r.props.onBlur&&r.props.onBlur(e,r.getCountryData());},r.handleInputCopy=function(e){if(r.props.copyNumbersOnly){var t=window.getSelection().toString().replace(/[^0-9]+/g,"");e.clipboardData.setData("text/plain",t),e.preventDefault();}},r.getHighlightCountryIndex=function(e){var t=r.state.highlightCountryIndex+e;return t<0||t>=r.state.onlyCountries.length+r.state.preferredCountries.length?t-e:r.props.enableSearch&&t>r.getSearchFilteredCountries().length?0:t},r.searchCountry=function(){var e=r.getProbableCandidate(r.state.queryString)||r.state.onlyCountries[0],t=r.state.onlyCountries.findIndex((function(t){return t==e}))+r.state.preferredCountries.length;r.scrollTo(r.getElement(t),!0),r.setState({queryString:"",highlightCountryIndex:t});},r.handleKeydown=function(e){var t=r.props.keys,n=e.target.className;if(n.includes("selected-flag")&&e.which===t.ENTER&&!r.state.showDropdown)return r.handleFlagDropdownClick(e);if(n.includes("form-control")&&(e.which===t.ENTER||e.which===t.ESC))return e.target.blur();if(r.state.showDropdown&&!r.props.disabled&&(!n.includes("search-box")||e.which===t.UP||e.which===t.DOWN||e.which===t.ENTER||e.which===t.ESC&&""===e.target.value)){e.preventDefault?e.preventDefault():e.returnValue=!1;var a=function(e){r.setState({highlightCountryIndex:r.getHighlightCountryIndex(e)},(function(){r.scrollTo(r.getElement(r.state.highlightCountryIndex),!0);}));};switch(e.which){case t.DOWN:a(1);break;case t.UP:a(-1);break;case t.ENTER:r.props.enableSearch?r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex]||r.getSearchFilteredCountries()[0],e):r.handleFlagItemClick([].concat(o(r.state.preferredCountries),o(r.state.onlyCountries))[r.state.highlightCountryIndex],e);break;case t.ESC:case t.TAB:r.setState({showDropdown:!1},r.cursorToEnd);break;default:(e.which>=t.A&&e.which<=t.Z||e.which===t.SPACE)&&r.setState({queryString:r.state.queryString+String.fromCharCode(e.which)},r.state.debouncedQueryStingSearcher);}}},r.handleInputKeyDown=function(e){var t=r.props,n=t.keys,a=t.onEnterKeyPress,o=t.onKeyDown;e.which===n.ENTER&&a&&a(e),o&&o(e);},r.handleClickOutside=function(e){r.dropdownRef&&!r.dropdownContainerRef.contains(e.target)&&r.state.showDropdown&&r.setState({showDropdown:!1});},r.handleSearchChange=function(e){var t=e.currentTarget.value,n=r.state,a=n.preferredCountries,o=n.selectedCountry,i=0;if(""===t&&o){var u=r.state.onlyCountries;i=r.concatPreferredCountries(a,u).findIndex((function(e){return e==o})),setTimeout((function(){return r.scrollTo(r.getElement(i))}),100);}r.setState({searchValue:t,highlightCountryIndex:i});},r.concatPreferredCountries=function(e,t){return e.length>0?o(new Set(e.concat(t))):t},r.getDropdownCountryName=function(e){return e.localName||e.name},r.getSearchFilteredCountries=function(){var e=r.state,t=e.preferredCountries,n=e.onlyCountries,a=e.searchValue,i=r.props.enableSearch,u=r.concatPreferredCountries(t,n),c=a.trim().toLowerCase().replace("+","");if(i&&c){if(/^\d+$/.test(c))return u.filter((function(e){var t=e.dialCode;return ["".concat(t)].some((function(e){return e.toLowerCase().includes(c)}))}));var s=u.filter((function(e){var t=e.iso2;return ["".concat(t)].some((function(e){return e.toLowerCase().includes(c)}))})),l=u.filter((function(e){var t=e.name,r=e.localName;e.iso2;return ["".concat(t),"".concat(r||"")].some((function(e){return e.toLowerCase().includes(c)}))}));return r.scrollToTop(),o(new Set([].concat(s,l)))}return u},r.getCountryDropdownList=function(){var e=r.state,t=e.preferredCountries,a=e.highlightCountryIndex,o=e.showDropdown,i=e.searchValue,u=r.props,c=u.disableDropdown,s=u.prefix,l=r.props,f=l.enableSearch,d=l.searchNotFound,p=l.disableSearchIcon,h=l.searchClass,m=l.searchStyle,b=l.searchPlaceholder,g=l.autocompleteSearch,v=r.getSearchFilteredCountries().map((function(e,t){var n=a===t,o=N()({country:!0,preferred:"us"===e.iso2||"gb"===e.iso2,active:"us"===e.iso2,highlight:n}),i="flag ".concat(e.iso2);return y.a.createElement("li",Object.assign({ref:function(e){return r["flag_no_".concat(t)]=e},key:"flag_no_".concat(t),"data-flag-key":"flag_no_".concat(t),className:o,"data-dial-code":"1",tabIndex:c?"-1":"0","data-country-code":e.iso2,onClick:function(t){return r.handleFlagItemClick(e,t)},role:"option"},n?{"aria-selected":!0}:{}),y.a.createElement("div",{className:i}),y.a.createElement("span",{className:"country-name"},r.getDropdownCountryName(e)),y.a.createElement("span",{className:"dial-code"},e.format?r.formatNumber(e.dialCode,e):s+e.dialCode))})),C=y.a.createElement("li",{key:"dashes",className:"divider"});t.length>0&&(!f||f&&!i.trim())&&v.splice(t.length,0,C);var _=N()(n({"country-list":!0,hide:!o},r.props.dropdownClass,!0));return y.a.createElement("ul",{ref:function(e){return !f&&e&&e.focus(),r.dropdownRef=e},className:_,style:r.props.dropdownStyle,role:"listbox",tabIndex:"0"},f&&y.a.createElement("li",{className:N()(n({search:!0},h,h))},!p&&y.a.createElement("span",{className:N()(n({"search-emoji":!0},"".concat(h,"-emoji"),h)),role:"img","aria-label":"Magnifying glass"},"🔎"),y.a.createElement("input",{className:N()(n({"search-box":!0},"".concat(h,"-box"),h)),style:m,type:"search",placeholder:b,autoFocus:!0,autoComplete:g?"on":"off",value:i,onChange:r.handleSearchChange})),v.length>0?v:y.a.createElement("li",{className:"no-entries-message"},y.a.createElement("span",null,d)))};var s,l=new P(e.enableAreaCodes,e.enableTerritories,e.regions,e.onlyCountries,e.preferredCountries,e.excludeCountries,e.preserveOrder,e.masks,e.priority,e.areaCodes,e.localization,e.prefix,e.defaultMask,e.alwaysDefaultMask),h=l.onlyCountries,m=l.preferredCountries,b=l.hiddenAreaCodes,v=e.value?e.value.replace(/\D/g,""):"";s=e.disableInitialCountryGuess?0:v.length>1?r.guessSelectedCountry(v.substring(0,6),e.country,h,b)||0:e.country&&h.find((function(t){return t.iso2==e.country}))||0;var _,S=v.length<2&&s&&!j()(v,s.dialCode)?s.dialCode:"";_=""===v&&0===s?"":r.formatNumber((e.disableCountryCode?"":S)+v,s.name?s:void 0);var x=h.findIndex((function(e){return e==s}));return r.state={showDropdown:e.showDropdown,formattedNumber:_,onlyCountries:h,preferredCountries:m,hiddenAreaCodes:b,selectedCountry:s,highlightCountryIndex:x,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:g()(r.searchCountry,250),searchValue:""},r}var r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t);}(t,e),r=t,(l=[{key:"componentDidMount",value:function(){document.addEventListener&&this.props.enableClickOutside&&document.addEventListener("mousedown",this.handleClickOutside),this.props.onMount&&this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g,""),this.getCountryData(),this.state.formattedNumber);}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&this.props.enableClickOutside&&document.removeEventListener("mousedown",this.handleClickOutside);}},{key:"componentDidUpdate",value:function(e,t,r){e.country!==this.props.country?this.updateCountry(this.props.country):e.value!==this.props.value&&this.updateFormattedNumber(this.props.value);}},{key:"updateFormattedNumber",value:function(e){if(null===e)return this.setState({selectedCountry:0,formattedNumber:""});var t=this.state,r=t.onlyCountries,n=t.selectedCountry,a=t.hiddenAreaCodes,o=this.props,i=o.country,u=o.prefix;if(""===e)return this.setState({selectedCountry:n,formattedNumber:""});var c,s,l=e.replace(/\D/g,"");if(n&&j()(e,u+n.dialCode))s=this.formatNumber(l,n),this.setState({formattedNumber:s});else {var f=(c=this.props.disableCountryGuess?n:this.guessSelectedCountry(l.substring(0,6),i,r,a)||n)&&j()(l,u+c.dialCode)?c.dialCode:"";s=this.formatNumber((this.props.disableCountryCode?"":f)+l,c||void 0),this.setState({selectedCountry:c,formattedNumber:s});}}},{key:"render",value:function(){var e,t,r,a=this,o=this.state,i=o.onlyCountries,u=o.selectedCountry,c=o.showDropdown,s=o.formattedNumber,l=o.hiddenAreaCodes,f=this.props,d=f.disableDropdown,p=f.renderStringAsFlag,h=f.isValid,m=f.defaultErrorMessage,b=f.specialLabel;if("boolean"==typeof h)t=h;else {var g=h(s.replace(/\D/g,""),u,i,l);"boolean"==typeof g?!1===(t=g)&&(r=m):(t=!1,r=g);}var v=N()((n(e={},this.props.containerClass,!0),n(e,"react-tel-input",!0),e)),C=N()({arrow:!0,up:c}),_=N()(n({"form-control":!0,"invalid-number":!t,open:c},this.props.inputClass,!0)),w=N()({"selected-flag":!0,open:c}),S=N()(n({"flag-dropdown":!0,"invalid-number":!t,open:c},this.props.buttonClass,!0)),j="flag ".concat(u&&u.iso2);return y.a.createElement("div",{className:"".concat(v," ").concat(this.props.className),style:this.props.style||this.props.containerStyle,onKeyDown:this.handleKeydown},b&&y.a.createElement("div",{className:"special-label"},b),r&&y.a.createElement("div",{className:"invalid-number-message"},r),y.a.createElement("input",Object.assign({className:_,style:this.props.inputStyle,onChange:this.handleInput,onClick:this.handleInputClick,onDoubleClick:this.handleDoubleClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onCopy:this.handleInputCopy,value:s,onKeyDown:this.handleInputKeyDown,placeholder:this.props.placeholder,disabled:this.props.disabled,type:"tel"},this.props.inputProps,{ref:function(e){a.numberInputRef=e,"function"==typeof a.props.inputProps.ref?a.props.inputProps.ref(e):"object"==typeof a.props.inputProps.ref&&(a.props.inputProps.ref.current=e);}})),y.a.createElement("div",{className:S,style:this.props.buttonStyle,ref:function(e){return a.dropdownContainerRef=e}},p?y.a.createElement("div",{className:w},p):y.a.createElement("div",{onClick:d?void 0:this.handleFlagDropdownClick,className:w,title:u?"".concat(u.localName||u.name,": + ").concat(u.dialCode):"",tabIndex:d?"-1":"0",role:"button","aria-haspopup":"listbox","aria-expanded":!!c||void 0},y.a.createElement("div",{className:j},!d&&y.a.createElement("div",{className:C}))),c&&this.getCountryDropdownList()))}}])&&s(r.prototype,l),t}(y.a.Component);F.defaultProps={country:"",value:"",onlyCountries:[],preferredCountries:[],excludeCountries:[],placeholder:"1 (702) 123-4567",searchPlaceholder:"search",searchNotFound:"No entries to show",flagsImagePath:"./flags.png",disabled:!1,containerStyle:{},inputStyle:{},buttonStyle:{},dropdownStyle:{},searchStyle:{},containerClass:"",inputClass:"",buttonClass:"",dropdownClass:"",searchClass:"",className:"",autoFormat:!0,enableAreaCodes:!1,enableTerritories:!1,disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,enableSearch:!1,disableSearchIcon:!1,disableInitialCountryGuess:!1,disableCountryGuess:!1,regions:"",inputProps:{},localization:{},masks:null,priority:null,areaCodes:null,preserveOrder:[],defaultMask:"... ... ... ... ..",alwaysDefaultMask:!1,prefix:"+",copyNumbersOnly:!0,renderStringAsFlag:"",autocompleteSearch:!1,jumpCursorToEnd:!0,enableAreaCodeStretch:!1,enableClickOutside:!0,showDropdown:!1,isValid:!0,defaultErrorMessage:"",specialLabel:"Phone",onEnterKeyPress:null,keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32,TAB:9}};t.default=F;}]);

var BasePhoneInput = /*@__PURE__*/getDefaultExportFromCjs(lib);

var Input = function (_a) {
    var _b = _a.specialLabel, specialLabel = _b === void 0 ? '' : _b; _a.error; var props = __rest(_a, ["specialLabel", "error"]);
    return (r.createElement(BasePhoneInput, __assign({ specialLabel: specialLabel }, props)));
};
var PhoneInput = styled(Input)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  .react-tel-input,\n  .form-control {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    padding: ", ";\n    width: 100%;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    &:active,\n    &:focus,\n    &:focus-visible {\n      border: 1px solid ", ";\n      outline: none;\n      box-shadow: unset;\n    }\n\n    &:disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    ", "\n  }\n"], ["\n  .react-tel-input,\n  .form-control {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    padding: ", ";\n    width: 100%;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    &:active,\n    &:focus,\n    &:focus-visible {\n      border: 1px solid ", ";\n      outline: none;\n      box-shadow: unset;\n    }\n\n    &:disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    ", "\n  }\n"])), function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.typography.body1.fontWeight; }, function (props) { return props.theme.typography.body1.fontSize; }, function (props) { return props.theme.typography.body1.lineHeight; }, function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.spacing(1); }, function (props) { return props.theme.spacing(1.5, 1.5, 1.5, 7.25); }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[600]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[400]; }, function (_a) {
    var error = _a.error;
    return error && Ae(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        border-color: ", ";\n      "], ["\n        border-color: ", ";\n      "])), function (props) { return props.theme.palette.error.main; });
});
var templateObject_1$1, templateObject_2$1;

var InputLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var disabled = _a.disabled;
    return disabled && Ae(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, function (_a) {
    var required = _a.required;
    return required && Ae(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:after {\n        content: ' *';\n      }\n    "], ["\n      &:after {\n        content: ' *';\n      }\n    "])));
}, spacing);
var templateObject_1, templateObject_2, templateObject_3;

export { Box, Button, FormControl, FormHelperText, Input$1 as Input, InputLabel, PhoneInput, Typography, theme };
