import styled from '@emotion/styled';
import {
    borders,
    BordersProps,
    display,
    DisplayProps,
    flexbox,
    FlexboxProps,
    palette,
    PaletteProps,
    positions,
    PositionsProps,
    shadows,
    ShadowsProps,
    sizing,
    SizingProps,
    spacing,
    SpacingProps,
    typography,
    TypographyProps,
    compose,
    breakpoints,
  } from '@mui/system';
  
  type BoxProps = BordersProps &
    DisplayProps &
    FlexboxProps &
    PaletteProps &
    PositionsProps &
    ShadowsProps &
    SizingProps &
    SpacingProps &
    TypographyProps;
  
  const breakpointsFn = breakpoints(
    compose(display, flexbox, palette, positions, sizing, spacing, typography)
  );
  
  export const Box = styled.div<BoxProps>`
    ${borders}
    ${display}
    ${flexbox}
    ${palette}
    ${positions}
    ${shadows}
    ${sizing}
    ${spacing}
    ${typography}
    ${breakpointsFn}
  `;