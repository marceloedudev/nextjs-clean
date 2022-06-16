export abstract class IStorage {
  get: (key: string) => any | null
  destroy: (key: string) => void
  set: (key: string, value: any) => void
}
