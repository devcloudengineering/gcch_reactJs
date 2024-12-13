import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormIngresarClientes = ({
  show,
  onClose,
  actualizarTabla,
  actualizarTotal,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    // handleChange,
  } = useForm({ mode: "all" });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
    onClose();
    reset();
  };
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setIsSubmitting(true);

      // Realizar la solicitud al servidor
      const response = await fetch(`http://localhost:3000/api/clientes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.msg || "Ocurrió un error al procesar la solicitud."
        );
      }

      // Procesar el resultado de la solicitud
      const result = await response.json();

      // Mostrar mensaje de éxito
      setSubmitStatus("Cliente ingresado correctamente");
      setTimeout(() => {
        setSubmitStatus("");
        handleClose();
      }, 2500);

      // Actualizar datos en el cliente
      const { clientes, total } = result;
      reset(clientes);
      actualizarTabla(clientes);
      actualizarTotal(total);
    } catch (error) {
      // Manejar errores y mostrar mensaje al usuario
      setSubmitStatus(
        `Error: ${error.message || "No se pudo ingresar el cliente"}`
      );
      console.error("Error en la solicitud:", error);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`modal modal-lg fade ${isVisible ? "show" : ""}`}
      tabIndex="-1"
      style={{
        display: show || isVisible ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      role="dialog"
      aria-hidden={!show}
    >
      <div
        className={`modal-dialog text-center ${
          isVisible ? "animate-in" : "animate-out"
        }`}
      >
        <div className="modal-content bg-light">
          <div className="modal-header">
            <h5 className="modal-title">Ingresar Cliente</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row row-cols-2">
                <div className="col mb-1">
                  <label htmlFor="cliente" className="form-label">
                    Cliente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cliente"
                    {...register("cliente", {
                      required: {
                        value: true,
                        message: "El cliente es requerido",
                      },
                    })}
                  />
                  {errors.cliente?.message && (
                    <span className="text-danger my-2">
                      * {errors.cliente.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="rutcliente" className="form-label">
                    Rut Cliente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rutcliente"
                    {...register("rutcliente", {
                      required: {
                        value: true,
                        message: "Rut del cliente requerido",
                      },
                    })}
                  />
                  {errors.rutcliente && (
                    <span className="text-danger my-2">
                      * {errors.rutcliente.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="razonsocial" className="form-label">
                    Razon Social
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="razonsocial"
                    {...register("razonsocial", {
                      required: {
                        value: true,
                        message: "Razon social requerido",
                      },
                    })}
                  />
                  {errors.razonsocial && (
                    <span className="text-danger my-2">
                      * {errors.razonsocial.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="rutempresa" className="form-label">
                    Rut Empresa
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rutempresa"
                    {...register("rutempresa", {
                      required: {
                        value: true,
                        message: "Rut empresa requerido",
                      },
                    })}
                  />
                  {errors.rutempresa && (
                    <span className="text-danger my-2">
                      * {errors.rutempresa.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="domicilio" className="form-label">
                    Domicilio
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="domicilio"
                    rows={2}
                    {...register("domicilio", {
                      required: {
                        value: true,
                        message: "Domicilio requerido",
                      },
                    })}
                  />
                  {errors.domicilio && (
                    <span className="text-danger my-2">
                      * {errors.domicilio.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="notificaciones" className="form-label">
                    Notificaciones
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="notificaciones"
                    {...register("notificaciones", {
                      required: {
                        value: true,
                        message: "Correo requerido",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Correo no válido",
                      },
                    })}
                  />
                  {errors.notificaciones && (
                    <span className="text-danger my-2">
                      * {errors.notificaciones.message}
                    </span>
                  )}
                </div>

                <div className="col  mb-1">
                  <label htmlFor="telefono" className="form-label">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
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

                <div className="col  mb-1">
                  <label htmlFor="representantes" className="form-label">
                    Representante(s) Legal(s)
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows={3}
                    id="representantes"
                    {...register("representantes", {
                      required: {
                        value: true,
                        message: "Razon social requerido",
                      },
                    })}
                  />
                  {errors.representantes && (
                    <span className="text-danger my-2">
                      * {errors.representantes.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 d-flex justify-content-center gap-4">
                  <button
                    type="button"
                    className="btn col-4 btn-secondary"
                    onClick={handleClose}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`col-4 btn ${
                      isSubmitting ? "btn-secondary" : "btn-primary"
                    }`}
                    disabled={isSubmitting || !isValid} // Evita el envío si el formulario no es válido
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Ingresando...
                      </>
                    ) : (
                      "Ingresar"
                    )}
                  </button>
                </div>
                <div className="col-12">
                  {submitStatus && (
                    <p className="text-center mt-2 text-success">
                      {submitStatus}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

FormIngresarClientes.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  actualizarTabla: PropTypes.func.isRequired,
  actualizarTotal: PropTypes.func.isRequired,
};

export default FormIngresarClientes;
