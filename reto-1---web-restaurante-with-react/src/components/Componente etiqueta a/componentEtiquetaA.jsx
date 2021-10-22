import React from "react";
import PropTypes from "prop-types";
import ComponentEtiquetaImg from "../Componente etiqueta img/componentEtiquetaImg";
import ComponentEtiquetaP from "../Componente etiqueta p/componentEtiquetaP";
import ComponentEtiquetaFontAwesomeIcon from "../Componente etiqueta FontAwesomeIcon/componentEtiquetaFontAwesomeIcon";

const componentEtiquetaA = (props) => {
	const { a_CallComponentBool, a_className, a_href, a_role } =
		props.objectArray;
	if (a_CallComponentBool === true) {
		return (
			<a className={a_className} href={a_href} role={a_role}>
				<ComponentEtiquetaFontAwesomeIcon objectArray={props.objectArray} />
				<ComponentEtiquetaImg objectArray={props.objectArray} />
				<ComponentEtiquetaP objectArray={props.objectArray} />
			</a>
		);
	}
	return null;
};

componentEtiquetaA.propTypes = {
	objectArray: PropTypes.object,
};

export default componentEtiquetaA;
