import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "@/components/SearchResults";
import NavBar from "./NavBar";
import { SearchProvider } from "./SearchProvider";
import styles from "/styles/Layout.module.css";

const Layout = ({ children, setSearched }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className={styles.layoutContainer}>
      <NavBar />
      <SearchBar
        searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onBack={() => setSearchValue("")}
      />
      {searchValue === "" ? (
        children
      ) : (
        <SearchResults searchValue={searchValue} />
      )}
    </main>
  );
};

export default Layout;
