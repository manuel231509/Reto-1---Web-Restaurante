import React from "react";
import testimonio from "../../assets/images/testimonio.jpg";
import testimonio2 from "../../assets/images/testimonio2.jpg";
import testimonio3 from "../../assets/images/testimonio3.jpg";

const Testimonios = () => {
  return (
    <>
      <section className="testimonios">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <h1>Testimonios</h1>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-lg-7 m-auto">
              <div className="row text-center">
                <div className="col-lg-4">
                  <img src={testimonio2} className="foto" alt="" />
                  <h6>JUAN</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet, laboriosam nam ipsam officiis reprehenderit
                    pariatur aperiam labore eaque tenetur!
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={testimonio} className="foto" alt="" />
                  <h6>MARIA</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet, laboriosam nam ipsam officiis reprehenderit
                    pariatur aperiam labore eaque tenetur!
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={testimonio3} className="foto" alt="" />
                  <h6>DAVID</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet, laboriosam nam ipsam officiis reprehenderit
                    pariatur aperiam labore eaque tenetur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios;
