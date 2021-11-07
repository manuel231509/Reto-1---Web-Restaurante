import React from "react";

const CarruselTestimonios = () => {
  return (
    <>
      {/*Carrusel*/}
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-dark"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators mb-0">
          <button
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner pt-5 pb-5">
          {/* Single item */}
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-9 col-xl-8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="./assets/images/testimonio1@2x.png"
                      className="
											rounded-circle
											mb-4 mb-lg-0
											shadow-2
											border border-warning border-3
										"
                      alt="woman avatar"
                      width={135}
                      height={135}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                      <blockquote className="blockquote mb-4">
                        <p>
                          <i className="fas fa-quote-left fa-lg text-warning me-2" />
                          <span className="font-italic">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur sint nesciunt ad itaque aperiam
                            expedita officiis incidunt minus facere, molestias
                            quisquam impedit inventore."
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Random User
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-9 col-xl-8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="./assets/images/testimonio1@2x.png"
                      className="
											rounded-circle
											mb-4 mb-lg-0
											shadow-2
											border border-warning border-3
										"
                      alt="woman avatar"
                      width={135}
                      height={135}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                      <blockquote className="blockquote mb-4">
                        <p>
                          <i className="fas fa-quote-left fa-lg text-warning me-2" />
                          <span className="font-italic">
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis."
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Random User
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-9 col-xl-8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="./assets/images/testimonio1@2x.png"
                      className="
											rounded-circle
											mb-4 mb-lg-0
											shadow-2
											border border-warning border-3
										"
                      alt="woman avatar"
                      width={135}
                      height={135}
                    />
                  </div>
                  <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                      <blockquote className="blockquote mb-4">
                        <p>
                          <i className="fas fa-quote-left fa-lg text-warning me-2" />
                          <span className="font-italic">
                            "At vero eos et accusamus et iusto odio dignissimos
                            qui blanditiis praesentium voluptatum deleniti atque
                            corrupti quos dolores et quas molestias excepturi
                            sint amet dolore."
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Random User
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </>
  );
};

export default CarruselTestimonios;
