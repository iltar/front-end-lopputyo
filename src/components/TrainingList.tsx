import type { Training } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getTrainings } from "../trainingapi";
import dayjs from "dayjs";

export default function CustomerList() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Date",
      flex: 3,
      renderCell: (params: GridRenderCellParams) => (
        <>{dayjs(params.row.date).format("D.M.YYYY hh:mm")}</>
      )
    },
    { field: "duration", headerName: "Duration", flex: 1 },
    { field: "activity", headerName: "Activity", flex: 2 },
    {
      field: "customer",
      headerName: "Customer",
      flex: 2,
      renderCell: (params: GridRenderCellParams) =>
        params.row.customer.firstname + " " + params.row.customer.lastname
    },
    {
      field: "id",
      headerName: "",
      flex: 2,
      sortable: false,
      hideable: false,
      renderCell: (params: GridRenderCellParams) => <></>
    }
  ];

  const fetchTrainings = () => {
    getTrainings()
      .then((data) => setTrainings(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <>
      <div style={{ width: "100%", marginTop: 5 }}>
        <DataGrid
          rows={trainings}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </div>
    </>
  );
}
