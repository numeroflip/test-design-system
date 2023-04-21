import React from 'react';
export type FormInputBaseProps = {
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
};
type FormControlProps = FormInputBaseProps & {
    children: React.ReactNode | React.ReactNode[];
};
export declare const FormControl: React.FC<FormControlProps>;
export {};
