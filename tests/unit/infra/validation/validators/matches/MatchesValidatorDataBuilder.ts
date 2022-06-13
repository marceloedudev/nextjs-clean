import { MatchesValidator } from '@/infra/validation/validators'

class MatchesValidatorDataBuilder {
  private validator: MatchesValidator
  private fieldName = 'name'
  private validatorData = {}

  static create() {
    return new MatchesValidatorDataBuilder()
  }

  givenValidRegex() {
    const regex = /(hello|world)/
    this.validator = new MatchesValidator(regex)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenInvalidRegex() {
    const regex = /'(a+){10}/
    this.validator = new MatchesValidator(regex)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenValidRegexAndErrorCustom() {
    const regex = /(hello|world)/
    const messageError = 'error custom'
    this.validator = new MatchesValidator(regex, messageError)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  withValidName() {
    this.validatorData[this.fieldName] = 'hello'
    return this
  }

  withInvalidName() {
    this.validatorData[this.fieldName] = 'hi'
    return this
  }

  withUndefinedName() {
    this.validatorData[this.fieldName] = undefined
    return this
  }

  build() {
    return this.validator.validate(this.validatorData)
  }
}

export default MatchesValidatorDataBuilder
