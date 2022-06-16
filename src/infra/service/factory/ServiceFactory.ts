/* eslint-disable no-process-env */
import AppConfig from '@/config/AppConfig'
import { HttpClient } from '@/main/interfaces/http/http-client'
import ServiceFactoryHttp from './ServiceFactoryHttp'
import ServiceFactoryMemory from './ServiceFactoryMemory'

class ServiceFactory {
  constructor(private readonly httpClient: HttpClient) {}

  createInstance() {
    if (AppConfig.isTest) {
      return new ServiceFactoryMemory()
    }
    return new ServiceFactoryHttp(this.httpClient)
  }
}

export default ServiceFactory
