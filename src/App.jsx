import styles from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App;
