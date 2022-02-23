import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.ts'],
    testEnvironment: 'node',
  };
};
