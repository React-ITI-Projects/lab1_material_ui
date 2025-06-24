import React from "react";
import { Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function ReadMoreBtn() {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<KeyboardBackspaceIcon />}
      sx={{ bgcolor: "white", color: "#2575fc" }}
    >
      <Typography sx={{ fontFamily: "Tajawal", fontWeight: "bold" }}>
        اعرف المزيد
      </Typography>
    </Button>
  );
}

export default ReadMoreBtn;
