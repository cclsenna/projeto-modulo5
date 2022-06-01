import styles from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import CardFunc from './Components/CardFunc/CardFunc.jsx';
import imgCreate from './assets/imgs/img_Create.png'
import imgSearch from './assets/imgs/img_search.svg';
import CardAluno from './Components/CardAluno/CardAluno.jsx';
import cris from './assets/imgs/735216.png';
import Botao from './Components/Botao/Botao.jsx';


function App() {

  return (
    <div className={styles.container}>
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <CardFunc texto="Cadastrar Novos Alunos" textoAlt="imagem de teste" url={imgCreate} /> */}
      {/* <CardFunc texto="Buscar e Editar" textoAlt="imagem de teste" url={imgSearch} /> */}
      {/* <CardAluno nome="Cristiano Ronaldo" textoAlt="teste" url={cris} turma="13" /> */}
      <Botao/>
    </div>
  )
}

export default App;

