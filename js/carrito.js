const expresiones = {
	cantidad: /^[1-9]\d{0,4}$/,
};

const campos = [];

// div donde van a estar ubicados todos los productos en el carrito de compras
const productsContainer = document.querySelector(".contenedor-productos");
let colProductos = document.getElementById("col-productos");
let colMensajeVacio = document.getElementById("col-mensaje-vacio");

/* -------------- NOS PERMITE OBTENER LOS PLATILLOS DEL LOCALSTORAGE CONVERTIDOS EN JSON -------------- */
const obtenerPlatillosLocalStorage = () => {
	let platilloLS;
	if (localStorage.getItem("platillos") === null) {
		platilloLS = [];
	} else {
		platilloLS = JSON.parse(localStorage.getItem("platillos"));
	}
	return platilloLS;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE SABER SI UN PLATILLO EXISTE, DEVOLVIENDO TRUE O FALSE -------------- */
const saberPlatilloExistente = (platilloLS, idPlatillo) => {
	return platilloLS.id === idPlatillo ? true : false;
};
/* -------------- FIN -------------- */

const modificarCantidadPlatilloByIdlocalStorage = (idPlatillo, cantidad) => {
	let platilloLS = obtenerPlatillosLocalStorage();

	let platillo = platilloLS.find((platillo) => {
		return platillo.id === idPlatillo;
	});

	platillo.cantidad = cantidad;

	localStorage.setItem("platillos", JSON.stringify(platilloLS))
};

/* -------------- NOS PERMITE ELIMINAR UN PLATILLO SEGUN SU ID DEL LOCALSTORAGE -------------- */
const eliminarPlatilloByIdLocalStorage = (idPlatillo) => {
	let platilloLS = obtenerPlatillosLocalStorage();

	platilloLS.forEach((platillos, index) => {
		if (saberPlatilloExistente(platillos, idPlatillo)) {
			platilloLS.splice(index, 1);
		}
	});
	localStorage.setItem("platillos", JSON.stringify(platilloLS));
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE REMOVER POR EL ITEM CREADO,
  QUE SE ENCUENTRAN ALMACENADA EN EL LOCALSTORAGE -------------- */
const removerItemLocalStorage = () => {
	localStorage.removeItem("platillos");
};
/* -------------- FIN -------------- */

/* -------------- Class Formulario Input Error Activo -------------- */
const removeClassFormularioInputErrorActivo = (campo, error) => {
	document.querySelector(
		`#grupo__cantidad_${campo} .formulario__input-${error}`
	);

	// .classList.remove(`formulario__input-${error}-activo`);
};
const addClassFormularioInputErrorActivo = (campo, error) => {
	document
		.querySelector(`#grupo__cantidad_${campo} .formulario__input-${error}`)
		.classList.add(`formulario__input-${error}-activo`);
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Grupo Incorrecto -------------- */
const removeClassFormularioGrupoIncorrecto = (campo) => {
	document
		.getElementById(`grupo__cantidad_${campo}`)
		.classList.remove("formulario__grupo-incorrecto");
};
const addClassFormularioGrupoIncorrecto = (campo) => {
	document
		.getElementById(`grupo__cantidad_${campo}`)
		.classList.add("formulario__grupo-incorrecto");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Grupo Correcto -------------- */
const removeClassFormularioGrupoCorrecto = (campo) => {
	document
		.getElementById(`grupo__cantidad_${campo}`)
		.classList.remove("formulario__grupo-correcto");
};
const addClassFormularioGrupoCorrecto = (campo) => {
	document
		.getElementById(`grupo__cantidad_${campo}`)
		.classList.add("formulario__grupo-correcto");
};
/* -------------- Fin -------------- */

/* -------------- Class Check Circle -------------- */
const addClassCheckCircle = (campo) => {
	document
		.querySelector(`#grupo__cantidad_${campo} i`)
		.classList.add("fa-check-circle");
};
const removeClassCheckCircle = (campo) => {
	document
		.querySelector(`#grupo__cantidad_${campo} i`)
		.classList.remove("fa-check-circle");
};
/* -------------- Fin -------------- */

/* -------------- Class Times Circle -------------- */
const removeClassTimesCircle = (campo) => {
	document
		.querySelector(`#grupo__cantidad_${campo} i`)
		.classList.remove("fa-times-circle");
};
const addClassTimesCircle = (campo) => {
	document
		.querySelector(`#grupo__cantidad_${campo} i`)
		.classList.add("fa-times-circle");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Input Check -------------- */
const addClassFormularioInputCheck = (campo) => {
	document
		.querySelector(
			`#grupo__cantidad_${campo} .formulario__grupo-input .formulario__input-cantidad`
		)
		.classList.add("formulario__input-check");
};
const removeClassFormularioInputCheck = (campo) => {
	document
		.querySelector(
			`#grupo__cantidad_${campo} .formulario__grupo-input .formulario__input-cantidad`
		)
		.classList.remove("formulario__input-check");
};
/* -------------- Fin -------------- */

const addClassTrue = (campo, index, error) => {
	removeClassFormularioGrupoIncorrecto(campo);

	addClassFormularioGrupoCorrecto(campo);

	addClassCheckCircle(campo);

	removeClassTimesCircle(campo);

	removeClassFormularioInputErrorActivo(campo, error);

	addClassFormularioInputCheck(campo);

	campos[index].valor = true;
};

const addClassFalse = (campo, index, error) => {
	addClassFormularioGrupoIncorrecto(campo);

	removeClassFormularioGrupoCorrecto(campo);

	addClassTimesCircle(campo);

	removeClassCheckCircle(campo);

	addClassFormularioInputErrorActivo(campo, error);

	removeClassFormularioInputCheck(campo);

	campos[index].valor = false;
};

const validarCampo = (expresion, input, campo, index, error) => {
	if (expresion.test(input)) {
		addClassTrue(campo, index, error);
	} else {
		addClassFalse(campo, index, error);
	}
};

const validarCampoVacio = (expresion, valor, inputName, index) => {
	inputName = inputName.split("-")[1];

	if (valor == "") {
		removeClassFormularioInputErrorActivo(inputName, "error");
		validarCampo(expresion, valor, inputName, index, "error1");
	} else {
		removeClassFormularioInputErrorActivo(inputName, "error1");
		validarCampo(expresion, valor, inputName, index, "error");
	}
};

const validarFormulario = (e) => {
	validarCampoVacio(expresiones.cantidad, e.target.value, e.target.name);
};

let sumaPlatillos = 0;
const obtenerTotalCarrito = (platillos) => {
	precioString = platillos.valor.replace("$", "");
	cantidadString = platillos.cantidad;
	let cantidadNumber = parseFloat(cantidadString);
	let precioNumber = parseFloat(precioString);
	let valorPlatillos = precioNumber * cantidadNumber;
	sumaPlatillos += valorPlatillos;
	return sumaPlatillos;
};

let colPagarAhora = document.getElementById("col_pagar-ahora");

let platilloLS = obtenerPlatillosLocalStorage();

if (platilloLS.length == 0) {
	colMensajeVacio.classList.remove("d-none");
} else {
	colProductos.classList.remove("d-none");
	colPagarAhora.classList.remove("d-none");
}

platilloLS.forEach((platillos, index) => {
	const idPlatillo = platillos.id;
	const div = document.createElement("div");
	div.classList.add(
		"card",
		"mb-3",
		"p-3",
		"border",
		"border-danger",
		"border-3",
		"carrito-card"
	);
	div.setAttribute("id", idPlatillo);
	div.style.maxWidth = "100%";

	const Content = `
<div class="row">
	<div
		class="
			col-lg-4 col-md-12 col-sm-12
			p-0
			d-flex
			align-items-center
			flex-column
		"
	>
		<div class="card-body" style="max-height:100%;padding:0%">
			<img
				src="${platillos.imagen}"
				alt="foto-producto-carrito"
				class="imagen-carrito"
				style="width:100%;height:100%"
			/>
		</div>
	</div>
	<div class="col-lg-6 col-md-12 col-sm-12" style="padding: 0%">
		<div class="card-body">
			<h2
				class="card-title text-center mb-3"
				style="color: #5f2018; font-family: fantasy"
			>
				${platillos.nombre}
			</h2>
			<div class="text-start text-justify">
				<p class="card-text lh-6">
					${platillos.descripcion.substr(0, 150)}.....
				</p>
			</div>
		</div>
		<div id="card-body" class="card-body">
			<div class="row">
				<div class="col-cantidad col-lg-12 col-md-12">
					<p>CANTIDAD</p>
				</div>
			</div>
			<div class="row">
				<div class="col-minus-input-plus col-lg-12 col-md-12">
					<div class="row">
						<div class="col-minus col-lg-4 col-md-4 col-sm-4">
							<button
								id="btn_minus-${idPlatillo}"
								type="button"
								class="btn"
							>
								<i class="fas fa-minus"></i>
							</button>
						</div>

						<form
							id="formulario_carrito_input"
							class="formulario_carrito_input"
							novalidate
						>
							<!-- CAMPO CANTIDAD -->
							<div class="col-input col-lg-4 col-md-4 col-sm-4">
								<!-- GRUPO: Cantidad -->
								<div
									class="formulario__grupo"
									id="grupo__cantidad_${idPlatillo}"
								>
									<div
										class="
											d-flex
											flex-row
											formulario__grupo-input
										"
									>
										<input
											type="text"
											class="formulario__input-cantidad"
											name="input_cantidad-${idPlatillo}"
											id="input_cantidad-${idPlatillo}"
											value="${platillos.cantidad}"
											disabled
											required
										/>
										<i
											class="
												d-flex
												align-items-center
												formulario__validacion-estado
												fas
												fa-times-circle
											"
										>
										</i>
									</div>
									<p
										class="
											invalid-feedback
											formulario__input-error1
										"
									>
										EL CAMPO CANTIDAD ES OBLIGATORIO
									</p>
									<p
										class="
											invalid-feedback
											formulario__input-error
										"
									>
										EL CAMPO CANTIDAD SOLO PUEDE CONTENER
										NUMEROS, DEBE SER MAYOR QUE 0 Y TIENE UN
										MAXIMO DE CARACTERES DE 5.
									</p>
								</div>
							</div>
						</form>

						<div class="col-plus col-lg-4 col-md-4 col-sm-4">
							<button
								id="btn_plus-${idPlatillo}"
								type="button"
								class="btn"
							>
								<i class="fas fa-plus"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="col-lg-2 col-md-12 col-sm-12 d-flex"
		style="padding: 0%"
	>
		<div
			class="card-body d-flex align-items-center flex-column"
			style="padding: 0%; margin: 0%"
		>
			<div
				class="card-text d-flex align-self-stretch justify-content-center pt-3 pb-3"
			>
				<h2
					id="valor-${idPlatillo}"
					class="text-row"
					style="
						color: #5f2018;
						font-family: fantasy;
						font-size: 27px;
						margin: 0%;
					"
				>
					${platillos.valor}
				</h2>
			</div>
			<div class="card-text d-flex align-items-center" style="height:100%; padding:5px">
				<button
					id="btn_eliminar-${idPlatillo}"
					type="button"
					class="btn btn-danger boton-carrito-eliminar"
					style="height: 3rem; width: 3rem"
					>
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>			
	</div>
</div>
  `;

	div.innerHTML = Content;
	productsContainer.appendChild(div);
	campos.push({ cantidad_id: platillos.id, valor: false });
	let totalCarrito = obtenerTotalCarrito(platillos);

	document.getElementById("total-carrito").innerHTML = totalCarrito;

	validarCampoVacio(
		expresiones.cantidad,
		platillos.cantidad,
		`input_cantidad-${platillos.id}`,
		index
	);
});

const contenedor_productos = document.getElementById("contenedor-productos");

const contenedor_productos_card = document.querySelectorAll(
	"#contenedor-productos .card"
);
let lengthContenedorProductosCard = contenedor_productos_card.length;

const funcionInputCantidad = (index) => {
	const input_cantidad = document.querySelectorAll(
		"#formulario_carrito_input input"
	)[index];
	if (input_cantidad.value != "") {
		validarCampoVacio(
			expresiones.cantidad,
			input_cantidad.value,
			input_cantidad.name
		);
	}
	input_cantidad.addEventListener("keyup", validarFormulario);
	input_cantidad.addEventListener("blur", validarFormulario);
	input_cantidad.addEventListener("focus", validarFormulario);
};

let resul = 0;

const funcionMinusPlus = (idCard, index) => {
	let minus = document.getElementById(`btn_minus-${idCard}`);

	minus.addEventListener("click", () => {
		let input_cantidad = document.getElementById(`input_cantidad-${idCard}`);
		let cantidad = input_cantidad.value;

		if (cantidad != "") {
			cantidad = parseInt(cantidad);
			let rest = cantidad - 1;
			if (rest >= 1) {
				input_cantidad.value = rest;
				const valor = document
					.getElementById(`valor-${idCard}`)
					.innerText.split("$")[1];
				let total_apagar = document.getElementById("total-carrito");
				sumaPlatillos = sumaPlatillos - parseInt(valor);
				total_apagar.innerText = sumaPlatillos;
				modificarCantidadPlatilloByIdlocalStorage(idCard, rest);
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name,
				index
			);
		}
	});

	let plus = document.getElementById(`btn_plus-${idCard}`);
	plus.addEventListener("click", () => {
		let input_cantidad = document.getElementById(`input_cantidad-${idCard}`);
		let cant = input_cantidad.value;
		if (cant != "") {
			cant = parseInt(cant);
			let suma = cant + 1;
			if (suma >= 1) {
				input_cantidad.value = suma;
				const valor = document
					.getElementById(`valor-${idCard}`)
					.innerText.split("$")[1];
				let total_apagar = document.getElementById("total-carrito");
				sumaPlatillos = sumaPlatillos + parseInt(valor);
				total_apagar.innerText = sumaPlatillos;
				modificarCantidadPlatilloByIdlocalStorage(idCard, suma);
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name,
				index
			);
		}
	});
};

const eliminarPlato = (idCard, contenedor_productos, contenedor_producto) => {
	let btnDelete = document.getElementById(`btn_eliminar-${idCard}`);

	btnDelete.addEventListener("click", () => {
		Swal.fire({
			icon: "question",
			title: "¿DESEAS ELIMINAR ESTE PLATO DEL CARRITO?",
			showDenyButton: true,
			showConfirmButton: false,
			showCancelButton: true,
			denyButtonText: `Eliminar`,
		}).then((result) => {
			if (result.isDenied) {
				Swal.fire({
					icon: "success",
					title: "EL PLATO FUE ELIMINADO CON EXITO",
					showConfirmButton: false,
					timer: 1100,
				});
				const valor = document
					.getElementById(`valor-${idCard}`)
					.innerText.split("$")[1];

				let input_cantidad = document.getElementById(
					`input_cantidad-${idCard}`
				);

				let cantidad = input_cantidad.value;

				let total_apagar = document.getElementById("total-carrito");

				sumaPlatillos = sumaPlatillos - parseInt(valor) * parseInt(cantidad);
				total_apagar.innerText = sumaPlatillos;

				eliminarPlatilloByIdLocalStorage(idCard);
				contenedor_productos.removeChild(contenedor_producto);

				lengthContenedorProductosCard -= 1;

				if (lengthContenedorProductosCard == 0) {
					colProductos.classList.add("d-none");
					colPagarAhora.classList.add("d-none");
					colMensajeVacio.classList.remove("d-none");
				}
			} else {
				Swal.fire({
					icon: "error",
					title: "EL PLATO NO FUE ELIMINADO",
					showConfirmButton: false,
					timer: 1100,
				});
			}
		});
	});
};

contenedor_productos_card.forEach((contenedor_producto, index) => {
	const idCard = contenedor_producto.id;
	/* -------------- -------------- */
	funcionMinusPlus(idCard, index);
	/* -------------- -------------- */

	/* -------------- -------------- */
	/* funcionInputCantidad(index); */
	/* -------------- -------------- */

	/* -------------- -------------- */
	eliminarPlato(idCard, contenedor_productos, contenedor_producto);
	/* -------------- -------------- */
});

//----------------Validar campos del formulario--------------------
const funcionSweetAlert = (
	title,
	showDenyButton,
	showCancelButton,
	confirmButtonText,
	denyButtonText,
	mensajeSuccess,
	mensajeInfo
) => {
	Swal.fire({
		title: title,
		showDenyButton: showDenyButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmButtonText,
		denyButtonText: denyButtonText,
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			let total_carrito = document.getElementById("total-carrito");
			const campos = {
				to_name: document.getElementById("nombre").value,
				correo: document.getElementById("email").value,
				message:
					"SE REALIZÓ LA COMPRA DE LOS PLATILLOS, EL TOTAL DEL PEDIDO ES DE: $" +
					total_carrito.innerText,
			};
			sendMail(campos);
			removerItemLocalStorage();
			contenedor_productos_card.forEach((e) => {
				contenedor_productos.removeChild(e);
			});
			total_carrito.innerText = "";
			Swal.fire(mensajeSuccess, "", "success");
		} else if (result.isDenied || result.isDismissed) {
			Swal.fire(mensajeInfo, "", "info");
		}
	});
};

(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener("submit", function (event) {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.preventDefault();
				event.stopPropagation();

				funcionSweetAlert(
					"¿DESEAS CONTINUAR CON EL PEDIDO?",
					true,
					false,
					"SI",
					"NO",
					"SE REALIZO CON EXITO EL PEDIDO...",
					"NO SE REALIZO EL PEDIDO..."
				);
			}

			form.classList.add("was-validated");
		});
	});
})();

