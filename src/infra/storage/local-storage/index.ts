import { IStorage } from '../../../main/interfaces/storage/istorage'

class LocalStorage implements IStorage {
  get(key: string) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  destroy(key: string) {
    localStorage.removeItem(key)
  }

  set(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
      return
    }
    this.destroy(key)
  }
}

export default LocalStorage
