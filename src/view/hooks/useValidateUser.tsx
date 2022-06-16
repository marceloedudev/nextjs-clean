import React from 'react'
import { useSetRecoilState } from 'recoil'
import { currentAccountState } from '../atoms/current-account'

const useValidateUser = ({ user }) => {
  const setUserState = useSetRecoilState(currentAccountState)

  React.useEffect(() => {
    setUserState((oldState) => ({
      ...oldState,
      user
    }))
  }, [])
}

export default useValidateUser
