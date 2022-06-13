import { MaxLengthValidator } from '@/infra/validation/validators'

class MaxLengthValidatorDataBuilder {
  private type
  private fieldName: string
  private validatorData = {}
  private validator: MaxLengthValidator

  constructor() {
    this.fieldName = 'name'
  }

  static create() {
    return new MaxLengthValidatorDataBuilder()
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
    const maxLength = 7
    this.validator = new MaxLengthValidator(this.type, maxLength)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenInvalidSize() {
    const maxLength = 3
    this.validator = new MaxLengthValidator(this.type, maxLength)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  givenInvalidSizeAndCustomError() {
    const maxLength = 3
    const messageError = 'error custom'
    this.validator = new MaxLengthValidator(this.type, maxLength, messageError)
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
    this.validatorData[this.fieldName] = 0x64
    return this
  }

  build() {
    return this.validator.validate(this.validatorData)
  }
}

export default MaxLengthValidatorDataBuilder
