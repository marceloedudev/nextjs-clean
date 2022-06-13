/* eslint-disable no-process-env */
class AppConfig {
  static ApiUrl = `${process.env.NEXT_PUBLIC_API_URL}`
  static Rollbar = {
    accessToken: 'POST_CLIENT_ITEM_ACCESS_TOKEN',
    environment: 'production'
  }
  static isTest = `${process.env.NEXT_PUBLIC_ENVIRONMENT}` === 'test'
}

export default AppConfig
