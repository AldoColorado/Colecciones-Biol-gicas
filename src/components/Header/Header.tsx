import { NavLink, Outlet } from "react-router-dom";
import ItemHeader from "../ItemHeader/ItemHeader";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./header.css";
import { useState } from "react";
import Login from "../Login/Login";
const inicio = "Inicio";
const consulta = "Consulta";
const nosotros = "Nosotros";
const Contacto = "Contacto";

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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
        <div
          className="buttonLoginContainer"
          onClick={() => setOpenModal(true)}
        >
          <PrimaryButton name="Login" />
        </div>
      </div>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Header;
