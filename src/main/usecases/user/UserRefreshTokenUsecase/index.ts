import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import { UserRefreshTokenUsecaseRequest } from '@/domain/dto/user/refresh-token'
import AuthServiceHttp from '@/infra/service/http/AuthServiceHttp'

class UserRefreshUsecase {
  constructor(private authHttpService: AuthServiceHttp) {}

  async execute(params: UserRefreshTokenUsecaseRequest) {
    const service = await this.authHttpService.refreshUserToken({
      grant_type: 'refresh_token',
      refresh_token: params.refresh_token
    })
    const userToken = new UserAuthToken(service.getBody())
    return userToken
  }
}

export default UserRefreshUsecase
