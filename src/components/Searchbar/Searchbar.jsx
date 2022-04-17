import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './Searchbar.module.css';

// Для переброса двух пропсов из App в компонент SearchForm
const Searchbar = ({ onClick, onSubmit }) => {
  return (
    <header className={s.searchbar}>
      <SearchForm onClick={onClick} onSubmit={onSubmit} />
    </header>
  );
};

export default Searchbar;
