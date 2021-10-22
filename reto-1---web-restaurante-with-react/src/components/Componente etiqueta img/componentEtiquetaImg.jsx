import React from "react";
import PropTypes from "prop-types";

const componentEtiquetaImg = (props) => {
	const { img_CallComponentBool, img_className, img_src, img_alt } =
		props.objectArray;
	if (img_CallComponentBool === true) {
		return <img src={img_src} className={img_className} alt={img_alt} />;
	}
	return null;
};

componentEtiquetaImg.propTypes = {
	objectArray: PropTypes.object,
};

export default componentEtiquetaImg;
