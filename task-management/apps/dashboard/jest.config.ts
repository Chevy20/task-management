/* eslint-disable */
export default {
  displayName: 'dashboard',
  preset: '../../jest.preset.js', // keep Nx root preset
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).ts'],

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],

  // Let jest-preset-angular do the heavy lifting (handles TS, templates, etc.)
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },

  // Allow ESM modules (e.g., @angular/* .mjs) to be transformed
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],

  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/dashboard',
};
