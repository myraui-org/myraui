/* eslint-disable */
export default {
  displayName: '@myraui/react-utils',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '../../../tools/scripts/setup-tests.ts'],
  transformIgnorePatterns: ['!(src/.+)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/utilities/react-utils',
  collectCoverage: false,
};
