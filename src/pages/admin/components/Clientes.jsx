import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

const Clientes = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  const columns = [
    {
      header: "Cliente",
      accessorKey: "cliente",
      footer: "Cliente",
    },
    {
      header: "RutCliente",
      accessorKey: "rutcliente",
      footer: "RutCliente",
      cell: (info) => {
        const rut = info.getValue();
        const rutSinPuntosYEspacios = rut ? rut.replace(/[\s.]+/g, "") : "";
        return (
          <span
            className="no-wrap"
            style={{
              whiteSpace: "nowrap",
              width: "auto",
              display: "inline-block",
            }}
          >
            {rutSinPuntosYEspacios}
          </span>
        );
      },
    },
    {
      header: "RazonSocial",
      accessorKey: "razonsocial",
      footer: "RazonSocial",
    },
    {
      header: "RutEmpresa",
      accessorKey: "rutempresa",
      footer: "RutEmpresa",
      cell: (info) => {
        const rut = info.getValue();
        const rutSinPuntosYEspacios = rut ? rut.replace(/[\s.]+/g, "") : "";
        return (
          <span
            className="no-wrap"
            style={{
              whiteSpace: "nowrap",
              width: "auto",
              display: "inline-block",
            }}
          >
            {rutSinPuntosYEspacios}
          </span>
        );
      },
    },
    {
      header: "Domicilio",
      accessorKey: "domicilio",
      footer: "Domicilio",
    },
    {
      header: "Notificaciones",
      accessorKey: "notificaciones",
      footer: "Notificaciones",
      cell: (info) => {
        const email = info.getValue();
        return email ? email.toLowerCase() : ""; // Convierte el email a mayúsculas
      },
    },
    {
      header: "Telefono",
      accessorKey: "telefono",
      footer: "Telefono",
    },
    {
      header: "Representate(s)",
      accessorKey: "representante(s)",
      footer: "Representate(s)",
    },
    {
      header: "Estado",
      accessorKey: "estado",
      footer: "Estado",
      cell: (info) =>
        info.getValue() ? (
          <span className="badge bg-success">Activo </span>
        ) : (
          <span className="badge bg-danger">Inactivo </span>
        ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia la carga
        const response = await fetch("http://localhost:3000/api/clientes");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const { clientes } = await response.json();
        setData(clientes); // Actualiza el estado con los datos
      } catch (err) {
        setError(err.message); // Manejo de errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData(); // Llama a la función para realizar el fetch
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  if (loading) return <p>Loading...</p>; // Mensaje de carga
  if (error) return <p>Error: {error}</p>; // Mensaje de error

  return (
    <div className="table-responsive table-sm small">
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        className="form-control "
        placeholder="Buscar..."
      />
      <div
        className="overflow-auto"
        style={{ maxHeight: "500px", minHeight: "500px" }}
      >
        <table className="table table-sm table-striped table-borderless w-100 caption-top align-middle text-center">
          <caption>Lista de clientes 2024</caption>
          <thead>
            {table.getHeaderGroups().map((headergroup) => (
              <tr key={headergroup.id} className="table-dark mx-1">
                {headergroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: "⬆️", desc: "⬇️" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className="table-dark">
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => (
                  <th key={footer.id}>
                    {flexRender(
                      footer.column.columnDef.footer,
                      footer.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
      <div
        className="d-flex justify-content-center align-items-center mt-3"
        style={{ position: "sticky", bottom: 0 }}
      >
        <nav>
          <ul className="pagination">
            <li
              className={`page-item ${
                !table.getCanPreviousPage() ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                &laquo; Primer
              </button>
            </li>
            <li
              className={`page-item ${
                !table.getCanPreviousPage() ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </button>
            </li>
            {Array.from({ length: table.getPageCount() }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  table.getState().pagination.pageIndex === index
                    ? "active"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => table.setPageIndex(index)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                !table.getCanNextPage() ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Siguiente
              </button>
            </li>
            <li
              className={`page-item ${
                !table.getCanNextPage() ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                Última &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Clientes;
