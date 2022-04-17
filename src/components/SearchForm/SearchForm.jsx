import React, { Component } from 'react';
import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = { value: '' };

  // Записывает в состояние class SearchForm текст введенный в инпут
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  // Записывает в пропс onSubmit текущее состояние и вызывает функцию очистки формы
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  // Записывает в пропс onClick текущее состояние и вызывает функцию очистки формы
  handleClick = e => {
    this.props.onClick(this.state);
  };

  render() {
    return (
      <form className={s.searchForm} onSubmit={this.handleSubmit}>
        <button
          onClick={this.handleClick}
          type="button"
          className={s.searchForm__button}
        >
          <span className={s.ComponentsearchForm__button__labe}>Search</span>
        </button>
        <input
          type="text"
          name="qwery"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          className={s.searchForm__input}
          autoComplete="off"
          autoFocus
        ></input>
      </form>
    );
  }
}

export default SearchForm;