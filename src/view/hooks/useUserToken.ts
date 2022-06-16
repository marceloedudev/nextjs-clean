import { useRecoilValue } from 'recoil'
import { currentTokenState } from '../atoms/token-atom'

const useUserToken = () => {
  const { setAccessToken, setRefreshToken } = useRecoilValue(currentTokenState)

  return {
    setAccessToken,
    setRefreshToken
  }
}

export default useUserToken
