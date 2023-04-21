import styled from '../../../node_modules/styled-components/dist/styled-components.browser.esm.js';
import breakpoints from '../../../node_modules/@material-ui/system/esm/breakpoints.js';
import compose from '../../../node_modules/@material-ui/system/esm/compose.js';
import borders from '../../../node_modules/@material-ui/system/esm/borders.js';
import display from '../../../node_modules/@material-ui/system/esm/display.js';
import flexbox from '../../../node_modules/@material-ui/system/esm/flexbox.js';
import palette from '../../../node_modules/@material-ui/system/esm/palette.js';
import positions from '../../../node_modules/@material-ui/system/esm/positions.js';
import shadows from '../../../node_modules/@material-ui/system/esm/shadows.js';
import sizing from '../../../node_modules/@material-ui/system/esm/sizing.js';
import spacing from '../../../node_modules/@material-ui/system/esm/spacing.js';
import typography from '../../../node_modules/@material-ui/system/esm/typography.js';

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var breakpointsFn = breakpoints(compose(display, flexbox, palette, positions, sizing, spacing, typography));
var Box = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography, breakpointsFn);
var templateObject_1;

export { Box };
