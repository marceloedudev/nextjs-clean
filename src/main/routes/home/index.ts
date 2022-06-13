export default class HomeRouter {
  private baseUrl: string

  constructor() {
    this.baseUrl = `/`
  }

  base() {
    return `${this.baseUrl}`
  }
}
