// Botón al que le damos click en el menú para agregar al carrito
const clickButton = document.querySelectorAll(".btn-agregar-carrito");

// div donde van a estar ubicados todos los productos en el carrito de compras
const productsContainer = document.querySelector(".contenedor-productos");

// Arreglo donde se van a guardar los productos del carrito
let cart = [];

// Detecta el click a cada boton de añadir al carrito de cada producto del menú
clickButton.forEach((btn) => {
  btn.addEventListener("click", addToCartItem);
});

/* Depende en cuál botón de click, toma las propiedades más cercanas, para que
   todas correspondan al producto que se selecciona, luego se crea el objeto
   newItem y se fijan sus atributos como los que debe tener el producto */
function addToCartItem(e) {
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
}

// Se añade el item al carrito
function addItemCart(newItem) {
  cart.push(newItem);
  renderCart();
}

/* Hay algún problema en esta última función renderCart, pues no muestra 
   los productos en el carro luego de ser añadidos, aunque sí se guardan 
   en el arreglo de cart[]. El error que sale por consola al darle añadir
   al carrito a un producto del menú es:

   Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
    at renderCart (carrito.js:34)
    at addItemCart (carrito.js:30)
    at HTMLButtonElement.addToCartItem (carrito.js:25)

   */
function renderCart() {
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
}
