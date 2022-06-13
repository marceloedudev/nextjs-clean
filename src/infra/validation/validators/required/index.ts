/* eslint-disable import/order */
import { AppError } from '../../errors/AppError'
import { FieldValidator } from '../../types'

export class RequiredValidator implements FieldValidator {
  private field: string

  constructor(private readonly message?: string | undefined) {
    this.field = ''
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  validate(input): AppError | null {
    const check =
      typeof input[this.field] === undefined ||
      input[this.field] === undefined ||
      input[this.field] === null

    if (check) {
      return new AppError(this.message ?? 'Required field')
    }

    return null
  }
}
