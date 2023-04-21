/// <reference types="react" />
import { PhoneInputProps as BasePhoneInputProps } from 'react-phone-input-2';
import './material.css';
type InputProps = BasePhoneInputProps & {
    error?: boolean;
};
export declare const Input: ({ specialLabel, error, ...props }: InputProps) => JSX.Element;
export declare const PhoneInput: import("styled-components").StyledComponent<({ specialLabel, error, ...props }: InputProps) => JSX.Element, any, {}, never>;
export {};
