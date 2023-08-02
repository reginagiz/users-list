import React from "react";

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
    <div>
      <input value={inputValue} name="login" onChange={handleInputChange} />
      <button type="submit" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
