class UserEmail {
  private email: string

  constructor(email: string) {
    this.email = email
  }

  getEmail() {
    return this.email
  }
}

export default UserEmail
