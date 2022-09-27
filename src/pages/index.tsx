import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Three from './three'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Three
          pixels={[
            { position: { x: 0.1, y: 0.1, z: 0 }, color: { r: 255, g: 255, b: 0 } },
            { position: { x: 0.2, y: 0.1, z: 0 }, color: { r: 255, g: 255, b: 0 } },
          ]}
        />
      </main>
    </div>
  )
}

export default Home
