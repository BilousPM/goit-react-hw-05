import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import GridItem from "../Griditem/GridItem";

const MovieList = ({ movieList = [] }) => {
  return (
    <div>
      <Grid>
        {movieList.map((movie) => (
          <GridItem key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </Link>
            <p>{`★★★ ${movie.vote_average}`}</p>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
