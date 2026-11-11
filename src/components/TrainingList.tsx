import type { Training } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getTrainings } from "../trainingapi";

export default function CustomerList() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", flex: 3 },
    { field: "duration", headerName: "Duration", flex: 1 },
    { field: "activity", headerName: "Activity", flex: 2 },
    { field: "_links.customer.href", headerName: "Customer", flex: 3 },
    {
      field: "_links.training.href",
      headerName: "",
      flex: 2,
      sortable: false,
      hideable: false
    }
  ];

  const fetchTrainings = () => {
    getTrainings()
      .then((data) => setTrainings(data._embedded.trainings))
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
          getRowId={(row) => row._links.self.href}
        />
      </div>
    </>
  );
}
