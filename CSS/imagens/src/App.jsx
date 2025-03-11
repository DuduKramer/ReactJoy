import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import Dog from './img/dog.svg?react';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <Dog  />

      <img src={foto} alt="cachorro" />
    </div>
  );
};

export default App;
