import React,{useState} from 'react';
import styles from './ModalDados.module.css';
import Input from '../../../../Components/Input/Input';
import Select from '../../../../Components/Input/Select';
import Botao from '../../../../Components/Botao/Botao';

function ModalDados({dados,modal,setModal}) {    

//     var modal = document.getElementById("myModal");

// // Get the button that opens the modal

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
    // var btn = document.getElementById("myBtn");
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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

function exibeModal(){
    if(dados.matricula===modal) return styles.visivel;
    else return styles.invisivel;
}



  return (
      <div>

            <div  className={`${styles.modal} ${exibeModal()} `}>

            <div className={styles.modal__content}>
                <span className={styles.close} onClick={()=>setModal(false)}>&times;</span>
                <h1>ALTERAR DADOS DO ALUNO</h1>

                <form action="#" name="formEdit" className={styles.formulario}>

                <fieldset className={styles.identificacao}>
                    
                <h2>Identificação</h2>


                <Input type={"text"} name={"nome"} labelname="Nome" req={true} value={dados.nome}  />
          <Input
            type={"text"}
            name={"sobrenome"}
            labelname="Sobrenome"
            req={true}
            value={dados.sobrenome}

          />
          <div className={styles.nascimento}>
            <Input
              type={"date"}
              name={"dataNascimento"}
              labelname="Data de Nascimento"
              req={true}
            //   value={dados.dataNascimento}

            />
          </div>
          <Input
            type={"text"}
            name={"telefone"}
            labelname="Telefone"
            req={true}
            value={dados.tel}

          />
          <Input type={"email"} name={"email"} labelname="Email" req={true}  value={dados.email} />
          <Input type={"url"} name={"foto"} labelname="Foto URL" req={true} value={dados.foto} />
          <Select name={"turno"} select={"Turno"} context={turnos} required={true}/>
          <Select
            name={"professor"}
            select={"Professor"}
            context={professores}
          />
        </fieldset>

        <fieldset className={styles.endereco}>
          <h2>Endereço</h2>

          <Input   type={"text"}   name={"cep"}     /* onBlur={apiCep}*/   abelname="CEP"    req={true}    value={dados.cep} />
          <Input
            type={"text"}
            name={"rua"}
            labelname="Rua"
            value={cep.logradouro} value={dados.rua}
          />
          <Input
            type={"text"}
            name={"bairro"}
            labelname="Bairro"
            value={cep.bairro} value={dados.bairro}
          />
          <Input
            type={"text"}
            name={"cidade"}
            labelname="Cidade"
            value={cep.localidade} value={dados.cidade}/>
            
          <Input
            type={"text"}
            name={"estado"}
            labelname="Estado"
            value={cep.uf}           
            req={true} value={dados.uf}/>
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

        <div className={styles.container__botoes}>
            <Botao texto="Atualizar" />
            <Botao texto="Deletar" />
        </div>

                </form>
            </div>

</div> 


      </div>

)
}

export default ModalDados;