import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import Home from "./pages/Home/Home";

function App() {
  return (
    <StyledEngineProvider>
      <ThemeProvider>
        <CssBaseline />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
