import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

function App() {

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Personal Trainer Scheduling System</Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
    </Container>
  )
}

export default App