import { __makeTemplateObject, __rest, __assign } from '../../_virtual/_tslib.js';
import React from 'react';
import { spacing } from '@material-ui/system';
import styled, { css } from 'styled-components';
import { Typography } from '../Typography/Typography.js';

var FormHelperText = function (_a) {
    var children = _a.children, restProps = __rest(_a, ["children"]);
    return (React.createElement(StyledTypography, __assign({ variant: "caption" }, restProps), children));
};
var StyledTypography = styled(Typography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"], ["\n  display: block;\n  margin-left: ", "px;\n  margin-top: ", "px;\n\n  ", "\n\n  ", "\n  \n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var error = _a.error;
    return error && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.error.main; });
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, spacing);
var templateObject_1, templateObject_2, templateObject_3;

export { FormHelperText };
