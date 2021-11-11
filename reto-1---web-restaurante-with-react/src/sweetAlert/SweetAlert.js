import { guardarSeleccionMenuLocalStorage } from "../localStorage/LocalStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetAlertMenuAgregarCarrito = (
	title,
	showDenyButton,
	showCancelButton,
	confirmButtonText,
	denyButtonText,
	mensajeSuccess,
	mensajeInfo,
	objeto
) => {
	MySwal.fire({
		icon: "question",
		title: title,
		showDenyButton: showDenyButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmButtonText,
		denyButtonText: denyButtonText,
	}).then((result) => {
		if (result.isConfirmed) {
			if (guardarSeleccionMenuLocalStorage(objeto, "platillos")) {
				MySwal.fire({
					icon: "success",
					text: mensajeSuccess,
					showConfirmButton: false,
					timer: 2000,
				});
			} else {
				MySwal.fire({
					icon: "info",
					text:
						"EL PLATO SELECCIONADO, YA FUE AGREGADO AL CARRITO,\n" +
						"POR FAVOR REVISE EL CARRITO",
					showConfirmButton: false,
					timer: 2000,
				});
			}
		} else if (result.isDenied || result.isDismissed) {
			MySwal.fire({
				icon: "error",
				title: "CANCELADO",
				text: mensajeInfo,
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});
};

const sweetAlertBtnEliminarPlatillo = (
	eliminarPlatilloByIdLocalStorage,
	handleRemoveItem,
	platillo,
	actualizarTotalCarrito
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS ELIMINAR ESTE PLATO DEL CARRITO?",
		showDenyButton: true,
		showConfirmButton: false,
		showCancelButton: true,
		denyButtonText: `Eliminar`,
	}).then((result) => {
		if (result.isDenied) {
			eliminarPlatilloByIdLocalStorage(platillo, "platillos");
			handleRemoveItem(platillo.index);
			const valorTotal = platillo.valor.split("$")[1] * platillo.cantidad;
			actualizarTotalCarrito((total) => total - valorTotal);
			Swal.fire({
				icon: "success",
				title: "EL PLATO FUE ELIMINADO CON EXITO",
				showConfirmButton: false,
				timer: 1100,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "EL PLATO NO FUE ELIMINADO",
				showConfirmButton: false,
				timer: 1100,
			});
		}
	});
};

const sweetAlert = (position, icon, title, text, showConfirmButton, timer) => {
	MySwal.fire({
		position: position,
		icon: icon,
		title: title,
		text: text,
		showConfirmButton: showConfirmButton,
		timer: timer,
	});
};

export {
	sweetAlertMenuAgregarCarrito,
	sweetAlert,
	sweetAlertBtnEliminarPlatillo,
};
