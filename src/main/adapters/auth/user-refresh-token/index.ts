import StorageFactory from '@/infra/factory/StorageFactory'

const keyToken = 'RToken'

export default class UserRefreshTokenAdapter {
  get() {
    return new StorageFactory().createCookieStorage().get(keyToken)
  }

  set(value) {
    new StorageFactory().createCookieStorage().set(keyToken, value)
  }

  remove() {
    new StorageFactory().createCookieStorage().destroy(keyToken)
  }
}
