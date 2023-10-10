// import { Grid } from "@mui/material";

// const Home = () => {
//   return (
//     <div>
//       <Grid container spacing={2}>
//         <Grid item xs={12} border={"1px solid black"}>
//           <div>xs=12</div>
//         </Grid>
//         <Grid item xs={8} border={"1px solid black"}>
//           <div>xs=8</div>
//         </Grid>
//         <Grid item xs={4} border={"1px solid black"}>
//           <div>xs=4</div>
//         </Grid>
//         <Grid item xs={2} border={"1px solid black"}>
//           <div>xs=2</div>
//         </Grid>
//         <Grid item xs={10} border={"1px solid black"}>
//           <div>xs=10</div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };
// export default Home;

import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SettingsContext } from "contexts/SettingsContext";
import React, { useContext } from "react";

const Home = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

  const handleChangeDirection = (event) => {
    saveSettings({ ...settings, direction: event.target.value });
  };

  const handleChangeTheme = (event) => {
    saveSettings({ ...settings, theme: event.target.value });
  };

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
        <RadioGroup value={settings.theme} onChange={handleChangeTheme} row>
          <FormControlLabel
            value="light"
            control={<Radio />}
            label="Light Theme"
          />
          <FormControlLabel
            value="dark"
            control={<Radio />}
            label="Dark Theme"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Home;
