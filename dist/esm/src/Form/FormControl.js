import { __makeTemplateObject } from '../../_virtual/_tslib.js';
import React from 'react';
import styled from 'styled-components';

var FormControl = function (_a) {
    var error = _a.error, disabled = _a.disabled, required = _a.required, children = _a.children;
    var childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { error: error, disabled: disabled, required: required });
        }
        return child;
    });
    var classes = ['hc-form-control'];
    if (disabled) {
        classes.push('hc-form-control--disabled');
    }
    if (error) {
        classes.push('hc-form-control--error');
    }
    if (required) {
        classes.push('hc-form-control--required');
    }
    return (React.createElement(FormWrapper, { className: classes.join(' ') }, childrenWithProps));
};
var FormWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), function (props) { return props.theme.spacing(2); });
var templateObject_1;

export { FormControl };
