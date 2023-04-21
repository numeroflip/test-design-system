import React from 'react';
import {
  default as BasePhoneInput,
  PhoneInputProps as BasePhoneInputProps,
} from 'react-phone-input-2';
import styled, { css } from 'styled-components';
import './material.css';

type InputProps = BasePhoneInputProps & {
  error?: boolean;
};

export const Input = ({ specialLabel = '', error, ...props }: InputProps) => (
  <BasePhoneInput specialLabel={specialLabel} {...props} />
);

export const PhoneInput = styled(Input)`
  .react-tel-input,
  .form-control {
    background-color: ${(props) => props.theme.palette.text.disabled};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: ${(props) => props.theme.typography.body1.fontWeight};
    font-size: ${(props) => props.theme.typography.body1.fontSize};
    line-height: ${(props) => props.theme.typography.body1.lineHeight};
    border: 1px solid ${(props) => props.theme.palette.text.disabled};
    border-radius: ${(props) => props.theme.spacing(1)}px;
    padding: ${(props) => props.theme.spacing(1.5, 1.5, 1.5, 7.25)};
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.palette.grey[400]};
    }

    &:hover {
      border: 1px solid ${(props) => props.theme.palette.grey[400]};
    }

    &:active,
    &:focus,
    &:focus-visible {
      border: 1px solid ${(props) => props.theme.palette.grey[600]};
      outline: none;
      box-shadow: unset;
    }

    &:disabled {
      background-color: ${(props) => props.theme.palette.grey[100]};
      border-color: ${(props) => props.theme.palette.grey[100]};
      color: ${(props) => props.theme.palette.grey[400]};
    }

    ${({ error }) =>
      error &&
      css`
        border-color: ${(props) => props.theme.palette.error.main};
      `}
  }
`;
