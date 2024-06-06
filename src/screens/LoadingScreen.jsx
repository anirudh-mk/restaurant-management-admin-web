// LoadingScreen.js
import React from 'react';
import style from '../styles/loadingScreen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the spinner icon

function LoadingScreen() {
    return (
        <div className={style.loadingOverlay}>
            <div className={style.loadingContainer}>
                <div className={style.loadingAnimation}>
                    <div className={style.loader}></div>
                    <FontAwesomeIcon icon={faUser} className={style.loadingIcon} />
                </div>
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
