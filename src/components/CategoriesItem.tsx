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
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: active
          ? theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black
          : "transparent",
        color: active
          ? theme.palette.mode === "dark"
            ? theme.palette.common.black
            : theme.palette.common.white
          : theme.palette.mode === "dark"
          ? theme.palette.common.white
          : theme.palette.text.primary,
        padding: "6px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        border: active
          ? "none"
          : theme.palette.mode === "dark"
          ? `1px solid ${theme.palette.common.white}`
          : "none",
        boxShadow: "none",
        mx: "5px",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: active
            ? theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[900]
            : theme.palette.grey[400],
        },
      }}
    >
      {name}
    </Button>
  );
};

export default CategoriesItem;
