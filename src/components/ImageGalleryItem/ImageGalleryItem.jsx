import React from 'react';
import { Link } from 'react-router-dom';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { hit, onClick } = props;
  return (
    <li className={s.imageGalleryItem} id={hit.id} onClick={onClick}>
      <Link to={{ pathname: `/images/search/${hit.id}` }}>
        <img
          src={hit.webformatURL}
          alt={hit.tags}
          data-src={hit.largeImageURL}
          loading="lazy"
          className={s.imageGalleryItem__image}
        />
      </Link>
    </li>
  );
};
ImageGalleryItem.propTypes = {
  hit: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
