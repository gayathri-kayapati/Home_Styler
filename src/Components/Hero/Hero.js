import { Link } from "react-router-dom";

import heroImage from "../../Images/heroImage.webp";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="hero" height="70%" width="100%" />
      <Link to="/productsListPage">
        <button className="button">Shop Now</button>
      </Link>
    </div>
  );
}
