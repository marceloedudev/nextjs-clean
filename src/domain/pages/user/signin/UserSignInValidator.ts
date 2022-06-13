import NotificationContext from '@/domain/errors/NotificationContext'
import UserPasswordFactory from '@/domain/factory/user/UserPasswordFactory'
import ValidationBuilder from '@/infra/validation/builder'
import ValidationShape from '@/infra/validation/shape'

class UserSignInValidator extends NotificationContext {
  private email: string
  private password: string
  private userPasswordFactory: UserPasswordFactory

  constructor() {
    super()
    this.email = null
    this.password = null
    this.userPasswordFactory = new UserPasswordFactory()
  }

  build({ email, password }) {
    this.email = email
    this.password = password
    return this
  }

  private schema() {
    return ValidationShape.build({
      email: ValidationBuilder.string()
        .required('Email is required')
        .email('Email is invalid')
        .min(3, 'Email must be less than 3 characters')
        .max(64, 'Email must be longer than 64 characters')
        .build(),
      password: ValidationBuilder.string()
        .required('Password is required')
        .min(3, 'Password must be less than 5 characters')
        .matches(
          this.userPasswordFactory.getValidRegex(),
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        )
        .build()
    })
  }

  validate() {
    const errors = this.schema().validate({
      email: this.email,
      password: this.password
    })
    this.setNotification(errors)
    return errors
  }

  errorsFormatted() {
    return ValidationShape.errorsValidateToObject(this.notications)
  }
}

export default UserSignInValidator
