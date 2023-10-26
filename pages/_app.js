import React from 'react'
import { appWithTranslation } from "i18next-ssg"
import 'normalize.css/normalize.css'
import localFont from 'next/font/local'
import '../assets/style/style.scss'

const font = localFont({ src: '../assets/fonts/Items/Items-CondensedLight.woff2' })

function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)