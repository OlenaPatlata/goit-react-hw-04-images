import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { useEffect } from 'react';
import Modal from 'components/Modal/Modal';
// import { getImageById } from '../services/api';

const BigFoto = () => {
  const params = useParams();
  console.log('~ params', params);
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClose = () => navigate(state?.from || '/');
  return (
    <Modal onClose={onClose}>
      {state?.src ? <img src={state.src} alt={state.alt} width="600" /> : ''}
    </Modal>
  );
};

export default BigFoto;
