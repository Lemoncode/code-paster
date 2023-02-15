module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/test/setup.ts'],
  modulePathIgnorePatterns: ['cypress'],
  moduleNameMapper: {
    '^.+\\.png$': '<rootDir>/pngTransform.js',
  }
};
