import "./wishlistCard.css";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { CartContext } from "../../Contexts/CartContextProvider";

export default function WishlistCard({ product, handleRemoveWishlistItems }) {
  const { handleCartItems } = useContext(CartContext);
  const {
    id,
    image,
    title,
    description,
    actualPrice,
    discountPrice,
    discountPercentage,
  } = product;
  const moveToCart = () => {
    handleCartItems(product);
    handleRemoveWishlistItems(product);
  };
  return (
    <div key={id} className="productCard">
      <div className="circle">
        <RxCrossCircled
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveWishlistItems(product);
          }}
        />
      </div>
      <img src={image} alt={title} className="productImage" />
      <div className="productDescription">
        <h3 className="title">{title}</h3>
        <p className="subDescription">{description}</p>
        <span className="price">₹{discountPrice}</span>
        <span className="price actualPrice">₹{actualPrice}</span>
        <span className="price discountPercentage">{discountPercentage}%</span>
        <SecondaryButton clickHandler={moveToCart} name="Move To Cart" />
      </div>
    </div>
  );
}
