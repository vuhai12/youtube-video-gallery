import React from "react";
import Navbar from "../components/Navbar";
import { Box, useTheme } from "@mui/material";
import SidebarOpen from "../components/SidebarOpen";
import SidebarClose from "../components/SidebarClose";
import { useUI } from "../context/UIContext";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, toggleSidebar } = useUI();
  const theme = useTheme(); // Lấy theme hiện tại từ Context
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          marginTop: "50px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ width: "60px", flexShrink: 0 }}>
          {isSidebarOpen ? <SidebarOpen /> : <SidebarClose />}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            padding: "16px",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {children}
        </Box>
        {isSidebarOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 99999,
            }}
            onClick={toggleSidebar}
          />
        )}
      </Box>
    </>
  );
};

export default MainLayout;
