import React from 'react'
import style from '../styles/foodCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faStar } from '@fortawesome/free-regular-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function FoodCard() {

    const navigation = useNavigate()

    return (
        <div className={style.imageCardLargeContainer} onClick={() => navigation(':id')}>
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={style.headdingTopContainer}>
                <p>titl</p>
                <div className={style.iconBackground}>
                    <FontAwesomeIcon icon={faStar} color='#FFD600' />
                    <p>rating</p>
                </div>
            </div>
            <div className={style.headdingBottomContainer}>
                <div className={style.iconBackground}>
                    <FontAwesomeIcon icon={faDotCircle} size='sm' color='green' />
                    <p>Veg</p>
                </div>
                <div className={style.iconBackground}>
                    <FontAwesomeIcon icon={faDollarSign} />
                    <p>price</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCard