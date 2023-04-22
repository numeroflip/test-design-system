import {breakpoints as $26Zo0$breakpoints, compose as $26Zo0$compose, display as $26Zo0$display, flexbox as $26Zo0$flexbox, palette as $26Zo0$palette, positions as $26Zo0$positions, sizing as $26Zo0$sizing, spacing as $26Zo0$spacing, typography as $26Zo0$typography, borders as $26Zo0$borders, shadows as $26Zo0$shadows} from "@material-ui/system";
import $26Zo0$styledcomponents, {css as $26Zo0$css} from "styled-components";
import {jsx as $26Zo0$jsx} from "react/jsx-runtime";
import $26Zo0$react from "react";
import {ButtonBase as $26Zo0$ButtonBase, darken as $26Zo0$darken, lighten as $26Zo0$lighten, Typography as $26Zo0$Typography} from "@material-ui/core";
import $26Zo0$deepmerge from "deepmerge";
import {createMuiTheme as $26Zo0$createMuiTheme} from "@material-ui/core/styles";
import $26Zo0$materialuicorestylescreateBreakpoints from "@material-ui/core/styles/createBreakpoints";
import $26Zo0$reactphoneinput2 from "react-phone-input-2";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $581af28042f78ea9$exports = {};

$parcel$export($581af28042f78ea9$exports, "Box", () => $a4ae636ea2dcbd36$export$e71c4d32a2263218);


const $a4ae636ea2dcbd36$var$breakpointsFn = (0, $26Zo0$breakpoints)((0, $26Zo0$compose)((0, $26Zo0$display), (0, $26Zo0$flexbox), (0, $26Zo0$palette), (0, $26Zo0$positions), (0, $26Zo0$sizing), (0, $26Zo0$spacing), (0, $26Zo0$typography)));
const $a4ae636ea2dcbd36$export$e71c4d32a2263218 = (0, $26Zo0$styledcomponents).div`
  ${(0, $26Zo0$borders)}
  ${(0, $26Zo0$display)}
  ${(0, $26Zo0$flexbox)}
  ${(0, $26Zo0$palette)}
  ${(0, $26Zo0$positions)}
  ${(0, $26Zo0$shadows)}
  ${(0, $26Zo0$sizing)}
  ${(0, $26Zo0$spacing)}
  ${(0, $26Zo0$typography)}
  ${$a4ae636ea2dcbd36$var$breakpointsFn}
`;




var $ffe57bfe8a5f9c18$exports = {};

$parcel$export($ffe57bfe8a5f9c18$exports, "Button", () => $2b2c5c213b5c81ed$export$353f5b6fc5456de1);




var $b44f59079fca3750$exports = {};

$parcel$export($b44f59079fca3750$exports, "theme", () => $b44f59079fca3750$export$bca14c5b3b88a9c9);



const $b44f59079fca3750$var$breakpoints = (0, $26Zo0$materialuicorestylescreateBreakpoints)({});
let $b44f59079fca3750$var$baseMuiTheme = (0, $26Zo0$createMuiTheme)({
    palette: {
        primary: {
            light: "#ff933e",
            main: "#E86202",
            dark: "#ae3200"
        },
        secondary: {
            light: "#9CBA6C",
            main: "#537124",
            dark: "#374C19"
        },
        background: {
            default: "#FFFFFF"
        },
        text: {
            primary: "#3C4340",
            secondary: "#686D6B",
            disabled: "#F0F0F0"
        }
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
            fontSize: "70px",
            fontWeight: 700,
            lineHeight: 1.09,
            [$b44f59079fca3750$var$breakpoints.down("xs")]: {
                fontSize: "46px"
            }
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            [$b44f59079fca3750$var$breakpoints.down("xs")]: {
                fontSize: "40px"
            }
        },
        h3: {
            fontSize: "36px",
            fontWeight: 600,
            [$b44f59079fca3750$var$breakpoints.down("xs")]: {
                fontSize: "32px"
            }
        },
        h4: {
            fontSize: "24px",
            fontWeight: 600
        },
        h5: {
            fontSize: "18px",
            fontWeight: 600
        },
        h6: {
            fontSize: "16px",
            fontWeight: 600
        },
        subtitle1: {
            fontSize: "24px",
            fontWeight: 500
        },
        subtitle2: {
            fontSize: "20px",
            fontWeight: 400
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.68
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.68
        },
        overline: {
            fontSize: "16px",
            fontWeight: 500,
            color: "#686D6B",
            lineHeight: 1.68,
            textTransform: "none"
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: ".4px"
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    }
});
const $b44f59079fca3750$var$extendedTheme = {
    typography: {
        fontWeightSlab: 900,
        fontFamilySlab: '"Playfair Display", Helvetica, Arial, Sans-Serif',
        label: {
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.4px"
        }
    },
    colors: {
        periglacialBlue: "#DDE3D3"
    },
    navbar: {
        height: "65px"
    }
};
const $b44f59079fca3750$export$bca14c5b3b88a9c9 = (0, $26Zo0$deepmerge)($b44f59079fca3750$var$baseMuiTheme, $b44f59079fca3750$var$extendedTheme);


