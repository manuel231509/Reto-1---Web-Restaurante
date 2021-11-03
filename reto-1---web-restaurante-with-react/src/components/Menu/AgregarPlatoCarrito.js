import { sweetAlert } from "./SweetAlert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const agregarPlatoCarrito = (plato, campoValido) => {
	if (campoValido) {
		sweetAlert(
			"¿DESEAS AGREGAR EL PLATO AL CARRITO?",
			true,
			false,
			"SI",
			"NO",
			"SE AGREGO EL PLATO AL CARRITO CORRECTAMENTE...",
			"NO SE AGREGO EL PLATO AL CARRITO...",
			plato,
			MySwal
		);
	} else {
		MySwal.fire({
			position: "center",
			icon: "error",
			title: "ERROR",
			text: "NO SE HA PDIDO AGREGAR, POR FAVOR VERIFICA LA CANTIDAD QUE SEA CORRECTA",
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export { agregarPlatoCarrito };
