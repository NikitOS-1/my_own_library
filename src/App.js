import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { appTheme } from "theme";
import { settings } from "nprogress";

function App() {
  const allPages = useRoutes(routes);

  const appsTheme = appTheme({
    theme: settings.theme,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appsTheme}>
        <CssBaseline />
        <Toaster toastOptions={toasterOptions} />
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
