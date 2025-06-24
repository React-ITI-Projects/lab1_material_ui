import { Button, Typography } from "@mui/material";

function DetailsBtn() {
  return (
    <Button variant="contained" size="medium" sx={{ pl: 3, pr: 3 }}>
      <Typography sx={{ fontFamily: "Tajawal" }}>التفاصيل</Typography>
    </Button>
  );
}

export default DetailsBtn;
