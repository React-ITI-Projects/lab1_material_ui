import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { FaGithub, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1c2532",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 4,
        fontFamily: "Tajawal",
        direction: "rtl",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        كل الحقوق محفوظة 2025 ©
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <FaGithub size={20} style={{ cursor: "pointer" }} />
        <FaInstagram size={20} style={{ cursor: "pointer" }} />
        <FaTwitter size={20} style={{ cursor: "pointer" }} />
        <FaFacebookF size={20} style={{ cursor: "pointer" }} />
      </Stack>
    </Box>
  );
}

export default Footer;
