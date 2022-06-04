import React from 'react';
import styles from './CardAluno.module.css';
import edit from '../../../../assets/imgs/icons8-edit.svg';

function CardAluno({info}) {
  return (
    info.map((element,index)=>{
      
      return (<li key={element.matricula}> 
      <div className={styles.card}>
        <div className={styles.img__section}>
          <p>{`Matrícula ${element.matricula}`}</p>
        </div>
      <div className={styles.card__desc}>
        <div className={styles.card__header}>
          <div className={styles.card__title}>
            <p>{`${element.nome} ${element.sobrenome}`}</p>
            <p>{`Matrícula N°${element.matricula}`}</p>
          </div>
        </div>

        <div className={styles.card__info}>
        
        <div className={styles.card__time}>
          <img src={element.foto} alt="Imagem Aluno" />
        </div>

        
        <div className={styles.card__edit}>
          <img src={edit} />
        </div>
      </div>
      </div>
    </div>
      
    </li>)

    })


  )
}

export default CardAluno;