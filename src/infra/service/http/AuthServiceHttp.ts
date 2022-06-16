import { IUserRefreshTokenRequest } from '@/domain/dto/user/refresh-token'
import { IUserRevokeTokenRequest } from '@/domain/dto/user/revoke-token'
import {
  UserTokensRequest,
  UserTokensResponse
} from '@/domain/dto/user/tokens-model'
import HttpClientResponse from '@/domain/entity/auth/HttpClientResponse'
import { HttpClient } from '@/main/interfaces/http/http-client'

import AuthServiceHttpImpl from '@/services/http/AuthServiceHttpImpl'

class AuthServiceHttp implements AuthServiceHttpImpl {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly pathService: string
  ) {}

  async makeUserToken(
    params: UserTokensRequest
  ): Promise<HttpClientResponse<UserTokensResponse>> {
    return this.httpClient.request({
      url: `${this.pathService}/user/tokens`,
      method: 'post',
      body: params
    })
  }

  async revokeUserToken(params: IUserRevokeTokenRequest) {
    return this.httpClient.request({
      url: `${this.pathService}/user/revoke`,
      method: 'post',
      body: params
    })
  }

  async refreshUserToken(
    params: IUserRefreshTokenRequest
  ): Promise<HttpClientResponse<UserTokensResponse>> {
    return this.httpClient.request({
      url: `${this.pathService}/user/tokens`,
      method: 'post',
      body: params
    })
  }

  async getUserMe(): Promise<HttpClientResponse<UserTokensResponse>> {
    return this.httpClient.request({
      url: `${this.pathService}/user/me`,
      method: 'get'
    })
  }
}

export default AuthServiceHttp
