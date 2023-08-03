import type { AppProps } from 'next/app'
import StyledComponentsRegistry from '../../lib/registry'
import DataContext from '@/context/DataContext'

import Theme from '@context/Theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Theme>
        <DataContext>
          <Component {...pageProps} />
        </DataContext>
      </Theme>
    </StyledComponentsRegistry>
  )
}
