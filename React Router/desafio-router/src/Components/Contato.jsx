import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'

const Contato = () => {
  return (
    <section className={styles.contato}>
      <img src={foto} alt="Máquina de escrever" />
      <h1>Essa é a contato</h1>
    </section>
  );
};

export default Contato;
