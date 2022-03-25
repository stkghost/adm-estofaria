import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ADM Estofados</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
