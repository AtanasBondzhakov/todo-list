import { useState } from "react";

export default function Input({
    onAdd
}) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {
        onAdd(inputValue);
        setInputValue('');
    };

    return (
        <div className='inputContainer'>
            <input
                type="text"
                placeholder="what needs to be done?"
                className='input'
                name="add-todo"
                value={inputValue}
                onChange={handleChange}
            />
            <button className='addButton' onClick={handleAdd}>+</button>
        </div>
    );
};