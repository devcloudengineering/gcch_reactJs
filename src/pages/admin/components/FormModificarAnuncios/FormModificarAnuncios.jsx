import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormModificarAnuncios = ({ anuncio, onClose, show, setanuncio }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all", defaultValues: anuncio });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (show) {
      reset(anuncio); // Sincroniza los valores iniciales del formulario al mostrar el modal
    }
  }, [show, anuncio, reset]);

  const handleClose = () => {
    onClose(); // Cierra el modal utilizando el callback proporcionado
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        `http://localhost:3000/api/anuncios/${data._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus("Cliente actualizado correctamente");
        setTimeout(() => {
          setSubmitStatus("");
          handleClose();
        }, 2500);
        const { anuncio: anuncioModificado, anuncios } = result;
        setanuncio(anuncios);
        reset(anuncioModificado);
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      setSubmitStatus("No se pudo actualizar el anuncio");
      console.error("Error en la solicitud:", error.message);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`modal modal-xl fade ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{
        display: show ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      role="dialog"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-dialog-centered animate-in">
        <div className="modal-content bg-white shadow-lg rounded-4">
          <div
            className="modal-header"
            style={{
              background: "linear-gradient(90deg, #007bff, #6610f2)",
              color: "#fff",
            }}
          >
            <h5 className="modal-title">Modificación del Anuncio</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row row-cols-2 d-flex flex-column gap-2">
                {/* Título del Anuncio */}
                <div className="col-12">
                  <label htmlFor="titulo" className="form-label fw-bold">
                    Título del anuncio
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="titulo"
                    {...register("titulo", {
                      required: {
                        value: true,
                        message: "El título es obligatorio",
                      },
                      maxLength: { value: 30, message: "Máximo 30 caracteres" },
                    })}
                  />
                  {errors.titulo?.message && (
                    <span className="text-danger mt-1 d-block">
                      * {errors.titulo.message}
                    </span>
                  )}
                </div>

                {/* Párrafo del Anuncio */}
                <div className="col-12">
                  <label htmlFor="parrafo" className="form-label fw-bold">
                    Párrafo del anuncio
                  </label>
                  <textarea
                    className="form-control rounded-3 shadow-sm"
                    id="parrafo"
                    rows={2}
                    {...register("parrafo", {
                      required: {
                        value: true,
                        message: "El párrafo es obligatorio",
                      },
                      maxLength: { value: 60, message: "Máximo 60 caracteres" },
                    })}
                  />
                  {errors.parrafo?.message && (
                    <span className="text-danger mt-1 d-block">
                      * {errors.parrafo.message}
                    </span>
                  )}
                </div>

                {/* Cuerpo del Anuncio */}
                <div className="col-12 ">
                  <label htmlFor="cuerpo" className="form-label fw-bold">
                    Cuerpo del anuncio
                  </label>
                  <textarea
                    className="form-control rounded-3 shadow-sm"
                    rows={4}
                    id="cuerpo"
                    {...register("cuerpo", {
                      required: {
                        value: true,
                        message: "El cuerpo es obligatorio",
                      },
                    })}
                  />
                  {errors.cuerpo && (
                    <span className="text-danger mt-1 d-block">
                      * {errors.cuerpo.message}
                    </span>
                  )}
                </div>

                {/* Imagen del Anuncio */}
                <div className="col-12">
                  <label htmlFor="imagen" className="form-label fw-bold">
                    Imagen del anuncio
                  </label>
                  <input
                    type="file"
                    className="form-control rounded-pill shadow-sm"
                    id="imagen"
                    {...register("imagen", {
                      required: {
                        value: true,
                        message: "La imagen es obligatoria",
                      },
                      validate: {
                        fileType: (files) =>
                          files[0]?.type.includes("image/") ||
                          "Debe ser una imagen",
                        fileSize: (files) =>
                          files[0]?.size <= 500000 || "Máximo 500 KB",
                      },
                    })}
                  />
                  {errors.imagen && (
                    <span className="text-danger mt-1 d-block">
                      * {errors.imagen.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="row mt-4">
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
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Actualizando...
                      </>
                    ) : (
                      "Actualizar"
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

FormModificarAnuncios.propTypes = {
  anuncio: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
    cuerpo: PropTypes.string,
    imagen: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setanuncio: PropTypes.func.isRequired,
};

export default FormModificarAnuncios;
