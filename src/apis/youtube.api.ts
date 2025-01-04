import axios, { AxiosResponse } from "axios";

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

interface VideoItem {
  snippet: VideoSnippet;
}

interface VideosApiResponse {
  items: VideoItem[];
  nextPageToken?: string;
}

export const getVideosApi = async (
  playlistId: string,
  maxResults: number,
  pageToken: string | null = null,
  signal?: AbortSignal
): Promise<VideosApiResponse> => {
  try {
    const response: AxiosResponse<VideosApiResponse> = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: playlistId,
          maxResults: maxResults,
          pageToken: pageToken || undefined,
          key: import.meta.env.VITE_API_KEY,
        },
        signal,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request was canceled:", error.message);
    } else {
      console.error("Error fetching videos:", error);
    }
    throw new Error("Failed to fetch videos from YouTube API.");
  }
};
