import React from "react";
import "../css/estilos-menu.css";

const Menu = () => {
	const MenuJs = () => {
		return <script type="text/javascript" src="../js/menu.js" />;
	};
	return (
		<>
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
					</div>
				</div>
			</div>
			<MenuJs />
		</>
	);
};

export default Menu;
