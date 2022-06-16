import { Validation } from '../../../main/interfaces/validators'

class ValidationShape implements Validation {
  private validators = {}

  private constructor(validators) {
    this.validators = validators
  }

  static build(validators) {
    return new ValidationShape(validators)
  }

  public validate(input) {
    const result = (<any>Object)
      .entries(this.validators)
      .reduce((accumulator, item) => {
        const [fieldName, validator] = item
        if (fieldName) {
          const errors = validator.reduce((acc, current) => {
            current.setFieldName(fieldName)
            const error = current.validate(input)
            if (error) {
              acc.push(error)
            }
            return acc
          }, [])
          if (errors?.length) {
            accumulator.push({
              fieldName,
              errors
            })
          }
        }
        return accumulator
      }, [])
    return result
  }

  public static formatMessageError(data): Array<string> {
    const messages: Array<string> = []
    data?.forEach((field) => {
      return field.errors?.map((item) => messages.push(`${item.message}`))
    })
    const uniqueSet = new Set(messages)
    return [...uniqueSet]
  }

  public static errorsValidateToObject(errors): Array<string> {
    return errors.reduce((acc, item) => {
      return {
        ...acc,
        [item.fieldName]: item.errors.map((error) => {
          return {
            message: error.message
          }
        })
      }
    }, {})
  }
}
export default ValidationShape
