import AppConfig from '@/config/AppConfig'
import UserSessionAdapter from '@/main/adapters/auth/user-account'
import UserRefreshTokenAdapter from '@/main/adapters/auth/user-refresh-token'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import UsecaseFactory from '@/main/factory/UsecaseFactory'
import AxiosHttpHandler from '../axios/AxiosHttpHandler'

class HttpClientFactory {
  private userSessionAdapter: UserSessionAdapter
  private userRefreshTokenAdapter: UserRefreshTokenAdapter
  private adaptersFactory: AdaptersFactory
  private usecaseFactory: UsecaseFactory
  private axiosHttp: AxiosHttpHandler

  constructor(apiUrl?: string) {
    this.userSessionAdapter = new UserSessionAdapter()
    this.userRefreshTokenAdapter = new UserRefreshTokenAdapter()
    this.adaptersFactory = new AdaptersFactory()
    this.usecaseFactory = new UsecaseFactory()
    const url = apiUrl ?? AppConfig.ApiUrl
    this.axiosHttp = new AxiosHttpHandler(url)
  }

  createInstance() {
    this.axiosHttp.create()
    return this
  }

  createInterceptors() {
    this.axiosHttp.create()
    this.axiosHttp.interceptors({
      userSessionAdapter: this.userSessionAdapter,
      userRefreshTokenAdapter: this.userRefreshTokenAdapter,
      userAccessTokenAdapter: this.adaptersFactory.createUserAccessToken(),
      refreshTokenUserUsecase: this.usecaseFactory
        .createUserUsecase()
        .createRefreshToken()
    })
    return this
  }

  getAxiosHttp() {
    return this.axiosHttp
  }
}

export default HttpClientFactory
