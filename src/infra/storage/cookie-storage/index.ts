import { IStorage } from '../../../main/interfaces/storage/istorage'
import { Cookies } from 'react-cookie'

class CookieStorage implements IStorage {
  private cookies: Cookies

  constructor() {
    this.cookies = new Cookies()
  }

  get(key: string) {
    try {
      const item = this.cookies.get(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  destroy(key: string) {
    this.cookies.remove(key)
  }

  set(key: string, value: any) {
    if (value) {
      this.cookies.set(key, JSON.stringify(value), { maxAge: 60 * 60 * 24 })
      return
    }
    this.cookies.remove(key)
  }
}

export default CookieStorage
