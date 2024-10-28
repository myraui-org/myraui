const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { myraui } = require('@myraui-org/react/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../packages/react/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, '../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    myraui({
      defaultTheme: 'dark',
    }),
  ],
};
