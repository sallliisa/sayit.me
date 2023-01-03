import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Master from '../components/Master'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Master>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Master>
  )
}

export default MyApp
