import React from 'react';
import styles from './Botao.module.css';

function Botao({texto}) {
  return (
    <button className={styles.botao}>Botao</button>
  )
}

export default Botao