import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
const Navbar=()=>{
   const router=useRouter()
   
   const cart=useSelector((state=>state.cart))
 return(
    <div className={styles.container}>
         <div className={styles.item}>
         <div className={styles.callButton}>
         <Image src="/img/telephone.png" alt="" width="32" height='32'></Image>
         </div>
         <div className={styles.texts}>
         <div className={styles.text}>ORDER NOW!</div>
         <div className={styles.text}>012 345 678</div>
         </div>
         </div>
         <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listitem}>Home</li>
                <li className={styles.listitem}>Products</li>
                <li className={styles.listitem}>Menu</li>
               <Image src="/img/logo.png" alt="" width={160} height={69}></Image>
                <li className={styles.listitem}>Events</li>
                <li className={styles.listitem}>Blog</li>
                <li className={styles.listitem}>Contact</li>
            </ul>
         </div>
         <div className={styles.item}>
            <div className={styles.cart}>
                <Image onClick={()=>router.push("/cart")} src="/img/cart2.jpg" alt="" width={30} height={30}></Image>
                <div className={styles.counter}>{cart}</div>
            </div>
           
            
            
         </div>
    </div>
 )
}
export default Navbar