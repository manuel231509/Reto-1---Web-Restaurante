import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import { plus } from "./CardPlatoJS";

const ColumnaPlus = ({ plato, objeto, inputContext }) => {
	const { inputs, cargarCampos, actualizarTotalCarrito } = inputContext;
	return (
		<>
			<div className="col-plus col-lg-4 col-md-4 col-sm-4">
				<button
					id={"btn_plus-" + plato.idPlato}
					type="button"
					className="btn"
					onClick={(e) => {
						e.preventDefault();
						plus(
							plato,
							inputs,
							cargarCampos,
							actualizarTotalCarrito,
							objeto.nameComponente
						);
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
		</>
	);
};

export default ColumnaPlus;
