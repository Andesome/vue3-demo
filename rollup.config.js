// rollup.config.js
import resolve from "rollup-plugin-node-resolve"
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"

const config = {
  input: "src/main.js",
  output: {
    name: "IconFont",
    exports: "named",
    globals: {
      vue: "Vue"
    }
    // external: ["vue"],
  },
  plugins: [
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      presets: ["@vue/babel-preset-jsx"],
      exclude: "**/node_modules/**"
    }),
    commonjs(),
  ]
}

export default config
