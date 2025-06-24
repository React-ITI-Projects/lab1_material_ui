import "./App.css";
// Task 1
import Navbar from "./components/Task 1/Navbar";
import HeroSection from "./components/Task 1/HeroSection";
import SkillsSection from "./components/Task 1/SkillsSection";

// Task 2
import AppBarComp from "./components/AppBarComp";
import CategoriesList from "./components/CategoriesList";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      {/* Task 1 */}
      <Navbar />
      <HeroSection />
      <SkillsSection />

      {/* Task 2 */}
      {/* <AppBarComp />
      <CategoriesList />
      <ProductsList /> */}
    </>
  );
}

export default App;
