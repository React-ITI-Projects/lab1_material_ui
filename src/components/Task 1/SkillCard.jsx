import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { grey, blue, deepPurple, green } from "@mui/material/colors";
import React from "react";

import DetailsBtn from "./DetailsBtn";

function SkillCard({ icon, iconName, title, description }) {
  const iconColorMap = {
    FaReact: blue[500],
    BrushIcon: deepPurple[400],
    PhoneIphoneIcon: green[500],
  };

  const selectedColor = iconColorMap[iconName] || grey[600];

  const coloredIcon = React.cloneElement(icon, {
    style: { color: selectedColor, fontSize: 40 },
  });

  return (
    <Card
      sx={{
        maxWidth: 450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: 4,
        borderRadius: 2,
        transition: "0.3s ease",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Avatar sx={{ bgcolor: grey[200], width: 80, height: 80 }}>
          {coloredIcon}
        </Avatar>
      </CardMedia>

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Tajawal",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            fontFamily: "Tajawal",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <DetailsBtn />
      </CardActions>
    </Card>
  );
}

export default SkillCard;
