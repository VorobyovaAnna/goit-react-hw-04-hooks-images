import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import { Overlay, ModalView } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, largeImageURL, alt }) => {

  useEffect(() => {
    const onEscClick = e => {
    if (!e.key === 'Escape') return;

    onCloseModal();
    };
    
    document.addEventListener('keydown', onEscClick);
    return () => {
      document.removeEventListener('keydown', onEscClick);
    };
  }, [onCloseModal]);

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;

    onCloseModal();
  };

  return createPortal(
      <Overlay onClick={onBackdropClick}>
          <ModalView>
              <img src={largeImageURL} alt={alt} />
          </ModalView>
      </Overlay>,
      modalRoot,
  );
}

export default Modal;

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};