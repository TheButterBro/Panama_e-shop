import React, { useContext } from 'react';
import styles from './Favorites.module.scss'
import FavoritesItem from '../FavoritesItem/FavoritesItem';


import {AppContext} from '../../App'

function Favorites() {

    const { favoritesItems } = useContext(AppContext)
    

    return (  
        <section className={styles.products}>
            <div className={styles.head}>
                <h1>Избранные товары</h1>
            </div>
            <div className={styles.body}>
                {favoritesItems.length 
                ? favoritesItems.map((item, index)=> 
                    <FavoritesItem
                        item={item}
                        index={index}  
                        key={item.id}
                    />
                )
                : <h2 className={styles.empty}>Кажется Вам ничего не нравится...</h2>}
            </div>
        </section>
    );
}

export default Favorites;