import { IUserRefreshTokenRequest } from '@/domain/dto/user/refresh-token'
import { IUserRevokeTokenRequest } from '@/domain/dto/user/revoke-token'
import {
  UserTokensRequest,
  UserTokensResponse
} from '@/domain/dto/user/tokens-model'
import HttpClientResponse from '@/infra/http/HttpClientResponse'

interface AuthServiceHttpImpl {
  makeUserToken(
    params: UserTokensRequest
  ): Promise<HttpClientResponse<UserTokensResponse>>
  revokeUserToken(params: IUserRevokeTokenRequest)
  refreshUserToken(
    params: IUserRefreshTokenRequest
  ): Promise<HttpClientResponse<UserTokensResponse>>
  getUserMe(): Promise<HttpClientResponse<UserTokensResponse>>
}

export default AuthServiceHttpImpl
