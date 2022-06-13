export default class UserRouter {
  private baseUrl: string

  constructor() {
    this.baseUrl = `/user`
  }

  signin() {
    return `${this.baseUrl}/signin`
  }

  signup() {
    return `${this.baseUrl}/signup`
  }

  profile() {
    return `${this.baseUrl}/profile`
  }
}
