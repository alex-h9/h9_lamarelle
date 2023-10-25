import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import '/app/styles/styles.scss'

export default class Home extends Component {
  render() {
    let { title, address, ig_url, rsv_label, rsv_url } = attributes
    return (
      <>
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
        </Head>
        <article>
          <h1 className="visually-hidden">{title}</h1>
          <div>
            <Image
              src="/img/lamarelle-logo.svg"
              width="300"
              height="500"
              alt="La Marelle"
            /> 
            <p>{address}</p>
          </div>

          <div>
            <a href={ig_url} target="_blank">Instagram</a>
            <a href={rsv_url} target="_blank">{rsv_label}</a>
          </div>
        </article>
      </>
    )
  }
}