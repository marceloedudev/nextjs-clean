import MatchesValidatorDataBuilder from './MatchesValidatorDataBuilder'

class MatchesValidatorObjectMother {
  static validRegex() {
    return MatchesValidatorDataBuilder.create()
      .givenValidRegex()
      .withValidName()
      .build()
  }

  static invalidRegex() {
    return MatchesValidatorDataBuilder.create()
      .givenInvalidRegex()
      .withInvalidName()
      .build()
  }

  static invalidName() {
    return MatchesValidatorDataBuilder.create()
      .givenValidRegex()
      .withInvalidName()
      .build()
  }

  static undefinedName() {
    return MatchesValidatorDataBuilder.create()
      .givenValidRegex()
      .withUndefinedName()
      .build()
  }

  static validWithErrorCustom() {
    return MatchesValidatorDataBuilder.create()
      .givenValidRegexAndErrorCustom()
      .withUndefinedName()
      .build()
  }
}

export default MatchesValidatorObjectMother
