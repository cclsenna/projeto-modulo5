import styles from "./App.module.css";
import  {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import ModalDados from "./pages/protected/DashboardBusca/ModalDados/ModalDados.jsx";

function App() {
  return (
    <ModalDados/>

  );
}

export default App;
