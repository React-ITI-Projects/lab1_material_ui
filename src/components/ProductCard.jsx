import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

import AddToCartBtn from "./AddToCartBtn";

function ProductCard({ title, description, image, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={image} title={title} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          ${price}
        </Typography>
      </CardContent>

      <CardActions>
        <AddToCartBtn />
        <IconButton>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color="warning" sx={{ fontSize: "20px" }} />
          ))}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
