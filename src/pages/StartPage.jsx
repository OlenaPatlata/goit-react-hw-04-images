import { useHistory, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageInfo from 'components/ImageInfo/ImageInfo';
import Button from 'components/Button/Button';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [moreVisible, setMoreVisible] = useState(false);

  // Функция для смены состояния модального окна с видимого на невидимое и получения данных для показа в модалке
  const toggleModal = e => {
    if (!showModal) {
      setSrc(e.target.dataset.src);
      setAlt(e.target.alt);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  //Функция для получения из формы текста введенного пользователем в инпут
  const submitForm = value => {
    console.log(22222);
    setPage(1);
    setSearchQuery(value);
  };

  const history = useHistory();
  // history.push('/images/search');
  // console.log(history);

  useEffect =
    (() => {
      history.push('/images/search');
      console.log(history.push);
    },
    [searchQuery]);

  // Функция для показа или скрытия кнопки "Загрузить еще"
  const moreButtonRender = () => setMoreVisible(true);
  const moreButtonHide = () => setMoreVisible(false);

  // Функция для увеличения страницы при нажатии на кнопку "Загрузить ещё"
  function clickMoreButton() {
    setPage(page => page + 1);
  }

  return (
    <>
      <Searchbar onSubmit={submitForm} />
      <Route path="/images/search">
        <>
          <ImageInfo
            searchQuery={searchQuery}
            page={page}
            onClick={toggleModal}
            moreButtonRender={moreButtonRender}
            moreButtonHide={moreButtonHide}
          />
          {moreVisible && <Button onClick={clickMoreButton} />}
        </>
      </Route>
    </>
  );
};

export default App;
