import "./sidebar.css";
import logoUv from "../../assets/images/UVLogo.png";
import ItemSidebar from "../ItemSidebar/ItemSidebar";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="header">
          <img className="img" src={logoUv} />
        </div>
        <div className="itemsSidebar">
          <NavLink to="antecedentes">
            <ItemSidebar name="Antecedentes" />
          </NavLink>
          <NavLink to="marcolegal">
            <ItemSidebar name="Marco legal" />
          </NavLink>
          <NavLink to="guiadebusqueda">
            <ItemSidebar name="Guia de busqueda" />
          </NavLink>
        </div>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
};

export default Sidebar;
