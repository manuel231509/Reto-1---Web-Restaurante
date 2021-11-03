import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { agregarPlatoCarrito } from "../AgregarPlatoCarrito";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";

const RowAgregarCarrito = ({ plato, inputs }) => {
	return (
		<>
			<div className="row">
				<div className="col-lg-12 col-md-12">
					<div className="div-agregar-carrito">
						<button
							id={"btn-agregar-carrito-" + plato.idPlato}
							type="button"
							className="btn formulario__btn-agregar-carrito"
							onClick={() => {
								Object.assign(plato, {
									cantidad: inputs[`input_cantidad_${plato.idPlato}`]?.valor,
								});
								const nombreInput = `input_cantidad_${plato.idPlato}`;
								const campoValido = inputs[nombreInput]?.campoValido;
								agregarPlatoCarrito(plato, campoValido);
							}}
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
		</>
	);
};

export default RowAgregarCarrito;
