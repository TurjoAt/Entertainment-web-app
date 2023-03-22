import React from "react";
import uuid from "react-uuid";
import MovieCard from "./MovieCard";
import data from "/data.json";
import { useShow } from "./ShowProvider";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const SearchResults = ({ searchValue }) => {
  const router = useRouter();
  const { bookmark } = useShow();
  const regex = new RegExp(`\\b${searchValue}\\w*\\b`);
  let collection;

  switch (router.pathname) {
    case "/":
      collection = data;
      break;
    case "/movies":
      collection = data.filter((item) => item.category === "Movie");
      break;
    case "/tv-series":
      collection = data.filter((item) => item.category === "TV Series");
      break;
    case "/bookmarks":
      collection = data.filter((item, index) => bookmark[index].bookmarkStatus);
      break;
    default:
      collection = data;
  }

  const searchFilter = collection.filter((item) =>
    regex.test(item.title.toLowerCase())
  );

  return (
    <section className="showListContainer">
      <h2 className="padding-inline fs-l-primary-heading fw-light">
        Found {searchFilter.length} results for &lsquo;{searchValue}&rsquo;
      </h2>
      <div
        className={`showCardContainer ${
          searchFilter.length <= 2 && "alignSearch"
        } | padding-inline padding-block-top padding-block-bottom`}
      >
        {searchFilter.map((item) => (
          <MovieCard show={item} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
