import GlobalStyles from '@/view/styles/global'
import { RecoilRoot } from 'recoil'
import { ThemeStyledProvider } from './useThemeStyled'
import { ToastBaseProvider } from '@/view/components/Toast'
import { currentTokenState } from '@/view/atoms'
import AdaptersFactory from '@/main/factory/AdaptersFactory'

const adaptersFactory = new AdaptersFactory()

import React from 'react'
import NProgressGlobalStyles from '../styles/nprogress-global-styles'

const AppProvider = ({ children }) => {
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
      >
        <ThemeStyledProvider>
          <NProgressGlobalStyles />
          <GlobalStyles />
          <ToastBaseProvider />
          {children}
        </ThemeStyledProvider>
      </RecoilRoot>
    </>
  )
}

export default AppProvider
