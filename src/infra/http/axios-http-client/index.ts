import { HttpClient, HttpRequest, HttpResponse } from '../http-client'

import { AxiosResponse } from 'axios'
import UserSessionAdapter from '@/main/adapters/user-account'
import UserRefreshTokenAdapter from '@/main/adapters/user-refresh-token'
import HttpClientResponse from '@/infra/http/HttpClientResponse'
import UsecaseFactory from '@/main/factory/UsecaseFactory'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import AxiosHttp from './axios-http'
import AppConfig from '@/config/AppConfig'

class AxiosHttpClient implements HttpClient {
  private userSessionAdapter: UserSessionAdapter
  private userRefreshTokenAdapter: UserRefreshTokenAdapter
  private adaptersFactory: AdaptersFactory
  private usecaseFactory: UsecaseFactory
  private axiosHttp: AxiosHttp

  constructor(apiUrl?: string) {
    this.userSessionAdapter = new UserSessionAdapter()
    this.userRefreshTokenAdapter = new UserRefreshTokenAdapter()
    this.adaptersFactory = new AdaptersFactory()
    this.usecaseFactory = new UsecaseFactory()
    const url = apiUrl ?? AppConfig.ApiUrl
    this.axiosHttp = new AxiosHttp(url)
  }

  private getInstance() {
    this.axiosHttp.create()
    this.axiosHttp.interceptors({
      userSessionAdapter: this.userSessionAdapter,
      userRefreshTokenAdapter: this.userRefreshTokenAdapter,
      userAccessTokenAdapter: this.adaptersFactory.createUserAccessToken(),
      refreshTokenUserUsecase: this.usecaseFactory
        .createUserUsecase()
        .createRefreshToken()
    })
    const httpRequest = this.axiosHttp.getClient()
    return httpRequest
  }

  async request(data: HttpRequest): Promise<HttpClientResponse<any>> {
    let response: AxiosResponse
    try {
      response = await this.getInstance().request({
        url: data.url,
        method: data.method,
        data: data?.body,
        headers: data?.headers
      })
      return Promise.resolve(
        new HttpClientResponse({
          statusCode: response?.status,
          body: response.data
        } as HttpResponse)
      )
    } catch (error: any) {
      response = error.response
      return Promise.reject(
        new HttpClientResponse({
          statusCode: response?.status,
          body: response.data
        } as HttpResponse)
      )
    }
  }
}

export default AxiosHttpClient
