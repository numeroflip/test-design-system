import packageJson from "./package.json" assert { type: "json" };
import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "dist/ts/index.js",
  preserveModules: true,
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
    },
    {
      dir: "dist/esm",
      format: "esm",
    },
  ],
  plugins: [nodeResolve({ browser: true }), commonjs(), css()],
  external: [/^@material-ui.*/gm, "react", "react-dom", "styled-components"],
};
