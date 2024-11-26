import s from "./SearchBox.module.css";
import React from "react";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={s.input}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
