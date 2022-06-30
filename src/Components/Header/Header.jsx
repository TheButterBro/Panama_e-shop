import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss'

import Navigation from '../Navigation/Navigation';

import {Link} from 'react-router-dom'

function Header({ postIsCart }) {

    const handleIsCart = () => {
        postIsCart(true)
    }

    return (  
        <header>
            <div className={styles.container}>
                <Link to="Panama_e-shop/">
                    <div className={styles.logo}>
                        <p>M</p>
                        <img width={50} src="images/logo.svg" alt="Логотип" />
                        <p>L</p>
                    </div>
                </Link>
                <div className={styles.buttons}>
                    <Link to="Panama_e-shop/favorites" className={styles.favoritesLink}>
                        <div className={styles.favorite}>
                            <img src="images/icon_favorite.svg" alt="Избранное" />
                            <p>Избранное</p>
                        </div>
                    </Link>
                    <div onClick={handleIsCart} className={styles.cart}>
                        <img src="images/icon_cart.svg" alt="Корзина" />
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
            <Navigation/>
        </header>
    );
}

export default Header;