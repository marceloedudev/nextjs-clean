/* eslint-disable react-hooks/exhaustive-deps */
import NProgress from 'nprogress'
import Router from 'next/router'

import React from 'react'

const usePageTransition = () => {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  }, [Router.events])
}

export default usePageTransition
