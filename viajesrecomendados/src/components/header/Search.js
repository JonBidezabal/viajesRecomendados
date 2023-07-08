import { Link } from "react-router-dom";

const Search = ({ showMenu, setShowMenu }) => {
  return (
    <ul className="search">
      <Link to={"/places/mostvoted"}>
        <li onClick={() => { setShowMenu(!showMenu) }}><span>Mejores reseñas</span></li>
      </Link>
      <Link to={"/places/allplaces"}>
        <li onClick={() => { setShowMenu(!showMenu) }}><span>Más recientes</span></li>
      </Link>
    </ul>
  )
}

export default Search