import { currentTokenState } from '@/view/atoms'
import { useRecoilValue } from 'recoil'

const useUserToken = () => {
  const { setAccessToken, setRefreshToken } = useRecoilValue(currentTokenState)

  return {
    setAccessToken,
    setRefreshToken
  }
}

export default useUserToken
