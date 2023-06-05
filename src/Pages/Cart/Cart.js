import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { CartContext } from "../../Contexts/CartContextProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";

export default function Cart() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  console.log(cart);
  const handlerToBack = () => {
    navigate("/products/");
  };
  return (
    <div>
      {cart.length === 0 && (
        <>
          <p>
            Your cart is empty! Looks like you haven’t added anything to your
            bag. Let’s change that.
          </p>
          <PrimaryButton clickHandler={handlerToBack} name="Back to shopping" />
        </>
      )}
      {cart?.map((product, idx) => (
        <div key={idx}>
          <ProductCard product={product} />
          <SecondaryButton
            // clickHandler={()=>handleWishlistItems(product)}
            className="wishlistBtn"
            name="Move to Wishlist"
          />
        </div>
      ))}
    </div>
  );
}
