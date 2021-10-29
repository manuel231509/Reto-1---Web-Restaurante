import React, { useRef } from "react";
import MenuRedesSocialesFlotante from "../Barra de Navegacion/Efecto Fixed Top a NavBar y de Display a RedesSocialesFlotante/Menu_RedesSocialesFlotante";
import NavBar from "../Barra de Navegacion/NavBar";
import Footer from "../Pie de Pagina/Footer";

const Layout = (props) => {
	const refMenu = useRef();
	const refFooter = useRef();
	console.log("Layout");
	return (
		<>
			<NavBar ref={refMenu} />
			{props.children}
			<Footer ref={refFooter} />
			<MenuRedesSocialesFlotante
				ref={{ refMenu: refMenu, refFooter: refFooter }}
			/>
		</>
	);
};

export default Layout;
