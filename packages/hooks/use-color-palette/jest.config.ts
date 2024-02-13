/* eslint-disable */
export default {
  displayName: '@myra-ui/use-color-palette',
  preset: '../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '../../../tools/scripts/setup-tests.ts'],
  transformIgnorePatterns: ['!(src/.+)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/hooks/use-color-palette',
};
