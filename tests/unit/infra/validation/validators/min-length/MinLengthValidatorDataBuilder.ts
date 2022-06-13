import { MinLengthValidator } from '@/infra/validation/validators'

class MinLengthValidatorDataBuilder {
  private type
  private fieldName: string
  private validatorData = {}
  private validator: MinLengthValidator

  constructor() {
    this.fieldName = 'name'
  }

  static create() {
    return new MinLengthValidatorDataBuilder()
  }

  withTypeString() {
    this.type = 'string'
    return this
  }

  withTypeNumber() {
    this.type = 'number'
    return this
  }

  givenValidSize() {
    const minLength = 2
    this.validator = new MinLengthValidator(this.type, minLength)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenInvalidSize() {
    const minLength = 12
    this.validator = new MinLengthValidator(this.type, minLength)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenInvalidSizeAndCustomError() {
    const minLength = 12
    const messageError = 'error custom'
    this.validator = new MinLengthValidator(this.type, minLength, messageError)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  withValidName() {
    this.validatorData[this.fieldName] = 'Lorem'
    return this
  }

  withUndefinedName() {
    this.validatorData[this.fieldName] = undefined
    return this
  }

  withValidNumber() {
    this.validatorData[this.fieldName] = 6
    return this
  }

  withInvalidNumber() {
    this.validatorData[this.fieldName] = 10
    return this
  }

  build() {
    return this.validator.validate(this.validatorData)
  }
}

export default MinLengthValidatorDataBuilder
