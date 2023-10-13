import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { appTheme } from "theme";

function App() {
  const allPages = useRoutes(routes);

  const appsTheme = appTheme({});

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appsTheme}>
        <CssBaseline />
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
