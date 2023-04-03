import React, { useState } from 'react'
import styles from '../../styles/product.module.css'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { add } from '../../store/cartslice'
export default function product() {
  const dispatch=useDispatch()
  const handleadd=()=>{
    dispatch(add(1))
  }
    const[size,setSize]=useState(0)
    const pizza={
        id:1,
        img:"/img/pizza5.png",
        name:"CAMPAGNOLA",
        price:[19.9,23.9,27.9],
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={pizza.img} alt="" width={300} height={300}></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes} >
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src='/img/addpizza.png' width={40} height={40}></Image>
                <span className={styles.number}>small</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src='/img/addpizza.png' width={50} height={50}></Image>
                <span className={styles.number}>medium</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src='/img/addpizza.png' width={60} height={60}></Image>
                <span className={styles.number}>large</span>
            </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" 
            id='double'
             name="double" 
             className={styles.checkbox}
             />
             <label htmlFor='double'>Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" 
            id='cheese'
             name="cheese" 
             className={styles.checkbox}
             />
             <label htmlFor='cheese'>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" 
            id='spicy'
             name="spicy" 
             className={styles.checkbox}
             />
             <label htmlFor='spicy'>Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" 
            id='garlic'
             name="garlic" 
             className={styles.checkbox}
             />
             <label htmlFor='garlic'>Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity}></input>
          <button onClick={()=>handleadd()} className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
