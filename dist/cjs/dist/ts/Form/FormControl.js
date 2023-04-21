'use strict';

var index = require('../../../node_modules/react/index.js');
var styledComponents_browser_esm = require('../../../node_modules/styled-components/dist/styled-components.browser.esm.js');

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var FormControl = function (_a) {
    var error = _a.error, disabled = _a.disabled, required = _a.required, children = _a.children;
    var childrenWithProps = index.default.Children.map(children, function (child) {
        if (index.default.isValidElement(child)) {
            return index.default.cloneElement(child, { error: error, disabled: disabled, required: required });
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
    return (index.default.createElement(FormWrapper, { className: classes.join(' ') }, childrenWithProps));
};
var FormWrapper = styledComponents_browser_esm.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), function (props) { return props.theme.spacing(2); });
var templateObject_1;

exports.FormControl = FormControl;
