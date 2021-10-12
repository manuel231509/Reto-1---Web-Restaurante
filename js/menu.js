let idCardBody = document.getElementById("card-body");

let listadoMenu = [
	{
		nombre: "EXAMPLE",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$20000",
		imagen: "./img/menu1.jpg",
	},
	{
		nombre: "EXAMPLE 1",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$25000",
		imagen: "./img/menu2_grilles-chicken-steak-with-teriyaki-sauce.jpg",
	},
	{
		nombre: "EXAMPLE 2",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$30000",
		imagen: "./img/menu3_lamb-steak-pieces-with-sauces-grill.jpg",
	},
	{
		nombre: "EXAMPLE 3",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$35000",
		imagen: "./img/hamburguesa.png",
	},
	{
		nombre: "EXAMPLE 4",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$40000",
		imagen: "./img/1.jpg",
	},
	{
		nombre: "EXAMPLE 5",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$45000",
		imagen: "./img/2.jpg",
	},
	{
		nombre: "EXAMPLE 6",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$45000",
		imagen: "./img/3.jpg",
	},
	{
		nombre: "EXAMPLE 7",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$50000",
		imagen: "./img/reuniones.jpg",
	},
	{
		nombre: "EXAMPLE 8",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo" +
			"architecto cumque eligendi nisi voluptatum doloribus quidem autem," +
			"quibusdam molestias quis deserunt vitae non facere nobis! Est in," +
			"id temporibus consequuntur vel, vitae architecto nemo at voluptate" +
			"itaque reprehenderit similique earum aperiam ipsa ratione." +
			"Consectetur distinctio dolor odit minima mollitia tempore nobis" +
			"laudantium id debitis ullam et itaque, dolorum explicabo.",
		valor: "$55000",
		imagen: "./img/celebraciones.jpg",
	},
];

const expresiones = {
	cantidad: /^[1-9]\d{0,4}$/,
};

const campos = [];

