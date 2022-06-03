import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer.jsx";
import CardFunc from "./pages/DashBoardEscolha/CardFunc/CardFunc.jsx";
import imgCreate from "./assets/imgs/img_Create.png";
import imgSearch from "./assets/imgs/img_search.svg";
import DashboardEscolha from "./pages/DashBoardEscolha/DashboardEscolha";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      {/* <Home /> */}
      <DashboardEscolha/>
      <Footer />
    </div>
  );
}

export default App;
