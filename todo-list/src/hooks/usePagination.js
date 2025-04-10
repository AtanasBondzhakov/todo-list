import { useState, useEffect } from "react";

export const usePagination = (todosPerPage, todos) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const totalPages = Math.ceil(todos.length / todosPerPage);
        const generatedPages = [];

        for (let i = 1; i <= totalPages; i++) {
            generatedPages.push(i);
        }

        setPages(generatedPages);
    }, [todos.length, todosPerPage]);

    return {
        pages
    }
};