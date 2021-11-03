import React from "react";
import CardsPlatos from "../components/Menu/Card Menu/CardsPlatos";
import ModalDescripcionProducto from "../components/Menu/Modal Descripcion/ModalDescripcionProducto";

import PlatoProvider from "../contexts/PlatoProvider";
import "../components/Menu/Styles/estilos-menu.css";

const Menu = () => {
	console.log("Menu");

	return (
		<>
			<PlatoProvider>
				{/* <!-- Menu --> */}
				<div className="container card-principal">
					<div className="card mt-4">
						<div id="card-body" className="card-body">
							<div className="d-flex flex-column">
								<h1 className="card-title mt-5 mb-3 text-center">MENU</h1>
								<button
									className="btn btn-primary justify-content-center mb-3"
									type="button"
								>
									<i className="fas fa-file-download me-3" />
									DESCARGAR EL MENÚ
								</button>
							</div>
							<CardsPlatos />
						</div>
					</div>
				</div>
				{/* <!-- Menu --> */}

				{/* <!-- Modal Descripcion Producto --> */}
				<ModalDescripcionProducto />
				{/* <!-- Modal Descripcion Producto --> */}
			</PlatoProvider>
		</>
	);
};

export default Menu;
