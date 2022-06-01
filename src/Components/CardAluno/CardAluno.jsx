import React from 'react';
import styles from './CardAluno.module.css';

function CardAluno({url,nome,textoAlt,turma}) {
  return (<div className={styles.card}>
  <div className={styles.img}></div>
    <div className={styles.info}>
      <span>{nome}</span>
      <p>{`Turma:${turma}`}</p>
    </div>
    <a href="#">Button</a>
  </div>)
}

export default CardAluno;