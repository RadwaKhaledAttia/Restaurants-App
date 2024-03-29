import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
