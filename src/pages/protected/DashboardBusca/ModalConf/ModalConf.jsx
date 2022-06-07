import React from 'react';
import styles from './ModalConf.module.css'
import Botao from '../../../../Components/Botao/Botao';

function ModalConf({dados,modal,setModal,setModalInfo,setModalDel}) {

    function handleSubmit(e){
        e.preventDefault();
        setModal([false,dados]);
        setModalInfo([false,dados]);
        setModalDel([false,dados]);
    }




  return (
    <div>

    <div  className={`${styles.modal} ${modal?styles.visivel:styles.invisivel} `}>

    <div className={styles.modal__content}>
        <h1>Operação realizada com sucesso</h1>
        <form action="#" name="formEdit" className={styles.formulario} onSubmit={handleSubmit}>


        <div className={styles.container__botoes} >
            <Botao texto="OK" />
        </div>

        </form>
    </div>

</div>


</div>  )
}

export default ModalConf;