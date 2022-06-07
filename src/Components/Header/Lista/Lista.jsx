import styles from "./Lista.module.css";
import { Link } from "react-router-dom";
export default function Lista({ listas }) {
  const rmvEspacoAcentuaçao = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "")
      .toLowerCase();
  };
  return (
    <>
      {listas.map((lista, index) => (
        <li className={styles.lista} key={index}>
          <Link to={"/" + rmvEspacoAcentuaçao(lista)}>{lista}</Link>
        </li>
      ))}
    </>
  );
}
