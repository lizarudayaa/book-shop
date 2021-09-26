import React from 'react';


import {GiBookshelf } from 'react-icons/gi';
import styles from './Header.module.scss'
import Navigation from "../../components/Navigation/Navigation";

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <span><GiBookshelf size='7em'/></span>
                </div>
                <div className={styles.title}>
                    <h3>Bookieyork</h3>
                </div>
            </div>
            <Navigation/>
        </header>

);
};

export default Header;