export declare const theme: {
    shape: import("@mui/system").Shape;
    breakpoints: import("@mui/system").Breakpoints;
    direction: "ltr" | "rtl";
    palette: Record<string, any> & {
        mode: "light" | "dark";
    };
    shadows: unknown;
    spacing: import("@mui/system").Spacing;
    transitions: unknown;
    components: Record<string, any>;
    mixins: unknown;
    typography: unknown;
    zIndex: unknown;
    unstable_sxConfig: import("@mui/system").SxConfig;
    unstable_sx: (props: import("@mui/system").SxProps<import("@mui/system").Theme>) => import("@mui/styled-engine").CSSObject;
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
