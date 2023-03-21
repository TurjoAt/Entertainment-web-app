import React from "react";
import uuid from "react-uuid";
import MovieCard from "./MovieCard";
import { useShow } from "./ShowProvider";

const Trending = () => {
  const { data } = useShow();
  const trendingCollection = data.filter((item) => item.isTrending);

  // padding-block-top padding-block-bottom
  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">Trending</h1>
      <div className="trendingShowContainer | padding-inline padding-block-top padding-block-bottom">
        {trendingCollection.map((item) => (
          <MovieCard show={item} key={uuid()} container="trending" />
        ))}
      </div>
    </article>
  );
};

export default Trending;
