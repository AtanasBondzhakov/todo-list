import { TiPencil } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function TodoListItem({
    id,
    text,
    isCompleted,
    onDelete,
    onToggle
}) {
    return (
        <li className='todoItem'>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => onToggle(id)}
            />
            <span className={isCompleted ? 'todoText completed' : 'todoText'} >
                {text}
            </span>
            <button className='iconButton'><TiPencil /></button>
            <button className='iconButton' onClick={() => onDelete(id)}><FaXmark /></button>
        </li>
    );
};