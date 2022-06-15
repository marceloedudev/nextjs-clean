import AdaptersFactory from '@/main/factory/AdaptersFactory'
import UserAccessTokenAdapter from '../user-access-token'
import UserRefreshTokenAdapter from '../user-refresh-token'

export default class UserSessionAdapter {
  private userAccessTokenAdapter: UserAccessTokenAdapter
  private userRefreshTokenAdapter: UserRefreshTokenAdapter

  constructor() {
    const adaptersFactory = new AdaptersFactory()
    this.userAccessTokenAdapter = adaptersFactory.createUserAccessToken()
    this.userRefreshTokenAdapter = adaptersFactory.createUserRefreshToken()
  }

  async remove() {
    try {
      // const accessToken = userAccessTokenAdapter.get()
      // await UserRevokeTokenService.execute({
      //   grant_type: 'access_token',
      //   token: accessToken
      // })

      this.userAccessTokenAdapter.remove()
      this.userRefreshTokenAdapter.remove()
    } catch (err) {
      this.userAccessTokenAdapter.remove()
      this.userRefreshTokenAdapter.remove()
    }
  }
}
