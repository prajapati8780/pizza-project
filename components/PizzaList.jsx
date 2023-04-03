import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
export default function PizzaList() {
  return (
    
      <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sit, quod, aliquid in voluptatum nemo magni error molestiae et possimus soluta eligendi debitis facilis iusto doloribus voluptas sint at?</p>
        <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        </div>
      </div>
   
  )
}
