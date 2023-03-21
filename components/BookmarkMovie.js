import { useShow } from "@/components/ShowProvider";
import MovieCard from "./MovieCard";
import uuid from "react-uuid";

const BookmarkMovie = () => {
  const { bookmark, data } = useShow();

  const bookmarkedCollection = data.filter(
    (item, index) => bookmark[index].bookmarkStatus
  );
  const bookmarkedMovies = bookmarkedCollection.filter(
    (item) => item.category === "Movie"
  );
  return (
    <>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked Movies
      </h1>
      <div
        className={`showCardContainer ${
          bookmarkedMovies.length <= 3 && "alignCard"
        } | padding-inline padding-block-top padding-block-bottom`}
      >
        {bookmarkedMovies.map((item) => (
          <MovieCard show={item} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default BookmarkMovie;
