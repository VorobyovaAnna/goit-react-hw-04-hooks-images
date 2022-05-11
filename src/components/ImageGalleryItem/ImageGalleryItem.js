import React from "react";
import PropTypes from "prop-types";
import {ImageItem, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ src, alt, id, onOpenModal }) => {
  return (
    <>
      <ImageItem onClick={() => onOpenModal(id)}>
        <Image
          src={src}
          alt={alt}  
        />
      </ImageItem>
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;