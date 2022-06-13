export abstract class IStorage {
  static get: (key: string) => any | null
  static destroy: (key: string) => void
  static set: (key: string, value: any) => void
}
