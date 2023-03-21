import React from "react";
import uuid from "react-uuid";
import MovieCard from "./MovieCard";
import { useShow } from "./ShowProvider";

const Recommendations = () => {
  const { data } = useShow();
  const recommendCollection = data.filter((item) => !item.isTrending);
  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Recommended for you
      </h1>
      <div className="showCardContainer | padding-inline  padding-block-top padding-block-bottom">
        {recommendCollection.map((item) => (
          <MovieCard show={item} key={uuid()} />
        ))}
      </div>
    </article>
  );
};

export default Recommendations;
