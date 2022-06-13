import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import UserSigninInputRequest from '@/domain/aggregates/auth/UserSigninInputRequest'
import AuthServiceHttp from '@/infra/service/http/AuthServiceHttp'

class UserSignInUsecase {
  constructor(private authHttpService: AuthServiceHttp) {}

  async execute(params: UserSigninInputRequest) {
    const service = await this.authHttpService.makeUserToken({
      grant_type: 'password',
      username: params.getEmail(),
      password: params.getPassword()
    })
    const userToken = new UserAuthToken(service.getBody())
    return userToken
  }
}

export default UserSignInUsecase
