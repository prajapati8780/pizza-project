import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'




export default function Home() {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>pizza Restaurant in Newyourk</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Featured/>
   <PizzaList/>
    
    </div>
  )
}
