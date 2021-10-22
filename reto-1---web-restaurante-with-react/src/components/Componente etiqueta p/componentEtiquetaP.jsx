import React from "react";
import PropTypes from "prop-types";

const componentEtiquetaP = (props) => {
	const { p_CallComponentBool, p_texto } = props.objectArray;
	if (p_CallComponentBool === true) {
		return <p>{p_texto}</p>;
	}
	return null;
};

componentEtiquetaP.propTypes = {
	objectArray: PropTypes.object,
};

export default componentEtiquetaP;
