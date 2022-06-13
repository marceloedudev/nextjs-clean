import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import { UserTokensResponse } from '@/domain/dto/user/tokens-model'

export default class UserAuthTokenDataBuilder {
  private userAuthData: UserTokensResponse = {} as UserTokensResponse

  static create() {
    return new UserAuthTokenDataBuilder()
  }

  withValidAccessToken() {
    this.userAuthData.access_token = 'd71d72cb-d883-431f-a90a-5d202ecde932'
    return this
  }

  withValidExpiresIn() {
    this.userAuthData.expires_in = 3600
    return this
  }

  withValidRefreshToken() {
    this.userAuthData.refresh_token = '53216153-5f7d-4f6e-b340-9dd5bb2b7ebf'
    return this
  }

  withValidTokenType() {
    this.userAuthData.token_type = 'Bearer'
    return this
  }

  withValidUserId() {
    this.userAuthData.user_id = 15
    return this
  }

  build() {
    const userAuthToken = new UserAuthToken({
      access_token: this.userAuthData.access_token,
      expires_in: this.userAuthData.expires_in,
      refresh_token: this.userAuthData.refresh_token,
      token_type: this.userAuthData.token_type,
      user_id: this.userAuthData.user_id
    })
    return userAuthToken
  }
}
