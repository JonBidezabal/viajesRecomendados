import { useNavigate } from "react-router-dom";
import "../css/modal.css";
import "../css/base.css";

const Modal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="modal-place">
      <div className="message-modal">
        <h3 className="h3-modal">El post ha sido eliminado correctamente</h3>
        <button className="button-modal" onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  );
};
export default Modal;
