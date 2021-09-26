import React from 'react';
import styles from './Loader.module.scss'
const Loader = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.cover}></div>
                <div className={styles.page}></div>
                <div className={styles["inner-border"]}></div>
                <p>LOADING ...</p>
            </div>
        </div>

    );
};

export default Loader;