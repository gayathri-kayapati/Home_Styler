import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "../../Images/heroImage.webp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <img src={heroImage} alt="hero image" />
    </div>
  );
}
