import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const allPages = useRoutes(routes);

  const appTheme = "";

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Toaster toastOptions={toasterOptions} />
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
