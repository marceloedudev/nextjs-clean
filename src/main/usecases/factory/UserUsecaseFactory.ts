import AuthServiceHttp from '@/infra/service/http/AuthServiceHttp'
import UserMeUsecase from '../user/UserMeUsecase'
import UserRefreshUsecase from '../user/UserRefreshTokenUsecase'
import UserRevokeTokenUsecase from '../user/UserRevokeTokenUsecase'
import UserSignInUsecase from '../user/UserSignInUsecase'

class UserUsecaseFactory {
  private authServiceHttpHome: AuthServiceHttp
  private authServiceHttpBasic: AuthServiceHttp

  constructor({ httpServiceHome, httpServiceBasic }) {
    this.authServiceHttpHome = httpServiceHome.createAuthService()
    this.authServiceHttpBasic = httpServiceBasic.createAuthService()
  }

  createSignInUsecase() {
    return new UserSignInUsecase(this.authServiceHttpHome)
  }

  createRevokeToken() {
    return new UserRevokeTokenUsecase(this.authServiceHttpHome)
  }

  createRefreshToken() {
    return new UserRefreshUsecase(this.authServiceHttpBasic)
  }

  createUserMeToken() {
    return new UserMeUsecase(this.authServiceHttpHome)
  }
}

export default UserUsecaseFactory
