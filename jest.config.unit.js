/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */

const configBaseJest = require('./jest.config.base')

module.exports = {
    ...configBaseJest,
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    testMatch: ['**/tests/unit/**/*.(spec|steps).(ts|tsx)']
}