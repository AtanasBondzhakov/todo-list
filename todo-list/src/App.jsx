import { useState } from "react";

import TodoList from "./components/TodoList.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className='container'>
                <h1 className='title'>TodoList</h1>

                <TodoList todos={todos} />
            </div>
        </>
    )
}

export default App
