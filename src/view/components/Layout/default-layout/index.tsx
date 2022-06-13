import { LayoutContainer } from './styles'
import React from 'react'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC = ({ children }: DefaultLayoutProps) => {
  return (
    <LayoutContainer>
      <div className="layout-wrapper">
        <div className="layout-content">{children}</div>
      </div>
    </LayoutContainer>
  )
}

export default DefaultLayout
