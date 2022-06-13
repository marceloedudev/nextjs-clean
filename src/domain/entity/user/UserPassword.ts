class UserPassword {
  private password: string

  constructor(password: string) {
    this.password = password
  }

  getPassword() {
    return this.password
  }
}

export default UserPassword
