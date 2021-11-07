import React from "react";
import DatosServicios from "../../consts json/Servicios/DatosServicios.json";

const CardServicio = () => {
	return (
		<>
			<div className="row">
				{DatosServicios.map((servicio, index) => {
					return (
						<div key={index} className="col-lg-6 col-md-12 p-4">
							<div className="card card-servicios">
								<img
									src={servicio.imagen}
									className="card-img-top img-fluid p-4 mx-auto my-auto"
									alt={servicio.nombre}
								/>
								<div className="card-body">
									<h5
										className="card-title fs-1"
										style={{ color: "rgb(58, 35, 9)" }}
									>
										{servicio.nombre}
									</h5>
									<p
										className="card-text my-4 fs-5"
										style={{ textAlign: "justify" }}
									>
										{servicio.descripcion}
									</p>
									<a
										href="/reserva"
										className="btn btn-lg boton-contacto"
										style={{ backgroundColor: "rgb(255, 217, 0)" }}
										type="button"
									>
										<i className="fas fa-calendar-plus" />
										<span>¡Reserva ya!</span>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CardServicio;
