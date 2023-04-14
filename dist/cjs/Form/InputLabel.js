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
exports.InputLabel = void 0;
var system_1 = require("@material-ui/system");
var styled_components_1 = __importStar(require("styled-components"));
exports.InputLabel = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var disabled = _a.disabled;
    return disabled && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, function (_a) {
    var required = _a.required;
    return required && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:after {\n        content: ' *';\n      }\n    "], ["\n      &:after {\n        content: ' *';\n      }\n    "])));
}, system_1.spacing);
var templateObject_1, templateObject_2, templateObject_3;
