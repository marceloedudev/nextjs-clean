import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import AxiosInterceptorRequest from './interceptors/interceptor-request'
import AxiosInterceptorResponse from './interceptors/interceptor-response'

class AxiosHttp {
  private axiosClient: Axios
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  create() {
    this.axiosClient = axios.create({
      baseURL: `${this.apiUrl}`
    })
  }

  interceptors({
    userSessionAdapter,
    userRefreshTokenAdapter,
    userAccessTokenAdapter,
    refreshTokenUserUsecase
  }) {
    this.axiosClient.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return new AxiosInterceptorRequest(config).execute()
      },
      (error) => Promise.reject(error)
    )
    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        const refreshToken = userRefreshTokenAdapter.get()
        const accessToken = userAccessTokenAdapter.get()
        const isLogged = !!accessToken?.length
        const axiosInterceptorResponse = new AxiosInterceptorResponse(
          error,
          isLogged,
          async () => {
            try {
              const tokenData: UserAuthToken =
                await refreshTokenUserUsecase.execute({
                  refresh_token: refreshToken
                })
              userAccessTokenAdapter.set(tokenData.getAccessToken())
              userRefreshTokenAdapter.set(tokenData.getRefreshToken())
              return Promise.resolve({
                accessToken: tokenData.getAccessToken()
              })
            } catch (err) {
              await userSessionAdapter.remove()
              window.location.reload()
              return Promise.reject(err)
            }
          }
        )
        return axiosInterceptorResponse
          .failed()
          .then((res) => {
            return Promise.resolve(res)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }
    )
    return this
  }

  getClient() {
    return this.axiosClient
  }
}

export default AxiosHttp
