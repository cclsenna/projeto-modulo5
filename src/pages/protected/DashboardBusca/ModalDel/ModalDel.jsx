import React, { useState } from 'react';
import styles from './ModalDel.module.css';
import Botao from '../../../../Components/Botao/Botao';
import {deleteApi,putAPi} from '../../../../services/api.js'
import ModalConf from '../ModalConf/ModalConf';

function ModalDel({dados,modal,setModal,setModalInfo,infoModal}) {

    const[modalConf,setModalConf]=useState([false,{}]);


    function handleDel(e){
        e.preventDefault();
        const btn=e.nativeEvent.submitter.innerHTML;
        if(btn==='Não'){
            setModal([false,dados]);
            return;
        }


        else if(btn==='Sim'&&infoModal.tipo==='delete'){
            const api=async()=>{
                const resposta=await deleteApi(dados.matricula);
            }

            api();
            setModalConf([true,dados]);

            return;
        }

        else if(btn==='Sim'&&infoModal.tipo==='update'){
            const api=async()=>{
                const resposta=await putAPi(dados);
            }
            api();
            setModalConf([true,dados]);
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
            <ModalConf dados={modalConf[1]} modal={modalConf[0]} setModal={setModalConf} setModalInfo={setModalInfo} setModalDel={setModal}/>
        </div>

  )
}

export default ModalDel