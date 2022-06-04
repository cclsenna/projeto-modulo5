import React from 'react';
import styles from './DashboardEscolha.module.css';
import CardFunc from './CardFunc/CardFunc.jsx';
import imgCreate from '../../assets/imgs/img_create.png';
import imgSearch from '../../assets/imgs/img_search.svg';

function DashboardEscolha() {
  return (
    <main className={styles.container}>
        <h1>Escolha de funcionalidade</h1>

        <div className={styles.container__func}>
            <CardFunc imagem={imgCreate} texto="Cadastrar novos alunos" textoAlt="Cadastro de novos Alunos"/>
            <CardFunc imagem={imgSearch} texto="Buscar alunos" textoAlt="Buscar alunos"/>
            

        </div>

    </main>
  )
}

export default DashboardEscolha;