const $2b2c5c213b5c81ed$var$colors = {
    primary: {
        fill: (0, $b44f59079fca3750$export$bca14c5b3b88a9c9).palette.primary.main
    },
    secondary: {
        fill: "#3C4340"
    },
    tertiary: {
        fill: "#F0F0F0",
        text: "#3C4340"
    }
};
const $2b2c5c213b5c81ed$var$CustomButton = ({ rounded: rounded , outlined: outlined , ...restProps })=>{
    return /*#__PURE__*/ (0, $26Zo0$jsx)((0, $26Zo0$ButtonBase), {
        ...restProps
    });
};
const $2b2c5c213b5c81ed$export$353f5b6fc5456de1 = (0, $26Zo0$styledcomponents)($2b2c5c213b5c81ed$var$CustomButton)`
  position: relative;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 600;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  text-decoration: none;
  transition-duration: ${(props)=>props.theme.transitions.duration.short}ms;
  transition-timing-function: ${(props)=>props.theme.transitions.easing.sharp};
  color: ${(props)=>props.theme.palette.common.white};
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

  ${(props)=>$2b2c5c213b5c81ed$var$VARIANTS[props.variant || "primary"]};
  ${(props)=>$2b2c5c213b5c81ed$var$SIZES[props.size || "md"]};
  ${(props)=>props.rounded && $2b2c5c213b5c81ed$var$ROUNDED};
  ${(props)=>props.outlined && $2b2c5c213b5c81ed$var$OUTLINED[props.variant || "primary"]};
  ${(props)=>props.block && $2b2c5c213b5c81ed$var$BLOCK};
  ${(props)=>props.blockXS && $2b2c5c213b5c81ed$var$BLOCK_XS};
`;
const $2b2c5c213b5c81ed$var$VARIANTS = {
    primary: (0, $26Zo0$css)`
    background-color: ${$2b2c5c213b5c81ed$var$colors.primary.fill};
    transition-property: background-color, color;
    border-color: ${$2b2c5c213b5c81ed$var$colors.primary.fill};

    &:hover {
      background-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.primary.fill, 0.1)};
      border-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.primary.fill, 0.1)};
    }
  `,
    secondary: (0, $26Zo0$css)`
    background-color: ${$2b2c5c213b5c81ed$var$colors.secondary.fill};
    border-color: ${$2b2c5c213b5c81ed$var$colors.secondary.fill};

    &:hover {
      background-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.secondary.fill, 0.1)};
      border-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.secondary.fill, 0.1)};
    }
  `,
    tertiary: (0, $26Zo0$css)`
    background-color: ${$2b2c5c213b5c81ed$var$colors.tertiary.fill};
    border-color: ${$2b2c5c213b5c81ed$var$colors.tertiary.fill};
    color: ${$2b2c5c213b5c81ed$var$colors.tertiary.text};

    &:hover {
      background-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.tertiary.fill, 0.1)};
      border-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.tertiary.fill, 0.1)};
    }
  `
};
const $2b2c5c213b5c81ed$var$SIZES = {
    md: (0, $26Zo0$css)`
    font-size: 14px;
    padding: 8px 24px;
  `,
    lg: (0, $26Zo0$css)`
    font-size: ${(props)=>props.theme.typography.fontSize}px;
    padding: 12px 24px;
  `
};
const $2b2c5c213b5c81ed$var$ROUNDED = (0, $26Zo0$css)`
  border-radius: 500px;
`;
const $2b2c5c213b5c81ed$var$OUTLINED = {
    primary: (0, $26Zo0$css)`
    background-color: transparent;
    color: ${$2b2c5c213b5c81ed$var$colors.primary.fill};
    &:hover {
      color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.primary.fill, 0.1)};
      background-color: ${(0, $26Zo0$lighten)($2b2c5c213b5c81ed$var$colors.primary.fill, 0.95)};
      border-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.primary.fill, 0.1)};
    }
  `,
    secondary: (0, $26Zo0$css)`
    background-color: transparent;
    color: ${$2b2c5c213b5c81ed$var$colors.secondary.fill};
    &:hover {
      color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.secondary.fill, 0.1)};
      background-color: ${(0, $26Zo0$lighten)($2b2c5c213b5c81ed$var$colors.secondary.fill, 0.95)};
      border-color: ${(0, $26Zo0$darken)($2b2c5c213b5c81ed$var$colors.secondary.fill, 0.1)};
    }
  `,
    tertiary: ""
};
const $2b2c5c213b5c81ed$var$BLOCK = (0, $26Zo0$css)`
  width: 100%;
`;
const $2b2c5c213b5c81ed$var$BLOCK_XS = (0, $26Zo0$css)`
  ${(props)=>props.theme.breakpoints.down("xs")} {
    width: 100%;
  }
`;




