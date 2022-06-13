import { AppError } from '@/infra/validation/errors/AppError'
import TypeValidatorObjectMother from './TypeValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('TypeValidator', () => {
  it('then create valid string type', () => {
    expect(TypeValidatorObjectMother.validTypeString()).toBeNull()
  })

  it('then create valid number type', () => {
    expect(TypeValidatorObjectMother.validTypeNumber()).toBeNull()
  })

  it('then create invalid type', () => {
    expect(TypeValidatorObjectMother.invalidType()).toBeInstanceOf(AppError)
  })
})
