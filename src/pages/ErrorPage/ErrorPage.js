import React from 'react';
import styles from './ErrorPage.module.scss';


const ErrorPage = ({errorType}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.error}>
                    <div className={styles.box}></div>
                    <h3>ERROR {errorType}</h3>
                    <p>Things are a little <span>unstable</span> here</p>
                    <p>I suggest come back later</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
