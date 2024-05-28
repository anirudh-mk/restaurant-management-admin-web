import React from 'react'
import style from '../styles/foods.module.css'
import FoodCard from '../components/FoodCard'
import RoundButton from '../components/RoundButton'
import { useNavigate } from 'react-router-dom'
function Foods() {

    navigation = useNavigate()

    return (
        <div className={style.body}>
            <div className={style.topNavbar}>
                <div className={style.topNavbarContainer}>
                    <div>
                        <h1>Foods</h1>
                    </div>
                    <div className={style.searchContainer}>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={style.foodContainer}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
            <RoundButton onClick={() => navigation('create')} />
        </div>
    )
}

export default Foods