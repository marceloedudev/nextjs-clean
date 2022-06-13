import { Pact } from '@pact-foundation/pact'
import path from 'path'

class ContractFactory {
  createProviderAuthService(pathContract) {
    const mockProvider = new Pact({
      cors: true,
      consumer: 'storefront_consumer',
      provider: 'ms_auth_provider',
      logLevel: 'warn',
      log: path.join(pathContract, 'logs', 'pact.log'),
      dir: path.join(pathContract, 'pacts'),
      spec: 2,
      port: 8989
    })
    return mockProvider
  }
}

export default ContractFactory
