'use strict';

var system = require('@material-ui/system');
var styled = require('styled-components');

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var breakpointsFn = system.breakpoints(system.compose(system.display, system.flexbox, system.palette, system.positions, system.sizing, system.spacing, system.typography));
var Box = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), system.borders, system.display, system.flexbox, system.palette, system.positions, system.shadows, system.sizing, system.spacing, system.typography, breakpointsFn);
var templateObject_1;

exports.Box = Box;
