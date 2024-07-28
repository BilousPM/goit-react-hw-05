import { Route, Routes } from "react-router-dom";
import { fetchMovies } from "../../servises/api";
import Header from "../Header/Header";

const App = () => {
  // const moovies = async () => {
  //   const response = await fetchMovies();
  //   return response;
  // };

  // console.log(moovies());
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/movies" element={<h1>Movies page</h1>} />
        <Route path="*" element={<h1>Not faund.... Error 404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
