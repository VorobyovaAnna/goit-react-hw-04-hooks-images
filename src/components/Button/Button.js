import { PropTypes } from 'prop-types';
import React from 'react';
import s from './Buton.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={s.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;