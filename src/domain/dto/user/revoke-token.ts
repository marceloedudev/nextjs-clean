export interface IUserRevokeTokenRequest {
  grant_type: IUserRevokeTokenGrantType
  token: string
}

export type IUserRevokeTokenGrantType = 'access_token' | 'refresh_token'
