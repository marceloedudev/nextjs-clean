import { atom } from 'recoil'

export const currentTokenState = atom({
  key: 'currentTokenState',
  default: {
    getAccessToken: null as unknown as () => string,
    setAccessToken: null as unknown as (token: string) => void,
    getRefreshToken: null as unknown as () => string,
    setRefreshToken: null as unknown as (token: string) => void
  }
})
