import React, { useState } from 'react';
import InputBusca from './InputBusca/InputBusca';
import styles from './DashboardBusca.module.css';
import CardAluno from './CardAluno/CardAluno.jsx';
import cris from '../../../assets/imgs/735216.png';

function DashboardBusca() {

    const [dados,setDados]=useState('');

  return (
    <div className={styles.container}>

        <div className={styles.container__botao}>
          <h1>Busca e Edição</h1>
          <InputBusca textoPlaceholder="Buscar aluno"/>
        </div>



        <ul className={styles.container__alunos}>
          <li>
            <CardAluno url={cris} nome="caio" textoAlt="teste" turno="Manhã"/>

          </li>

          <li>
            <CardAluno url={cris} nome="caio" textoAlt="teste" turno="Manhã"/>

          </li>

          <li>
            <CardAluno url={cris} nome="caio" textoAlt="teste" turno="Manhã"/>

          </li>

          
          <li>
            <CardAluno url={cris} nome="caio" textoAlt="teste" turno="Manhã"/>

          </li>
            
        </ul>
    </div>
  )
}

export default DashboardBusca;