import { useNavigate } from 'react-router-dom';
import '../../css/placeDetail.css'

const NextPlace = ({ placeId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const parsedPlaceId = parseInt(placeId, 10);
    navigate(`/places/${parsedPlaceId + 1}`);
  };

  return (
    

    <span onClick={handleClick} className='next-place'>⇧</span>
   
  );
};

export default NextPlace;