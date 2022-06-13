import UserAccessTokenAdapter from '@/main/adapters/user-access-token'
import AdaptersFactory from '@/main/factory/AdaptersFactory'

class AxiosInterceptorRequest {
  private userAccessTokenAdapter: UserAccessTokenAdapter

  constructor(private readonly config) {
    const adaptersFactory = new AdaptersFactory()
    this.userAccessTokenAdapter = adaptersFactory.createUserAccessToken()
  }

  execute() {
    const token = this.userAccessTokenAdapter.get()

    if (token?.length > 0) {
      this.config.headers['authorization'] = `Bearer ${token}`
    }

    return this.config
  }
}

export default AxiosInterceptorRequest
