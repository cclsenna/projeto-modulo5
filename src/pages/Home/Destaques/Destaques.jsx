import styles from "./Destaques.module.css";
import Card from "./Card/Card";
import academico from "../../../assets/imgs/academico.jpg";
import vida from "../../../assets/imgs/vida_do_estudante.jpg";
import esportes from "../../../assets/imgs/esportes.jpg";
export default function Destaques() {
  return (
    <section className={styles.destaques__container}>
      <h1>Nossos destaques</h1>
      <aside className={styles.card_titulo__container}>
        <h2>Acadêmico</h2>
        <Card
          imagem={academico}
          p1="Matemática"
          p2="Português"
          p3="Geografia"
          p4="História"
          p5="Artes"
        />
      </aside>
      <aside className={styles.card_titulo__container}>
        <h2>Vida de estudante</h2>
        <Card
          imagem={vida}
          p1="Ensino bilíngue"
          p2="Design de games"
          p3="Campus arbonizado"
          p4="Biblioteca parque"
          p5="Sala de leitura"
        />
      </aside>
      <aside className={styles.card_titulo__container}>
        <h2>Esportes</h2>
        <Card
          imagem={esportes}
          p1="Futebol"
          p2="Vôlei"
          p3="Atletismo"
          p4="handebol"
          p5="Basquete"
        />
      </aside>
    </section>
  );
}
