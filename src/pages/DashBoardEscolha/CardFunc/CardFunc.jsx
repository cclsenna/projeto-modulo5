import React from 'react';
import styles from './CardFunc.module.css';
import {Link} from 'react-router-dom';


function CardFunc({imagem,texto,textoAlt,url}) {
  return (
    <div className={styles.container}>

        <div className={styles.container__imagem}>
            
            <img src={imagem} alt={textoAlt} />
        </div>

        <div className={styles.container__desc}>
        <Link to={"/" + url }>{texto}</Link>
        </div>


    </div>
  )
}

export default CardFunc;