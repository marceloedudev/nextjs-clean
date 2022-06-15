import HttpClientResponse from '@/infra/http/HttpClientResponse'

class ErrorBoundary {
  constructor(private error) {}

  getMessage() {
    const errorMessage =
      this.error instanceof HttpClientResponse
        ? this.error?.getErrorMessage()
        : this.error?.message
    console.error(errorMessage)
    return errorMessage || 'Unknown error'
  }
}

export default ErrorBoundary
