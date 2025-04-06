export default function TodoList({
    todos
}) {
    return (
        <ul className='todoList'>
            {todos.length > 0
                ? todos.map(todo => <p>{todo}</p>)
                : 'There is no any Todo at the moment.'
            }
        </ul>
    );
};