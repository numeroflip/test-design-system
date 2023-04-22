require("./index.css");
var $dYZEH$materialuisystem = require("@material-ui/system");
var $dYZEH$styledcomponents = require("styled-components");
var $dYZEH$reactjsxruntime = require("react/jsx-runtime");
var $dYZEH$react = require("react");
var $dYZEH$materialuicore = require("@material-ui/core");
var $dYZEH$deepmerge = require("deepmerge");
var $dYZEH$materialuicorestyles = require("@material-ui/core/styles");
var $dYZEH$materialuicorestylescreateBreakpoints = require("@material-ui/core/styles/createBreakpoints");
var $dYZEH$reactphoneinput2 = require("react-phone-input-2");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $28e730423bcaa1b0$exports = {};

$parcel$export($28e730423bcaa1b0$exports, "Box", () => $f38648e22553e0f2$export$e71c4d32a2263218);


const $f38648e22553e0f2$var$breakpointsFn = (0, $dYZEH$materialuisystem.breakpoints)((0, $dYZEH$materialuisystem.compose)((0, $dYZEH$materialuisystem.display), (0, $dYZEH$materialuisystem.flexbox), (0, $dYZEH$materialuisystem.palette), (0, $dYZEH$materialuisystem.positions), (0, $dYZEH$materialuisystem.sizing), (0, $dYZEH$materialuisystem.spacing), (0, $dYZEH$materialuisystem.typography)));
const $f38648e22553e0f2$export$e71c4d32a2263218 = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).div`
  ${(0, $dYZEH$materialuisystem.borders)}
  ${(0, $dYZEH$materialuisystem.display)}
  ${(0, $dYZEH$materialuisystem.flexbox)}
  ${(0, $dYZEH$materialuisystem.palette)}
  ${(0, $dYZEH$materialuisystem.positions)}
  ${(0, $dYZEH$materialuisystem.shadows)}
  ${(0, $dYZEH$materialuisystem.sizing)}
  ${(0, $dYZEH$materialuisystem.spacing)}
  ${(0, $dYZEH$materialuisystem.typography)}
  ${$f38648e22553e0f2$var$breakpointsFn}
`;




var $06da90ad3ad0c453$exports = {};

$parcel$export($06da90ad3ad0c453$exports, "Button", () => $f4b9b0753a1c52bf$export$353f5b6fc5456de1);




var $67d8bd73256b8650$exports = {};

$parcel$export($67d8bd73256b8650$exports, "theme", () => $67d8bd73256b8650$export$bca14c5b3b88a9c9);



