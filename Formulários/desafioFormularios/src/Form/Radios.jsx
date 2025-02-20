import React from 'react';

const Radio = ({ pergunta, options, id, value, onChange }) => {
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((opcao) => (
        <label key={opcao}>
          <input
            type="radio"
            name={id}
            value={opcao}
            checked={value === opcao}
            onChange={onChange}
          />
          {opcao}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;