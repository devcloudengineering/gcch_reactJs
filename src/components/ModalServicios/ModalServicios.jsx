const ModalServicios = () => {
  return (
    <>
      <div
        className="modal fade"
        id="modal-servicios"
        tabIndex="-1"
        aria-hidden="true"
        aria-labelledby="label-modal-2"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          {/* <!-- Contenido de la caja --> */}
          <div className="modal-content">
            {/* <!-- Encabezado de la caja --> */}
            <div className="modal-header ">
              <h5 className="modal-title">Te contactaremos a la brevedad</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>

            {/* <!-- Cuerpo de la caja --> */}
            <div className="modal-body">
              <div>
                <form action="">
                  <div className="row">
                    <div className="col-12 mb-1 text-start">
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>
                      <input type="text" className="form-control" id="nombre" />
                    </div>

                    <div className="col-12 mb-1 text-start">
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
                    <div className="col-12 mb-1 text-start">
                      <label htmlFor="mensaje" className="form-label">
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        className="form-control"
                        placeholder="¿En que te podemos ayudar?"
                      ></textarea>
                    </div>

                    <div className="col-12 mb-1 text-start">
                      <div className="row">
                        <div className="col-12 mb-1">
                          <label className="form-label">Empresa</label>

                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="empresa"
                              id="pyme"
                            />
                            <label
                              htmlFor="empresa"
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
                              htmlFor="mediana"
                              className="form-check-label"
                            >
                              Mediana Empresa
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mb-1 text-start">
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
                </form>
              </div>
            </div>

            {/* <!-- Pie de pagina de la caja --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalServicios;
