import React from "react";
import { Link } from "react-router-dom";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import EtiquetaImg from "../Creacion de Etiquetas HTML/EtiquetaImg";
import EtiquetaP from "../Creacion de Etiquetas HTML/EtiquetaP";

const EtiquetaLink = (props) => {
	const {
		link_CallComponentBool,
		link_className,
		link_to,
		link_role,
		link_style,
	} = props.objectArray;

	if (link_CallComponentBool === true) {
		return (
			<>
				<Link
					className={link_className}
					link_role={link_role}
					to={link_to}
					style={link_style}
				>
					<EtiquetaFontAwesomeIcon objectArray={props.objectArray} />
					<EtiquetaImg objectArray={props.objectArray} />
					<EtiquetaP objectArray={props.objectArray} />
				</Link>
			</>
		);
	}
	return null;
};

export default EtiquetaLink;
