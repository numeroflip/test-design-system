import React from 'react';
import styled, { css } from 'styled-components';

type InputProps = React.HTMLProps<HTMLInputElement> & {
  error?: boolean;
};

export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme.palette.text.disabled};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.body1.fontWeight};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
  border: 1px solid ${(props) => props.theme.palette.text.disabled};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing(1.5)}px;
  width: 100%;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #b0b0b0;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.palette.grey[400]};
  }

  &:active,
  &:focus,
  &:focus-visible {
    border: 1px solid ${(props) => props.theme.palette.grey[600]};
    outline: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.palette.grey[100]};
    border-color: ${(props) => props.theme.palette.grey[100]};
    color: ${(props) => props.theme.palette.grey[200]};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${(props) => props.theme.palette.error.main};
    `}
`;
