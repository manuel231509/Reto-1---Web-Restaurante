import React, { useContext } from "react";

import PlatoContext from "../../../contexts/PlatoContext";

import RowCantidad from "./RowCantidad";

const CardPlato = ({ plato }) => {
	const { selectedDish } = useContext(PlatoContext);

	return (
		<>
			<div
				key={plato.idPlato}
				className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3"
			>
				<div
					id="cardObjectPlato"
					className="card card-menu border border-danger border-3"
				>
					<div
						data-bs-toggle="modal"
						data-bs-target="#modalDescripcionProducto"
						onClick={() => {
							selectedDish(plato);
						}}
					>
						<img
							className="card-img-top"
							src={plato.urlImagen}
							alt={plato.titulo}
							width="300"
							height="300"
							style={{ objectFit: "cover" }}
						/>

						<div className="card-body">
							<div className="card-title">
								<h5>{plato.titulo}</h5>
							</div>
							<p className="card-text">
								{plato.descripcion.substr(0, 150) + "........."}
							</p>
						</div>
					</div>

					<div className="card-body card-body-carrito mt-lg-1 mt-md-1 mt-sm-1">
						<div className="row">
							<div className="col-cantidad col-lg-12 col-md-12">
								<p htmlFor={`input_cantidad_${plato.idPlato}`}>CANTIDAD</p>
							</div>
						</div>
						<RowCantidad plato={plato} />
					</div>
				</div>
			</div>
		</>
	);
};

export default CardPlato;
