import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MenuIcon from "@mui/icons-material/Menu";
import logoLightMode from "../assets/images/logoLightMode.png";
import logoDarkMode from "../assets/images/logoDarkMode.png";
import { useUI } from "../context/UIContext";
import { useLocation, Link } from "react-router-dom"; // Thêm Link từ react-router-dom

interface SidebarOpenProps {}

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 240,
  height: "100vh",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  overflowY: "auto",
  position: "fixed",
  top: 0,
  zIndex: 999999,
}));

const Logo = styled(Typography)(() => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  color: "white",
}));

const LinkItem = styled(Link)(() => ({
  textDecoration: "none",
  color: "black",
}));

const ListItemCustom = styled(ListItem)(() => ({
  display: "block",
}));

const SidebarOpen: React.FC<SidebarOpenProps> = () => {
  const { toggleSidebar, isDarkMode } = useUI();
  const location = useLocation(); // Lấy thông tin route hiện tại

  // Hàm kiểm tra xem route hiện tại có khớp với route của một mục không
  const isActive = (route: string): boolean => location.pathname === route;

  return (
    <SidebarContainer>
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 64,
          paddingLeft: "20px",
          borderBottom: "1px solid #ddd",
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

      {/* Menu Items */}
      <List>
        {/* Primary Section */}
        <ListItemCustom disablePadding>
          <LinkItem to="/">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/") && isDarkMode
                    ? "black"
                    : isActive("/") && !isDarkMode
                    ? "black"
                    : !isActive("/") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <ListItemCustom disablePadding>
          <LinkItem to="/subscriptions">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/subscriptions") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/subscriptions") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/subscriptions") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/subscriptions") && isDarkMode
                    ? "black"
                    : isActive("/subscriptions") && !isDarkMode
                    ? "black"
                    : !isActive("/subscriptions") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <Divider />

        {/* Library Section */}
        <ListItemCustom disablePadding>
          <LinkItem to="/library">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/library") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/library") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/library") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/library") && isDarkMode
                    ? "black"
                    : isActive("/library") && !isDarkMode
                    ? "black"
                    : !isActive("/library") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <ListItemCustom disablePadding>
          <LinkItem to="/history">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/history") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/history") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/history") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/history") && isDarkMode
                    ? "black"
                    : isActive("/history") && !isDarkMode
                    ? "black"
                    : !isActive("/history") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <ListItemCustom disablePadding>
          <LinkItem to="/watch-later">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/watch-later") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/watch-later") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/watch-later") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/watch-later") && isDarkMode
                    ? "black"
                    : isActive("/watch-later") && !isDarkMode
                    ? "black"
                    : !isActive("/watch-later") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="Watch Later" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <ListItemCustom disablePadding>
          <LinkItem to="/liked-videos">
            <ListItemButton
              sx={{
                backgroundColor:
                  isActive("/liked-videos") && isDarkMode
                    ? "#d0d0d0"
                    : isActive("/liked-videos") && !isDarkMode
                    ? "#d0d0d0"
                    : !isActive("/liked-videos") && isDarkMode
                    ? "black"
                    : "white",
                color:
                  isActive("/liked-videos") && isDarkMode
                    ? "black"
                    : isActive("/liked-videos") && !isDarkMode
                    ? "black"
                    : !isActive("/liked-videos") && isDarkMode
                    ? "white"
                    : "#121212",

                width: "100%",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#d0d0d0" : "#e0e0e0", // Màu nền khi hover
                  color: "black", // Màu chữ khi hover
                },
              }}
            >
              <ListItemIcon>
                <ThumbUpIcon />
              </ListItemIcon>
              <ListItemText primary="Liked Videos" />
            </ListItemButton>
          </LinkItem>
        </ListItemCustom>
        <Divider />
      </List>
    </SidebarContainer>
  );
};

export default SidebarOpen;
