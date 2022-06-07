import Lista from "./Lista/Lista";
import styles from "./Header.module.css";
import Hamburguer from "./Hambuguer/Hamburguer";
import logo from "../../assets/imgs/logo.png";
import { useState } from "react";

export default function Header() {
  const listas = ["Home", "Sobre", "Contato", "Área do Gestor"];
  const [show, setShow] = useState(false);
  const showOrHide = () => setShow(!show);
  return (
    <header className={styles.container__cabecalho}>
      <article className={styles.container__logo}>
        <h1 className={styles.cabecalho__titulo}>Colégio São Cristovão</h1>
        <img src={logo} className={styles.logo} alt="logo-CSC" />
      </article>
      <Hamburguer onClick={showOrHide} />
      <nav className={styles.nav__container}>
        <ul
          className={`${styles.nav__ul} ${show ? styles.close : styles.open}`}
        >
          <Lista listas={listas} />
        </ul>
      </nav>
    </header>
  );
}
