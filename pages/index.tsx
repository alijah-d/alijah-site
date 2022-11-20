import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Nav from '../components/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alijah Mancera</title>
        <meta
          name="description"
          content='Alijah Mancera'
        />
      </Head>

      <main>
        <Nav />
      </main>
    </>
  )
}

export default Home
