import AxiosHttpBasic from '../http/axios-http-basic'
import AxiosHttpClient from '../http/axios-http-client'

class HttpRequestFactory {
  constructor(private apiUrl?: string) {}

  createHttpClient() {
    return new AxiosHttpClient(this.apiUrl)
  }

  createHttpBasic() {
    return new AxiosHttpBasic(this.apiUrl)
  }
}

export default HttpRequestFactory
