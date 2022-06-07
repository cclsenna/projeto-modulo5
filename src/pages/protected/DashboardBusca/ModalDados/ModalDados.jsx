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
        console.log('apertou no botao atualizar');
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

                <Input type={"text"} name={"nome"} labelname="Nome" req={true} value={dados.nome} onChange={()=>{''}} />
                <Input  type={"text"}  name={"sobrenome"} labelname="Sobrenome"  req={true} value={dados.sobrenome} onChange={()=>{''}} />

          <div className={styles.nascimento}>
            <Input type={"date"} name={"dataNascimento"}  labelname="Data de Nascimento" req={true} value={(dados.dataNascimento).replaceAll('/','-')}  onChange={()=>{''}}  />
          </div>

          <Input type={"text"}   name={"telefone"} labelname="Telefone" req={true}  value={dados.tel} onChange={()=>{''}} />
          <Input type={"email"} name={"email"} labelname="Email" req={true}  value={dados.email} onChange={()=>{''}} />
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={true} value={dados.foto} onChange={()=>{''}} />
          <Select name={"turno"} select={"Turno"} context={turnos} value={dados.turno==='M'?'1':'2'}  required={true} onChange={()=>{''}}/>
          <Select  name={"professor"} select={"Professor"} context={professores} value={dados.id_professor} onChange={()=>{''}}  />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input  type={"text"}   name={"cep"}     /* onBlur={apiCep}*/   labelname="CEP"    req={true}    value={dados.cep} onChange={()=>{''}} />
          <Input  type={"text"} name={"rua"} labelname="Rua"  value={dados.rua} onChange={()=>{''}}    />
          <Input  type={"text"} name={"bairro"} labelname="Bairro"  value={dados.bairro} onChange={()=>{''}}   />

          <Input  type={"text"}  name={"cidade"} labelname="Cidade"  value={dados.cidade} onChange={()=>{''}}/>


          <Input type={"text"}  name={"estado"} labelname="Estado"  req={true} value={dados.uf} onChange={()=>{''}}/>
          <Input type={"text"} name={"numero"} labelname="Número" req={true} value={dados.numero} onChange={()=>{''}} />
        </fieldset>

        <fieldset className={styles.boletim}>
            <h2>Boletim</h2>

            <Input  type={"text"}  name={"matematica"}  labelname="Matemática" req={false}  disabled={false} value={dados.nota_matematica} onChange={()=>{''}}   />
            <Input  type={"text"}  name={"historia"}  labelname="História" req={false} disabled={false} value={dados.nota_historia} onChange={()=>{''}}   />
            <Input  type={"text"}  name={"geografia"}  labelname="Geografia" req={false} disabled={false} value={dados.nota_geografia} onChange={()=>{''}}    />
            <Input  type={"text"}  name={"portugues"}  labelname="Português" req={false} disabled={false} value={dados.nota_portugues} onChange={()=>{''}}    />
            <Input  type={"text"}  name={"artes"}  labelname="Artes" req={false} disabled={false} value={dados.nota_artes} onChange={()=>{''}}    />
            <Input  type={"text"}  name={"edfisica"}  labelname="Educação Física" req={false} disabled={false} value={dados.nota_edfisica} onChange={()=>{''}}   />


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