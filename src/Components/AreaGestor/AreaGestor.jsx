import React, { useState } from "react";
import styles from "./AreaGestor.module.css";
import logoAreaGestor from "../../assets/imgs/logoAreaGestor.png";
import { useNavigate } from "react-router-dom"

function AreaGestor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function valida(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form = document.querySelector("form");
    let textForm = document.getElementById("textForm");
    let textEmail = document.getElementById("textEmail");
    let textPassword = document.getElementById("textPassword");
    
    form.addEventListener("submit", (e) => {
      if (email.value == "" && password.value == "") {
        textForm.textContent = "Você precisa preencher todos os campos!";
      } else if (
        validatorEmail(email.value) === true &&
        validatorPassword(password.value) === true
      ) {
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
        navigate('/dashboardescola')
      } else {
        console.log("Requisição não atendida");
      }
    
      e.preventDefault();
       
    
      
    });
    
    email.addEventListener("keyup", () => {
      if (validatorEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser Ex: name@abc.com";
      } else {
        textEmail.textContent = "";
      }
    });
    
    password.addEventListener("keyup", () => {
      if (validatorPassword(password.value) !== true) {
        textPassword.textContent =
          "Senha deve ter 6 digitos, entre números e caracteres especiais.";
      } else {
        textPassword.textContent = "";
      }
    });
    
    function validatorEmail(email) {
      let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
      return emailPattern.test(email);
    }
    
    function validatorPassword(password) {
      let passwordPattern =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return passwordPattern.test(password);
    }

  }
 

  
  return (
    <main className={styles.containerAreaGestor}>
      <img className={styles.logoAreaGestor} src={logoAreaGestor} />
      <h1 className={styles.titleAreaGestor}>Acesse área do gestor</h1>
      <h2 className={styles.subTitleAreaGestor}>
        Ainda não tem conta?
        <a className={styles.paragrafo1} href="#">
          Cadastre-se
        </a>
      </h2>
      <form className={styles.formsAreaGestor}>
        <section className={styles.sectionAreaGestor}>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input value={email} 
            onChange={e => setEmail(e.target.value)}
            id={"email"}
              className={styles.inputEmail}
              type={"text"}
              name={"email"}
              placeholder="Seu melhor e-mail"
            />
            <small id={"textEmail"}></small>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
            value={password} 
            onChange={e => setPassword(e.target.value)}
              id={"password"}
              maxLength={6}
              className={styles.inputSenha}
              type={"password"}
              name={"senha"}
              placeholder="Digite sua senha"
            />
            <small id={"textPassword"}></small>
          </div>
        </section>

        <section className={styles.btnAreaGestor}>
          <button onClick={valida} type={"submit"} className={styles.btnConectese}>
            Conecte-se
          </button>
          <small id={"textForm"}></small>

          <button className={styles.btnConectarGoogle}>
            Conectar com o Google
          </button>
        </section>
      </form>

      <h3 className={styles.subtitleEsqueceu}>
        Esqueceu sua senha?
        <a className={styles.paragrafo2} href="#">
          A gente te ajuda.
        </a>
      </h3>
    </main>
  );
}

export default AreaGestor;
