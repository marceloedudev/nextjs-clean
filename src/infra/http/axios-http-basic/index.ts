import AppConfig from '@/config/AppConfig'
import HttpClientResponse from '@/infra/http/HttpClientResponse'
import axios, { Axios, AxiosResponse } from 'axios'
import { HttpRequest, HttpResponse } from '../http-client'

class AxiosHttpBasic {
  private axiosClient: Axios

  constructor(apiUrl?: string) {
    this.axiosClient = axios.create({
      baseURL: `${apiUrl ?? AppConfig.ApiUrl}`
    })
  }

  async request(data: HttpRequest): Promise<HttpClientResponse<any>> {
    let response: AxiosResponse
    try {
      response = await this.axiosClient.request({
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

export default AxiosHttpBasic
