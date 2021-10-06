let idCardBody = document.getElementById("card-body");

let htmCardBodyCarrito = `<div class="row">
    <div class="col-cantidad col-lg-12 col-md-12">
      <p>CANTIDAD</p>
    </div>
    </div>

    <div class="row">
    <div class="col-minus-input-plus col-lg-12 col-md-12">
      <div class="row">
        <div class="col-minus col-lg-4 col-md-4 col-sm-4">
          <button id="minus" type="button" class="btn">
            <i class="fas fa-minus"></i>
          </button>
        </div>

        <div class="col-input col-lg-4 col-md-4 col-sm-4">
          <input id="input-cantidad" class="input-cantidad" type="text" value="1" />
        </div>

        <div class="col-plus col-lg-4 col-md-4 col-sm-4">
          <button id="plus" type="button" class="btn">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    </div>

    <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="div-agregar-carrito">
        <button type="button" class="btn btn-agregar-carrito">
          <i class="fas fa-shopping-cart"></i>
          <p>AÑADIR AL CARRITO</p>
        </button>
      </div>
    </div>
    </div>`;

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

const agregandoListadoMenu = (i, tamaño, divRow) => {
	let divRowCol = document.createElement("div");
	divRowCol.classList.add("col-lg-4", "col-md-6", "col-sm-12", "col-xs-12");

	let divRowColCard = document.createElement("div");
	divRowColCard.classList.add("card", "card-menu");

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
};

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
			agregandoListadoMenu(i, tamaño, divRow);
			i++;
			cont++;
		}
	}
})();

let cards_menus = document.querySelectorAll("#card-body .card");
cards_menus.forEach((card_menu) => {
	card_menu.addEventListener("click", (e) => {
		if (e.path[2].id != "") {
			let id = e.path[2].id;
			let modal_title = document.querySelector(".modal-title");
			modal_title.innerText = listadoMenu[id].nombre;

			let modal_body_img = document.querySelector(".modal-body img");
			modal_body_img.setAttribute("src", listadoMenu[id].imagen);

			let modal_body_p_descripcion = document.querySelector(".modal-body p");
			modal_body_p_descripcion.innerText = listadoMenu[id].descripcion;

			let modal_body_p_precio = document.querySelector(".div-precio p");
			modal_body_p_precio.innerText = listadoMenu[id].valor;
		}
	});

	/* --------------------------------------------------------- */

	let minus = document.querySelectorAll("#minus");
	minus[card_menu.id].addEventListener("click", () => {
		let input_cantidad =
			document.getElementsByClassName("input-cantidad")[card_menu.id];
		let cant = parseInt(input_cantidad.value);
		let rest = cant - 1;
		if (rest >= 1) {
			input_cantidad.value = rest;
		}
	});
	let plus = document.querySelectorAll("#plus");
	plus[card_menu.id].addEventListener("click", () => {
		let input_cantidad =
			document.getElementsByClassName("input-cantidad")[card_menu.id];
		let cant = parseInt(input_cantidad.value);
		let rest = cant + 1;
		if (rest >= 1) {
			input_cantidad.value = rest;
		}
	});


	/* Aqui va agregar la funcion para agregar a un producto en LocalStorage */
	
	let btn = document.getElementsByClassName("btn-agregar-carrito")[
		card_menu.id
	];
	btn.addEventListener("click", (b) => {
		console.log("LE DIO CLICK POSICION - " + card_menu.id);
		let input_cantidad =
			document.getElementsByClassName("input-cantidad")[card_menu.id];
		console.log(input_cantidad.value);
	});
});
