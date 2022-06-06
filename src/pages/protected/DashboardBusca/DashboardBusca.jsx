import React, {useEffect, useState } from 'react';
import InputBusca from './InputBusca/InputBusca';
import styles from './DashboardBusca.module.css';
import CardAluno from './CardAluno/CardAluno.jsx';
import cris from '../../../assets/imgs/735216.png';
import ModalDados from './ModalDados/ModalDados';

function DashboardBusca() {

  const[dados,setDados]=useState([]);

  //estado apra indicar se o modal deve ser exibido ou não e a info que precisa 
  const [modalEdit,setModalEdit]=useState([false,{}]);

  // useEffect(()=>{
  //   console.log('printando o estado do modal');
  //   console.log(modalEdit);
  // },[modalEdit]);




  return (
    <main className={styles.container}>
        <div className={styles.container__botao}>
            <h1>Busca e Edição</h1>
            <InputBusca textoPlaceholder="Buscar aluno por nome" setDados={setDados}/>
        </div>

          <ul className={styles.container__alunos}>
              <CardAluno info={dados} setModal={setModalEdit} />          
          </ul>

          <ModalDados dados={modalEdit[1]} modal={modalEdit[0]} setModal={setModalEdit} />




    </main>
  )
}

export default DashboardBusca;