import AcordeonFaq from "../components/AcordeonFaq/AcordeonFaq.jsx";
import CarruselClientes from "../components/CarruselClientes/CarruselClientes.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ModalServicios from "../components/ModalServicios/ModalServicios.jsx";
import Navmenu from "../components/NavMenu/Navmenu.jsx";
import OffCanvasCotizar from "../components/OffCanvasCotizar/OffCanvasCotizar.jsx";
import TablaPLanes from "../components/TablaPlanes/TablaPLanes.jsx";
// Animate
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import bannerPrincipal from "../assets/portada4.jpg";
import AlertaModal from "../components/AlertaModal/AlertaModal.jsx";

const Principal = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const bgPrincipalGcch = {
    backgroundImage: `url(${bannerPrincipal})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row g-0 mb-5" style={bgPrincipalGcch} loading="lazy">
          <div className="col-12">
            <Navmenu />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <div className="col-12 col-md-6">
              <div className="text-center text-md-start">
                <h1
                  className="text-white text-center text-md-start fw-bold mb-4"
                  data-aos="fade-right"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <h3 className="text-white fst-italic mb-4" data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
                  dicta.
                </h3>
                <button
                  className="btn btn-lg btn-dark "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  data-aos="fade-down-right"
                >
                  Cotizar Servicio
                </button>
                <OffCanvasCotizar setIsModalOpen={setIsModalOpen} />
                <AlertaModal
                  show={isModalOpen}
                  title="Correo Enviado"
                  body="El correo electrónico se ha enviado correctamente."
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SVG Ola Designe Butom */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#0e0e10"
            fillOpacity="1"
            d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,154.7C560,149,640,75,720,58.7C800,43,880,85,960,128C1040,171,1120,213,1200,224C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg> */}
        <div className="container">
          <div className="row g-0">
            <div className="col-12 mb-5">
              <h1 className="text-center fst-italic" data-aos="fade-down-right">
                <span className="text-primary text-uppercase">Planes</span> de
                Servicios Integrados
              </h1>
            </div>
            <div className="row g-0 mb-5">
              <div
                className=" d-flex flex-column flex-md-row justify-content-between gap-5"
                data-aos="fade-up-right"
              >
                <div className="col-12 col-md-3">
                  <div className="card shadow bg-body">
                    <img
                      className="card-img-top position-relative"
                      src="./card1.png"
                      alt=""
                    />
                    <span className="badge p-2 bg-primary bg-gradient opacity-75 text white position-absolute top-0 end-0 fst-italic fw-bold shadow-lg">
                      70% off
                    </span>
                    <div className="card-body bg-light bg-gradient text-center">
                      <h4 className="text-black-50">
                        Servicios
                        <span className="fw-bold fst-italic"> Contables</span>
                      </h4>
                      <br />
                      <p className="card-text text-dark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Natus magnam quia nesciunt.
                      </p>
                      <a
                        href="#"
                        className="btn btn-md btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-servicios"
                      >
                        Mas informacion
                      </a>
                      <ModalServicios />
                    </div>
                    <div className="card-footer text-center bg-warning bg-gradient">
                      <blockquote className="blockquote mb-0 text-white">
                        <p>Lorem ipsum.</p>
                        <footer className="blockquote-footer text-dark">
                          Lorem, ipsum dolor.
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card shadow-lg bg-body">
                    <img
                      className="card-img-top position-relative"
                      src="./card1.png"
                      alt=""
                    />
                    <span className="badge p-2 bg-primary bg-gradient shadow-lg opacity-75 text white position-absolute top-0 end-0 fst-italic fw-bold">
                      70% off
                    </span>
                    <div className="card-body bg-light bg-gradient text-center">
                      <h4 className="text-black-50">
                        Servicios
                        <span className="fw-bold fst-italic"> Contables</span>
                      </h4>
                      <br />
                      <p className="card-text text-dark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Natus magnam quia nesciunt.
                      </p>
                      <a
                        href="#"
                        className="btn btn-md btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-servicios"
                      >
                        Mas informacion
                      </a>
                      <ModalServicios />
                    </div>
                    <div className="card-footer text-center bg-success bg-gradient">
                      <blockquote className="blockquote mb-0 text-white">
                        <p>Lorem ipsum.</p>
                        <footer className="blockquote-footer text-dark">
                          Lorem, ipsum dolor.
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="card shadow bg-body">
                    <img
                      className="card-img-top position-relative"
                      src="./card1.png"
                      alt=""
                    />
                    <span className="badge p-2 bg-primary bg-gradient shadow-lg opacity-75 text white position-absolute top-0 end-0 fst-italic fw-bold">
                      70% off
                    </span>
                    <div className="card-body bg-light bg-gradient text-center">
                      <h4 className="text-black-50">
                        Servicios
                        <span className="fw-bold fst-italic"> Contables</span>
                      </h4>
                      <br />
                      <p className="card-text text-dark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Natus magnam quia nesciunt.
                      </p>
                      <a
                        href="#"
                        className="btn btn-md btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-servicios"
                      >
                        Mas informacion
                      </a>
                      <ModalServicios />
                    </div>
                    <div className="card-footer text-center bg-secondary bg-gradient">
                      <blockquote className="blockquote mb-0 text-white">
                        <p>Lorem ipsum.</p>
                        <footer className="blockquote-footer text-dark">
                          Lorem, ipsum dolor.
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-12" data-aos="zoom-in-up">
                <h1 className="text-center fst-italic my-5">
                  <span className="text-primary text-uppercase">Planes </span>
                  Mensuales para ti
                </h1>
                <TablaPLanes />
              </div>
            </div>

            <div className="row g-0 my-5 justify-content-around">
              <div
                className="col-12 col-md-8 mb-5 mb-md-0"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="position-relative" style={{ height: "400px" }}>
                  <img
                    src="./main1.jpg"
                    alt=""
                    className="img-fluid rounded-pill h-100 "
                  />

                  <div className="card position-absolute top-0 start-50 translate-middle bg-warning bg-gradient">
                    <div className="card-body">
                      <p className="fw-bold fst-italic text-white m-0 shadow-lg rounded p-1">
                        ⭐ Lideres en gestion contable
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill"
                          fill="#212529"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div
                  className="text-center"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1 className="fw-bold mb-4">
                    Hemos diseñado un servicio contable moderno y de calidad que
                    te sorprenderá
                  </h1>
                  <p className="fst-italic">
                    Logramos menores tiempos de respuesta, ya que asignamos un
                    ejecutivo de cuentas para tu empresa. Planes personalizados
                    para que no pagues de más, tarifas flexibles para todo tipo
                    de empresas
                  </p>
                  <button className="btn btn-success">
                    Agendar una Reunion
                  </button>
                  <img
                    src="./arrow.png"
                    alt=""
                    className="img-fluid position-absolute "
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="row g-0 justify-content-between align-items-center">
              <div
                className="col-12 order-2 order-md-1 col-md-5 mt-5 mb-5 mb-md-0"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="text-center">
                  <h1 className="fw-bold mb-4">
                    Conectados al Servicio de Impuestos Internos
                  </h1>
                  <p className="fst-italic">
                    Trabajamos con software certificado por el SII para poder
                    contabilizar todos los documentos emitidos y recibidos por
                    tu empresa y tener una contabilidad completa y ordenada.
                  </p>
                  <button className="btn btn-success">
                    Solicitar mas informacion
                  </button>
                </div>
              </div>
              <div
                className="col-12 order-1 order-md-2  col-md-6"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src="./main2.png"
                  alt=""
                  className="img-fluid"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
            <div className="row g-0 mt-4">
              <div className="col-12">
                <h2 className="text-center mb-4">
                  Preguntas Frecuentes
                  <span className=" h2 text-primary"> FAQ</span>
                </h2>
                <AcordeonFaq />
              </div>
            </div>
            <div className="row g-0 mt-4 ">
              <div className="col-12 text-center">
                <h2>¿Que dicen nuestros clientes?</h2>
              </div>
            </div>
            <div className="row g-0 mt-2 justify-content-center">
              <div className="col-6">
                <p className="fst-italic">
                  ¡Apreciamos mucho los comentarios de nuestros valiosos
                  clientes! nos motiva a continuar brindando un excelente
                  servicio.
                </p>
              </div>
            </div>
            <div className="row g-0 mt-2">
              <div className="col-12">
                <CarruselClientes />
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 mt-4">
          <div className="col-12 text-center">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
