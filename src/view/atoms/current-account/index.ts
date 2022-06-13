import { atom } from 'recoil'

export const currentAccountState = atom({
  key: 'currentUserState',
  default: {
    user: null,
    loading: true
  }
})
