import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CategoriesItem = ({
  name,
  onClick,
  active,
}: {
  name: string;
  onClick: () => void;
  active: boolean;
}) => {
  const theme = useTheme(); // Lấy theme từ context

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: active
          ? theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black
          : "transparent", // Không có màu nền khi không active
        color: active
          ? theme.palette.mode === "dark"
            ? theme.palette.common.black
            : theme.palette.common.white
          : theme.palette.mode === "dark"
          ? theme.palette.common.white // Màu chữ trắng khi không active ở Dark Mode
          : theme.palette.text.primary, // Màu chữ khi không active ở Light Mode
        padding: "6px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        border: active
          ? "none"
          : theme.palette.mode === "dark"
          ? `1px solid ${theme.palette.common.white}` // Viền trắng khi không active ở Dark Mode
          : "none", // Không có viền ở Light Mode
        boxShadow: "none",
        mx: "5px",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: active
            ? theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[900]
            : theme.palette.grey[400], // Màu nền khi hover
        },
      }}
    >
      {name}
    </Button>
  );
};

export default CategoriesItem;
