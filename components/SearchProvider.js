import React from "react";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider
      value={{
        search: search,
        getSearchValue: (e) => {
          setSearch(e.target.value);
          console.log(search);
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
