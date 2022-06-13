import { HttpClient } from '@/infra/http/http-client'
import ServiceHttpBaseUrl from '../base-url/ServiceHttpBaseUrl'
import AuthServiceHttp from '../http/AuthServiceHttp'
import ServiceFactoryImpl from './ServiceFactoryImpl'

class ServiceFactoryHttp implements ServiceFactoryImpl {
  private serviceHttpBaseUrl: ServiceHttpBaseUrl

  constructor(private readonly httpClient: HttpClient) {
    this.serviceHttpBaseUrl = new ServiceHttpBaseUrl()
  }

  createAuthService() {
    const pathService = this.serviceHttpBaseUrl.AuthService()
    return new AuthServiceHttp(this.httpClient, pathService)
  }
}

export default ServiceFactoryHttp
