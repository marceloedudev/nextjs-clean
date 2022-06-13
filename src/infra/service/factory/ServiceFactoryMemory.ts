import AuthServiceMemory from '../memory/AuthServiceMemory'
import ServiceFactoryImpl from './ServiceFactoryImpl'

class ServiceFactoryMemory implements ServiceFactoryImpl {
  createAuthService() {
    return new AuthServiceMemory()
  }
}

export default ServiceFactoryMemory
