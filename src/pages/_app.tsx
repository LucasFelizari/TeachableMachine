
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../../chakra_theme';
import '../styles/App.css';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}
