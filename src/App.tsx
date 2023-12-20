import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import RootLayout from "./components/RootLayout/RootLayut";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route>
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="consulta" element={<Home />} />
        <Route path="nosotros" element={<Home />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="antecedentes" element={<Contact />} />
        <Route path="marcolegal" element={<Contact />} />
        <Route path="guiadebusqueda" element={<Contact />} />
      </Route>
    </>

    // </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
