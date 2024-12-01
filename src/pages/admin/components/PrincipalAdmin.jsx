const PrincipalAdmin = () => {
  return (
    <div className="row">
      <div className="columna col-12 col-lg-7">
        <div className="widget nueva_entrada">
          <h3 className="titulo">Nueva Entrada</h3>
          <form action="">
            <input type="text" placeholder="Titulo de la entrada" />
            <textarea placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab!"></textarea>
            <div className="d-flex justify-content-end">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="columna col-12 col-lg-5">
        <div className="widget estadisticas">
          <h3 className="titulo">Estadisticas</h3>
          <div className="contenedor d-flex flex-wrap">
            <div className="caja">
              <h3>15,236</h3>
              <p>Visitas</p>
            </div>
            <div className="caja">
              <h3>1,831</h3>
              <p>Registros</p>
            </div>
            <div className="caja">
              <h3>$160,545</h3>
              <p>Ingresos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalAdmin;
