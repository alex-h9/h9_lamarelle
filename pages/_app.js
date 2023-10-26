import 'normalize.css/normalize.css'
import localFont from 'next/font/local'
import '../assets/style/style.scss'

const font = localFont({ src: '../assets/fonts/Items/Items-CondensedLight.woff2' })

function LaMarelle({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default LaMarelle