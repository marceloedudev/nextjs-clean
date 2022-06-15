import CookieStorage from '@/infra/storage/cookie-storage'

const keyToken = 'RToken'

export default class UserRefreshTokenAdapter {
  get() {
    return CookieStorage.get(keyToken)
  }

  set(value) {
    CookieStorage.set(keyToken, value)
  }

  remove() {
    CookieStorage.destroy(keyToken)
  }
}
