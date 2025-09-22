// jest.preset.js
const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: false,
        diagnostics: false,
      },
    ],
  },
  // IMPORTANT: <rootDir> is the project (e.g., apps/api), so go up to the repo root
  setupFilesAfterEnv: ['<rootDir>/../../tools/testing/jest.setup.ts'],
  coverageReporters: ['text', 'lcov'],
};
