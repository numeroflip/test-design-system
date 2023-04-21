'use strict';

var index = require('../../../node_modules/react/index.js');
var styledComponents_browser_esm = require('../../../node_modules/styled-components/dist/styled-components.browser.esm.js');
var Typography = require('../Typography/Typography.js');
var spacing = require('../../../node_modules/@material-ui/system/esm/spacing.js');

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
var FormHelperText = function (_a) {
    var children = _a.children, restProps = __rest(_a, ["children"]);
    return (index.default.createElement(StyledTypography, __assign({ variant: "caption" }, restProps), children));
};
var StyledTypography = styledComponents_browser_esm.default(Typography.Typography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"], ["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var error = _a.error;
    return error && styledComponents_browser_esm.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && styledComponents_browser_esm.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, spacing.default);
var templateObject_1, templateObject_2, templateObject_3;

exports.FormHelperText = FormHelperText;
