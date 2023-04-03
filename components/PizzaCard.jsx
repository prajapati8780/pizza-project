import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function PizzaCard() {
  const router=useRouter()
  return (
    <div className={styles.container}>
     <Image onClick={()=>router.push("/product/123")} src='/img/pizza5.png' width="300" height="300"></Image>
    <h1 className={styles.title}>FIORT DI ZUCCA</h1>
    <span className={styles.price}>$19.90</span>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti?
    </p>
    
    </div>
  )
}
