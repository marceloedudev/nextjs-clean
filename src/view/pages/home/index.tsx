import RoutesFactory from '@/main/factory/RoutesFactory'
import LinkNavigate from '@/view/components/LinkNavigate'
import React from 'react'
import { HomeContainer } from './styles'
const routesFactory = new RoutesFactory()

const Home = () => {
  return (
    <>
      <HomeContainer>
        <section className="title">
          <h1>Storefront</h1>
        </section>
        <section className="content">
          <div>
            <LinkNavigate to={`${routesFactory.createUserRoute().signin()}`}>
              SignIn
            </LinkNavigate>
          </div>
          <div>
            <LinkNavigate to={`${routesFactory.createUserRoute().signup()}`}>
              SignUp
            </LinkNavigate>
          </div>
        </section>
      </HomeContainer>
    </>
  )
}

export default Home
