import { AuthenticatePageProps } from '@/main/adapters/auth/authenticate-page'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import MakeSignUp from '@/main/pages/user/signup'
import React from 'react'

const adaptersFactory = new AdaptersFactory()

const PageSignUp = () => {
  return <MakeSignUp />
}

PageSignUp.getInitialProps = async (ctx) => {
  await adaptersFactory.createAuthenticatePage().invalidateUser(ctx)
  return {
    user: null
  } as AuthenticatePageProps
}

export default PageSignUp
