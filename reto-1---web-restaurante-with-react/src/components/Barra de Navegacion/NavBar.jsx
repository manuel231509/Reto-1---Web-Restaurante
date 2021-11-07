import React, { forwardRef, useState } from "react";
import {
	faFacebookF,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ComponentEtiquetaLi from "../Creacion de Etiquetas HTML/EtiquetaLi";
import ComponentEtiquetaA from "../Creacion de Etiquetas HTML/EtiquetaA";
import FontAwsomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import objectsUl from "../../consts json/Barra de Navegacion/objectsUl.json";
import objectRedesSociales from "../../consts json/Barra de Navegacion/objectRedesSociales.json";
import {
	faBars,
	faHome,
	faShoppingCart,
	faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = forwardRef((props, refNavBar) => {
	const [expandedAria, setExpandedAria] = useState(false);

	const ariaExpanded = () => {
		const valor = !expandedAria;
		setExpandedAria(valor);
	};
	return (
		<>
			<nav id="menu" ref={refNavBar} className="navbar-expand-lg bg-red-600">
				<div className="container-fluid">
					<section className="pt-1 pb-1">
						<div className="row">
							<div className="d-flex col-lg-4 col-md-12 mb-md-0">
								<ul className={objectsUl.imgLogo.ul_className}>
									<h1>
										{objectsUl.imgLogo.li.map((imgLogoLi, index) => {
											return (
												<ComponentEtiquetaLi
													key={index}
													objectArray={imgLogoLi}
												/>
											);
										})}
									</h1>
								</ul>
							</div>
							<div className="col-lg-8 col-md-12 mb-md-0 div-item">
								<button
									onClick={ariaExpanded}
									className={
										expandedAria ? "navbar-toggler" : "navbar-toggler collapsed"
									}
									type="button"
								>
									<FontAwsomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											fontAwesomeIcon_className: "fas",
											fontAwesomeIcon_icon: faBars,
										}}
									/>
								</button>
								<div
									className={
										!expandedAria
											? "navbar-collapse collapse"
											: "navbar-collapse collapse show"
									}
									id="navbarSupportedContent"
								>
									<ul className={objectsUl.datos.ul_className}>
										{objectsUl.datos.li.map((objeto, index) => {
											if (objeto.fontAwesomeIcon_icon === "faHome") {
												objeto["fontAwesomeIcon_icon"] = faHome;
											} else if (
												objeto.fontAwesomeIcon_icon === "faShoppingCart"
											) {
												objeto["fontAwesomeIcon_icon"] = faShoppingCart;
											} else if (
												objeto.fontAwesomeIcon_icon === "faSignInAlt"
											) {
												objeto["fontAwesomeIcon_icon"] = faSignInAlt;
											}
											return (
												<ComponentEtiquetaLi key={index} objectArray={objeto} />
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</section>
					<div
						id="redes-sociales-flotante"
						className="d-flex justify-content-end"
						style={{ zIndex: 1 }}
					>
						<section className="d-flex flex-column bg-red-800 redes-sociales">
							{objectRedesSociales.map((objeto, index) => {
								if (objeto.fontAwesomeIcon_icon === "faFacebookF") {
									objeto["fontAwesomeIcon_icon"] = faFacebookF;
								} else if (objeto.fontAwesomeIcon_icon === "faTwitter") {
									objeto["fontAwesomeIcon_icon"] = faTwitter;
								} else if (objeto.fontAwesomeIcon_icon === "faYoutube") {
									objeto["fontAwesomeIcon_icon"] = faYoutube;
								}
								return <ComponentEtiquetaA key={index} objectArray={objeto} />;
							})}
						</section>
					</div>
				</div>
			</nav>
		</>
	);
});

export default NavBar;
