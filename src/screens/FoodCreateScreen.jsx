import React, { useState } from 'react'

function FoodCreateScreen() {

    const [task, setTask] = useState([])
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (item) {
            if (task.includes(item)) {
                console.log('item already added');
            }
            else {
                setTask([...task, item])
            }
        }
    }

    console.log(task);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <select value={item} onChange={(e) => setItem(e.target.value)}>
                    <option value="">heool</option>
                    <option value="hi">hi</option>
                </select>
                <button>heool</button>
            </form>
        </div>
    )
}

export default FoodCreateScreen