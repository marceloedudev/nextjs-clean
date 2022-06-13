import axios from 'axios'

let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom: PromiseConstructor) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

class AxiosInterceptorResponse {
  constructor(
    private readonly error: any,
    private readonly logged: boolean,
    private readonly refreshTokenUseCase
  ) {}

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
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers['authorization'] = `Bearer ${token}`
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
              'authorization'
            ] = `Bearer ${accessToken}`
            originalRequest.headers['authorization'] = `Bearer ${accessToken}`
            processQueue(null, accessToken)

            resolve(axios(originalRequest))
          })
          .catch((err) => {
            processQueue(err, null)
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
