import { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalPages = Math.ceil((totalCount || 0) / itemsPerPage);
  const totalPagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);

  const displayArray = totalPagesArr.slice(currentIndex, currentIndex + 5);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex >= totalPagesArr.length - 5 ? prevIndex : prevIndex + 5
    );
  };
  const handleClickBack = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex >= 5 ? prevIndex - 5 : 0
    );
  };

  return (
    <div>
      <button onClick={handleClickBack}>{"<"}</button>
      {displayArray.map((value, index) => (
        <button key={index} onClick={() => setCurrentPage(value)}>
          {value}
        </button>
      ))}
      <button onClick={handleClickNext}>{">"}</button>
    </div>
  );
};

export default Pagination;
