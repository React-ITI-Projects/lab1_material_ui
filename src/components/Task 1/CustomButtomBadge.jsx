import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

function CustomButtomBadge() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: -10,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: yellow[800],
        color: "black",
        px: 2,
        py: 0.5,
        borderRadius: "12px",
        boxShadow: 2,
        fontSize: 14,
      }}
    >
      <Typography sx={{ fontFamily: "Tajawal", fontWeight: "bold" }}>
        مطور ويب
      </Typography>
    </Box>
  );
}

export default CustomButtomBadge;
