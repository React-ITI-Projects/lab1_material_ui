import CategoryButton from "./CategoryButton";
import { Stack, Container, Divider } from "@mui/material";

function CategoriesList() {
  const categories = [
    "SmartPhones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home-decoration",
    "Reset Filter",
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 7 }}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
        flexWrap="wrap"
      >
        {categories.map((category, index) => (
          <CategoryButton key={index} name={category} />
        ))}
      </Stack>
    </Container>
  );
}

export default CategoriesList;
