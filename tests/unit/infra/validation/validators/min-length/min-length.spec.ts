import { AppError } from '@/infra/validation/errors/AppError'
import MinLengthValidatorObjectMother from './MinLengthValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('MinLengthValidator', () => {
  describe('when validation for of type string', () => {
    it('then create with type string and should return error', () => {
      expect(
        MinLengthValidatorObjectMother.invalidMinLengthTypeString()
      ).toBeInstanceOf(AppError)
    })

    it('then create with type string and should return error with changed message', () => {
      expect(
        MinLengthValidatorObjectMother.invalidMinLengthAndCustomErrorTypeString()
      ).toHaveProperty('name', 'error custom')
    })

    it('then create with valid string type', () => {
      expect(
        MinLengthValidatorObjectMother.validMinLengthTypeString()
      ).toBeNull()
    })

    it('then create with type string with empty field', () => {
      expect(
        MinLengthValidatorObjectMother.undefinedNameTypeString()
      ).toBeNull()
    })
  })

  describe('when validation for of type number', () => {
    it('then create with type number and should return error', () => {
      expect(
        MinLengthValidatorObjectMother.invalidMaxLengthTypeNumber()
      ).toBeInstanceOf(AppError)
    })

    it('then create with type number and should return error with changed message', () => {
      //
      expect(
        MinLengthValidatorObjectMother.invalidMaxLengthAndCustomErrorTypeNumber()
      ).toHaveProperty('name', 'error custom')
    })

    it('then create with valid number type', () => {
      expect(
        MinLengthValidatorObjectMother.validMinLengthTypeNumber()
      ).toBeNull()
    })

    it('then create with type string with empty field', () => {
      expect(
        MinLengthValidatorObjectMother.undefinedNameTypeNumber()
      ).toBeNull()
    })
  })
})
