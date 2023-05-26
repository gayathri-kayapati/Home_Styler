import { Link } from "react-router-dom";

import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "../../Images/heroImage.webp";
import CategoriesPage from "../Categories/Categories";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={heroImage} alt="hero" height="70%" width="100%" />
        <Link to="/productsListPage">Shop now</Link>
      </div>
      <CategoriesPage />
      <Footer />
    </div>
  );
}
