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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHelperText = void 0;
var react_1 = __importDefault(require("react"));
var system_1 = require("@material-ui/system");
var styled_components_1 = __importStar(require("styled-components"));
var Typography_1 = require("../Typography/Typography");
var FormHelperText = function (_a) {
    var children = _a.children, restProps = __rest(_a, ["children"]);
    return (react_1.default.createElement(StyledTypography, __assign({ variant: "caption" }, restProps), children));
};
exports.FormHelperText = FormHelperText;
var StyledTypography = (0, styled_components_1.default)(Typography_1.Typography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"], ["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var error = _a.error;
    return error && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, system_1.spacing);
var templateObject_1, templateObject_2, templateObject_3;
