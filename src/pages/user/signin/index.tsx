import AdaptersFactory from '@/main/factory/AdaptersFactory'
import MakeSignIn from '@/main/pages/user/signin'
import React from 'react'

const adaptersFactory = new AdaptersFactory()

const PageSignIn = () => {
  return <MakeSignIn />
}

export async function getServerSideProps(ctx) {
  await adaptersFactory.createAuthenticatePage().invalidateUser(ctx)
  return {
    props: {
      user: null
    }
  }
}

export default PageSignIn
