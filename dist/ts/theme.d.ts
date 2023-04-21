export declare const theme: {
    shape: import("@material-ui/core/styles/shape").Shape;
    breakpoints: import("@material-ui/core/styles/createBreakpoints").Breakpoints;
    direction: "ltr" | "rtl";
    mixins: import("@material-ui/core/styles/createMixins").Mixins;
    overrides: import("@material-ui/core/styles/overrides").Overrides;
    palette: import("@material-ui/core/styles/createPalette").Palette;
    props: import("@material-ui/core/styles/props").ComponentsProps;
    shadows: import("@material-ui/core/styles/shadows").Shadows;
    spacing: import("@material-ui/core/styles/createSpacing").Spacing;
    transitions: import("@material-ui/core/styles").Transitions;
    typography: import("@material-ui/core/styles/createTypography").Typography;
    zIndex: import("@material-ui/core/styles/zIndex").ZIndex;
    unstable_strictMode: boolean;
} & {
    typography: {
        fontWeightSlab: number;
        fontFamilySlab: string;
        label: {
            fontWeight: number;
            fontSize: number;
            letterSpacing: string;
        };
    };
    colors: {
        periglacialBlue: string;
    };
    navbar: {
        height: string;
    };
};
