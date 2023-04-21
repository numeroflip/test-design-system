import React from 'react';
import { FormInputBaseProps } from './FormControl';
import { TypographyProps } from '../Typography/Typography';
type FormHelperTextProps = TypographyProps & FormInputBaseProps & {
    children: React.ReactNode | React.ReactNode[];
};
export declare const FormHelperText: React.FC<FormHelperTextProps>;
export {};
