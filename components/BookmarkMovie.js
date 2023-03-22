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
    <article>
      <h1 className="padding-inline fs-l-primary-heading fw-light">
        Bookmarked Movies
      </h1>
      {bookmarkedMovies.length > 0 ? (
        <div
          className={`showCardContainer ${
            bookmarkedMovies.length <= 3 && "alignCard"
          } | padding-inline padding-block-top padding-block-bottom`}
        >
          {bookmarkedMovies.map((item) => (
            <MovieCard show={item} key={uuid()} />
          ))}
        </div>
      ) : (
        <p
          className="fs-m-primary-heading fw-light"
          style={{
            display: "grid",
            placeContent: "center",
            placeItems: "center",
            gridAutoRows: "15vh",
          }}
        >
          No bookmarked movies
        </p>
      )}
      {/* <div
        className={`showCardContainer ${
          bookmarkedMovies.length <= 3 && "alignCard"
        } | padding-inline padding-block-top padding-block-bottom`}
      >
        {bookmarkedMovies.length > 0 ? (
          bookmarkedMovies.map((item) => <MovieCard show={item} key={uuid()} />)
        ) : (
          <p
            className="fs-m-primary-heading fw-light"
            style={{ display: "grid", placeContent: "center" }}
          >
            No bookmarked movies
          </p>
        )}
      </div> */}
    </article>
  );
};

export default BookmarkMovie;
