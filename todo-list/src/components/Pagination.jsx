import { useEffect, useState } from "react";

export default function Pagination({
    todosPerPage,
    todos,
    pageChange,
    currentPage
}) {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const totalPages = Math.ceil(todos.length / todosPerPage);
        const generatedPages = [];

        for (let i = 1; i <= totalPages; i++) {
            generatedPages.push(i);
        }

        setPages(generatedPages);
    }, [todos.length, todosPerPage]);

    return (
        <div className="paginator">
            {pages.map(p => (
                <button
                    key={p}
                    onClick={() => pageChange(p)}
                    className={currentPage === p ? 'paginatorBtn active' : 'paginatorBtn'}
                >{p}
                </button>
            ))}
        </div>
    );
};