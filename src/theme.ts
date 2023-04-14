import deepMerge from 'deepmerge';
import { createBreakpoints, createTheme } from '@mui/system';

const breakpoints = createBreakpoints({});

let baseMuiTheme = createTheme({
  palette: {
    primary: {
      light: '#ff933e',
      main: '#E86202',
      dark: '#ae3200',
    },
    secondary: {
      light: '#9CBA6C',
      main: '#537124',
      dark: '#374C19',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#3C4340',
      secondary: '#686D6B',
      disabled: '#F0F0F0',
    },
  },
  typography: {
    fontFamily: '"Poppins", Helvetica, Arial, Sans-Serif',
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: '70px',
      fontWeight: 700,
      lineHeight: 1.09,
      [breakpoints.down('xs')]: {
        fontSize: '46px',
      },
    },
    h2: {
      fontSize: '48px',
      fontWeight: 700,
      [breakpoints.down('xs')]: {
        fontSize: '40px',
      },
    },
    h3: {
      fontSize: '36px',
      fontWeight: 600,
      [breakpoints.down('xs')]: {
        fontSize: '32px',
      },
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '24px',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.68,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.68,
    },
    overline: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#686D6B',
      lineHeight: 1.68,
      textTransform: 'none',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '.4px',
    },
  },
});

const extendedTheme = {
  typography: {
    fontWeightSlab: 900,
    fontFamilySlab: '"Playfair Display", Helvetica, Arial, Sans-Serif',
    label: {
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.4px',
    },
  },
  colors: {
    periglacialBlue: '#DDE3D3',
  },
  navbar: {
    height: '65px',
  },
};

export const theme = deepMerge(baseMuiTheme, extendedTheme);
