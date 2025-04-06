import { TiPencil } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function TodoListItem({
    text,
    isCompleted
}) {
    return (
        <li className='todoItem'>
            <input
                type="checkbox"
            />
            <span className='todoText'>
                {text}
            </span>
            <button className='iconButton'><TiPencil /></button>
            <button className='iconButton'><FaXmark /></button>
        </li>
    );
};