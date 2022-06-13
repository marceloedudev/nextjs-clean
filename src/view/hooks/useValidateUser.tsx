import React from 'react'
import { useSetRecoilState } from 'recoil'
import { currentAccountState } from '../atoms'

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
