import React from "react";
import Navbar from "../components/Navbar";
import { Box, useTheme } from "@mui/material";
import SidebarOpen from "../components/SidebarOpen";
import SidebarClose from "../components/SidebarClose";
import CategoryPlaylist from "../components/CategoryPlaylist";
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
          backgroundColor: theme.palette.background.default, // Áp dụng màu nền từ theme
        }}
      >
        {/* Sidebar */}
        <Box sx={{ width: "60px", flexShrink: 0 }}>
          {isSidebarOpen ? <SidebarOpen /> : <SidebarClose />}
        </Box>

        {/* Nội dung chính */}
        <Box
          sx={{
            flexGrow: 1,
            padding: "16px",
            overflowY: "auto",
            backgroundColor: theme.palette.background.paper, // Áp dụng màu nền từ theme cho nội dung chính
          }}
        >
          {/* <CategoryPlaylist /> */}
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
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen mờ
              zIndex: 99999, // Đảm bảo lớp phủ này nằm dưới nội dung và sidebar
            }}
            onClick={toggleSidebar}
          />
        )}
      </Box>
    </>
  );
};

export default MainLayout;
