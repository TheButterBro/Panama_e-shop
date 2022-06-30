import React, { useState, useContext, createContext, useEffect } from 'react';
import styles from './Product.module.scss'
import {AppContext} from '../../App'
import axios from 'axios';

function Product({item, index}) {
    
    const { cartItems, setCartItems, favoritesItems, setFavoritesItems,} = useContext(AppContext)

    const thisCartItem = cartItems.find((elem) => elem.thisID == item.thisID)
    const thisFavoritesItem = favoritesItems.find((elem) => elem.thisID == item.thisID)

    const [isCart, setIsCart] = useState(!!thisCartItem)
    const [isFavorite, setIsFavorite] = useState(!!thisFavoritesItem)

    useEffect(()=>{
        thisCartItem ? setIsCart(true) : setIsCart(false)
    }, [thisCartItem])

    const handleAddToFavorite = () => {
        if (favoritesItems.every((elem) => elem.thisID != item.thisID)) {
            setIsFavorite(!isFavorite)
            const newItem = {...item, id: favoritesItems.length+1}            
            axios.post('https://62ac95029fa81d00a7b55b1a.mockapi.io/favoritesItems/', newItem)
            setFavoritesItems([...favoritesItems, newItem])
        } else {
            setIsFavorite(!isFavorite)
            axios.delete(`https://62ac95029fa81d00a7b55b1a.mockapi.io/favoritesItems/${thisFavoritesItem.id}`) 
            setFavoritesItems(favoritesItems.filter((elem)=>elem.thisID != item.id))
        }
    }

    const handleAddToCart = () => {
        if (cartItems.every((elem) => elem.thisID != item.thisID)) {
            setIsCart(!isCart)
            const newItem = {...item, id: cartItems.length+1}  
            axios.post('https://62ac95029fa81d00a7b55b1a.mockapi.io/cartItems/', newItem)
            setCartItems([...cartItems, newItem])
        } else {
            setIsCart(!isCart)
            axios.delete(`https://62ac95029fa81d00a7b55b1a.mockapi.io/cartItems/${thisCartItem.id}`)
            setCartItems(cartItems.filter((elem)=>elem.thisID != item.id))
        }  
    }

    return (  
        <div className={styles.item}>
            <button onClick={handleAddToFavorite} className={styles.favorite}>
                {isFavorite
                ? <img width={30} src="images/icon_inFavorite.png" alt="Добавить в избранное" />
                : <img width={30} src="images/icon_addFavorite.png" alt="Добавить в избранное" />
                }
            </button>
            <img width={220} src={item.img} alt="Изображение товара"/>
            <h2>{item.title}</h2>
            <div className={styles.box}>
                <p className={styles.price}>
                    <p>ЦЕНА</p>
                    <b>{item.price} ₽</b>
                </p>
                <button onClick={handleAddToCart} className={styles.button}>
                    {isCart
                    ? <img width={30} src="images/icon_inCart.png" alt="Добавить в избранное" />
                    : <img width={30} src="images/icon_addCart.png" alt="Добавить в корзину" />
                    }
                </button>
            </div>
        </div>  
    );
}

export default Product;