import { TiPencil } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function TodoListItem({
    id,
    text,
    isCompleted,
    onDelete,
    onToggle,
    onEdit
}) {
    return (
        <li className="todoItem">
            <div className={isCompleted ? 'todoInfo completed' : 'todoInfo'}>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onToggle(id)}
                />
                <span className='todoText'>
                    {text}
                </span>
                {isCompleted && <span>Done</span>}
            </div>
            <div className="iconButtons">
                <button className='iconButton edit' onClick={() => onEdit(id)}><TiPencil /></button>
                <button className='iconButton delete' onClick={() => onDelete(id)}><FaXmark /></button>
            </div>
        </li>
    );
};