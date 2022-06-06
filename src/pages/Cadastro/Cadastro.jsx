import Botao from "../../Components/Botao/Botao";
import Input from "../../Components/Input/Input";
import styles from "./Cadastro.module.css";
export default function Cadastro() {
  return (
    <section className={styles.formulario__container}>
      <h1>Cadastrar Aluno</h1>
      <form action="#" className={styles.formulario}>
        <fieldset className={styles.identificacao}>
          <h2>Identificação</h2>

          <Input type={"text"} labelname="Nome" req={true} />
          <Input type={"text"} labelname="Sobrenome" req={true} />
          <div className={styles.nascimento}>
            <Input type={"date"} labelname="Data de Nascimento" req={''} />
          </div>
          <Input type={"text"} labelname="Telefone" req={true} />
          <Input type={"email"} labelname="Email" req={true} />
          <Input type={"url"} labelname="Foto URL" req={true} />
          <Input type={"text"} labelname="Turno" req={true} />
          <Input type={"text"} labelname="Professor" req={true} />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input type={"text"} labelname="CEP" req={true} />
          <Input type={"text"} labelname="Rua" disabled={"disabled"} />
          <Input type={"text"} labelname="Bairro" disabled={"disabled"} />
          <Input type={"text"} labelname="Cidade" disabled={"disabled"} />
          <Input type={"text"} labelname="Estado" disabled={"disabled"} />
          <Input type={"text"} labelname="Número" req={true} />
        </fieldset>
        <Botao texto="Cadastrar" />
      </form>
    </section>
  );
}
