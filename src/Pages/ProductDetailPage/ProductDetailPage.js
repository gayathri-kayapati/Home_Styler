import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

import "./productDetailPage.css";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import { CartContext } from "../../Contexts/CartContextProvider";
import { WishlistContext } from "../../Contexts/WishlistContextProvider";

export default function ProductDetailPage() {
  const { products } = useContext(ProductsData);
  const { cart, handleCartItems } = useContext(CartContext);
  const { wishlist, handleWishlistItems, handleRemoveWishlistItems } =
    useContext(WishlistContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const getProductDetails = (products, productId) =>
    products.find((product) => product.id === productId);

  const redirectToCart = () => {
    navigate("/cart");
  };

  const isAlreadyInCart = (product) =>
    cart.find((item) => item.id === product.id);
  const isAlreadyInWishlist = (product) =>
    wishlist.find((item) => item.id === product.id);
  const product = getProductDetails(products, productId);
  return (
    <>
      {product ? (
        <div key={product.id} className="productDetailCard">
          <img
            src={product.image}
            alt={product.title}
            className="productImage"
          />

          <div className="productDescription">
            <h3 className="title">{product.title}</h3>
            <p className="subDescription">{product.description}</p>
            <h4 className="rating">
              {product.rating}
              <AiFillStar className="star" />
            </h4>
            <span className="price discountPrice">
              ₹{product.discountPrice}
            </span>
            <span className="price discountPercentage">
              {product.discountPercentage}% Off
            </span>
            <br />
            <span className="price actualPrice">₹{product.actualPrice}</span>
            <span className="taxs">Inclusive of all taxes</span>
            {isAlreadyInCart(product) ? (
              <PrimaryButton
                clickHandler={() => redirectToCart()}
                name="Go to cart"
              />
            ) : (
              <PrimaryButton
                clickHandler={() => handleCartItems(product)}
                name="Add to Cart"
              />
            )}

            {isAlreadyInWishlist(product) ? (
              <SecondaryButton
                clickHandler={(e) => {
                  e.stopPropagation();
                  handleRemoveWishlistItems(product);
                }}
                name="Remove from Wishlist"
              />
            ) : (
              <SecondaryButton
                clickHandler={(e) => {
                  e.stopPropagation();
                  handleWishlistItems(product);
                }}
                name="Add to Wishlist"
              />
            )}
            <p className="productDetails">
              <h4>Product Details:</h4>
              {product.details}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
