import { Container, Typography } from "@mui/material";
import SkillsList from "./SkillsList";
import { grey } from "@mui/material/colors";

function SkillsSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
        bgcolor: grey[100],
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, fontFamily: "Tajawal" }}
      >
        مهاراتي و خبراتي
      </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        sx={{ mb: 4, fontFamily: "Tajawal" }}
      >
        مجموعة من المهارات و الخبرات التي اتمتع بها في مجال تطوير الويب{" "}
      </Typography>

      <SkillsList />
    </Container>
  );
}

export default SkillsSection;
