var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
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
var __rest = (this && this.__rest) || function (s, e) {
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
import React from 'react';
import { default as BasePhoneInput, } from 'react-phone-input-2';
import styled, { css } from 'styled-components';
import './material.css';
export var Input = function (_a) {
    var _b = _a.specialLabel, specialLabel = _b === void 0 ? '' : _b, error = _a.error, props = __rest(_a, ["specialLabel", "error"]);
    return (React.createElement(BasePhoneInput, __assign({ specialLabel: specialLabel }, props)));
};
export var PhoneInput = styled(Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .react-tel-input,\n  .form-control {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    padding: ", ";\n    width: 100%;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    &:active,\n    &:focus,\n    &:focus-visible {\n      border: 1px solid ", ";\n      outline: none;\n      box-shadow: unset;\n    }\n\n    &:disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    ", "\n  }\n"], ["\n  .react-tel-input,\n  .form-control {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    padding: ", ";\n    width: 100%;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n\n    &:active,\n    &:focus,\n    &:focus-visible {\n      border: 1px solid ", ";\n      outline: none;\n      box-shadow: unset;\n    }\n\n    &:disabled {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    ", "\n  }\n"])), function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.typography.body1.fontWeight; }, function (props) { return props.theme.typography.body1.fontSize; }, function (props) { return props.theme.typography.body1.lineHeight; }, function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.spacing(1); }, function (props) { return props.theme.spacing(1.5, 1.5, 1.5, 7.25); }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[600]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[400]; }, function (_a) {
    var error = _a.error;
    return error && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border-color: ", ";\n      "], ["\n        border-color: ", ";\n      "])), function (props) { return props.theme.palette.error.main; });
});
var templateObject_1, templateObject_2;
