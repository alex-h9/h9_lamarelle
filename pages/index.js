import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Component } from 'react'
import { attributes } from '../public/pages/homepage.md'

export default class Home extends Component {
  render(){
    let { title, meta_desc, meta_image, address, rsv_url, rsv_label, ig_url } = attributes
  
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="img/favicon.ico" />
          <meta name="description" content={meta_desc} key="desc" />
          <meta property="og:title" content="La Marelle" />
          <meta property="og:description" content={meta_desc} />
          <meta property="og:image" content={meta_image} />
          <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'/>
        </Head>
        <h1 className="visually-hidden">{title}</h1>
        <div className="centered">
          <Image
            src="/img/lamarelle-logo.svg"
            alt="La Marelle"
            className="centered--logo"
            width={766}
            height={110}
            sizes="100vw"
            priority
          />
          <p className="centered--address">{address}</p>
        </div>

        <footer>
          <a href={rsv_url} target="_blank">
            {rsv_label}
          </a>
          <a href={ig_url} target="_blank">
            Instagram
          </a>
        </footer>
      </>
    )
  }
}

