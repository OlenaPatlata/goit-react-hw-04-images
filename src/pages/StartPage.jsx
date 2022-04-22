import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Функция для смены состояния модального окна с видимого на невидимое и получения данных для показа в модалке
  // const toggleModal = e => {
  //   if (!showModal) {
  //     setSrc(e.target.dataset.src);
  //     setAlt(e.target.alt);
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };

  const navigation = useNavigate();

  useEffect(() => {
    searchQuery && navigation(`/images/search/${searchQuery}`, { searchQuery });
    console.log(navigation);
  }, [searchQuery]);

  //Функция для получения из формы текста введенного пользователем в инпут
  const submitForm = value => {
    console.log(22222);
    setSearchQuery(value);
  };

  // history.push('/images/search');
  // console.log(history);

  return (
    <>
      <Searchbar onSubmit={submitForm} />
      <Outlet />
    </>
  );
};

export default App;
