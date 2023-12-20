import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
