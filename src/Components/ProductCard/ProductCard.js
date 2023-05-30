import "./productCard.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductCard({ product }) {
  const {
    _id,
    image,
    title,
    description,
    actualPrice,
    discountPrice,
    discountPercentage,
  } = product;
  return (
    <div key={_id} className="productCard">
      <div className="circle">
        <AiOutlineHeart />
      </div>
      <img src={image} alt={title} className="productImage" />
      <div className="productDescription">
        <h3 className="title">{title}</h3>
        <p className="subDescription">{description}</p>
        <span className="price">{actualPrice}</span>
        <span className="price discountPrice">{discountPrice}</span>
        <span className="price discountPercentage">{discountPercentage}</span>
      </div>
    </div>
  );
}
