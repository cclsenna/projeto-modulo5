import { useEffect, useState } from "react";
import Botao from "../../Components/Botao/Botao";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Input/Select";
import styles from "./Cadastro.module.css";
export default function Cadastro() {
  const turnos = ["Manhã", "Tarde"];
  const professores = [
    "Haroldo",
    "Ricardo",
    "Patrícia",
    "Flávia",
    "Karlla",
    "Marluce",
    "Cláudia",
    "Lúcia",
    "Vinícius",
  ];

  const [cep, setCep] = useState({});

  async function apiCep(e) {
    const cepReg = e.target.value.replace(/\D/g, "");
    const url = `https://viacep.com.br/ws/${cepReg}/json/`;
    const res = await fetch(url);
    const json = await res.json();
    setCep(json);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://app-escola-resilia.herokuapp.com/alunos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        nome: e.target.nome.value,
        sobrenome: e.target.sobrenome.value,
        dataNascimento: e.target.dataNascimento.value,
        tel: e.target.telefone.value,
        email: e.target.email.value,
        foto: e.target.foto.value,
        id_professor: e.target.professor.value,
        turno: e.target.turno.value == 1? "M":"T",
        cep: e.target.cep.value,
        rua: e.target.rua.value,
        bairro: e.target.bairro.value,
        cidade: e.target.cidade.value,
        uf: e.target.estado.value,
        numero: e.target.numero.value,
      }),
    })
    .then((e)=> console.log(e))
    .catch((e)=> console.log(e))
  }

  return (
    <section className={styles.formulario__container}>
      <h1>Cadastrar Aluno</h1>
      <form onSubmit={handleSubmit} action="#" className={styles.formulario}>
        <fieldset className={styles.identificacao}>
          <h2>Identificação</h2>

          <Input type={"text"} name={"nome"} labelname="Nome" req={true} />
          <Input
            type={"text"}
            name={"sobrenome"}
            labelname="Sobrenome"
            req={true}
          />
          <div className={styles.nascimento}>
            <Input
              type={"date"}
              name={"dataNascimento"}
              labelname="Data de Nascimento"
              req={true}
            />
          </div>
          <Input
            type={"text"}
            name={"telefone"}
            labelname="Telefone"
            req={true}
          />
          <Input type={"email"} name={"email"} labelname="Email" req={true} />
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={true} />
          <Select name={"turno"} select={"Turno"} context={turnos} required={true}/>
          <Select
            name={"professor"}
            select={"Professor"}
            context={professores}
          />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input
            type={"text"}
            name={"cep"}
            onBlur={apiCep}
            labelname="CEP"
            req={true}
          />
          <Input
            type={"text"}
            name={"rua"}
            labelname="Rua"
            value={cep.logradouro}
          />
          <Input
            type={"text"}
            name={"bairro"}
            labelname="Bairro"
            value={cep.bairro}
          />
          <Input
            type={"text"}
            name={"cidade"}
            labelname="Cidade"
            value={cep.localidade}
          />
          <Input
            type={"text"}
            name={"estado"}
            labelname="Estado"
            value={cep.uf}
           
            req={true}
          />
          <Input type={"text"} name={"numero"} labelname="Número" req={true} />
        </fieldset>
        <Botao texto="Cadastrar" />
      </form>
    </section>
  );
}
