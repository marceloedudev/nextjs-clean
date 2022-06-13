import UserEmailFactory from '@/domain/factory/user/UserEmailFactory'
import { AppError } from '../../errors/AppError'
import { FieldValidator } from '../../types'

export class EmailValidator implements FieldValidator {
  private field: string
  private userEmailFactory: UserEmailFactory

  constructor(private readonly message?: string | undefined) {
    this.field = ''
    this.userEmailFactory = new UserEmailFactory()
  }

  setFieldName(fieldName: string) {
    this.field = fieldName
  }

  validate(input): AppError | null {
    if (
      !input[this.field] ||
      !this.userEmailFactory.getValidRegex().test(input[this.field])
    ) {
      return new AppError(this.message ?? 'Invalid email')
    }
    return null
  }
}
