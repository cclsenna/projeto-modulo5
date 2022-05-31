import React from 'react'
import styles from './Sobre.module.css'

function Sobre() {
  return (
    <main>
        <h1 className={styles.title}>SOBRE</h1>        
        <section>
            <p className={styles.textoSobre}>
            Há 35 anos, iniciamos nossa história como um curso preparatório para o vestibular. Hoje, além do Curso, atuamos também como Colégio nos segmentos de Educação Fundamental 1 e 2 e Ensino Médio, com 14 unidades no Rio de Janeiro e Niterói. Atualmente, fazemos parte do maior grupo de Educação Básica do Brasil.
            </p>
        </section>
        <section></section>
    </main>
  )
}

export default Sobre