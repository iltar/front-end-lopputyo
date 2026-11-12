import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h5">
            Personal Trainer Scheduling System
          </Typography>
        </Toolbar>
      </AppBar>
      <nav style={{textAlign: "center"}}>
            <Typography variant="button" style={{ padding: 5 }}>
              <Link to={"/"}>Customers</Link>
            </Typography>
            <Typography variant="button" style={{ padding: 5 }}>
              <Link to={"/trainings"}>Trainings</Link>
            </Typography>
          </nav>
      <Outlet />
      <CssBaseline />
    </Container>
  );
}

export default App;
