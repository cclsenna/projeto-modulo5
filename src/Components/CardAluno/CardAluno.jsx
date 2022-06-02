import React from 'react';
import styles from './CardAluno.module.css';
import edit from '../../assets/imgs/icons8-edit.svg';

function CardAluno({url,nome,textoAlt,turma}) {
  return (
    <div className={`${styles.card} ${styles.work}`}>
      <div className={styles.img__section}>
        <p>Turma 13 - Manhã</p>
      </div>
    <div className={styles.card__desc}>
      <div className={styles.card__header}>
        <div className={styles.card__title}>
          <p>Cristiano Ronaldo Gajo</p>
          <p>Matricula 20200115</p>
        </div>
      </div>

      <div className={styles.card__info}>
        
        <div className={styles.card__time}>
          <img src={url} alt="ss" />
        </div>

        
        <div className={styles.card__edit}>
          <img src={edit} />

        </div>


      </div>



  </div>
  </div>

  )
}

export default CardAluno;