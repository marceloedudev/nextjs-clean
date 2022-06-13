import useUserData from '@/view/hooks/useUserData'
import AuthLayout from './auth-layout'
import DefaultLayout from './default-layout'
import React from 'react'

const Layout = (props) => {
  const { accountState } = useUserData()

  const logged = React.useMemo(() => !!accountState?.user, [accountState?.user])

  if (logged) {
    return <DefaultLayout {...props} />
  }

  return <AuthLayout {...props} />
}

export default Layout
