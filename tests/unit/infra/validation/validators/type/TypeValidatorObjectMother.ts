import TypeValidatorDataBuilder from './TypeValidatorDataBuilder'

class TypeValidatorObjectMother {
  static validTypeString() {
    return TypeValidatorDataBuilder.given()
      .withTypeString()
      .withCreateValid()
      .withValidName()
      .build()
  }

  static validTypeNumber() {
    return TypeValidatorDataBuilder.given()
      .withTypeNumber()
      .withCreateValid()
      .withValidNumber()
      .build()
  }

  static invalidType() {
    return TypeValidatorDataBuilder.given()
      .withTypeUnknown()
      .withCreateValid()
      .withValidNumber()
      .build()
  }
}

export default TypeValidatorObjectMother
