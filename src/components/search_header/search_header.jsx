import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const searchText = inputRef.current.value;
    console.log(searchText);
    onSearch(searchText);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        ref={inputRef}
        type="search"
        placeholder="search"
        className={styles.search}
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.search_btn} onClick={onClick}>
        <i class="fas fa-search"></i>
      </button>
    </header>
  );
};

export default SearchHeader;
