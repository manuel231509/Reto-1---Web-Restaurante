import React from "react";
import PropTypes from "prop-types";
import ComponentEtiquetaImg from "./EtiquetaImg";
import ComponentEtiquetaP from "./EtiquetaP";
import ComponentEtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";

const EtiquetaA = (props) => {
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

EtiquetaA.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaA;
