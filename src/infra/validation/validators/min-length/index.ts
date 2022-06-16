import {
  FieldValidator,
  TypesValidator,
  TypesValidatorEnum
} from '../../../../main/interfaces/validators'

import { AppError } from '../../errors/AppError'

export class MinLengthValidator implements FieldValidator {
  private field: string

  constructor(
    private readonly type: TypesValidator,
    private readonly minLength: number,
    private readonly message?: string | undefined
  ) {
    this.field = ''
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  private operation(input) {
    if (this.type === TypesValidatorEnum.string) {
      return input[this.field]?.length < this.minLength
    }
    return input[this.field] < this.minLength
  }

  validate(input): AppError | null {
    return this.operation(input)
      ? new AppError(this.message ?? 'Invalid length')
      : null
  }
}