/* -------------- MANEJO DEL LOCALSTORAGE -------------- */
/*  */

/* -------------- FIN -------------- */

/* -------------- NOS PERMITE LEER EL LOCALSTORAGE Y NOS DEVULEVE TRUE O FALSE SI ALGUN ELEMENTO
   YA FUE CREADO EN EL LOCALSTORAGE -------------- */
/*const leerLocalStorage = (platilloLS, platillo) => {
  let saber = platilloLS.some((platilloLS) => {
    return saberPlatilloExistente(platilloLS, platillo);
  });
  return saber;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE VACIAR EL LOCALSTORAGE -------------- */
/*const vaciarLocalStorage = () => {
  localStorage.clear();
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE GUARDAR EL PLATILLO SELECCIONADO EN EL LOCALSTORAGE */
/*const guardarSeleccionMenuLocalStorage = (platillo) => {
  let platilloLS = obtenerPlatillosLocalStorage();
  if (!leerLocalStorage(platilloLS, platillo)) {
    platilloLS.push(platillo);
    localStorage.setItem("platillos", JSON.stringify(platilloLS));
    alert("SE HA AGREGADO CORRECTAMENTE AL CARRITO");
  } else {
    alert(
      "EL PLATILLO YA FUE AGREGADO EN EL CARRITO, POR FAVOR REVISA EL CARRITO"
    );
  }
};*/
/* --------------FIN -------------- */
/* -------------- FIN -------------- */
