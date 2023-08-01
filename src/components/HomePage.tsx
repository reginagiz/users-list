import { useState } from "react";
import useRequest from "../custom_hooks/useRequest";
import { User } from "../types";
import SortComponent from "./SortComponent";
import ItemsPerPage from "./ItemsPerPage";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";

const HomePage = () => {
  const [login, setLogin] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPagey] = useState<5 | 10 | 15>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = useRequest(
    `https://api.github.com/search/users?q=${login}&sort=repositories&order=${selectedOption}&per_page=${itemsPerPage}&page=${currentPage}`
  );

  return (
    <div>
      <SearchInput
        setLogin={setLogin}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <SortComponent
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ItemsPerPage
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPagey}
      />
      <div>
        {data?.items?.map((item: User) => (
          <div key={item.id}>{item.login}</div>
        ))}
      </div>
      <Pagination
        totalCount={data?.total_count}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
