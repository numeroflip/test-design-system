import packageJson from "./package.json" assert {type: 'json'};;
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "dist/ts/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "esm",
    },
  ],
  plugins: [nodeResolve(), commonjs(), css()]
};
