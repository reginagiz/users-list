import React from "react";
import s from "../home_page/HomePage.module.css";

interface SortComponentProps {
  selectedOption: "asc" | "desc";
  setSelectedOption: (option: "asc" | "desc") => void;
}

const SortComponent: React.FC<SortComponentProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className={s.sort_component}>
      Sort by number of repositories
      <div className={s.sort_component_buttons}>
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
    </div>
  );
};

export default SortComponent;
