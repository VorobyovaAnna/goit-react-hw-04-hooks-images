import { PropTypes } from 'prop-types';
import { LoadMoreButton } from './Buton.styled'
import React from 'react';

const Button = ({ onClick }) => (
  <LoadMoreButton type="button" onClick={onClick}>
    Load more
  </LoadMoreButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;