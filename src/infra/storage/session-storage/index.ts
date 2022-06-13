import { IStorage } from '../istorage'

class SessionStorage implements IStorage {
  static get(key: string): any | null {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  static destroy(key: string): void {
    sessionStorage.removeItem(key)
  }

  static set(key: string, value: any): void {
    if (value) {
      sessionStorage.setItem(key, JSON.stringify(value))
      return
    }
    SessionStorage.destroy(key)
  }
}

export default SessionStorage
