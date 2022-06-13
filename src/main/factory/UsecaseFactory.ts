import HttpRequestFactory from '@/infra/factory/HttpRequestFactory'
import ServiceFactory from '@/infra/service/factory/ServiceFactory'
import UserUsecaseFactory from '../usecases/factory/UserUsecaseFactory'

class UsecaseFactory {
  private httpRequestFactory: HttpRequestFactory

  constructor() {
    this.httpRequestFactory = new HttpRequestFactory()
  }

  // constructor = Maximum call stack size exceeded
  private getInstanceHome() {
    const makeHttpClient = this.httpRequestFactory.createHttpClient()
    const serviceFactoryHttp = new ServiceFactory(makeHttpClient)
    return serviceFactoryHttp.createInstance()
  }

  private getInstanceHttpBasic() {
    const makeHttpBasic = this.httpRequestFactory.createHttpClient()
    const serviceFactoryHttp = new ServiceFactory(makeHttpBasic)
    return serviceFactoryHttp.createInstance()
  }

  createUserUsecase() {
    return new UserUsecaseFactory({
      httpServiceHome: this.getInstanceHome(),
      httpServiceBasic: this.getInstanceHttpBasic()
    })
  }
}

export default UsecaseFactory
