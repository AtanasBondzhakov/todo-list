export default function Progress({
    todos
}) {
    const doneTodos = todos.filter(todo => todo.isCompleted);
    const percentage = todos.length === 0 ? 0 : (doneTodos.length / todos.length) * 100;

    return (
        <div className="customBarWrapper">
            <div className="customBar">
                <div
                    className="customBarFill"
                    style={{ width: `${percentage}%` }}
                />
                <div className="customBarLabel">
                    {Math.round(percentage)}%
                </div>
            </div>
            <div>
                {doneTodos.length} of {todos.length} tasks done
            </div>
        </div>
    );
};