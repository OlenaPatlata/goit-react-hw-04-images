import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageInfo from 'components/ImageInfo/ImageInfo';

// import s from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
    src: '',
    alt: '',
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));

    if (!this.state.showModal) {
      this.setState({ src: e.target.dataset.src, alt: e.target.alt });
    }
  };

  // Две функции для получения из формы текста введенного пользователем в инпут
  clickButtonForm = e => {
    this.setState({ searchQuery: e.value });
  };
  submitForm = e => {
    this.setState({ searchQuery: e.value });
  };

  render() {
    const { showModal, searchQuery, src, alt } = this.state;
    return (
      <>
        <Searchbar onClick={this.clickButtonForm} onSubmit={this.submitForm} />
        <ImageInfo searchQuery={searchQuery} onClick={this.toggleModal} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={src} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
