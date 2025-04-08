import { useState } from "react";

export default function EditModal({
    onCancel,
    editTodo
}) {
    const [editTodoValue, setEditTodoValue] = useState(editTodo.text);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Todo</h2>
                <input
                    type="text"
                    value={editTodoValue}
                    onChange={(e) => setEditTodoValue(e.target.value)}
                />
                <button>Update</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};
