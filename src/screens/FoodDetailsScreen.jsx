import React, { useState } from 'react'
import style from '../styles/foodDetailsScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function FoodDetailsScreen() {

    const [headding, setHeadding] = useState(true)
    const [description, setDescription] = useState(true)
    const [ingredient, setIngredient] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState('')
    const [catogery, setCatogery] = useState([])
    const [selectedCatogery, setSelectedCatogery] = useState('')
    const [formData, setFormData] = useState({
        headding: "",
        description: ""
    })

    const predefinedTasks = [
        'Buy groceries',
        'Clean the house',
        'Finish homework',
        'Exercise',
        'Read a book'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const addIngredients = (e) => {
        e.preventDefault();
        if (selectedIngredient) {
            setIngredient([
                ...ingredient,
                selectedIngredient
            ]);
            setSelectedIngredient('');
        }
    };

    const deleteIngredients = (index) => {
        const newIngredient = [
            ...ingredient
        ];
        newIngredient.splice(index, 1);
        setIngredient(newIngredient);
    };



    const addCatogery = (e) => {
        e.preventDefault();
        if (selectedCatogery) {
            setCatogery([
                ...catogery,
                selectedCatogery
            ])
            setSelectedCatogery('');
        }
    }

    const deleteCatogery = (index) => {
        const newTodos = [
            ...todos
        ];
        newTodos.splice(index, 1);
        setIngredient(newTodos);
    };


    return (
        <div className={style.body}>
            <div className={style.container}>
                <img src="" alt="" />
                <form onSubmit={handleSubmit}>
                    <div className={style.headdingContainer}>
                        <div className={style.headding}>
                            <input type="text" name="headding" value={formData.headding} disabled={headding} style={{ border: headding && 'none' }} onChange={handleChange} />
                            {
                                headding ?
                                    <FontAwesomeIcon icon={faEdit} onClick={() => setHeadding(false)} /> :
                                    <div className={style.createIcons}>
                                        <FontAwesomeIcon icon={faCheck} onClick={() => setHeadding(true)} />
                                    </div>
                            }
                        </div>
                        <div className={style.description}>
                            <textarea name="description" id="" value={formData.description} disabled={description} style={{ border: description && 'none' }} onChange={handleChange} rows={4} cols={60}></textarea>
                            {
                                description ?
                                    <FontAwesomeIcon icon={faEdit} onClick={() => setDescription(false)} /> :
                                    <div className={style.createIcons}>
                                        <FontAwesomeIcon icon={faCheck} onClick={() => setDescription(true)} />
                                    </div>
                            }
                        </div>
                    </div>
                </form>
            </div >

            <div className={style.ingeredients}>
                <h3>Ingredients</h3>
                <form onSubmit={addIngredients}>
                    <select value={selectedIngredient} onChange={(e) => setSelectedIngredient(e.target.value)}>
                        <option value="">Select Ingredient</option>
                        {
                            predefinedTasks.map((task, index) => (
                                <option key={index} value={task}>{task}</option>
                            ))}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <div className={style.ingredientListContainer}>
                    {
                        ingredient.map((item, index) => (
                            <div key={index} className={style.incredientContainer}>
                                {item} <button onClick={() => deleteIngredients(index)} className={style.closeButton}>x</button>
                            </div>
                        ))}
                </div>
            </div>
            <div className={style.catogery}>
                <h3>Catogery</h3>
                <form onSubmit={addCatogery}>
                    <select value={selectedCatogery} onChange={(e) => setSelectedCatogery(e.target.value)}>
                        <option value="">Select Catogery</option>
                        {
                            predefinedTasks.map((catogery, index) => (
                                <option key={index} value={catogery}>{catogery}</option>
                            ))}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <div className={style.ingredientListContainer}>
                    {
                        catogery.map((item, index) => (
                            <div key={index} className={style.incredientContainer}>
                                {item}
                                <button onClick={() => deleteCatogery(index)} className={style.closeButton}>x</button>
                            </div>
                        ))}
                </div>
            </div>
        </div >
    )
}

export default FoodDetailsScreen