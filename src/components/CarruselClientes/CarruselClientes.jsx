const CarruselClientes = () => {
  return (
    <>
      <div
        className="carousel slide carousel-fade"
        id="mi-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid"
              src="./card1.png"
              alt=""
              style={{ width: "1400px", height: "400px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousel-caption">
              <h5>Titulo de mi articulo</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                hic.
              </p>
            </div>
            <img
              className="img-fluid"
              src="./main1.jpg"
              alt=""
              style={{ width: "1400px", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="./main2.png"
              alt=""
              style={{ width: "1400px", height: "400px" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mi-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mi-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

        <div className="carousel-indicators">
          <button
            type="button"
            className="active"
            data-bs-target="#mi-carousel"
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className=""
            data-bs-target="#mi-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className=""
            data-bs-target="#mi-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>
    </>
  );
};

export default CarruselClientes;
