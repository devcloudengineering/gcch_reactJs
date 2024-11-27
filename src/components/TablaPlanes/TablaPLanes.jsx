const TablaPLanes = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-striped table-borderless ">
          <caption>Precios de planes contables mensuales</caption>
          <thead>
            <tr>
              <th style={{ width: "25%" }}></th>
              <th style={{ width: "25%" }}>
                <div className="card text-center bg-primary bg-gradient text-white">
                  <div className="card-header h2 test-uppercase fw-bold">
                    Pyme
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-wrap">
                      <p>Para empresas con ventas hasta $11.000.000</p>
                      <div className="h3">$150.000/mes</div>
                    </blockquote>
                  </div>
                </div>
              </th>
              <th style={{ width: "25%" }}>
                <div className="card text-center bg-primary bg-gradient text-white">
                  <div className="card-header h2 test-uppercase fw-bold">
                    Pyme
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-wrap">
                      <p>Para empresas con ventas hasta $11.000.000</p>
                      <div className="h3">$150.000/mes</div>
                    </blockquote>
                  </div>
                </div>
              </th>
              <th style={{ width: "25%" }}>
                <div className="card text-center bg-primary bg-gradient text-white">
                  <div className="card-header h2 test-uppercase fw-bold">
                    Pyme
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-wrap">
                      <p>Para empresas con ventas hasta $11.000.000</p>
                      <div className="h3">$150.000/mes</div>
                    </blockquote>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>
                Calculo declaración de impuestos mensuales (Formulario 29).
              </td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr className="table-success">
              <td>
                Calculo declaración de impuestos mensuales (Formulario 29).
              </td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                Calculo declaración de impuestos mensuales (Formulario 29).
              </td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr className="">
              <td></td>
              <td>
                <button className="btn btn-lg btn-primary">
                  Solicitar Plan
                </button>
              </td>
              <td>
                <button className="btn btn-lg btn-primary">
                  Solicitar Plan
                </button>
              </td>
              <td>
                <button className="btn btn-lg btn-primary">
                  Solicitar Plan
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaPLanes;
