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

        <section className={styles.container__info}>
            <ul>
                <li>Sobre a Escola</li>
                <li>Sobre a Escola Holandesa</li>
                <li>Proposta Pedagógica</li>
                <li>Nossos Diferenciais</li>
                <li>Metodologia</li>
            </ul>
        </section>

        <section className={styles.container__contato}>
        <ul>
                <li>Contatos</li>
                <li>Telefone 1: 219999999</li>
                <li>Telefone 2: 2199999999</li>
                <li>Whatsapp: 21999999999</li>
            </ul> 

        </section>          




         <section className={styles.container__endereco}>
                <p>Endereço : Av. Dias da Cruz, 520, Méier, Rio de Janeiro, RJ</p>
                <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2292349286895!2d-43.2945906705361!3d-22.904914195612793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997da0648ce775%3A0x854b465f587cd32!2sR.%20Dias%20da%20Cruz%2C%20520%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020720-013!5e0!3m2!1sen!2sbr!4v1653937218101!5m2!1sen!2sbr" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </section> 

        {/* <section className={styles.container__logo}>
            <img src={logo} alt="Logo da escola" className={styles.logo} />
            <p>Escola Holandesa do Méier</p>
        </section> */}





        <section className={styles.container__social}>
            <p className={styles.copyrights}>Projeto desenvolvido para fins educacionais – Grupo 4 – Resilia Educação | 2022</p>


                <ul className={styles.social__links}>
                    <li><img src={linkedin} alt="Logo do linkedin"/></li>
                    <li><img src={insta} alt="Logo do instagram"/></li>
                    <li><img src={face} alt="Logo do facebook"/></li>
                    <li><img src={youtube} alt="Logo do youtube"/></li>
                </ul>


            
        </section>

    </footer>
  )
}

export default Footer;