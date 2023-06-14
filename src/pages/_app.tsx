import '@/styles/globals.css'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const theme = extendBaseTheme({
 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}
