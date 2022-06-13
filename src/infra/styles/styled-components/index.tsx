/* eslint-disable no-restricted-imports */
import { Global, css } from '@emotion/react'

import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'

import React from 'react'
import styled from '@emotion/styled'

class StyledComponentsAdapter {
  tagName(tag) {
    return styled(tag)
  }
  css() {
    return css
  }
  renderStatic = async (html) => {
    if (html === undefined) {
      throw new Error('did you forget to return html from renderToString?')
    }
    const { extractCritical } = createEmotionServer(cache)
    const { ids, css } = extractCritical(html)
    return { html, ids, css }
  }
}

export const GlobalStylesAdapter = ({ styles }) => {
  return <Global styles={styles} />
}

export default StyledComponentsAdapter
