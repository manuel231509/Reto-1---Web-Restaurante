import React from "react";
import ColPagarAhoraProvider from "../../contexts/Carrito/ColPagarAhoraProvider";
import FooterProvider from "../../contexts/Footer/FooterProvider";
import NavBarProvider from "../../contexts/NavBar/NavBarProvider";
import MenuRedesSocialesFlotante from "../Barra de Navegacion/Efecto Fixed Top a NavBar y de Display a RedesSocialesFlotante/Menu_RedesSocialesFlotante";
import NavBar from "../Barra de Navegacion/NavBar";
import Footer from "../Pie de Pagina/Footer";

const Layout = ({ children }) => {
	console.log("Layout");
	return (
		<>
			<NavBarProvider>
				<FooterProvider>
					<ColPagarAhoraProvider>
						<NavBar />
						{children}
						<Footer />
						<MenuRedesSocialesFlotante />
					</ColPagarAhoraProvider>
				</FooterProvider>
			</NavBarProvider>
		</>
	);
};

export default Layout;
