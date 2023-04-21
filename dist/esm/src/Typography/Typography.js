import { __makeTemplateObject, __rest, __assign } from '../../_virtual/_tslib.js';
import React from 'react';
import { Typography as Typography$1 } from '@material-ui/core';
import { breakpoints, compose, spacing, typography } from '@material-ui/system';
import styled, { css } from 'styled-components';

var breakpointSpacing = breakpoints(compose(spacing, typography));
var CustomTypography = function (_a) {
    _a.slab; var restProps = __rest(_a, ["slab"]);
    return React.createElement(Typography$1, __assign({}, restProps));
};
var Typography = styled(CustomTypography)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), spacing, typography, breakpointSpacing, function (_a) {
    var slab = _a.slab;
    return slab && slabStyles;
});
var slabStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"], ["\n  font-family: ", ", serif;\n  font-weight: ", ";\n  font-style: italic;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.fontFamilySlab;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.fontWeightSlab;
});
var templateObject_1, templateObject_2;

export { Typography };
