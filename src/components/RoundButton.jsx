import React from 'react'
import style from '../styles/roundIconButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

function RoundButton({ onClick }) {
    return (
        <div className={style.container} onClick={onClick}>
            <div className={style.innerContainer}>
                <FontAwesomeIcon icon={faPlus} size='lg' />
            </div>
        </div>
    )
}

export default RoundButton