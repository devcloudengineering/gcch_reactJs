import { useForm } from "react-hook-form";
import { useState } from "react";

const Anuncios = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // handleChange,
  } = useForm({ mode: "all" });
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      data.fecha = new Date();
      const formData = new FormData();
      formData.append("titulo", data.titulo);
      formData.append("parrafo", data.parrafo);
      formData.append("cuerpo", data.cuerpo);
      formData.append("fecha", data.fecha);

      // Verifica si hay un archivo para incluirlo
      if (data.imagen && data.imagen[0]) {
        formData.append("imagen", data.imagen[0]); // Agrega el archivo al FormData
      }

      const response = await fetch(`http://localhost:3000/api/anuncios/`, {
        method: "POST",
        body: formData, // FormData en lugar de JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.msg || "Ocurrió un error al procesar la solicitud."
        );
      }

      setSubmitStatus("Anuncio enviado correctamente.");
    } catch (error) {
      setSubmitStatus(
        `Error: ${error.message || "No se pudo ingresar el anuncio"}`
      );
      console.error("Error en la solicitud:", error);
    } finally {
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      reset();
    }
  };

  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-12 col-lg-7">
          <h3 className="titulo">Nuevo Anuncio</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-0">
              <div className="col-12 mb-2">
                <label htmlFor="titulo" className="form-label">
                  Titulo del anuncio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  {...register("titulo", {
                    required: {
                      value: true,
                      message: "El titulo es requerido",
                    },
                  })}
                />
                {errors.titulo?.message && (
                  <span className="text-danger my-2">
                    * {errors.titulo.message}
                  </span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="parrafo" className="form-label">
                  Parrafo del anuncio
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="parrafo"
                  rows={2}
                  {...register("parrafo", {
                    required: {
                      value: true,
                      message: "El parrafo es requerido",
                    },
                  })}
                />
                {errors.parrafo?.message && (
                  <span className="text-danger my-2">
                    * {errors.parrafo.message}
                  </span>
                )}
              </div>

              <div className="col-12  mb-2">
                <label htmlFor="cuerpo" className="form-label">
                  Cuerpo del anuncio
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows={4}
                  id="cuerpo"
                  {...register("cuerpo", {
                    required: {
                      value: true,
                      message: "Cuerpo del anuncio requerido",
                    },
                  })}
                />
                {errors.cuerpo && (
                  <span className="text-danger my-2">
                    * {errors.cuerpo.message}
                  </span>
                )}
              </div>

              <div className="col-12  mb-2">
                <label htmlFor="imagen" className="form-label">
                  Imagen del anuncio
                </label>
                <input
                  type="file"
                  className="form-control"
                  rows={4}
                  id="imagen"
                  {...register("imagen", {
                    required: {
                      value: true,
                      message: "Imagen requerida",
                    },
                  })}
                />
                {errors.imagen && (
                  <span className="text-danger my-2">
                    * {errors.imagen.message}
                  </span>
                )}
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-primary px-4">Subir Anuncio</button>
                <div className="col-12">
                  {submitStatus && (
                    <p className="text-center mt-2 text-success">
                      {submitStatus}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="columna col-12 col-lg-5">
          <div className="widget estadisticas">
            <h3 className="titulo">Control de Anuncios</h3>
            <div className="contenedor d-flex flex-wrap">
              <div className="caja">
                <h3>15,236</h3>
                <p>Anuncios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
