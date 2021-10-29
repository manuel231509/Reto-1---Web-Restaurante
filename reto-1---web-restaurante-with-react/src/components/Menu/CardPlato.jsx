import React, { useContext } from "react";
import {
	faMinus,
	faPlus,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import PlatoContext from "../../contexts/PlatoContext";

const CardPlato = ({ plato }) => {
	const { selectedDish, minus, inputs, plus, handleInputsChange } =
		useContext(PlatoContext);

	console.log("CardPlato");

	return (
		<>
			<div
				key={plato.idPlato}
				className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3"
			>
				<div
					id="cardObjectPlato"
					className="card card-menu border border-danger border-3"
				>
					<div
						data-bs-toggle="modal"
						data-bs-target="#modalDescripcionProducto"
						onClick={() => {
							console.log("Click");
							selectedDish(plato);
						}}
					>
						<img
							className="card-img-top"
							src={plato.urlImagen}
							alt={plato.titulo}
							width="300"
							height="300"
							style={{ objectFit: "cover" }}
						/>

						<div className="card-body">
							<div className="card-title">
								<h5>{plato.titulo}</h5>
							</div>
							<p className="card-text">
								{plato.descripcion.substr(0, 150) + "........."}
							</p>
						</div>
					</div>

					<div className="card-body card-body-carrito mt-lg-1 mt-md-1 mt-sm-1">
						<div className="row">
							<div className="col-cantidad col-lg-12 col-md-12">
								<p>CANTIDAD</p>
							</div>
						</div>
						<div className="row">
							<div className="col-minus-input-plus col-lg-12 col-md-12">
								<div className="row">
									<div className="col-minus col-lg-4 col-md-4 col-sm-4">
										<button
											id={"btn_minus-" + plato.idPlato}
											type="button"
											className="btn"
											onClick={(e) => {
												console.log("Click en el boton de -");
												console.log(e);
												console.log("IdPlato");
												console.log(plato.idPlato);
												minus(plato.idPlato);
											}}
										>
											<EtiquetaFontAwesomeIcon
												objectArray={{
													fontAwesomeIcon_CallComponentBool: true,
													fontAwesomeIcon_className: "fas",
													fontAwesomeIcon_icon: faMinus,
												}}
											/>
										</button>
									</div>
									<form
										id={"formulario_menu-" + plato.idPlato}
										className="formulario_menu"
										noValidate
									>
										{/* CAMPO CANTIDAD */}
										<div className="col-input col-lg-4 col-md-4 col-sm-4">
											{/* GRUPO: Cantidad */}
											<div
												className="formulario__grupo"
												id={"grupo__cantidad_" + plato.idPlato}
											>
												<div className="d-flex flex-row formulario__grupo-input">
													<input
														type="text"
														id={"input_cantidad-" + plato.idPlato}
														className="formulario__input-cantidad"
														name={"input_cantidad_" + plato.idPlato}
														value={
															inputs[`input_cantidad_${plato.idPlato}`] || "1"
														}
														onChange={(e) => handleInputsChange(e)}
														required
													/>
													<i className="d-flex align-items-center formulario__validacion-estado fas fa-times-circle"></i>
												</div>
												<p className="invalid-feedback formulario__input-error1">
													EL CAMPO CANTIDAD ES OBLIGATORIO
												</p>
												<p className="invalid-feedback formulario__input-error">
													EL CAMPO CANTIDAD SOLO PUEDE CONTENER NUMEROS, DEBE
													SER MAYOR QUE 0 Y TIENE UN MAXIMO DE CARACTERES DE 5.
												</p>
											</div>
										</div>
									</form>
									<div className="col-plus col-lg-4 col-md-4 col-sm-4">
										<button
											id={"btn_plus-" + plato.idPlato}
											type="button"
											className="btn"
											onClick={(e) => {
												console.log("Click en el boton de +");
												console.log(e);
												plus(plato.idPlato);
											}}
										>
											<EtiquetaFontAwesomeIcon
												objectArray={{
													fontAwesomeIcon_CallComponentBool: true,
													fontAwesomeIcon_className: "fas",
													fontAwesomeIcon_icon: faPlus,
												}}
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="div-agregar-carrito">
									<button
										id={"btn-agregar-carrito-" + plato.idPlato}
										type="button"
										className="btn formulario__btn-agregar-carrito"
									>
										<EtiquetaFontAwesomeIcon
											objectArray={{
												fontAwesomeIcon_CallComponentBool: true,
												fontAwesomeIcon_className: "fas",
												fontAwesomeIcon_icon: faShoppingCart,
											}}
										/>
										<p>AÑADIR AL CARRITO</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardPlato;
