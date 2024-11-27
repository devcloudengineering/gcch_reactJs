import Footer from "../components/Footer/Footer";
import Navmenu from "../components/NavMenu/Navmenu";
// Animate
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid g-0 bg-contacto-gcch h-100">
        <div className="row g-0">
          <div className="col-12">
            <Navmenu />
          </div>
        </div>

        <div className="row g-0 mb-5 mt-5 opacity-75" data-aos="fade-up-right">
          <div className="col-12">
            <div className="container mt-5 border p-4 rounded shadow-sm bg-body">
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12 col-md-6 px-4 text-center">
                  <h2 className="text-primary text-uppercase">Contactanos</h2>
                  <h1>
                    ¡No pierdas más tiempo lidiando con la la contabilidad de tu
                    empresa!
                  </h1>
                  <p>
                    Descubre cómo nuestros servicios de Contabilidad General
                    pueden impulsar el éxito de tu negocio. ¡Contáctanos hoy
                    mismo!
                  </p>
                  <div className="d-flex flex-column">
                    <span className="text-muted">contacto@contawork.cl</span>
                    <span className="text-muted">+569 92182181</span>
                    <span className="text-muted">Santiago - Chile</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <form action="">
                    <div className="row">
                      <div className="col-12 mb-2">
                        <label htmlFor="nombre" className="form-label">
                          Nombre
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                        />
                      </div>

                      <div className="col-12  mb-2">
                        <label htmlFor="correo" className="form-label">
                          Correo
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="correo@correo.com"
                          id="correo"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-2">
                        <label htmlFor="mensaje" className="form-label">
                          Mensaje
                        </label>
                        <textarea
                          name="mensaje"
                          id="mensaje"
                          className="form-control"
                        ></textarea>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-12  mb-2">
                            <label className="form-label">Empresa</label>

                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="empresa"
                                id="pyme"
                              />
                              <label
                                htmlFor="soltero"
                                className="form-check-label"
                              >
                                Pyme
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="empresa"
                                id="mediana"
                              />
                              <label
                                htmlFor="casado"
                                className="form-check-label"
                              >
                                Mediana Empresa
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mb-2">
                            <label className="form-label">Servicio</label>
                            <select
                              name="servicio"
                              id="servicio"
                              className="form-select"
                            >
                              <option value="contable">Gestion Contable</option>
                              <option value="consultoria">
                                Gestion Consultoria
                              </option>
                              <option value="tributaria">
                                Gestion Tributaria
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <div>
                          <div className="form-check mb-2">
                            <input
                              type="checkbox"
                              name="terminos"
                              id="terminos"
                              className="form-check-input"
                            />
                            <label
                              htmlFor="terminos"
                              className="form-check-label"
                            >
                              Quiero recibir promociones de servicios
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="col-12 btn btn-primary "
                            data-bs-dismiss="offcanvas"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Contacto;
