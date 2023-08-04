import React from "react";
import s from "./HomePage.module.css";

interface InputItemsProps {
  inputValue: string;
  setLogin: (option: string) => void;
  setInputValue: (option: string) => void;
  setCurrentPage: (option: number) => void;
}

const SearchInput: React.FC<InputItemsProps> = ({
  inputValue,
  setLogin,
  setInputValue,
  setCurrentPage,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    setLogin(inputValue);
    setCurrentPage(1);
  };

  return (
    <div className={s.search_component}>
      <input
        value={inputValue}
        name="login"
        onChange={handleInputChange}
        className={s.search_input}
        placeholder="Search..."
      />
      <button
        type="submit"
        onClick={handleButtonClick}
        className={s.search_button}
      ></button>
    </div>
  );
};

export default SearchInput;
