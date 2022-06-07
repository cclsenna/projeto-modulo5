import React,{useState,useEffect} from 'react';
import styles from './ModalDados.module.css';
import Input from '../../../../Components/Input/Input';
import Select from '../../../../Components/Input/Select';
import Botao from '../../../../Components/Botao/Botao';
import ModalDel from '../ModalDel/ModalDel';

function ModalDados({dados,modal,setModal}) {    

const turnos = ["Manhã", "Tarde"];
const professores = [  "Haroldo",  "Ricardo",  "Patrícia",  "Flávia",  "Karlla",  "Marluce",  "Cláudia",  "Lúcia",  "Vinícius",];

const [cep, setCep] = useState({});

const [modalDel,setModalDel]=useState([false,{}]);

const [infoModal,setInfoModal]=useState({});


function handleSubmit(e){
    e.preventDefault();
    const btn=e.nativeEvent.submitter.innerHTML;
    if(btn==='Atualizar'){
        setInfoModal({titulo:'Atualizar registro',
        descricao:'Deseja continaur com a atualização dos dados ?',
        tipo:'update',
        textoNeg:'Não',
        textoPos:'Sim'});
        setModalDel([true,dados]);

    }
    else if(btn==='Deletar'){
        setInfoModal({titulo:'Deletar aluno',
        descricao:'Ao excluir o registro,não será mais possível acessá-lo. Tem certeza que deseja continuar?',
        tipo:'delete',
        textoNeg:'Não',
        textoPos:'Sim'});

        setModalDel([true,dados]);

    }
}

// console.log(dados.dataNascimento.replaceAll('/','-'));


  return (
      <div>

            <div  className={`${styles.modal} ${modal?styles.visivel:styles.invisivel} `}>

            <div className={styles.modal__content}>
                <span className={styles.close} onClick={()=>setModal([false,dados])}>&times;</span>
                <h1>ALTERAR DADOS DO ALUNO</h1>

                <form action="#" name="formEdit" className={styles.formulario} onSubmit={handleSubmit}>
                <fieldset className={styles.identificacao}>
                    
                <h2>Identificação</h2>

                <Input type={"text"} name={"nome"} labelname="Nome" req={true} value={dados.nome} />
                <Input  type={"text"}  name={"sobrenome"} labelname="Sobrenome"  req={true} value={dados.sobrenome} />

          <div className={styles.nascimento}>
            <Input type={"date"} name={"dataNascimento"}  labelname="Data de Nascimento" req={true}   />
          </div>

          <Input type={"text"}   name={"telefone"} labelname="Telefone" req={true}  value={dados.tel} />
          <Input type={"email"} name={"email"} labelname="Email" req={true}  value={dados.email} />
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={true} value={dados.foto} />
          <Select name={"turno"} select={"Turno"} context={turnos} required={true}/>
          <Select  name={"professor"} select={"Professor"} context={professores}  />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input  type={"text"}   name={"cep"}     /* onBlur={apiCep}*/   labelname="CEP"    req={true}    value={dados.cep} />
          <Input  type={"text"} name={"rua"} labelname="Rua" value={cep.logradouro} value={dados.rua}    />
          <Input  type={"text"} name={"bairro"} labelname="Bairro" value={cep.bairro} value={dados.bairro}   />

          <Input  type={"text"}  name={"cidade"} labelname="Cidade" value={cep.localidade} value={dados.cidade}/>


          <Input type={"text"}  name={"estado"} labelname="Estado" value={cep.uf} req={true} value={dados.uf}/>
          <Input type={"text"} name={"numero"} labelname="Número" req={true} value={dados.numero} />
        </fieldset>

        <fieldset className={styles.boletim}>
            <h2>Boletim</h2>

            <Input  type={"text"}  name={"estado"}  labelname="Matemática" req={false}  disabled={false}   />
            <Input  type={"text"}  name={"estado"}  labelname="História" req={false} disabled={false}   />
            <Input  type={"text"}  name={"estado"}  labelname="Geografia" req={false} disabled={false}    />
            <Input  type={"text"}  name={"estado"}  labelname="Português" req={false} disabled={false}    />
            <Input  type={"text"}  name={"estado"}  labelname="Artes" req={false} disabled={false}    />
            <Input  type={"text"}  name={"estado"}  labelname="Educação Física" req={false} disabled={false}   />


        </fieldset>

        <div className={styles.container__botoes} >
            <Botao texto="Atualizar"/>
            <Botao texto="Deletar"/>
        </div>

                </form>
            </div>

        </div>

        <ModalDel dados={modalDel[1]} modal={modalDel[0]} setModal={setModalDel} setModalInfo={setModal} infoModal={infoModal}/> 


    </div>

)
}

export default ModalDados;