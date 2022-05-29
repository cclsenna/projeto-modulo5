import styles from "./Hamburguer.module.css"
export default function Hamburguer() {
  return (
    <section className={styles.container__hamburguer}>
      <input id="menu-hamburguer"  type="checkbox" />

      <label for="menu-hamburguer">
        <div  className={styles.menu}>
          <span  className={styles.hamburguer}></span>
        </div>
      </label>
    </section>
  );
}
