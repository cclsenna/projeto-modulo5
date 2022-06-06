import styles from "./Hamburguer.module.css"
export default function Hamburguer({onClick}) {
  return (
    <section  className={styles.container__hamburguer}>
      <input onClick={onClick} className={styles.menu_hamburguer} id="menu-hamburguer"  type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <div  className={styles.menu}>
          <span  className={styles.hamburguer}></span>
        </div>
      </label>
    </section>
  );
}
