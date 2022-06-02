import React from 'react';
import styles from './CardFunc.module.css'


function CardFunc({url,texto,textoAlt}) {
  return (
    <div className={styles.container}>

        <div className={styles.container__imagem}>
            
            <img src={url} alt={textoAlt} />
        </div>

        <div className={styles.container__desc}>
            <p>{texto}</p>

        </div>


    </div>
  )
}

export default CardFunc;