import { AuthenticatePageProps } from '@/main/adapters/auth/authenticate-page'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import MakeProfile from '@/main/pages/user/profile'
import useValidateUser from '@/view/hooks/useValidateUser'
import React from 'react'

const adaptersFactory = new AdaptersFactory()

const PageProfile = ({ user }) => {
  useValidateUser({ user })
  return <MakeProfile />
}

export async function getServerSideProps(ctx) {
  const { user }: AuthenticatePageProps = await adaptersFactory
    .createAuthenticatePage()
    .securePage(ctx)
  return {
    props: {
      user
    }
  }
}

export default PageProfile
