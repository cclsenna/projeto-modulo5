import Carrossel from "./Carrossel/Carrossel";
import Destaques from "./Destaques/Destaques";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.carrossel}>
        <Carrossel />
      </section>
      <section className={styles.destaques}>
        <Destaques />
      </section>
    </main>
  );
}
