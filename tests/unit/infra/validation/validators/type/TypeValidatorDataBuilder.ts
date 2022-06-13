import { TypeValidator } from '@/infra/validation/validators'

class TypeValidatorDataBuilder {
  private validatorData = {}
  private validator: TypeValidator
  private type: any
  private fieldName: string

  constructor() {
    this.fieldName = 'name'
  }

  static given() {
    return new TypeValidatorDataBuilder()
  }

  withTypeString() {
    this.type = 'string'
    return this
  }

  withTypeNumber() {
    this.type = 'number'
    return this
  }

  withTypeUnknown() {
    this.type = 'unknown'
    return this
  }

  withCreateValid() {
    this.validator = new TypeValidator(this.type)
    this.validator.setFieldName(this.fieldName)
    return this
  }

  withValidName() {
    this.validatorData[this.fieldName] = 'hello'
    return this
  }

  withValidNumber() {
    this.validatorData[this.fieldName] = 60
    return this
  }

  build() {
    return this.validator.validate(this.validatorData)
  }
}

export default TypeValidatorDataBuilder
