import React from 'react';
import { spacing, SpacingProps } from '@material-ui/system';
import styled, { css } from 'styled-components';
import { FormInputBaseProps } from './FormControl';
import { Typography, TypographyProps } from '../Typography/Typography';

type FormHelperTextProps = TypographyProps &
  FormInputBaseProps & {
    children: React.ReactNode | React.ReactNode[];
  };

export const FormHelperText: React.FC<FormHelperTextProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledTypography variant="caption" {...restProps}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled(Typography)<FormHelperTextProps>`
  display: block;
  margin-left: ${(props) => props.theme.spacing(1.5)}px;
  margin-top: ${(props) => props.theme.spacing(0.5)}px;

  ${({ error }) =>
    error &&
    css`
      color: ${(props) => props.theme.palette.error.main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${(props) => props.theme.palette.grey[500]};
    `}
  
  ${spacing}
`;
