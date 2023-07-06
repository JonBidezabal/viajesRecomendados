import { useNavigate } from 'react-router-dom';


const LastPlace = ({ placeId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate(`/places/${placeId - 1}`);
  };

  return (
    
    <span onClick={handleClick} className='last-place'>⇧</span>
   
  );
};

export default LastPlace;
