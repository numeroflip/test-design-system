"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var deepmerge_1 = __importDefault(require("deepmerge"));
var styles_1 = require("@material-ui/core/styles");
var createBreakpoints_1 = __importDefault(require("@material-ui/core/styles/createBreakpoints"));
var breakpoints = (0, createBreakpoints_1.default)({});
var baseMuiTheme = (0, styles_1.createTheme)({
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
        h1: (_a = {
                fontSize: '70px',
                fontWeight: 700,
                lineHeight: 1.09
            },
            _a[breakpoints.down('xs')] = {
                fontSize: '46px',
            },
            _a),
        h2: (_b = {
                fontSize: '48px',
                fontWeight: 700
            },
            _b[breakpoints.down('xs')] = {
                fontSize: '40px',
            },
            _b),
        h3: (_c = {
                fontSize: '36px',
                fontWeight: 600
            },
            _c[breakpoints.down('xs')] = {
                fontSize: '32px',
            },
            _c),
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
    props: {
        MuiButtonBase: {
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
});
var extendedTheme = {
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
exports.theme = (0, deepmerge_1.default)(baseMuiTheme, extendedTheme);
