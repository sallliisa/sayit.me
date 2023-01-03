import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Master from '../components/Master'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta name='color-scheme' content='only light' />
        <title>Say It!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Master>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Master>
    </>
  )
}

export default MyApp
