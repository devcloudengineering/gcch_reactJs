import { Route, Routes, NavLink } from "react-router-dom";
import PrincipalAdmin from "./components/PrincipalAdmin";

// Componentes de las secciones
const Home = () => <h2>Inicio</h2>;
const Entries = () => <h2>Entradas</h2>;
const Users = () => <h2>Usuarios</h2>;
const Settings = () => <h2>Configuración</h2>;
const Logout = () => <h2>Salir</h2>;

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra lateral */}
        <aside className="barra-lateral col-12 col-sm-auto p-0">
          <div className="logo">
            <h2 className="py-4 m-0">Dashboard</h2>
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
            <NavLink to="logout" className="nav-link">
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
            <Route path="logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
