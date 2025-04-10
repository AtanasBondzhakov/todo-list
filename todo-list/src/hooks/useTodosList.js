import { useState, useEffect } from "react";

export default function useTodosList(
    todos,
    todosPerPage,
    currentPage
) {
    const [todosRender, setTodosRender] = useState([]);

    useEffect(() => {
        setTodosRender(todos?.slice(todosPerPage * (currentPage - 1), todosPerPage * currentPage));
    }, [todos, currentPage, todosPerPage]);

    return {
        todosRender
    }
};