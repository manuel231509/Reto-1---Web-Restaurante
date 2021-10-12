const expresiones = {
	cantidad: /^[1-9]\d{0,4}$/,
};

const campos = [];

console.log(campos);

// div donde van a estar ubicados todos los productos en el carrito de compras
const productsContainer = document.querySelector(".contenedor-productos");

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
const saberPlatilloExistente = (platilloLS, platillo) => {
	return platilloLS.id === platillo.id ? true : false;
};

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

let platilloLS = obtenerPlatillosLocalStorage();
console.log("storage");
console.log(platilloLS);

platilloLS.forEach((platillos) => {
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

	const Content = `
      
              <div class="row">
                <div
                  class="
                    col-lg-5 col-md-12 col-sm-12
                    d-flex
                    align-self-center
                    justify-content-center
                  "
                >
                  <img
                    src=${platillos.imagen}
                    alt="foto-producto-carrito"
                    width="290"
                    height="290"
                    class="imagen-carrito"
                  />
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                  <div class="card-body">
                    <h2
                      class="card-title"
                      style="color: #5f2018; font-family: fantasy"
                    >
                      ${platillos.nombre}
                    </h2>
                    <p class="card-text">
                      ${platillos.descripcion.substr(0, 100)}.....
                    </p>
                    <!-- <input
                      class="
                        shopping-cart-quantity-input
                        shoppingCartItemQuantity
                        mt-3
                      "
                      type="number"
                      min="1"
                      value="1"
                    /> -->
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
                            <button id="btn_minus" type="button" class="btn">
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
                                id="grupo__cantidad_${platillos.id}"
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
                                    name="input_cantidad_${platillos.id}"
                                    id="input_cantidad_${platillos.id}"
                                    value=${platillos.cantidad}
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
                                  EL CAMPO CANTIDAD SOLO PUEDE CONTENER NUMEROS,
                                  DEBE SER MAYOR QUE 0 Y TIENE UN MAXIMO DE
                                  CARACTERES DE 5.
                                </p>
                              </div>
                            </div>
                          </form>

                          <div class="col-plus col-lg-4 col-md-4 col-sm-4">
                            <button id="btn_plus" type="button" class="btn">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 px-2">
                  <div class="card-body">
                    <div class="card-title">
                      <h2 id="valor"
                        class="text-center"
                        style="color: #5f2018; font-family: fantasy"
                      >
                        ${platillos.valor}
                      </h2>
                    </div>
                    <div
                      class="
                        card-text
                        d-flex
                        align-self-end
                        justify-content-center
                      "
                      style="height: 89%"
                    >
                      <button
                        id=${platillos.id}
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
	/* const Content = `
              <div class="row">
                <div
                  class="
                    col-lg-5 col-md-12 col-sm-12
                    d-flex
                    align-self-center
                    justify-content-center
                  "
                >
                  <img
                    src=${platillos.imagen}
                    alt="foto-producto-carrito"
                    width="290"
                    height="290"
                    class="imagen-carrito"
                  />
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                  <div class="card-body">
                    <h2
                      class="card-title"
                      style="color: #5f2018; font-family: fantasy"
                    >
                      ${platillos.nombre}
                    </h2>
                    <p class="card-text">
                      ${platillos.descripcion.substr(0, 100)}.....
                    </p>
                    <input
                      class="
                        shopping-cart-quantity-input
                        shoppingCartItemQuantity
                        mt-3
                      "
                      type="number"
                      min="1"
                      value=${platillos.cantidad}
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 px-2">
                  <div class="card-body">
                    <div class="card-title">
                      <h2
                        class="text-center"
                        style="color: #5f2018; font-family: fantasy"
                      >
                        ${platillos.valor}
                      </h2>
                    </div>
                    <div
                      class="
                        card-text
                        d-flex
                        align-self-end
                        justify-content-center
                      "
                      style="height: 89%"
                    >
                      <button
                        id=${platillos.id}
                        type="button"
                        class="btn btn-danger boton-carrito-eliminar"
                        style="height: 3rem; width: 3rem"
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>`;
 */
	div.innerHTML = Content;
	div.id = platillos.id;
	productsContainer.appendChild(div);
	campos.push({ cantidad_id: platillos.id, valor: false });
});

const contenedor_productos = document.getElementById("contenedor-productos");

const contenedor_productos_card = document.querySelectorAll(
	"#contenedor-productos .card"
);

let sumaPlatillos = 0;
const obtenerTotalCarrito = () => {
	platilloLS.forEach((platillos) => {
		precioString = platillos.valor.replace("$", "");
		cantidadString = platillos.cantidad;
		let cantidadNumber = parseFloat(cantidadString);
		let precioNumber = parseFloat(precioString);
		let valorPlatillos = precioNumber * cantidadNumber;
		sumaPlatillos += valorPlatillos;
	});

	return sumaPlatillos;
};
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
	console.log(campo);
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

const funcionMinusPlus = (index) => {
	console.log(index);
	let minus = document.querySelectorAll(`#btn_minus`);
	console.log(minus);

	minus[index].addEventListener("click", () => {
		let input_cantidad = document.getElementsByClassName(
			"formulario__input-cantidad"
		)[index];
		let cantidad = input_cantidad.value;
		if (cantidad != "") {
			cantidad = parseInt(cantidad);
			let rest = cantidad - 1;
			if (rest >= 1) {
				input_cantidad.value = rest;
				const valor = document
					.querySelectorAll("#valor")
					[index].innerText.split("$")[1];
				let total_apagar = document.getElementById("total-carrito");
				sumaPlatillos = sumaPlatillos - parseInt(valor);
				console.log("resta");
				console.log("valor");
				console.log(parseInt(valor));
				console.log("sumaPlatillos");
				console.log(sumaPlatillos);

				total_apagar.innerText = sumaPlatillos;
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name
			);
		}
	});

	let plus = document.querySelectorAll(`#btn_plus`);
	plus[index].addEventListener("click", () => {
		let input_cantidad = document.getElementsByClassName(
			"formulario__input-cantidad"
		)[index];
		let cant = input_cantidad.value;
		if (cant != "") {
			cant = parseInt(cant);
			let suma = cant + 1;
			if (suma >= 1) {
				input_cantidad.value = suma;
				const valor = document
					.querySelectorAll("#valor")
					[index].innerText.split("$")[1];
				let total_apagar = document.getElementById("total-carrito");
				sumaPlatillos = sumaPlatillos + parseInt(valor);
				console.log("");
				console.log("suma");
				console.log("valor");
				console.log(parseInt(valor));
				console.log("sumaPlatillos");
				console.log(sumaPlatillos);

				total_apagar.innerText = sumaPlatillos;
			}
			validarCampoVacio(
				expresiones.cantidad,
				input_cantidad.value,
				input_cantidad.name
			);
		}
	});
};

let totalCarrito = obtenerTotalCarrito();

document.getElementById("total-carrito").innerHTML = totalCarrito;

contenedor_productos_card.forEach((contenedor_producto, index) => {
	let btnDelete = document.querySelectorAll(".boton-carrito-eliminar")[index];
	console.log("index");
	console.log(index);
	console.log("campos");
	console.log(campos);
	console.log("btnDelete");
	console.log(btnDelete);
	/* -------------- -------------- */
	funcionMinusPlus(index);
	/* -------------- -------------- */

	/* -------------- -------------- */
	/* funcionInputCantidad(index); */
	/* -------------- -------------- */

	btnDelete.addEventListener("click", (e) => {
		console.log("eliminar btn");
		const idCard = contenedor_producto.id;
		console.log("idcard");
		console.log(idCard);
		Swal.fire({
			title: "¿Deseas eliminar este platillo del carrito?",
			showDenyButton: true,
			showConfirmButton: false,
			showCancelButton: true,
			denyButtonText: `Eliminar`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isDenied) {
				Swal.fire({
					icon: "success",
					title: "El producto fue eliminado con éxito",
					showConfirmButton: false,
					timer: 1500,
				});
				const valor = document
					.querySelectorAll("#valor")
					[index].innerText.split("$")[1];
				let input_cantidad = document.getElementsByClassName(
					"formulario__input-cantidad"
				)[index];
				let cantidad = input_cantidad.value;
				let total_apagar = document.getElementById("total-carrito");
				sumaPlatillos = sumaPlatillos - parseInt(valor) * parseInt(cantidad);
				total_apagar.innerText = sumaPlatillos;
				eliminarPlatilloByIdLocalStorage(contenedor_producto);
				contenedor_productos.removeChild(contenedor_producto);
			}
		});
	});
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
				console.log("ELIMINAR");
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

/* btnDelete.addEventListener("click", function (e) {
  btnDelete = e.target;
  const idProductoEliminar = btnDelete.closest(".card").id;
  console.log(idProductoEliminar);
  if (idProductoEliminar == platillos.id) {
    Swal.fire({
      title: "¿Deseas eliminar este platillo del carrito?",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
/* if (result.isDenied) {
        eliminarPlatilloByIdLocalStorage(platillos[idProductoEliminar]);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "El producto fue eliminado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  } */
/* }); */

/*function addToCartItem(e) {
  const button = e.target;
  const item = button.closest(".card");
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".precio-hidden").textContent;
  const itemImg = item.querySelector(".card-img-top").src;
  const itemText = item.querySelector(".card-text").textContent;

  const newItem = {
    title: itemTitle,
    price: itemPrice,
    img: itemImg,
    text: itemText,
    cantidad: 1,
  };

  addItemCart(newItem);
}*/

/*const renderCart = () => {
  productsContainer.innerHTML = ``;
  cart.map((item) => {
    const div = document.createElement("div");
    div.classList.add("itemCart");
    const Content = `
    
              <div class="row g-0">
                <div class="col-md-3 px-2">
                  <img
                    src=${item.img}
                    class="img-fluid rounded-start"
                    alt="foto-producto-carrito"
                  />
                </div>
                <div class="col-md-6 px-2">
                  <div class="card-body">
                    <h2
                      class="card-title"
                      style="color: #5f2018; font-family: fantasy"
                    >
                      ${item.title}
                    </h2>
                    <p class="card-text">
                      ${item.text}
                    </p>
                    <input
                      class="
                        shopping-cart-quantity-input
                        shoppingCartItemQuantity
                        mt-3
                      "
                      type="number"
                      min="1"
                      value=${item.cantidad}
                    />
                  </div>
                </div>
                <div class="col-md-3 px-2" style="padding: 1rem">
                  <h2
                    class="card-text"
                    style="color: #5f2018; font-family: fantasy"
                  >
                    $${item.price}
                  </h2>
                  <button
                    type="button"
                    class="btn btn-danger"
                    style="height: 3rem; width: 3rem"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
    
    `;

    div.innerHTML = Content;
    productsContainer.append(div);
  });
};*/

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
