import { AppProps } from 'next/app'
import AppProvider from '@/view/hooks/AppProvider'
import Head from 'next/head'
import ImagesBase from '@/resources/images'
import Navbar from '@/view/components/Navbar'
import React from 'react'
import usePageTransition from '@/view/hooks/usePageTransition'
import ProviderRollbar from '@/infra/monitoring/rollbar/ProviderRollbar'
import Layout from '@/view/components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  usePageTransition()
  return (
    <>
      <Head>
        <title>Storefront</title>
        <link rel="icon" href={`${ImagesBase.iconApp}`} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="React store front" />
      </Head>
      <ProviderRollbar>
        <AppProvider>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ProviderRollbar>
    </>
  )
}

export default App
