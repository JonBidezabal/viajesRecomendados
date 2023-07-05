import { Link } from "react-router-dom";
import "../css/PostPlaceSection.css"
import { AiFillEdit } from "react-icons/ai"

const PostPlaceSection = ({ user }) => {
  return (
    <section className="welcome-wrapper">
      <div className="welcome-msg">
        <h2>Nos encanta verte de nuevo por aquí <span>{user[0].name}</span></h2>
        <p>
          Comparte nueva experiencia viajera
        </p>
        <p>
          <Link to={"/places/newplace"}>NUEVO POST <AiFillEdit className="edit-post-emoticon" /></Link>
        </p>
      </div>
    </section>
  );
};
export default PostPlaceSection;
