import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AlertaModalConfirmacion = ({ show, title, body, onClose, onConfirm }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(); // Llamada para confirmar la acción
    handleClose(); // Cierra el modal
  };

  return (
    <div
      className={`modal fade ${isVisible ? "show" : ""}`}
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
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-lg btn-secondary mx-auto"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-lg btn-danger bg-gradient mx-auto"
              onClick={handleConfirm}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AlertaModalConfirmacion.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default AlertaModalConfirmacion;
