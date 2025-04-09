import { useState } from "react";

export default function EditModal({
    onCancel,
    editTodo,
    onUpdate
}) {
    const [editTodoValue, setEditTodoValue] = useState(editTodo.text);

    return (
        <div className="modal">
            <div className="modalContent">
                <h2>Edit Todo</h2>
                <input
                    type="text"
                    value={editTodoValue}
                    onChange={(e) => setEditTodoValue(e.target.value)}
                />
                <div className="buttons">
                    <button onClick={() => onUpdate(editTodo.id, editTodoValue)}>Update</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};
