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
          display: "inline-flex", // Chỉ chiếm không gian bằng với nội dung bên trong
          alignItems: "center", // Căn giữa Switch và label theo chiều dọc
          width: "fit-content", // Đảm bảo chiều rộng của label chỉ bằng với Switch
          "& .MuiFormControlLabel-label": {
            display: "none", // Ẩn phần label nếu không cần thiết
          },
        }}
      />
    </Box>
  );
};

export default Theme;
