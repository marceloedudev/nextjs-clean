import AuthenticatePageAdapter from '../adapters/auth/authenticate-page'
import UserAccessTokenAdapter from '../adapters/auth/user-access-token'
import UserSessionAdapter from '../adapters/auth/user-account'
import UserRefreshTokenAdapter from '../adapters/auth/user-refresh-token'

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
