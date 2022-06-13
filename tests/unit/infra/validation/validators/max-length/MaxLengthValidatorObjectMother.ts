import MaxLengthValidatorDataBuilder from './MaxLengthValidatorDataBuilder'

class MaxLengthValidatorObjectMother {
  static invalidMaxLengthTypeString() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenInvalidSize()
      .withValidName()
      .build()
  }

  static invalidMaxLengthAndCustomErrorTypeString() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenInvalidSizeAndCustomError()
      .withValidName()
      .build()
  }

  static validMaxLengthTypeString() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenValidSize()
      .withValidName()
      .build()
  }

  static undefinedNameTypeString() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeString()
      .givenValidSize()
      .withUndefinedName()
      .build()
  }

  static undefinedNameTypeNumber() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenValidSize()
      .withUndefinedName()
      .build()
  }

  static validMaxLengthTypeNumber() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenValidSize()
      .withValidName()
      .build()
  }

  static invalidMaxLengthTypeNumber() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenInvalidSize()
      .withInvalidNumber()
      .build()
  }

  static invalidMaxLengthAndCustomErrorTypeNumber() {
    return MaxLengthValidatorDataBuilder.create()
      .withTypeNumber()
      .givenInvalidSizeAndCustomError()
      .withInvalidNumber()
      .build()
  }
}

export default MaxLengthValidatorObjectMother
