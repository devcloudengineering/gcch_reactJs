// rafce short hand create react component export default
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient opacity-1 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand fs-2 text-white">
          Navbar
        </a>
        {/* Boton para el menu movil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar / Ocultar menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navegacion  */}
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="menu"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 fw-bold">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "nav-link text-white-50" : "nav-link text-white"
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>

            {/* dropdown */}
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a
                  className="btn btn-dark bg-gradient dropdown-toggle text-white fst-italic"
                  type="button"
                  id="dropdown-personalizado"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdown-personalizado"
                >
                  <li>
                    <h6 className="dropdown-header">Servicios Contables</h6>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Servicios Tributarios
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <h6 className="dropdown-header">Servicios CORE</h6>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Servicios de Consultoria
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Servicios de Remuneraciones
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/noticias"}
                className={({ isActive }) =>
                  `${
                    isActive ? "nav-link text-white-50" : "nav-link text-white"
                  }`
                }
              >
                Anuncios Gestor Contable
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contacto"}
                className={({ isActive }) =>
                  `${
                    isActive ? "nav-link text-white-50" : "nav-link text-white"
                  }`
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "btn btn-success bg-gradient text-white-50 d-none d-lg-block"
                  : "btn btn-success bg-gradient text-white d-none d-lg-block"
              }`
            }
          >
            Administrador
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navmenu;
