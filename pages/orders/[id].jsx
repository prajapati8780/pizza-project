import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Order.module.css';
export default function order() {
    const status=0;
    const statusclass=(index)=>{
        if(index-status<1) return styles.done;
        if(index-status===1) return styles.inProgress;
        if(index-status>1) return styles.undone;
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                    <span className={styles.id}>123454324567</span>
                </td>
                <td>
                    <span className={styles.name}>
                        John Doe
                    </span>
                </td>
                <td>
                    <span className={styles.price}>Elton st. 212-33 LA</span>
                </td>
                <td>
                    <span className={styles.total}>$79.80</span>
                </td>
              </tr>
              </tbody>
            </table>
        </div>
        <div className={styles.row}>
            <div className={statusclass(0)}>
                <Image  src="/img/paid.png" width={50} height={50} alt=""></Image>
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                <Image  className={styles.checkedIcon} src="/img/righticon.png" width={40} height={40} alt=""></Image>
                </div>
            </div>
            <div className={statusclass(1)}>
                <Image src="/img/preparing.png" width={50} height={50} alt=""></Image>
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/righticon.png" width={40} height={40} alt=""></Image>
                </div>
            </div>
            <div className={statusclass(2)}>
                <Image src="/img/On the way.png" width={50} height={50} alt=""></Image>
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/righticon.png" width={40} height={40} alt=""></Image>
                </div>
            </div>
            <div className={statusclass(3)}>
                <Image src="/img/delivered.png" width={50} height={50} alt=""></Image>
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/righticon.png" width={40} height={40} alt=""></Image>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>PAID!</button>
            </div>
        </div>
    </div>
  )
}
