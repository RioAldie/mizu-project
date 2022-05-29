import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Store from './store'

export default function Home() {
  return (
    <>
    <Head>
      <title>Mizu e-commerce</title>
      <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
    </Head>
      <Store/>
    </>
  )
}
