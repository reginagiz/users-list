import { useState } from "react";
import useRequest from "../../custom_hooks/useRequest";
import { User } from "../../types";
import SortComponent from "../sort_component/SortComponent";
import ItemsPerPage from "../items_per_page/ItemsPerPage";
import SearchInput from "../search_input/SearchInput";
import Pagination from "../pagination/Pagination";
import UserCard from "../user_card/UserCard";
import s from "./HomePage.module.css";

interface UsersData {
  items: User[];
  total_count: number;
}

const HomePage = () => {
  const [login, setLogin] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState<5 | 10 | 15>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = useRequest<UsersData>(
    `https://api.github.com/search/users?q=${login}&sort=repositories&order=${selectedOption}&per_page=${itemsPerPage}&page=${currentPage}`,
    login
  );

  return (
    <div className={s.homepage} data-testid="homepage">
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
          setItemsPerPage={setItemsPerPage}
        />
        {loading ? (
          <div>Loading...</div>
        ) : data?.items?.length === 0 ? (
          <div>
            Sorry for the user with such a login was not found. Make sure you
            indicated the correct login.
          </div>
        ) : (
          <div>
            {data?.items?.map((item: User) => (
              <div key={item.id}>
                <UserCard login={item.login} />
              </div>
            ))}
          </div>
        )}
        {data === null || data?.items?.length === 0 ? (
          <div></div>
        ) : (
          <Pagination
            totalCount={data?.total_count}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
