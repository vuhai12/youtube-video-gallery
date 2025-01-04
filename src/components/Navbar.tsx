import {
  AppBar,
  Toolbar,
  InputBase,
  Avatar,
  Box,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import logoLightMode from "../assets/images/logoLightMode.png";
import logoDarkMode from "../assets/images/logoDarkMode.png";
import avatar from "../assets/images/avatar.png";
import tia from "../assets/images/tia.png";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicIcon from "@mui/icons-material/Mic";
import { useUI } from "../context/UIContext";
import Theme from "./Theme";

// Tạo các style với styled() từ MUI
const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary, // Sử dụng màu chữ từ theme
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

function Navbar() {
  const { toggleSidebar, isDarkMode } = useUI();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        boxShadow: "none",
        borderBottom: "none",
        position: "fixed",
        top: "0",
        zIndex: "1200",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "22px",
          paddingRight: "22px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            alignItems: "center",
            display: "flex",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleSidebar()}
          >
            <MenuIcon sx={{ color: isDarkMode ? "#ffffff" : "#555555" }} />
          </IconButton>
          <Logo variant="h6">
            <img
              src={isDarkMode ? logoDarkMode : logoLightMode}
              alt="Logo"
              style={{ height: 40 }}
            />
          </Logo>
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: 30,
              flexGrow: 1,
              border: "1px solid #ccc",
              "&:hover": {
                borderColor: "#888",
              },
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                flexGrow: 1,
                paddingLeft: 2,
                paddingRight: 3,
                "& .MuiInputBase-input": {
                  padding: "10px 10px",
                  color: (theme) => theme.palette.text.primary,
                },
              }}
            />
            <img
              src={tia}
              alt="tia"
              style={{ height: "12px", marginRight: "15px" }}
            />

            <IconButton
              type="submit"
              sx={{
                padding: 1,
                height: "38px",
                backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
                borderRadius: "0 50% 50% 0",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#555" : "#d0d0d0",
                },
              }}
            >
              <SearchIcon sx={{ color: isDarkMode ? "white" : "black" }} />{" "}
            </IconButton>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="microphone"
            sx={{
              padding: 1,
              backgroundColor: "#f0f0f0",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#d0d0d0",
              },
            }}
          >
            <MicIcon sx={{ color: "gray" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="notifications"
            sx={{ mr: 2 }}
          >
            <NotificationsIcon sx={{ color: "gray" }} />{" "}
          </IconButton>
          <Theme />
          <AvatarWrapper alt="User Avatar" src={avatar} sx={{ ml: 2 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
