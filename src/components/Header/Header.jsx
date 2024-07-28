import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <Link className={s.link} to="/">
              Home
            </Link>
          </li>{" "}
          <li>
            <Link className={s.link} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
