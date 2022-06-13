import EmailValidatorDataBuilder from './EmailValidatorDataBuilder'

class EmailValidatorObjectMother {
  static validEmail() {
    return EmailValidatorDataBuilder.given().withValidEmail().build()
  }

  static invalidEmail() {
    return EmailValidatorDataBuilder.given().withInvalidEmail().build()
  }

  static invalidEmailLikeName() {
    return EmailValidatorDataBuilder.given().withEmailLikeName().build()
  }

  static undefinedEmail() {
    return EmailValidatorDataBuilder.given().withUndefinedEmail().build()
  }
}

export default EmailValidatorObjectMother
