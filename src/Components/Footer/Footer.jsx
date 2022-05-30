import React from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/imgs/logo.png";
import linkedin from "../../assets/imgs/icone_linkedin.svg";
import insta from "../../assets/imgs/icone_insta.svg";
import face from "../../assets/imgs/icone_face.svg";
import youtube from "../../assets/imgs/icone_youtube.svg";





function Footer() {
  return (
    <footer className={styles.container}>

        <section className={styles.container__dados}>
            <ul>
                <li>Sobre a Escola</li>
                <li>Sobre a Escola Holandesa</li>
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
                <li>Telefone 1: 219999999</li>
                <li>Telefone 2: 2199999999</li>
                <li>Whatsapp: 21999999999</li>
                <li>Endereço : Av. Dias da Cruz, 999, Méier, Rio de Janeiro, RJ</li>
            </ul>
            

        </section>

        <section className={styles.container__logo}>
            <img src={logo} alt="Logo da escola" className={styles.logo} />
            <p>Escola Holandesa do Méier</p>
        </section>





        <section className={styles.container__social}>
            <p>Projeto desenvolvido para fins educacionais – Grupo 4 – Resilia Educação | 2022</p>

            <div className={styles.social}>

                <ul>
                    <li><img src={linkedin} alt="Logo do linkedin"/></li>
                    <li><img src={insta} alt="Logo do instagram"/></li>
                    <li><img src={face} alt="Logo do facebook"/></li>
                    <li><img src={youtube} alt="Logo do youtube"/></li>
                </ul>

            </div>

            
        </section>

    </footer>
  )
}

export default Footer;