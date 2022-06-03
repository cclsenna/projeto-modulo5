import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer.jsx";
import CardFunc from "./pages/DashBoardEscolha/CardFunc/CardFunc.jsx";
import imgCreate from "./assets/imgs/img_Create.png";
import imgSearch from "./assets/imgs/img_search.svg";
import DashboardEscolha from "./pages/DashBoardEscolha/DashboardEscolha";
import styles from "./App.module.css";
import  {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>    
      <div className={styles.container}>
        <Header/>
        <Footer/>       

      </div>    
    </Router>



  );
}

export default App;
