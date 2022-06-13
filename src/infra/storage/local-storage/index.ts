import { IStorage } from '../istorage'

class LocalStorage implements IStorage {
  static get(key: string): any | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  static destroy(key: string): void {
    localStorage.removeItem(key)
  }

  static set(key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
      return
    }
    LocalStorage.destroy(key)
  }
}

export default LocalStorage
