export class AppError extends Error {
  constructor(message?: any) {
    super(message ?? 'Unknown Error')
    Object.setPrototypeOf(this, AppError.prototype)
    this.name = message ?? 'InvalidValueFieldError'
  }
}
