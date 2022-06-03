import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer.jsx";
import CardFunc from "./Components/CardFunc/CardFunc.jsx";
import imgCreate from "./assets/imgs/img_Create.png";
import imgSearch from "./assets/imgs/img_search.svg";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <div className="App">
      <Header />
      <Cadastro/>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
