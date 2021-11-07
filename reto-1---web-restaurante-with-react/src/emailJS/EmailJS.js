import emailjs from "emailjs-com";
import { sweetAlert } from "../sweetAlert/SweetAlert";

const sendMailReserva = (valido, reiniciarCampos, reiniciarCampoValido) => {
	const tempParams = {
		cc: valido["correo"].name,
		to_name: valido["nombres"].name + " " + valido["apellidos"].name,
		nombres: valido["nombres"].name,
		apellidos: valido["apellidos"].name,
		cedula: valido["cedula"].name,
		correo: valido["correo"].name,
		telefono: valido["telefono"].name,
		servicio: valido["servicio"].name,
		cantidadPersonas: valido["cantidadPersonas"].name,
		fecha: valido["fecha"].name,
		hora: valido["hora"].name,
		indicacionesEspeciales: valido["indicacionesEspeciales"].name,
		reply_to: "manuel231509@gmail.com",
		message:
			"SE REALIZO LA RESERVA PARA EL " +
			valido["fecha"].name +
			" A LA(S) " +
			valido["hora"].name,
		from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
	};
	const serviceID = "service_exblhhd",
		templateID = "template_7y7270j",
		userID = "user_eopkpx9H2t1yut2zuHKue",
		messageSuccess = "EL CORREO FUE ENVIADO CON EXITO";
	sendMail(
		serviceID,
		templateID,
		tempParams,
		userID,
		messageSuccess,
		reiniciarCampos,
		reiniciarCampoValido
	);
};

const sendMail = async (
	serviceID,
	templateID,
	templateParams,
	userID,
	messageSuccess,
	reiniciarCampos,
	reiniciarCampoValido
) => {
	const res = await emailjs
		.send(serviceID, templateID, templateParams, userID)
		.then(
			(resul) => {
				sweetAlert("center", "success", "", messageSuccess, false, 2000);
				reiniciarCampos();
				reiniciarCampoValido();
			},
			(error) => {
				sweetAlert("center", "error", "", error.text, false, 9000);
			}
		);
	return res;
};

export { sendMailReserva };
