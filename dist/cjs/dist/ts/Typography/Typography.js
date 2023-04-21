'use strict';

var index = require('../../../node_modules/react/index.js');
var styledComponents_browser_esm = require('../../../node_modules/styled-components/dist/styled-components.browser.esm.js');
var breakpoints = require('../../../node_modules/@material-ui/system/esm/breakpoints.js');
var compose = require('../../../node_modules/@material-ui/system/esm/compose.js');
var spacing = require('../../../node_modules/@material-ui/system/esm/spacing.js');
var typography = require('../../../node_modules/@material-ui/system/esm/typography.js');
var Typography$1 = require('../../../node_modules/@material-ui/core/esm/Typography/Typography.js');

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var breakpointSpacing = breakpoints.default(compose(spacing.default, typography.default));
var CustomTypography = function (_a) {
    _a.slab; var restProps = __rest(_a, ["slab"]);
    return index.default.createElement(Typography$1.default, __assign({}, restProps));
};
var Typography = styledComponents_browser_esm.default(CustomTypography)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), spacing.default, typography.default, breakpointSpacing, function (_a) {
    var slab = _a.slab;
    return slab && slabStyles;
});
var slabStyles = styledComponents_browser_esm.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"], ["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.fontFamilySlab;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.fontWeightSlab;
});
var templateObject_1, templateObject_2;

exports.Typography = Typography;
