import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createPack } from 'react-component-pack'

import { UiProvider } from '../ui/UiProvider'

const Providers = createPack(UiProvider)

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  )
}
export default App
