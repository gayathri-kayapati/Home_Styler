import { useContext } from "react";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import { WishlistContext } from "../../Contexts/WishlistContextProvider";
export default function WishlistPage() {
  const { wishlist, handleRemoveWishlistItems } = useContext(WishlistContext);
  return (
    <div>
      {wishlist?.map((product) => (
        <WishlistCard
          product={product}
          handleRemoveWishlistItems={handleRemoveWishlistItems}
        />
      ))}
    </div>
  );
}
