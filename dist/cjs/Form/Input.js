"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: ", "px;\n  width: 100%;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &::placeholder {\n    color: #b0b0b0;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &:active,\n  &:focus,\n  &:focus-visible {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.typography.body1.fontWeight; }, function (props) { return props.theme.typography.body1.fontSize; }, function (props) { return props.theme.typography.body1.lineHeight; }, function (props) { return props.theme.palette.text.disabled; }, function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.palette.grey[400]; }, function (props) { return props.theme.palette.grey[600]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[100]; }, function (props) { return props.theme.palette.grey[200]; }, function (_a) {
    var error = _a.error;
    return error && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
});
var templateObject_1, templateObject_2;
