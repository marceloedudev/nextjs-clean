/* eslint-disable import/order */
import { AppError } from '../../errors/AppError'
import { FieldValidator } from '../../types'
import SafeRegexAdapter from '@/infra/safe-regex/SafeRegexAdapter'

export class MatchesValidator implements FieldValidator {
  safeRegex: SafeRegexAdapter

  private field: string

  constructor(
    private readonly regex: RegExp,
    private readonly message?: string
  ) {
    this.safeRegex = new SafeRegexAdapter()
    this.field = ''
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  validate(input): AppError | null {
    if (!this.safeRegex.isSafe(this.regex)) {
      return new AppError('Unsafe regex')
    }
    return this.regex.test(input[this.field])
      ? null
      : new AppError(this.message ?? 'Invalid field')
  }
}
