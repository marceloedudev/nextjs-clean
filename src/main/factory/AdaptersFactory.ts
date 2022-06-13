import AuthenticatePageAdapter from '../adapters/authenticate-page'
import UserAccessTokenAdapter from '../adapters/user-access-token'
import UserSessionAdapter from '../adapters/user-account'
import UserRefreshTokenAdapter from '../adapters/user-refresh-token'

class AdaptersFactory {
  createUserAccessToken() {
    return new UserAccessTokenAdapter()
  }

  createUserRefreshToken() {
    return new UserRefreshTokenAdapter()
  }

  createUserAccount() {
    return new UserSessionAdapter()
  }

  createAuthenticatePage() {
    return new AuthenticatePageAdapter()
  }
}

export default AdaptersFactory
