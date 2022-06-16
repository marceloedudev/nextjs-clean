import TokenFactory from '@/domain/factory/auth/TokenFactory'
import UserAccessTokenAdapter from '@/main/adapters/auth/user-access-token'
import AdaptersFactory from '@/main/factory/AdaptersFactory'

class AxiosInterceptorRequest {
  private userAccessTokenAdapter: UserAccessTokenAdapter
  private tokenFactory: TokenFactory

  constructor(private readonly config) {
    const adaptersFactory = new AdaptersFactory()
    this.userAccessTokenAdapter = adaptersFactory.createUserAccessToken()
    this.tokenFactory = new TokenFactory()
  }

  execute() {
    const token = this.userAccessTokenAdapter.get()
    if (token?.length > 0) {
      this.config.headers[
        `${this.tokenFactory.getTokenHeaderName()}`
      ] = `${this.tokenFactory.getTypeToken()} ${token}`
    }
    return this.config
  }
}

export default AxiosInterceptorRequest
