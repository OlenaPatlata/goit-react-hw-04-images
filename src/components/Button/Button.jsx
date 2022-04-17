import React from 'react';
import s from './Button.module.css';
const Button = () => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.button}>
        Load more
      </button>
    </div>
  );
};

export default Button;
