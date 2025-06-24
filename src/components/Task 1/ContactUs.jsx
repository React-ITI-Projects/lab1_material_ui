import { Container, Typography } from "@mui/material";
import SkillsList from "./SkillsList";
import ContactForm from "./ContactForm";
function ContactUs() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, fontFamily: "Tajawal" }}
      >
        تواصل معي
      </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        sx={{ mb: 4, fontFamily: "Tajawal" }}
      >
        أرسل لي رسالة و سأرد عليك في اقرب وقت ممكن
      </Typography>

      <ContactForm />
    </Container>
  );
}

export default ContactUs;
