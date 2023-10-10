import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SettingsContext } from "contexts/SettingsContext";
import React, { useContext } from "react";

const Home = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

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
