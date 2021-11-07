import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EtiquetaFontAwesomeIcon = (props) => {
	const {
		fontAwesomeIcon_CallComponentBool,
		fontAwesomeIcon_className,
		fontAwesomeIcon_icon,
		fontAwesomeIcon_style,
	} = props.objectArray;
	if (fontAwesomeIcon_CallComponentBool) {

		return (
			<FontAwesomeIcon
				className={fontAwesomeIcon_className}
				icon={fontAwesomeIcon_icon}
				style={fontAwesomeIcon_style}
			/>
		);
	}
	return null;
};

EtiquetaFontAwesomeIcon.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaFontAwesomeIcon;
