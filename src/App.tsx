import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Outlet />
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
