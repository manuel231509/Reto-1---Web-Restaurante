import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { eliminarPlatilloByIdLocalStorage } from "../../localStorage/LocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import CarritoContext from "../../contexts/CarritoContext";

const CardPlatillo = ({ obtenerTotalCarrito }) => {
  const [inputCantidad, setInputCantidad] = useState({});

  const { platillos, handleRemoveItem } = useContext(CarritoContext);

  const handleInputsChange = (e, platillo) => {
    const { value, name } = e.target;
    console.log(value, name);
    cargarInputs(value, name, platillo);

    console.log(inputCantidad);
  };

  const cargarInputs = (valor, name, platillo) => {
    setInputCantidad({
      ...inputCantidad,
      [name]: { value: valor },
    });
    obtenerTotalCarrito(platillo.valor.split("$")[1], platillo.cantidad);
  };

  const inicializarCarrito = (cantidad, name, platillo) => {
    console.log("************************* INICIO INIACIALIZARCARRITO");
    console.log("inicializarCarrito");
    if (inputCantidad[name]?.value === undefined) {
      cargarInputs(cantidad, name, platillo);
      console.log(platillo.valor.split("$")[1]);
    }
    console.log("************************* FIN INIACIALIZARCARRITO");
  };

  return (
    <>
      {console.log("Llega aquí en card")}
      {platillos.map((platillo, index) => {
        console.log(platillo);
        console.log(platillo.cantidad);
        const idPlatillo = platillo.idPlato;
        console.log(idPlatillo);

        return (
          <div
            key={index}
            id={idPlatillo}
            className="card mb-3 p-3 border border-danger border-3 carrito-card"
            style={{
              maxWidth: "100%",
            }}
          >
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12	p-0	d-flex align-items-center	flex-column">
                <div
                  className="card-body"
                  style={{ maxHeight: "100%", padding: "0%" }}
                >
                  <img
                    src={platillo.imagen}
                    alt="foto-producto-carrito"
                    className="imagen-carrito"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12"
                style={{ padding: "0%" }}
              >
                <div className="card-body">
                  <h2
                    className="card-title text-center mb-3"
                    style={{ color: "#5f2018", fontFamily: "fantasy" }}
                  >
                    {platillo.nombre}
                  </h2>
                  <div className="text-start text-justify">
                    <p className="card-text lh-6">
                      {platillo.descripcion.substr(0, 150)}
                    </p>
                  </div>
                </div>
                <div id="card-body" className="card-body">
                  <div className="row">
                    <div className="col-cantidad col-lg-12 col-md-12">
                      <p>CANTIDAD</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-minus-input-plus col-lg-12 col-md-12">
                      <div className="row">
                        <div className="col-minus col-lg-4 col-md-4 col-sm-4">
                          <button
                            id={`btn_minus-${idPlatillo}`}
                            type="button"
                            className="btn"
                          >
                            <FontAwesomeIcon className="fas" icon={faMinus} />
                          </button>
                        </div>
                        <form
                          id="formulario_carrito_input"
                          className="formulario_carrito_input"
                          noValidate
                        >
                          <div className="col-input col-lg-4 col-md-4 col-sm-4">
                            <div
                              className="formulario__grupo"
                              id={`grupo__cantidad_${idPlatillo}`}
                            >
                              <div
                                className="
        							d-flex
        							flex-row
        							formulario__grupo-input
        						"
                              >
                                <input
                                  type="text"
                                  className="formulario__input-cantidad"
                                  name={`cantidad_${idPlatillo}`}
                                  id={`input_cantidad_${idPlatillo}`}
                                  value={
                                    inputCantidad[`cantidad_${idPlatillo}`]
                                      ?.value === undefined
                                      ? inicializarCarrito(
                                          platillo.cantidad,
                                          `cantidad_${idPlatillo}`,
                                          platillo
                                        )
                                      : inputCantidad[`cantidad_${idPlatillo}`]
                                          ?.value
                                  }
                                  onChange={(e) => {
                                    handleInputsChange(e, platillo);
                                  }}
                                  required
                                />
                                <FontAwesomeIcon
                                  className="d-flex align-items-center formulario__validacion-estado	fas"
                                  icon={faTimesCircle}
                                />
                              </div>
                              <p
                                className="
        							invalid-feedback
        							formulario__input-error1
        						"
                              >
                                EL CAMPO CANTIDAD ES OBLIGATORIO
                              </p>
                              <p
                                className="
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
                        <div className="col-plus col-lg-4 col-md-4 col-sm-4">
                          <button
                            id={`btn_plus-${idPlatillo}`}
                            type="button"
                            className="btn"
                          >
                            <FontAwesomeIcon className="fas" icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-12 col-sm-12 d-flex"
                style={{ padding: "0%" }}
              >
                <div
                  className="card-body d-flex align-items-center flex-column"
                  style={{ padding: "0%", margin: "0%" }}
                >
                  <div className="card-text d-flex align-self-stretch justify-content-center pt-3 pb-3">
                    <h2
                      id={`valor-${idPlatillo}`}
                      className="text-row"
                      style={{
                        color: "#5f2018",
                        fontFamily: "fantasy",
                        fontSize: 27,
                        margin: "0%",
                      }}
                    >
                      {platillo.valor}
                    </h2>
                  </div>
                  <div
                    className="card-text d-flex align-items-center"
                    style={{ height: "100%", padding: 5 }}
                  >
                    <button
                      id={`btn_eliminar-${idPlatillo}`}
                      type="button"
                      className="btn btn-danger boton-carrito-eliminar"
                      style={{ height: "3rem", width: "3rem" }}
                      onClick={() => {
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

                            eliminarPlatilloByIdLocalStorage(
                              platillo,
                              "platillos"
                            );
                            handleRemoveItem(index);
                          } else {
                            Swal.fire({
                              icon: "error",
                              title: "EL PLATO NO FUE ELIMINADO",
                              showConfirmButton: false,
                              timer: 1100,
                            });
                          }
                        });
                      }}
                    >
                      <FontAwesomeIcon className="fas" icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardPlatillo;
