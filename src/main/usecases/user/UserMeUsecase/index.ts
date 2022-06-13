import AuthServiceHttp from '@/infra/service/http/AuthServiceHttp'

class UserMeUsecase {
  constructor(private authHttpService: AuthServiceHttp) {}

  async execute() {
    const service = await this.authHttpService.getUserMe()
    return service
  }
}

export default UserMeUsecase
