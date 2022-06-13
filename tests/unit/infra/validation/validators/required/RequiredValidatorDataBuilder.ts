import { RequiredValidator } from '@/infra/validation/validators'

class RequiredValidatorDataBuilder {
  private fieldName: string
  private validator: RequiredValidator
  private validatorData = {}

  constructor() {
    this.fieldName = 'name'
    this.validator = new RequiredValidator()
    this.validator.setFieldName(this.fieldName)
  }

  static given() {
    return new RequiredValidatorDataBuilder()
  }

  withValidName() {
    this.validatorData[this.fieldName] = 'Hello'
    return this
  }

  withInvalidNull() {
    this.validatorData[this.fieldName] = null
    return this
  }

  withInvalidUndefined() {
    this.validatorData[this.fieldName] = undefined
    return this
  }

  withBoolFalse() {
    this.validatorData[this.fieldName] = false
    return this
  }

  build() {
    return this.validator.validate(this.validatorData)
  }
}

export default RequiredValidatorDataBuilder
