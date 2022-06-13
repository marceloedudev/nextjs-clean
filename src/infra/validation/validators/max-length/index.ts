import { FieldValidator, TypesValidator, TypesValidatorEnum } from '../../types'

import { AppError } from '../../errors/AppError'

export class MaxLengthValidator implements FieldValidator {
  private field: string

  constructor(
    private readonly type: TypesValidator,
    private readonly maxLength: number,
    private readonly message?: string | undefined
  ) {
    this.field = ''
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  private operation(input) {
    if (this.type === TypesValidatorEnum.string) {
      return input[this.field]?.length > this.maxLength
    }
    return input[this.field] > this.maxLength
  }

  validate(input): AppError | null {
    return this.operation(input)
      ? new AppError(this.message ?? 'Invalid length')
      : null
  }
}
