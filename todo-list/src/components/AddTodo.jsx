import { useState } from "react";

export default function AddTodo({
    onAdd
}) {
    const [addTodoValue, setAddTodoValue] = useState('');

    const handleChange = (e) => {
        setAddTodoValue(e.target.value);
    };

    const handleAdd = () => {
        onAdd(addTodoValue);
        setAddTodoValue('');
    };

    return (
        <div className='inputContainer'>
            <input
                type="text"
                placeholder="what needs to be done?"
                className='addTodo'
                name="add-todo"
                value={addTodoValue}
                onChange={handleChange}
            />
            <button className='addButton' onClick={handleAdd}>+</button>
        </div>
    );
};