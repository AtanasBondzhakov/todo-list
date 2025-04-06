export default function Input() {
    return (
        <div className='inputContainer'>
            <input
                type="text"
                placeholder="what needs to be done?"
                className='input'
                name="add-todo"
            />
            <button className='addButton'>+</button>
        </div>
    );
};