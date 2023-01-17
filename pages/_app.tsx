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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
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
