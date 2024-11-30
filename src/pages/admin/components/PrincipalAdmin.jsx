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

        <div className="widget comentarios">
          <h3 className="titulo">Comentarios</h3>
          <div className="contenedor">
            <div className="comentario d-flex flex-wrap">
              <div className="foto">
                <a href="#">
                  <img src="img/persona1.jpg" alt="" width="100" />
                </a>
              </div>

              <div className="texto">
                <a href="#">John Doe</a>
                <p>
                  en <a href="#">Mi primera entrada</a>
                </p>
                <p className="texto-comentario">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam repellendus itaque optio dolores nemo at eveniet
                  molestias delectus, magni consectetur.
                </p>
              </div>

              <div className="botones d-flex justify-content-start flex-wrap w-100">
                <button className="aprobar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                  </svg>
                  Aprobar
                </button>
                <button className="eliminar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                  Eliminar
                </button>
                <button className="bloquear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  Bloquear
                </button>
              </div>
            </div>

            <div className="comentario d-flex flex-wrap">
              <div className="foto">
                <a href="#">
                  <img src="img/persona2.jpg" alt="" width="100" />
                </a>
              </div>

              <div className="texto">
                <a href="#">John Doe</a>
                <p>
                  en <a href="#">Mi primera entrada</a>
                </p>
                <p className="texto-comentario">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam repellendus itaque optio dolores nemo at eveniet
                  molestias delectus, magni consectetur.
                </p>
              </div>

              <div className="botones d-flex justify-content-start flex-wrap w-100">
                <button className="aprobar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                  </svg>
                  Aprobar
                </button>
                <button className="eliminar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                  Eliminar
                </button>
                <button className="bloquear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  Bloquear
                </button>
              </div>
            </div>

            <div className="comentario d-flex flex-wrap">
              <div className="foto">
                <a href="#">
                  <img src="img/persona3.jpg" alt="" width="100" />
                </a>
              </div>

              <div className="texto">
                <a href="#">John Doe</a>
                <p>
                  en <a href="#">Mi primera entrada</a>
                </p>
                <p className="texto-comentario">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam repellendus itaque optio dolores nemo at eveniet
                  molestias delectus, magni consectetur.
                </p>
              </div>

              <div className="botones d-flex justify-content-start flex-wrap w-100">
                <button className="aprobar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                  </svg>
                  Aprobar
                </button>
                <button className="eliminar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                  Eliminar
                </button>
                <button className="bloquear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  Bloquear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalAdmin;
