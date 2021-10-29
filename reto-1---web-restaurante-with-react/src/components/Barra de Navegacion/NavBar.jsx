import React, { forwardRef, useState } from "react";
import {
	faBars,
	faHome,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ComponentEtiquetaLi from "../Creacion de Etiquetas HTML/EtiquetaLi";
import ComponentEtiquetaA from "../Creacion de Etiquetas HTML/EtiquetaA";
import FontAwsomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";

const NavBar = forwardRef((props, refNavBar) => {
	const objectsUl = {
		imgLogo: {
			ul_className: "navbar-nav",
			li: [
				{
					li_CallComponentBool: true,
					li_className: "nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className:
						"nav-link d-flex	align-items-center justify-content-center",
					a_href: "index.html",
					a_role: "button",
					img_CallComponentBool: true,
					img_className: "img-logo",
					img_src: "./assets/images/logo@2x.png",
					img_alt: "Logo del restaurante",
					p_CallComponentBool: false,
				},
			],
		},
		datos: {
			ul_className: "navbar-nav me-auto justify-content-end mb-lg-0",
			li: [
				{
					img_CallComponentBool: false,
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/index",
					a_role: "button",
					p_CallComponentBool: true,
					p_texto: "INICIO",
					fontAwesomeIcon_CallComponentBool: true,
					fontAwesomeIcon_className: "fas",
					fontAwesomeIcon_icon: faHome,
					fontAwesomeIcon_style: { fontSize: 20, marginRight: 10 },
				},
				{
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/nosotros",
					a_role: "button",
					p_CallComponentBool: true,
					p_texto: "QUIENES SOMOS",
					fontAwesomeIcon_CallComponentBool: false,
					img_CallComponentBool: false,
				},
				{
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/menu",
					a_role: "button",
					p_CallComponentBool: true,
					p_texto: "MENU",
					fontAwesomeIcon_className: "",
					fontAwesomeIcon_CallComponentBool: false,
					img_CallComponentBool: false,
				},
				{
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/servicios",
					a_role: "button",
					p_CallComponentBool: true,
					p_texto: "SERVICIOS",
					img_CallComponentBool: false,
					fontAwesomeIcon_CallComponentBool: false,
				},
				{
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/contactenos",
					a_role: "button",
					p_CallComponentBool: true,
					p_texto: "CONTACTENOS",
					img_CallComponentBool: false,
					fontAwesomeIcon_CallComponentBool: false,
				},
				{
					li_CallComponentBool: true,
					li_className: "d-flex align-items-start nav-item active",
					li_type: "button",
					li_style: {},
					a_CallComponentBool: true,
					a_className: "nav-link",
					a_href: "/carrito",
					a_role: "button",
					p_CallComponentBool: true,
					p_nombre: "",
					fontAwesomeIcon_CallComponentBool: true,
					fontAwesomeIcon_className: "fas icon-carrito",
					fontAwesomeIcon_icon: faShoppingCart,
					fontAwesomeIcon_style: "",
					img_CallComponentBool: false,
				},
			],
		},
	};
	const objectRedesSociales = [
		{
			a_CallComponentBool: true,
			a_className:
				"d-flex" +
				" justify-content-center" +
				" btn btn-outline-light" +
				" btn-floating a-width mt-2",
			a_href: "#!",
			a_role: "button",
			fontAwesomeIcon_CallComponentBool: true,
			fontAwesomeIcon_className: "fab",
			fontAwesomeIcon_icon: faFacebookF,
			fontAwesomeIcon_style: "",
			img_CallComponentBool: false,
			p_CallComponentBool: false,
			p_texto: "",
		},
		{
			a_CallComponentBool: true,
			a_className:
				"d-flex" +
				" justify-content-center" +
				" btn btn-outline-light" +
				" btn-floating a-width mt-3",
			a_href: "#!",
			a_role: "button",
			fontAwesomeIcon_CallComponentBool: true,
			fontAwesomeIcon_className: "fab",
			fontAwesomeIcon_icon: faTwitter,
			fontAwesomeIcon_style: "",
			img_CallComponentBool: false,
			p_CallComponentBool: false,
			p_texto: "",
		},
		{
			a_CallComponentBool: true,
			a_className:
				"d-flex" +
				" justify-content-center" +
				" btn btn-outline-light" +
				" btn-floating a-width mt-3" +
				" mb-2",
			a_href: "#!",
			a_role: "button",
			fontAwesomeIcon_CallComponentBool: true,
			fontAwesomeIcon_className: "fab",
			fontAwesomeIcon_icon: faYoutube,
			fontAwesomeIcon_style: "",
			img_CallComponentBool: false,
			p_CallComponentBool: false,
			p_texto: "",
		},
	];

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
									<ComponentEtiquetaLi objectArray={objectsUl.imgLogo.li[0]} />
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
							{objectRedesSociales.map((objecto, index) => {
								return <ComponentEtiquetaA key={index} objectArray={objecto} />;
							})}
						</section>
					</div>
				</div>
			</nav>
		</>
	);
});

export default NavBar;
