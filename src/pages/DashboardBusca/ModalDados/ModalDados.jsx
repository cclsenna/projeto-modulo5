import React,{useState,useEffect} from 'react';
import styles from './ModalDados.module.css';
import Input from '../../../Components/Input/Input.jsx';
import Select from '../../../Components/Input/Select';
import Botao from '../../../Components/Botao/Botao';
import ModalDel from '../ModalDel/ModalDel';
import apiCep from '../../../services/apiCep';

function ModalDados({dados,modal,setModal}) {    

const turnos = ["Manhã", "Tarde"];
const professores = [  "Haroldo",  "Ricardo",  "Patrícia",  "Flávia",  "Karlla",  "Marluce",  "Cláudia",  "Lúcia",  "Vinícius"];

const [cep, setCep] = useState({});

const [modalDel,setModalDel]=useState([false,{},'']);

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
const[matricula,setMatricula]=useState('');


useEffect(()=>{
    setNome(dados.nome);
    setSobrenome(dados.sobrenome);
    setDataNascimento(converteData(dados.dataNascimento));
    setTelefone(dados.tel);
    setEmail(dados.email);
    setFoto(dados.foto);
    setTurno(handleTurno(dados.turno));
    setProfessor(dados.id_professor);
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
    setMatricula(dados.matricula);


 },[modal]);


 function converteData (data) {

    if(!data) return;
    const traco = `${data.substring(0, 1)}${data.substring(1, 2)}${data.substring(2,3)}${data.substring(3, 4)}-${data.substring(5, 6)}${data.substring(6,7)}-${data.substring(8, 9)}${data.substring(9, 10)}`;
    let res = traco.split("-");
    if (res[2].length == 1) {
      res[2] = "0" + res[2]    
    }
    return res.join('-');
}



 function handleTurno(valor){
     if(valor==='M') return '1';     
     else if(valor==='T') return '2';
}


function handleSubmit(e){
    e.preventDefault();
    const btn=e.nativeEvent.submitter.innerHTML;
    if(btn==='Atualizar'){
        setInfoModal({titulo:'Atualizar registro',
        descricao:'Deseja continaur com a atualização dos dados ?',
        tipo:'update',
        textoNeg:'Não',
        textoPos:'Sim'});
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

async function handleCep(e) {
    console.log('entrou no handlecep')
    const api = await apiCep(e.target.value);
    setRua(api.logradouro);
    setBairro(api.bairro);
    setCidade(api.localidade);
    setEstado(api.uf);
    
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

                <Input  type={"text"} data-matricula={matricula} name={"nome"} labelname="Nome" req={true} value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                <Input  type={"text"}  name={"sobrenome"} labelname="Sobrenome"  req={true} value={sobrenome} onChange={(e)=>{setSobrenome(e.target.value)}} />

          <div className={styles.nascimento}>
            <Input type={"date"} name={"dataNascimento"}  labelname="Data de Nascimento"  req={true} value={dataNascimento} onChange={(e)=>{setDataNascimento(e.target.value)}}/>
          </div>

          <Input type={"text"}   name={"telefone"} labelname="Telefone" req={true}  value={telefone} onChange={(e)=>{setTelefone(e.target.value)}} />
          <Input type={"email"} name={"email"} labelname="Email" req={true}  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <Input type={"url"} name={"foto"} labelname="Foto URL"  value={foto} onChange={(e)=>{setFoto(e.target.value)}} />
          <Select name={"turno"}  select={"Turno"}context={turnos} value={turno} required={true} onChange={(e)=>{setTurno(e.target.value)}}/>
          <Select  name={"professor"}  select={"Professor"} context={professores} value={professor} required={true} onChange={(e)=>{setProfessor(e.target.value)}}  />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input  type={"text"}   name={"cep"}      labelname="CEP" onBlur={handleCep}    req={true}    value={cepVal} onChange={(e)=>{setCepVal(e.target.value)}} />
          <Input  type={"text"} name={"rua"} labelname="Rua"  value={rua} onChange={(e)=>{setRua(e.target.value)} }   />
          <Input  type={"text"} name={"bairro"} labelname="Bairro"  value={bairro} onChange={(e)=>{setBairro(e.target.value)}}   />

          <Input  type={"text"}  name={"cidade"} labelname="Cidade"  value={cidade} onChange={(e)=>{setCidade(e.target.value)}}/>


          <Input type={"text"}  name={"estado"} labelname="Estado"  req={true} value={estado} onChange={(e)=>{setEstado(e.target.value)}}/>
          <Input type={"text"} name={"numero"} labelname="Número" req={true} value={numero} onChange={(e)=>{setNumero(e.target.value)} }/>
        </fieldset>

        <fieldset className={styles.boletim}>
            <h2>Boletim</h2>

            <Input  type={"number"}  name={"matematica"}  labelname="Matemática" req={false} step={'0.1'} min={'0'} max={'10'}   value={mat} onChange={(e)=>{setMat(e.target.value)}}  />
            <Input  type={"number"}  name={"historia"}  labelname="História" req={false}  step={'0.1'} min={'0'} max={'10'} value={hist} onChange={(e)=>{setHist(e.target.value)}}  />
            <Input  type={"number"}  name={"geografia"}  labelname="Geografia" req={false}  step={'0.1'} min={'0'} max={'10'} value={geo} onChange={(e)=>{setGeo(e.target.value)}}   />
            <Input  type={"number"}  name={"portugues"}  labelname="Português" req={false}  step={'0.1'} min={'0'} max={'10'} value={port} onChange={(e)=>{setPort(e.target.value)}}   />
            <Input  type={"number"}  name={"artes"}  labelname="Artes" req={false}  value={artes} step={'0.1'} min={'0'} max={'10'} onChange={(e)=>{setArtes(e.target.value)}}   />
            <Input  type={"number"}  name={"edfisica"}  labelname="Educação Física" req={false} step={'0.1'} min={'0'} max={'10'}  value={edf} onChange={(e)=>{setEdf(e.target.value)}}  />


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