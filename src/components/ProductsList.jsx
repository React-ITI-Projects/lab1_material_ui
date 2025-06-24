import ProductCard from "./ProductCard";
import { Grid, Container, Typography } from "@mui/material";

function ProductsList() {
  const products = [
    {
      id: 1,
      title: "Smartphone",
      description:
        "High-performance smartphone with stunning display and long battery life.",
      image: "https://via.placeholder.com/300x200?text=Smartphone",
      price: 899,
    },
    {
      id: 2,
      title: "Laptop",
      description:
        "Lightweight laptop with powerful specs for both work and gaming.",
      image: "https://via.placeholder.com/300x200?text=Laptop",
      price: 1299,
    },
    {
      id: 3,
      title: "Headphones",
      description:
        "Noise-cancelling headphones with crystal-clear sound and comfort.",
      image: "https://via.placeholder.com/300x200?text=Headphones",
      price: 199,
    },
    {
      id: 4,
      title: "Smartwatch",
      description:
        "Track your health and stay connected with this sleek smartwatch.",
      image: "https://via.placeholder.com/300x200?text=Smartwatch",
      price: 299,
    },
    {
      id: 5,
      title: "Gaming Console",
      description:
        "Next-gen gaming experience with ultra-fast performance and graphics.",
      image: "https://via.placeholder.com/300x200?text=Console",
      price: 499,
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      description:
        "Portable speaker with powerful sound and long-lasting battery.",
      image: "https://via.placeholder.com/300x200?text=Speaker",
      price: 149,
    },
    {
      id: 7,
      title: "Digital Camera",
      description:
        "Capture moments in high resolution with this easy-to-use camera.",
      image: "https://via.placeholder.com/300x200?text=Camera",
      price: 599,
    },
    {
      id: 8,
      title: "Desk Lamp",
      description: "Modern LED desk lamp with adjustable brightness and angle.",
      image: "https://via.placeholder.com/300x200?text=Lamp",
      price: 89,
    },
    {
      id: 9,
      title: "Backpack",
      description:
        "Durable and stylish backpack suitable for work, school, or travel.",
      image: "https://via.placeholder.com/300x200?text=Backpack",
      price: 59,
    },
  ];

  return (
    <Container sx={{ mt: 5 }} maxWidth="lg">
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsList;
