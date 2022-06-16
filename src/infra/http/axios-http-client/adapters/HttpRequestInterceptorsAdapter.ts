import {
  HttpClient,
  HttpRequest
} from '../../../../main/interfaces/http/http-client'
import HttpClientResponse from '../../../../domain/entity/auth/HttpClientResponse'
import HttpClientFactory from '../factory/HttpClientFactory'
import HttpBaseRequest from '../base/HttpBaseRequest'

class HttpRequestInterceptorsAdapter implements HttpClient {
  private axiosHttp
  constructor() {
    this.axiosHttp = new HttpBaseRequest()
  }

  async request(data: HttpRequest): Promise<HttpClientResponse<any>> {
    const httpClientFactory = new HttpClientFactory()
    return this.axiosHttp.request(
      httpClientFactory.createInterceptors().getAxiosHttp().getClient(),
      data
    )
  }
}

export default HttpRequestInterceptorsAdapter
