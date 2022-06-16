import { IStorage } from '../../../main/interfaces/storage/istorage'

class SessionStorage implements IStorage {
  get(key: string) {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (err) {
      return null
    }
  }

  destroy(key: string) {
    sessionStorage.removeItem(key)
  }

  set(key: string, value: any) {
    if (value) {
      sessionStorage.setItem(key, JSON.stringify(value))
      return
    }
    this.destroy(key)
  }
}

export default SessionStorage
