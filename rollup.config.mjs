import packageJson from "./package.json" assert { type: "json" };
import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
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
  plugins: [nodeResolve(), commonjs(), typescript(), css()],
  external: ["react", "react-dom"],
  // external: [/^@material-ui.*/gm, "react", "react-dom", "styled-components"],
};
