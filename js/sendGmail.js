(() => {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init("user_eopkpx9H2t1yut2zuHKue");
})();

const sendMail = (campos) => {
	console.log("ENTRA");
	console.log(campos);
	const tempParams = {
		from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
		to_name: campos["nombres"].name + " " + campos["apellidos"].name,
		nombres: campos["nombres"].name,
		apellidos: campos["apellidos"].name,
		cedula: campos["cedula"].name,
		correo: campos["correo"].name,
		telefono: campos["telefono"].name,
		servicio: campos["servicio"].name,
		cantidadPersonas: campos["cantidadPersonas"].name,
		fecha: campos["fecha"].name,
		hora: campos["hora"].name,
		indicacionesEspeciales: campos["indicacionesEspeciales"].name,
		message:
			"SE REALIZO LA RESERVA EN LA FECHA " +
			campos["fecha"].name +
			" A LA HORA " +
			campos["hora"].name,
		cc: campos["correo"].name,
	};

	emailjs
		.send("service_exblhhd", "template_7y7270j", tempParams)
		.then((res) => {
			console.log("success", res.status);
		});
};
