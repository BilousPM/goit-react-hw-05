import { useEffect, useState } from "react";
import { fetchTrendsMovies } from "../../servises/api";
import Errors from "../../components/Errors/Errors";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchTrendsMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [error]);

  console.log(movies);

  return (
    <div>
      <h1>Trending today</h1>

      {error && <Errors message={error} />}
    </div>
  );
};

export default HomePage;
