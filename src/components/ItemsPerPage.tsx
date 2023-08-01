import React from "react";

interface ItemsPerPageProps {
  itemsPerPage: 5 | 10 | 15;
  setItemsPerPage: (option: 5 | 10 | 15) => void;
}

const ItemsPerPage: React.FC<ItemsPerPageProps> = ({
  itemsPerPage,
  setItemsPerPage,
}) => {
  return (
    <div className="sort">
      Users per page
      <label>
        <input
          type="radio"
          value={5}
          checked={itemsPerPage === 5}
          onChange={() => setItemsPerPage(5)}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          value={10}
          checked={itemsPerPage === 10}
          onChange={() => setItemsPerPage(10)}
        />
        10
      </label>
      <label>
        <input
          type="radio"
          value={15}
          checked={itemsPerPage === 15}
          onChange={() => setItemsPerPage(15)}
        />
        15
      </label>
    </div>
  );
};

export default ItemsPerPage;
