import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import AlertaModal from "../../../components/AlertaModal/AlertaModal";
import AlertaModalConfirmacion from "../../../components/AlertaModal/AlertaModalConfirmacion";
import FormModificarAnuncios from "./FormModificarAnuncios/FormModificarAnuncios";

const Anuncios = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Errores formulario
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  // Carga
  const [isLoading, setIsLoading] = useState(false);
  // Estado para los anuncios
  const [anuncios, setAnuncios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Modal confirmacion eliminacion
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalConfirm = () => {
    setShowModal(false);
  };
  const [anuncioIdToDelete, setAnuncioIdToDelete] = useState(null);
  const handleOpenModal = (id) => {
    setAnuncioIdToDelete(id); // Guarda el id del cliente a eliminar
    setShowModal(true); // Abre el modal de confirmación
  };

  // Modal modificacion
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [anuncioToEdit, setNnuncioToEdit] = useState(null);
  const handleCloseModalModificar = () => {
    setIsEditModalOpen(false);
  };
  const handleEdit = (anuncio) => {
    setNnuncioToEdit(anuncio); // Establece el cliente actual
    setIsEditModalOpen(true); // Abre el modal
  };

  // Manejo centralizado de errores
  const handleAPIError = (response) => {
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
  };

  // Cargar anuncios al montar el componente
  useEffect(() => {
    const fetchAnuncios = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/anuncios");
        handleAPIError(response);
        const { anuncios } = await response.json();
        setAnuncios(anuncios);
      } catch (error) {
        setError(`Error al cargar los anuncios: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnuncios();
  }, []);

  // Eliminar anuncio
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/api/anuncios/${anuncioIdToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token,
          },
        }
      );
      handleAPIError(response);
      if (response.ok) {
        setShowModal(false); // Cierra el modal de confirmación
      }
      const { anuncios } = await response.json();
      setAnuncios(anuncios || []);
    } catch (error) {
      setError(`Error al eliminar anuncio: ${error.message}`);
    } finally {
      setShowModal(false);
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), setError(null), 2500);
    }
  };

  // Crear un nuevo anuncio
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      data.fecha = new Date();
      const formData = new FormData();
      formData.append("titulo", data.titulo);
      formData.append("parrafo", data.parrafo);
      formData.append("cuerpo", data.cuerpo);
      formData.append("fecha", data.fecha);

      if (data.imagen && data.imagen[0]) {
        formData.append("imagen", data.imagen[0]);
      }

      const response = await fetch(`http://localhost:3000/api/anuncios/`, {
        method: "POST",
        body: formData,
      });

      handleAPIError(response);

      const { anuncios } = await response.json();
      setAnuncios(anuncios);
      setIsModalOpen(true);
    } catch (error) {
      setError(`Error al crear el anuncio: ${error.message}`);
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), setError(null), 2500);
      reset();
    }
  };

  return (
    <div className="container">
      <div className="row g-0 d-flex justify-content-evenly mb-2">
        <div className="col-12 col-lg-6 m-2">
          <h3 className="titulo text-center mb-4 text-dark fw-bold">
            Nuevo Anuncio
          </h3>
          <div className="p-4 border-0 rounded bg-white shadow-lg">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row gy-3">
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
                <div className="col-12">
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

                {/* Botón de Enviar */}
                <div className="col-12 text-end">
                  <button
                    className={`btn btn-primary px-5 rounded-pill shadow ${
                      isLoading ? "disabled" : ""
                    }`}
                  >
                    {isLoading ? "Subiendo..." : "Subir Anuncio"}
                  </button>
                  {
                    <AlertaModal
                      show={isModalOpen}
                      title="Anuncio creado exitosamente"
                      body="El anuncio ha sido creado en la base de datos"
                      onClose={handleCloseModal}
                    />
                  }
                </div>

                {/* Mensajes de Estado */}
                <div className="col-12">
                  {submitStatus && (
                    <p className="text-center mt-2 text-success">
                      {submitStatus}
                    </p>
                  )}
                  {error && (
                    <p className="text-center mt-2 text-danger">{error}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-4 m-2">
          <h3 className="titulo text-center mb-4 text-dark fw-bold">
            Control de Anuncios
          </h3>
          <div className="contenedor p-4 border-0 rounded bg-white shadow-lg">
            {isLoading ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "200px" }}
              >
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : anuncios.length > 0 ? (
              anuncios.map((anuncio) => (
                <div
                  key={anuncio.id}
                  className="card mb-3 border-0 shadow-sm rounded-3 position-relative"
                >
                  {/* Badge de Fecha */}
                  <span className="badge bg-light bg-gradient text-dark fst-italic position-absolute top-0 end-0 m-2">
                    {new Date(anuncio.fecha).toLocaleDateString("es-CL", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-secondary mb-3">
                      {anuncio.titulo}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-warning btn-sm rounded-pill px-4"
                        onClick={() => handleEdit(anuncio)}
                      >
                        Modificar
                      </button>
                      <button
                        className="btn btn-danger btn-sm rounded-pill px-4"
                        onClick={() => handleOpenModal(anuncio._id)}
                      >
                        Eliminar
                      </button>
                      {
                        <AlertaModalConfirmacion
                          show={showModal}
                          title="Confirmación de Eliminación"
                          body="¿Estás seguro de que deseas eliminar este anuncio?"
                          onClose={handleCloseModalConfirm}
                          onConfirm={() => handleDelete(anuncio._id)}
                        />
                      }
                      {
                        <FormModificarAnuncios
                          show={isEditModalOpen}
                          onClose={handleCloseModalModificar}
                          anuncio={anuncioToEdit}
                          setanuncio={setAnuncios}
                        />
                      }
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "200px" }}
              >
                <i className="bi bi-megaphone text-muted fs-1 mb-3"></i>
                <p className="text-muted text-center">
                  No hay anuncios disponibles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
