import { UserTokensResponse } from '@/domain/dto/user/tokens-model'

export default class UserAuthToken {
  private access_token: string
  private expires_in: number
  private refresh_token: string
  private token_type: string
  private user_id: number

  constructor({
    access_token,
    expires_in,
    refresh_token,
    token_type,
    user_id
  }: UserTokensResponse) {
    this.access_token = access_token
    this.expires_in = expires_in
    this.refresh_token = refresh_token
    this.token_type = token_type
    this.user_id = user_id
  }

  getAccessToken() {
    return this.access_token
  }

  getExpiresIn() {
    return this.expires_in
  }

  getRefreshToken() {
    return this.refresh_token
  }

  getTokenType() {
    return this.token_type
  }

  getUserId() {
    return this.user_id
  }
}
