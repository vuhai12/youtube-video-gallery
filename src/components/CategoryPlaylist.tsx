import React, { useState } from "react";
import CategoriesItem from "./CategoriesItem";
import VideoItem from "./VideoItem";
import { Box, Grid, useTheme } from "@mui/material";

const CategoryPlaylist = () => {
  const theme = useTheme(); // Lấy theme hiện tại từ MUI
  const categoryVideos = [
    {
      name: "Trending",
      videos: [
        {
          id: 1,
          title: "Trending Video 1",
          channelName: "Description 1",
          totalViews: 333,
          source: "https://www.youtube.com/embed/dbjTMDqHk6k",
        },
        {
          id: 2,
          title: "Trending Video 2",
          channelName: "Description 2",
          totalViews: 222,
          source: "https://www.youtube.com/embed/H01rM-JSHHg",
        },
        {
          id: 3,
          title: "Trending Video 3",
          channelName: "Description 3",
          totalViews: 122,
          source: "https://www.youtube.com/embed/tPvfsCVpMNQ",
        },
      ],
    },
    {
      name: "Music",
      videos: [
        {
          id: 1,
          title: "Music Video 1",
          channelName: "Description 1",
          totalViews: 333,
          source: "https://www.youtube.com/embed/ekr2nIex040",
        },
        {
          id: 2,
          title: "Music Video 2",
          channelName: "Description 2",
          totalViews: 222,
          source: "https://www.youtube.com/embed/TGQuCyLvay8",
        },
        {
          id: 3,
          title: "Music Video 3",
          channelName: "Description 3",
          totalViews: 122,
          source: "https://www.youtube.com/embed/kgDg1Pwp9tI",
        },
      ],
    },
    {
      name: "Movies",
      videos: [
        {
          id: 1,
          title: "Movies Video 1",
          channelName: "Description 1",
          totalViews: 333,
          source: "https://www.youtube.com/embed/aZcBWKOVFwg",
        },
        {
          id: 2,
          title: "Movies Video 2",
          channelName: "Description 2",
          totalViews: 222,
          source: "https://www.youtube.com/embed/WmIpicPxBkg",
        },
        {
          id: 3,
          title: "Movies Video 3",
          channelName: "Description 3",
          totalViews: 122,
          source: "https://www.youtube.com/embed/8ud31ymkNT0",
        },
      ],
    },
  ];

  const initialDatas = [
    {
      id: 1,
      title: "Trending Video 1",
      channelName: "Description 1",
      totalViews: 333,
      source: "https://www.youtube.com/embed/dbjTMDqHk6k",
    },
    {
      id: 2,
      title: "Trending Video 2",
      channelName: "Description 2",
      totalViews: 222,
      source: "https://www.youtube.com/embed/H01rM-JSHHg",
    },
    {
      id: 3,
      title: "Trending Video 3",
      channelName: "Description 3",
      totalViews: 122,
      source: "https://www.youtube.com/embed/tPvfsCVpMNQ",
    },
  ];

  const [videoDatas, setVideoDatas] = useState(initialDatas);
  const [selected, setSelected] = useState("Trending");

  const handleClick = (item: any) => {
    setSelected(item.name);
    setVideoDatas(item.videos);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: "999",
          background: theme.palette.background.default, // Màu nền thay đổi theo theme
          color: theme.palette.text.primary, // Màu chữ thay đổi theo theme
          width: "100%",
          top: "64px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {categoryVideos.map((item, index) => (
          <CategoriesItem
            key={index}
            active={item.name === selected}
            onClick={() => handleClick(item)}
            name={item.name}
          />
        ))}
      </Box>

      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        {videoDatas.map((videos, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <VideoItem
              title={videos.title}
              channelName={videos.channelName}
              totalViews={videos.totalViews}
              source={videos.source}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CategoryPlaylist;
