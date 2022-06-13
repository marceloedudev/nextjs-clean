import HttpClientResponse from '@/infra/http/HttpClientResponse'

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient {
  request: (data: HttpRequest) => Promise<HttpClientResponse<any>>
}

export type HttpResponse<IResponse = any> = {
  statusCode: number
  body: IResponse
}