var $1cde7a0330f30180$exports = {};

$parcel$export($1cde7a0330f30180$exports, "Typography", () => $d8b5939a390f36b7$export$1c6175f3aa4394b7);





const $d8b5939a390f36b7$var$breakpointSpacing = (0, $26Zo0$breakpoints)((0, $26Zo0$compose)((0, $26Zo0$spacing), (0, $26Zo0$typography)));
const $d8b5939a390f36b7$var$CustomTypography = ({ slab: slab , ...restProps })=>{
    return /*#__PURE__*/ (0, $26Zo0$jsx)((0, $26Zo0$Typography), {
        ...restProps
    });
};
const $d8b5939a390f36b7$export$1c6175f3aa4394b7 = (0, $26Zo0$styledcomponents)($d8b5939a390f36b7$var$CustomTypography)`
  ${(0, $26Zo0$spacing)}
  ${(0, $26Zo0$typography)}
  ${$d8b5939a390f36b7$var$breakpointSpacing}
  ${({ slab: slab  })=>slab && $d8b5939a390f36b7$var$slabStyles}
`;
const $d8b5939a390f36b7$var$slabStyles = (0, $26Zo0$css)`
  font-family: ${({ theme: theme  })=>theme.typography.fontFamilySlab}, serif;
  font-weight: ${({ theme: theme  })=>theme.typography.fontWeightSlab};
  font-style: italic;
`;




var $6185992bc30b23aa$exports = {};

$parcel$export($6185992bc30b23aa$exports, "FormControl", () => $c610a1ddbbcb940c$export$fe5d99d8691b3f62);
$parcel$export($6185992bc30b23aa$exports, "FormHelperText", () => $dc453507091d003c$export$75f9ed82f6172e27);
$parcel$export($6185992bc30b23aa$exports, "Input", () => $2e410360a10347e8$export$f5b8910cec6cf069);
$parcel$export($6185992bc30b23aa$exports, "PhoneInput", () => $1da1655aa60b2ca6$export$d9c67ff858089902);
$parcel$export($6185992bc30b23aa$exports, "InputLabel", () => $559cdfc455841406$export$76d3231fec538b73);



const $c610a1ddbbcb940c$export$fe5d99d8691b3f62 = ({ error: error , disabled: disabled , required: required , children: children  })=>{
    const childrenWithProps = (0, $26Zo0$react).Children.map(children, (child)=>{
        if (/*#__PURE__*/ (0, $26Zo0$react).isValidElement(child)) return /*#__PURE__*/ (0, $26Zo0$react).cloneElement(child, {
            error: error,
            disabled: disabled,
            required: required
        });
        return child;
    });
    let classes = [
        "hc-form-control"
    ];
    if (disabled) classes.push("hc-form-control--disabled");
    if (error) classes.push("hc-form-control--error");
    if (required) classes.push("hc-form-control--required");
    return /*#__PURE__*/ (0, $26Zo0$jsx)($c610a1ddbbcb940c$var$FormWrapper, {
        className: classes.join(" "),
        children: childrenWithProps
    });
};
const $c610a1ddbbcb940c$var$FormWrapper = (0, $26Zo0$styledcomponents).div`
  margin-bottom: ${(props)=>props.theme.spacing(2)}px;
`;







const $dc453507091d003c$export$75f9ed82f6172e27 = ({ children: children , ...restProps })=>{
    return /*#__PURE__*/ (0, $26Zo0$jsx)($dc453507091d003c$var$StyledTypography, {
        variant: "caption",
        ...restProps,
        children: children
    });
};
const $dc453507091d003c$var$StyledTypography = (0, $26Zo0$styledcomponents)((0, $d8b5939a390f36b7$export$1c6175f3aa4394b7))`
  display: block;
  margin-left: ${(props)=>props.theme.spacing(1.5)}px;
  margin-top: ${(props)=>props.theme.spacing(0.5)}px;

  ${({ error: error  })=>error && (0, $26Zo0$css)`
      color: ${(props)=>props.theme.palette.error.main};
    `}

  ${({ disabled: disabled  })=>disabled && (0, $26Zo0$css)`
      color: ${(props)=>props.theme.palette.grey[500]};
    `}
  
  ${(0, $26Zo0$spacing)}
`;




