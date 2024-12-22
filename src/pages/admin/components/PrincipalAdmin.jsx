import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PrincipalAdmin() {
  const [chartData, setChartData] = useState(null);
  const [totalClientes, setTotalClientes] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/api/clientes")
      .then((response) => response.json())
      .then((data) => {
        // Verifica que los datos sean correctos
        if (data.ok && data.clientesPorCiudad) {
          setTotalClientes(data.total);
          const labels = data.clientesPorCiudad.map((item) => item._id); // _id es la ciudad
          const values = data.clientesPorCiudad.map((item) => item.cantidad); // cantidad es el número de clientes

          setChartData({
            labels,
            datasets: [
              {
                label: "Cantidad de Clientes",
                data: values,
                backgroundColor: [
                  "rgb(54, 162, 235)", // Azul suave (anteriormente para Antofagasta)
                  "rgb(255, 99, 132)", // Rojo suave (anteriormente para Santiago)
                  "rgb(75, 192, 192)", // Verde menta suave
                  "rgb(153, 102, 255)", // Lavanda
                  "rgb(255, 159, 64)", // Naranja suave
                  "rgb(255, 205, 86)", // Amarillo suave
                  "rgb(75, 192, 192)", // Turquesa suave
                  "rgb(255, 99, 132)", // Rosa claro
                  "rgb(54, 162, 235)", // Azul claro
                  "rgb(153, 102, 255)", // Lavanda claro
                ],
                borderColor: [
                  "rgb(54, 162, 235)", // Azul suave (anteriormente para Antofagasta)
                  "rgb(255, 99, 132)", // Rojo suave (anteriormente para Santiago)
                  "rgb(75, 192, 192)", // Verde menta suave
                  "rgb(153, 102, 255)", // Lavanda
                  "rgb(255, 159, 64)", // Naranja suave
                  "rgb(255, 205, 86)", // Amarillo suave
                  "rgb(75, 192, 192)", // Turquesa suave
                  "rgb(255, 99, 132)", // Rosa claro
                  "rgb(54, 162, 235)", // Azul claro
                  "rgb(153, 102, 255)", // Lavanda claro
                ],
                borderWidth: 1,
              },
            ],
          });
        }
      });
  }, []); // Solo se ejecuta una vez al montar el componente

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Distribución de Clientes por Ciudad: ${totalClientes} Clientes`,
      },
    },
  };

  return (
    <div className="container">
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-4">
          <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
            {/* Render the Doughnut chart only if chartData is available */}
            {chartData ? (
              <Doughnut data={chartData} options={options} />
            ) : (
              <p>Cargando...</p> // Muestra un mensaje mientras se carga
            )}
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default PrincipalAdmin;
