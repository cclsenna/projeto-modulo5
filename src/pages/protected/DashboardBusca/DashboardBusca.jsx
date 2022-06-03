import React from 'react';
import InputBusca from './InputBusca/InputBusca';
import styles from './DashboardBusca.module.css';


function DashboardBusca() {
  return (
    <div className={styles.container}>
        <InputBusca textoPlaceholder="Buscar aluno"/>
    </div>
  )
}

export default DashboardBusca;