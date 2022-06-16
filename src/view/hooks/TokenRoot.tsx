/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { RecoilRoot } from 'recoil'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import { currentTokenState } from '../atoms/token-atom'

const TokenRoot = ({ children }) => {
  // const [state, setState] = React.useState({
  //   setAccessToken: (value) => {
  //     console.log('>>>> batata')
  //   },
  //   getAccessToken: () => {},
  //   setRefreshToken: (value) => {},
  //   getRefreshToken: () => {}
  // })

  // React.useEffect(() => {
  //   const adaptersFactory = new AdaptersFactory()
  //   const userAccessToken = adaptersFactory.createUserAccessToken()
  //   const userRefreshToken = adaptersFactory.createUserRefreshToken()
  //   setState({
  //     setAccessToken: userAccessToken.set,
  //     getAccessToken: userAccessToken.get,
  //     setRefreshToken: userRefreshToken.set,
  //     getRefreshToken: userRefreshToken.get
  //   })
  //   console.log('>>> chamou?')
  // }, [])

  const adaptersFactory = new AdaptersFactory()
  const userAccessToken = adaptersFactory.createUserAccessToken()
  const userRefreshToken = adaptersFactory.createUserRefreshToken()

  const state = {
    setAccessToken: userAccessToken.set,
    getAccessToken: userAccessToken.get,
    setRefreshToken: userRefreshToken.set,
    getRefreshToken: userRefreshToken.get
  }

  return (
    <>
      <RecoilRoot
        initializeState={({ set }) => {
          set(currentTokenState, state)
        }}
        override={true}
      >
        {children}
      </RecoilRoot>
    </>
  )
}

export default TokenRoot
