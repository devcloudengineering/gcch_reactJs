import { Route, Routes, NavLink } from "react-router-dom";
import PrincipalAdmin from "./components/PrincipalAdmin";
import Clientes from "./components/Clientes";

// Componentes de las secciones
const Pagos = () => <h2>Pagos</h2>;
const Anuncios = () => <h2>Anuncios</h2>;

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra lateral */}
        <aside className="barra-lateral col-4 col-sm-auto p-0">
          <div className="logo bg-dark fst-italic">
            <h2 className="py-4 m-0">Panel Admin</h2>
          </div>
          <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
            <NavLink to="" className="nav-link" end>
              Inicio
            </NavLink>
            <NavLink to="clientes" className="nav-link">
              Clientes
            </NavLink>
            <NavLink to="pagos" className="nav-link">
              Pagos
            </NavLink>
            <NavLink to="anuncios" className="nav-link">
              Anuncios
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Salir
            </NavLink>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="main col">
          <Routes>
            <Route path="" element={<PrincipalAdmin />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="pagos" element={<Pagos />} />
            <Route path="anuncios" element={<Anuncios />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
