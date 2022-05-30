import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>

        <section className={styles.container__dados}>
            <ul>
                <li>Sobre a Escola</li>
                <li>Sobre a Eecola Holandesa</li>
                <li>Proposta Pedagógica</li>
                <li>Nossos Diferenciais</li>
            </ul>

            <ul>
                <li>Sobre o ensino</li>
                <li>Cursos Extras</li>
                <li>Corpo Docente</li>
                <li>Metodologia</li>
            </ul>

            <ul>
                <li>Contatos</li>
                <li>Tel 1: 219999999</li>
                <li>Tel 2: 2199999999</li>
                <li>Whatsapp: 21999999999</li>
                <li>Endereço : Av. Dias da Cruz, 999, Méier, Rio de Janeiro, RJ</li>
            </ul>
            

        </section>

        <section>
            <img src="../../assets/img/logo.png" alt="Logo da escola" />
            <p>Teste da imagem</p>
        </section>



        <section>
            <p>Projeto desenvolvido para fins educacionais – Grupo 4 – Resilia Educação | 2022</p>

            <div className={styles.social}>

            </div>

            
        </section>

    </footer>
  )
}

export default Footer;