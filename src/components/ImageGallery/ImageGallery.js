import React from "react";
import { GalleryList } from "./ImageGallery.styled";
import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onOpenModal }) => (
  <GalleryList>
        {images.map(image => {
            const { id, webformatURL, tags } = image;
            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} id={id} onOpenModal={onOpenModal} />
        })}
  </GalleryList>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
      }),
    )
};

export default ImageGallery;