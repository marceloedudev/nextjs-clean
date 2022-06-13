import { LayoutContainer } from './styles'
import React from 'react'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout: React.FC = ({ children }: AuthLayoutProps) => {
  return (
    <LayoutContainer>
      <div className="layout-content">{children}</div>
    </LayoutContainer>
  )
}

export default AuthLayout
