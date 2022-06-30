import React, { useContext } from 'react';
import styles from './Orders.module.scss'
import OrderList from '../OrderList/OrderList'

import {AppContext} from '../../App'

function Orders() {
    
    const { ordersItems } = useContext(AppContext)

    return (  
        <section className={styles.products}>
            <div className={styles.head}>
                <h1>История заказов</h1>
            </div>
            <div className={styles.body}>
                {ordersItems.length 
                ? ordersItems.map((item, index)=> 
                    <OrderList
                        item={item}
                        index={index}  
                        key={`Список ${index}`}
                    />
                )
                : <h2 className={styles.empty}>Вы еще ничего не приобрели</h2>}
            </div>
        </section>
    );
}
    
export default Orders;