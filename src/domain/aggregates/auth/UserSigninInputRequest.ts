import UserSigninInput from '@/domain/dto/user/user-signin-input'

class UserSigninInputRequest {
  private email: string
  private password: string

  constructor({ email, password }: UserSigninInput) {
    this.email = email.getEmail()
    this.password = password.getPassword()
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }
}

export default UserSigninInputRequest
