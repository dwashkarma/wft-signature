import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
import copy from "rollup-plugin-copy";
import svelte from "rollup-plugin-svelte";
// import { preprocess } from "svelte-preprocess";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declarationDir: "dist/types",
        declaration: true,
      }),
      image(),
      PeerDepsExternalPlugin(),
      copy({ targets: [{ src: "src/assets/*.jpg", dest: "dist/assets" }] }),
      svelte(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/declaration.d.ts", format: "cjs" }],
    plugins: [dts()],
  },
];
