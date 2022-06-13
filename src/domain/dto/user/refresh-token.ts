export interface IUserRefreshTokenRequest {
  grant_type: IUserRefreshTokenGrantType
  refresh_token: string
}

export type IUserRefreshTokenGrantType = 'refresh_token'

export interface IUserRefreshTokenResponse {
  user_id: number
  access_token: string
  expires_in: number
  token_type: string
  refresh_token: string
}

export interface UserRefreshTokenUsecaseRequest {
  refresh_token: string
}
