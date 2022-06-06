import React from 'react';
import styles from './ModalDel.module.css';
import Botao from '../../../../Components/Botao/Botao';
import {deleteApi} from '../../../../services/api.js'

function ModalDel({dados,modal,setModal,setModalInfo,infoModal}) {


    function handleDel(e){
        e.preventDefault();
        const btn=e.nativeEvent.submitter.innerHTML;
        console.log(btn);

        if(btn==='Não'){
            setModal([false,dados]);
            return;
        }
        else if(btn==='Sim'){
            console.log('entrou no sim');
            deleteApi(dados.matricula)
            .then(response=>{
                console.log(response.status===200?'deu certo':'deu errado');
            })
            setModal([false,dados]);
            setModalInfo([false,dados]);
            return;
        }

    }

    function handleClose(e){
        setModal([false,dados]);
        setModalInfo([false,dados]);
        return;

    }


  return (

        <div className={`${styles.modal} ${modal?styles.visivel:styles.invisivel}`}>
        <span onClick={handleClose} className={styles.close} title="Close Modal">&times;</span>
            <form className={styles.modal_content} onSubmit={handleDel} name={infoModal.tipo}>
                <div className={styles.container}>
                    <h1>{infoModal.titulo}</h1>
                    <p>{infoModal.descricao}</p>

                    <div className={styles.container__botoes}>
                        <Botao texto={infoModal.textoNeg}/>
                        <Botao texto={infoModal.textoPos}/>
                    </div>
                    
                </div>
            </form>
        </div>

  )
}

export default ModalDel