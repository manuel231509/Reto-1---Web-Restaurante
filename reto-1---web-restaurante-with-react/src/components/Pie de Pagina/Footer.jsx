import React, { forwardRef } from "react";
import {
	faFacebookF,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ComponentEtiquetaA from "../Creacion de Etiquetas HTML/EtiquetaA";
import ComponentEtiquetaP from "../Creacion de Etiquetas HTML/EtiquetaP";
import ComponentEtiquetaImg from "../Creacion de Etiquetas HTML/EtiquetaImg";
import ComponentEtiquetaLi from "../Creacion de Etiquetas HTML/EtiquetaLi";
import objectRedesSociales from "../../consts json/Pie de Pagina/objectRedesSociales.json";
import objectsUl from "../../consts json/Pie de Pagina/objectsUl.json";
import arrayDescripcionContactoRest from "../../consts json/Pie de Pagina/arrayDescripcionContactoRest.json";

const Footer = forwardRef((props, refFooter) => {
	return (
		<>
			<footer
				id="footer"
				ref={refFooter}
				className="align-items-baseline bg-red-700 text-center text-white"
				style={{ marginTop: 20 }}
			>
				<div className="pb-2">
					{/* Section: Social media */}
					<section className="mb-2">
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
					{/* Section: Social media */}

					{/* Section: Text */}
					<section
						className="d-flex align-items-start mb-1"
						style={{
							textAlign: "justify",
							paddingLeft: 50,
							paddingRight: 50,
						}}
					>
						<ComponentEtiquetaP
							objectArray={{
								p_CallComponentBool: true,
								p_texto: `
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
										distinctio earum repellat quaerat voluptatibus placeat nam,
										commodi optio pariatur est quia magnam eum harum corrupti dicta,
										aliquam sequi voluptate quas.`,
							}}
						/>
					</section>
					{/* Section: Text */}

					{/* Section: Links */}
					<section style={{ padding: 20 }}>
						{/*Grid row*/}
						<div className="row text-center">
							{/*Grid column*/}
							<div
								className="col-lg-2 col-md-3 mb-4 mb-md-0 justify-center"
								style={{ padding: "0%", margin: "0%" }}
							>
								<picture className="img-responsive picture justify-center">
									<source
										srcSet="./assets/images/logo@2x.png"
										type="image/svg+xml"
									/>
									<ComponentEtiquetaImg
										objectArray={{
											img_CallComponentBool: true,
											img_className: "img-logo_footer",
											img_src: "./assets/images/logo@2x.png",
											img_alt: "Logo del restaurante",
										}}
									/>
								</picture>
							</div>
							{/*Grid column*/}

							{/*Grid column*/}
							<div className="col-lg-5 col-md-9 mb-4 mb-md-10">
								<section>
									<ul
										className={objectsUl.datos.ul_className}
										style={objectsUl.datos.ul_style}
									>
										{objectsUl.datos.li.map((objecto, index) => {
											return (
												<ComponentEtiquetaLi
													key={index}
													objectArray={objecto}
												/>
											);
										})}
									</ul>
									<div
										className="row"
										style={{ paddingLeft: 60, textAlign: "left" }}
									>
										<div className="col-lg-12 col-md-6 mb-md-0 text-right">
											{arrayDescripcionContactoRest.map((objeto, index) => (
												<ComponentEtiquetaP key={index} objectArray={objeto} />
											))}
										</div>
									</div>
								</section>
							</div>
							{/*Grid column*/}

							{/*Grid column*/}
							<div className="col-lg-5 col-md-12 mb-4 mb-md-0">
								<p className="text-uppercase">UBICACIÓN</p>
								<br />
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15907.7370550156!2d-74.071814!3d4.605792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f30307cf%3A0xf863232d4608bc5b!2zQ2wuIDE5ICM3LTMwLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1631840312165!5m2!1ses-419!2sco"
									width="100%"
									height={200}
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									title="Ubicacion"
								/>
							</div>
							{/*Grid column*/}
						</div>
						{/*Grid row*/}
					</section>
					{/* Section: Links */}
				</div>
				{/* Grid container */}

				{/* Copyright */}
				<div
					className="text-center p-3"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					© 2020 Copyright: Grupo 10 - Talento JuvenTic
				</div>
				{/* Copyright */}
			</footer>
		</>
	);
});

export default Footer;
