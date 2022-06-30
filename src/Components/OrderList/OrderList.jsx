import React, { useState } from 'react';
import styles from './OrderList.module.scss'
import OrderItem from '../OrderItem/OrderItem';

function OrderList({item, index}) {

    const [isOrderOpen, setIsOrderOpen] = useState(false)

    return (  
        <div className={styles.order}>
            <div onClick={() => setIsOrderOpen(!isOrderOpen)}  className={styles.title}>
                <button className={styles.open}>{isOrderOpen ? `-` : `+`}</button>
                <h3>Заказ #{index+1}</h3>
                <p>Дата: {item.date}</p>
            </div>
            <div className={isOrderOpen ? styles.bodyOpened : styles.body}>
                {
                    [...item.cartItems].map((item, index)=> 
                        <OrderItem
                            item={item}
                            index={index}
                            key={`Покупка ${item.id}`}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default OrderList;