import React from "react";
// import hamburguesa from "../../assets/images/hamburguesa.jpg";
// import hamburguesa2 from "../../assets/images/hamburguesa2.jpg";
// import hamburguesa3 from "../../assets/images/hamburguesa3.jpg";
// import hamburguesa4 from "../../assets/images/hamburguesa4.jpg";

const Destacados = () => {
  return (
    <>
      <section className="productos">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-5 m-auto text-center">
              <h1>Destacados</h1>
              <h6>Platos de Calidad</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img
                    src="./assets/images/hamburguesa.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Comida Rapida</h6>
              <p>$34.99</p>
            </div>
            <div className="col-lg-3 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img
                    src="./assets/images/hamburguesa2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Comida Rapida</h6>
              <p>$34.99</p>
            </div>
            <div className="col-lg-3 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img
                    src="./assets/images/hamburguesa3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Comida Rapida</h6>
              <p>$34.99</p>
            </div>
            <div className="col-lg-3 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img
                    src="./assets/images/hamburguesa4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Comida Rapida</h6>
              <p>$34.99</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center m-auto">
              <button className="btn1">Ver Mas</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destacados;
