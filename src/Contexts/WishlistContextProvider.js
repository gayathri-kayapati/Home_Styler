import { createContext, useState } from "react";

export const WishlistContext = createContext();
export default function WishlistContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const handleWishlistItems = (product) => {
    setWishlist([...wishlist, product]);
  };
  const handleRemoveWishlistItems = (product) => {
    const filteredWishlistItems = wishlist.filter(
      (item) => item.id !== product.id
    );
    setWishlist(filteredWishlistItems);
  };

  return (
    <div>
      <WishlistContext.Provider
        value={{ wishlist, handleWishlistItems, handleRemoveWishlistItems }}
      >
        {children}
      </WishlistContext.Provider>
    </div>
  );
}
