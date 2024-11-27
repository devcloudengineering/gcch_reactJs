// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navmenu from "../components/NavMenu/Navmenu";
import bannerNoticias from "../assets/portada3.jpg";

const Noticias = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const bgNoticiasGcch = {
    backgroundImage: `url(${bannerNoticias})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <>
      <div
        className="container-fluid g-0 h-100"
        style={bgNoticiasGcch}
        loading="lazy"
      >
        <div className="row g-0">
          <div className="col-12">
            <Navmenu />
          </div>
        </div>

        <div className="container py-4">
          <div className="row g-0 mt-4 ">
            <div className="col-12 my-5">
              <h2 className="fst-italic text-white text-center">
                Anuncios Relevantes para ti
              </h2>
            </div>
          </div>

          <div className="row g-0 ">
            <div className="col-12 col-lg-6 my-5" data-aos="fade-left">
              <div className="row">
                <div className="card bg-gradient-card-noticias shadow-lg">
                  <div className="row">
                    <div className="col-4 position-relative">
                      <img
                        className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                        src="./portada2.jpg"
                        style={{ height: "250px", width: "200px" }}
                        alt=""
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body text-center mx-2">
                        <div className="text-center mb-4">
                          <h4 className="text-white">
                            Servicios
                            <span className="fw-bold fst-italic text-white">
                              {" "}
                              Contables
                            </span>
                          </h4>
                          <br />
                          <p className="card-text text-light">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus magnam quia nesciunt.
                          </p>
                        </div>
                        <a href="#" className="btn btn-md btn-light">
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5" data-aos="fade-right">
              <div className="row">
                <div className="card bg-gradient-card-noticias shadow-lg">
                  <div className="row">
                    <div className="col-4 position-relative">
                      <img
                        className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                        src="./portada2.jpg"
                        style={{ height: "250px", width: "200px" }}
                        alt=""
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body text-center mx-2">
                        <div className="text-center mb-4">
                          <h4 className="text-white">
                            Servicios
                            <span className="fw-bold fst-italic text-white">
                              {" "}
                              Contables
                            </span>
                          </h4>
                          <br />
                          <p className="card-text text-light">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus magnam quia nesciunt.
                          </p>
                        </div>
                        <a href="#" className="btn btn-md btn-light">
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5" data-aos="fade-left">
              <div className="row">
                <div className="card bg-gradient-card-noticias shadow-lg">
                  <div className="row">
                    <div className="col-4 position-relative">
                      <img
                        className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                        src="./portada2.jpg"
                        style={{ height: "250px", width: "200px" }}
                        alt=""
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body text-center mx-2">
                        <div className="text-center mb-4">
                          <h4 className="text-white">
                            Servicios
                            <span className="fw-bold fst-italic text-white">
                              {" "}
                              Contables
                            </span>
                          </h4>
                          <br />
                          <p className="card-text text-light">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus magnam quia nesciunt.
                          </p>
                        </div>
                        <a href="#" className="btn btn-md btn-light">
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5" data-aos="fade-right">
              <div className="row">
                <div className="card bg-gradient-card-noticias shadow-lg">
                  <div className="row">
                    <div className="col-4 position-relative">
                      <img
                        className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                        src="./portada2.jpg"
                        style={{ height: "250px", width: "200px" }}
                        alt=""
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body text-center mx-2">
                        <div className="text-center mb-4">
                          <h4 className="text-white">
                            Servicios
                            <span className="fw-bold fst-italic text-white">
                              {" "}
                              Contables
                            </span>
                          </h4>
                          <br />
                          <p className="card-text text-light">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus magnam quia nesciunt.
                          </p>
                        </div>
                        <a href="#" className="btn btn-md btn-light">
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-5" data-aos="fade-left">
              <div className="row">
                <div className="card bg-gradient-card-noticias shadow-lg">
                  <div className="row">
                    <div className="col-4 position-relative">
                      <img
                        className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                        src="./portada2.jpg"
                        style={{ height: "250px", width: "200px" }}
                        alt=""
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body text-center mx-2">
                        <div className="text-center mb-4">
                          <h4 className="text-white">
                            Servicios
                            <span className="fw-bold fst-italic text-white">
                              {" "}
                              Contables
                            </span>
                          </h4>
                          <br />
                          <p className="card-text text-light">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus magnam quia nesciunt.
                          </p>
                        </div>
                        <a href="#" className="btn btn-md btn-light">
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
