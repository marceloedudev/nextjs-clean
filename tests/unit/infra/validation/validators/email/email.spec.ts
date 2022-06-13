import { AppError } from '@/infra/validation/errors/AppError'
import EmailValidatorObjectMother from './EmailValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('EmailValidator', () => {
  it('then create with valid email', () => {
    expect(EmailValidatorObjectMother.validEmail()).toBeNull()
  })

  it('then create with invalid email with @', () => {
    expect(EmailValidatorObjectMother.invalidEmail()).toHaveProperty(
      'name',
      'Invalid email'
    )
  })

  it('then create with invalid email without @', () => {
    expect(EmailValidatorObjectMother.invalidEmailLikeName()).toBeInstanceOf(
      AppError
    )
  })

  it('then create with empty invalid email', () => {
    expect(EmailValidatorObjectMother.undefinedEmail()).toBeInstanceOf(AppError)
  })
})
