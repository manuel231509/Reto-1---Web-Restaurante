import React from "react";
import "../components/Contactenos/Styles/estilos-contactenos.css";

const Contactenos = () => {
  return (
    <>
      {/* Formulario Contactenos */}
      <main>
        <div className="card card-principal">
          <div className="card-body">
            <h5 className="card-title fs-2 mt-4 mb-2">
              <i className="fas fa-circle" />
              CONTACTENOS
            </h5>
            <div className="row">
              <div
                className="col col-lg-6 col-md-12 mb-md-0 mt-4"
                style={{ paddingLeft: 2, paddingRight: 2 }}
              >
                <p className="me-md-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi nostrum minima qui repellendus, hic ipsa adipisci rem
                  sapiente dolor! Adipisci excepturi repellat, inventore nobis,
                  quia facere molestias voluptate iure omnis enim perspiciatis
                  illum harum sapiente, exercitationem quas perferendis dolorum
                  accusantium minima tenetur. Aliquid, quos nam optio
                  exercitationem debitis maxime eligendi.
                </p>
                <br />
                <p className="me-md-3 mb-sm-3 mb-xs-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  sequi ratione, quaerat cupiditate nam ullam iste sed
                  perspiciatis, quam debitis molestias quae cum maiores quisquam
                  amet facere necessitatibus consequatur. Quaerat excepturi
                  distinctio maxime qui labore officia ipsa cum ut, sed esse nam
                  quibusdam dolor. Eligendi dolorum pariatur earum nobis id?
                </p>
              </div>
            </div>
          </div>
        </div>
        <form action="">
          <label htmlFor="">Selecione el Servicio</label>
        </form>
      </main>
    </>
  );
};

export default Contactenos;
