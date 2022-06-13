import React, { Children } from 'react'
import Link from 'next/link'

type LinkNavigateProps = {
  to: string
  children: React.ReactNode
}

const LinkNavigate = ({ to, children }: LinkNavigateProps) => {
  return <Link href={to}>{children}</Link>
}

export default LinkNavigate
