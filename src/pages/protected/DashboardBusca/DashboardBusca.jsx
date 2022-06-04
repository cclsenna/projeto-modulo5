import React, { useState } from 'react';
import InputBusca from './InputBusca/InputBusca';
import styles from './DashboardBusca.module.css';


function DashboardBusca() {

    const [busca,setBusca]=useState('');

  return (
    <div className={styles.container}>
        <h1>Busca e Edição</h1>
        <InputBusca textoPlaceholder="Buscar aluno"/>
        <ul>
            
        </ul>
    </div>
  )
}

export default DashboardBusca;