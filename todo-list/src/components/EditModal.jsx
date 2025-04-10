import { useState } from "react";
import Error from "./Error";

export default function EditModal({
    onCancel,
    editTodo,
    onUpdate,
    error
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

                {error && <Error />}

                <div className="buttons">
                    <button className="buttons edit" onClick={() => onUpdate(editTodo.id, editTodoValue)}>Edit</button>
                    <button className="buttons cancel" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};
