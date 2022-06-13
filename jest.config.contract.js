/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */

const configBaseJest = require('./jest.config.base')

module.exports = {
    ...configBaseJest,
    roots: ['<rootDir>/tests/contract'],
    testMatch: ['**/tests/contract/**/*.(spec).(ts|tsx)']
}