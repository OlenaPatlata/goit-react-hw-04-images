import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { hit, onClick } = props;
  return (
    <li className={s.imageGalleryItem} id={hit.id} onClick={onClick}>
      <img
        src={hit.webformatURL}
        alt={hit.tags}
        data-src={hit.largeImageURL}
        loading="lazy"
        className={s.imageGalleryItem__image}
      />
    </li>
  );
};

export default ImageGalleryItem;
