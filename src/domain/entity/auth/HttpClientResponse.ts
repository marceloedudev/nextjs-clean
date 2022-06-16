import { HttpResponse } from '@/main/interfaces/http/http-client'

class HttpClientResponse<T> {
  private statusCode: number

  private body: any

  constructor({ statusCode, body }: HttpResponse) {
    this.statusCode = statusCode || 500
    this.body = this.getStatusFormatted(body)
  }

  private getStatusFormatted(body) {
    switch (this.statusCode) {
      case 404:
        return new Error('Not Found')
      case 500:
        return new Error('Internal Server Error')
      default:
        return body
    }
  }

  getBody(): T {
    return this.body
  }

  getStatusCode() {
    return this.statusCode
  }

  getErrorMessage() {
    return this.body?.message || 'Unknown error'
  }

  setBody(data) {
    if (![200, 201].includes(this.statusCode)) {
      throw new Error('error update body to service')
    }
    this.body = data
  }
}

export default HttpClientResponse
