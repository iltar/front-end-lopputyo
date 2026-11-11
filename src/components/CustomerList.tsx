import { useEffect, useState } from "react";
import type { Customer } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { getCustomers } from "../customerapi";

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const columns: GridColDef[] = [
    { field: "firstname", headerName: "First Name", flex: 2, hideable: false},
    { field: "lastname", headerName: "Last Name", flex: 2, hideable: false },
    { field: "email", headerName: "Email", flex: 3 },
    { field: "phone", headerName: "Phone", flex: 2 },
    { field: "streetaddress", headerName: "Street Address", flex: 3 },
    { field: "postcode", headerName: "Post Code", flex: 2 },
    { field: "city", headerName: "City", flex: 2 },
    { field: "_links.customer.href", headerName: "", flex: 2, sortable: false, hideable: false }
  ];

  const fetchCustomers = () => {
    getCustomers()
      .then((data) => setCustomers(data._embedded.customers))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <div style={{width: "100%", marginTop: 5}}>
        <DataGrid
          rows={customers}
          columns={columns}
          getRowId={(row) => row._links.self.href}
        />
      </div>
    </>
  );
}
