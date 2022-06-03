import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import CardFunc from "../pages/DashBoardEscolha/CardFunc/CardFunc.jsx";
import imgCreate from "../assets/imgs/img_Create.png";
import imgSearch from "../assets/imgs/img_search.svg";
import DashboardEscolha from "../pages/DashBoardEscolha/DashboardEscolha";
import styles from "../App.module.css";
import  {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";





function Routes() {
  return (
    <Router>    
      <div className={styles.container}>
        <Header/>
            <Switch> 
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/dashboard" element={<DashboardEscolha />} />  */}
                {/* <Route path="/sobre" element={<Sobre />} />   */}
 


            </Switch>
            <Cadastro/>
        <Footer/>       

      </div>    
    </Router>



  );
}

export default Routes;
