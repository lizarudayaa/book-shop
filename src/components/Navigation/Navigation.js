import React from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineHome , AiOutlineHeart ,AiOutlineDollar} from 'react-icons/ai'

import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.menu}>

                <li className={styles.item}>
                    <NavLink exact activeClassName={styles.active} className={styles.link} to='/home'>
                        <AiOutlineHome size='20px'/>
                        <span>Home</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink exact activeClassName={styles.active} className={styles.link} to='/card'>
                        <AiOutlineDollar size='20px'/>
                        <span>Card</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink exact activeClassName={styles.active} className={styles.link} to='/favorites'>
                        <AiOutlineHeart size='20px'/>
                        <span>Favorites</span>
                    </NavLink>
                </li>

            </ul>
        </nav>

    );
};

export default Navigation;