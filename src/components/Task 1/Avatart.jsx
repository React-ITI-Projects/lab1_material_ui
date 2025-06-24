import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import CustomButtomBadge from "./CustomButtomBadge";

function Avatart() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <Avatar
          sx={{
            width: 300,
            height: 300,
            borderColor: "white",
            borderWidth: 3,
            borderStyle: "solid",
          }}
        >
          <PersonIcon sx={{ color: grey[600], fontSize: 150 }} />
        </Avatar>

        <CustomButtomBadge />
      </Box>
    </>
  );
}
export default Avatart;
