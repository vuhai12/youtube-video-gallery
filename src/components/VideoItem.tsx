import { Box, styled, Typography } from "@mui/material";

// Tạo styled component cho Thumbnail
const Thumbnail = styled(Box)(() => ({
  width: "100%", // Đảm bảo ảnh chiếm toàn bộ chiều rộng
  height: "250px", // Tự động điều chỉnh chiều cao theo tỷ lệ của ảnh
  borderRadius: "30px", // Bo góc của khung chứa ảnh
  overflow: "hidden", // Ẩn phần ảnh vượt quá góc bo
  display: "block", // Đảm bảo ảnh hiển thị ở dạng block
  position: "relative", // Đảm bảo WatchTime sẽ hiển thị ở vị trí tuyệt đối trong thumbnail
  border: "none",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px", // Kích thước chữ
  fontWeight: "bold",
  marginTop: "10px",
  color: theme.palette.text.primary, // Màu chữ thay đổi theo chế độ sáng/tối
  textOverflow: "ellipsis", // Trường hợp mô tả quá dài, sẽ cắt bớt
  overflow: "hidden", // Ẩn phần mô tả vượt quá chiều rộng
  whiteSpace: "nowrap", // Không cho phép xuống dòng trong mô tả
}));

const TotalViews = styled(Typography)(({ theme }) => ({
  fontSize: "12px", // Kích thước chữ
  color: theme.palette.text.secondary, // Màu chữ thay đổi theo chế độ sáng/tối
  textOverflow: "ellipsis", // Trường hợp mô tả quá dài, sẽ cắt bớt
  overflow: "hidden", // Ẩn phần mô tả vượt quá chiều rộng
  whiteSpace: "nowrap", // Không cho phép xuống dòng trong mô tả
  marginTop: "5px", // Khoảng cách giữa VideoInfo và ChannelName
}));

const ChannelName = styled(Typography)(({ theme }) => ({
  fontSize: "12px", // Kích thước chữ
  color: theme.palette.text.secondary, // Màu chữ thay đổi theo chế độ sáng/tối
  textOverflow: "ellipsis", // Trường hợp mô tả quá dài, sẽ cắt bớt
  overflow: "hidden", // Ẩn phần mô tả vượt quá chiều rộng
  whiteSpace: "nowrap", // Không cho phép xuống dòng trong mô tả
  marginTop: "5px", // Khoảng cách giữa ChannelName và VideoInfo
}));

function VideoItem({
  title,
  channelName,
  totalViews,
  source,
}: {
  title: string;
  channelName: string;
  totalViews: number;
  source: string;
}) {
  return (
    <Box>
      <Thumbnail>
        <iframe
          width={"100%"}
          height={"100%"}
          src={source}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </Thumbnail>
      <Title>{title}</Title>
      <ChannelName>{channelName}</ChannelName>
      <TotalViews>{`${totalViews} lượt xem`}</TotalViews>
    </Box>
  );
}

export default VideoItem;
