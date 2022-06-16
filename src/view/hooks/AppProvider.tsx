import GlobalStyles from '@/view/styles/global'
import { ThemeStyledProvider } from './useThemeStyled'
import { ToastBaseProvider } from '@/view/components/Toast'
import React from 'react'
import NProgressGlobalStyles from '../styles/nprogress-global-styles'
import TokenRoot from './TokenRoot'

const AppProvider = ({ children }) => {
  return (
    <>
      <TokenRoot>
        <ThemeStyledProvider>
          <NProgressGlobalStyles />
          <GlobalStyles />
          <ToastBaseProvider />
          {children}
        </ThemeStyledProvider>
      </TokenRoot>
    </>
  )
}

export default AppProvider
