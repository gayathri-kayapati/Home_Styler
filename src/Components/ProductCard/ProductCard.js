import { useContext } from "react";

import { WishlistContext } from "../../Contexts/WishlistContextProvider";
import "./productCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ product }) {
  const { wishlist, handleWishlistItems, handleRemoveWishlistItems } =
    useContext(WishlistContext);

  const {
    id,
    image,
    title,
    description,
    actualPrice,
    discountPrice,
    discountPercentage,
  } = product;

  const isAlreadyInWishlist = wishlist.find((item) => item.id === id);

  return (
    <div key={id} className="productCard">
      {isAlreadyInWishlist ? (
        <div className="circle">
          <AiFillHeart
            style={{ color: "red" }}
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveWishlistItems(product);
            }}
          />
        </div>
      ) : (
        <div className="circle">
          <AiOutlineHeart
            onClick={(e) => {
              e.stopPropagation();
              handleWishlistItems(product);
            }}
          />
        </div>
      )}

      <img src={image} alt={title} className="productImage" />
      <div className="productDescription">
        <h3 className="title">{title}</h3>
        <p className="subDescription">{description}</p>
        <span className="price">₹{discountPrice}</span>
        <span className="price actualPrice">₹{actualPrice}</span>
        <span className="price discountPercentage">{discountPercentage}%</span>
      </div>
    </div>
  );
}
