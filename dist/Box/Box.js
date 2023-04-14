var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@material-ui/system", "styled-components"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Box = void 0;
    var system_1 = require("@material-ui/system");
    var styled_components_1 = __importDefault(require("styled-components"));
    var breakpointsFn = (0, system_1.breakpoints)((0, system_1.compose)(system_1.display, system_1.flexbox, system_1.palette, system_1.positions, system_1.sizing, system_1.spacing, system_1.typography));
    exports.Box = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "])), system_1.borders, system_1.display, system_1.flexbox, system_1.palette, system_1.positions, system_1.shadows, system_1.sizing, system_1.spacing, system_1.typography, breakpointsFn);
    var templateObject_1;
});
