import React from "react";
import ColPagarAhoraProvider from "../../contexts/Carrito/ColPagarAhoraProvider";
import FooterProvider from "../../contexts/Footer/FooterProvider";
import NavBarProvider from "../../contexts/NavBar/NavBarProvider";
import MenuRedesSocialesFlotante from "../Barra de Navegacion/Efecto Fixed Top a NavBar y de Display a RedesSocialesFlotante/Menu_RedesSocialesFlotante";
import NavBar from "../Barra de Navegacion/NavBar";
import Footer from "../Pie de Pagina/Footer";
import NosotrosProvider from "../../contexts/Nosotros/NosotrosProvider";
import EmpleadosProvider from "../../contexts/Nosotros/EmpleadosProvider";
import TestimoniosProvider from "../../contexts/Nosotros/TestimoniosProvider";

const Layout = ({ children }) => {
  console.log("Layout");
  return (
    <>
      <NavBarProvider>
        <FooterProvider>
          <ColPagarAhoraProvider>
            {/*Envolví al navbar con los provider de los modal de testimonios, empleados y nosotros*/}
            <TestimoniosProvider>
              <EmpleadosProvider>
                <NosotrosProvider>
                  <NavBar />
                  {children}
                  <Footer />
                  <MenuRedesSocialesFlotante />
                </NosotrosProvider>
              </EmpleadosProvider>
            </TestimoniosProvider>
          </ColPagarAhoraProvider>
        </FooterProvider>
      </NavBarProvider>
    </>
  );
};

export default Layout;