/* ------------- Crea un nuevo card con su repectivo menu ------------- */
const agregandoListadoMenu = (i, divRow) => {
	let divRowCol = document.createElement("div");
	divRowCol.classList.add("col-lg-4", "col-md-12", "col-sm-12", "col-xs-12");

	let divRowColCard = document.createElement("div");
	divRowColCard.classList.add(
		"card",
		"card-menu",
		"border",
		"border-danger",
		"border-3"
	);

	let divRowColCard_DataModal = document.createElement("div");
	divRowColCard_DataModal.setAttribute("data-bs-toggle", "modal");
	divRowColCard_DataModal.setAttribute(
		"data-bs-target",
		"#modalDescripcionProducto"
	);

	let divRowColCard_DataModalImg = document.createElement("img");
	divRowColCard_DataModalImg.setAttribute("src", listadoMenu[i].imagen);
	divRowColCard_DataModalImg.classList.add("card-img-top");
	divRowColCard_DataModalImg.setAttribute("alt", "...");
	divRowColCard_DataModalImg.setAttribute("width", "300");
	divRowColCard_DataModalImg.setAttribute("height", "300");

	let divRowColCard_DataModalCardBody = document.createElement("div");
	divRowColCard_DataModalCardBody.classList.add("card-body");

	let divRowColCard_DataModalCardBody_CardTitle = document.createElement("div");
	divRowColCard_DataModalCardBody_CardTitle.classList.add("card-title");

	let divRowColCard_DataModalCardBody_CardTitleH5 =
		document.createElement("h5");
	divRowColCard_DataModalCardBody_CardTitleH5.innerText = "EXAMPLE";

	let divRowColCard_DataModalCardBody_P = document.createElement("p");
	divRowColCard_DataModalCardBody_P.classList.add("card-text");
	divRowColCard_DataModalCardBody_P.innerText =
		listadoMenu[i].descripcion.substr(0, 150) + ".........";

	let divRowColCard_CardBodyCarrito = document.createElement("div");
	divRowColCard_CardBodyCarrito.classList.add(
		"card-body",
		"card-body-carrito",
		"mt-lg-1",
		"mt-md-1",
		"mt-sm-1"
	);

	let htmCardBodyCarrito = `<div class="row">
	<div class="col-cantidad col-lg-12 col-md-12">
		<p>CANTIDAD</p>
	</div>
</div>
<div class="row">
	<div class="col-minus-input-plus col-lg-12 col-md-12">
		<div class="row">
			<div class="col-minus col-lg-4 col-md-4 col-sm-4">
				<button id=btn_minus-${i} type="button" class="btn">
					<i class="fas fa-minus"></i>
				</button>
			</div>

			<form
				id=formulario_menu-${i}
				class="formulario_menu"
				novalidate
			>
				<!-- CAMPO CANTIDAD -->
				<div class="col-input col-lg-4 col-md-4 col-sm-4">
					<!-- GRUPO: Cantidad -->
					<div class="formulario__grupo" id="grupo__cantidad_${i}">
						<div class="d-flex flex-row formulario__grupo-input">
							<input
								type="text"
								id=input_cantidad-${i}
								class="formulario__input-cantidad"
								name="input_cantidad_${i}"
								id="input_cantidad_${i}"
								value="1"
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
						<p class="invalid-feedback formulario__input-error1">
							EL CAMPO CANTIDAD ES OBLIGATORIO
						</p>
						<p class="invalid-feedback formulario__input-error">
							EL CAMPO CANTIDAD SOLO PUEDE CONTENER NUMEROS, 
							DEBE SER MAYOR QUE 0 Y TIENE UN MAXIMO DE CARACTERES DE 5.
						</p>
					</div>
				</div>
			</form>

			<div class="col-plus col-lg-4 col-md-4 col-sm-4">
				<button id=btn_plus-${i} type="button" class="btn">
					<i class="fas fa-plus"></i>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-lg-12 col-md-12">
		<div class="div-agregar-carrito">
			<button id="btn-agregar-carrito-${i}" type="button" class="btn formulario__btn-agregar-carrito">
				<i class="fas fa-shopping-cart"></i>
				<p>AÑADIR AL CARRITO</p>
			</button>
			</div>
	</div>
</div>`;

	divRowColCard_CardBodyCarrito.innerHTML = htmCardBodyCarrito;

	divRowColCard_DataModalCardBody_CardTitle.appendChild(
		divRowColCard_DataModalCardBody_CardTitleH5
	);

	divRowColCard_DataModalCardBody_CardTitleH5.innerText = listadoMenu[i].nombre;

	divRowColCard_DataModalCardBody.appendChild(
		divRowColCard_DataModalCardBody_CardTitle
	);
	divRowColCard_DataModalCardBody.appendChild(
		divRowColCard_DataModalCardBody_P
	);

	divRowColCard_DataModal.appendChild(divRowColCard_DataModalImg);
	divRowColCard_DataModal.appendChild(divRowColCard_DataModalCardBody);

	divRowColCard.appendChild(divRowColCard_DataModal);
	divRowColCard.appendChild(divRowColCard_CardBodyCarrito);

	divRowColCard.setAttribute("id", i);
	divRowCol.appendChild(divRowColCard);

	divRow.appendChild(divRowCol);

	campos.push({ cantidad_id: i, valor: false });
};
/* ------------- Fin ------------- */

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

/* ------------- Esta funcion Obtiene el numero de filas y crea menu segun las filas y las columnas ------------- */
(function () {
	"Lista Menu";
	let tamaño = listadoMenu.length;
	let divTamaño = tamaño / 3;
	let cantFilas = divTamaño % 1 == 0 ? divTamaño : Math.round(divTamaño) + 1;

	let i = 0;
	for (let index = 1; index <= cantFilas; index++) {
		let cont = 0;

		let divRow = document.createElement("div");
		divRow.classList.add("row", "mb-3", "card-hijo");

		idCardBody.appendChild(divRow);
		while (cont < 3 && i < tamaño) {
			agregandoListadoMenu(i, divRow);
			i++;
			cont++;
		}
	}
})();
/* ------------- Fin ------------- */

