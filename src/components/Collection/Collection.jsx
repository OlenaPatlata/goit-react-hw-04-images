import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageInfo from 'components/ImageInfo/ImageInfo';
import Button from 'components/Button/Button';

const Collection = () => {
  const [page, setPage] = useState(1);
  const [moreVisible, setMoreVisible] = useState(false);
  const { searchQuery } = useParams();

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  // Функция для показа или скрытия кнопки "Загрузить еще"
  const moreButtonRender = () => setMoreVisible(true);
  const moreButtonHide = () => setMoreVisible(false);

  // Функция для увеличения страницы при нажатии на кнопку "Загрузить ещё"
  function clickMoreButton() {
    setPage(page => page + 1);
  }

  return (
    <>
      <ImageInfo
        searchQuery={searchQuery}
        page={page}
        // onClick={toggleModal}
        moreButtonRender={moreButtonRender}
        moreButtonHide={moreButtonHide}
      />
      {moreVisible && <Button onClick={clickMoreButton} />}
    </>
  );
};

export default Collection;
