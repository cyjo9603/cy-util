import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import prettier from 'rollup-plugin-prettier';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

import path from 'path';

const extensions = ['.js', '.ts'];

export default [
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.js', format: 'cjs' }],

    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      commonjs(),
      typescript({
        clean: true,
        sourceMap: false,
      }),
      resolve({ extensions }),
      uglify(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [
      dts(),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      prettier({
        tabWidth: 2,
      }),
    ],
  },
];
