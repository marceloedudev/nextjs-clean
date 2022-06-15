import CookieStorage from '@/infra/storage/cookie-storage'

const keyToken = 'AToken'

export default class UserAccessTokenAdapter {
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
