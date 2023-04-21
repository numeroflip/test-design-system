import { breakpoints, compose, display, flexbox, palette, positions, sizing, spacing, typography, borders, shadows } from '@material-ui/system';
import styled from 'styled-components';

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var breakpointsFn = breakpoints(compose(display, flexbox, palette, positions, sizing, spacing, typography));
var Box = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography, breakpointsFn);
var templateObject_1;

export { Box };
