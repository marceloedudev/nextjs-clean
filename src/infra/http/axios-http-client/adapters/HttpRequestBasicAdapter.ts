import {
  HttpClient,
  HttpRequest
} from '../../../../main/interfaces/http/http-client'
import HttpClientResponse from '../../../../domain/entity/auth/HttpClientResponse'
import HttpClientFactory from '../factory/HttpClientFactory'
import HttpBaseRequest from '../base/HttpBaseRequest'

class HttpRequestBasicAdapter implements HttpClient {
  private axiosHttp
  constructor() {
    this.axiosHttp = new HttpBaseRequest()
  }

  async request(data: HttpRequest): Promise<HttpClientResponse<any>> {
    const httpClientFactory = new HttpClientFactory()
    return this.axiosHttp.request(
      httpClientFactory.createInstance().getAxiosHttp().getClient(),
      data
    )
  }
}

export default HttpRequestBasicAdapter
