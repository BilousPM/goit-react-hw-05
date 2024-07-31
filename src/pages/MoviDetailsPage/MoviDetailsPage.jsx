import { useEffect, useState } from "react";
import { movieDetailsById } from "../../servises/api";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Errors from "../../components/Errors/Errors";
import s from "../../components/Header/Header.module.css";

const MoviDetailsPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getInformationById = async () => {
      try {
        const movieInform = await movieDetailsById(movieId);

        setData(movieInform);
      } catch (error) {
        setError(error.message);
      }
    };
    getInformationById();
  }, [movieId]);

  if (!data) {
    return <h2>LOading ...</h2>;
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />

      <ul className={s.nav}>
        <li>
          <NavLink className={s.link} to="reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="cast">
            Cast
          </NavLink>
        </li>
      </ul>
      <div>
        <h1>Title: {data.original_title}</h1>

        <p>
          Overview: <span>{data.overview}</span>
        </p>
      </div>
      {error && <Errors message={error} />}
      <Outlet />
    </div>
  );
};

export default MoviDetailsPage;
