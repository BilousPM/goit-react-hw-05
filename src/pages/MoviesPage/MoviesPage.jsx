import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchMovieByName } from "../../servises/api";
import Errors from "../../components/Errors/Errors";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [filtredMovi, setFiltredMovie] = useState();
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const filtredMovie = await searchMovieByName(query);
        setFiltredMovie(filtredMovie);
      } catch (error) {
        setError(error.message);
      }
    };
    searchMovie();
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <MovieList movieList={filtredMovi} />
      {error && <Errors message={error} />}
    </div>
  );
};

export default MoviesPage;
