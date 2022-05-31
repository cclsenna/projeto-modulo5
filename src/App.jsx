import styles from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import CardFunc from './Components/CardFunc/CardFunc.jsx';

function App() {

  return (
    <div className={styles.container}>
      {/* <Header/> */}
      {/* <Footer/> */}
      <CardFunc texto="Cadastrar Novos Alunos" textoAlt="imagem de teste" url="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/132f3e5c812dce0fead4c26df6a6c328.jpg" />
    </div>
  )
}

export default App;

