import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import "./wishlistPage.css";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import { WishlistContext } from "../../Contexts/WishlistContextProvider";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
export default function WishlistPage() {
  const { wishlist, handleRemoveWishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();
  const handlerToBack = () => {
    navigate("/products/");
  };
  return (
    <div className="page">
      {wishlist.length === 0 && (
        <>
          <p>
            Your wishlist is empty! Looks like you haven’t added anything to
            your wishlist. Let’s change that.
          </p>
          <PrimaryButton clickHandler={handlerToBack} name="Back to shopping" />
        </>
      )}
      <div className="wishlistContainer">
        {wishlist?.map((product) => (
          <WishlistCard
            product={product}
            handleRemoveWishlistItems={handleRemoveWishlistItems}
          />
        ))}
      </div>
    </div>
  );
}
