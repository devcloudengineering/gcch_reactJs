import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        className="bg-dark text-white text-center d-flex flex-column justify-content-center"
        style={{ minHeight: "150px" }}
      >
        <div className="d-flex flex-column flex-md-row gap-1 gap-md-4 justify-content-center align-items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "nav-link text-white-50" : "nav-link text-white"}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to={"/noticias"}
            className={({ isActive }) =>
              `${isActive ? "nav-link text-white-50" : "nav-link text-white"}`
            }
          >
            Anuncios
          </NavLink>
          <NavLink
            to={"/contacto"}
            className={({ isActive }) =>
              `${isActive ? "nav-link text-white-50" : "nav-link text-white"}`
            }
          >
            Contactanos
          </NavLink>
        </div>
        <hr className="w-75 mx-auto" />
        <p className=" text-white fw-bold fst-italic">
          © 2024 Gestor Contable, Chile
        </p>
      </div>
    </>
  );
};

export default Footer;
