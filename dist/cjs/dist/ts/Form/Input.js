'use strict';

var styledComponents_browser_esm = require('../../../node_modules/styled-components/dist/styled-components.browser.esm.js');

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var Input = styledComponents_browser_esm.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.typography.body1.fontWeight; }, function (props) { return props.theme.typography.body1.fontSize; }, function (props) { return props.theme.typography.body1.lineHeight; }, function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[600]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[200]; }, function (_a) {
    var error = _a.error;
    return error && styledComponents_browser_esm.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
});
var templateObject_1, templateObject_2;

exports.Input = Input;
