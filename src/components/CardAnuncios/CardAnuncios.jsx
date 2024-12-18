import { useEffect, useState } from "react";

const CardAnuncios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const queryAPI = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/api/anuncios");
        if (!respuesta.ok) {
          throw new Error(`Error: ${respuesta.status}`);
        }
        const { anuncios } = await respuesta.json();
        setData(anuncios);
      } catch (error) {
        console.log(error.message);
      }
    };
    queryAPI();
  }, []);
  return (
    <div className="d-flex align-items-center flex-wrap justify-content-center">
      {data.map((anuncio) => (
        <div
          key={anuncio.id}
          className="card bg-gradient-card-noticias shadow-lg col-12 col-lg-6 mb-5"
        >
          <div className="row g-0 row-cols-2">
            <div className="col-4 position-relative">
              <img
                className="position-absolute top-50 start-50 translate-middle rounded shadow-lg"
                src={anuncio.imagen}
                style={{ height: "250px", width: "200px" }}
                alt={anuncio.titulo}
              />
            </div>

            <div className="col-8">
              <div className="card-body text-center mx-2">
                <div className="text-center mb-4">
                  <h4 className="text-white">{anuncio.titulo} </h4>
                  <br />
                  <p className="card-text text-light">{anuncio.parrafo}</p>
                </div>
                <button className="btn btn-md btn-light">Leer más</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAnuncios;
