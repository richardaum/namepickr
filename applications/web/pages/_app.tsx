import '@fontsource/bebas-neue'
import '@fontsource/niconne'

import type { AppProps } from 'next/app'
import { createPack } from 'react-component-pack'

import { UiProvider } from '../ui/UiProvider'

const Providers = createPack(UiProvider)

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
