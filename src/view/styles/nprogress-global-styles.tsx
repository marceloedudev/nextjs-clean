import nprogressStyles from '@/infra/styles/nprogress'
import { GlobalStylesAdapter } from '@/infra/styles/styled-components'
import React from 'react'

const NProgressGlobalStyles = () => {
  return <GlobalStylesAdapter styles={nprogressStyles} />
}

export default NProgressGlobalStyles
