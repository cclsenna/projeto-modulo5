import { useState } from "react";
import Botao from "../../Components/Botao/Botao";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Input/Select";
import styles from "./Cadastro.module.css";
import apiCep from "../../services/apiCep";
import validaCampos from "../../services/validaCampos";

export default function Cadastro() {
  const turnos = ["Manhã", "Tarde"];
  const professores = ["Haroldo","Ricardo","Patrícia","Flávia","Karlla","Marluce","Cláudia","Lúcia","Vinícius"];

  const [cep, setCep] = useState({});
  const[validacao, setvalidacao] = useState('');
  
  function handleSubmit(e) {
    const validador = validaCampos(e);
    setvalidacao(validador);
    if(validacao !== "Preencha todos os campos") {
      e.target.reset();
      setCep({});
    }
  }
  async function handleCep(e) {
    const api = await apiCep(e.target.value);
    setCep(api);
  }

  return (
    <section className={styles.formulario__container}>
      <h1>Cadastrar Aluno</h1>
      <form onSubmit={handleSubmit} action="#" className={styles.formulario}>
        <fieldset className={styles.identificacao}>
          <h2>Identificação</h2>
          {<span className={`${validacao == "Preencha todos os campos"? styles.notCadastrado:styles.cadastrado}`}>{validacao}</span>}
          
          <Input type={"text"} name={"nome"} labelname="Nome" req={""} />
          <Input type={"text"} name={"sobrenome"} labelname="Sobrenome" req={""} />
          <div className={styles.nascimento}>
            <Input type={"date"} name={"dataNascimento"} labelname="Data de Nascimento" req={""} />
          </div>
          <Input type={"text"} name={"telefone"} labelname="Telefone" req={""}/>
          <Input type={"email"} name={"email"} labelname="Email" req={""} />
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={""} />
          <Select name={"turno"} select={"Turno"} context={turnos} required={""}/>
          <Select name={"professor"} select={"Professor"} context={professores}/>
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input type={"text"} name={"cep"} onBlur={handleCep} labelname="CEP" req={""}/>
          <Input type={"text"} name={"rua"} labelname="Rua" onChange={()=>{''}} value={cep.logradouro || ''} req={""}/>
          <Input type={"text"} name={"bairro"} labelname="Bairro" onChange={()=>{''}} value={cep.bairro || ''} req={""}/>
          <Input type={"text"} name={"cidade"} labelname="Cidade" onChange={()=>{''}} value={cep.localidade || ''} req={""}/>
          <Input type={"text"} name={"estado"} labelname="Estado" onChange={()=>{''}} value={cep.uf || ''} req={""} />
          <Input type={"text"} name={"numero"} labelname="Número" req={""} />
        </fieldset>
        <Botao texto="Cadastrar" />
      </form>
    </section>
  );
}
