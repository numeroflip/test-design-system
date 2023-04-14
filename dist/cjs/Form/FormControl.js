"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormControl = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var FormControl = function (_a) {
    var error = _a.error, disabled = _a.disabled, required = _a.required, children = _a.children;
    var childrenWithProps = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, { error: error, disabled: disabled, required: required });
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
    return (react_1.default.createElement(FormWrapper, { className: classes.join(' ') }, childrenWithProps));
};
exports.FormControl = FormControl;
var FormWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), function (props) { return props.theme.spacing(2); });
var templateObject_1;
