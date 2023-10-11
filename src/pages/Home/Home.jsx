import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Typography variant="h1" color="primary.main">
        This is Home Component
      </Typography>
      <Typography color="text.primary" mb="3rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laboriosam
      </Typography>

      <Box my={3}>
        <Typography variant="h4">Change Theme</Typography>
      </Box>
    </Box>
  );
};

export default Home;
