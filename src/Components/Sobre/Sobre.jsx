import React from 'react'
import styles from './Sobre.module.css'
import imgsobre from '../../assets/imgs/imgsobre.png'

function Sobre() {
  return (
    <main className={styles.Conteudo}>
        <h1 className={styles.title}>Sobre</h1>

        <section className={styles.TextoImg}>
            <article className={styles.textoSobre}>
            Há 35 anos, iniciamos nossa história como um curso preparatório para o vestibular. 
            Hoje, além do Curso, atuamos também como Colégio nos segmentos de Educação Fundamental 1 e 2 e Ensino Médio, com 14 unidades no Rio de Janeiro e Niterói. 
            Atualmente, fazemos parte do maior grupo de Educação Básica do Brasil.
            </article>        
            <img className={styles.imgSobre} src={imgsobre} />
        </section>
    </main>
  )
}

export default Sobre