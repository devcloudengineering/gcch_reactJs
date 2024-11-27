const AcordeonFaq = () => {
  return (
    <>
      <div className="accordion accordion-flush" id="temario">
        <div className="accordion-item">
          <h2 className="accordion-header" id="encabezado-1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#elemento-1"
              aria-expanded="true"
              aria-controls="elemento-1"
            >
              ¿Por qué son importantes los servicios de contabilidad?
            </button>
          </h2>

          <div
            id="elemento-1"
            className="accordion-collapse collapse show"
            aria-labelledby="encabezado-1"
            data-bs-parent="#temario"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, praesentium animi. Ratione accusamus fugit saepe
                cupiditate omnis accusantium modi adipisci, sunt numquam
                expedita, ea deleniti aliquid et quas voluptatum iusto.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="encabezado-2">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#elemento-2"
              aria-expanded="true"
              aria-controls="elemento-2"
            >
              ¿A quienes van dirigidos nuestros planes?
            </button>
          </h2>

          <div
            id="elemento-2"
            className="accordion-collapse collapse"
            aria-labelledby="encabezado-2"
            data-bs-parent="#temario"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, praesentium animi. Ratione accusamus fugit saepe
                cupiditate omnis accusantium modi adipisci, sunt numquam
                expedita, ea deleniti aliquid et quas voluptatum iusto.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="encabezado-3">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#elemento-3"
              aria-expanded="true"
              aria-controls="elemento-3"
            >
              ¿Qué obligaciones tributarias debe cumplir mensualmente una Pyme?
            </button>
          </h2>

          <div
            id="elemento-3"
            className="accordion-collapse collapse"
            aria-labelledby="encabezado-3"
            data-bs-parent="#temario"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, praesentium animi. Ratione accusamus fugit saepe
                cupiditate omnis accusantium modi adipisci, sunt numquam
                expedita, ea deleniti aliquid et quas voluptatum iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcordeonFaq;
