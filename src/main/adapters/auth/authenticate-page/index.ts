import CookiesAdapter from '@/infra/cookies'
import ServerSideAdapter from '@/infra/nextjs/ServerSide'
import RoutesFactory from '@/main/factory/RoutesFactory'

export interface AuthenticatePageProps {
  user: any
}

class AuthenticatePageAdapter {
  private routesFactory: RoutesFactory
  private cookiesAdapter: CookiesAdapter

  constructor() {
    this.routesFactory = new RoutesFactory()
    this.cookiesAdapter = new CookiesAdapter()
  }

  async securePage(ctx) {
    const cookie = this.cookiesAdapter.nextCookies(ctx)
    if (!this.cookiesAdapter.isValidCookie(cookie)) {
      ServerSideAdapter.redirectPage(
        ctx,
        `${this.routesFactory.createUserRoute().signin()}`
      )
    }
    return {
      user: {
        stars: 99
      }
    } as AuthenticatePageProps
  }

  async invalidateUser(ctx) {
    const cookie = this.cookiesAdapter.nextCookies(ctx)
    if (this.cookiesAdapter.isValidCookie(cookie)) {
      ServerSideAdapter.redirectPage(
        ctx,
        `${this.routesFactory.createUserRoute().profile()}`
      )
      return
    }
  }
}

export default AuthenticatePageAdapter
