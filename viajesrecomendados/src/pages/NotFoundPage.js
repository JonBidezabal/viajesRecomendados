import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <p>Página no encontrada</p>
      <Link to={"/"}><span>Volver al home</span></Link>
    </>
  )
}

export default NotFoundPage;