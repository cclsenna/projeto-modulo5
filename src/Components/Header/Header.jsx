import Lista from "./Lista/Lista";
import styles from "./Header.module.css";
import Hamburguer from "./Hambuguer/Hamburguer";
import logo from "../../assets/imgs/logo.png";

export default function Header() {
  const listas = ["Home", "Sobre", "Área do Gestor"];

  return (
    <header className={styles.container__cabecalho}>
      <article className={styles.container__logo}>
      <h1 className={styles.cabecalho__titulo}>Escola Holandesa do Méier</h1>
      <img src={logo} className={styles.logo} alt="logo-EHM" />
      </article>
      <nav>
        <Hamburguer />
        <ul>
          {/* <Lista listas={listas} /> */}
        </ul>
      </nav>
    </header>
  );
}
