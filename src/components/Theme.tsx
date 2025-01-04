import React from "react";
import { Switch, FormControlLabel, Box } from "@mui/material";
import { useUI } from "../context/UIContext";

const Theme: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useUI();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="primary"
          />
        }
        label={isDarkMode ? "Dark Mode" : "Light Mode"}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          width: "fit-content",
          "& .MuiFormControlLabel-label": {
            display: "none",
          },
        }}
      />
    </Box>
  );
};

export default Theme;
