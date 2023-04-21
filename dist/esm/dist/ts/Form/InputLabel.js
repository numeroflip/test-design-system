import { spacing } from '@material-ui/system';
import styled, { css } from 'styled-components';

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var InputLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-left: ", "px;\n  margin-bottom: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return props.theme.spacing(1.5); }, function (props) { return props.theme.spacing(0.5); }, function (_a) {
    var disabled = _a.disabled;
    return disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (props) { return props.theme.palette.grey[500]; });
}, function (_a) {
    var required = _a.required;
    return required && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:after {\n        content: ' *';\n      }\n    "], ["\n      &:after {\n        content: ' *';\n      }\n    "])));
}, spacing);
var templateObject_1, templateObject_2, templateObject_3;

export { InputLabel };
