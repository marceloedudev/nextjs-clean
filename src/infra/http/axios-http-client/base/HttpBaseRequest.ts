import { AxiosResponse } from 'axios'
import { HttpRequest, HttpResponse } from '@/main/interfaces/http/http-client'
import HttpClientResponse from '@/domain/entity/auth/HttpClientResponse'

class HttpBaseRequest {
  async request(
    httpRequest,
    data: HttpRequest
  ): Promise<HttpClientResponse<any>> {
    let response: AxiosResponse
    try {
      response = await httpRequest({
        url: data.url,
        method: data.method,
        data: data?.body,
        headers: data?.headers
      })
      return Promise.resolve(
        new HttpClientResponse({
          statusCode: response?.status,
          body: response.data
        } as HttpResponse)
      )
    } catch (error: any) {
      response = error.response
      return Promise.reject(
        new HttpClientResponse({
          statusCode: response?.status,
          body: response.data
        } as HttpResponse)
      )
    }
  }
}

export default HttpBaseRequest
