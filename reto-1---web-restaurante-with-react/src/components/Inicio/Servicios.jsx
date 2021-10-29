import React from "react";
import celebraciones from "../../assets/images/celebraciones.jpg";
import reuniones from "../../assets/images/reuniones.jpg";
import cumpleaños from "../../assets/images/cumpleaños.jpg";

const Servicios = () => {
  return (
    <>
      <section className="especiales">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-8 m-auto text-center">
              <h1>Nuestros Servicios Especiales</h1>
              <h6 style={{ color: "red" }}>
                Celebra con Nosotros Tus Momentos Especiales
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={celebraciones} alt="" className="img-fluid mb-3 " />

              <h5>Reuniones</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, consequuntur blanditiis possimus ea, sit doloribus fuga
                ducimus magni iste iure error sed. Quidem praesentium nostrum
                nesciunt ratione eligendi totam non?
              </p>
            </div>
            <div className="col-lg-4">
              <img src={reuniones} alt="" className="img-fluid mb-3" />

              <h5>Celebraciones</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, consequuntur blanditiis possimus ea, sit doloribus fuga
                ducimus magni iste iure error sed. Quidem praesentium nostrum
                nesciunt ratione eligendi totam non?
              </p>
            </div>
            <div className="col-lg-4">
              <img src={cumpleaños} alt="" className="img-fluid mb-3" />

              <h5>Cumpleaños</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, consequuntur blanditiis possimus ea, sit doloribus fuga
                ducimus magni iste iure error sed. Quidem praesentium nostrum
                nesciunt ratione eligendi totam non?
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-6 text-center m-auto">
              <button className="btn1">Ver</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;
