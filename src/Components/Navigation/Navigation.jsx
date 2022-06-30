import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <nav className={styles.wrapper}>
                <ul className={styles.navigation}>
                    <Link to='Panama_e-shop/' className={styles.link}>
                        <a href="/">Каталог</a>
                    </Link>
                    <Link to='Panama_e-shop/orders' className={styles.link}>
                        <a href="/">История заказов</a>
                    </Link>
                </ul>
        </nav> 
    );
}

export default Navigation;