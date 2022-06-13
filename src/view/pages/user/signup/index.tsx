import RoutesFactory from '@/main/factory/RoutesFactory'
import LinkNavigate from '@/view/components/LinkNavigate'
import React from 'react'
import { HomeContainer } from './styles'
const routesFactory = new RoutesFactory()

const SignUp = () => {
  return (
    <HomeContainer>
      Signup{' '}
      <LinkNavigate to={`${routesFactory.createUserRoute().signin()}`}>
        Login
      </LinkNavigate>
    </HomeContainer>
  )
}

export default SignUp
