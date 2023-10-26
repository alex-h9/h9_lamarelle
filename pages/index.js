import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Component } from 'react'
import { attributes } from '../content/home.md'

export default class Home extends Component {
  render() {
    let { title, address, ig_url, rsv_label, rsv_url } = attributes
    return (
      <>
        <Head>
          <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'/>
        </Head>
          <h1 className='visually-hidden'>{title}</h1>
          <div className='centered'>
            <Image
              src='/img/lamarelle-logo.svg'
              alt='La Marelle'
              className='centered--logo'
              width={766}
              height={110}
              sizes="100vw"
            /> 
            <p className='centered--address'>{address}</p>
          </div>

          <footer>
            <a href={rsv_url} target='_blank'>{rsv_label}</a>
            <a href={ig_url} target='_blank'>Instagram</a>
          </footer>
      </>
    )
  }
}