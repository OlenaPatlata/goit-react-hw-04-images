import React, { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { getImages } from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageInfo extends Component {
  state = {
    page: 1,
    status: Status.IDLE,
    error: null,
    data: {},
  };

  // Асинхронная функция, которая сначала сравнивает предыдущий и следующий пропсы и если они отличаются, делает запрос на АРI
  async componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (
      prevSearchQuery.trim() !== nextSearchQuery.trim() &&
      nextSearchQuery.trim().length > 0
    ) {
      this.setState({ status: Status.PENDING });
      await getImages(nextSearchQuery, this.state.page)
        .then(data => this.setState({ data: data, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { data, error, status } = this.state;
    if (status === 'idle') {
      return <div> </div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <div>Error</div>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery data={data} onClick={this.props.onClick} />
          <Button />
        </>
      );
    }
  }
}

export default ImageInfo;
