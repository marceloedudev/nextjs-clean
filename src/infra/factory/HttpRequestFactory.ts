import HttpRequestInterceptorsAdapter from '../http/axios-http-client/adapters/HttpRequestInterceptorsAdapter'
import HttpRequestBasicAdapter from '../http/axios-http-client/adapters/HttpRequestBasicAdapter'

class HttpRequestFactory {
  constructor(private apiUrl?: string) {}

  createHttpClient() {
    return new HttpRequestInterceptorsAdapter()
  }

  createHttpBasic() {
    return new HttpRequestBasicAdapter()
  }
}

export default HttpRequestFactory
