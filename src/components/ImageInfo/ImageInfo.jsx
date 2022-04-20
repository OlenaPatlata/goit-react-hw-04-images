import { useState, useEffect } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from 'services/api';
import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ImageInfo = ({
  onClick,
  searchQuery,
  page,
  moreButtonRender,
  moreButtonHide,
}) => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const [hits, setHits] = useState([]);

  // Асинхронная функция, которая сначала сравнивает предыдущий и следующий пропсы и если они отличаются, делает запрос на АРI
  useEffect(() => {
    setStatus(Status.IDLE);
    if (searchQuery) {
      (async () => {
        try {
          // setStatus(Status.PENDING);
          const { totalHits: totalHitsNew, hits: newHits } = await getImages(
            searchQuery,
            page
          );

          if (totalHitsNew === 0) {
            setStatus(Status.IDLE);
            Notify.failure(
              `Sorry, images with title ${searchQuery} missing. Try other words.`
            );
          }
          if (totalHitsNew === hits.length + newHits.length) {
            moreButtonHide();
          }
          if (totalHitsNew > hits.length + newHits.length) {
            moreButtonRender();
          }
          if (page > 1) {
            setHits([...hits, ...newHits]);
            setStatus(Status.RESOLVED);
          }
          if (page === 1) {
            setHits(newHits);
            setStatus(Status.RESOLVED);
            setTotalHits(totalHitsNew);
          }
        } catch (error) {
          setError(error);
          setStatus(Status.REJECTED);

          moreButtonHide();
          Notify.failure(`Sorry, something went wrong.`);
        }
      })();
    }
  }, [searchQuery, page]);

  return (
    <>
      {Status.IDLE && <div></div>}

      {Status.REJECTED && <div></div>}
      {Status.RESOLVED && (
        <>
          <ImageGallery hits={hits} onClick={onClick} />
        </>
      )}
      {Status.PENDING && <Loader />}
    </>
  );
};

ImageInfo.propTypes = {
  onClick: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  moreButtonRender: PropTypes.func.isRequired,
  moreButtonHide: PropTypes.func.isRequired,
};

export default ImageInfo;
