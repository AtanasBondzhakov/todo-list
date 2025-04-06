import TodoListItem from "./TodoListItem.jsx";

export default function TodoList({
    todos,
    onDelete
}) {
    return (
        <ul className='todoList'>
            {todos.length > 0
                ? todos.map(todo => <TodoListItem key={todo.id} {...todo} onDelete={onDelete} />)
                : 'There is no any Todo at the moment.'
            }
        </ul>
    );
};