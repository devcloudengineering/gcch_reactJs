import { NavLink, useNavigate } from "react-router-dom";
import bannerLogin from "../assets/banner-contacto.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const [submitStatus, setSubmitStatus] = useState(null);
  const { login } = useAuth();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status) {
        setSubmitStatus("Permiso aceptado");
        localStorage.setItem("token", result.token);
        localStorage.setItem("admin", result.usuario.nombre);
        login(result.token);
        reset();
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else {
        throw new Error(result.msg || "Error desconocido");
      }
    } catch (error) {
      setSubmitStatus("Permiso denegado");
      console.error("Error en la solicitud:", error.toString());
    }
  };
  const bgLogin = {
    backgroundImage: `url(${bannerLogin})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="container-fluid" style={bgLogin}>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-12 col-sm-6 col-md-4">
          <h1 className="text-white text-center mb-4">Administrador Sign In</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column p-5 border rounded bg-light shadow-lg"
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                name="correo"
                id="correo"
                className="form-control"
                placeholder=""
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Ingresa tu correo",
                  },
                })}
              />
              <label htmlFor="correo" className="text-muted fst-italic">
                Email
              </label>
              {errors.correo && (
                <span className="text-danger my-2">
                  * {errors.correo.message}
                </span>
              )}
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder=""
                {...register("password", {
                  required: {
                    value: true,
                    message: "Ingresa tu password",
                  },
                })}
              />
              <label htmlFor="password" className="text-muted fst-italic">
                Password
              </label>
              {errors.password && (
                <span className="text-danger my-2">
                  * {errors.password.message}
                </span>
              )}
            </div>

            <div className="col-12">
              {submitStatus && (
                <div className="text-center my-2">
                  {submitStatus === "Permiso denegado" ? (
                    <div className="text-center my-2">
                      <p className="text-danger">{submitStatus}</p>
                      <div className="spinner-grow text-danger" role="status">
                        <span className="visually-hidden"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center my-2">
                      <p className="text-success">{submitStatus}</p>
                      <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden"></span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary bg-gradient mb-2">
              Ingresar
            </button>
            <NavLink to={"/inicio"} className="btn btn-dark">
              Pagina Principal
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
