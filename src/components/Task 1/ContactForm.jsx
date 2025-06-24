import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

function ContactForm() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        fontFamily: "Tajawal",
        direction: "rtl",
      }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <Typography fontWeight="bold" mb={0.5}>
            الاسم الكامل
          </Typography>
          <TextField
            fullWidth
            placeholder="ادخل اسمك"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <Typography fontWeight="bold" mb={0.5}>
            البريد الإلكتروني
          </Typography>
          <TextField
            fullWidth
            placeholder="ادخل بريدك الإلكتروني"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <Typography fontWeight="bold" mb={0.5}>
            الرسالة
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="اكتب رسالتك هنا"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(to right, #007bff, #8e2de2)",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Tajawal",
            mt: 1,
            py: 1.2,
            "&:hover": {
              background: "linear-gradient(to right, #0062cc, #6a1bbf)",
            },
          }}
          endIcon={<SendIcon sx={{ mr: 2 }} />}
        >
          إرسال الرسالة
        </Button>
      </Box>
    </Paper>
  );
}

export default ContactForm;
