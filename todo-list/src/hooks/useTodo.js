import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

export const useTodo = (handleErrors) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (!text.trim()) {
            return handleErrors('addError', true);
        }

        setTodos(prevState => ([
            ...prevState,
            {
                id: uuidV4(),
                text: text.trim(),
                isCompleted: false
            }
        ]));

        handleErrors('addError', false);
    };

    const deleteTodo = (todoId) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
    };

    const toggleCompleted = (todoId) => {
        setTodos(prevState => prevState.map(todo =>
            todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    const editUpdateTodo = (todoId, newText) => {
        if (!newText.trim()) {
            handleErrors('editError', true);
            return false;
        }

        setTodos(prevState => prevState.map(todo =>
            todo.id === todoId ? { ...todo, text: newText } : todo
        ));

        handleErrors('editError', false);
        return true;
    };

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleCompleted,
        editUpdateTodo
    };
};