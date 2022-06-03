import React from 'react'
import styles from './AreaGestor.module.css'
import logoAreaGestor from '../../assets/imgs/logoAreaGestor.png'


function AreaGestor() {
  return (
   <main>
     <img className={styles.logoAreaGestor} src={logoAreaGestor} />
     <h1 className={styles.titleAreaGestor}>Acesse área do gestor</h1>
     <h2 className={styles.subTitleAreaGestor}> Ainda não tem conta? <a href="#">Cadastre-se</a></h2>
     <form className={styles.formsAreaGestor}>
       <label className={styles.labelAreaGestor}>
       <input className={styles.inputEmail} type="email" name='email' placeholder='Seu melhor e-mail' />
       <input  className={styles.inputSenha} type="password" name='password' placeholder='Digite sua senha'/>
       </label>
        <section>
       <button>Conecte-se</button>
    <button>Conectar com o Google</button>
       </section>    
    
     </form>
     <h2>Esqueceu sua senha? <a href="#">A gente te ajuda.</a></h2>
   </main>
    
    
  )
}

export default AreaGestor