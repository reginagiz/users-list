import React from "react";

interface SortComponentProps {
  selectedOption: "asc" | "desc";
  setSelectedOption: (option: "asc" | "desc") => void;
}

const SortComponent: React.FC<SortComponentProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="sort">
      Sorting by number of repositories
      <label>
        <input
          type="radio"
          value="asc"
          checked={selectedOption === "asc"}
          onChange={() => setSelectedOption("asc")}
        />
        ascending
      </label>
      <label>
        <input
          type="radio"
          value="desc"
          checked={selectedOption === "desc"}
          onChange={() => setSelectedOption("desc")}
        />
        descending
      </label>
    </div>
  );
};

export default SortComponent;
