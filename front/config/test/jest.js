module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/test/setup.ts'],
  modulePathIgnorePatterns: ['cypress'],
  moduleNameMapper: {
    '^.+\\.png$': '<rootDir>/pngTransform.js',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  }
};
