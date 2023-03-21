import React from "react";
import { useShow } from "@/components/ShowProvider";
import MovieCard from "./MovieCard";
import uuid from "react-uuid";

const BookmarkSeries = () => {
  const { bookmark, data } = useShow();

  const bookmarkedCollection = data.filter(
    (item, index) => bookmark[index].bookmarkStatus
  );
  const bookmarkedSeries = bookmarkedCollection.filter(
    (item) => item.category === "TV Series"
  );
  console.log(bookmarkedSeries.length);

  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked TV Series
      </h1>
      <div
        className={`showCardContainer ${
          bookmarkedSeries.length <= 3 && "alignCard"
        } | padding-inline padding-block-top padding-block-bottom`}
      >
        {bookmarkedSeries.map((item) => (
          <MovieCard show={item} key={uuid()} />
        ))}
      </div>
    </article>
  );
};

export default BookmarkSeries;
