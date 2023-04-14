import React from 'react';
import { spacing, SpacingProps } from '@material-ui/system';
import styled, { css } from 'styled-components';
import { FormInputBaseProps } from './FormControl';

type InputLabelProps = React.HTMLProps<HTMLLabelElement> &
  FormInputBaseProps &
  SpacingProps & {
    children: React.ReactNode | React.ReactNode[];
  };

export const InputLabel = styled.label<InputLabelProps>`
  display: block;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.4px;
  margin-left: ${(props) => props.theme.spacing(1.5)}px;
  margin-bottom: ${(props) => props.theme.spacing(0.5)}px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${(props) => props.theme.palette.grey[500]};
    `}

  ${({ required }) =>
    required &&
    css`
      &:after {
        content: ' *';
      }
    `}

  ${spacing}
`;
