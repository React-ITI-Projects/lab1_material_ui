import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Navbar() {
  return (
    <>
      <AppBar position="static" color="light">
        <Toolbar>
          <IconButton color="#212121" sx={{ mr: 1 }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton color="#212121">
            <NightlightRoundIcon />
          </IconButton>

          <div style={{ flexGrow: 1 }} />

          <IconButton edge="start">
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold", fontFamily: "Tajawal" }}
            >
              أحمد محمد
            </Typography>

            <IconButton color="primary">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
