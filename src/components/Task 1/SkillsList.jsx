import SkillCard from "./SkillCard";
import { FaReact } from "react-icons/fa";
import BrushIcon from "@mui/icons-material/Brush";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Grid, Box } from "@mui/material";

function SkillsList() {
  const iconMap = {
    PhoneIphoneIcon: <PhoneIphoneIcon />,
    BrushIcon: <BrushIcon />,
    FaReact: <FaReact />,
  };

  const skills = [
    {
      iconName: "PhoneIphoneIcon",
      title: "تطبيقات متجاوبة",
      description:
        "بناء تطبيقات متجاوبة تعمل على جميع الاجهزة من هواتف مجمولةإلى أجهزة كمبيوتر مكتبية",
    },
    {
      iconName: "BrushIcon",
      title: "تصميم واجهات",
      description:
        "تصميم واجهات مستخدم جذابة وسهلة الاستخدام مع التركيز على تجربة المستخدم",
    },
    {
      iconName: "FaReact",
      title: "تطوير React",
      description:
        "خبرة في تطوير تطبيقات React مع استخدام مكتبات مثل Redux و Material UI و Tailwind CSS",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard
              icon={iconMap[skill.iconName]}
              title={skill.title}
              description={skill.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsList;
