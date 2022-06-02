import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer.jsx";
import CardFunc from "./Components/CardFunc/CardFunc.jsx";
import imgCreate from "./assets/imgs/img_Create.png";
import imgSearch from "./assets/imgs/img_search.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
