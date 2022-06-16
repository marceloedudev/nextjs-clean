import HttpClientResponse from '../entity/auth/HttpClientResponse'

class ErrorBoundary {
  constructor(private error) {}

  getMessage() {
    console.log(this.error)
    const errorMessage =
      this.error instanceof HttpClientResponse
        ? this.error?.getErrorMessage()
        : this.error?.message
    console.error(errorMessage)
    return errorMessage || 'Unknown error'
  }
}

export default ErrorBoundary
