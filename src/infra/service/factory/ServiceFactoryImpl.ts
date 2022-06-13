import AuthServiceHttpImpl from '@/services/http/AuthServiceHttpImpl'

interface ServiceFactoryHttpImpl {
  createAuthService(): AuthServiceHttpImpl
}

export default ServiceFactoryHttpImpl
