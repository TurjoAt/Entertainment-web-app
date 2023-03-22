import React from "react";
import uuid from "react-uuid";
import MovieCard from "./MovieCard";
import { useShow } from "./ShowProvider";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Trending = () => {
  const { data } = useShow();

  const trendingCollection = data.filter((item) => item.isTrending);

  return (
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">Trending</h1>
      <ScrollContainer
        vertical={false}
        hideScrollbars={false}
        className="scroll-container trendingShowContainer | padding-inline padding-block-top padding-block-bottom"
      >
        {trendingCollection.map((item) => (
          <MovieCard show={item} key={uuid()} container="trending" />
        ))}
      </ScrollContainer>
    </article>
  );
};

export default Trending;
