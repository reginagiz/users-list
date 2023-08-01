interface PaginationProps {
  totalCount: number | undefined;
  itemsPerPage: number;
  setCurrentPage: (option: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  itemsPerPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil((totalCount || 0) / itemsPerPage);
  const totalPagesLength = { length: totalPages < 5 ? totalPages : 5 };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {Array.from(totalPagesLength).map((_, index) => (
        <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
