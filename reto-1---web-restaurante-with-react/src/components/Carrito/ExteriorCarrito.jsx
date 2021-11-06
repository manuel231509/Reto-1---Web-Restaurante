import React, { useContext, useRef, useState } from "react";
import CarritoContext from "../../contexts/CarritoContext";
import ContenidoCarrito from "./ContenidoCarrito";
import ModalCarrito from "./ModalCarrito";
import SinPlatillos from "./SinPlatillos";

const ExteriorCarrito = () => {
  const { platillos } = useContext(CarritoContext);
  const [totalCarrito, setTotalCarrito] = useState(0);

  const obtenerTotalCarrito = (valor) => {
    console.log("--------------- INICIO DE OBTENERTOTALCARRITO");

    console.log(totalCarrito);
    setTotalCarrito(valor);
    console.log(totalCarrito);

    console.log("--------------- FIN DE OBTENERTOTALCARRITO");
  };

  return (
    <>
      <div
        className="mx-auto mt-5"
        style={{ paddingLeft: 50, paddingRight: 50 }}
      >
        <div className="card-body">
          <div className="row">
            <div className="card-text mb-4">
              <h1 style={{ color: "#5f2018", fontFamily: "fantasy" }}>
                CARRITO DE COMPRA
              </h1>
            </div>
            <div
              id="col-productos"
              className="col-lg-8 col-md-12 text-center"
              style={{ padding: "0%", margin: "0%" }}
            >
              {/*Contenedor de elementos del carrito*/}
              <div id="contenedor-productos" className="contenedor-productos">
                <ContenidoCarrito obtenerTotalCarrito={obtenerTotalCarrito} />
                {/* {props.children} */}
              </div>
            </div>
            <SinPlatillos />
            <div
              id="col_pagar-ahora"
              className={`col-lg-4 col-md-12 d-flex align-items-center mb-5 ${
                platillos.length === 0 ? "d-none" : ""
              }`}
              style={{ marginTop: 0 }}
            >
              <div className="card-body">
                <div
                  className="card-text py-4"
                  style={{
                    borderRadius: 19,
                    background: "#dedede",
                    boxShadow: "5px 5px 5px #bdbdbd, -5px -5px 5px #ffffff",
                    zIndex: "0 !important",
                  }}
                >
                  <div
                    className="
										row
										my-4
										mb-4
										d-flex
										justify-content-center
										align-items-center
										row-total
									"
                  >
                    <div
                      className="col fs-3 px-auto"
                      style={{
                        color: "#5f2018",
                        fontFamily: "fantasy",
                        maxWidth: 90,
                        padding: "0%",
                      }}
                    >
                      TOTAL
                    </div>

                    <div
                      className="col fs-3 px-auto"
                      style={{
                        color: "#5f2018",
                        fontFamily: "fantasy",
                        maxWidth: 25,
                        padding: "0%",
                        margin: "0%",
                      }}
                    >
                      :
                    </div>
                    <div
                      id="total-carrito"
                      className="col fs-3 px-auto"
                      style={{
                        color: "#5f2018",
                        fontFamily: "fantasy",
                        maxWidth: "100%",
                      }}
                    >
                      {totalCarrito}
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="
											col-lg-12 col-md-12
											d-flex
											align-items-center
											justify-content-center
										"
                    >
                      <button
                        id="pagar"
                        type="button"
                        className="btn py-2 px-4 fs-4 fw-bold"
                        style={{
                          backgroundColor: "#fd7e14",
                          color: "#ffffff",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        PAGAR AHORA
                      </button>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalCarrito totalCarrito={totalCarrito} />

      {/*Botón seguir comprando*/}
      <div className="d-flex justify-content-center mb-4">
        <a
          type="button"
          className="btn btn-lg p-3 fs-3 fw-bold"
          style={{ backgroundColor: "#fd7e14", color: "#ffffff" }}
          href="/menu"
        >
          SEGUIR COMPRANDO
        </a>
      </div>
    </>
  );
};

export default ExteriorCarrito;
