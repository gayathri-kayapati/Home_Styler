import "./productCard.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductCard({ product }) {
  const {
    id,
    image,
    title,
    description,
    actualPrice,
    discountPrice,
    discountPercentage,
  } = product;
  return (
    <div key={id} className="productCard">
      <div className="circle">
        <AiOutlineHeart />
      </div>
      <img src={image} alt={title} className="productImage" />
      <div className="productDescription">
        <h3 className="title">{title}</h3>
        <p className="subDescription">{description}</p>
        <span className="price">{discountPrice}</span>
        <span className="price actualPrice">{actualPrice}</span>
        <span className="price discountPercentage">{discountPercentage}</span>
      </div>
    </div>
  );
}
