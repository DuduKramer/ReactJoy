import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: '10px',
};

Button.PropTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
