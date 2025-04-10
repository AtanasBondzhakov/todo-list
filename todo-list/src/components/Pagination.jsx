import { usePagination } from "../hooks/usePagination.js";

export default function Pagination({
    todosPerPage,
    todos,
    pageChange,
    currentPage
}) {
    const { pages } = usePagination(todosPerPage, todos);

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