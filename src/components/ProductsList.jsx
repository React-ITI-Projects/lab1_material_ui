import ProductCard from "./ProductCard";
import { Grid, Container, Typography } from "@mui/material";

// Images Imports
import smartphoneImg from "../assets/smartphone.jfif";
import laptopImg from "../assets/laptop.jfif";
import headphoneImg from "../assets/headphone.jfif";
import smartwatchImg from "../assets/Smartwatch.jfif";
import gamingConsoleImg from "../assets/Gaming Console.jfif";
import bluetoothSpeakerImg from "../assets/BluetoothSpeaker.jfif";
import digitalCameraImg from "../assets/digitalCamera.jfif";
import deskLampImg from "../assets/laptop.jfif";
import backpackImg from "../assets/smartphone.jfif";

function ProductsList() {
  const products = [
    {
      id: 1,
      title: "Smartphone",
      description:
        "High-performance smartphone with stunning display and long battery life.",
      image: smartphoneImg,
      price: 899,
    },
    {
      id: 2,
      title: "Laptop",
      description:
        "Lightweight laptop with powerful specs for both work and gaming.",
      image: laptopImg,
      price: 1299,
    },
    {
      id: 3,
      title: "Headphones",
      description:
        "Noise-cancelling headphones with crystal-clear sound and comfort.",
      image: headphoneImg,
      price: 199,
    },
    {
      id: 4,
      title: "Smartwatch",
      description:
        "Track your health and stay connected with this sleek smartwatch.",
      image: smartwatchImg,
      price: 299,
    },
    {
      id: 5,
      title: "Gaming Console",
      description:
        "Next-gen gaming experience with ultra-fast performance and graphics.",
      image: gamingConsoleImg,
      price: 499,
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      description:
        "Portable speaker with powerful sound and long-lasting battery.",
      image: bluetoothSpeakerImg,
      price: 149,
    },
    {
      id: 7,
      title: "Digital Camera",
      description:
        "Capture moments in high resolution with this easy-to-use camera.",
      image: digitalCameraImg,
      price: 599,
    },
    {
      id: 8,
      title: "Desk Lamp",
      description: "Modern LED desk lamp with adjustable brightness and angle.",
      image: deskLampImg,
      price: 89,
    },
    {
      id: 9,
      title: "Backpack",
      description:
        "Durable and stylish backpack suitable for work, school, or travel.",
      image: backpackImg,
      price: 59,
    },
  ];

  return (
    <Container sx={{ mt: 5, mb: 5 }} maxWidth="lg">
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
