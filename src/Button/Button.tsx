import React from 'react';
import {
  ButtonBase,
  ButtonBaseProps,
  darken,
  lighten,
} from '@material-ui/core';
import styled, { css } from 'styled-components';
import { theme } from '../theme';

type Size = 'lg' | 'md';
type Variant = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = ButtonBaseProps & {
  size?: Size;
  variant?: Variant;
  rounded?: boolean;
  outlined?: boolean;
  block?: boolean;
  blockXS?: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const colors = {
  primary: {
    fill: theme.palette.primary.main,
  },
  secondary: {
    fill: '#3C4340',
  },
  tertiary: {
    fill: '#F0F0F0',
    text: '#3C4340',
  },
};

const CustomButton: React.FC<ButtonProps> = ({
  rounded,
  outlined,
  ...restProps
}) => {
  return <ButtonBase {...restProps} />;
};

export const Button = styled(CustomButton)<ButtonBaseProps>`
  position: relative;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 600;
  font-family: ${(props) => props.theme.typography.fontFamily};
  text-decoration: none;
  transition-duration: ${(props) => props.theme.transitions.duration.short}ms;
  transition-timing-function: ${(props) =>
    props.theme.transitions.easing.sharp};
  color: ${(props) => props.theme.palette.common.white};
  white-space: nowrap;
  display: inline-flex;
  vertical-align: middle;
  line-height: normal;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  &:disabled {
    opacity: 0.35;
  }

  ${(props) => VARIANTS[props.variant || 'primary']};
  ${(props) => SIZES[props.size || 'md']};
  ${(props) => props.rounded && ROUNDED};
  ${(props) => props.outlined && OUTLINED[props.variant || 'primary']};
  ${(props) => props.block && BLOCK};
  ${(props) => props.blockXS && BLOCK_XS};
`;

const VARIANTS = {
  primary: css`
    background-color: ${colors.primary.fill};
    transition-property: background-color, color;
    border-color: ${colors.primary.fill};

    &:hover {
      background-color: ${darken(colors.primary.fill, 0.1)};
      border-color: ${darken(colors.primary.fill, 0.1)};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.fill};
    border-color: ${colors.secondary.fill};

    &:hover {
      background-color: ${darken(colors.secondary.fill, 0.1)};
      border-color: ${darken(colors.secondary.fill, 0.1)};
    }
  `,
  tertiary: css`
    background-color: ${colors.tertiary.fill};
    border-color: ${colors.tertiary.fill};
    color: ${colors.tertiary.text};

    &:hover {
      background-color: ${darken(colors.tertiary.fill, 0.1)};
      border-color: ${darken(colors.tertiary.fill, 0.1)};
    }
  `,
};

const SIZES = {
  md: css`
    font-size: 14px;
    padding: 8px 24px;
  `,
  lg: css`
    font-size: ${(props) => props.theme.typography.fontSize}px;
    padding: 12px 24px;
  `,
};

const ROUNDED = css`
  border-radius: 500px;
`;

const OUTLINED = {
  primary: css`
    background-color: transparent;
    color: ${colors.primary.fill};
    &:hover {
      color: ${darken(colors.primary.fill, 0.1)};
      background-color: ${lighten(colors.primary.fill, 0.95)};
      border-color: ${darken(colors.primary.fill, 0.1)};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${colors.secondary.fill};
    &:hover {
      color: ${darken(colors.secondary.fill, 0.1)};
      background-color: ${lighten(colors.secondary.fill, 0.95)};
      border-color: ${darken(colors.secondary.fill, 0.1)};
    }
  `,
  tertiary: '',
};

const BLOCK = css`
  width: 100%;
`;

const BLOCK_XS = css`
  ${(props) => props.theme.breakpoints.down('xs')} {
    width: 100%;
  }
`;
