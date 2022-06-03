import styles from "./Lista.module.css";
import  {
    Link
  } from "react-router-dom";
export default function Lista ({listas}) {
    return (
        <>
        {listas.map((lista,index) => (
            
            <li className={styles.lista} key={index}>
                <p><Link to="/">{lista}</Link></p>
            </li>
        ))}
        </>
    )
}