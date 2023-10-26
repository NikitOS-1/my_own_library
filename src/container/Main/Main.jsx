import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { Box, Container, Grid } from "@mui/material";

const Main = () => {
  const allPages = useRoutes(routes);

  return (
    <main>
      <Container maxWidth="lg">{allPages}</Container>
    </main>
  );
};

export default Main;
