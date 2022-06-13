import { AppError } from '@/infra/validation/errors/AppError'
import MaxLengthValidatorObjectMother from './MaxLengthValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('MaxLengthValidator', () => {
  describe('when validation for of type string', () => {
    it('then create with type string and should return error', () => {
      expect(
        MaxLengthValidatorObjectMother.invalidMaxLengthTypeString()
      ).toBeInstanceOf(AppError)
    })

    it('then create with type string and should return error with changed message', () => {
      expect(
        MaxLengthValidatorObjectMother.invalidMaxLengthAndCustomErrorTypeString()
      ).toHaveProperty('name', 'error custom')
    })

    it('then create with valid string type', () => {
      expect(
        MaxLengthValidatorObjectMother.validMaxLengthTypeString()
      ).toBeNull()
    })

    it('then create with type string with empty field', () => {
      expect(
        MaxLengthValidatorObjectMother.undefinedNameTypeString()
      ).toBeNull()
    })
  })

  describe('when validation for of type number', () => {
    it('then create with type number and should return error', () => {
      expect(
        MaxLengthValidatorObjectMother.invalidMaxLengthTypeNumber()
      ).toBeInstanceOf(AppError)
    })

    it('then create with type number and should return error with changed message', () => {
      expect(
        MaxLengthValidatorObjectMother.invalidMaxLengthAndCustomErrorTypeNumber()
      ).toHaveProperty('name', 'error custom')
    })

    it('then create with valid number type', () => {
      expect(
        MaxLengthValidatorObjectMother.validMaxLengthTypeNumber()
      ).toBeNull()
    })

    it('then create with type string with empty field', () => {
      expect(
        MaxLengthValidatorObjectMother.undefinedNameTypeNumber()
      ).toBeNull()
    })
  })
})
