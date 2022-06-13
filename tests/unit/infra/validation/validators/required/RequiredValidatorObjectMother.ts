import RequiredValidatorDataBuilder from './RequiredValidatorDataBuilder'

class RequiredValidatorObjectMother {
  static validName() {
    return RequiredValidatorDataBuilder.given().withValidName().build()
  }

  static invalidNull() {
    return RequiredValidatorDataBuilder.given().withInvalidNull().build()
  }

  static invalidUndefined() {
    return RequiredValidatorDataBuilder.given().withInvalidUndefined().build()
  }

  static validBoolean() {
    return RequiredValidatorDataBuilder.given().withBoolFalse().build()
  }
}

export default RequiredValidatorObjectMother
