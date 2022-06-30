import React, { useEffect } from 'react';
import styles from './CartItem.module.scss'

function CartItem({id, item, index, removeCartItem}) {

    
    return (  
        <div id={id} className={styles.body}>
            <button 
            onClick={() => removeCartItem(item)}
            className={styles.remove} 
            >
                <img width={20} src="./images/icon_removeCartItem.png" alt="Удалить товар" />
            </button>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.row}>
                <img width={120} src={item.img} alt="Картинка товара" className={styles.img} />
                <div className={styles.price}>
                    <p>ЦЕНА</p>
                    <b>{item.price} ₽</b>
                </div>
            </div>
        </div>
    );
}

export default CartItem;