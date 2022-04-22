import { useLocation } from 'react-router-dom';

const BigFoto = () => {
  const location = useLocation();
  console.log('~ ~ BigFoto ~ location', location);

  return <img src="" alt="" />;
};

export default BigFoto;
