import TokenFactory from '@/domain/factory/auth/TokenFactory'
import axios from 'axios'

class AxiosInterceptorResponse {
  private failedQueue = []
  private error: any
  private logged: boolean
  private refreshTokenUseCase: () => Promise<any>
  private tokenFactory: TokenFactory

  constructor({ error, logged, refreshTokenUseCase }) {
    this.error = error
    this.logged = logged
    this.refreshTokenUseCase = refreshTokenUseCase
    this.failedQueue = []
    this.tokenFactory = new TokenFactory()
  }

  private processQueue(error, token = null) {
    this.failedQueue.forEach((prom: PromiseConstructor) => {
      if (error) {
        prom.reject(error)
      } else {
        prom.resolve(token)
      }
    })
    this.failedQueue = []
  }

  failed() {
    const originalRequest = this.error.config

    if (
      this.error.response?.status === 401 &&
      !originalRequest._retry &&
      this.logged
    ) {
      let isRefreshing = false
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          this.failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers[
              `${this.tokenFactory.getTokenHeaderName()}`
            ] = `${this.tokenFactory.getTypeToken()} ${token}`
            return axios(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }
      originalRequest._retry = true
      isRefreshing = true
      return new Promise((resolve, reject) => {
        this.refreshTokenUseCase()
          .then(({ accessToken }) => {
            axios.defaults.headers.common[
              `${this.tokenFactory.getTokenHeaderName()}`
            ] = `${this.tokenFactory.getTypeToken()} ${accessToken}`
            originalRequest.headers[
              `${this.tokenFactory.getTokenHeaderName()}`
            ] = `${this.tokenFactory.getTypeToken()} ${accessToken}`
            this.processQueue(null, accessToken)
            resolve(axios(originalRequest))
          })
          .catch((err) => {
            this.processQueue(err, null)
            reject(err)
          })
          .finally(() => {
            isRefreshing = false
          })
      })
    }
    return Promise.reject(this.error)
  }
}

export default AxiosInterceptorResponse
