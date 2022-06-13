import AppConfig from '@/config/AppConfig'
import { Provider } from '@rollbar/react'

const rollbarConfig = {
  accessToken: AppConfig.Rollbar.accessToken,
  environment: AppConfig.Rollbar.environment
}

const ProviderRollbar = ({ children }) => {
  return <Provider config={rollbarConfig}>{children}</Provider>
}

export default ProviderRollbar
