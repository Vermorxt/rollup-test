import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-css-export'
import tailwind from 'rollup-plugin-tailwind'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      json(),
      peerDepsExternal(),
      terser(),
      tailwind(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        minimize: true,
        extract: true,
        // modules: true, // NOTE: do NOT use this option, because it will prefix all css classes!
      }),
      resolve(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(), css()],
    external: [/\.(css|less|scss)$/],
    // include: '**/*.css',
  },
]
