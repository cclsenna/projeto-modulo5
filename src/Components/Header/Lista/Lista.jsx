import styles from "./Lista.module.css"
export default function Lista ({listas}) {
    return (
        <>
        {listas.map((lista,index) => (
            
            <li className={styles.lista} key={index}>
                <p>{lista}</p>
            </li>
        ))}
        </>
    )
}