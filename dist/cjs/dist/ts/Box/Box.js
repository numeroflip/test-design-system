'use strict';

var styledComponents_browser_esm = require('../../../node_modules/styled-components/dist/styled-components.browser.esm.js');
var breakpoints = require('../../../node_modules/@material-ui/system/esm/breakpoints.js');
var compose = require('../../../node_modules/@material-ui/system/esm/compose.js');
var borders = require('../../../node_modules/@material-ui/system/esm/borders.js');
var display = require('../../../node_modules/@material-ui/system/esm/display.js');
var flexbox = require('../../../node_modules/@material-ui/system/esm/flexbox.js');
var palette = require('../../../node_modules/@material-ui/system/esm/palette.js');
var positions = require('../../../node_modules/@material-ui/system/esm/positions.js');
var shadows = require('../../../node_modules/@material-ui/system/esm/shadows.js');
var sizing = require('../../../node_modules/@material-ui/system/esm/sizing.js');
var spacing = require('../../../node_modules/@material-ui/system/esm/spacing.js');
var typography = require('../../../node_modules/@material-ui/system/esm/typography.js');

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var breakpointsFn = breakpoints.default(compose(display.default, flexbox.default, palette.default, positions.default, sizing.default, spacing.default, typography.default));
var Box = styledComponents_browser_esm.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borders.default, display.default, flexbox.default, palette.default, positions.default, shadows, sizing.default, spacing.default, typography.default, breakpointsFn);
var templateObject_1;

exports.Box = Box;