const $67d8bd73256b8650$var$breakpoints = (0, ($parcel$interopDefault($dYZEH$materialuicorestylescreateBreakpoints)))({});
let $67d8bd73256b8650$var$baseMuiTheme = (0, $dYZEH$materialuicorestyles.createMuiTheme)({
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
            [$67d8bd73256b8650$var$breakpoints.down("xs")]: {
                fontSize: "46px"
            }
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            [$67d8bd73256b8650$var$breakpoints.down("xs")]: {
                fontSize: "40px"
            }
        },
        h3: {
            fontSize: "36px",
            fontWeight: 600,
            [$67d8bd73256b8650$var$breakpoints.down("xs")]: {
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
const $67d8bd73256b8650$var$extendedTheme = {
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
const $67d8bd73256b8650$export$bca14c5b3b88a9c9 = (0, ($parcel$interopDefault($dYZEH$deepmerge)))($67d8bd73256b8650$var$baseMuiTheme, $67d8bd73256b8650$var$extendedTheme);


const $f4b9b0753a1c52bf$var$colors = {
    primary: {
        fill: (0, $67d8bd73256b8650$export$bca14c5b3b88a9c9).palette.primary.main
    },
    secondary: {
        fill: "#3C4340"
    },
    tertiary: {
        fill: "#F0F0F0",
        text: "#3C4340"
    }
};
const $f4b9b0753a1c52bf$var$CustomButton = ({ rounded: rounded , outlined: outlined , ...restProps })=>{
    return /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)((0, $dYZEH$materialuicore.ButtonBase), {
        ...restProps
    });
};
const $f4b9b0753a1c52bf$export$353f5b6fc5456de1 = (0, ($parcel$interopDefault($dYZEH$styledcomponents)))($f4b9b0753a1c52bf$var$CustomButton)`
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

  ${(props)=>$f4b9b0753a1c52bf$var$VARIANTS[props.variant || "primary"]};
  ${(props)=>$f4b9b0753a1c52bf$var$SIZES[props.size || "md"]};
  ${(props)=>props.rounded && $f4b9b0753a1c52bf$var$ROUNDED};
  ${(props)=>props.outlined && $f4b9b0753a1c52bf$var$OUTLINED[props.variant || "primary"]};
  ${(props)=>props.block && $f4b9b0753a1c52bf$var$BLOCK};
  ${(props)=>props.blockXS && $f4b9b0753a1c52bf$var$BLOCK_XS};
`;
const $f4b9b0753a1c52bf$var$VARIANTS = {
    primary: (0, $dYZEH$styledcomponents.css)`
    background-color: ${$f4b9b0753a1c52bf$var$colors.primary.fill};
    transition-property: background-color, color;
    border-color: ${$f4b9b0753a1c52bf$var$colors.primary.fill};

    &:hover {
      background-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.primary.fill, 0.1)};
      border-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.primary.fill, 0.1)};
    }
  `,
    secondary: (0, $dYZEH$styledcomponents.css)`
    background-color: ${$f4b9b0753a1c52bf$var$colors.secondary.fill};
    border-color: ${$f4b9b0753a1c52bf$var$colors.secondary.fill};

    &:hover {
      background-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.secondary.fill, 0.1)};
      border-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.secondary.fill, 0.1)};
    }
  `,
    tertiary: (0, $dYZEH$styledcomponents.css)`
    background-color: ${$f4b9b0753a1c52bf$var$colors.tertiary.fill};
    border-color: ${$f4b9b0753a1c52bf$var$colors.tertiary.fill};
    color: ${$f4b9b0753a1c52bf$var$colors.tertiary.text};

    &:hover {
      background-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.tertiary.fill, 0.1)};
      border-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.tertiary.fill, 0.1)};
    }
  `
};
const $f4b9b0753a1c52bf$var$SIZES = {
    md: (0, $dYZEH$styledcomponents.css)`
    font-size: 14px;
    padding: 8px 24px;
  `,
    lg: (0, $dYZEH$styledcomponents.css)`
    font-size: ${(props)=>props.theme.typography.fontSize}px;
    padding: 12px 24px;
  `
};
const $f4b9b0753a1c52bf$var$ROUNDED = (0, $dYZEH$styledcomponents.css)`
  border-radius: 500px;
`;
const $f4b9b0753a1c52bf$var$OUTLINED = {
    primary: (0, $dYZEH$styledcomponents.css)`
    background-color: transparent;
    color: ${$f4b9b0753a1c52bf$var$colors.primary.fill};
    &:hover {
      color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.primary.fill, 0.1)};
      background-color: ${(0, $dYZEH$materialuicore.lighten)($f4b9b0753a1c52bf$var$colors.primary.fill, 0.95)};
      border-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.primary.fill, 0.1)};
    }
  `,
    secondary: (0, $dYZEH$styledcomponents.css)`
    background-color: transparent;
    color: ${$f4b9b0753a1c52bf$var$colors.secondary.fill};
    &:hover {
      color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.secondary.fill, 0.1)};
      background-color: ${(0, $dYZEH$materialuicore.lighten)($f4b9b0753a1c52bf$var$colors.secondary.fill, 0.95)};
      border-color: ${(0, $dYZEH$materialuicore.darken)($f4b9b0753a1c52bf$var$colors.secondary.fill, 0.1)};
    }
  `,
    tertiary: ""
};
const $f4b9b0753a1c52bf$var$BLOCK = (0, $dYZEH$styledcomponents.css)`
  width: 100%;
`;
const $f4b9b0753a1c52bf$var$BLOCK_XS = (0, $dYZEH$styledcomponents.css)`
  ${(props)=>props.theme.breakpoints.down("xs")} {
    width: 100%;
  }
`;




var $fd2420e05e647cf2$exports = {};

$parcel$export($fd2420e05e647cf2$exports, "Typography", () => $f0332f6274b45495$export$1c6175f3aa4394b7);





const $f0332f6274b45495$var$breakpointSpacing = (0, $dYZEH$materialuisystem.breakpoints)((0, $dYZEH$materialuisystem.compose)((0, $dYZEH$materialuisystem.spacing), (0, $dYZEH$materialuisystem.typography)));
const $f0332f6274b45495$var$CustomTypography = ({ slab: slab , ...restProps })=>{
    return /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)((0, $dYZEH$materialuicore.Typography), {
        ...restProps
    });
};
const $f0332f6274b45495$export$1c6175f3aa4394b7 = (0, ($parcel$interopDefault($dYZEH$styledcomponents)))($f0332f6274b45495$var$CustomTypography)`
  ${(0, $dYZEH$materialuisystem.spacing)}
  ${(0, $dYZEH$materialuisystem.typography)}
  ${$f0332f6274b45495$var$breakpointSpacing}
  ${({ slab: slab  })=>slab && $f0332f6274b45495$var$slabStyles}
`;
const $f0332f6274b45495$var$slabStyles = (0, $dYZEH$styledcomponents.css)`
  font-family: ${({ theme: theme  })=>theme.typography.fontFamilySlab}, serif;
  font-weight: ${({ theme: theme  })=>theme.typography.fontWeightSlab};
  font-style: italic;
`;




var $a152a9df0bc4026a$exports = {};

$parcel$export($a152a9df0bc4026a$exports, "FormControl", () => $11086c978cbb387c$export$fe5d99d8691b3f62);
$parcel$export($a152a9df0bc4026a$exports, "FormHelperText", () => $f4fe073e13233536$export$75f9ed82f6172e27);
$parcel$export($a152a9df0bc4026a$exports, "Input", () => $7e77a720369a9a0d$export$f5b8910cec6cf069);
$parcel$export($a152a9df0bc4026a$exports, "PhoneInput", () => $4aa3f5938c25611f$export$d9c67ff858089902);
$parcel$export($a152a9df0bc4026a$exports, "InputLabel", () => $f7ab13389af0331b$export$76d3231fec538b73);



const $11086c978cbb387c$export$fe5d99d8691b3f62 = ({ error: error , disabled: disabled , required: required , children: children  })=>{
    const childrenWithProps = (0, ($parcel$interopDefault($dYZEH$react))).Children.map(children, (child)=>{
        if (/*#__PURE__*/ (0, ($parcel$interopDefault($dYZEH$react))).isValidElement(child)) return /*#__PURE__*/ (0, ($parcel$interopDefault($dYZEH$react))).cloneElement(child, {
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
    return /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)($11086c978cbb387c$var$FormWrapper, {
        className: classes.join(" "),
        children: childrenWithProps
    });
};
const $11086c978cbb387c$var$FormWrapper = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).div`
  margin-bottom: ${(props)=>props.theme.spacing(2)}px;
`;







const $f4fe073e13233536$export$75f9ed82f6172e27 = ({ children: children , ...restProps })=>{
    return /*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)($f4fe073e13233536$var$StyledTypography, {
        variant: "caption",
        ...restProps,
        children: children
    });
};
const $f4fe073e13233536$var$StyledTypography = (0, ($parcel$interopDefault($dYZEH$styledcomponents)))((0, $f0332f6274b45495$export$1c6175f3aa4394b7))`
  display: block;
  margin-left: ${(props)=>props.theme.spacing(1.5)}px;
  margin-top: ${(props)=>props.theme.spacing(0.5)}px;

  ${({ error: error  })=>error && (0, $dYZEH$styledcomponents.css)`
      color: ${(props)=>props.theme.palette.error.main};
    `}

  ${({ disabled: disabled  })=>disabled && (0, $dYZEH$styledcomponents.css)`
      color: ${(props)=>props.theme.palette.grey[500]};
    `}
  
  ${(0, $dYZEH$materialuisystem.spacing)}
`;




const $7e77a720369a9a0d$export$f5b8910cec6cf069 = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).input`
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

  ${({ error: error  })=>error && (0, $dYZEH$styledcomponents.css)`
      border-color: ${(props)=>props.theme.palette.error.main};
    `}
`;







const $4aa3f5938c25611f$export$f5b8910cec6cf069 = ({ specialLabel: specialLabel = "" , error: error , ...props })=>/*#__PURE__*/ (0, $dYZEH$reactjsxruntime.jsx)((0, ($parcel$interopDefault($dYZEH$reactphoneinput2))), {
        specialLabel: specialLabel,
        ...props
    });
const $4aa3f5938c25611f$export$d9c67ff858089902 = (0, ($parcel$interopDefault($dYZEH$styledcomponents)))($4aa3f5938c25611f$export$f5b8910cec6cf069)`
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

    ${({ error: error  })=>error && (0, $dYZEH$styledcomponents.css)`
        border-color: ${(props)=>props.theme.palette.error.main};
      `}
  }
`;





const $f7ab13389af0331b$export$76d3231fec538b73 = (0, ($parcel$interopDefault($dYZEH$styledcomponents))).label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.4px;
  margin-left: ${(props)=>props.theme.spacing(1.5)}px;
  margin-bottom: ${(props)=>props.theme.spacing(0.5)}px;

  ${({ disabled: disabled  })=>disabled && (0, $dYZEH$styledcomponents.css)`
      color: ${(props)=>props.theme.palette.grey[500]};
    `}

  ${({ required: required  })=>required && (0, $dYZEH$styledcomponents.css)`
      &:after {
        content: ' *';
      }
    `}

  ${(0, $dYZEH$materialuisystem.spacing)}
`;





$parcel$exportWildcard(module.exports, $28e730423bcaa1b0$exports);
$parcel$exportWildcard(module.exports, $06da90ad3ad0c453$exports);
$parcel$exportWildcard(module.exports, $fd2420e05e647cf2$exports);
$parcel$exportWildcard(module.exports, $a152a9df0bc4026a$exports);
$parcel$exportWildcard(module.exports, $67d8bd73256b8650$exports);


//# sourceMappingURL=index.js.map
