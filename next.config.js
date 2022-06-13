/* eslint-disable no-process-env */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const withInterceptStdout = require('next-intercept-stdout')

const path = require('path')

const dotenv = require('dotenv')

const currentEnv = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'

dotenv.config({
    path: path.resolve(__dirname, `./env/.env.${currentEnv}`)
})

module.exports = withInterceptStdout({
        reactStrictMode: true,
        swcMinify: true,
        serverRuntimeConfig: {
            rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN
        }
    },
    (text) => (text.includes('Duplicate atom key') ? '' : text)
)