const $2e410360a10347e8$export$f5b8910cec6cf069 = (0, $26Zo0$styledcomponents).input`
  background-color: ${(props)=>props.theme.palette.text.disabled};
  font-family: ${(props)=>props.theme.typography.fontFamily};
  font-weight: ${(props)=>props.theme.typography.body1.fontWeight};
  font-size: ${(props)=>props.theme.typography.body1.fontSize};
  line-height: ${(props)=>props.theme.typography.body1.lineHeight};
  border: 1px solid ${(props)=>props.theme.palette.text.disabled};
  border-radius: 8px;
  padding: ${(props)=>props.theme.spacing(1.5)}px;
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
    border: 1px solid ${(props)=>props.theme.palette.grey[400]};
  }

  &:active,
  &:focus,
  &:focus-visible {
    border: 1px solid ${(props)=>props.theme.palette.grey[600]};
    outline: none;
  }

  &:disabled {
    background-color: ${(props)=>props.theme.palette.grey[100]};
    border-color: ${(props)=>props.theme.palette.grey[100]};
    color: ${(props)=>props.theme.palette.grey[200]};
  }

  ${({ error: error  })=>error && (0, $26Zo0$css)`
      border-color: ${(props)=>props.theme.palette.error.main};
    `}
`;







const $1da1655aa60b2ca6$export$f5b8910cec6cf069 = ({ specialLabel: specialLabel = "" , error: error , ...props })=>/*#__PURE__*/ (0, $26Zo0$jsx)((0, $26Zo0$reactphoneinput2), {
        specialLabel: specialLabel,
        ...props
    });
const $1da1655aa60b2ca6$export$d9c67ff858089902 = (0, $26Zo0$styledcomponents)($1da1655aa60b2ca6$export$f5b8910cec6cf069)`
  .react-tel-input,
  .form-control {
    background-color: ${(props)=>props.theme.palette.text.disabled};
    font-family: ${(props)=>props.theme.typography.fontFamily};
    font-weight: ${(props)=>props.theme.typography.body1.fontWeight};
    font-size: ${(props)=>props.theme.typography.body1.fontSize};
    line-height: ${(props)=>props.theme.typography.body1.lineHeight};
    border: 1px solid ${(props)=>props.theme.palette.text.disabled};
    border-radius: ${(props)=>props.theme.spacing(1)}px;
    padding: ${(props)=>props.theme.spacing(1.5, 1.5, 1.5, 7.25)};
    width: 100%;

    &::placeholder {
      color: ${(props)=>props.theme.palette.grey[400]};
    }

    &:hover {
      border: 1px solid ${(props)=>props.theme.palette.grey[400]};
    }

    &:active,
    &:focus,
    &:focus-visible {
      border: 1px solid ${(props)=>props.theme.palette.grey[600]};
      outline: none;
      box-shadow: unset;
    }

    &:disabled {
      background-color: ${(props)=>props.theme.palette.grey[100]};
      border-color: ${(props)=>props.theme.palette.grey[100]};
      color: ${(props)=>props.theme.palette.grey[400]};
    }

    ${({ error: error  })=>error && (0, $26Zo0$css)`
        border-color: ${(props)=>props.theme.palette.error.main};
      `}
  }
`;





const $559cdfc455841406$export$76d3231fec538b73 = (0, $26Zo0$styledcomponents).label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.4px;
  margin-left: ${(props)=>props.theme.spacing(1.5)}px;
  margin-bottom: ${(props)=>props.theme.spacing(0.5)}px;

  ${({ disabled: disabled  })=>disabled && (0, $26Zo0$css)`
      color: ${(props)=>props.theme.palette.grey[500]};
    `}

  ${({ required: required  })=>required && (0, $26Zo0$css)`
      &:after {
        content: ' *';
      }
    `}

  ${(0, $26Zo0$spacing)}
`;







export {$a4ae636ea2dcbd36$export$e71c4d32a2263218 as Box, $2b2c5c213b5c81ed$export$353f5b6fc5456de1 as Button, $d8b5939a390f36b7$export$1c6175f3aa4394b7 as Typography, $c610a1ddbbcb940c$export$fe5d99d8691b3f62 as FormControl, $dc453507091d003c$export$75f9ed82f6172e27 as FormHelperText, $2e410360a10347e8$export$f5b8910cec6cf069 as Input, $1da1655aa60b2ca6$export$d9c67ff858089902 as PhoneInput, $559cdfc455841406$export$76d3231fec538b73 as InputLabel, $b44f59079fca3750$export$bca14c5b3b88a9c9 as theme};
//# sourceMappingURL=index.js.map
