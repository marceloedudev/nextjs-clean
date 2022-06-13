/* eslint-disable import/order */
import { BuilderValidators, TypesValidator, TypesValidatorEnum } from '../types'
import {
  EmailValidator,
  MatchesValidator,
  MaxLengthValidator,
  MinLengthValidator,
  RequiredValidator,
  TypeValidator
} from '@/infra/validation/validators'

class ValidationBuilder implements BuilderValidators {
  private validations: any = []

  private typeName!: TypesValidator

  constructor(type: TypesValidator, message?: string) {
    this.typeName = type
    this.validations.push(new TypeValidator(this.typeName, message))
  }

  private static type(type: TypesValidator, message?: string) {
    return new ValidationBuilder(type, message)
  }

  public static string(message?: string) {
    return this.type(TypesValidatorEnum.string, message)
  }

  public static number(message?: string) {
    return this.type(TypesValidatorEnum.number, message)
  }

  public required(message?: string) {
    this.validations.push(new RequiredValidator(message))
    return this
  }

  public min(length: number, message?: string) {
    this.validations.push(
      new MinLengthValidator(this.typeName, length, message)
    )
    return this
  }

  public max(length: number, message?: string) {
    this.validations.push(
      new MaxLengthValidator(this.typeName, length, message)
    )
    return this
  }

  public matches(regex: RegExp, message?: string) {
    this.validations.push(new MatchesValidator(regex, message))
    return this
  }

  public email(message?: string) {
    this.validations.push(new EmailValidator(message))
    return this
  }

  public build() {
    return this.validations
  }
}

export default ValidationBuilder
