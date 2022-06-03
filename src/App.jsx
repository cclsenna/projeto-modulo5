import "./App.css";
import AreaGestor from "./Components/AreaGestor/AreaGestor";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer.jsx";
import CardFunc from "./Components/CardFunc/CardFunc.jsx";
import imgCreate from "./assets/imgs/img_Create.png";
import imgSearch from "./assets/imgs/img_search.svg";
import Sobre from "./Components/Sobre/Sobre.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <AreaGestor />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
