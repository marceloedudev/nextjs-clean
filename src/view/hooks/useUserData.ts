import { AuthenticatePageProps } from '@/main/adapters/auth/authenticate-page'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../atoms/current-account'

const useUserData = () => {
  const accountState: AuthenticatePageProps =
    useRecoilValue(currentAccountState)

  return {
    accountState
  }
}

export default useUserData
