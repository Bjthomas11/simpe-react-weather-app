import React from "react";

const Search = ({ onChange, value, onKeyPress }) => {
  return (
    <div className="search-container">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Weather"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Search;
