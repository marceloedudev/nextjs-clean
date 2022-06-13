import Cookies from 'universal-cookie'

class CookiesAdapter {
  // next-cookies
  static nextCookies(ctx, options?) {
    const header = ctx.req && ctx.req.headers && ctx.req.headers.cookie
    const uc = new Cookies(header)
    return uc.getAll(options)
  }

  static isValidCookie(cookie) {
    return cookie && Object.getOwnPropertyNames(cookie)?.length
  }
}

export default CookiesAdapter
