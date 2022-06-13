import { AppError } from '@/infra/validation/errors/AppError'
import RequiredValidatorObjectMother from './RequiredValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('RequiredValidator', () => {
  it('then create a validation valid', () => {
    expect(RequiredValidatorObjectMother.validName()).toBeNull()
  })

  it('then create an empty validation', () => {
    expect(RequiredValidatorObjectMother.invalidNull()).toBeInstanceOf(AppError)
  })

  it('then create an undefined validation', () => {
    expect(RequiredValidatorObjectMother.invalidUndefined()).toBeInstanceOf(
      AppError
    )
  })

  it('then create a boolean validation', () => {
    expect(RequiredValidatorObjectMother.validBoolean()).toBeNull()
  })
})
