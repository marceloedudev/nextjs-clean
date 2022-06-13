import { IStorage } from '../istorage'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

class CookieStorage implements IStorage {
  static get(key: string): any | null {
    try {
      const item = cookies.get(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  static destroy(key: string): void {
    cookies.remove(key)
  }

  static set(key: string, value: any): void {
    if (value) {
      cookies.set(key, JSON.stringify(value), { maxAge: 60 * 60 * 24 })
      return
    }
    cookies.remove(key)
  }
}

export default CookieStorage
