'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { GlobalStyles } from '../../components/shared/GlobalStyles';
import Intro from '../../components/Intro';
import About from '../../components/About';
import Collection from '../../components/Collection';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <GlobalStyles />
    <main className={styles.main}>
      <div style={{ marginTop: "5rem" }}>
        <Intro />
        <About />
        <Collection />
      </div>
    </main>
    </>
  )
}
