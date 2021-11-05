import React from "react";

const SinPlatillos = () => {
  return (
    <>
      <div id="col-mensaje-vacio" className="col-lg-12 col-md-12 mt-3 mb-4">
        <div
          className="card"
          style={{
            borderRadius: 19,
            background: "#dedede",
            boxShadow: "10px 10px 20px #bdbdbd, -10px -10px 20px #ffffff",
            textAlign: "center",
          }}
        >
          <div className="card-body">
            <div className="card-text">
              <h4>NO HAS AGREGADO NINGUN PLATO AL CARRITO</h4>
            </div>
          </div>
          {console.log("Entra a SinPlatillos")}
        </div>
      </div>
    </>
  );
};

export default SinPlatillos;
