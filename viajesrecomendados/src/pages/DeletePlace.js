import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { deletePlaceServices } from "../services";
import { useNavigate } from "react-router-dom";

const DeletePlace = ({ id, setModal }) => {
  const { user, token } = useContext(UserContext);
  // const navigate = useNavigate();
  const deletePost = async () => {
    try {
      const json = await deletePlaceServices({ id, token });
      if (json.status !== "ok") {
        return <div>No se ha podido borrar el post</div>;
      }
    } catch (error) {
      return error.message;
    }
  };
  return (
    user && (
      <button
        onClick={() => {
          setModal(true);
          deletePost();
        }}>
        {" "}
        Borrar Post
      </button>
    )
  );
};

export default DeletePlace;
