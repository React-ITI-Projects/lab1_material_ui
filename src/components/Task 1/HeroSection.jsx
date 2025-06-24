import { Box, Container, Button, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Avatart from "./Avatart";
import ReadMoreBtn from "./ReadMoreBtn";

function HeroSection() {
  const name = "أحمد محمد";
  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundImage: `linear-gradient(to left, #8e2de2, #007bff)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "white",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Avatart />
      </Container>

      <Container sx={{ textAlign: "right" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontFamily: "Tajawal" }}
        >
          مرحباً، أنا
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: "Tajawal", color: yellow[600] }}
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          mb={5}
          sx={{
            fontFamily: "Tajawal",
          }}
        >
          مطور واجهات مستخدم و مصمم تجارب تفاعلية، متخصص في إنشاء تطبيقات ويب
          حديثة باستخدام أحدث التقنيات
        </Typography>

        <ReadMoreBtn />
      </Container>
    </Box>
  );
}

export default HeroSection;
