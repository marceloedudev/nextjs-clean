import { EmailValidator } from '@/infra/validation/validators'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'

class EmailValidatorDataBuilder {
  private validator: EmailValidator
  private emailData = {}
  private fieldName = 'name'
  private fakerInternet

  constructor() {
    const fakerFactory = new FakerFactory()
    this.fakerInternet = fakerFactory.createInternet()
    this.validator = new EmailValidator()
    this.validator.setFieldName(this.fieldName)
  }

  static given() {
    return new EmailValidatorDataBuilder()
  }

  withValidEmail() {
    this.emailData[this.fieldName] = this.fakerInternet.email()
    return this
  }

  withInvalidEmail() {
    this.emailData[this.fieldName] = 'email@gm'
    return this
  }

  withEmailLikeName() {
    this.emailData[this.fieldName] = 'email123'
    return this
  }

  withUndefinedEmail() {
    this.emailData[this.fieldName] = undefined
    return this
  }

  build() {
    return this.validator.validate(this.emailData)
  }
}

export default EmailValidatorDataBuilder
