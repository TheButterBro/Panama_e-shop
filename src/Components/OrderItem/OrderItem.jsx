import React from 'react';
import styles from './OrderItem.module.scss'

function OrderItem({item, index}) {
    return (  
        <div key={`товар ${index}`} className={styles.item}>
            <img width={220} src={item.img} alt="Изображение товара"/>
            <h2>{item.title}</h2>
            <div className={styles.box}>
                <p className={styles.price}>
                    <p>ЦЕНА</p>
                    <b>{item.price} ₽</b>
                </p>
            </div>
        </div>
    );
}

export default OrderItem;