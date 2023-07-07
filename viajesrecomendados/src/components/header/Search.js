import { Link } from "react-router-dom";

const Search = ({ showMenu, setShowMenu }) => {
  return (
    <ul>
      <Link to={"/places/mostvoted"}>
        <li onClick={() => { setShowMenu(!showMenu) }}>Mejores reseñas</li>
      </Link>
      <Link to={"/places/allplaces"}>
        <li onClick={() => { setShowMenu(!showMenu) }}>Por fecha</li>
      </Link>
    </ul>
  )
}

export default Search