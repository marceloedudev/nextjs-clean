/* eslint-disable import/order */
import { AppError } from '../../../infra/validation/errors/AppError'
import ValidationBuilder from '@/infra/validation/builder'

export interface FieldValidator {
  validate(input: any | undefined): AppError | null
  setFieldName(fieldName: string): void
}

export interface Validation {
  validate: (input: any) => any[]
}

export type TypesValidator = 'string' | 'number'
export enum TypesValidatorEnum {
  string = 'string',
  number = 'number'
}

export interface BuilderValidators {
  required(): ValidationBuilder
  min(length: number): ValidationBuilder
  max(length: number): ValidationBuilder
  matches(regex: RegExp, message?: string): ValidationBuilder
  email(): ValidationBuilder
}
