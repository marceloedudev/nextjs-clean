/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserRefreshTokenRequest } from '@/domain/dto/user/refresh-token'
import { IUserRevokeTokenRequest } from '@/domain/dto/user/revoke-token'
import {
  UserTokensRequest,
  UserTokensResponse
} from '@/domain/dto/user/tokens-model'
import HttpClientResponse from '@/domain/entity/auth/HttpClientResponse'
import AuthServiceHttpImpl from '@/services/http/AuthServiceHttpImpl'
import UserAuthTokenObjectMother from '../../../../tests/unit/domain/aggregates/auth/UserAuthTokenObjectMother'

class AuthServiceMemory implements AuthServiceHttpImpl {
  async makeUserToken(
    params: UserTokensRequest
  ): Promise<HttpClientResponse<UserTokensResponse>> {
    return new Promise((resolve) => {
      return resolve(
        new HttpClientResponse({
          statusCode: 200,
          body: UserAuthTokenObjectMother.valid()
        })
      )
    })
  }

  async revokeUserToken(params: IUserRevokeTokenRequest) {
    return new Promise((resolve) => {
      return resolve(
        new HttpClientResponse({
          statusCode: 200,
          body: null
        })
      )
    })
  }

  async refreshUserToken(
    params: IUserRefreshTokenRequest
  ): Promise<HttpClientResponse<UserTokensResponse>> {
    return new Promise((resolve) => {
      return resolve(
        new HttpClientResponse({
          statusCode: 200,
          body: UserAuthTokenObjectMother.valid()
        })
      )
    })
  }

  async getUserMe(): Promise<HttpClientResponse<UserTokensResponse>> {
    return new Promise((resolve) => {
      return resolve(
        new HttpClientResponse({
          statusCode: 200,
          body: UserAuthTokenObjectMother.valid()
        })
      )
    })
  }
}

export default AuthServiceMemory
