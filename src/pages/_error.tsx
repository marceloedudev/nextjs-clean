/* eslint-disable @typescript-eslint/no-var-requires */
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const Error = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
Error.getInitialProps = ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  if (!process.browser) {
    console.log('Reporting error to Rollbar...')
    const Rollbar = require('rollbar')
    const rollbar = new Rollbar(serverRuntimeConfig.rollbarServerToken)
    rollbar.error(err, req, (rollbarError) => {
      if (rollbarError) {
        console.error('Rollbar error reporting failed:')
        console.error(rollbarError)
        return
      }
      console.log('Reported error to Rollbar')
    })
  }
  return { statusCode }
}
export default Error
