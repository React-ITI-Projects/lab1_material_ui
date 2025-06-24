import "./App.css";
import AppBarComp from "./components/AppBarComp";
import CategoriesList from "./components/CategoriesList";
import ProductsList from "./components/ProductsList";

import Navbar from "./components/Task 1/Navbar";
import HeroSection from "./components/Task 1/HeroSection";

function App() {
  return (
    <>
      {/* Task 1 */}
      <Navbar />
      <HeroSection />

      {/* Task 2 */}
      {/* <AppBarComp />
      <CategoriesList />
      <ProductsList /> */}
    </>
  );
}

export default App;
