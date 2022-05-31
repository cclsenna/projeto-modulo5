import React from 'react';
import styles from './CardFunc.module.css'


function CardFunc({url,texto,textoAlt}) {
  return (
    <div className={styles.container}>

        <div className={styles.container__imagem}>
            <img src={url} alt={textoAlt} />
        </div>

        <p>{texto}</p>

    </div>
  )
}

export default CardFunc