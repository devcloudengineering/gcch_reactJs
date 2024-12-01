import { Route, Routes, NavLink } from "react-router-dom";
import PrincipalAdmin from "./components/PrincipalAdmin";

// Componentes de las secciones
const Entries = () => <h2>Entradas</h2>;
const Users = () => <h2>Usuarios</h2>;
const Settings = () => <h2>Configuración</h2>;

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra lateral */}
        <aside className="barra-lateral col-12 col-sm-auto p-0">
          <div className="logo bg-dark fst-italic">
            <h2 className="py-4 m-0">Panel Admin</h2>
          </div>
          <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
            <NavLink to="" className="nav-link" end>
              Inicio
            </NavLink>
            <NavLink to="entries" className="nav-link">
              Entradas
            </NavLink>
            <NavLink to="users" className="nav-link">
              Usuarios
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Configuración
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
            <Route path="entries" element={<Entries />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
