import React,{useState,useEffect} from 'react';
import styles from './ModalDados.module.css';
import Input from '../../../../Components/Input/Input';
import Select from '../../../../Components/Input/Select';
import Botao from '../../../../Components/Botao/Botao';
import ModalDel from '../ModalDel/ModalDel';

function ModalDados({dados,modal,setModal}) {    

const turnos = ["Manhã", "Tarde"];
const professores = [  "Haroldo",  "Ricardo",  "Patrícia",  "Flávia",  "Karlla",  "Marluce",  "Cláudia",  "Lúcia",  "Vinícius"];

const [cep, setCep] = useState({});

const [modalDel,setModalDel]=useState([false,{}]);

const [infoModal,setInfoModal]=useState({});

//dados para preencher os dados
const[nome,setNome]=useState('');
const[sobrenome,setSobrenome]=useState('');
const[dataNascimento,setDataNascimento]=useState('');
const[telefone,setTelefone]=useState('');
const[email,setEmail]=useState('');
const[foto,setFoto]=useState('');
const[turno,setTurno]=useState('');
const[professor,setProfessor]=useState('');
const[cepVal,setCepVal]=useState('');
const[rua,setRua]=useState('');
const[bairro,setBairro]=useState('');
const[cidade,setCidade]=useState('');
const[estado,setEstado]=useState('');
const[numero,setNumero]=useState('');

const[mat,setMat]=useState('');
const[hist,setHist]=useState('');
const[port,setPort]=useState('');
const[geo,setGeo]=useState('');
const[artes,setArtes]=useState('');
const[edf,setEdf]=useState('');


useEffect(()=>{
    setNome(dados.nome);
    setSobrenome(dados.sobrenome);
    // setDataNascimento(handleDate());
    setDataNascimento('1987-05-05');
    setTelefone(dados.tel);
    setEmail(dados.email);
    setFoto(dados.foto);
    setTurno(handleTurno(dados.turno));
    setProfessor('2');
    setCepVal(dados.cep);
    setRua(dados.rua);
    setBairro(dados.bairro);
    setCidade(dados.cidade);
    setEstado(dados.uf);
    setNumero(dados.numero);
    setMat(dados.nota_matematica);
    setHist(dados.nota_historia);
    setPort(dados.nota_portugues);
    setGeo(dados.nota_geografia);
    setArtes(dados.nota_artes);
    setEdf(dados.nota_edfisica);


 },[modal]);



 function handleTurno(valor){
     if(valor==='M') return '1';     
     else if(valor==='T') return '2'; }

  function handleProf(nomeProf){

    

    
      

  }




function handleDate(){
    const data=dados.dataNascimento.split('/');
    const novaData=data.join('-');
    return novaData;
}




function handleSubmit(e){
    e.preventDefault();
    const btn=e.nativeEvent.submitter.innerHTML;
    if(btn==='Atualizar'){
        // console.log(e.target.dataNascimento.value);
        console.log(e);

        setInfoModal({titulo:'Atualizar registro',
        descricao:'Deseja continaur com a atualização dos dados ?',
        tipo:'update',
        textoNeg:'Não',
        textoPos:'Sim'});
        console.log('apertou no botao atualizar');
        setModalDel([true,e]);

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

  return (
      <div>

            <div  className={`${styles.modal} ${modal?styles.visivel:styles.invisivel} `}>

            <div className={styles.modal__content}>
                <span className={styles.close} onClick={()=>setModal([false,dados])}>&times;</span>
                <h1>ALTERAR DADOS DO ALUNO</h1>

                <form action="#" name="formEdit" className={styles.formulario} onSubmit={handleSubmit}>

                 <fieldset className={styles.identificacao}>
                    
                <h2>Identificação</h2>

                <Input  type={"text"} name={"nome"} labelname="Nome" req={true} value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                <Input  type={"text"}  name={"sobrenome"} labelname="Sobrenome"  req={true} value={sobrenome} onChange={(e)=>{setSobrenome(e.target.value)}} />

          <div className={styles.nascimento}>
            <Input type={"date"} name={"dataNascimento"}  labelname="Data de Nascimento"  req={true} value={dataNascimento} onChange={(e)=>{setDataNascimento(e.target.value)}}/>
          </div>

          <Input type={"text"}   name={"telefone"} labelname="Telefone" req={true}  value={telefone} onChange={(e)=>{setTelefone(e.target.value)}} />
          <Input type={"email"} name={"email"} labelname="Email" req={true}  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={true} value={foto} onChange={(e)=>{setFoto(e.target.value)}} />
          <Select name={"turno"} select={"Turno"} context={turnos} value={turno}  required={true} onChange={(e)=>{setTurno(e.target.value)}}/>
          <Select  name={"professor"} select={"Professor"} context={professores} value={professor} onChange={(e)=>{setProfessor(e.target.value)}}  />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input  type={"text"}   name={"cep"}      labelname="CEP"    req={true}    value={cepVal} onChange={(e)=>{setCepVal(e.target.value)}} />
          <Input  type={"text"} name={"rua"} labelname="Rua"  value={rua} onChange={(e)=>{setRua(e.target.value)} }   />
          <Input  type={"text"} name={"bairro"} labelname="Bairro"  value={bairro} onChange={(e)=>{setBairro(e.target.value)}}   />

          <Input  type={"text"}  name={"cidade"} labelname="Cidade"  value={cidade} onChange={(e)=>{setCidade(e.target.value)}}/>


          <Input type={"text"}  name={"estado"} labelname="Estado"  req={true} value={estado} onChange={(e)=>{setEstado(e.target.value)}}/>
          <Input type={"text"} name={"numero"} labelname="Número" req={true} value={numero} onChange={(e)=>{setNumero(e.target.value)} }/>
        </fieldset>

        <fieldset className={styles.boletim}>
            <h2>Boletim</h2>

            <Input  type={"text"}  name={"matematica"}  labelname="Matemática" req={false}  disabled={false} value={mat} onChange={(e)=>{setMat(e.target.value)}}  />
            <Input  type={"text"}  name={"historia"}  labelname="História" req={false} disabled={false} value={hist} onChange={(e)=>{setHist(e.target.value)}}  />
            <Input  type={"text"}  name={"geografia"}  labelname="Geografia" req={false} disabled={false} value={geo} onChange={(e)=>{setGeo(e.target.value)}}   />
            <Input  type={"text"}  name={"portugues"}  labelname="Português" req={false} disabled={false} value={port} onChange={(e)=>{setPort(e.target.value)}}   />
            <Input  type={"text"}  name={"artes"}  labelname="Artes" req={false} disabled={false} value={artes} onChange={(e)=>{setArtes(e.target.value)}}   />
            <Input  type={"text"}  name={"edfisica"}  labelname="Educação Física" req={false} disabled={false} value={edf} onChange={(e)=>{setEdf(e.target.value)}}  />


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