/* -------------- Class Formulario Input Error Activo -------------- */
const removeClassFormularioInputErrorActivo = (campo, error) => {
	document
		.querySelector(`#grupo__cantidad_${campo} .formulario__input-${error}`)
		.classList.remove(`formulario__input-${error}-activo`);
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

const addClassTrue = (campo, error) => {
	removeClassFormularioGrupoIncorrecto(campo);

	addClassFormularioGrupoCorrecto(campo);

	addClassCheckCircle(campo);

	removeClassTimesCircle(campo);

	removeClassFormularioInputErrorActivo(campo, error);

	addClassFormularioInputCheck(campo);

	campos[campo].valor = true;
};

const addClassFalse = (campo, error) => {
	addClassFormularioGrupoIncorrecto(campo);

	removeClassFormularioGrupoCorrecto(campo);

	addClassTimesCircle(campo);

	removeClassCheckCircle(campo);

	addClassFormularioInputErrorActivo(campo, error);

	removeClassFormularioInputCheck(campo);

	campos[campo].valor = false;
};

const validarCampo = (expresion, input, campo, error) => {
	if (expresion.test(input)) {
		addClassTrue(campo, error);
	} else {
		addClassFalse(campo, error);
	}
};

const validarCampoVacio = (expresion, valor, inputName) => {
	inputName = inputName.split("_")[2];
	if (valor == "") {
		removeClassFormularioInputErrorActivo(inputName, "error");
		validarCampo(expresion, valor, inputName, "error1");
	} else {
		removeClassFormularioInputErrorActivo(inputName, "error1");
		validarCampo(expresion, valor, inputName, "error");
	}
};

const validarFormulario = (e) => {
	validarCampoVacio(expresiones.cantidad, e.target.value, e.target.name);
};

/* ------------- En esta funcion realizamos evento de AddEventListener relizamos la asignacion 
del nombre, imagen, descripcion, valor, al modal, segun el objecto 
seleccionado ------------- */
const funcionCardMenu = (card_menu) => {
	card_menu.addEventListener("click", (e) => {
		let id = card_menu.id;

		let modal_title = document.querySelector(".modal-title");
		modal_title.innerText = listadoMenu[id].nombre;

		let modal_body_img = document.querySelector(".modal-body img");
		modal_body_img.setAttribute("src", listadoMenu[id].imagen);

		let modal_body_p_descripcion = document.querySelector(".modal-body p");
		modal_body_p_descripcion.innerText = listadoMenu[id].descripcion;

		let modal_body_p_precio = document.querySelector(".div-precio p");
		modal_body_p_precio.innerText = listadoMenu[id].valor;
	});
};
/* ------------- Fin ------------- */

/* ------------- Esta funcion realiza un evento de AddEventListener el cual nos permite aumentar o disminuir la cantidad ------------- */
const funcionMinusPlus = (idCardMenu) => {
	let minus = document.getElementById(`btn_minus-${idCardMenu}`);
	minus.addEventListener("click", () => {

		let input_cantidad = document.getElementById(
			`input_cantidad-${idCardMenu}`
		);
		let cantidad = input_cantidad.value;
		if (cantidad != "") {
			cantidad = parseInt(cantidad);
			let rest = cantidad - 1;
			if (rest >= 1) {
				input_cantidad.value = rest;
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name
			);
		}
	});

	let plus = document.getElementById(`btn_plus-${idCardMenu}`);
	plus.addEventListener("click", () => {
		let input_cantidad = document.getElementById(
			`input_cantidad-${idCardMenu}`
		);
		let cant = input_cantidad.value;
		if (cant != "") {
			cant = parseInt(cant);
			let suma = cant + 1;
			if (suma >= 1) {
				input_cantidad.value = suma;
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name
			);
		}
	});
};
/* ------------- Fin ------------- */

/* ------------- ------------- */
const funcionInputCantidad = (idCardMenu) => {
	const input_cantidad = document.getElementById(
		`input_cantidad-${idCardMenu}`
	);
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
/* ------------- ------------- */

/* -------------- MANEJO DEL LOCALSTORAGE -------------- */
/*  */

/* -------------- NOS PERMITE SABER SI UN PLATILLO EXISTE, DEVOLVIENDO TRUE O FALSE -------------- */
const saberPlatilloExistente = (platilloLS, platillo) => {
	return platilloLS.id === platillo.id ? true : false;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE LEER EL LOCALSTORAGE Y NOS DEVULEVE TRUE O FALSE SI ALGUN ELEMENTO
   YA FUE CREADO EN EL LOCALSTORAGE -------------- */
const leerLocalStorage = (platilloLS, platillo) => {
	let saber = platilloLS.some((platilloLS) => {
		return saberPlatilloExistente(platilloLS, platillo);
	});
	return saber;
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE ELIMINAR UN PLATILLO SEGUN SU ID DEL LOCALSTORAGE -------------- */
const eliminarPlatilloByIdLocalStorage = (platillo) => {
	let platilloLS = obtenerPlatillosLocalStorage();

	platilloLS.forEach((platillos, index) => {
		if (saberPlatilloExistente(platillos, platillo)) {
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

/* -------------- NOS PERMITE VACIAR EL LOCALSTORAGE -------------- */
const vaciarLocalStorage = () => {
	localStorage.clear();
};
/* -------------- FIN -------------- */

/* -------------- NOS PERMITE GUARDAR EL PLATILLO SELECCIONADO EN EL LOCALSTORAGE */
const guardarSeleccionMenuLocalStorage = (platillo) => {
	let platilloLS = obtenerPlatillosLocalStorage();
	if (!leerLocalStorage(platilloLS, platillo)) {
		platilloLS.push(platillo);
		localStorage.setItem("platillos", JSON.stringify(platilloLS));
		return true;
	} else {
		return false;
	}
};
/* --------------FIN -------------- */
/* -------------- FIN -------------- */

const funcionToastr = (tipo_alerta, mensaje, titulo) => {
	toastr[tipo_alerta](mensaje, titulo);
	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: true,
		positionClass: "toast-top-center",
		preventDuplicates: true,
		onclick: true,
		showDuration: "300",
		hideDuration: "1000",
		timeOut: "5000",
		extendedTimeOut: "1000",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};
	toastr.options.onShown = function () {
		console.log("hello");
	};
	toastr.options.onHidden = function () {
		console.log("goodbye");
	};
	toastr.options.onclick = function () {
		console.log("clicked");
	};
	toastr.options.onCloseClick = function () {
		console.log("close button clicked");
	};
};

const funcionSweetAlert = (
	title,
	showDenyButton,
	showCancelButton,
	confirmButtonText,
	denyButtonText,
	mensajeSuccess,
	mensajeInfo,
	idCardMenu,
	input_cantidad,
	formulario
) => {
	Swal.fire({
		icon: "question",
		title: title,
		showDenyButton: showDenyButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmButtonText,
		denyButtonText: denyButtonText,
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			let platillo = {
				id: idCardMenu,
				nombre: listadoMenu[idCardMenu].nombre,
				descripcion: listadoMenu[idCardMenu].descripcion,
				valor: listadoMenu[idCardMenu].valor,
				imagen: listadoMenu[idCardMenu].imagen,
				cantidad: input_cantidad.value,
			};
			if (guardarSeleccionMenuLocalStorage(platillo)) {
				Swal.fire({
					icon: "success",
					title: mensajeSuccess,
					showConfirmButton: false,
					timer: 1100,
				});
				formulario.reset();
			} else {
				Swal.fire({
					icon: "error",
					title:
						"EL PLATO SELECCIONADO, YA FUE AGREGADO AL CARRITO,\n" +
						"POR FAVOR REVISE EL CARRITO",
					showConfirmButton: false,
					timer: 1700,
				});
			}
		} else if (result.isDenied || result.isDismissed) {
			Swal.fire({
				icon: "info",
				title:mensajeInfo,
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});
};

/* ------------- Aqui va agregar la funcion para agregar a un producto en LocalStorage ------------- */
const funcionBtnAgregarCarrito = (idCardMenu) => {
	let btnAgregarCarrito = document.getElementById(
		`btn-agregar-carrito-${idCardMenu}`
	);
	let formulario = document.getElementById(`formulario_menu-${idCardMenu}`);
	
	btnAgregarCarrito.addEventListener("click", (b) => {
		/* -------------- -------------- */
		let input_cantidad = document.getElementById(
			`input_cantidad-${idCardMenu}`
		);
		/* -------------- -------------- */
		if (campos[idCardMenu].valor == true) {
			funcionSweetAlert(
				"¿DESEAS AGREGAR EL PLATO AL CARRITO?",
				true,
				false,
				"SI",
				"NO",
				"SE AGREGO EL PLATO AL CARRITO CORRECTAMENTE...",
				"NO SE AGREGO EL PLATO AL CARRITO...",
				idCardMenu,
				input_cantidad,
				formulario
			);
		} else {
			/* -------------- Aqui se va agergar un toast de Error -------------- */
			funcionToastr(
				"error",
				"NO SE HA PDIDO AGREGAR, POR FAVOR VERIFICA LA CANTIDAD QUE SEA CORRECTA",
				"ERROR"
			);
		}
	});
};
/* ------------- Fin ------------- */

/* -------------- Aqui vamos a buscar todos los .card que esten dentro del 
   id card_body --------------*/
let cards_menus = document.querySelectorAll("#card-body .card");
cards_menus.forEach((card_menu) => {
	const idCardMenu = card_menu.id;

	/* -------------- -------------- */
	funcionCardMenu(card_menu);
	/* -------------- -------------- */

	/* -------------- -------------- */
	funcionMinusPlus(idCardMenu);
	/* -------------- -------------- */

	/* -------------- -------------- */
	funcionInputCantidad(idCardMenu);
	/* -------------- -------------- */

	/* -------------- -------------- */
	funcionBtnAgregarCarrito(idCardMenu);
	/* -------------- -------------- */
});
/* -------------- Fin -------------- */
