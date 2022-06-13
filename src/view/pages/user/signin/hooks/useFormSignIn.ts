import React from 'react'
import { useSignIn } from '../contexts/useSignIn'
import useUserToken from '@/view/hooks/useUserToken'
import UserSignInHandler from '@/domain/pages/user/signin/UserSignInHandler'

export type UseFormSignInProps = {
  userSignInHandler: UserSignInHandler
}

const useFormSignIn = ({ userSignInHandler }: UseFormSignInProps) => {
  const { state, actions } = useSignIn()

  const { setAccessToken, setRefreshToken } = useUserToken()

  const onSubmit = React.useCallback(
    async (event) => {
      return userSignInHandler.submit(event, {
        data: state.data,
        loading: state.loading,
        setAccessToken,
        setRefreshToken,
        setErrors: actions.setErrors,
        setLoading: actions.setLoading
      })
    },
    [
      userSignInHandler,
      state.data,
      state.loading,
      actions,
      setAccessToken,
      setRefreshToken
    ]
  )

  return {
    onSubmit
  }
}

export default useFormSignIn
