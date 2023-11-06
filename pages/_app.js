import React from 'react'
import 'normalize.css/normalize.css'
import localFont from 'next/font/local'
import '../assets/style/style.scss'

const font = localFont({ src:[{path:'../assets/fonts/Items/Items-CondensedLight.woff2', weight:'300', style:'normal'}]})

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}