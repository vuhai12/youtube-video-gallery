import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

// Định nghĩa kiểu cho Context
interface UIContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Tạo Context với giá trị mặc định
const UIContext = createContext<UIContextType | undefined>(undefined);

// Provider Component
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Tạo theme cho MUI dựa trên chế độ sáng/tối
  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      isDarkMode,
      toggleDarkMode,
    }),
    [isSidebarOpen, isDarkMode]
  );

  return (
    <UIContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UIContext.Provider>
  );
};

// Hook để sử dụng Context
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
