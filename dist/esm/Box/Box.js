var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography, compose, breakpoints, } from '@material-ui/system';
import styled from 'styled-components';
var breakpointsFn = breakpoints(compose(display, flexbox, palette, positions, sizing, spacing, typography));
export var Box = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography, breakpointsFn);
var templateObject_1;
