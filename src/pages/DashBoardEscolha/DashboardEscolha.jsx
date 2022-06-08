import React from 'react';
import styles from './DashboardEscolha.module.css';
import CardFunc from './CardFunc/CardFunc.jsx';
import imgCria from '../../assets/imgs/img_criacao.svg';
import imgSearch from '../../assets/imgs/img_search.svg';

function DashboardEscolha() {
  return (
    <main className={styles.container}>
        <h1>Escolha de funcionalidade</h1>

        <div className={styles.container__func}>
            <CardFunc imagem={imgCria} texto="Cadastrar novos alunos" textoAlt="Cadastro de novos Alunos" url="cadastro"/>
            <CardFunc imagem={imgSearch} texto="Buscar alunos" textoAlt="Buscar alunos" url="dashboard-busca"/>           

        </div>

    </main>
  )
}

export default DashboardEscolha;