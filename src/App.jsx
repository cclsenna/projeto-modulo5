import styles from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import CardFunc from './Components/CardFunc/CardFunc.jsx';
import imgCreate from './assets/imgs/img_Create.png'
import imgSearch from './assets/imgs/img_search.svg'


function App() {

  return (
    <div className={styles.container}>
      {/* <Header/> */}
      {/* <Footer/> */}
      <CardFunc texto="Cadastrar Novos Alunos" textoAlt="imagem de teste" url={imgCreate} />
      <CardFunc texto="Buscar e Editar" textoAlt="imagem de teste" url={imgSearch} />

    </div>
  )
}

export default App;

