import MinLengthValidatorDataBuilder from './MinLengthValidatorDataBuilder'

class MinLengthValidatorObjectMother {
  static invalidMinLengthTypeString() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenInvalidSize()
      .withValidName()
      .build()
  }

  static invalidMinLengthAndCustomErrorTypeString() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenInvalidSizeAndCustomError()
      .withValidName()
      .build()
  }

  static validMinLengthTypeString() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenValidSize()
      .withValidName()
      .build()
  }

  static undefinedNameTypeString() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenValidSize()
      .withUndefinedName()
      .build()
  }

  static undefinedNameTypeNumber() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenValidSize()
      .withUndefinedName()
      .build()
  }

  static validMinLengthTypeNumber() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenValidSize()
      .withValidName()
      .build()
  }

  static invalidMaxLengthTypeNumber() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenInvalidSize()
      .withInvalidNumber()
      .build()
  }

  static invalidMaxLengthAndCustomErrorTypeNumber() {
    return MinLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenInvalidSizeAndCustomError()
      .withInvalidNumber()
      .build()
  }
}

export default MinLengthValidatorObjectMother
