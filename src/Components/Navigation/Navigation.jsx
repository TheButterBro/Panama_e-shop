import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <nav className={styles.wrapper}>
                <ul className={styles.navigation}>
                    <Link to='/' className={styles.link}>
                        <a href="/">Каталог</a>
                    </Link>
                    <Link to='/orders' className={styles.link}>
                        <a href="/">История заказов</a>
                    </Link>
                </ul>
        </nav> 
    );
}

export default Navigation;