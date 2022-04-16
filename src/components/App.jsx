import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

// import s from './App.module.css';

class App extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Открыть
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              doloribus sint officiis expedita fugiat, libero iure asperiores
              odio nulla neque cum commodi voluptates, voluptatibus ut rerum ea
              explicabo dignissimos consectetur.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}
export default App;
