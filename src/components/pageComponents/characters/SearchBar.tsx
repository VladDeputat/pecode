import React, { ChangeEvent, useState } from "react";
import s from "./styles.module.scss";

interface SearchBarProps {
  onSearch: () => void;
  onReset: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formData: { name: string; status: string; gender: string };
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onReset,
  onChange,
  formData,
}) => {
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={s.searchBar}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="name"
          placeholder="Search by name..."
          value={formData.name}
          onChange={onChange}
        />

        <select name="status" value={formData.status} onChange={onChange}>
          <option value="">Select status...</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="gender" value={formData.gender} onChange={onChange}>
          <option value="">Select gender...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit">Search</button>
        <button onClick={onReset} className={s.resetBtn}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
