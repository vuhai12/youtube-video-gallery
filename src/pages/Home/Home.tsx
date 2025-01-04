import { useEffect, useState, useRef } from "react";
import CategoriesItem from "../../components/CategoriesItem";
import VideoItem from "../../components/VideoItem";
import { Box, Grid, useTheme } from "@mui/material";
import { getVideosApi } from "../../apis/youtube.api";

interface VideoSnippet {
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnails: {
    medium: {
      url: string;
      width: number;
      height: number;
    };
  };
}

interface VideoItemProps {
  snippet: VideoSnippet;
}

interface VideosApiResponse {
  items: VideoItemProps[];
  nextPageToken?: string;
}

interface Category {
  id: number;
  playlistId: string;
  channel: string;
}

const Home: React.FC = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string>("Sports");
  const [playlistId, setPlaylistId] = useState<string>(
    "PL19gf5ZottsowDZXG8jwDK_hiwnF0i8f2"
  );
  const [listVideos, setListVideos] = useState<VideoItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null); // Khởi tạo AbortController
  const categoryVideos: Category[] = [
    {
      id: 1,
      playlistId: "PL19gf5ZottsowDZXG8jwDK_hiwnF0i8f2",
      channel: "Sports",
    },
    {
      id: 2,
      playlistId: "PLoklUhMMmZSv-4VC49mA9G0GJAa0s3w_m",
      channel: "Music",
    },
    {
      id: 3,
      playlistId: "PLHphQM2rzm6LGvlZH-JCCNaNjCAnxEYyW",
      channel: "Movie",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !loading &&
        nextPageToken
      ) {
        console.log("handleScroll");
        getListVideo(
          playlistId,
          parseInt(import.meta.env.VITE_LIMIT),
          nextPageToken
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [playlistId, nextPageToken, loading]);

  useEffect(() => {
    getListVideo(playlistId, parseInt(import.meta.env.VITE_LIMIT));
  }, [playlistId]);

  const handleClick = (item: Category) => {
    setSelected(item.channel);
    setPlaylistId(item.playlistId);
    setListVideos([]); // Xóa danh sách video khi chuyển category
  };

  const getListVideo = async (
    playlistId: string,
    maxResults: number,
    pageToken: string | null = null
  ) => {
    if (loading) return;
    setLoading(true);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const res: VideosApiResponse = await getVideosApi(
        playlistId,
        maxResults,
        pageToken,
        abortControllerRef.current.signal
      );

      setListVideos((prevVideos) => [...prevVideos, ...res.items]);
      setNextPageToken(res.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: "999",
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          width: "100%",
          top: "64px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {categoryVideos.map((item) => (
          <CategoriesItem
            key={item.id}
            active={item.channel === selected}
            onClick={() => handleClick(item)}
            name={item.channel}
          />
        ))}
      </Box>

      <Grid
        container
        spacing={2}
        sx={{ marginTop: "60px", paddingBottom: "20px" }}
      >
        {listVideos.map((video, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <VideoItem
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              publishedAt={video.snippet.publishedAt}
              thumbnails={video.snippet.thumbnails.medium}
            />
          </Grid>
        ))}
      </Grid>

      {loading && <h4>Loading...</h4>}
    </>
  );
};

export default Home;
