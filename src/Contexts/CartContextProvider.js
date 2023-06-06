import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const handleCartItems = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // export default function CartContextProvider({ children }) {
  //   const [cart, setCart] = useState([]);
  //
  //   const getCartData = async () => {
  //     try {
  //       const response = await fetch("/api/user/cart");
  //       const data = await response.json();
  //       setCart(data.cart);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //
  //   useEffect(() => {
  //     getCartData();
  //   }, []);
  //   const handleCartItems = (product) => {
  //     setCart([...cart, product]);
  //   };
  return (
    <div>
      <CartContext.Provider value={{ cart, handleCartItems }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
