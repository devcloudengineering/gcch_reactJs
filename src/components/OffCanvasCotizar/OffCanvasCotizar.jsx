import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const OffCanvasCotizar = ({ setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });
  const [submitStatus, setSubmitStatus] = useState(null);
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status) {
        setSubmitStatus("El formulario se envió correctamente");
        reset();

        setTimeout(() => {
          setIsModalOpen(true);
        }, 2000);

        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      setSubmitStatus(
        `En estos momentos tenemos problemas con la solicitud, porfavor contactarnos con nuestros otros canales de comunicacion ... Gracias por la comprension`
      );
      console.error("Error en la solicitud:", error.message);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 mb-1">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Escribe tu nombre..."
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre es requerido",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "El nombre excede la cantidad máxima de caracteres",
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                })}
              />
              {errors.nombre?.message && (
                <span className="text-danger my-2">
                  * {errors.nombre.message}
                </span>
              )}
            </div>

            <div className="col-12  mb-1">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="correo@correo.com"
                id="correo"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Correo requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.correo && (
                <span className="text-danger my-2">
                  * {errors.correo.message}
                </span>
              )}
            </div>

            <div className="col-12  mb-1">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                placeholder="Escribe tu telefono..."
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "Telefono requerido",
                  },
                })}
              />
              {errors.telefono && (
                <span className="text-danger my-2">
                  * {errors.telefono.message}
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-1">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                className="form-control"
                placeholder="¿En que te podemos ayudar?"
                {...register("mensaje", {
                  required: {
                    value: true,
                    message: "Mensaje requerido",
                  },
                })}
              ></textarea>
              {errors.mensaje && (
                <span className="text-danger my-2">
                  * {errors.mensaje.message}
                </span>
              )}
            </div>
            <div className="col-12 mb-1">
              <div className="row">
                <div className="col-12 mb-1">
                  <label className="form-label">Empresa</label>

                  {/* Opción 1: Pyme */}
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="tipo"
                      id="pyme"
                      value="Pyme"
                      {...register("tipo", {
                        required: "Selecciona un tipo de empresa",
                      })}
                    />
                    <label htmlFor="pyme" className="form-check-label">
                      Pyme
                    </label>
                  </div>

                  {/* Opción 2: Mediana Empresa */}
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="tipo"
                      id="mediana"
                      value="Mediana Empresa"
                      {...register("tipo")}
                    />
                    <label htmlFor="mediana" className="form-check-label">
                      Mediana Empresa
                    </label>
                  </div>

                  {/* Opción 3: Gran Empresa */}
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="tipo"
                      id="grande"
                      value="Gran Empresa"
                      {...register("tipo")}
                    />
                    <label htmlFor="grande" className="form-check-label">
                      Gran Empresa
                    </label>
                  </div>

                  {/* Mensaje de error */}
                  {errors.tipo && (
                    <span className="text-danger my-2">
                      * {errors.tipo.message}
                    </span>
                  )}
                </div>
                <div className="col-12 mb-1">
                  <label className="form-label">Servicio</label>
                  <select name="servicio" id="servicio" className="form-select">
                    <option value="contable">Gestion Contable</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="tributaria">Gestion Tributaria</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div>
                <div className="form-check mb-1">
                  <input
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    className="form-check-input"
                  />
                  <label htmlFor="terminos" className="form-check-label">
                    Quiero recibir informacion adicional
                  </label>
                </div>
                <button
                  type="submit"
                  className="col-12 btn btn-primary"
                  data-bs-dismiss={isValid ? "offcanvas" : ""}
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="col-12">
              {submitStatus && (
                <p className="text-center mt-2 text-success">{submitStatus}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

OffCanvasCotizar.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
export default OffCanvasCotizar;
