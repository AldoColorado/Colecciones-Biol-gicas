import { NavLink, Outlet } from "react-router-dom";
import ItemHeader from "../ItemHeader/ItemHeader";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./header.css";
const inicio = "Inicio";
const consulta = "Consulta";
const nosotros = "Nosotros";
const Contacto = "Contacto";

const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <div className="optionsContainer">
          <NavLink to="/">
            <ItemHeader name={inicio} />
          </NavLink>
          <NavLink to="consulta">
            <ItemHeader name={consulta} />
          </NavLink>
          <NavLink to="nosotros">
            <ItemHeader name={nosotros} />
          </NavLink>
          <NavLink to="contacto">
            <ItemHeader name={Contacto} />
          </NavLink>
        </div>
        <div className="buttonLoginContainer">
          <PrimaryButton name="Login" />
        </div>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
};

export default Header;
