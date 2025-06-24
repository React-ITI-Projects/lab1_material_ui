import "./App.css";
import AppBarComp from "./components/AppBarComp";
import CategoriesList from "./components/CategoriesList";
import ProductCard from "./components/ProductCard";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      <AppBarComp />
      <CategoriesList />
      <ProductsList />
    </>
  );
}

export default App;
