import SignIn from '@/view/pages/user/signin'
import React from 'react'
import SignInFactory from './SignInFactory'

const signInFactory = new SignInFactory()

const MakeSignIn = () => {
  return <SignIn {...signInFactory.createInstance()} />
}

export default MakeSignIn
