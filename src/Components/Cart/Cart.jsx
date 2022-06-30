import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss'
import CartItem from '../CartItem/CartItem';
import {AppContext} from '../../App'
import axios from 'axios';

function Cart({ postIsCart }) {

    const { cartItems, setCartItems, ordersItems, setOrdersItems } = useContext(AppContext)
    const [isSending, setIsSending] = useState(false)

    const handleIsCart = () => {
        postIsCart(false)
    }
    const removeCartItem = (thisItem) => {
        axios.delete(`https://62ac95029fa81d00a7b55b1a.mockapi.io/cartItems/${thisItem.id}`)
        setCartItems(cartItems.filter((elem) => elem.thisID != thisItem.thisID))
    }

    const handleBuyItems = () => {
        const newOrder = {cartItems, date: (new Date()).toISOString().slice(0,10)}
        axios.post('https://62ac95029fa81d00a7b55b1a.mockapi.io/ordersItems', newOrder)
        setOrdersItems([...ordersItems, newOrder])
        cartItems.forEach((item)=> axios.delete(`https://62ac95029fa81d00a7b55b1a.mockapi.io/cartItems/${item.id}`))
        setCartItems([])
        setIsSending(true)
        setTimeout(()=>{
            setIsSending(false)
        }, 5000)
    }


    return (  
        <div 
        className={styles.fade}
        onClick={handleIsCart}
        >
            <div 
            className={styles.cart}
            onClick={(e)=>e.stopPropagation()}>
                <h2>Корзина</h2>
                <button 
                    className={styles.closeButton}  
                    onClick={handleIsCart}
                >
                    <img width={30} src="./images/icon_closeCart.png" alt="Закрыть корзину" />
                </button>
                {isSending 
                ? 
                    <div className={styles.buyed}>
                        <img width={100} src="./images/icon_buyed.png" alt="Покупка совершена!" />
                        <h3>Покупка совершена!</h3>
                        <p>Она отобразится на странице "История заказов"</p>
                    </div>
                :
                    <div className={styles.body}>
                        <ul className={styles.list}>
                            {cartItems.map((item, index) =>(
                                <CartItem
                                    item={item}
                                    index={index}
                                    key={`Товар ${item.id}`}
                                    removeCartItem={removeCartItem}
                                />
                            ))}
                        </ul>
                        <div className={styles.info}>
                            <div className={styles.row}>
                                <p>Товаров</p>
                                <div className={styles.spliter}></div>
                                <b>{cartItems.length}</b>
                            </div>
                            <div className={styles.row}>
                                <p>На сумму</p>
                                <div className={styles.spliter}></div>
                                <b>{cartItems.reduce((prev, elem) => { return prev + Number(elem.price)}, 0)} ₽</b>
                            </div>
                        </div>
                        <button disabled={!cartItems.length} onClick={handleBuyItems} className={styles.buyButton}>Оформить заказ</button>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Cart;