import { Box, styled, Typography } from "@mui/material";

const Thumbnail = styled(Box)(() => ({
  width: "100%",
  height: "250px",
  borderRadius: "30px",
  overflow: "hidden",
  display: "block",
  position: "relative",
  border: "none",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "10px",
  color: theme.palette.text.primary,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const VideoInfo = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  color: theme.palette.text.secondary,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginTop: "5px",
}));

const ChannelName = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  color: theme.palette.text.secondary,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginTop: "5px",
}));

function VideoItem({
  title,
  channelTitle,
  publishedAt,
  thumbnails,
}: {
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnails: {
    height: number;
    url: string;
    width: number;
  };
}) {
  return (
    <Box>
      <Thumbnail>
        <img width={"100%"} height={"100%"} src={thumbnails?.url} />
      </Thumbnail>
      <Title>{title}</Title>
      <ChannelName>{channelTitle}</ChannelName>
      <VideoInfo>{publishedAt}</VideoInfo>
    </Box>
  );
}

export default VideoItem;
