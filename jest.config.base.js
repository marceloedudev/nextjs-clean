/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */

const { pathsToModuleNameMapper } = require('ts-jest')

const pathsJson = require('./tsconfig.paths.json')

const { compilerOptions } = pathsJson

const aliasResolve = Object.entries(
    pathsToModuleNameMapper(compilerOptions.paths)
).reduce((accumulator, currentValue) => {
    const [key, value] = currentValue
    const caractere = value.charAt(0) === '.' ? 1 : 0
    accumulator[key] = `<rootDir>src/${value.substring(caractere)}`
    return accumulator
}, {})

module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    moduleNameMapper: {
        ...aliasResolve
    },
    preset: 'ts-jest',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    },
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 60,
            statements: 60
        }
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/tests/e2e/cypress'
    ],
    moduleFileExtensions: [
        'js',
        'json',
        'jsx',
        'ts',
        'tsx',
        'node',
        'feature',
        'features'
    ]
}