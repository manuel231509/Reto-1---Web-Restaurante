import React, { useContext } from "react";
import CantidadContext from "../../contexts/Inputs/InputsContext";
import { handleInputsChange } from "../Inputs/ValidacionCampos";

const EtiquetaCheckBox = ({ objeto }) => {
	const { inputs, cargarCampos, campoValido } = useContext(CantidadContext);

	const inicializarCheckBox = (valorInicial, nombreInput) => {
		if (inputs[nombreInput]?.valor === undefined) {
			cargarCampos(valorInicial, nombreInput, false, {
				error: false,
				error1: false,
			});
		}
	};

	if (objeto.checkBox_CallComponentBool) {
		return (
			<>
				<div className="formulario__grupo" id={objeto.divIdGrupo}>
					<label
						htmlFor={`${objeto.labelHtmlFor}_${objeto.id}`}
						className={objeto.labelClassName}
					>
						<input
							id={`${objeto.checkBoxId}_${objeto.id}`}
							type={objeto.checkBoxType}
							name={`${objeto.checkBoxId}_${objeto.id}`}
							value={
								inputs[`${objeto.checkBoxId}_${objeto.id}`]?.valor === undefined
									? inicializarCheckBox(
											objeto.valorInicial,
											`${objeto.checkBoxId}_${objeto.id}`
									  )
									: inputs[`${objeto.checkBoxId}_${objeto.id}`].valor
							}
							onChange={(e) => {
								handleInputsChange(
									{ target: { value: e.target.checked, name: e.target.name } },
									cargarCampos,
									campoValido
								);
							}}
							className={objeto.checkBoxClassName}
						/>
						{objeto.labelText}
					</label>
				</div>
			</>
		);
	}
	return null;
};

export default EtiquetaCheckBox;
