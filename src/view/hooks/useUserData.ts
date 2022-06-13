import { AuthenticatePageProps } from '@/main/adapters/authenticate-page'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../atoms'

const useUserData = () => {
  const accountState: AuthenticatePageProps =
    useRecoilValue(currentAccountState)

  return {
    accountState
  }
}

export default useUserData
