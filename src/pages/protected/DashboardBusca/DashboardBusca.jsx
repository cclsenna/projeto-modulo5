import React, {useEffect, useState } from 'react';
import InputBusca from './InputBusca/InputBusca';
import styles from './DashboardBusca.module.css';
import CardAluno from './CardAluno/CardAluno.jsx';
import cris from '../../../assets/imgs/735216.png';

function DashboardBusca() {

  const[dados,setDados]=useState([]);


    useEffect(()=>{
      console.log('mudou');
      console.log(dados);

    },[dados]);


  return (
    <div className={styles.container}>
        <div className={styles.container__botao}>
            <h1>Busca e Edição</h1>
            <InputBusca textoPlaceholder="Buscar aluno" setDados={setDados}/>
        </div>

          <ul className={styles.container__alunos}>
              <CardAluno info={dados} />          
          </ul>




    </div>
  )
}

export default DashboardBusca;