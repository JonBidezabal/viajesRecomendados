import { Link } from "react-router-dom";

const PostPlaceSection = ({ user }) => {
  return (
    <section>
      <h2>Nos encanta verte de nuevo por aquí {user[0].name}</h2>
      <p>
        Si quieres compartir una nueva experiencia viajera con nosotros pásate
        por aquí:
      </p>
      <div>
        <Link to={"/places/newplace"}>NUEVO POST</Link>
      </div>
    </section>
  );
};
export default PostPlaceSection;
