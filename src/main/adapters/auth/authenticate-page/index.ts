import CookiesAdapter from '@/infra/cookies'
import ServerSideAdapter from '@/infra/nextjs/ServerSide'
import RoutesFactory from '@/main/factory/RoutesFactory'

export interface AuthenticatePageProps {
  user: any
}

class AuthenticatePageAdapter {
  routesFactory: RoutesFactory

  constructor() {
    this.routesFactory = new RoutesFactory()
  }

  async securePage(ctx) {
    const cookie = CookiesAdapter.nextCookies(ctx)
    if (!CookiesAdapter.isValidCookie(cookie)) {
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
    const cookie = CookiesAdapter.nextCookies(ctx)
    if (CookiesAdapter.isValidCookie(cookie)) {
      ServerSideAdapter.redirectPage(
        ctx,
        `${this.routesFactory.createUserRoute().profile()}`
      )
      return
    }
  }
}

export default AuthenticatePageAdapter
