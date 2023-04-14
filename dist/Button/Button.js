"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../theme");
var colors = {
    primary: {
        fill: theme_1.theme.palette.primary.main,
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
    var rounded = _a.rounded, outlined = _a.outlined, restProps = __rest(_a, ["rounded", "outlined"]);
    return React.createElement(core_1.ButtonBase, __assign({}, restProps));
};
exports.Button = (0, styled_components_1.default)(CustomButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 600;\n  font-family: ", ";\n  text-decoration: none;\n  transition-duration: ", "ms;\n  transition-timing-function: ", ";\n  color: ", ";\n  white-space: nowrap;\n  display: inline-flex;\n  vertical-align: middle;\n  line-height: normal;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n\n  &:disabled {\n    opacity: 0.35;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 600;\n  font-family: ", ";\n  text-decoration: none;\n  transition-duration: ", "ms;\n  transition-timing-function: ", ";\n  color: ", ";\n  white-space: nowrap;\n  display: inline-flex;\n  vertical-align: middle;\n  line-height: normal;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n\n  &:disabled {\n    opacity: 0.35;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.transitions.duration.short; }, function (props) {
    return props.theme.transitions.easing.sharp;
}, function (props) { return props.theme.palette.common.white; }, function (props) { return VARIANTS[props.variant || 'primary']; }, function (props) { return SIZES[props.size || 'md']; }, function (props) { return props.rounded && ROUNDED; }, function (props) { return props.outlined && OUTLINED[props.variant || 'primary']; }, function (props) { return props.block && BLOCK; }, function (props) { return props.blockXS && BLOCK_XS; });
var VARIANTS = {
    primary: (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    transition-property: background-color, color;\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    transition-property: background-color, color;\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.primary.fill, colors.primary.fill, (0, core_1.darken)(colors.primary.fill, 0.1), (0, core_1.darken)(colors.primary.fill, 0.1)),
    secondary: (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.secondary.fill, colors.secondary.fill, (0, core_1.darken)(colors.secondary.fill, 0.1), (0, core_1.darken)(colors.secondary.fill, 0.1)),
    tertiary: (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.tertiary.fill, colors.tertiary.fill, colors.tertiary.text, (0, core_1.darken)(colors.tertiary.fill, 0.1), (0, core_1.darken)(colors.tertiary.fill, 0.1)),
};
var SIZES = {
    md: (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 14px;\n    padding: 8px 24px;\n  "], ["\n    font-size: 14px;\n    padding: 8px 24px;\n  "]))),
    lg: (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: ", "px;\n    padding: 12px 24px;\n  "], ["\n    font-size: ", "px;\n    padding: 12px 24px;\n  "])), function (props) { return props.theme.typography.fontSize; }),
};
var ROUNDED = (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-radius: 500px;\n"], ["\n  border-radius: 500px;\n"])));
var OUTLINED = {
    primary: (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.primary.fill, (0, core_1.darken)(colors.primary.fill, 0.1), (0, core_1.lighten)(colors.primary.fill, 0.95), (0, core_1.darken)(colors.primary.fill, 0.1)),
    secondary: (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "], ["\n    background-color: transparent;\n    color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "])), colors.secondary.fill, (0, core_1.darken)(colors.secondary.fill, 0.1), (0, core_1.lighten)(colors.secondary.fill, 0.95), (0, core_1.darken)(colors.secondary.fill, 0.1)),
    tertiary: '',
};
var BLOCK = (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var BLOCK_XS = (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", " {\n    width: 100%;\n  }\n"], ["\n  ", " {\n    width: 100%;\n  }\n"])), function (props) { return props.theme.breakpoints.down('xs'); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
