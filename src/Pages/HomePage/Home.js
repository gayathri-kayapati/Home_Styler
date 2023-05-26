import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import CategoriesPage from "../Categories/Categories";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoriesPage />
      <Footer />
    </div>
  );
}
