import { IUserRevokeTokenRequest } from '@/domain/dto/user/revoke-token'
import AuthServiceHttp from '@/infra/service/http/AuthServiceHttp'

class UserRevokeTokenUsecase {
  constructor(private authHttpService: AuthServiceHttp) {}

  async execute(params: IUserRevokeTokenRequest) {
    const service = await this.authHttpService.revokeUserToken(params)
    return service
  }
}

export default UserRevokeTokenUsecase
