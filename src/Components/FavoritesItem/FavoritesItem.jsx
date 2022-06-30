import React, { useState } from 'react';
import styles from './FavoritesItem.module.scss'   
import {AppContext} from '../../App'
import axios from 'axios';


function FavoritesItem({item, index}) {

    const [isFavorite, setIsFavorite] = useState(true)


    // ИСПРАВИТЬ БАГИ ДОВЕСТИ ДО УМА
    const handleSwitchFavorite = () => {
        if (!isFavorite) {
            setIsFavorite(!isFavorite)
            axios.post('https://62ac95029fa81d00a7b55b1a.mockapi.io/favoritesItems', item)
        } else {
            setIsFavorite(!isFavorite) 
            axios.delete(`https://62ac95029fa81d00a7b55b1a.mockapi.io/favoritesItems/${item.id}`)
        }
    }


    return (  
        <div className={styles.item}>
            <button onClick={handleSwitchFavorite} className={styles.favorite}>
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
                <button className={styles.button}></button>
            </div>
        </div>
    );
}

export default FavoritesItem;