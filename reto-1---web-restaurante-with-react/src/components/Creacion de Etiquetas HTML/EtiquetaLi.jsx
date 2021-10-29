import React from "react";
import PropTypes from "prop-types";
import ComponentEtiquetaA from "./EtiquetaA";

const EtiquetaLi = (props) => {
	const { li_CallComponentBool, li_className, li_type, li_style } =
		props.objectArray;
	if (li_CallComponentBool === true) {
		return (
			<>
				<li className={li_className} type={li_type} style={li_style}>
					<ComponentEtiquetaA objectArray={props.objectArray} />
				</li>
			</>
		);
	}
	return null;
};

EtiquetaLi.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaLi;
