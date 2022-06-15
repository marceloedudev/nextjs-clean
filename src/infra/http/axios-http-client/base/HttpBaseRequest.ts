import { AxiosResponse } from 'axios'
import HttpClientResponse from '@/infra/http/HttpClientResponse'
import { HttpRequest, HttpResponse } from '@/infra/http/http-client'

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
