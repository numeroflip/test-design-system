import pkg from "./package.json" assert { type: "json" };
import css from "rollup-plugin-import-css";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
];

const cjs = {
  input: ["src/index.ts"],
  output: {
    entryFileNames: `[name].js`,
    dir: "dist/cjs",
    format: "cjs",
    exports: "named",
  },
  plugins: [resolve(), commonjs(), typescript(), css()],
  external,
};

const es = {
  input: ["src/index.ts"],
  output: {
    entryFileNames: "[name].js",
    format: "es",
    preserveModules: true,
    dir: "dist/esm",
  },
  plugins: [resolve(), commonjs(), typescript(), css()],
  external,
};
export default [cjs, es];
