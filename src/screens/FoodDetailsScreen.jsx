import React, { useEffect, useState } from 'react'
import style from '../styles/foodDetailsScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function FoodDetailsScreen() {

    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/restaurant/food/show/90d8f554-82ec-42ff-9408-4580ce181754/')
            .then((response) => {
                setData(response.data.response)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])



    return (
        <div className={style.body}>
            <form action="">
                <div className={style.topContainer}>
                    <img src="" alt="" />
                    <div className={style.headdingContainer}>
                        <input type="text" value={data.title} />
                        <textarea cols={60} rows={5} value={data.description}></textarea>
                    </div>
                </div>
                <div className={style.middleContainer}>
                    <FontAwesomeIcon icon={faDotCircle} color='green' />
                    <select>
                        <option value={1}>Veg</option>
                        <option value={0}>Non Veg</option>
                    </select>
                    <FontAwesomeIcon icon={faStar} color='yellow' />
                    <input type="text" disabled value={data.rating} />
                    <FontAwesomeIcon icon={faDollarSign} />
                    <input type="text" disabled value={data.price} />
                </div>
                <div className={style.bottomContainer}>
                    <h3>Ingredients</h3>
                    <select name="" id="">
                        <option value="">Select Ingredient</option>
                    </select>
                    <button>Add</button>

                    <div className={style.valueContainer}></div>
                    <h3>Catogery</h3>
                    <select name="" id="">
                        <option value="">Select Catogery</option>
                    </select>
                    <button>Add</button>
                    <div className={style.valueContainer}></div>
                </div>
            </form>
        </div>
    )
}

export default FoodDetailsScreen