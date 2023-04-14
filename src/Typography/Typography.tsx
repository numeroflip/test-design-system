import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';
import {
  SpacingProps,
  spacing,
  TypographyProps as SystemMuiTypographyProps,
  typography,
  breakpoints,
  compose,
} from '@material-ui/system';
import styled, { css } from 'styled-components';

type BaseProps = { slab?: boolean };
export type TypographyProps = SpacingProps &
  SystemMuiTypographyProps &
  MuiTypographyProps;

const breakpointSpacing = breakpoints(compose(spacing, typography));

const CustomTypography: React.FC<BaseProps & TypographyProps> = ({
  slab,
  ...restProps
}) => {
  return <MuiTypography {...restProps} />;
};

export const Typography = styled(CustomTypography)<TypographyProps>`
  ${spacing}
  ${typography}
  ${breakpointSpacing}
  ${({ slab }) => slab && slabStyles}
`;

const slabStyles = css`
  font-family: ${({ theme }) => theme.typography.fontFamilySlab}, serif;
  font-weight: ${({ theme }) => theme.typography.fontWeightSlab};
  font-style: italic;
`;
