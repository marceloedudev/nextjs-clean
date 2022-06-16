import CookieStorage from '../storage/cookie-storage'
import LocalStorage from '../storage/local-storage'
import SessionStorage from '../storage/session-storage'

class StorageFactory {
  createCookieStorage() {
    return new CookieStorage()
  }

  createLocalStorage() {
    return new LocalStorage()
  }

  createSessionStorage() {
    return new SessionStorage()
  }
}

export default StorageFactory
