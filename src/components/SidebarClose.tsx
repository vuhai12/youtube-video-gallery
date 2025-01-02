import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link, useLocation } from "react-router-dom";
import { useUI } from "../context/UIContext";

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 60,
  height: "100vh",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  position: "fixed",
  left: "0",
  top: "60px",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: "10px",
  textAlign: "center",
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "5px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const SidebarClose = () => {
  const location = useLocation(); // Lấy URL hiện tại

  const links = [
    { to: "/", label: "Home", icon: <HomeIcon /> },
    {
      to: "/subscriptions",
      label: "Subscriptions",
      icon: <SubscriptionsIcon />,
    },
    { to: "/library", label: "Library", icon: <VideoLibraryIcon /> },
    { to: "/history", label: "History", icon: <HistoryIcon /> },
    { to: "/watch-later", label: "Watch Later", icon: <WatchLaterIcon /> },
    { to: "/liked-videos", label: "Liked Videos", icon: <ThumbUpIcon /> },
  ];

  const { toggleSidebar, toggleDarkMode, isDarkMode } = useUI();

  return (
    <SidebarContainer>
      <List>
        {links.map(({ to, label, icon }) => {
          return (
            <StyledLink to={to} key={to}>
              <StyledListItem
                disablePadding
                sx={{
                  color:
                    location.pathname === to && isDarkMode
                      ? "#fff"
                      : location.pathname === to && !isDarkMode
                      ? "black"
                      : "#999999",
                }}
              >
                <StyledListItemIcon
                  sx={{
                    color:
                      location.pathname === to && isDarkMode
                        ? "#fff"
                        : location.pathname === to && !isDarkMode
                        ? "black"
                        : "#999999",
                  }}
                >
                  {icon}
                </StyledListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "8px",
                      color: () =>
                        location.pathname === to && isDarkMode
                          ? "#fff"
                          : location.pathname === to && !isDarkMode
                          ? "black"
                          : "#999999",
                    },
                  }}
                />
              </StyledListItem>
            </StyledLink>
          );
        })}
      </List>
    </SidebarContainer>
  );
};

export default SidebarClose;
