import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function AppBarComp() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <Typography
              variant="h4"
              color="white"
              sx={{ fontWeight: "bold", letterSpacing: 2 }}
            >
              MySTORE
            </Typography>
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Typography variant="h6">STORE</Typography>
          <Typography variant="h6" sx={{ ml: 3, mr: 3 }}>
            LOGIN
          </Typography>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <DarkModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
