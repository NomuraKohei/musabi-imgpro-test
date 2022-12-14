import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Three from '@/components/Three'

const Home: NextPage = () => {
  const [isBottom, setIsBottom] = useState(false)

  const clickHanlder = () => {
    setIsBottom(!isBottom)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Underwater 3D Image Exibition | scene1</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Three gltfPath={'scene1-meshopt'} />
        <Three gltfPath={'scene2-meshopt'} />
        <div
          style={{ position: 'fixed', top: 40, right: 40, cursor: 'pointer' }}
          className={styles.link}
          onClick={clickHanlder}
        >
          {isBottom ? (
            <Link href={'#scene1-meshopt'}>シーン切り替え</Link>
          ) : (
            <Link href={'#scene2-meshopt'}>シーン切り替え</Link>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
