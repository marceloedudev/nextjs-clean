import React from 'react'
import LinkNavigate from '@/view/components/LinkNavigate'

export interface ILinkNavigateBase {
  children: React.ReactNode
  to: string
}

const LinkNavigateBase: React.FC<ILinkNavigateBase> = ({ children, to }) => {
  return <LinkNavigate to={`${to}`}>{children}</LinkNavigate>
}

export default LinkNavigateBase
