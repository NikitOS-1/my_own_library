import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import { appTheme } from "theme";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import Footer from "container/Footer/Footer";
import routes from "routes";
import { useRoutes } from "react-router-dom";

function App() {
  const appsTheme = appTheme({});
  const allPages = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appsTheme}>
        <CssBaseline />
        {/* <Header />
        <Main />
        <Footer /> */}
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
