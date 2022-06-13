import { FieldValidator, TypesValidator } from '../../types'

/* eslint-disable import/order */
import { AppError } from '../../errors/AppError'

export class TypeValidator implements FieldValidator {
  private field: string

  constructor(
    private readonly typeName: TypesValidator,
    private readonly message?: string | undefined
  ) {
    this.field = ''
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  validate(input): AppError | null {
    return input[this.field] && typeof input[this.field] !== `${this.typeName}`
      ? new AppError(this.message ?? 'Type invalid')
      : null
  }
}
