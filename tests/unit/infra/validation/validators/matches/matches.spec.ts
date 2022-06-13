import { AppError } from '@/infra/validation/errors/AppError'
import MatchesValidatorObjectMother from './MatchesValidatorObjectMother'
import { describe, expect, it } from '@jest/globals'

describe('MatchesValidator', () => {
  it('then create with valid regex', () => {
    expect(MatchesValidatorObjectMother.validRegex()).toBeNull()
  })

  it('then create with valid regex and not find name', () => {
    expect(MatchesValidatorObjectMother.invalidName()).toBeInstanceOf(AppError)
  })

  it('then create with invalid regex', () => {
    expect(MatchesValidatorObjectMother.invalidRegex()).toBeInstanceOf(AppError)
  })

  it('then create with valid regex with changed message', () => {
    expect(MatchesValidatorObjectMother.validWithErrorCustom()).toHaveProperty(
      'name',
      'error custom'
    )
  })

  it('then create with undefined text', () => {
    expect(MatchesValidatorObjectMother.undefinedName()).toBeInstanceOf(
      AppError
    )
  })
})
