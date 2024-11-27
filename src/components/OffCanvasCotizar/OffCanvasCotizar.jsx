const OffCanvasCotizar = () => {
  return (
    <div
      className="offcanvas offcanvas-end bg-light"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasScrollingLabel" className="mx-auto">
          <span className="text-primary text-uppercase fst-italic fw-bold">
            Cotizacion{" "}
          </span>
          de servicio contable
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form action="">
          <div className="row">
            <div className="col-12 mb-2">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="nombre" />
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
                    <label htmlFor="soltero" className="form-check-label">
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
                    <label htmlFor="casado" className="form-check-label">
                      Mediana Empresa
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <label className="form-label">Servicio</label>
                  <select name="servicio" id="servicio" className="form-select">
                    <option value="contable">Gestion Contable</option>
                    <option value="consultoria">Gestion Consultoria</option>
                    <option value="tributaria">Gestion Tributaria</option>
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
                  <label htmlFor="terminos" className="form-check-label">
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
  );
};

export default OffCanvasCotizar;
