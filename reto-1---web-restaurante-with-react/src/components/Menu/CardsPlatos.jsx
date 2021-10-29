import React, { useCallback, useContext, useEffect } from "react";
import PlatoContext from "../../contexts/PlatoContext";
import CardPlato from "./CardPlato";

const CardsPlato = () => {
	const { listMenu, cargarInputs } = useContext(PlatoContext);

	const LlenarInputs = useCallback(() => {
		return (
			<>
				{listMenu.map((plato, index) => {
					Object.assign(plato, { idPlato: index });
					cargarInputs(1, `input_cantidad_${plato.idPlato}`);
					return null;
				})}
			</>
		);
	}, [listMenu, cargarInputs]);

	useEffect(() => {
		LlenarInputs();
	}, []);

	return (
		<>
			<div className="row card-hijo">
				{listMenu.map((plato, index) => {
					Object.assign(plato, { idPlato: index });
					return <CardPlato key={index} plato={plato} />;
				})}
			</div>
		</>
	);
};

export default CardsPlato;
