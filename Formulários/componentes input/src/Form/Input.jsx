import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  function handleChange({ target }) {
    return setValue(target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default Input;
