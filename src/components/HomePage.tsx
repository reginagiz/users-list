import { useState } from "react";
import useRequest from "../custom_hooks/useRequest";
import { User } from "../types";
import SortComponent from "./SortComponent";
import ItemsPerPage from "./ItemsPerPage";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import s from "./HomePage.module.css";

interface UsersData {
  items: User[];
  total_count: number;
}

const HomePage = () => {
  const [login, setLogin] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPagey] = useState<5 | 10 | 15>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = useRequest<UsersData>(
    `https://api.github.com/search/users?q=${login}&sort=repositories&order=${selectedOption}&per_page=${itemsPerPage}&page=${currentPage}`
  );
  console.log(data?.items);

  return (
    <div className={s.homepage}>
      <div className={s.homepage_container}>
        <SearchInput
          setLogin={setLogin}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setCurrentPage={setCurrentPage}
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
            <div key={item.id}>
              <UserCard login={item.login} />
            </div>
          ))}
        </div>
        <Pagination
          totalCount={data?.total_count}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
